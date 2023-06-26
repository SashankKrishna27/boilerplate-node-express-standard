import { Router } from 'express'
const createTask = require('../controllers/testController')

const testRouter = Router()
testRouter.post('/tasks', createTask.createTask)
export default testRouter;
