# VITeach Website 🎓

A modern, responsive website for VITeach – a non-profit educational organization founded and run by motivated students from Vellore Institute of Technology, Chennai.

## ✨ Features

- **Modern Design**: Built with Next.js 15 and Tailwind CSS for a beautiful, responsive interface
- **Interactive Components**: Smooth animations and transitions using Motion library
- **Typewriter Effect**: Dynamic text animations for engaging user experience
- **MDX Support**: Blog and content management with MDX integration
- **Database Integration**: PostgreSQL with Drizzle ORM for data management
- **Authentication**: Secure user authentication system
- **Responsive Layout**: Mobile-first design that works on all devices

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (Framer Motion alternative)
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Better Auth
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Carousel**: Embla Carousel
- **Development**: ESLint, Prettier, Husky

## 📁 Project Structure

<pre>
src/
├── app/                # Next.js app router pages
│   ├── blogs/          # Blog section
│   ├── content/        # Content pages
│   ├── story/          # Story/digital library
│   ├── team/           # Team information
│   └── viteacher-tales/# VITeacher tales section
├── components/         # Reusable UI components
│   ├── page-components/# Page-specific components
│   └── ui/             # Base UI components
├── constants/          # Data constants and metadata
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
</pre>

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- PostgreSQL database
- Docker (for local database)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd viteach-website
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Fill in your database and authentication credentials
   ```

4. **Start the database**

   ```bash
   pnpm db:start
   ```

5. **Run database migrations**

   ```bash
   pnpm db:generate
   pnpm db:migrate
   ```

6. **Start the development server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📜 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm db:start` - Start PostgreSQL with Docker
- `pnpm db:stop` - Stop PostgreSQL
- `pnpm db:studio` - Open Drizzle Studio for database management

## 🎯 Key Features

### Hero Section

- Engaging tagline: "Light a spark, ignite a fire"
- Dynamic typewriter effect with rotating messages
- Call-to-action buttons for Digital Library and Learn More

### About Section

- Mission-driven approach to education
- Community-focused initiatives
- 10+ years of experience
- Impact statistics: 250+ active members, 5+ lakh students impacted

### Content Sections

- **Digital Library**: Educational resources and stories
- **Blogs**: Regular updates and educational content
- **Team**: Meet the mentors and contributors
- **VITeacher Tales**: Success stories and experiences

## 🔧 Development

### Code Quality

- ESLint configuration for code linting
- Prettier for consistent code formatting
- Husky for pre-commit hooks
- TypeScript for type safety

### Database

- Drizzle ORM for type-safe database operations
- PostgreSQL as the primary database
- Docker Compose for local development
- Database migrations and schema management

### Styling

- Tailwind CSS 4 for utility-first styling
- Custom component library built on Radix UI primitives
- Responsive design with mobile-first approach
- Custom animations and transitions

## 🌟 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on how to submit pull requests, report issues, and contribute to the project.

## 📄 License

This project is licensed under the terms specified in the [LICENSE.md](LICENSE.md) file.

## 🤝 Support

For support, questions, or to get involved:

- Check our [FAQ page](/faq)
- Review our [Code of Conduct](CODE_OF_CONDUCT.md)
- Contact the team through our website

## 🙏 Acknowledgments

- Built by passionate students from Vellore Institute of Technology, Chennai
- Special thanks to all contributors and mentors
- Inspired by the mission to make education accessible and engaging

---

**VITeach** – Celebrating 10+ years of inspiring students, sharing knowledge, and making learning fun! 🎉
