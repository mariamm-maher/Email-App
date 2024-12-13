const redis =require('redis')
const client = redis.createClient();
client.on('connect', () => {
    console.log('Connected to Redis');
});

client.on('error', (err) => {
    console.error('Redis error:', err);
});

client.connect().catch(console.error);

exports.checkBlacklist = async (req,res, next) => {
    const token = req.token
    try {
        const reply = await client.get(token);
        if (reply === "blacklisted") {
            return res.status(401).send({ message: 'Token is blacklisted' });
        }
        else
            return next();
    } catch (err) {
        console.error('Error retrieving key:', err);
    }
};

exports.addtoBlacklist = (token)=>{
    client.setEx(token,3600,'blacklisted', (err) => {
        if (err) {
            console.error('Error blacklisting token:', err);
        }
    });
    return 1;
}


exports.storeOTP = (email,otp)=>{
    let Email = email+"OTP"
    client.setEx(Email,300,otp) //store otp for 5min
}

exports.getOTP = async (email)=>{
    try {
        let Email = email+"OTP"
        return  await client.get(Email);
    } catch (err) {
        console.error('Error retrieving key:', err);
    }
}