import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { router, useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function FormPermintaan({ model, onClose }) {
    const { data, setData, post, reset, errors } = useForm({
        nama: "",
        tanggal_lahir: "",
        golongan_darah: "",
        jumlah_permintaan: "1",
        keterangan: "",
    });
    const { golongan } = usePage().props;
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("user.permintaan_darah"), {
            onSuccess: onClose(false),
        });
    };
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const updateHandler = (e) => {
        e.preventDefault();
        router.patch(route("user.permintaan_darah"), data, {
            onSuccess: () => onClose(false),
        });
    };
    useEffect(() => {
        setData({
            ...data,
            id: model ? model.id : "",
            nama: model ? model.nama : "",
            tanggal_lahir: model ? model.tanggal_lahir : "",
            golongan_darah: model ? model.golongan_darah : "",
            jumlah_permintaan: "1",
            keterangan: model ? model.keterangan : "",
        });
    }, [model]);
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
                            value={data.nama}
                            onChange={changeHandler}
                            name="nama"
                            className="w-full"
                            placeholder="Nama Lengkap"
                        />
                        {/* {errors.nama && <InputError message={errors.nama} />} */}
                    </div>
                    <div className="w-full">
                        <InputLabel>Tanggal Lahir</InputLabel>
                        <TextInput
                            value={data.tanggal_lahir}
                            onChange={changeHandler}
                            name="tanggal_lahir"
                            type="date"
                            className="w-full"
                            placeholder="Tanggal Lahir"
                        />
                        {/* {errors.nama && <InputError message={errors.nama} />} */}
                    </div>
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
                    <option value={data.gol_darah_id} selected>
                        {model
                            ? model.gol_dar.golongan_darah
                            : "Pilih Golongan Darah"}
                    </option>
                    {golongan.map((item, key) => (
                        <option key={key} value={item.id}>
                            {item.golongan_darah}
                        </option>
                    ))}
                </select>
                {/* {errors.golongan_darah && (
                    <InputError message={errors.golongan_darah} />
                )} */}
            </div>
            <div className="w-full">
                <div className="flex justify-between items-center gap-2">
                    <div className="w-full">
                        <InputLabel>Jumlah Permintaan</InputLabel>
                        <TextInput
                            value={data.jumlah_permintaan}
                            onChange={changeHandler}
                            name="jumlah_permintaan"
                            min={1}
                            max={3}
                            className="w-full"
                            placeholder="Jumlah Permintaan"
                        />
                        {/* {errors.jumlah_permintaan && <InputError message={errors.jumlah_permintaan} />} */}
                    </div>
                </div>
                <div className="w-full">
                    <InputLabel>Tanggal Lahir</InputLabel>
                    <textarea
                        value={data.keterangan}
                        onChange={changeHandler}
                        name="keterangan"
                        placeholder="keterangan"
                        className="w-full border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-md shadow-sm "
                    ></textarea>
                    {errors.keterangan && (
                        <InputError message={errors.keterangan} />
                    )}
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
