"use client";

import Image from "next/image";
import { HiPlus } from "react-icons/hi";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import { motion } from "framer-motion";

export default function Stories() {
    const [showModal, setShowModal] = useState(true);

    // funciona ao contrario kkkkkkk se for false ele mostra o modal, se for true ele esconde
    // eu fiquei com preguiça de mudar o nome dps de fazer perdao
    function checkShowModalInLocalStorage() {
        const showModalValue = localStorage.getItem("showModal");
        const showModal = showModalValue === "true";
        return showModal;
    }

    useEffect(() => {
        setShowModal(checkShowModalInLocalStorage());
    }, []);

    return (
        <>
            <div
                className={`
                stories
                h-28 w-full
                border-b border-neutral-800 
            `}
            >
                <div
                    className={`
                    stories-container
                    h-full w-full
                    flex items-center justify-start
                    px-4 gap-3 mb-3
                `}
                >
                    <div className="flex flex-col items-center ">
                        <div
                            className={`
                            story
                            h-fit w-fit
                            rounded-full
                            relative
                            p-[2.5px]
                        `}
                        >
                            <div
                                className={`
                            flex h-16 w-16 rounded-full
                            items-center justify-center
                            bg-gray-800
                            border-[3px] border-black
                            overflow-hidden
                        `}
                            >
                                <Image
                                    src="/pfp.jpg"
                                    alt="Post Image"
                                    width={64}
                                    height={64}
                                    className={`
                                `}
                                />
                            </div>
                            <span
                                className={`
                                story-plus
                                absolute
                                h-6 w-6
                                rounded-full
                                bg-blue-500
                                flex items-center justify-center
                                bottom-0 right-0
                                border-[2px] border-black
                            `}
                            >
                                <HiPlus className="h-[14px] w-[14px" />
                            </span>
                        </div>
                        <span className="text-xs">Seu story</span>
                    </div>
                    <motion.button className="flex flex-col items-center"
                        onClick={() => {
                            setShowModal(false);
                        }}                        
                        whileTap={{ scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        
                    >
                        <div
                            className={`
                            story
                            h-fit w-fit
                            rounded-full
                            storyBorder
                            p-[2.5px]
                        `}
                        >
                            <div
                                className={`
                            flex h-16 w-16 rounded-full
                            items-center justify-center
                            bg-gray-800
                            border-[3px] border-black
                            overflow-hidden
                        `}
                            >
                                <Image
                                    src="/pfp.jpg"
                                    alt="Post Image"
                                    width={64}
                                    height={64}
                                    className={`
                                `}
                                />
                            </div>
                        </div>
                        <span className="text-xs">Contato</span>
                    </motion.button>
                    <div className="flex flex-col items-center">
                        <div
                            className={`
                            story
                            h-fit w-fit
                            rounded-full
                            storyBorder
                            p-[2.5px]
                        `}
                        >
                            <div
                                className={`
                            flex h-16 w-16 rounded-full
                            items-center justify-center
                            bg-gray-800
                            border-[3px] border-black
                            overflow-hidden
                        `}
                            >
                                <Image
                                    src="/txt1.jpg"
                                    alt="Post Image"
                                    width={64}
                                    height={64}
                                    className={`
                                `}
                                />
                            </div>
                        </div>
                        <span className="text-xs">txt_bighit</span>
                    </div>
                </div>
            </div>
            {!showModal && (
                <Modal showModal={showModal} setShowModal={setShowModal} />
            )}
        </>
    );
}
