"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function LogoCarousel() {
  const logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "https://shadcnblocks.com/images/block/logos/astro-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image:
        "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-1.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image:
        "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-2.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image:
        "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-3.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image:
        "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-4.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image:
        "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-5.svg",
      className: "h-5 w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image:
        "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-6.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image:
        "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-7.svg",
      className: "h-7 w-auto",
    },
  ];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex w-fit mx-auto items-center justify-center gap-4 rounded-full bg-muted px-4 py-2 tracking-tight transition-all ease-in-out hover:gap-6 mb-6">
          <span className="inline-block size-3 rounded-full bg-foreground" />
          <p className="text-foreground">Trusted by top companies</p>
        </div>
        
        <h2 className="max-w-4xl mx-auto text-center text-3xl font-medium tracking-tighter text-foreground md:text-4xl mb-12">
          Discover how our tools have unlocked new{" "}
          <span className="text-muted-foreground/70">
            levels of creativity{" "}
          </span>
          and efficiency
        </h2>

        <div className="relative w-full overflow-hidden">
          <Carousel
            opts={{ loop: true, align: "center" }}
            plugins={[AutoScroll({ playOnInit: true, speed: 0.8 })]}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {logos.map((logo, index) => (
                <CarouselItem
                  key={logo.id}
                  className="relative flex h-35 basis-1/2 justify-center items-center border border-r-0 border-border pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                >
                  <div className="flex flex-col items-center justify-center p-4">
                    <p className="absolute top-2 left-2 text-xs tracking-tighter text-muted-foreground">
                      {(index + 1).toString().padStart(2, "0")}
                    </p>
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
} 