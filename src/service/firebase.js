const { initializeApp } = require("firebase/app");
const {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
} = require("firebase/auth");
const {
  getFirestore,
  writeBatch,
  doc,
  collection,
} = require("firebase/firestore");
const config = require("./config.json");

// Initialize Firebase

initializeApp(config);
const auth = getAuth();
const firestore = getFirestore();

class Firebase {
  static async login(email, password) {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  }

  static async logout() {
    await signOut(auth);
  }

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
        id: voucher["#"],
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

module.exports = Firebase;
