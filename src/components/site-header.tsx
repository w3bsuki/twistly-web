import { ModeToggle } from "@/components/mode-toggle"
import { Navbar } from "@/components/navbar"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Navbar />
        <div className="hidden md:flex">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
} 