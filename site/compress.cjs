const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const galleryDir = path.join(__dirname, 'public', 'gallery')
const folders = ['architectural', 'industrial', 'locomotive']

async function compress() {
  let total = 0, saved = 0
  for (const folder of folders) {
    const dir = path.join(galleryDir, folder)
    const files = fs.readdirSync(dir)
    for (const file of files) {
      if (!/\.(jpe?g|png)$/i.test(file)) continue
      const filePath = path.join(dir, file)
      const before = fs.statSync(filePath).size
      const tmp = filePath + '.tmp'
      await sharp(filePath)
        .resize({ width: 1200, withoutEnlargement: true })
        .jpeg({ quality: 72, progressive: true, mozjpeg: true })
        .toFile(tmp)
      fs.renameSync(tmp, filePath)
      const after = fs.statSync(filePath).size
      total += before
      saved += (before - after)
      console.log(`${folder}/${file}: ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB`)
    }
  }
  console.log(`\nTotal saved: ${(saved/1024/1024).toFixed(2)} MB of ${(total/1024/1024).toFixed(2)} MB`)
}

compress().catch(console.error)
