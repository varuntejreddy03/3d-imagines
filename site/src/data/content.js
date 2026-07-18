// Single source of truth for business content — keeps stats/copy consistent
// across every page (the reference site shows 95% in one place, 80% in another).

export const business = {
  name: '3D Imagines',
  tagline: 'Architectural and Industrial Model Makers',
  founded: 2009,
  teamExperience: '30+ years combined',
  phones: ['9948119395', '6309669395'],
  whatsapp: '919948119395',
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
// NOTE: Client Retention Rate below is a placeholder (92%) — swap for your real figure.
export const stats = [
  { value: 15, suffix: '+', label: 'Years in Business' },
  { value: 30, suffix: '+', label: 'Years Combined Team Experience' },
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 92, suffix: '%', label: 'Client Retention Rate' },
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
    galleryFilter: 'Architectural',
    description:
      'Exterior, interior, and master-plan models that communicate design intent with precision and scale accuracy.',
    items: [
      'Architectural exterior models',
      'Architectural interior models',
      'Master plan / township models',
    ],
    image: '/gallery/architectural/img-13.jpeg',
  },
  {
    slug: 'industrial-models',
    title: 'Industrial 3D Model Makers',
    kicker: 'Industrial',
    galleryFilter: 'Industrial',
    description:
      'Equipment, locomotive, and process-plant models built to explain complex machinery and workflows clearly.',
    items: [
      'Industrial equipment models',
      'Locomotive scale models',
      'Process / plant layout models',
    ],
    image: '/gallery/industrial/img-24.jpeg',
  },
  {
    slug: '3d-printing',
    title: '3D Printing',
    kicker: 'Digital Fabrication',
    galleryFilter: 'Locomotive',
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

// Real project photography supplied by the client, organized under public/gallery/.
export const galleryItems = [
  // Architectural (19 images)
  { category: 'Architectural', title: 'Township Master Plan', image: '/gallery/architectural/img-01.jpeg' },
  { category: 'Architectural', title: 'Luxury Villa Complex', image: '/gallery/architectural/img-02.jpeg' },
  { category: 'Architectural', title: 'Glass Tower Complex', image: '/gallery/architectural/img-03.jpeg' },
  { category: 'Architectural', title: 'Residential Tower', image: '/gallery/architectural/img-04.jpeg' },
  { category: 'Architectural', title: 'Commercial Hub', image: '/gallery/architectural/img-05.jpeg' },
  { category: 'Architectural', title: 'Residential Arches', image: '/gallery/architectural/img-06.jpeg' },
  { category: 'Architectural', title: 'Corporate Campus', image: '/gallery/architectural/img-07.jpeg' },
  { category: 'Architectural', title: 'Solar-Roofed Corporate Building', image: '/gallery/architectural/img-08.jpeg' },
  { category: 'Architectural', title: 'Mixed-Use Development', image: '/gallery/architectural/img-09.jpeg' },
  { category: 'Architectural', title: 'Urban Planning Model', image: '/gallery/architectural/img-10.jpeg' },
  { category: 'Architectural', title: 'High-Rise Residential', image: '/gallery/architectural/img-11.jpeg' },
  { category: 'Architectural', title: 'Shopping Mall Model', image: '/gallery/architectural/img-12.jpeg' },
  { category: 'Architectural', title: 'Sindhu Hospitals', image: '/gallery/architectural/img-13.jpeg' },
  { category: 'Architectural', title: 'IT Park Layout', image: '/gallery/architectural/img-14.jpeg' },
  { category: 'Architectural', title: 'Gated Community', image: '/gallery/architectural/img-15.jpeg' },
  { category: 'Architectural', title: 'Aerial Township View', image: '/gallery/architectural/img-16.jpeg' },
  { category: 'Architectural', title: 'Convention Centre', image: '/gallery/architectural/img-17.jpeg' },
  { category: 'Architectural', title: 'Heritage Building Model', image: '/gallery/architectural/img-18.jpeg' },
  { category: 'Architectural', title: 'Institutional Campus', image: '/gallery/architectural/img-19.jpeg' },
  { category: 'Architectural', title: 'Architectural Model', image: '/gallery/architectural/img-20.jpeg' },
  { category: 'Architectural', title: 'Architectural Model', image: '/gallery/architectural/img-21.jpeg' },
  { category: 'Architectural', title: 'Architectural Model', image: '/gallery/architectural/img-22.jpeg' },

  // Industrial (36 images)
  { category: 'Industrial', title: 'Cement Plant Model', image: '/gallery/industrial/img-01.jpeg' },
  { category: 'Industrial', title: 'Refinery Layout', image: '/gallery/industrial/img-02.jpeg' },
  { category: 'Industrial', title: 'Chemical Processing Unit', image: '/gallery/industrial/img-03.jpeg' },
  { category: 'Industrial', title: 'Power Generation Plant', image: '/gallery/industrial/img-04.jpeg' },
  { category: 'Industrial', title: 'Storage Terminal', image: '/gallery/industrial/img-05.jpeg' },
  { category: 'Industrial', title: 'Steel Process Plant', image: '/gallery/industrial/img-06.jpeg' },
  { category: 'Industrial', title: 'Conveyor System Model', image: '/gallery/industrial/img-07.jpeg' },
  { category: 'Industrial', title: 'Boiler Unit', image: '/gallery/industrial/img-08.jpeg' },
  { category: 'Industrial', title: 'Cooling Tower Assembly', image: '/gallery/industrial/img-09.jpeg' },
  { category: 'Industrial', title: 'Gas Processing Facility', image: '/gallery/industrial/img-10.jpeg' },
  { category: 'Industrial', title: 'Turbine Hall Model', image: '/gallery/industrial/img-11.jpeg' },
  { category: 'Industrial', title: 'Power Plant Layout', image: '/gallery/industrial/img-12.jpeg' },
  { category: 'Industrial', title: 'Piping Network Model', image: '/gallery/industrial/img-13.jpeg' },
  { category: 'Industrial', title: 'Furnace Unit', image: '/gallery/industrial/img-14.jpeg' },
  { category: 'Industrial', title: 'Waste Treatment Plant', image: '/gallery/industrial/img-15.jpeg' },
  { category: 'Industrial', title: 'Kiln Assembly', image: '/gallery/industrial/img-16.jpeg' },
  { category: 'Industrial', title: 'Material Handling System', image: '/gallery/industrial/img-17.jpeg' },
  { category: 'Industrial', title: 'Crusher Plant Model', image: '/gallery/industrial/img-18.jpeg' },
  { category: 'Industrial', title: 'Distillation Column', image: '/gallery/industrial/img-19.jpeg' },
  { category: 'Industrial', title: 'Reactor Vessel Model', image: '/gallery/industrial/img-20.jpeg' },
  { category: 'Industrial', title: 'Compressor Station', image: '/gallery/industrial/img-21.jpeg' },
  { category: 'Industrial', title: 'Heat Exchanger Unit', image: '/gallery/industrial/img-22.jpeg' },
  { category: 'Industrial', title: 'Separator Unit', image: '/gallery/industrial/img-23.jpeg' },
  { category: 'Industrial', title: 'JSW Illuminated Plant', image: '/gallery/industrial/img-24.jpeg' },
  { category: 'Industrial', title: 'Clinker Silo Model', image: '/gallery/industrial/img-25.jpeg' },
  { category: 'Industrial', title: 'Raw Mill Section', image: '/gallery/industrial/img-26.jpeg' },
  { category: 'Industrial', title: 'Packing Plant', image: '/gallery/industrial/img-27.jpeg' },
  { category: 'Industrial', title: 'Coal Handling Plant', image: '/gallery/industrial/img-28.jpeg' },
  { category: 'Industrial', title: 'Rotary Kiln Model', image: '/gallery/industrial/img-29.jpeg' },
  { category: 'Industrial', title: 'Vertical Plate Airblow Equipment', image: '/gallery/industrial/img-30.jpeg' },
  { category: 'Industrial', title: 'Pollution Control Unit', image: '/gallery/industrial/img-31.jpeg' },
  { category: 'Industrial', title: 'Electrostatic Precipitator', image: '/gallery/industrial/img-32.jpeg' },
  { category: 'Industrial', title: 'Bag Filter Assembly', image: '/gallery/industrial/img-33.jpeg' },
  { category: 'Industrial', title: 'Stacker Reclaimer', image: '/gallery/industrial/img-34.jpeg' },
  { category: 'Industrial', title: 'Bulk Material Terminal', image: '/gallery/industrial/img-35.jpeg' },
  { category: 'Industrial', title: 'Integrated Plant Overview', image: '/gallery/industrial/img-36.avif' },
  { category: 'Industrial', title: 'Industrial Model', image: '/gallery/industrial/img-37.jpeg' },
  { category: 'Industrial', title: 'Industrial Model', image: '/gallery/industrial/img-38.jpeg' },
  { category: 'Industrial', title: 'Industrial Model', image: '/gallery/industrial/img-39.jpeg' },
  { category: 'Industrial', title: 'Industrial Model', image: '/gallery/industrial/img-40.jpeg' },

  // Locomotive / Engineering (15 images)
  { category: 'Engineering', title: 'Rail Borne Maintenance Vehicle', image: '/gallery/locomotive/img-01.jpeg' },
  { category: 'Engineering', title: 'Diesel Locomotive Model', image: '/gallery/locomotive/img-02.jpeg' },
  { category: 'Engineering', title: 'Electric Locomotive', image: '/gallery/locomotive/img-03.jpeg' },
  { category: 'Engineering', title: 'Track Laying Machine', image: '/gallery/locomotive/img-04.jpeg' },
  { category: 'Engineering', title: 'DFCCIL Inspection Car', image: '/gallery/locomotive/img-05.jpeg' },
  { category: 'Engineering', title: 'Ballast Tamping Machine', image: '/gallery/locomotive/img-06.jpeg' },
  { category: 'Engineering', title: 'Rail Grinding Vehicle', image: '/gallery/locomotive/img-07.jpeg' },
  { category: 'Engineering', title: 'Overhead Wiring Train', image: '/gallery/locomotive/img-08.jpeg' },
  { category: 'Engineering', title: 'Freight Wagon Model', image: '/gallery/locomotive/img-09.jpeg' },
  { category: 'Engineering', title: 'Hyderabad Metro Rail', image: '/gallery/locomotive/img-10.jpeg' },
  { category: 'Engineering', title: 'MT Vamsee II — Marine Model', image: '/gallery/locomotive/img-11.jpeg' },
  { category: 'Engineering', title: 'Signal Equipment Model', image: '/gallery/locomotive/img-12.jpeg' },
  { category: 'Engineering', title: 'Bridge Inspection Vehicle', image: '/gallery/locomotive/img-13.jpeg' },
  { category: 'Engineering', title: 'Tunnel Boring Machine', image: '/gallery/locomotive/img-14.jpeg' },
  { category: 'Engineering', title: 'RRTS Coach Model', image: '/gallery/locomotive/img-15.jpeg' },
]

// Placeholder — client to supply real testimonials at launch.
export const testimonials = [
  {
    quote:
      'We needed a detailed township model for our investor presentation and 3D Imagines delivered beyond expectations. Every building, landscape element, and road was perfectly to scale — it helped us close the deal on the spot.',
    name: 'Rajesh Reddy',
    role: 'Managing Director, Real Estate Development Firm',
  },
  {
    quote:
      'The industrial plant model they built for our JSW project was incredibly accurate. Pipe routing, equipment placement, colour coding — everything matched our engineering drawings. Turnaround was faster than we expected.',
    name: 'Venkat Rao',
    role: 'Project Manager, Industrial Engineering Consultancy',
  },
  {
    quote:
      'We commissioned a locomotive scale model for a government exhibition and the craftsmanship was outstanding. The level of detail on the bogies and pantograph impressed everyone who saw it. Highly professional team.',
    name: 'Suresh Kumar',
    role: 'Senior Engineer, Railway Infrastructure Company',
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

// Real client logos supplied by the client, organized under public/clients/.
export const clients = [
  // Architectural
  { name: 'HMDA', logo: '/clients/architectural/hmda.jpg', category: 'Architectural' },
  { name: 'VMRDA', logo: '/clients/architectural/vmrda.png', category: 'Architectural' },
  { name: 'Dell', logo: '/clients/architectural/dell.jpg', category: 'Architectural' },
  { name: 'Andhra Bank', logo: '/clients/architectural/andhra-bank.jpg', category: 'Architectural' },
  { name: 'Sindhu Hospitals', logo: '/clients/architectural/sindhu-hospitals.jpg', category: 'Architectural' },
  { name: 'ACE', logo: '/clients/architectural/ace.jpg', category: 'Architectural' },
  { name: 'Buildox', logo: '/clients/architectural/buildox.jpg', category: 'Architectural' },
  { name: 'IKP', logo: '/clients/architectural/ikp.png', category: 'Architectural' },
  { name: 'Namishree Infrastructure', logo: '/clients/architectural/namishree.png', category: 'Architectural' },
  { name: 'Omsree', logo: '/clients/architectural/omsree.png', category: 'Architectural' },
  { name: 'PNPL', logo: '/clients/architectural/pnpl.png', category: 'Architectural' },
  { name: 'Pride India', logo: '/clients/architectural/pride-india.png', category: 'Architectural' },
  { name: 'Siddipet IT Hub', logo: '/clients/architectural/siddipet-it-hub-logo.jpg', category: 'Architectural' },
  { name: 'Skandhanshi Infra', logo: '/clients/architectural/skandanshi.png', category: 'Architectural' },
  { name: 'Teja Homes', logo: '/clients/architectural/teja-homes.jpg', category: 'Architectural' },
  { name: 'Vertex', logo: '/clients/architectural/vertex.png', category: 'Architectural' },

  // Industrial
  { name: 'NTPC', logo: '/clients/industrial/ntpc-logo.jpg', category: 'Industrial' },
  { name: 'Indian Oil Corporation', logo: '/clients/industrial/indian-oil-corporation.png', category: 'Industrial' },
  { name: 'JSW Group', logo: '/clients/industrial/jsw-group.webp', category: 'Industrial' },
  { name: 'JSW Cement', logo: '/clients/industrial/jsw-cement.png', category: 'Industrial' },
  { name: 'Adani Cement', logo: '/clients/industrial/adani-cement.jpg', category: 'Industrial' },
  { name: 'Bharathi Cement', logo: '/clients/industrial/bharathi-cement.png', category: 'Industrial' },
  { name: 'Orient Cement', logo: '/clients/industrial/orient-cement.png', category: 'Industrial' },
  { name: 'Bharat Petroleum', logo: '/clients/industrial/bharat-petroleum.png', category: 'Industrial' },
  { name: 'Ramky Enviro', logo: '/clients/industrial/ramky-enviro.webp', category: 'Industrial' },
  { name: 'Chiripal Poly Films', logo: '/clients/industrial/chiripal-poly-films.jpg', category: 'Industrial' },
  { name: 'KCP Sugar & Industries', logo: '/clients/industrial/kcp-sugar-industries.jpg', category: 'Industrial' },
  { name: 'Agarwal Steel Corporation', logo: '/clients/industrial/agarwal-steel-corporation.jpg', category: 'Industrial' },

  // Engineering / Locomotive
  { name: 'DFCCIL', logo: '/clients/locomotive/dfccilindia-logo.jpg', category: 'Engineering' },
  { name: 'Hyderabad Metro Rail', logo: '/clients/locomotive/hyderabad-metro-rail.jpg', category: 'Engineering' },
  { name: 'Larsen & Toubro', logo: '/clients/locomotive/larsen-toubro.jpg', category: 'Engineering' },
  { name: 'Bharat Earth Movers', logo: '/clients/locomotive/bharat-earth-movers-logo-svg.webp', category: 'Engineering' },
  { name: 'NCRTC', logo: '/clients/locomotive/ncrtc.png', category: 'Engineering' },
  { name: 'Loram', logo: '/clients/locomotive/loram.png', category: 'Engineering' },
  { name: 'Phooltas Transrail', logo: '/clients/locomotive/phooltas-transrail.png', category: 'Engineering' },
  { name: 'SAN Engineering & Locomotive', logo: '/clients/locomotive/san-engineering-locomotive.jpg', category: 'Engineering' },
]

import { blogPosts as parsedBlogPosts } from './blogPosts'

export const blogPosts = parsedBlogPosts


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
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]
