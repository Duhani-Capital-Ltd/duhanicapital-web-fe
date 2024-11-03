import { Button } from "@/components/ui/button";
import { Navigation } from "./navigation/Navigation";
import { DropdownCountry } from "./navigation/DropdowonCountry";
import { Link, Head } from "@inertiajs/react";

export const Navbar = () => {
    return (
        <>
            <nav className="flex items-center justify-between max-w-screen-xl py-3 mx-auto">
                <Link href="/">
                    <h1 className="text-4xl font-semibold text-blue-500 cursor-pointer">
                        DUHANI
                    </h1>
                </Link>
                <Navigation />
                <div className="flex items-center space-x-3">
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                        />
                    </svg>
                    <DropdownCountry />
                    <Button className="rounded-full" variant={"outline"}>
                        Login
                    </Button>
                    <Button className="rounded-full">Register</Button>
                </div>
            </nav>
        </>
    );
};
