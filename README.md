# Modern Web Agency Website

A professional web agency website built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, and Supabase.

## Features

- **Modern UI/UX**: Clean and professional design with smooth animations
- **Responsive Design**: Optimized for all screen sizes
- **Dark Mode Support**: Toggle between light and dark themes
- **Performance Optimized**: Fast loading times with Next.js
- **Service Pages**: Dedicated pages for each service offering
- **Contact Form**: Integrated contact form with Supabase backend

## Tech Stack

- **Next.js**: React framework for server-side rendering and static site generation
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Accessible and customizable UI components
- **Framer Motion**: Animation library
- **Supabase**: Open-source Firebase alternative for backend services

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `src/app`: Next.js App Router pages and layouts
- `src/components`: Reusable UI components
- `src/lib`: Utility functions and configuration
- `src/components/ui`: shadcn/ui components
- `public`: Static assets

## Deployment

This project can be easily deployed to Vercel:

```bash
npm run build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
