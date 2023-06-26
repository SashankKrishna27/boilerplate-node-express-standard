import TaskModel from '../models/testSchema'

export const createTask = async (req, res) => {
    try {
        // get the task from the body
        const taskData = await req.body
        //create a new task then save
        await TaskModel.create(taskData)
            .then((createdTask) => {
                if (!createdTask)
                    return res.status(400).json({
                        success: false,
                        message: 'Task creation failed',
                        error: 'Unable get created task',
                    })
                return res.status(201).json({
                    success: true,
                    createdTask,
                })
            })
            .catch((error) => {
                return res.status(500).json({
                    success: false,
                    error: error.message,
                })
            })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
}
