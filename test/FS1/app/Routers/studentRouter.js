const { Router } = require('express')
const studentRouter = Router()
const { uploadImageTos3 } = require('../Services/uploadToS3')
const {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudentById,
  deleteStudentById
} = require('../Routes/Controllers/studentController');


// studentRouter.use(authMiddleware)

// general routes
studentRouter.get('/', getAllStudents)
studentRouter.get('/:studentId', getStudentById)

// verified Routes
studentRouter.post('/', uploadImageTos3.single('file'), addStudent)
studentRouter.put('/:studentId', updateStudentById)
studentRouter.delete('/:studentId', deleteStudentById)

module.exports = studentRouter