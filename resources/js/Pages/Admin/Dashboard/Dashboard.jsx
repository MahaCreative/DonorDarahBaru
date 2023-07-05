import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

export default function Dashboard() {
    return <div>Dashboard</div>;
}
Dashboard.layout = (page) => <AdminLayout children={page} />;
