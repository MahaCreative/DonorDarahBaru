import MenuTable from "@/Components/Layouts/MenuTable";
import Modal from "@/Components/Modal";
import AdminLayout from "@/Layouts/AdminLayout";
import FormPermintaan from "@/Pages/User/FormPermintaan";
import { router } from "@inertiajs/react";
import React, { useState } from "react";

export default function PermintaanDarah(props) {
    const permintaan = props.permintaan;
    const [modalTambah, setModalTambah] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [modalFilter, setModalFilter] = useState(false);
    const [modalProses, setModalProses] = useState(false);
    const [model, setModel] = useState(null);

    const editClick = (data) => {
        setModel(data);
        setModalEdit(true);
    };

    const deleteClick = (data) => {
        // router.delete(route('user.permintaan_donor'))
        setModel(data);
        setModalDelete(true);
    };

    const deleteHandler = () => {
        router.delete(route("user.permintaan_darah_delete"), {
            data: model,
            onSuccess: setModalDelete(false),
        });
    };

    const prosesClick = (data) => {
        setModel(data);
        setModalProses(true);
    };

    const prosesPermintaan = () => {
        router.post(route("proses-permintaan-darah"), model, {
            onSuccess: setModalProses(false),
        });
    };
    return (
        <div>
            <Modal show={modalDelete} onClose={setModalDelete}>
                <div className="p-2">
                    <h3 className="font-extralight text-sm border-b border-red-500">
                        Warning
                    </h3>
                    <p>
                        Apakah anda yakin ingin menghapus data? data yang
                        dihapus akan menghapus data yang terkait
                    </p>
                    <div className="flex gap-2">
                        <button
                            onClick={deleteHandler}
                            className="text-white text-sm md:text-base justify-self-start py-1 px-2 md:py-1 md:px-2 border shadow-md shadow-gray-400/50 rounded-lg hover:cursor-pointer transition duration-300 ease-in font-light bg-slate-900"
                        >
                            Submit
                        </button>
                        <button
                            onClick={() => setModalDelete(false)}
                            className="text-white text-sm md:text-base justify-self-start py-1 px-2 md:py-1 md:px-2 border shadow-md shadow-gray-400/50 rounded-lg hover:cursor-pointer transition duration-300 ease-in font-light bg-red-500"
                        >
                            cancell
                        </button>
                    </div>
                </div>
            </Modal>

            <Modal show={modalProses} onClose={setModalProses}>
                <div className="p-2">
                    <h3 className="font-extralight text-sm border-b border-red-500">
                        Proses Permintaan Darah
                    </h3>
                    <p>Mengambil darah dari stok yang ada</p>
                    <button
                        onClick={prosesPermintaan}
                        className="text-white text-sm md:text-base justify-self-start py-1 px-2 md:py-1 md:px-2 border shadow-md shadow-gray-400/50 rounded-lg hover:cursor-pointer transition duration-300 ease-in font-light bg-blue-500"
                    >
                        Ambil Darah
                    </button>
                    <div></div>
                </div>
            </Modal>
            <Modal show={modalTambah} onClose={setModalTambah}>
                <div className="p-2">
                    <h3 className="font-extralight text-sm border-b border-red-500">
                        Tambah Permintaan Darah
                    </h3>
                    <FormPermintaan onClose={setModalTambah} />
                    <div></div>
                </div>
            </Modal>
            <Modal show={modalEdit} onClose={setModalEdit}>
                <div className="p-2">
                    <h3 className="font-extralight text-sm border-b border-red-500">
                        Edit Permintaan Darah
                    </h3>
                    <FormPermintaan model={model} onClose={setModalEdit} />
                    <div></div>
                </div>
            </Modal>
            <div className="grid my-4 grid-cols-1 lg:grid-cols-2 items-center px-4">
                <div className="flex gap-3 items-center">
                    <button
                        onClick={() => setModalTambah(true)}
                        className="text-white text-sm md:text-base justify-self-start py-1 px-2 md:py-1 md:px-2 border shadow-md shadow-gray-400/50 rounded-lg hover:cursor-pointer transition duration-300 ease-in font-light bg-blue-500"
                    >
                        Tambah Permintaan
                    </button>
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
                <table className="w-full text-white rounded-lg overflow-x-auto capitalize">
                    <thead className="bg-red-500 px-4 rounded-md">
                        <tr className="px-4">
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Kode Permintaan
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Tanggal Permintaan
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Nama Peminta
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Nama Petugas Menangani
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Permintaan Darah
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Keterangan
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Jumlah Permintaan
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Status
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Aksi
                            </td>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-slate-700 capitalize">
                        {permintaan.length > 0 ? (
                            permintaan.map((item, key) => (
                                <tr
                                    key={key}
                                    className="hover:even:bg-gray-300"
                                >
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        {item.kode_registrasi}
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        {item.created_at}
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        {item.nama}
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        {item.user
                                            ? item.user.name
                                            : "Belum Ada Yang Menangani"}
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        {item.gol_dar.golongan_darah}
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        {item.keterangan}
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        {item.jumlah_permintaan}
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        {item.status_permintaan ===
                                        "menunggu verifikasi" ? (
                                            <p className="text-orange-500">
                                                {item.status_permintaan}
                                            </p>
                                        ) : item.status_permintaan ===
                                          "berhasil" ? (
                                            <p className="text-green-500">
                                                {item.status_permintaan}
                                            </p>
                                        ) : (
                                            <p className="text-red-500">
                                                {item.status_permintaan}
                                            </p>
                                        )}
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        <MenuTable>
                                            {item.proses == null && (
                                                <MenuTable.menu
                                                    onClick={() =>
                                                        prosesClick(item)
                                                    }
                                                >
                                                    Proses Permintaan
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
                                    </td>
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
PermintaanDarah.layout = (page) => <AdminLayout children={page} />;
