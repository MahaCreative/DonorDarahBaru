import React, { useEffect, useRef, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import NavLink from "./NavLink";
export default function ResponsiveNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };
    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (
        <div
            ref={menuRef}
            className="sm:hidden flex justify-between px-4 items-center text-sm bg-red-500 py-1 text-white relative"
        >
            <div>RSUD Mamuju</div>
            <div
                onClick={() => setMenuOpen(!menuOpen)}
                className={clsx(
                    menuOpen ? "bg-slate-900" : "",
                    "hover:bg-slate-950 px-2 py-1 rounded-md hover:cursor-pointer"
                )}
            >
                <MenuIcon color="inherit" />
            </div>
            <div
                className={clsx(
                    menuOpen ? "translate-x-0" : "translate-x-full collapse",
                    "h-screen top-0 right-0 w-[85vw] bg-red-500/30 backdrop-blur-sm fixed px-4 py-1 transition-all duration-300 ease-in-out z-[9999]"
                )}
            >
                <div
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={clsx(" w-full flex justify-end")}
                >
                    <div className="hover:bg-slate-950 px-2 py-1 rounded-md hover:cursor-pointer">
                        <ClearIcon color="inherit" />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-28 gap-5">
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
                    <NavLink active={route().current("z")}>Event Donor</NavLink>
                    <NavLink active={route().current("z")}>Login Admin</NavLink>
                </div>
            </div>
        </div>
    );
}
