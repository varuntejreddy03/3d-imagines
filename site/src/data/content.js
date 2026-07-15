// Single source of truth for business content — keeps stats/copy consistent
// across every page (the reference site shows 95% in one place, 80% in another).

export const business = {
  name: '3D Imagines',
  tagline: 'Architectural and Industrial Model Makers',
  founded: 2009,
  teamExperience: '30+ years combined',
  phones: ['9948119395', '6309669395'],
  email: '3dimagines2009@gmail.com',
  address:
    '1st Floor, 1-7-139/81, Golconda X Roads, Musheerabad, Zamistanpur, SRK Nagar, Hyderabad, Telangana 500020',
  mapLink: 'https://maps.app.goo.gl/PYynNySM84cjWpj97',
  mapEmbed:
    'https://www.google.com/maps?q=1-7-139/81,+Golconda+X+Roads,+Musheerabad,+Zamistanpur,+SRK+Nagar,+Hyderabad,+Telangana+500020&output=embed',
  hours: [
    { days: 'Monday – Saturday', time: '9:00 AM – 8:00 PM' },
    { days: 'Sunday', time: '9:00 AM – 12:30 PM' },
  ],
  social: {
    youtube: 'https://youtube.com/@3dimagines-architecturalmo193',
    instagram: 'https://www.instagram.com/3dimagines09',
    linkedin: 'https://www.linkedin.com/in/3d-imagines-undefined-50567a422',
  },
}

// Single set of stats used everywhere (hero strip + stats band) — no conflicting numbers.
export const stats = [
  { value: 15, suffix: '+', label: 'Years in Business' },
  { value: 30, suffix: '+', label: 'Years Combined Team Experience' },
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 2, suffix: '', label: 'Manufacturing Techniques', detail: 'SLA + FDM 3D Printing' },
]

export const advantages = [
  {
    title: 'Established 2009',
    description: 'A proven track record of excellence spanning over 15 years.',
  },
  {
    title: '30+ Years Combined Expertise',
    description: 'Senior craftsmen and engineers with deep model-making experience.',
  },
  {
    title: 'High-Precision Manufacturing',
    description: 'Laser cutting and 3D printing combined with hand-finished craftsmanship.',
  },
  {
    title: 'Customized Solutions',
    description: 'Every model is engineered to the client’s exact brief and scale.',
  },
  {
    title: 'On-Time Delivery',
    description: 'Uncompromising quality delivered to schedule, every time.',
  },
  {
    title: 'Trusted Worldwide',
    description: 'Clients across India and internationally rely on our work.',
  },
]

export const serviceCategories = [
  {
    slug: 'architectural-models',
    title: 'Architectural 3D Model Makers',
    kicker: 'Architectural',
    description:
      'Exterior, interior, and master-plan models that communicate design intent with precision and scale accuracy.',
    items: [
      'Architectural exterior models',
      'Architectural interior models',
      'Master plan / township models',
    ],
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'industrial-models',
    title: 'Industrial 3D Model Makers',
    kicker: 'Industrial',
    description:
      'Equipment, locomotive, and process-plant models built to explain complex machinery and workflows clearly.',
    items: [
      'Industrial equipment models',
      'Locomotive scale models',
      'Process / plant layout models',
    ],
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: '3d-printing',
    title: '3D Printing',
    kicker: 'Digital Fabrication',
    description:
      'SLA and FDM printing for fine-detail components, prototypes, and rapid model iterations.',
    items: ['SLA 3D printing', 'FDM 3D printing'],
    image:
      'https://images.unsplash.com/photo-1611117775350-ac3950990985?auto=format&fit=crop&w=1200&q=80',
  },
]

export const processSteps = [
  { title: 'Consultation & Drawing Review', description: 'We study your drawings and requirements to scope the build.' },
  { title: 'Design & 3D Modeling', description: 'Concepts are translated into precise digital models before fabrication starts.' },
  { title: 'Laser Cutting / 3D Printing', description: 'Components are cut and printed to exact scale tolerances.' },
  { title: 'Fabrication & Assembly', description: 'Skilled craftsmen assemble every part by hand for structural accuracy.' },
  { title: 'Finishing & Painting', description: 'Detailing, texture, and paintwork bring the model to life.' },
  { title: 'Quality Check & Delivery', description: 'A final precision check before careful packaging and delivery.' },
]

export const galleryItems = [
  { category: 'Architectural', title: 'Township Master Plan', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80' },
  { category: 'Industrial', title: 'Process Plant Layout', image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=80' },
  { category: 'Locomotive', title: 'Locomotive Scale Model', image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=900&q=80' },
  { category: '3D Printed', title: 'SLA Detail Components', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80' },
  { category: 'Architectural', title: 'Residential Exterior', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80' },
  { category: 'Industrial', title: 'Equipment Assembly Model', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80' },
  { category: 'Architectural', title: 'Commercial Tower Model', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=80' },
  { category: '3D Printed', title: 'FDM Structural Prototype', image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=900&q=80' },
  { category: 'Locomotive', title: 'Rail Yard Diorama', image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=900&q=80' },
]

// Placeholder — client to supply real testimonials at launch.
export const testimonials = [
  {
    quote:
      '[PLACEHOLDER] The detail on our township model was exceptional — every elevation matched the drawings exactly.',
    name: 'Client Name',
    role: 'Real Estate Developer',
  },
  {
    quote:
      '[PLACEHOLDER] Fast turnaround and excellent finishing on our industrial process model. Highly recommended.',
    name: 'Client Name',
    role: 'Plant Engineering Firm',
  },
  {
    quote:
      '[PLACEHOLDER] Professional from consultation to delivery. The locomotive model exceeded our expectations.',
    name: 'Client Name',
    role: 'Museum / Exhibit Client',
  },
]

export const faqs = [
  {
    question: 'What types of scale models do you make?',
    answer:
      'We build architectural exterior and interior models, master-plan and township models, industrial equipment and process-plant models, locomotive scale models, and SLA/FDM 3D-printed components.',
  },
  {
    question: 'How much does a scale model cost?',
    answer:
      'Cost depends on scale, size, level of detail, and materials. Share your drawings and requirements with us and we’ll provide a detailed quote.',
  },
  {
    question: 'What information do you need from clients to start?',
    answer:
      'Architectural or engineering drawings (2D/3D), preferred scale, reference photos if available, and your delivery timeline.',
  },
  {
    question: 'What is the typical turnaround time?',
    answer:
      'Most projects take 2–6 weeks depending on scale and complexity. We’ll confirm an exact timeline once we review your drawings.',
  },
  {
    question: 'What scale ratios do you recommend?',
    answer:
      'It depends on the project — common ratios range from 1:50 to 1:500 for architectural work and 1:25 to 1:100 for industrial models. We’ll recommend the right scale for your presentation needs.',
  },
  {
    question: 'What’s the difference between SLA and FDM 3D printing, and which should I choose?',
    answer:
      'SLA produces very fine detail and smooth surfaces, ideal for intricate components. FDM is faster and more cost-effective for larger structural parts. We often combine both within a single model.',
  },
  {
    question: 'Do you deliver/ship models outside Hyderabad?',
    answer:
      'Yes, we ship carefully packaged models to clients across India and internationally.',
  },
  {
    question: 'Can I visit the workshop?',
    answer:
      'Yes — visits are welcome by appointment. Contact us to schedule a time.',
  },
]

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'Architectural Models', to: '/services/architectural-models' },
      { label: 'Industrial Models', to: '/services/industrial-models' },
      { label: '3D Printing', to: '/services/3d-printing' },
    ],
  },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]
