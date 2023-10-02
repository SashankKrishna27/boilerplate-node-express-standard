import { Router } from 'express'
const userController = require('../controllers/userController')

const userRoute = Router()
userRoute.post('/v1/create-user', userController.createUser)
export default userRoute;
