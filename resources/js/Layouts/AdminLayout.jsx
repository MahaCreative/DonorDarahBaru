import React, { useEffect, useRef, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { Link, usePage } from "@inertiajs/react";
import DropdownMenu from "@/Components/Layouts/DropdownMenu";
export default function AdminLayout({ children, menu }) {
    const { auth } = usePage().props;
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const sidebarRef = useRef(null);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setDropdownOpen(false);
        }
    };
    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative overflow-x-hidden">
            <div
                className={clsx(
                    menuOpen ? "translate-x-0" : "-translate-x-full",
                    "transition-all duration-300 ease-out fixed h-screen w-[80vw] md:w-[50vw] lg:w-[30vw] bg-slate-950/40 backdrop-blur-sm z-50"
                )}
            >
                <div>
                    <div className="flex justify-between px-2 py-2 items-center border-b border-red-500 border-dashed">
                        <h3 className="text-white ">RSUD MAMUJU</h3>
                        <div
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="transition-all duration-300 text-white text-2xl px-2 py-1 hover:bg-red-500 hover:text-slate-950 hover:cursor-pointer rounded-md my-1 flex items-center justify-center"
                        >
                            <ClearIcon color="inherit" fontSize="inherit" />
                        </div>
                    </div>
                    <div className="py-2 px-4">
                        <Link
                            href={route("dashboard")}
                            className=" text-white w-full rounded-md py-1 shadow hover:shadow-white/40 hover:bg-slate-600/80 block px-2"
                        >
                            Dashboard
                        </Link>
                        <DropdownMenu menu={"Menu Registrasi Donor"}>
                            <DropdownMenu.Link href={route("registrasi-donor")}>
                                Registrasi Donor
                            </DropdownMenu.Link>
                            <DropdownMenu.Link
                                href={route("proses-registrasi-donor")}
                            >
                                Proses Registrasi Donor
                            </DropdownMenu.Link>
                        </DropdownMenu>
                        <DropdownMenu menu={"Menu Permintaan Darah"}>
                            <DropdownMenu.Link href={route("permintaan-darah")}>
                                Permintaan Darah
                            </DropdownMenu.Link>
                        </DropdownMenu>
                        <DropdownMenu menu={"Menu Golongan Darah"}>
                            <DropdownMenu.Link href={route("permintaan-darah")}>
                                Stok Darah
                            </DropdownMenu.Link>
                            <DropdownMenu.Link href={route("permintaan-darah")}>
                                Darah Masuk
                            </DropdownMenu.Link>
                            <DropdownMenu.Link href={route("permintaan-darah")}>
                                Darah Keluar
                            </DropdownMenu.Link>
                        </DropdownMenu>
                        <Link
                            href={route("dashboard")}
                            className=" text-white w-full rounded-md py-1 shadow hover:shadow-white/40 hover:bg-slate-600/80 block px-2"
                        >
                            Data Event Donor
                        </Link>
                        <Link
                            href={route("dashboard")}
                            className=" text-white w-full rounded-md py-1 shadow hover:shadow-white/40 hover:bg-slate-600/80 block px-2"
                        >
                            Nama Pendonor
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative bg-slate-900 w-full">
                <div className="flex justify-between items-center border-b border-dashed border-red-500 px-3">
                    <div
                        onClick={() => setMenuOpen(!menuOpen)}
                        className=" transition-all duration-300 text-white text-2xl px-2 py-1 hover:bg-red-500 hover:text-slate-950 hover:cursor-pointer rounded-md my-1 flex items-center justify-center"
                    >
                        <MenuIcon color="inherit" fontSize="inherit" />
                    </div>
                    <div className="flex items-center gap-3">
                        <div
                            ref={dropdownRef}
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="hidden sm:block text-white relative hover:shadow-md hover:shadow-white/30 px-2 rounded-md hover:cursor-pointer"
                        >
                            <p>{auth.user.name}</p>
                            <div
                                className={clsx(
                                    dropdownOpen
                                        ? "translate-y-0 opacity-100"
                                        : " -translate-y-4 opacity-0 collapse",
                                    "duration-300 transition-all ease-in-out absolute top-10 right-4 rounded-md flex flex-col  justify-center bg-slate-800/30 border border-red-500 border-dashed"
                                )}
                            >
                                <Link className="hover:cursor-pointer hover:text-red-500 hover:border-red-500 hover:border-dashed hover:border-b mx-2">
                                    Setting
                                </Link>
                                <Link
                                    href={route("dashboard")}
                                    className="hover:cursor-pointer hover:text-red-500 hover:border-red-500 hover:border-dashed hover:border-b mx-2"
                                >
                                    Dashboard
                                </Link>
                                <Link className="hover:cursor-pointer hover:text-red-500 hover:border-red-500 hover:border-dashed hover:border-b mx-2">
                                    Logout
                                </Link>
                            </div>
                        </div>
                        <Link
                            href={route("home")}
                            className="text-white hover:cursor-pointer hover:text-red-500 hover:border-red-500 hover:border-dashed hover:border-b mx-2"
                        >
                            Home
                        </Link>
                    </div>
                </div>
            </div>
            <div className="h-screen w-full bg-slate-950">
                <div className="flex gap-2 items-center w-full border-b border-dashed border-red-400 mx-4 py-2">
                    <Link
                        href={route("home")}
                        className="text-white hover:cursor-pointer hover:text-red-500 hover:border-red-500 hover:border-dashed hover:border-b mx-2"
                    >
                        Home
                    </Link>
                    <p className="text-white">/</p>
                    <Link className="text-white/40 hover:cursor-pointer hover:text-red-500 hover:border-red-500 hover:border-dashed hover:border-b mx-2">
                        {menu}
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}
