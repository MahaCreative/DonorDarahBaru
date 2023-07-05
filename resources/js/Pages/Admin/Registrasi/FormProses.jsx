import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function FormProses({ model, onClose }) {
    const { data, setData, post, reset, errors } = useForm({
        registrasi_id: model ? model.id : "",
        status: "",
        jumlah_darah: "",
        tekanan_darah: "",
        keterangan: "",
    });

    useEffect(() => {
        setData({
            ...data,
            registrasi_id: model ? model.id : "",
            status: model ? model.status : "",
            jumlah_darah: model ? model.jumlah_darah : "",
            tekanan_darah: model ? model.tekanan_darah : "",
            keterangan: model ? model.keterangan : "",
        });
    }, []);

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const updateHandler = (e) => {
        e.preventDefault();
        post(route("proses-registrasi-donor"), {
            onSuccess: onClose(false),
        });
    };
    return (
        <form onSubmit={updateHandler}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-center">
                <div>
                    <InputLabel>Jumlah Darah</InputLabel>
                    <TextInput
                        type="number"
                        value={data.jumlah_darah}
                        onChange={changeHandler}
                        placeholder="Jumlah Darah"
                        name="jumlah_darah"
                    />
                    {errors.jumlah_darah && (
                        <InputError message={errors.jumlah_darah} />
                    )}
                </div>
                <div>
                    <InputLabel>Tekanan Darah</InputLabel>
                    <TextInput
                        value={data.tekanan_darah}
                        onChange={changeHandler}
                        placeholder="Jumlah Darah"
                        name="tekanan_darah"
                    />
                    {errors.tekanan_darah && (
                        <InputError message={errors.tekanan_darah} />
                    )}
                </div>
                <div>
                    <InputLabel>Status Proses</InputLabel>
                    <select
                        onChange={changeHandler}
                        name="status"
                        className="w-full border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-md shadow-sm "
                    >
                        <option value="">Pilih Status</option>
                        <option value="berhasil">Berhasil</option>
                        <option value="gagal">Gagal</option>
                    </select>
                    {errors.status && <InputError message={errors.status} />}
                </div>
                <textarea
                    onChange={changeHandler}
                    placeholder="keterangan"
                    name="keterangan"
                    className="w-full border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-md shadow-sm "
                ></textarea>

                <div className="flex gap-2">
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
