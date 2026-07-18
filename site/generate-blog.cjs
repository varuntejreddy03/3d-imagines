const fs = require('fs')
const path = require('path')

const extractedDir = path.join(__dirname, 'public', 'blogs', 'extracted')
const outFile = path.join(__dirname, 'src', 'data', 'blogPosts.js')

const meta = {
  'Architectural Models for Real Estate Marketing.txt': {
    slug: 'real-estate-architectural-models',
    category: 'Real Estate',
    date: 'June 2026',
    image: '/gallery/architectural/img-13.jpeg',
    readTime: '8 min read',
  },
  'Best Architectural Model Makers in Hyderabad.txt': {
    slug: 'best-architectural-model-makers-hyderabad',
    category: 'Guides',
    date: 'May 2026',
    image: '/gallery/architectural/img-04.jpeg',
    readTime: '7 min read',
  },
  'Common Architectural Model Mistakes.txt': {
    slug: 'common-architectural-model-mistakes',
    category: 'Insights',
    date: 'April 2026',
    image: '/gallery/architectural/img-07.jpeg',
    readTime: '9 min read',
  },
  'Complete Guide to Scale Model Making Everything You Need to Know About Custom Scale Models.txt': {
    slug: 'complete-guide-scale-model-making',
    category: 'Guides',
    date: 'March 2026',
    image: '/gallery/industrial/img-24.jpeg',
    readTime: '10 min read',
  },
  'How Much Does an Architectural Model Cost in India.txt': {
    slug: 'architectural-model-cost-india',
    category: 'Pricing',
    date: 'February 2026',
    image: '/gallery/architectural/img-12.jpeg',
    readTime: '8 min read',
  },
  'How to Choose a Model Making Company.txt': {
    slug: 'how-to-choose-model-making-company',
    category: 'Guides',
    date: 'January 2026',
    image: '/gallery/industrial/img-01.jpeg',
    readTime: '8 min read',
  },
  'Industrial Model Making Guide.txt': {
    slug: 'industrial-model-making-guide',
    category: 'Industrial',
    date: 'December 2025',
    image: '/gallery/industrial/img-06.jpeg',
    readTime: '7 min read',
  },
  'Questions to Ask Before Hiring a Model Maker.txt': {
    slug: 'questions-before-hiring-model-maker',
    category: 'Guides',
    date: 'November 2025',
    image: '/gallery/industrial/img-12.jpeg',
    readTime: '8 min read',
  },
  'Scale Model Applications.txt': {
    slug: 'scale-model-applications',
    category: 'Insights',
    date: 'October 2025',
    image: '/gallery/locomotive/img-10.jpeg',
    readTime: '9 min read',
  },
}

// Lines to skip entirely
const skipPatterns = [
  /^Summarize this blog post/i,
  /^URL Slug:/i,
  /^\[Insert (Image|Diagram|Custom Diagram)/i,
  /^Image Suggestion/i,
  /^Suggested Internal Link/i,
  /^Internal Link Suggestion/i,
  /^AI Citation:/i,
  /^\[Internal link/i,
  /^Written [Bb]y$/i,
  /^Reviewed [Bb]y$/i,
  /^About the Author/i,
  /^Disclaimer:/i,
  /^ChatGPT \| Perplexity/i,
  /^<blog_post>/i,
  /^<\/blog_post>/i,
  /^Statistic:/i,
  /^According to /i,
  /^Source:/i,
  /^Alt [Tt]ext:/i,
  /^\[Insert image/i,
  /^Suggested Image/i,
]

function cleanLine(line) {
  return line
    .replace(/\[Internal link:.*?\]/g, '')
    .replace(/\[Insert.*?\]/g, '')
    .replace(/— Source:.*$/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function isHeading(line) {
  if (line.length < 5 || line.length > 120) return false
  if (/^[•\-✅🚩✓]/.test(line)) return false
  if (/^\d+\.\s/.test(line)) return false
  // Ends with ? = question heading
  if (line.endsWith('?')) return true
  // All-caps short line
  if (line === line.toUpperCase() && line.length < 60) return true
  // Starts with common heading words and is short
  if (/^(What|Why|How|Which|Where|Who|When|Are|Is|Can|Should|Do|Types|Key Takeaways|Conclusion|Introduction|Final|Tools|Next Steps|Overview|Summary|Benefits|Applications|Materials|Process|Cost|Pricing|Services|Industries|Technologies)/i.test(line) && line.length < 100) return true
  // Number prefix headings like "1. Why Is..."
  if (/^\d+\.\s+(Why|What|How|Which|Where|Who|When|Are|Is|Can|Should)/i.test(line)) return true
  return false
}

function isBullet(line) {
  return /^[•\-✅🚩✓]/.test(line) || /^\d+\.\s/.test(line)
}

function parseFile(raw) {
  const lines = raw.split('\n')
    .map(l => l.trim())
    .filter(l => {
      if (!l) return false
      return !skipPatterns.some(p => p.test(l))
    })
    .map(cleanLine)
    .filter(Boolean)

  // First line = title
  const title = lines[0] || ''

  // Find excerpt: first paragraph-length line after title
  const excerpt = lines.find((l, i) => i > 0 && l.length > 80 && l.length < 400 && !isHeading(l)) || ''

  const sections = []
  let heading = null
  let body = []
  let items = []

  const flush = () => {
    if (!heading) return
    const sec = { heading }
    const cleanedItems = items.map(i => i.replace(/^[•\-✅🚩✓\d+\.\s]+/, '').trim()).filter(Boolean)
    if (cleanedItems.length > 0) {
      sec.items = cleanedItems
    } else if (body.length > 0) {
      sec.body = body.join(' ').replace(/\s+/g, ' ').trim()
    }
    if (sec.items?.length || sec.body) sections.push(sec)
    heading = null
    body = []
    items = []
  }

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i]
    if (!line) continue

    if (isHeading(line)) {
      flush()
      heading = line.replace(/:$/, '').trim()
    } else if (isBullet(line)) {
      if (!heading) heading = 'Key Points'
      items.push(line)
    } else if (line.length > 30) {
      if (!heading) heading = 'Overview'
      body.push(line)
    }
  }
  flush()

  return { title, excerpt, sections }
}

const files = fs.readdirSync(extractedDir).filter(f => f.endsWith('.txt'))
const posts = []

for (const file of files) {
  const m = meta[file]
  if (!m) { console.log('No meta for:', file); continue }
  const raw = fs.readFileSync(path.join(extractedDir, file), 'utf8')
  const { title, excerpt, sections } = parseFile(raw)
  posts.push({ ...m, title, excerpt, sections })
  console.log(`✓ ${m.slug}: ${sections.length} sections`)
}

const output = `export const blogPosts = ${JSON.stringify(posts, null, 2)}

export const blogPostsFull = blogPosts
`

fs.writeFileSync(outFile, output)
console.log(`\nDone → ${outFile}`)
