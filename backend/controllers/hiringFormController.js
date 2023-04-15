const { checkEmpty, checkNum, checkEmail, checkIsString, checkPhone } = require("../utils/validations.js")
const { insert_data } = require("../utils/queries.js")
const fs = require("fs")

const hiringForm = (req, res) => {
    try {

        if (req.file) {
            const { originalname, path } = req.file;

            const parts = originalname.split('.');
            const ext = parts[parts.length - 1];
            const name = parts[0].replace(/\\s/g,"-")
            const fileTypes = /jpeg|jpg|png|pdf|doc|docx|vnd.openxmlformats-officedocument.wordprocessingml.document/;
            const mimetype = fileTypes.test(req.file.mimetype);
            if(!mimetype)
                throw new Error ("Unsoperted file type")

            let path1 = path.replaceAll("\\", "/");
            const path2 = path1.split("/");

            const newName1 = path2[path2.length - 1];
            const newName2 = name+"_"+newName1
            const newPath = "uploads/hiringForm/"+newName2 + '.' + ext;
            fs.renameSync(path, newPath);

            const { full_name, email, contact, post_name, emp_status, linkedin_url } = JSON.parse(req.body.values)

            checkEmpty(full_name, "Full Name")
            checkEmpty(email, "Email")
            checkEmpty(contact, "Contact")
            checkEmpty(post_name, "Position")
            checkEmpty(emp_status, "Employeement Status")
            checkEmpty(linkedin_url, "Linkedin Link")
            checkIsString(full_name, "Full Name")
            checkEmail(email)
            checkPhone(contact)

            const columns = ["full_name ", "email ","contact ", "post_name ","emp_status", "linkedin_url ", "resume "]
            const data = [full_name, email, contact, post_name, emp_status, linkedin_url, newPath]

            const insert_d = insert_data("hiring_form", columns, data)

        }
        else {
            throw new Error("Please Upload Resume")
        }

        // const {values} = req.body
        // console.log(values)
        res.header("Access-Control-Allow-Origin", "*");
        res.json({ msg: "submission successful" })
    } catch (error) {
        console.log(error);
        res.status(401).json({ err: error.message });
    }
}

module.exports = {
    hiringForm
}