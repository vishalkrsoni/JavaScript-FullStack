const Family = require('../../models/family');
const Student = require('../../models/student');


const addFamilyByStudentId = async (req, res) => {
  const { studentId } = req.params
  const {
    name,
    phoneNumber,
    email,
    occupation,
    designation
  } = req.body

  try {
    const newParent = await Family.create({
      name,
      phoneNumber,
      email,
      occupation,
      designation,
      studentId
    })
    const student = await Student.findByIdAndUpdate(studentId, {
      $push: {
        parents: newParent._id
      }
    })
    res.send({
      status: 'success',
      parent: newParent
    })
  } catch (error) {
    console.log(error)
    res.send({
      status: 'error',
      msg: 'Not added successfully'
    })
  }
}

const getFamilyByStudentId = async (req, res) => {
  const { studentId } = req.params
  try {
    let student = await Student.findById(studentId)
    if (!student) {
      res.status(404).send({
        status: 'error',
        msg: 'student not found'
      })
    }
    else {
      let family = await student.populate('parents')
      res.send({
        student: student.name,
        Parents: family,
        status: 'Details fetched successfully',
      })
    }
  } catch (err) {
    res.send({
      status: 'error  details',
      message: err
    })
  }
}

const getAllFamily = async (req, res) => {
  try {
    const family = await Family.find({})
    if (!family) {
      res.status(404).send({
        status: 'error',
        msg: 'No Family found'
      })
    } else {
      res.send({
        status: 'success',
        Family: family
      })
    }
  } catch (err) {
    res.status(500).send({
      status: 'error',
      msg: 'Error fetching Family from DB'
    })
  }
}

const getFamilyById = async (req, res) => {
  const { parentId } = req.params
  try {
    const family = await Family.findById(parentId)
    console.log(family)
    if (!family) {
      res.status(404).send({
        status: 'error',
        msg: 'Family not found'
      })
    } else {
      res.send({
        status: 'success',
        Family: family
      })
    }
  } catch (err) {
    res.status(500).send({
      status: 'error',
      msg: 'Error fetching Family from DB'
    })
  }
}

const updateFamilyById = async (req, res) => {
  const { parentId } = req.params
  const updatedData = req.body
  console.log(parentId, updatedData)
  try {
    const updatedFamily = await Family.findByIdAndUpdate(parentId,
      updatedData, { new: true, runValidators: true })
    if (!updatedFamily) {
      res.send({
        status: 'No such family',
      })
    }
    else {
      res.send({
        status: 'Updated details Successfully',
        updatedFamily
      })
    }
  } catch (err) {
    res.status(500).send({
      status: ' Some error occurred',
      msg: 'Cannot Update Family'
    })
  }
}

const deleteFamilyById = async (req, res) => {
  const { parentId } = req.params
  console.log(parentId)
  try {
    const deletedParent = await Family.findByIdAndDelete(parentId)
    const studentId = deletedParent.studentId
    const updateStudent = await Student.updateOne({ _id: studentId }, {
      $pull: {
        parents: parentId
      }
    })
    res.send({
      status: 'Deleted Successfully',
      updateStudent
    })
  } catch (err) {
    res.status(500).send({
      status: 'Cannot delete internal error'
    })
  }
}

module.exports = {
  getFamilyByStudentId,
  getFamilyById,
  addFamilyByStudentId,
  updateFamilyById,
  deleteFamilyById,
  getAllFamily
}
