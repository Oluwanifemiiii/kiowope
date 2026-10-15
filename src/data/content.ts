export interface Service {
  title: string
  description: string
  whoItsFor: string
}

export const services: Service[] = [
  {
    title: 'Capital Raising & Investment',
    description:
      'We structure equity, debt, project finance, green bonds, and climate funds to scale EV and infrastructure projects.',
    whoItsFor: 'EV startups, battery swap station investors, charging infrastructure developers.',
  },
  {
    title: 'Asset & Equipment Financing',
    description:
      'Vehicle leasing models, battery-as-a-service (BaaS), and equipment lease finance tailored to fleet operators and logistics businesses.',
    whoItsFor: 'Fleet owners, logistics companies, swap station owners, ride-hailing startups.',
  },
  {
    title: 'Consumer & Driver Financing',
    description:
      'Micro-loans, pay-as-you-go financing, and daily remittance schemes designed for transport unions and cooperatives.',
    whoItsFor: 'Road transport workers unions, cooperative associations, individual drivers.',
  },
  {
    title: 'Insurance & Risk Advisory',
    description:
      'End-to-end coverage for EVs, batteries, fleets, and operators, including usage-based microinsurance products.',
    whoItsFor: 'Battery owners, swap station operators, logistics fleets.',
  },
  {
    title: 'PPP & Government Concessions',
    description:
      'Design and structure EV infrastructure concessions and public transport PPPs that attract investment and deliver public benefit.',
    whoItsFor: 'Charging companies, municipal operators, bus fleet owners, EV infrastructure companies.',
  },
  {
    title: 'Valuation & M&A Advisory',
    description:
      'Business valuation, due diligence, and buy-side/sell-side support for mobility and infrastructure companies.',
    whoItsFor: 'Investors, holding companies, venture-backed startups.',
  },
  {
    title: 'Carbon Finance Advisory',
    description: 'We help clients structure carbon credit sales, report ESG metrics, and monetize emission reductions.',
    whoItsFor: 'Battery swap firms, ride-hailing platforms, solar-powered transport developers.',
  },
  {
    title: 'Operational Financial Services',
    description:
      'Working capital advisory, factoring, and cost accounting systems to keep your business running efficiently.',
    whoItsFor: 'Battery assembly plants, EV parts manufacturers, maintenance workshops.',
  },
  {
    title: 'Treasury & Payments',
    description:
      'Deploy smart wallet systems, cashless collections, and digital disbursements to increase efficiency and transparency.',
    whoItsFor: 'Ride-hailing platforms, driver cooperatives, swap station operators.',
  },
  {
    title: 'Regulatory & Tax Advisory',
    description: 'Plan your imports, incentives, and tax structures for optimal compliance and savings.',
    whoItsFor: 'EV parts importers, lithium battery assemblers, charging infrastructure companies.',
  },
  {
    title: 'Financial Modelling & Planning',
    description:
      'Energy cost optimization, lifetime cost of ownership analysis, and fleet ROI modelling for informed decision-making.',
    whoItsFor: 'Public transport authorities, fleet investors, private financiers.',
  },
  {
    title: 'Strategic Advisory',
    description: 'From market entry planning to policy engagement, we position you for long-term success in complex African markets.',
    whoItsFor: 'New entrants, consortiums, holding companies.',
  },
]

export interface Sector {
  title: string
  description: string
}

export const sectors: Sector[] = [
  { title: 'Electric Mobility', description: 'Financing EV adoption, battery swap infrastructure, and charging networks.' },
  { title: 'Public Transport', description: 'Structuring PPPs for efficient, low-emission transit.' },
  { title: 'Logistics & Last-Mile Delivery', description: 'Supporting fleet conversions and operational finance.' },
  { title: 'Renewable Energy Infrastructure', description: 'Funding solar-powered transport and energy systems.' },
  { title: 'Carbon Markets', description: 'Turning emissions reductions into tradable assets.' },
]

export const clientTypes: string[] = [
  'EV Startups',
  'Fleet Owners',
  'Investors',
  'Municipal Operators',
  'Public Transport Unions',
  'Renewable Energy Developers',
]

export interface Value {
  title: string
  description: string
}

export const values: Value[] = [
  { title: 'Innovation', description: 'We design forward-looking financing models that fit emerging markets.' },
  { title: 'Integrity', description: 'Transparency and trust define our engagements.' },
  { title: 'Sustainability', description: 'We prioritize climate-smart investments with measurable impact.' },
  {
    title: 'Partnership',
    description: 'Success comes from working together, with clients, communities, and capital providers.',
  },
]

export const contact = {
  address: 'Suite WW16, Tafawa Balewa Square, Onikan, Lagos',
  email: 'info@kiowopecapital.com',
  phone: '+234 803 487 2580',
  phoneHref: 'tel:+2348034872580',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/kiowope-capital-limited/' },
    { label: 'Facebook', href: 'https://www.facebook.com/kiowopecapital/' },
    { label: 'X', href: 'https://twitter.com/KiowopeC' },
  ],
}

export const missionQuote =
  "At Kiowope Capital, we don't just mobilize capital, we build ecosystems. From the first micro-loan to large-scale infrastructure financing, our solutions power the shift to clean, efficient, and inclusive transportation across Africa."
