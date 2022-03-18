const { initializeApp } = require("firebase/app");
const {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
} = require("firebase/auth");
const {
  getFirestore,
  writeBatch,
  doc,
  collection,
  getDoc,
  setDoc,
  where,
  query,
  limit,
  getDocs,
  updateDoc,
  arrayUnion,
} = require("firebase/firestore");
const config = require("./config.json");

const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone"); // dependent on utc plugin
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Colombo");

// Initialize Firebase

initializeApp(config);
const auth = getAuth();
const firestore = getFirestore();

let FREE_VOUCHER = {
  code: "DJXH3TMR",
  type: "5% Discount",
  title: "5% Discount",
};

class Firebase {
  static async login(email, password) {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  }

  static async register(email, phone, name) {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      "PASSWORD"
    );
    await setDoc(doc(firestore, "Users", response.user.uid), {
      email: email,
      phoneNumber: phone,
      name: name,
    });
  }

  static async logout() {
    await signOut(auth);
  }

  static rnJesus(settings) {
    const number = Math.floor(Math.random() * 100 + 1);
    console.log("number", number);
    if (
      number <= settings.premiumWinRate &&
      settings.premiumCountToday <= settings.premiumWinCount
    ) {
      return "PREMIUM";
    } else if (
      number <= settings.standardWinRate &&
      settings.standardCountToday <= settings.standardWinCount
    ) {
      return Math.random() < 0.5 ? "STANDARD" : "LOW";
    } else {
      return "LOSE";
    }
  }

  static async getSettings() {
    // Get main statistics
    const document = await getDoc(doc(firestore, "Settings", "statistics"));
    let settings;

    if (document.exists()) {
      settings = { ...document.data() };
    } else {
      throw Error("Failed to get statistics");
    }

    //Get daily winners
    const today = dayjs().format("YYYY-MM-DD");
    const dailyRef = doc(firestore, "DailyWinners", today);
    const dailyWinnerDocument = await getDoc(dailyRef);

    //If there are no daily winners for today
    if (!dailyWinnerDocument.exists()) {
      await setDoc(dailyRef, {
        premiumVoucherWinners: [],
        standardVoucherWinners: [],
        lowVoucherWinners: [],
      });

      settings = { ...settings, premiumWinCount: 0, standardWinCount: 0 };
    } else {
      const dailyWinnerData = dailyWinnerDocument.data();
      settings = {
        ...settings,
        premiumCountToday: dailyWinnerData.premiumVoucherWinners.length,
        standardCountToday:
          dailyWinnerData.standardVoucherWinners.length +
          dailyWinnerData.lowVoucherWinners.length,
      };
    }

    return settings;
  }

  static async getVoucherSnapshot(voucherType) {
    if (voucherType === "LOSE") return null;
    const collectionName =
      voucherType === "PREMIUM"
        ? "PremiumVouchers"
        : voucherType === "STANDARD"
        ? "StandardVouchers"
        : "LowVouchers";

    const collectionRef = collection(firestore, collectionName);
    const q = query(collectionRef, where("claimed", "==", false), limit(1));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) return null;
    return querySnapshot;
  }

  static async claimVoucher(voucherType, querySnapshot) {
    if (!auth.currentUser.uid) throw Error("Error while claiming voucher");
    const userInfo = await getDoc(
      doc(firestore, "Users", auth.currentUser.uid)
    );
    if (!userInfo.exists) throw Error("Error while claiming voucher");
    if (voucherType === "LOSE" || !querySnapshot) return FREE_VOUCHER;
    const collectionName =
      voucherType === "PREMIUM"
        ? "PremiumVouchers"
        : voucherType === "STANDARD"
        ? "StandardVouchers"
        : "LowVouchers";

    let claimedVoucher;

    if (!querySnapshot.empty) {
      claimedVoucher = querySnapshot.docs[0].data();
      await updateDoc(
        doc(firestore, collectionName, querySnapshot.docs[0].id),
        {
          claimed: true,
        }
      );

      //Get daily winners
      const today = dayjs().format("YYYY-MM-DD");
      const dailyRef = doc(firestore, "DailyWinners", today);

      const fieldName =
        voucherType === "PREMIUM"
          ? "premiumVoucherWinners"
          : voucherType === "STANDARD"
          ? "standardVoucherWinners"
          : "lowVoucherWinners";

      // Push winner to daily winners
      await updateDoc(dailyRef, {
        [fieldName]: arrayUnion({
          claimedBy: auth.currentUser?.uid || "N/A",
          claimedByName: userInfo.data().name || "N/A",
          claimedByEmail: auth.currentUser?.email || "N/A",
          claimedByPhone: userInfo.data().phoneNumber || "N/A",
          voucherCode: claimedVoucher.code,
          voucherId: querySnapshot.docs[0].id,
          claimedAt: new Date(),
        }),
      });
    } else {
      claimedVoucher = FREE_VOUCHER;
    }

    return claimedVoucher;
  }

  static async getWinningVoucher() {
    const settings = await this.getSettings();
    return this.rnJesus(settings);
  }

  static async claimWinningVoucher(voucherType) {
    const querySnapshot = await this.getVoucherSnapshot(voucherType);

    let claimedVoucher;

    if (!querySnapshot || querySnapshot.empty) claimedVoucher = FREE_VOUCHER;
    else claimedVoucher = await this.claimVoucher(voucherType, querySnapshot);
    return claimedVoucher;
  }

  static async playGame() {
    const settings = await this.getSettings();
    const voucherType = this.rnJesus(settings);
    const querySnapshot = await this.getVoucherSnapshot(voucherType);

    let claimedVoucher;

    if (!querySnapshot || querySnapshot.empty) claimedVoucher = FREE_VOUCHER;
    else claimedVoucher = await this.claimVoucher(voucherType, querySnapshot);

    console.log(settings, voucherType, claimedVoucher);
  }

  /* THIS METHOD SHOULD ONLY BE USED IN ONE:OFF SCRIPTS */
  static async saveVouchers(vouchers) {
    const batch = writeBatch(firestore);
    vouchers.forEach((voucher) => {
      const name =
        voucher["Coupon Type"] === "Premium"
          ? "PremiumVouchers"
          : voucher["Coupon Type"] === "10% Discount"
          ? "StandardVouchers"
          : "LowVouchers";
      const docRef = doc(collection(firestore, name));
      const data = {
        title: voucher["Coupon Title"],
        type: voucher["Coupon Type"],
        code: voucher["Coupon Code"],
        claimed: false,
      };
      batch.set(docRef, data);
    });
    await batch.commit();
  }
}

export default Firebase;
