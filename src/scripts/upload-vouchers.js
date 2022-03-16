const csv = require("csvtojson");
const Firebase = require("../service/firebase");
const csvFilePath = "voucher.csv";

const upload = async () => {
  try {
    const array = await csv().fromFile(csvFilePath);
    console.log(array);
    await Firebase.saveVouchers(array);
  } catch (error) {
    console.error(error);
  }
};

upload();
