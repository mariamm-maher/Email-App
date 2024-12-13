const jwt = require("jsonwebtoken")
require("dotenv").config()
const redis = require("../middlewares/redis")



class token
{
    #token
    #payload
    #secretKey
    #decode
    constructor(){
        // this.#payload = args.playload
        this.#secretKey = process.env.JWT_SECRET
        // console.log(`Secret Key: ${this.#secretKey}`);
        // console.log(process.env.JWT_SECRET)
    }

    generateToken = (args)=>{
        this.#payload = args
        // console.log(this.#payload)
        this.#token = jwt.sign(this.#payload,this.#secretKey,{expiresIn:"30m"})
        //console.log(this.#token)
        return this.#token
    }

    verifyToken = async (args)=>
    {
        try {
            this.#decode = await jwt.verify(args,this.#secretKey)
            // console.log("decoded form",this.#decode)
            return this.#decode
        } catch (error) {
            if(error.name === 'TokenExpiredError')
            {
                console.log("--token expired--")
                return 0
            }
            else
            {
                console.log(`error in token validation ${error}`)
                return -1
            }
        }
    }
}

module.exports = new token()