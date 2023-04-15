const fs = require('fs');
const { insert_data, read_data, update_data } = require('../utils/queries')
const { checkEmpty } = require("../utils/validations.js")

const jwt = require('jsonwebtoken');

const get_profile = (req, res) => {
    const { token } = req.cookies;
    try {
        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, {}, (err, info) => {
                if (err) throw err;
                res.json(info)
            })
        }
        // res.json(req.cookies)
    } catch (error) {
        // console.log(error)
    }
}

const new_post = (req, res) => {
        if (req.file) {
            const { originalname, path } = req.file;
            const parts = originalname.split('.');
            const ext = parts[parts.length - 1];
            let path1 = path.replace("\\", "/");
            const newPath = path1 + '.' + ext;
            fs.renameSync(path, newPath);
            // console.log(path1)
            const { token } = req.cookies;
            jwt.verify(token, process.env.JWT_SECRET, {}, async (err, info) => {
                if (err) throw err;
                const { title, summary, content } = req.body;
                try {
                    checkEmpty(title, "title")
                    checkEmpty(summary, "summary")
                    checkEmpty(content, "content")
                    const table = 'post'
                    const columns = ['title', 'summary', 'content', 'cover']
                    const data = [title, summary, content, newPath]
                    const postDoc = insert_data(table, columns, data)
                    res.json(postDoc);
                } catch (error) {
                    return res.status(401).json({err: error.message})
                }
            });
        }
        else
        return res.status(401).json("Title image not found")

}

const get_post = async (req, res) => {
    const get = "*"
    const postDoc = await read_data(get, process.env.POST_TABLE)
    res.json(postDoc);
}

const get_single_post = async (req, res) => {
    const { id } = req.params;
    const get = "*"
    const condition = 'id'
    const data = [id]
    const postDoc = await read_data(get, process.env.POST_TABLE, condition, data)
    res.json(postDoc);
}

const update_post = async (req, res) => {
    let newPath = null;
    if (req.file) {
        // console.log(req.file)
        const { originalname, path } = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        newPath = path + '.' + ext;
        fs.renameSync(path, newPath);
    }

    const { token } = req.cookies;
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, info) => {
        if (err) throw err;
        const { id, title, summary, content } = req.body;
        const postDoc = await read_data("*", "post", " id", [id])

        if (newPath)
            cover = newPath
        else
            cover = postDoc[0].cover
        const table = "post"
        const column = `title = '${title}', summary = '${summary}', content = '${content}', cover = '${cover}' `
        const condition = 'id'
        const data = [id]
        const update = await update_data(table, column, condition, data)
        res.json(postDoc);
    });
}

module.exports = {
    get_profile,
    new_post,
    get_post,
    get_single_post,
    update_post
}