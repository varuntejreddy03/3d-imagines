import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, Clock, Tag, ArrowRight } from 'lucide-react'
import { blogPostsFull, blogPosts } from '../data/blogPosts'
import CTASection from '../components/CTASection'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPostsFull.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <div className="bg-surface">

      {/* Hero */}
      <div className="relative bg-ink pb-32 pt-28 lg:pt-36">
        <div className="blueprint-grid absolute inset-0 opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <Link
              to="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-white"
            >
              <ArrowLeft size={15} /> Back to Blog
            </Link>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                <Tag size={11} /> {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/50">
                <Clock size={11} /> {post.readTime}
              </span>
              <span className="text-xs text-white/50">{post.date}</span>
            </div>
            <h1 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
              {post.excerpt}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Image overlapping hero */}
      <div className="relative z-10 mx-auto -mt-16 max-w-3xl px-6 lg:px-10">
        <Reveal>
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="aspect-[16/8] w-full select-none object-cover"
            />
          </div>
        </Reveal>
      </div>

      {/* Article content */}
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <div className="space-y-10">
          {post.sections?.map((section, i) => (
            <Reveal key={i}>
              <div className={`${section.heading === 'Key Takeaways' ? 'rounded-2xl border-l-4 border-primary bg-surface-alt p-6' : ''}`}>
                <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                  {section.heading}
                </h2>
                {section.body && (
                  <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">
                    {section.body}
                  </p>
                )}
                {section.items && (
                  <ul className="mt-4 space-y-2.5">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-text-muted sm:text-base">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Author */}
        <Reveal>
          <div className="mt-14 flex items-center gap-4 rounded-2xl border border-border bg-surface-alt p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
              3D
            </div>
            <div>
              <p className="font-semibold text-ink">3D Imagines</p>
              <p className="text-sm text-text-muted">Architectural & Industrial Model Makers · 30+ years · 500+ projects</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="border-t border-border bg-surface-alt py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-10 flex items-end justify-between">
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Read Next</h2>
              <Link to="/blog" className="hidden items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark sm:inline-flex">
                All articles <ArrowRight size={14} />
              </Link>
            </div>
            <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <RevealItem key={r.slug}>
                  <Link
                    to={`/blog/${r.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={r.image}
                        alt={r.title}
                        loading="lazy"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        className="h-full w-full select-none object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-5">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-semibold text-primary">{r.category}</span>
                        <span className="text-text-muted">{r.readTime}</span>
                      </div>
                      <h3 className="font-display text-base font-semibold leading-snug text-ink group-hover:text-primary sm:text-lg">
                        {r.title}
                      </h3>
                      <p className="line-clamp-2 flex-1 text-sm text-text-muted">{r.excerpt}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                        Read More <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      <CTASection />
    </div>
  )
}
