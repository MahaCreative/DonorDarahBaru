import { Link } from "@inertiajs/react";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
function DropdownMenu({ menu, children }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const openHandler = () => {
        console.log(open);
        setOpen(!open);
    };
    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setOpen(false);
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
            ref={ref}
            onClick={openHandler}
            className={
                "px-2 my-2 text-white w-full rounded-md py-1 shadow hover:shadow-white/40 hover:bg-slate-600/80 hover:cursor-pointer"
            }
        >
            <div
                onClick={openHandler}
                className="flex justify-between items-center"
            >
                <p>{menu}</p>
                <div
                    className={clsx(
                        open ? "" : "rotate-180",
                        "text-white text-lg duration-300 transition-all"
                    )}
                >
                    <ArrowDropUpIcon color="inherit" fontSize="inherit" />
                </div>
            </div>
            <div
                className={clsx(
                    open ? "opacity-100" : "max-h-0 collapse opacity-0",
                    "flex flex-col px-4 transition-all duration-300 ease-out"
                )}
            >
                {children}
            </div>
        </div>
    );
}

function DropdownLink({ children, ...props }) {
    return (
        <Link
            {...props}
            className=" text-white w-full rounded-md py-1 shadow hover:shadow-white/40 hover:bg-slate-600/80 block px-2"
        >
            {children}
        </Link>
    );
}
DropdownMenu.Link = DropdownLink;
export default DropdownMenu;
