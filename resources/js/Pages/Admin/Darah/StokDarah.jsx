import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

export default function StokDarah() {
    return <div className="">StokDarah</div>;
}
StokDarah.layout = (page) => (
    <AdminLayout children={page} menu={"Stok Darah"} />
);
