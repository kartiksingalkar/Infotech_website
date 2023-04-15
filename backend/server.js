require('dotenv').config();
const express = require("express")
const form = require("./routes/form.js")
const auth = require("./routes/auth.js")
const blog = require("./routes/blog.js")
const cors = require("cors")
const cookieParser = require('cookie-parser');

// const cookie = require('cookie-parser');

const { con } = require("./models/db.js")

const app = express()
app.use(cors({
  origin: ["http://localhost:3001","http://localhost:3000", "http://10.10.10.35:3001"],
  methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
  credentials: true
}));

app.use(express.json())
app.use(cookieParser())
app.use('/uploads', express.static(__dirname + '/uploads'));


const port = process.env.PORT || 4001
app.use('/auth', auth)
app.use('/blog', blog)
app.use('/api', form)


app.listen(port, () => {
  console.log("server is running on port ", port)
});
