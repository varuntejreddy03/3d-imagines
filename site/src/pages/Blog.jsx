import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { RevealGroup, RevealItem } from '../components/Reveal'
import CTASection from '../components/CTASection'
import { blogPosts } from '../data/content'

export default function Blog() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Insights from the workshop"
        description="Guides, technology deep-dives, and behind-the-scenes stories on scale model making and 3D printing."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {/* Featured post */}
        <Link
          to="#"
          onClick={(e) => e.preventDefault()}
          className="group grid overflow-hidden rounded-3xl border border-border bg-surface-alt lg:grid-cols-2"
        >
          <div className="aspect-[16/10] overflow-hidden lg:aspect-auto">
            <img
              src={featured.image}
              alt={featured.title}
              className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <div className="flex items-center gap-3 text-xs">
              <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">{featured.category}</span>
              <span className="text-text-muted">{featured.date}</span>
            </div>
            <h2 className="mt-5 font-display text-2xl font-semibold text-ink sm:text-3xl">{featured.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">{featured.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
              Read Article
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Link>

        {/* Rest of posts */}
        <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <RevealItem key={post.slug}>
              <Link
                to="#"
                onClick={(e) => e.preventDefault()}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">{post.category}</span>
                    <span className="text-text-muted">{post.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">{post.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read More →
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-12 text-center text-sm text-text-muted">
          More articles coming soon. Follow us on social media for the latest updates.
        </p>
      </section>

      <CTASection />
    </>
  )
}
