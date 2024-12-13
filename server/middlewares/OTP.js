const crypto = require("crypto")
const redis = require("./redis")
const axios = require('axios')


generateOTP= ()=> {
    let otp = crypto.randomInt(100000, 999999).toString();
    return otp
}


exports.sendOTP = async (req,res)=> {
    
    let email
    if(req.user != null)
    {
        email = req.user.email.trim()
    }
    else if(req.body.email != null)
    {
        email = req.body.email.trim()
    }
    else{
        console.log("email not found")
        return res.status(500).json({err:"email must be provided"})
    }
    let otp = generateOTP()
    const data = {
        from: { email: 'no-reply@trial-vywj2lpej0qg7oqz.mlsender.net' },
        to: [{ email: email }],
        subject: 'Your OTP Code',
        text: `Your OTP code for changing your password is ${otp}`
    };

    try {
        const response = await axios.post('https://api.mailersend.com/v1/email', data, {
            headers: {
                'Authorization': `Bearer mlsn.1c66caa497ddce5e5aa47aa681d67aae9852df9ae912552d97ce9c401d05a054`,
                'Content-Type': 'application/json'
            }
        });
        redis.storeOTP(email,otp)
        return res.status(200).json({msg:"email sent"})
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ err: "Failed to send OTP" });
    }
}

exports.verifyOTP = async(req,res,next)=>{
    let email
   
    //console.log("ddd")
    let otp = req.body.OTP.trim()
    // console.log("otp :"+otp)
    if(req.user != null)
    {
        email = req.user.email.trim()
    }
    else if(req.body.email != null)
    {
        email = req.body.email.trim()
    }
    else{
        console.log("email not found")
        return res.status(500).json({err:"email must be provided"})
    }
    if(otp!=null&&otp.length!=6)
    {
        return res.status(401).json({err:"invalid otp"})
    }
    else
    {
        try {
            let OTP = await redis.getOTP(email)
            console.log(OTP)
            if(otp===OTP)
            {
                // res.status(200).json({ msg: "OTP verified" });
                // console.log("otp verified")
                req.otpVerification = "otp verified"
                next()
            }
            else {
                return res.status(401).json({ err: "invalid otp" });
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }

    }
}

