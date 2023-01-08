const dotenv = require('dotenv')
const aws = require('aws-sdk');
const multer = require('multer')
const multerS3 = require('multer-s3')

dotenv.config()

// configuring  aws instance
aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});
const Bucket = process.env.AWS_BUCKET_NAME
const s3 = new aws.S3()

// configuring for multer 
const uploadImageTos3 = multer({
  storage: multerS3({
    bucket: Bucket,
    s3: s3,
    key: (req, photo, cb) => {
      cb(null, Date.now() + photo.originalname)
    }
  })
})


module.exports = {
  uploadImageTos3
}


// // app.get('/list', async (req, res) => {
// //   try {
// //     let pictures = await s3.listObjectsV2({ Bucket }).promise()
// //     let picsList = pictures.Contents.map(item => item.Key)
// //     res.send({
// //       picsList
// //     })
// //   } catch (err) {
// //     res.send(err)
// //   }
// // })

// // app.get('/:fileName', async (req, res) => {
// //   const fileName = req.params.fileName
// //   try {
// //     let pic = await s3.getObject({
// //       Bucket,
// //       Key: fileName
// //     }).promise()
// //     res.send(pic.Body)
// //   } catch (err) {
// //     res.send(err)
// //   }
// // })

// // app.delete('/:fileName', async (req, res) => {
// //   const fileName = req.params.fileName
// //   try {
// //     let pic = await s3.deleteObject({
// //       Bucket,
// //       Key: fileName
// //     }).promise()
// //     res.send({
// //       message: 'deleted',
// //       pic
// //     })
// //   } catch (err) {
// //     res.send(err)
// //   }
// // })

