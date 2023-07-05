import Navbar from "@/Components/Layouts/Navbar";
import React from "react";

export default function UserLayout({ children }) {
    return (
        <div className="max-w-full overflow-x-hidden">
            <Navbar />
            <div>{children}</div>
        </div>
    );
}
