const express=require('express')
const mongoose=require('./app/config/database')
const router=require('./app/config/routes')
const app=express()
const port=8080

app.use(express.json())
app.use('/',router)


app.listen(()=>{
    console.log(`listening on port,${port}`)
})
