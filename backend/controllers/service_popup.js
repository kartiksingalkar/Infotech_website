const { checkEmpty, checkNum, checkEmail, checkIsString } = require("../utils/validations.js");
const { insert_data, read_data, update_data, delete_data } = require("../utils/queries.js")
const { send_otp } = require("../utils/sms.js")
const sendEmail = require("../utils/email.js");

const template = (data) => {
    const msg = `Name = ${data.name} <br />
                Email = ${data.email} <br />
                Contact = ${data.contact} <br />
                Service = ${data.service} <br />
                Verified = Yes
                `
    return msg;
}


const service_popup = async (req, res) => {
    const { name, email, service, mobile } = req.body.data
    const { ip, countryName, countryCode, city } = req.body.state
    // console.log(req.body)
    try {

        checkEmpty(name, "Name")
        checkEmpty(email, "Email")
        checkEmpty(service, "Service")
        checkEmpty(mobile, "Contact")

        checkIsString(name, "Name")
        checkEmail(email)
        checkNum(mobile, "Contact Number")

        if (mobile.length != 10)
            throw new Error("Invalid mobile number")

        const contact = countryCode + mobile
        console.log("country code = ", contact)
        console.log(contact)

        const present = await read_data("*", "services_popup", "contact", contact, "AND verified = 1")
        if (present.length > 0) {
            const msg = template(req.body.data)

            // sendEmail(process.env.EMAIL1, service, msg)
            const columns = ["name", "email", "service", "contact", "verified", "city", "country"]
            const data = [name, email, service, (contact), 1, city, countryName]
            const insert = insert_data("services_popup", columns, data)
            return res.status(200).json({ msg: "Submitted Successfully", show:"0" })
        }
        const read = await read_data("*", "verify_otp", "contact", contact)
        if (read.length > 0) {
            console.log("Verify")
            console.log("database = ", read[0].otp)

            // send_otp(contact, read[0].otp)
            res.header("Access-Control-Allow-Origin", "*");
            return res.status(200).json({ msg: "OTP Sent", show: "1" })
        }

        let otp = Math.floor(100000 + Math.random() * 900000);

        const otp_columns = ["contact", "otp"]
        const otp_data = [contact, otp]
        const insert_otp = insert_data("verify_otp", otp_columns, otp_data)

        // send_otp(contact, otp)

        const columns = ["name", "email", "service", "contact", "verified", "city", "country"]
        const data = [name, email, service, (contact), 0, city, countryName]
        const insert = insert_data("services_popup", columns, data)

        const msg = template(req.body.data)

        // sendEmail(email, service, msg)
        console.log(insert)
        console.log(insert_otp)
        console.log("Generated otp: " + otp);
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).json({ msg: "OK" })

    } catch (error) {
        // console.log(error)
        res.status(400).json({ error: error.message })
    }
}

const verify_otp = async (req, res) => {
    const otp = req.body.fotp
    console.log(req.body.fotp)


    try {


        const read = await read_data("*", "verify_otp", ["otp"], [otp])
        console.log(read)
        if (read.length < 1) {
            const count = req.cookies
            console.log("count = ", count)
            throw new Error("Invalid OTP")
        }

        const update = await update_data(process.env.SERVICE_POPUP, ["verified"], "contact", [1, read[0].contact])
        // console.log("Update = ",update[0].affectedRows)
        const delete_otp = await delete_data("verify_otp", "contact", [read[0].contact])
        res.status(200).json({ msg: "OTP verified" })


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { verify_otp, service_popup }