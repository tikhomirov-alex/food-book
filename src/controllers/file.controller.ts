import path from 'path'
import fs from 'fs'
import { Controller } from '../types'
import { UploadedFile } from 'express-fileupload'

export const uploadFile: Controller = (req, res) => {
  console.log(req.files)
  try {
    if (!req.files || !req.files.file || req.files.file instanceof Array) {
      return res.status(500).json({ msg: 'File not found' })
    }

    const file: UploadedFile = req.files.file
    const date = new Date()
    const day = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

    const uploadDir = path.join(__dirname, '../upload', day)
    if (!fs.existsSync(uploadDir)) {
      fs.mkdir(uploadDir, (err) => {
        return res.status(500).json({ msg: 'Error file load: ', err})
      })
    }

    const fileType = path.extname(file.name)
    const newName = `${+Date.now()}${fileType}`
    let uploadPath = path.join(
      uploadDir,
      newName
    )

    file.mv(uploadPath, (error) => {
      if (error) {
        console.log(
          'Error file moving: From - ',
          file.name,
          '; To - ',
          uploadPath
        )
        return res.status(500).json({ msg: `Server error: ${error}` })
      }
    })

    const filePath = `/${day}/${newName}`

    res.status(200).json({ filePath })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}
