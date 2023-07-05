import ModalFilter from "@/Components/Layouts/ModalFilter";
import AdminLayout from "@/Layouts/AdminLayout";
import React, { useState } from "react";

export default function ProsesDonor(props) {
    const proses = props.proses;
    const [modalFilter, setModalFilter] = useState(false);
    return (
        <div>
            <ModalFilter
                link={"proses-registrasi-donor"}
                modalOpen={modalFilter}
                setModalOpen={setModalFilter}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 my-2 px-4 text-white gap-4">
                <div className="flex justify-between items-center rounded-md border border-dashed border-red-500  px-2 ">
                    <h3 className="font-bold text-lg md:text-2xl lg:text-4xl">
                        Donor Berhasil
                    </h3>
                    <h3 className="font-bold text-2xl">1</h3>
                </div>
                <div className="flex justify-between items-center rounded-md border border-dashed border-red-500  px-2 ">
                    <h3 className="font-bold text-lg md:text-2xl lg:text-4xl">
                        Donor Gagal
                    </h3>
                    <h3 className="font-bold text-2xl">1</h3>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-4">
                <div className="flex gap-3 items-center">
                    <button
                        onClick={() => setModalFilter(true)}
                        className="text-white text-sm md:text-base justify-self-start py-1 px-2 md:py-1 md:px-2 border shadow-md shadow-gray-400/50 rounded-lg hover:cursor-pointer transition duration-300 ease-in font-light bg-cyan-400"
                    >
                        Filter Tanggal
                    </button>
                    <button className="text-white text-sm md:text-base justify-self-start py-1 px-2 md:py-1 md:px-2 border shadow-md shadow-gray-400/50 rounded-lg hover:cursor-pointer transition duration-300 ease-in font-light bg-green-400">
                        Cetak
                    </button>
                </div>
            </div>
            <div className="p-4 w-full">
                <table className="w-full capitalize text-white rounded-lg overflow-x-auto">
                    <thead className="bg-red-500 px-4 rounded-md">
                        <tr className="px-4">
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Kode Registrasi
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Tanggal Proses
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Nama Petugas
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Nama Pendonor
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Golongan Darah
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Jumlah Darah
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Keterangan
                            </td>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-slate-700">
                        {proses.length > 0 ? (
                            proses.map((item, key) => (
                                <tr
                                    key={key}
                                    className="hover:even:bg-gray-300"
                                >
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        {item.registrasi.kode_registrasi}
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        {item.created_at}
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        {item.petugas.name}
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        {item.registrasi.pendonor.nama}
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        {
                                            item.registrasi.gol_darah
                                                .golongan_darah
                                        }
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        <p className="border-b border-red-500 border-dashed">
                                            {item.jumlah_darah}
                                        </p>
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        <p className="">{item.status}</p>
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        <p>{item.keterangan}</p>
                                    </td>
                                    {/* <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        <MenuTable>
                                            {item.proses == null && (
                                                <MenuTable.menu
                                                    onClick={() =>
                                                        prosesClick(item)
                                                    }
                                                >
                                                    Proses Donor
                                                </MenuTable.menu>
                                            )}
                                            <MenuTable.menu
                                                onClick={() => editClick(item)}
                                            >
                                                Edit
                                            </MenuTable.menu>
                                            <MenuTable.menu
                                                onClick={() =>
                                                    deleteClick(item)
                                                }
                                            >
                                                Delete
                                            </MenuTable.menu>
                                        </MenuTable>
                                    </td> */}
                                </tr>
                            ))
                        ) : (
                            <tr className="hover:even:bg-gray-300">
                                <td colSpan={9} className="w-full text-center">
                                    Tidak ada data
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
ProsesDonor.layout = (page) => (
    <AdminLayout menu={"Proses Registrasi Donor"} children={page} />
);
