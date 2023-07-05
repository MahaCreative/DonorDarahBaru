import React, { useEffect, useRef, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import clsx from "clsx";
function MenuTable({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
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
            className="relative hover:cursor-pointer hover:text-red-500"
        >
            <div onClick={() => setMenuOpen(!menuOpen)}>
                <MoreHorizIcon color="inherit" fontSize="small" />
            </div>
            <div
                className={clsx(
                    menuOpen ? "" : "collapse",
                    "absolute top-0 right-6 md:right-20 bg-slate-950/30 backdrop-blur-sm py-2 px-4 rounded-md w-[25vw] md:w-[15vw]"
                )}
            >
                {children}
            </div>
        </div>
    );
}

function menuButton({ children, ...props }) {
    return (
        <div
            {...props}
            className="hover:bg-red-500/30 backdrop-blur-sm text-white rounded-md my-1"
        >
            {children}
        </div>
    );
}
MenuTable.menu = menuButton;
export default MenuTable;
