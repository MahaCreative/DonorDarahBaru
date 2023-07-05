import MenuTable from "@/Components/Layouts/MenuTable";
import ModalFilter from "@/Components/Layouts/ModalFilter";
import Modal from "@/Components/Modal";
import AdminLayout from "@/Layouts/AdminLayout";
import FormRegistrasi from "@/Pages/User/FormRegistrasi";
import { router } from "@inertiajs/react";
import { Table } from "@mui/material";
import clsx from "clsx";
import moment from "moment/moment";
import React, { useState } from "react";
import FormProses from "./FormProses";

export default function RegistrasiPendonor(props) {
    const currentDate = moment().format("YYYY-MM-DD");
    const registrasi = props.registrasi;
    const bayaran = props.bayaran;
    const sukarela = props.sukarela;
    const pengganti = props.pengganti;
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
        router.delete(route("user.permintaan_donor_delete"), {
            data: model,
            onSuccess: setModalDelete(false),
        });
    };

    const prosesClick = (data) => {
        setModel(data);
        setModalProses(true);
    };
    return (
        <div>
            <ModalFilter
                link={"registrasi-donor"}
                modalOpen={modalFilter}
                setModalOpen={setModalFilter}
            />
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
                        Proses Registrasi Donor Darah
                    </h3>
                    <div className="bg-gray-300/40">
                        <p>Data registrasi donor darah yang akan diproses</p>
                        <p>
                            Kode Registrasi donor :{" "}
                            {model && model.kode_registrasi}
                        </p>
                        <p>
                            Kode Registrasi donor :{" "}
                            {model && model.pendonor.nama}
                        </p>
                        <p>
                            Kode Registrasi donor :{" "}
                            {model && model.gol_darah.golongan_darah}
                        </p>
                        <div>
                            <p>Tanggal proses : {currentDate}</p>
                        </div>
                    </div>
                    <div>
                        <FormProses model={model} onClose={setModalProses} />
                    </div>
                </div>
            </Modal>
            <Modal show={modalTambah} onClose={setModalTambah}>
                <div className="p-2">
                    <h3 className="font-extralight text-sm border-b border-red-500">
                        Registrasi Donor Darah
                    </h3>

                    <div>
                        <FormRegistrasi onClose={setModalTambah} />
                    </div>
                </div>
            </Modal>
            <Modal show={modalEdit} onClose={setModalEdit}>
                <div className="p-2">
                    <h3 className="font-extralight text-sm border-b border-red-500">
                        Edit Data Registrasi Donor Darah
                    </h3>

                    <div>
                        <FormRegistrasi model={model} onClose={setModalEdit} />
                    </div>
                </div>
            </Modal>
            <div className="grid grid-cols-1 lg:grid-cols-3 my-2 px-4 text-white gap-4">
                <div className="flex justify-between items-center rounded-md border border-dashed border-red-500  px-2 ">
                    <h3 className="font-bold text-lg md:text-2xl lg:text-4xl">
                        Donor Sukarela
                    </h3>
                    <h3 className="font-bold text-2xl">{sukarela}</h3>
                </div>
                <div className="flex justify-between items-center rounded-md border border-dashed border-red-500  px-2 ">
                    <h3 className="font-bold text-lg md:text-2xl lg:text-4xl">
                        Donor Pengganti
                    </h3>
                    <h3 className="font-bold text-2xl">{pengganti}</h3>
                </div>
                <div className="flex justify-between items-center rounded-md border border-dashed border-red-500  px-2 ">
                    <h3 className="font-bold text-lg md:text-2xl lg:text-4xl">
                        Donor Bayaran
                    </h3>
                    <h3 className="font-bold text-2xl">{bayaran}</h3>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-4">
                <div className="flex gap-3 items-center">
                    <button
                        onClick={() => setModalTambah(true)}
                        className="text-white text-sm md:text-base justify-self-start py-1 px-2 md:py-1 md:px-2 border shadow-md shadow-gray-400/50 rounded-lg hover:cursor-pointer transition duration-300 ease-in font-light bg-blue-500"
                    >
                        Tambah Registrasi
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
                <table className="w-full text-white rounded-lg overflow-x-auto">
                    <thead className="bg-red-500 px-4 rounded-md">
                        <tr className="px-4">
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Kode Registrasi
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Tanggal Registrasi
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Nama Pendonor
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Golongan Darah
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                <p>Status Donor</p>
                                <p>Jenis Donor</p>
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Waktu Order Donor
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Nama Petugas
                            </td>
                            <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt]">
                                Aksi
                            </td>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-slate-700 capitalize">
                        {registrasi.length > 0 ? (
                            registrasi.map((item, key) => (
                                <tr
                                    key={key}
                                    className="hover:even:bg-gray-300"
                                >
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        {item.kode_registrasi}
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        {item.kode_registrasi}
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        {item.pendonor.nama}
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        {item.gol_darah.golongan_darah}
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        <p
                                            className={clsx(
                                                item.status_donor == "order"
                                                    ? "text-orange-500"
                                                    : item.status_donor ===
                                                      "berhasil"
                                                    ? "text-green-400"
                                                    : "text-red-500"
                                            )}
                                        >
                                            {item.status_donor}
                                        </p>
                                        <p>{item.Jenis_donor_darah}</p>
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        <p className="border-b border-red-500 border-dashed">
                                            {item.tanggal_donor_darah}
                                        </p>
                                        <p className="">
                                            {item.jam_donor_darah}
                                        </p>
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
                                        <p>
                                            {item.petugas
                                                ? item.petugas.name
                                                : "Di Isi Oleh Pengguna"}
                                        </p>
                                    </td>
                                    <td className="w-[10vw] mx-2 px-2 text-center text-[6pt] md:text-[10pt] lg:text-[12pt] border-b border-slate-400/50">
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

RegistrasiPendonor.layout = (page) => (
    <AdminLayout menu={"Registrasi Pendonor"} children={page} />
);
