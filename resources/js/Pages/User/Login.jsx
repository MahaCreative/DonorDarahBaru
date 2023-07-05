import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import UserLayout from "@/Layouts/UserLayout";
import { useForm } from "@inertiajs/react";
import React from "react";

export default function Login() {
    const { data, setData, post, errors, reset } = useForm({
        email: "",
        password: "",
    });

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onSuccess: reset("email", "password"),
        });
    };
    return (
        <div className="relative h-screen md:h-[91.7vh] bg-slate-950 w-full">
            <div className="absolute bottom-0 left-0">
                <img src="./images/asd.png" alt="" className="w-[35vw]" />
            </div>
            <div className="absolute bottom-0 right-0">
                <img src="./images/2.png" alt="" className="w-[10vw]" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-slate-950/10">
                <div className="h-full w-full flex justify-end items-center pr-16 px-8">
                    <div className="w:full md:w-1/2 p-2 bg-white rounded-md">
                        <h3 className="font-bold">
                            Selamat Datang Di Aplikasi Registrasi Donor
                        </h3>
                        <p>
                            Hy user selamat datang di halaman login, silahkan
                            masukkan email dan password anda untuk masuk ke
                            halaman dashboard anda
                        </p>
                        <form onSubmit={submitHandler} className="my-2">
                            <div>
                                <InputLabel>Email</InputLabel>
                                <TextInput
                                    onChange={changeHandler}
                                    name="email"
                                    type="email"
                                />
                                {errors.email && (
                                    <InputError message={errors.email} />
                                )}
                            </div>
                            <div>
                                <InputLabel>Password</InputLabel>
                                <TextInput
                                    onChange={changeHandler}
                                    name="password"
                                    type="password"
                                />
                                {errors.password && (
                                    <InputError message={errors.email} />
                                )}
                            </div>
                            <button
                                type="submit"
                                className="my-2 bg-slate-900 text-white py-1 px-2 rounded-lg hover:text-red-500"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

Login.layout = (page) => <UserLayout children={page} />;
