import UserLayout from "@/Layouts/UserLayout";
import React from "react";

export default function SyaratDonor() {
    return (
        <div className="relative h-screen md:h-[91.7vh] bg-slate-950 w-full">
            <div className="absolute bottom-0 left-0">
                <img src="./images/asd.png" alt="" className="w-[35vw]" />
            </div>
            <div className="absolute bottom-0 right-0">
                <img src="./images/2.png" alt="" className="w-[10vw]" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-slate-950/10">
                <div className="h-full w-full flex md:justify-end md:items-center pr-16 px-8">
                    <div className="sm:w-full md:w-1/2 max-h-[90vh] md:max-h-[70vh] overflow-y-auto">
                        <h3 className="font-roboto font-bold text-3xl text-white">
                            Syarat Donor
                        </h3>
                        <p className="text-white font-light text-sm">
                            Berikut ini syarat umum yang harus dipenuhi sebelum
                            melakukan donor darah:
                        </p>
                        <div className="bg-red-500/50 backdrop-blur-sm rounded-md shadow-sm shadow-gray-400 py-2 px-4">
                            <p className="text-sm text-white font-light my-2 border border-white px-2 py-1 rounded-md">
                                Umur minimal 17 tahun. Di usia ini, perkembangan
                                tubuh telah sempurna. Sehingga, mendonorkan
                                darah tidak mengganggu sistem kerja tubuh
                            </p>
                            <p className="text-sm text-white font-light my-2 border border-white px-2 py-1 rounded-md">
                                Umur minimal 17 tahun. Di usia ini, perkembangan
                                tubuh telah sempurna. Sehingga, mendonorkan
                                darah tidak mengganggu sistem kerja tubuh
                            </p>

                            <p className="text-sm text-white font-light my-2 border border-white px-2 py-1 rounded-md">
                                Berat badan minimal 45 kg. Kurang dari itu,
                                pengurangan darah dikhawatirkan akan mengganggu
                                keseimbangan sistem kerja tubuh.
                            </p>

                            <p className="text-sm text-white font-light my-2 border border-white px-2 py-1 rounded-md">
                                Temperatur tubuh normal, antara 36,6 - 37,5
                                derajat Celsius.
                            </p>

                            <p className="text-sm text-white font-light my-2 border border-white px-2 py-1 rounded-md">
                                Tekanan darah normal, yaitu sistole 110 - 160
                                mmHg, diastole 70 - 100 mmHg.
                            </p>

                            <p className="text-sm text-white font-light my-2 border border-white px-2 py-1 rounded-md">
                                Denyut nadi teratur, yaitu sekitar 50 - 100
                                kali/ menit.
                            </p>

                            <p className="text-sm text-white font-light my-2 border border-white px-2 py-1 rounded-md">
                                Haemoglobin wanita minimal 12 gram%, pria
                                minimal 13 gram%.
                            </p>

                            <p className="text-sm text-white font-light my-2 border border-white px-2 py-1 rounded-md">
                                Frekuensi donor darah maksimal 5 kali setahun,
                                atau berjarak minimal 3 bulan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
SyaratDonor.layout = (page) => <UserLayout children={page} />;
