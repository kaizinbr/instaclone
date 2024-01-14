"use client";
import React, { useEffect, useRef, useState } from "react";
import { InstagramLogo, HeartOutline, MessageOutline, ArrowBackBtn, VoiceCallBtn, VideoCallBtn } from "../icons/icons";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function HeaderMsg() {
    return (
        <div
            className={`
                    header-top
                    h-14 w-full
                    bg-black
                    fixed top-0 z-30
                    flex items-center justify-between
                    px-4

                    transition-transform duration-200 ease-in-out
                `}
        >
            <div className="flex items-center gap-6">
                <ArrowBackBtn />
                <div className="flex items-center gap-4">
                    <Image 
                        src="/pfp.jpg"
                        alt="Picture of the author"
                        width={32}
                        height={32}
                        className="rounded-full h-8 w-8"
                    />
                    <div className="flex flex-col">
                        <span className="font-semibold text-sm mb-[5px]">Kaizin</span>
                        <span className="text-xs text-gray-400">05kaizin</span>
                        </div>
                </div>
            </div>
            <div className="flex gap-6">
                <VoiceCallBtn />
                <VideoCallBtn />
            </div>
        </div>
    );
}
