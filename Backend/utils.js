import jwt from 'jsonwebtoken';//npm install jsonwebtoken

export const generateToken=(user)=>{
    return jwt.sign(
    {
        _id:user._id,
        name:user.name,
        email:user.email,
        isadmin:user.isadmin,
    },
    process.env.JWT_SECRET || "somethingsecret",  //if env file doesn't exist
    {
        expiresIn:'30d'
    }
    
    )
}