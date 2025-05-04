import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Link
            href="/"
            className="text-lg font-bold"
          >
            WebAgency
          </Link>
          <p className="text-sm text-muted-foreground md:text-base">
            &copy; {new Date().getFullYear()} WebAgency. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/web-development"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Web Development
          </Link>
          <Link
            href="/marketing-seo"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Marketing & SEO
          </Link>
          <Link
            href="/design-services"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Design Services
          </Link>
          <Link
            href="/social-media"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Social Media
          </Link>
        </div>
      </div>
    </footer>
  )
} 