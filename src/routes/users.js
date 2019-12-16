const { Router } = require('express')
const router = new Router()

let users = [];

router.get("/", (req, res) => {
    res.render("index", { users })
})

router.get("/register-form", (req, res) => {
    res.render("register-form")
})

router.post("/register-form", (req, res) => {
    let { name, document } = req.body
    let newRegister = { name, document, date: new Date() }
    users.push(newRegister)
    res.redirect("/")
})

module.exports = router
