"use client"

import { motion } from "framer-motion"
import { ChevronRightIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-background py-20 sm:py-24 md:py-32">
      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">
        <div className="mb-4 flex items-center justify-center gap-4">
          <img
            className="size-6"
            alt="Web Agency icon"
            src="https://shadcnblocks.com/images/block/block-1.svg"
          />
          <h2 className="text-center text-lg font-semibold tracking-tight text-foreground">
            Web Agency Solutions
          </h2>
        </div>

        <h1 className="font-inter mx-auto max-w-4xl text-center text-[60px] leading-[1.1] font-semibold tracking-tighter text-foreground sm:text-[70px] md:text-[90px] lg:text-[105px] md:leading-[1.1]">
          Your Digital Presence Matters
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg sm:text-xl text-muted-foreground">
          We help businesses thrive in the digital world with modern web development, 
          strategic marketing, creative design, and effective social media solutions.
        </p>

        <div className="relative mt-10 flex flex-col items-center justify-center gap-4">
          <Link href="#services">
            <Button className="w-auto md:w-75 rounded-2xl px-6 py-6 shadow-[0px_1px_3px_#0000001a,inset_0px_2px_0px_#ffffff40]">
              Our Services
            </Button>
          </Link>
          <Link
            href="#contact"
            className="group relative z-10 flex w-auto md:w-75 items-center justify-center rounded-2xl py-4 text-muted-foreground hover:bg-none"
          >
            Contact Us
            <ChevronRightIcon className="ml-1 h-4 w-4 transition-all ease-in-out group-hover:ml-4" />
          </Link>
        </div>
        
        {/* Desktop animation - right side */}
        <motion.div
          initial={{ opacity: 0, y: -250, scale: 0.6 }}
          animate={{ opacity: 100, y: 0, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="absolute -top-80 -right-80 z-0 hidden h-full w-240 items-center justify-center lg:flex"
        >
          <img
            className="infinite absolute w-full rotate-12 animate-spin duration-[15s] ease-linear"
            src="https://shadcnblocks.com/images/block/illustrations/tokyo-solar-system-around-a-smiley.svg"
            alt=""
          />
          <div className="z-10 size-32 rounded-full bg-background p-7" />
        </motion.div>
        
        {/* Desktop animation - left side */}
        <motion.div
          initial={{ opacity: 0, y: 250, scale: 0.6 }}
          animate={{ opacity: 100, y: 0, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="-bottom-80 -left-80 z-0 mt-32 -mb-24 hidden h-full w-full items-center justify-center lg:absolute lg:flex lg:w-240"
        >
          <img
            className="infinite absolute w-full rotate-12 animate-spin duration-[15s] ease-linear"
            src="https://shadcnblocks.com/images/block/illustrations/tokyo-solar-system-around-a-smiley.svg"
            alt=""
          />
          <div className="z-10 size-32 rounded-full bg-background p-7" />
        </motion.div>
        
        {/* Mobile animation - simplified version */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex lg:hidden w-full max-w-sm"
        >
          <img
            className="infinite w-full animate-spin duration-[20s] ease-linear opacity-30"
            src="https://shadcnblocks.com/images/block/illustrations/tokyo-solar-system-around-a-smiley.svg"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  )
} 