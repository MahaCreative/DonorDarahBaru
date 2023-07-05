import React from "react";
import NavLink from "./NavLink";

import ResponsiveNavbar from "./ResponsiveNavbar";
import { usePage } from "@inertiajs/react";

export default function Navbar() {
    const { auth } = usePage().props;
    console.log(auth.user);
    return (
        <div>
            <ResponsiveNavbar />
            <div className=" hidden sm:block bg-red-500 text-white py-2 px-4">
                <div className="flex justify-between items-center">
                    <h3>RSUD Mamuju</h3>
                    <div className="flex gap-2 text-sm">
                        <NavLink
                            href={route("home")}
                            active={route().current("home")}
                        >
                            Beranda
                        </NavLink>
                        <NavLink
                            href={route("syarat-donor")}
                            active={route().current("syarat-donor")}
                        >
                            Syarat Donor
                        </NavLink>
                        <NavLink
                        // href={route("event")}
                        // active={route().current("home")}
                        >
                            Event Donor
                        </NavLink>
                        {auth.user == null ? (
                            <NavLink
                                href={route("login")}
                                active={route().current("login")}
                            >
                                Login Admin
                            </NavLink>
                        ) : (
                            <NavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Dashboard
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
