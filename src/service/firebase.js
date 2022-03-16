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

  static saveVouchers(vouchers) {
    const batch = writeBatch(firestore);
    vouchers.forEach((voucher) => {
      const docRef = doc(collection(firestore, "vouchers"));
      const data = {
        id: voucher["#"],
        title: voucher["Coupon Title"],
        type: voucher["Coupon Type"],
        code: voucher["Coupon Code"],
        claimed: false,
      };
      batch.set(docRef, data);
    });
    batch.commit();
  }
}

module.exports = Firebase;
