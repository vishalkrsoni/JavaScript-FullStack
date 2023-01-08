const Student = require('../../models/student');

const addStudent = async (req, res) => {
  let imageUrl = await req.file.location
  let fileName = await req.file.key
  const { name,
    rollNumber,
    standard,
    section,
    address } = req.body
  const studentData = {
    name,
    photo: imageUrl,
    rollNumber,
    standard,
    section,
    address
  }
  try {
    const newStudent = await Student.create(studentData)
    res.send({
      status: 'Added new student successfully',
      Student: newStudent
    })
  } catch (err) {
    res.status(500).send({
      status: 'error occurred',
      msg: err
    })
  }
}

const getAllStudents = async (req, res) => {
  try {
    let studentsList = await Student.find({})
    res.send({
      status: 'Details fetched successfully',
      total: studentsList.length,
      studentsList
    })
  } catch (err) {
    res.send({
      status: 'error fetching details',
      message: err
    })
  }
}

const getStudentById = async (req, res) => {
  const { studentId } = req.params
  try {
    const student = await Student.findById(studentId)
    if (!Student) {
      res.status(404).send({
        status: 'error',
        msg: 'Student not found'
      })
    } else {
      res.send({
        status: 'success',
        student
      })
    }
  } catch (err) {
    res.status(500).send({
      status: 'error',
      msg: 'Error fetching Student from DB'
    })
  }
}

const updateStudentById = async (req, res) => {
  const { studentId } = req.params
  const updatedData = req.body
  try {
    const updatedStudent = await Student.findByIdAndUpdate(studentId,
      updatedData, { new: true, runValidators: true })
    res.send({
      status: 'Updated details Successfully',
      updatedStudent
    })
  } catch (err) {
    res.status(500).send({
      status: ' Some error occurred',
      msg: 'Cannot Update Student'
    })
  }
}

const deleteStudentById = async (req, res) => {
  const { studentId } = req.params
  console.log(studentId)
  try {
    const student = await Student.findByIdAndDelete(studentId)
    res.send({
      status: 'Deleted Successfully',
      student
    })
  } catch (err) {
    res.status(500).send({
      status: 'Cannot delete internal error'
    })
  }
}

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudentById,
  deleteStudentById
}