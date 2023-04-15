const { checkEmail, checkEmpty } = require("../utils/validations.js");
const { insert_data, read_data } = require("../utils/queries.js")
const sendEmail = require("../utils/email.js");
const newsLetterController = async (req, res) => {
  console.log("Body = ", req.body);
  const { newsletter } = req.body;
  try {

    checkEmpty(newsletter, "Email")
    checkEmail(newsletter);
    // console.log(newsletter);

    const table = "newsletter"
    const columns = ["email"]
    const data = [newsletter]
    const get = "id"
    const condition = 'email'

    const read = await read_data(get, table, condition, newsletter)

    if (read.length != 0) {
      const em = sendEmail(newsletter, "local-test", "test")
      console.log(em)
      return res.status(200).json({ msg: "Thank you for subscribing" });
    }

    const insert = insert_data(table, columns, data)
    console.log(insert)

    if (!insert)
      throw Error("Something went wrong")

    const em = sendEmail(newsletter, "local-test", "test")
    console.log(em)
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).json({ msg: "data inserted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { newsLetterController };


// ashwini3495@godaddy.com