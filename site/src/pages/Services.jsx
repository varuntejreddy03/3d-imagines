import PageHeader from '../components/PageHeader'
import ServiceCard from '../components/ServiceCard'
import ProcessStep from '../components/ProcessStep'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import { processSteps, serviceCategories } from '../data/content'

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="What We Build"
        title="Our Services"
        description="Architectural, industrial, and 3D-printed scale models — engineered to your exact drawings and scale."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </section>

      <section className="bg-ink-2 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="How We Work" title="Our 3D Model Making Process" align="center" light />
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.title} index={index} total={processSteps.length} light {...step} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
