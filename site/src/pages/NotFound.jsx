import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">Page not found</h1>
      <p className="mt-3 max-w-md text-text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
      </p>
      <Button to="/" variant="solid" className="mt-8">
        Back to Home
      </Button>
    </section>
  )
}
