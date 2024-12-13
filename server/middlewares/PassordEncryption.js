const bcrypt = require("bcrypt")

class PasswordHashing
{
    #saltRound
    #plain_password
    #hashed_password
    
    constructor(password = null,hashedPassword = null){
        this.#saltRound = 12
        this.#plain_password = password
        this.#hashed_password = hashedPassword
        }



    #genSalt = async ()=>{
        try {
            return await bcrypt.genSalt(this.#saltRound)
        } catch (error) {
            console.log('Error generating salt:', error)
            return -1
        }
    }

    hashPassword = async()=>{
        try {
            let salt = await this.#genSalt()
            if(salt!=-1&&this.#plain_password!=null)
            {
                this.#hashed_password = await bcrypt.hash(this.#plain_password,salt)
                // console.log(`-------    ${this.#hashed_password}     -------`)
                return this.#hashed_password
            }
            else
                console.log("somthing went wrong")
        } catch (error) {
            console.log("somthing went wrong")
        }
    }

    verfiyPassword = async ()=>{
        try {
            if(this.#hashed_password!=null,this.#plain_password!=null)
            {
                //console.log(`plainpass:${this.#plain_password} , hashedpass:${this.#hashed_password}`)
                
                let res = await bcrypt.compare(this.#plain_password,this.#hashed_password)
                if(res==true)
                    return 1
                else
                    return 0
            }
            else
            {
                console.log(`you must provide the password and the hashed one`)
                return -1
            }
                
        } catch (error) {
            console.log(`something wrong within the verification ${error}`)
        }
    }
}

module.exports =  PasswordHashing