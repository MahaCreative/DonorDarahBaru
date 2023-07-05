import Modal from "@/Components/Modal";
import UserLayout from "@/Layouts/UserLayout";
import React, { useState } from "react";
import FormRegistrasi from "./FormRegistrasi";
import FormPermintaan from "./FormPermintaan";

export default function Home() {
    const [modalRegistrasi, setModalRegistrasi] = useState(false);
    const [modalPermintaan, setModalPermintaan] = useState(false);
    return (
        <div className="relative h-screen md:h-[91.7vh] bg-slate-950 w-full">
            <Modal show={modalRegistrasi} onClose={setModalRegistrasi}>
                <div className="p-2">
                    <h3 className="font-extralight text-sm border-b border-red-500">
                        Registrasi Donor Darah
                    </h3>

                    <div>
                        <FormRegistrasi onClose={setModalRegistrasi} />
                    </div>
                </div>
            </Modal>
            <Modal show={modalPermintaan} onClose={setModalPermintaan}>
                <div className="p-2">
                    <h3 className="font-extralight text-sm border-b border-red-500">
                        Permintaan Darah
                    </h3>

                    <div>
                        <FormPermintaan onClose={setModalPermintaan} />
                    </div>
                </div>
            </Modal>
            <div className="absolute bottom-0 left-0">
                <img src="./images/asd.png" alt="" className="w-[35vw]" />
            </div>
            <div className="absolute bottom-0 right-0">
                <img src="./images/2.png" alt="" className="w-[10vw]" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-slate-950/10">
                <div className="h-full w-full flex justify-end items-center pr-16 px-8">
                    <div className="w:full md:w-1/2 ">
                        <h3 className="font-roboto font-bold text-3xl text-white">
                            Rumah Sakit Daerah Mamuju
                        </h3>
                        <p className="text-white text-md font-montserat font-light">
                            Selamat datang di aplikasi registrasi donor darah,
                            sistem informasi ini merupakan sistem informasi yang
                            digunakan untuk melakukan pendaftaran registrasi
                            donor darah, serta untuk melakukan permintaan darah
                            pada rumah sakit daerah mamuju
                        </p>
                        <p className="my-2.5 text-white text-md font-montserat font-light">
                            Untu melakukan Pendaftaran Donor Darah silahkan
                            tekan tombol dibawah ini
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setModalRegistrasi(true)}
                                className="text-white bg-red-500 text-sm md:text-base justify-self-start py-1 px-2 md:py-2.5 md:px-4 border shadow-md shadow-gray-400/50 rounded-lg hover:cursor-pointer transition duration-300 ease-in font-bold"
                            >
                                Registrasi Donor
                            </button>
                            <button
                                onClick={() => setModalPermintaan(true)}
                                className="text-white bg-red-500 text-sm md:text-base justify-self-start py-1 px-2 md:py-2.5 md:px-4 border shadow-md shadow-gray-400/50 rounded-lg hover:cursor-pointer transition duration-300 ease-in font-bold"
                            >
                                Request Permintaan Darah
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
Home.layout = (page) => <UserLayout children={page} />;
