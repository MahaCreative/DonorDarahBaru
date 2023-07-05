import React, { useCallback, useEffect, useState } from "react";
import Modal from "../Modal";
import InputLabel from "../InputLabel";
import TextInput from "../TextInput";
import { debounce } from "@mui/material";
import { router, usePage } from "@inertiajs/react";

export default function ModalFilter({ link, modalOpen, setModalOpen }) {
    const { dari } = usePage().props;
    const { sampai } = usePage().props;
    const [params, setParams] = useState({
        search: "",
        dari: dari,
        sampai: sampai,
    });
    const changeHandler = (e) => {
        setParams({ ...params, [e.target.name]: e.target.value });
    };
    const reload = useCallback(
        debounce((query) => {
            router.get(
                route(link),
                query,
                {
                    preserveState: true,
                },
                150
            );
        }),
        []
    );

    useEffect(() => reload(params), [params]);

    return (
        <div>
            <Modal show={modalOpen} onClose={setModalOpen}>
                <div className="p-2">
                    <h3 className="font-extralight text-sm border-b border-red-500">
                        Filter Berdasarkan Tanggal
                    </h3>
                    <p>Silahkan atur waktu data yang ingin di tampilkan</p>
                    <div>
                        <InputLabel>Dari Tanggal</InputLabel>
                        <TextInput
                            name="dari"
                            onChange={changeHandler}
                            type="date"
                        />
                    </div>
                    <div>
                        <InputLabel>Sampai Tanggal</InputLabel>
                        <TextInput
                            name="sampai"
                            onChange={changeHandler}
                            type="date"
                        />
                    </div>
                    <div>
                        <InputLabel>Search</InputLabel>
                        <TextInput name="search" onChange={changeHandler} />
                    </div>
                </div>
            </Modal>
        </div>
    );
}
