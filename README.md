# Express Socket Mongoose Chat Application
This application was created using Express, Socket.io, Mongoose with Template engine Ejs 


## Framework
- Express Js

## Libraries
- Socket.io
- Mongoose

## Packages
- ejs (Template engine)
- nodemon (Dev)
- dotenv (Handle Environment)
- express (Framework)
- express-validator (Backend Validator)
- mongoose (DB)
- multer (File Upload)
- cookie-parser
- jsonwebtoken (JWT)
- bcrypt (Password Hash)
- http-errors (Error creation)

----
## SCHEMAS

### 1. userSchema

I have named it ```peopleSchema``` because of smooth Hostinh issue. It I named it users, then it may couse error while hosting in remote free hosting.
[Code Reference](https://github.com/engrajibulhasan/express-socket-chat-application/blob/master/models/People.js) 
```javascript
const peopleSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            trim:true,
            lowercase:true
        },
        mobile:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
        avatar:{
            type:String,
        },
        role:{
            type:String,
            enum:["admin","user"],
            default:"user"
        }
    },
    {
        timestamps:true
    }
);
```



