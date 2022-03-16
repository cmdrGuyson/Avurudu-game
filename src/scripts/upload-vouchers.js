const csv = require("csvtojson");
const Firebase = require("../service/firebase");
const csvFilePath = "voucher.csv";

const upload = async () => {
  try {
    const array = await csv().fromFile(csvFilePath);
    const vouchers = [];
    array.forEach((item) => {
      if (item["Coupon Title"]) {
        vouchers.push(item);
      }
    });
    console.log(vouchers, vouchers.length);
    await Firebase.saveVouchers(vouchers);
  } catch (error) {
    console.error(error);
  }
};

upload();
