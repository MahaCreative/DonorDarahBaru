import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { router, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function FormRegistrasi({ model, onClose }) {
    console.log(model);
    const { data, setData, post, errors, reset } = useForm({
        nama: "",
        email: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        jenis_kelamin: "",
        telp: "",
        alamat: "",
        golongan_darah: "",
        tanggal_donor: "",
        jam_donor: "",
        jenis_donor: "",
        pekerjaan: "",
        riwayat_penyakit: "",
        berat_badan: "35",
        tinggi_badan: "80",
    });
    const { golongan } = usePage().props;
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("user.permintaan_donor"));
    };

    useEffect(() => {
        setData({
            ...data,
            id: model ? model.id : "",
            nama: model ? model.pendonor.nama : "",
            email: model ? model.pendonor.email : "",
            tempat_lahir: model ? model.pendonor.tempat_lahir : "",
            tanggal_lahir: model ? model.pendonor.tanggal_lahir : "",
            jenis_kelamin: model ? model.pendonor.jenis_kelamin : "",
            telp: model ? model.pendonor.telp : "",
            alamat: model ? model.pendonor.alamat : "",
            golongan_darah: model ? model.gol_darah.id : "",
            tanggal_donor: model ? model.tanggal_donor_darah : "",
            jam_donor: model ? model.jam_donor_darah : "",
            jenis_donor: model ? model.Jenis_donor_darah : "",
            pekerjaan: model ? model.pendonor.pekerjaan : "",
            riwayat_penyakit: model ? model.pendonor.riwayat_penyakit : "",
            berat_badan: model ? model.pendonor.berat_badan : "35",
            tinggi_badan: model ? model.pendonor.tinggi_badan : "80",
        });
    }, [model]);

    const updateHandler = (e) => {
        e.preventDefault();
        router.patch(route("user.permintaan_donor"), data);
    };
    return (
        <form
            onSubmit={model ? updateHandler : submitHandler}
            className="w-full"
        >
            <div className="w-full">
                <div className="flex justify-between items-center gap-2">
                    <div className="w-full">
                        <InputLabel>Nama Lengkap</InputLabel>
                        <TextInput
                            defaultValue={data.nama}
                            onChange={changeHandler}
                            name="nama"
                            className="w-full"
                            placeholder="Nama Lengkap"
                        />
                        {errors.nama && <InputError message={errors.nama} />}
                    </div>
                    <div className="w-full">
                        <InputLabel>Email</InputLabel>
                        <TextInput
                            defaultValue={data.email}
                            onChange={changeHandler}
                            name="email"
                            type="email"
                            className="w-full"
                            placeholder="Email"
                        />
                        {errors.email && <InputError message={errors.email} />}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-2">
                    <div className="w-full">
                        <InputLabel>Tempat Lahir</InputLabel>
                        <TextInput
                            defaultValue={data.tempat_lahir}
                            onChange={changeHandler}
                            name="tempat_lahir"
                            className="w-full"
                        />
                        {errors.tempat_lahir && (
                            <InputError message={errors.tempat_lahir} />
                        )}
                    </div>
                    <div className="w-full">
                        <InputLabel>Tanggal Lahir</InputLabel>
                        <TextInput
                            defaultValue={data.tanggal_lahir}
                            onChange={changeHandler}
                            name="tanggal_lahir"
                            type="date"
                            className="w-full"
                            placeholder="Tanggal Lahir"
                        />
                        {errors.tanggal_lahir && (
                            <InputError message={errors.tanggal_lahir} />
                        )}
                    </div>
                    <div className="w-full">
                        <InputLabel>Jenis Kelamin</InputLabel>
                        <select
                            defaultValue={data.jenis_kelamin}
                            onChange={changeHandler}
                            name="jenis_kelamin"
                            id=""
                            className="w-full border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-md shadow-sm "
                        >
                            <option defaultValue={data.jenis_kelamin}>
                                {model
                                    ? data.jenis_kelamin
                                    : "Pilih Jenis Kelamin"}
                            </option>
                            <option value="Laki-Laki">Laki-Laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                        {errors.jenis_kelamin && (
                            <InputError message={errors.jenis_kelamin} />
                        )}
                    </div>
                    <div className="w-full">
                        <InputLabel>Telp</InputLabel>
                        <TextInput
                            defaultValue={data.telp}
                            onChange={changeHandler}
                            name="telp"
                            className="w-full"
                            placeholder="Telp"
                        />
                        {errors.telp && <InputError message={errors.nama} />}
                    </div>
                </div>
                <div className="flex justify-between items-center gap-2">
                    <div className="w-full">
                        <InputLabel>Alamat</InputLabel>
                        <textarea
                            defaultValue={data.alamat}
                            onChange={changeHandler}
                            name="alamat"
                            className="w-full border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-md shadow-sm "
                        ></textarea>
                        {errors.alamat && (
                            <InputError message={errors.alamat} />
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-2">
                    <div className="w-full">
                        <InputLabel>Pekerjaan</InputLabel>
                        <TextInput
                            defaultValue={data.pekerjaan}
                            onChange={changeHandler}
                            name="pekerjaan"
                            className="w-full"
                            placeholder="Pekerjaan"
                        />
                    </div>
                    <div className="w-full">
                        <InputLabel>Riwayat Penyakit</InputLabel>
                        <TextInput
                            defaultValue={data.riwayat_penyakit}
                            onChange={changeHandler}
                            name="riwayat_penyakit"
                            className="w-full"
                            placeholder="Riwayat Penyakit"
                        />
                        {errors.riwayat_penyakit && (
                            <InputError message={errors.riwayat_penyakit} />
                        )}
                    </div>
                    <div className="w-full">
                        <InputLabel>Berat Badan</InputLabel>
                        <TextInput
                            defaultValue={data.berat_badan}
                            onChange={changeHandler}
                            name="berat_badan"
                            className="w-full"
                            type="number"
                            placeholder="Berat Badan"
                            min="35"
                            max="159"
                        />
                    </div>
                    <div className="w-full">
                        <InputLabel>Tinggi Badan</InputLabel>
                        <TextInput
                            defaultValue={data.tinggi_badan}
                            onChange={changeHandler}
                            name="tinggi_badan"
                            className="w-full"
                            type="number"
                            placeholder="Tinggi Badan"
                            min="80"
                            max="300"
                        />
                    </div>
                </div>
                <div className=" ">
                    <InputLabel>Select Golongan Darah</InputLabel>
                    <select
                        onChange={changeHandler}
                        name="golongan_darah"
                        id=""
                        className="w-full border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-md shadow-sm "
                    >
                        <option defaultValue={data.golongan_darah}>
                            {model
                                ? model.gol_darah.golongan_darah
                                : "Pilih Golongan Darah"}
                        </option>
                        {golongan.map((item, key) => (
                            <option key={key} value={item.id}>
                                {item.golongan_darah}
                            </option>
                        ))}
                    </select>
                    {errors.golongan_darah && (
                        <InputError message={errors.golongan_darah} />
                    )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-2">
                    <div className="w-full">
                        <InputLabel>Tanggal Donor</InputLabel>
                        <TextInput
                            type="date"
                            defaultValue={data.tanggal_donor}
                            onChange={changeHandler}
                            name="tanggal_donor"
                            className="w-full"
                            placeholder="Tanggal Donor"
                        />
                        {errors.tanggal_donor && (
                            <InputError message={errors.tanggal_donor} />
                        )}
                    </div>
                    <div className="w-full">
                        <InputLabel>Jam Donor</InputLabel>
                        <TextInput
                            type="time"
                            defaultValue={data.jam_donor}
                            onChange={changeHandler}
                            name="jam_donor"
                            className="w-full"
                            placeholder="Jam Donor"
                        />
                        {errors.jam_donor && (
                            <InputError message={errors.jam_donor} />
                        )}
                    </div>
                    <div className="w-full col-span-2">
                        <InputLabel>Jenis Donor</InputLabel>
                        <select
                            defaultValue={data.jenis_donor}
                            onChange={changeHandler}
                            name="jenis_donor"
                            id=""
                            className="w-full border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-md shadow-sm "
                        >
                            <option defaultValue={data.jenis_donor}>
                                {model ? data.jenis_donor : "Pilih Jenis Donor"}
                            </option>
                            <option value="sukarela">Sukarela</option>
                            <option value="bayaran">Bayaran</option>
                            <option value="pengganti">Pengganti</option>
                        </select>
                        {errors.jenis_donor && (
                            <InputError message={errors.jenis_donor} />
                        )}
                    </div>
                </div>
                <div className="flex gap-1 my-2">
                    <button className="text-white bg-slate-900 text-sm md:text-base justify-self-start py-1 px-2 md:py-1 md:px-2 border shadow-md shadow-gray-400/50 rounded-lg hover:cursor-pointer transition duration-300 ease-in font-light">
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={() => onClose(false)}
                        className="text-white bg-red-500 text-sm md:text-base justify-self-start py-1 px-2 md:py-1 md:px-2 border shadow-md shadow-gray-400/50 rounded-lg hover:cursor-pointer transition duration-300 ease-in font-light"
                    >
                        Cancell
                    </button>
                </div>
            </div>
        </form>
    );
}
