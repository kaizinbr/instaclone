"use client";
import Link from "next/link";

export default function Modal({showModal, setShowModal}: {showModal: boolean, setShowModal: any}) {

    function setShowModalInLocalStorage() {
        localStorage.setItem("showModal", "true");
    }

    return (
        <div
            className={`
                modal
                w-full h-full
                fixed top-0 left-0 z-50
                bg-black bg-opacity-50
                backdrop-filter backdrop-blur-2xl
                flex items-center justify-center
                px-4
            `}
        >
            <div
                className={`
                    modal-content
                    w-full h-fit
                    max-w-[500px]
                    bg-neutral-800/80 rounded-lg
                    py-3
                `}
            >
                <div
                    className={`
                        modal-header
                        h-8 w-full
                        flex items-center justify-between
                        px-4
                    `}
                >
                    <h3
                        className={`
                            modal-header-title
                            text-lg text-neutral-300 font-semibold
                        `}
                    >
                        Recado
                    </h3>
                    <button
                        className={`
                            modal-header-close
                            text-neutral-300
                        `}
                        onClick={() => {
                            setShowModal(true);
                            setShowModalInLocalStorage();
                        }}
                    >

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`
                        modal-body
                        w-full
                        flex flex-col items-center justify-center
                        space-y-4
                    `}
                >
                    <div
                        className={`
                            modal-text
                            w-full
                            flex flex-col items-center justify-center
                            space-y-4 p-4
                        `}
                    >
                        <h1
                            className={`
                                modal-text-title
                                text-lg font-semibold
                            `}
                        >
                            Olá!
                        </h1>
                        <p
                            className={`
                                modal-text-body
                                text-sm text-center text-pretty px-2
                            `}
                        >
                            Primeiro, gostaria de dar as boas vindas e agradecer
                            por vir dar uma olhada! 
                            Aproveitando, não deixa de olhar o meu{" "}
                            <strong>
                                <Link
                                    href="https://bento.me/kaizin"
                                    target="_blank"
                                >
                                    bento.me
                                </Link>
                            </strong>
                            , que tem tudo importante sobre meus projetos de
                            design e programação. <br />
                        </p>
                                <Link
                                    href="https://bento.me/kaizin"
                                    target="_blank"
                                    className={`
                                        w-full py-3
                                        bg-violet-500 rounded-lg
                                        text-neutral-50 text-center
                                        font-bold

                                    `}
                                >
                                    bento.me/kaizin
                                </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
