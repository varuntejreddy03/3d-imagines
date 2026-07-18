const mammoth = require('mammoth')
const fs = require('fs')
const path = require('path')

const blogsDir = path.join(__dirname, 'public', 'blogs')
const outDir = path.join(__dirname, 'public', 'blogs', 'extracted')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)

const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.docx'))

async function extract() {
  for (const file of files) {
    const result = await mammoth.extractRawText({ path: path.join(blogsDir, file) })
    const outFile = path.join(outDir, file.replace('.docx', '.txt'))
    fs.writeFileSync(outFile, result.value)
    console.log('Extracted:', file)
  }
}

extract().catch(console.error)
