import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { RevealGroup, RevealItem } from '../components/Reveal'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { blogPosts } from '../data/blogPosts'

export default function Blog() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Insights from the workshop"
        description="Guides, deep-dives, and stories on scale model making, 3D printing, and precision craftsmanship."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">

        {/* Featured */}
        <Reveal>
          <Link
            to={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-shadow duration-300 hover:shadow-xl lg:grid-cols-[1.2fr_1fr]"
          >
            <div className="aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:min-h-[420px]">
              <img
                src={featured.image}
                alt={featured.title}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="h-full w-full select-none object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center gap-5 p-8 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {featured.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-text-muted">
                  <Clock size={12} /> {featured.readTime}
                </span>
                <span className="text-xs text-text-muted">{featured.date}</span>
              </div>
              <h2 className="font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                {featured.title}
              </h2>
              <p className="line-clamp-3 text-sm leading-relaxed text-text-muted sm:text-base">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-gap group-hover:gap-3">
                Read Article <ArrowRight size={15} />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Grid */}
        <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <RevealItem key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className="h-full w-full select-none object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-text-muted">
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-semibold leading-snug text-ink sm:text-lg">
                    {post.title}
                  </h3>
                  <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-text-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                    Read More <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <CTASection />
    </>
  )
}
