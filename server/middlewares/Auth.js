import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]

        let decodeData = jwt.verify(token , process.env.JWT_SECRET)//*veryfing token eith jwt secret
        req.userId = decodeData?.id 
        //*making userid equal to decode data to verify token

        next()//*ask question or whatver is the req
    } catch (error) {
        console.log(error)
    }
}

export default auth;