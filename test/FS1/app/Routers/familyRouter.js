const { Router } = require('express')
const {
  getFamilyByStudentId,
  getFamilyById,
  addFamilyByStudentId,
  updateFamilyById,
  deleteFamilyById,
  getAllFamily
} = require('../Routes/Controllers/familyController');

const familyRouter = Router()

familyRouter.get('/', getAllFamily)
familyRouter.get('/parent/:parentId', getFamilyById)

familyRouter.put('/:parentId', updateFamilyById)
familyRouter.delete('/:parentId', deleteFamilyById)

familyRouter.get('/:studentId', getFamilyByStudentId)
familyRouter.post('/:studentId', addFamilyByStudentId)

module.exports = familyRouter