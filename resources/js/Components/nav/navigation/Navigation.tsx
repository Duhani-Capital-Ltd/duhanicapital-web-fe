"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navigation() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <Trading />
                <Partners />
                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="/platform"
                        className={navigationMenuTriggerStyle()}
                    >
                        Platform
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <Company />
            </NavigationMenuList>
        </NavigationMenu>
    );
}

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
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

export const Partners = () => {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger>Partners</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid p-6">
                    <li>Tools</li>
                    <ListItem
                        className="w-[200px] px-2 py-1 disabled:"
                        href="#"
                    >
                        Market Analysis
                    </ListItem>
                    <ListItem className="w-[200px] px-2 py-1" href="/blog">
                        Blog
                    </ListItem>
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
    );
};

export const Trading = () => {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger>Trading</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid p-6">
                    <li>Account</li>
                    <ListItem
                        className="w-[200px] px-2 py-1"
                        href="/account/demo"
                    >
                        Demo
                    </ListItem>
                    <ListItem
                        className="w-[200px] px-2 py-1"
                        href="/account/micro-standard"
                    >
                        Micro & Standard
                    </ListItem>
                    <ListItem
                        className="w-[200px] px-2 py-1"
                        href="/account/professional-low-spread"
                    >
                        Professional & Low Spread
                    </ListItem>
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
    );
};

export const Company = () => {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger>Company</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid p-6">
                    <li>Company</li>
                    <ListItem className="w-[200px] px-2 py-1" href="/about">
                        About Us
                    </ListItem>
                    <ListItem
                        className="w-[200px] px-2 py-1"
                        href="/about#contactUs"
                    >
                        Contact Us
                    </ListItem>
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
    );
};
