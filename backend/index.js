const cookieSession = require('cookie-session')
const express = require('express')
const passport = require('passport')
const cors = require('cors')

const app = express()

const PORT = 3001

app.use(cookieSession({
    name: "Sesion",
    keys: ["Ilgor dev"],
    maxAge: 24 * 60 * 60 * 100
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}))


app.get('/', (req, res) => {
    res.send("Hello from Ilgorbek MERN Developer")
})

app.listen(PORT, () => {
    console.log(`Server runnning on PORT ${PORT}`);
})