# Leeds DASA - Website Recreation

A modern recreation of the Leeds and District Amalgamated Society of Anglers website, built with Next.js 14, React, Tailwind CSS, and Framer Motion.

## Features

- **Modern Stack**: Built with Next.js 14 App Router, React 18, and Tailwind CSS
- **Beautiful UI**: Custom design with water-inspired color palette and smooth animations
- **Fully Responsive**: Optimized for all device sizes
- **Accessible**: Semantic HTML and proper ARIA attributes
- **Fast**: Optimized for performance with modern best practices

## Pages

- **Home** - Hero section, membership benefits, water previews, upcoming matches
- **Membership** - Overview, individual membership, yearbook info, club affiliation
- **Waters** - Rivers, canals, lakes, A-Z listing with search and filter
- **Matches** - Match calendar, club meetings
- **Anglers Club** - Social club information, facilities, opening hours
- **Contact** - Contact form and information
- **Forum** - Community and newsletter information
- **Legal** - Privacy policy, terms & conditions, cookie policy

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: JavaScript/React
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd leeds-dasa
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── anglers-club/      # Anglers Club page
│   ├── contact/           # Contact page
│   ├── cookies/           # Cookie policy
│   ├── forum/             # Forum page
│   ├── matches/           # Matches pages
│   │   ├── calendar/
│   │   └── meetings/
│   ├── membership/        # Membership pages
│   │   ├── club-affiliation/
│   │   ├── individual/
│   │   └── yearbook/
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms & conditions
│   ├── waters/            # Waters pages
│   │   ├── [type]/[id]/   # Dynamic water detail
│   │   ├── a-z/
│   │   ├── canals/
│   │   ├── lakes/
│   │   └── rivers/
│   ├── globals.css        # Global styles
│   ├── layout.jsx         # Root layout
│   └── page.jsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── FeatureCard.jsx
│   │   ├── PageHero.jsx
│   │   ├── SectionHeader.jsx
│   │   └── WaterCard.jsx
│   ├── Footer.jsx        # Site footer
│   └── Header.jsx        # Site header with navigation
├── lib/                   # Utility functions and data
│   └── data.js           # Site data (waters, matches, etc.)
├── package.json
├── tailwind.config.js    # Tailwind configuration
└── next.config.js        # Next.js configuration
```

## Customization

### Colors

The color palette is defined in `tailwind.config.js` with three main themes:
- **River** - Deep water blues and teals
- **Sunset** - Warm orange accents
- **Earth** - Natural brown tones

### Typography

- **Display Font**: Playfair Display (headings)
- **Body Font**: Source Sans 3 (body text)

### Adding New Waters

Add new water entries to the appropriate array in `lib/data.js`:

```javascript
export const rivers = [
  {
    id: 'unique-id',
    name: 'Water Name',
    description: 'Description of the water',
    image: '/images/rivers/image.jpg',
    species: ['Chub', 'Roach', 'Pike'],
    facilities: ['Car parking', 'Easy access'],
  },
  // ...
];
```

## Environment Variables

No environment variables are required for basic functionality.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is for demonstration purposes.

## Credits

- Original website: [Leeds DASA](https://www.leedsdasa.co.uk)
- Icons: [Lucide](https://lucide.dev)
- Fonts: [Google Fonts](https://fonts.google.com)

