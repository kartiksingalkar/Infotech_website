const { checkEmpty, checkNum, checkEmail, checkIsString } = require("../utils/validations.js");
const { insert_data } = require("../utils/queries.js");
const sendEmail = require("../utils/email.js");

const formData = async (req, res) => {
    const { fname, lname, email, contact, comp_name, service, message } = req.body.values
    const { section } = req.body
    try {
        checkEmpty(fname, "First Name")
        checkEmpty(lname, "Last Name")
        checkEmpty(email, "Email")
        checkEmpty(contact, "Contact Number")
        checkEmpty(comp_name, "Company Name")
        checkEmpty(service, "Service")

        checkEmail(email)
        checkNum(contact, "Contact Number")

        checkIsString(fname, "First Name")
        checkIsString(lname, "Last Name")

        if (contact.length < 10 || contact.length > 12)
            throw Error("Invalid Contact Number")

        let ts = Date.now();

        let date_ob = new Date(ts);
        let date = date_ob.getDate();
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();
        if(month < 10)
            month = "0"+month;
        // prints date & time in YYYY-MM-DD format
        console.log(year + "-" + month + "-" + date);
        let curr_date = year + "-" + month + "-" + date
        const table = "contact_form"
        const columns = ["fname", "lname", "email", "contact", "comp_name", "service", "message", "section", "submitted_on"]
        const data = [fname, lname, email, contact, comp_name, service, message, section, curr_date]

        const insert = await insert_data(table, columns, data)

        const email_body = `<html>
                                <head></head>
                                <body>
                                    <h3>First Name : ${fname}</h3><h3>Last Name : ${lname}</h3><h3>Email : ${email}</h3><h3>Contact : ${contact}</h3><h3>Company Name : ${comp_name}</h3>
                                    <h3>Service : ${service}</h3><h3>Message or Comment : ${message}</h3><h3>Section : ${section}</h3>
                                </body></html>`
        if (!insert)
            throw Error("Something went wrong")

        // sendEmail("ellorainfotech8667@gmail.com", "B2B Marketing Landing Page", email_body)
        //   sendEmail("sanketb03@gmail.com", "local-test", email_body)

        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).json({ msg: "Submitted" })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = { formData }