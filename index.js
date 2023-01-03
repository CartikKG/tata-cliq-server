const express=require("express");
const connect=require("./db/db")
const usersControler=require('./all_Routes/usersRoutes')
const productControler=require('./all_Routes/productRoutes')
const cartRoutes=require('./all_Routes/cartRoutes')
const config=require('./config/config')
const cors=require('cors')
const passport = require('passport');
const cookieSession = require("cookie-session");
const expressSession = require('express-session');
const passportSetup = require('./controlers/passport');
const authRoute = require('./all_Routes/auth')
const wishlistRoute = require('./all_Routes/wishlistRoute')
const app=express();
app.use(express.json())
app.use(cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 }));
// app.use(cors())
// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//     res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
//     next(); 
// })
// app.use(cors({ origin: true }));
app.use('/users',usersControler)
app.use('/products',productControler)
app.use('/cart',cartRoutes)
app.use('/wishlist',wishlistRoute)

app.use(passport.initialize());
app.use(passport.session());

// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(
    cors({
        origin:'https://tata-cliq.netlify.app',
        methods:"GET,POST,PUT,DELETE",
        credentials:true
        
    })
    )
app.use('/auth',authRoute)



app.listen(config.PORT,async(req,res)=>{
    try {
        await connect();
        console.log(`Server Listening on port ${config.PORT}`);
    } catch (error) {
        console.log(error)
    }
})
