"use client";

import { Menu } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const NAV_LOGO = {
  url: "/",
  src: "https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
  alt: "WebAgency",
  title: "WebAgency",
};

const NAV_ITEMS = [
  {
    name: "Home",
    link: "/",
    hasSubmenu: false,
  },
  {
    name: "Web Development",
    link: "/web-development",
    hasSubmenu: true,
    submenu: [
      {
        title: "Frontend Development",
        href: "/web-development#frontend",
        description: "Modern, responsive frontend development with React and Next.js",
      },
      {
        title: "Backend Development",
        href: "/web-development#backend",
        description: "Robust and scalable backend solutions",
      },
      {
        title: "Full Stack Services",
        href: "/web-development#fullstack",
        description: "End-to-end web development solutions",
      },
    ],
  },
  {
    name: "Marketing & SEO",
    link: "/marketing-seo",
    hasSubmenu: true,
    submenu: [
      {
        title: "SEO Optimization",
        href: "/marketing-seo#seo",
        description: "Improve your search engine rankings and visibility",
      },
      {
        title: "Content Marketing",
        href: "/marketing-seo#content",
        description: "Strategic content creation and distribution",
      },
      {
        title: "Analytics & Reporting",
        href: "/marketing-seo#analytics",
        description: "Data-driven insights to optimize your marketing efforts",
      },
    ],
  },
  {
    name: "Design Services",
    link: "/design-services",
    hasSubmenu: true,
    submenu: [
      {
        title: "UI/UX Design",
        href: "/design-services#uiux",
        description: "User-centered design solutions for web and mobile",
      },
      {
        title: "Brand Identity",
        href: "/design-services#branding",
        description: "Logo design, brand guidelines, and visual identity",
      },
      {
        title: "Graphic Design",
        href: "/design-services#graphic",
        description: "Visual content for web, print, and social media",
      },
    ],
  },
  {
    name: "Social Media",
    link: "/social-media",
    hasSubmenu: false,
  },
];

const Navbar = () => {
  return (
    <section className="relative mx-auto flex max-w-full items-center justify-between bg-background px-6 py-3 md:w-fit lg:gap-4">
      <a href={NAV_LOGO.url} className="flex items-center gap-1">
        <span className="font-bold">{NAV_LOGO.title}</span>
      </a>

      <MobileNav />

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="h-full w-full">
          {NAV_ITEMS.map((item, index) =>
            item.hasSubmenu ? (
              <NavigationMenuItem key={index} className="rounded-2xl">
                <NavigationMenuTrigger className="bg-transparent px-2 py-1 text-xs">
                  {item.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-2xl">
                  <ul
                    className={cn(
                      "grid gap-2 p-2",
                      "md:w-[350px] lg:w-[400px]"
                    )}
                  >
                    {item.submenu.map((sub, i) => (
                      <ListItem
                        key={sub.title || i}
                        title={sub.title}
                        href={sub.href}
                      >
                        {sub.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.link}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent px-3 py-1.5 text-xs",
                  )}
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ),
          )}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden md:block">
        <Button
          variant="default"
          className="h-auto rounded-lg px-3 py-1.5 text-xs"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block space-y-1 rounded-md p-2 text-xs leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-xs leading-none font-medium">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const MobileNav = () => {
  return (
    <div className="mr-2 flex items-center justify-center md:hidden">
      <Popover>
        <PopoverTrigger>
          <Menu className="size-5 text-foreground" />
        </PopoverTrigger>

        <PopoverContent
          align="end"
          className="w-screen max-w-xs overflow-hidden"
        >
          <div className="w-full bg-background/80 pt-2 text-foreground backdrop-blur-md">
            <Accordion type="single" collapsible className="w-full">
              {NAV_ITEMS.map((navItem, idx) =>
                navItem.hasSubmenu ? (
                  <AccordionItem
                    key={idx}
                    value={navItem.name}
                    className="border-b-0"
                  >
                    <AccordionTrigger className="px-4 py-3 text-xs hover:bg-accent hover:no-underline">
                      <span className="text-foreground">{navItem.name}</span>
                    </AccordionTrigger>
                    <AccordionContent className="rounded-2xl">
                      <div className="ml-4 border-l-2 border-muted pl-2">
                        <ul className="py-1">
                          {navItem.submenu &&
                            navItem.submenu.map((sub, subIdx) => (
                              <li
                                key={sub.title || subIdx}
                                className="px-2 py-2 text-xs hover:bg-accent"
                              >
                                <a href={sub.href} className="block">
                                  {sub.title}
                                </a>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <div
                    key={idx}
                    className="rounded-lg px-4 py-3 text-xs hover:bg-accent"
                  >
                    <a
                      href={navItem.link}
                      className="flex items-center justify-between"
                    >
                      <span className="text-foreground">{navItem.name}</span>
                    </a>
                  </div>
                ),
              )}
            </Accordion>
            <div className="flex flex-col gap-2 p-4">
              <Button variant="default" className="px-3 text-xs">
                Contact Us
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
export { Navbar }; 