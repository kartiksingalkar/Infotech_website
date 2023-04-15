const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const { insert_data, read_data } = require('../utils/queries')

const register = (req, res) => {
    const { username, password } = req.body
    try {
        const columns = ["username", "password"]
        const data = [username, bcrypt.hashSync(password, salt)]
        const userDoc = insert_data(process.env.USER_TABLE, columns, data)
        res.json({ msg: userDoc })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const login = async (req, res) => {
    const { username, password } = req.body
    try {
        const condition = " username"
        const data = [username]
        const get = "*"

        const userDoc = await read_data(get, process.env.USER_TABLE, condition, data)
        const passOk = bcrypt.compareSync(password, userDoc[0].password)

        if (passOk) {
            jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
                if (err)
                    throw err
                res.cookie('token', token).json({ id: userDoc._id, username })
            })
            // res.status(200).json({msg: "logged in", data: userDoc })
        }
        else {
            throw new Error("Wrong credentials")
        }
    } catch (error) {
        res.status(400).json({ err: error.message })

    }
}

const logout = (req, res) => {
    res.cookie('token', '').json('ok')
}

module.exports = {
    login, register, logout
}