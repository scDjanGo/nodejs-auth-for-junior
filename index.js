const express = require("express")
const mongoose = require("mongoose")
const authRouter = require("./authRouter")
const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
    try {
        const db_password = encodeURIComponent("madDjanGo0809003")
        await mongoose.connect(`mongodb+srv://madDjanGo:${db_password}@cluster0.7i8wr.mongodb.net/auth-roles`)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    }catch(e) {
        console.log(e)
    }
}

start()