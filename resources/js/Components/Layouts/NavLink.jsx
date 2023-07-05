import { Link } from "@inertiajs/react";
import clsx from "clsx";
import React from "react";

export default function NavLink({ children, active, ...props }) {
    return (
        <Link
            {...props}
            className={clsx(
                active ? "shadow-sm shadow-white/30 bg-slate-950" : "",
                "hover:cursor-pointer rounded-lg px-2 py-1 hover:bg-slate-900 hover:shadow-sm hover:shadow-white/30"
            )}
        >
            {children}
        </Link>
    );
}
