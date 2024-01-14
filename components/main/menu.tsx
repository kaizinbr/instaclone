'use client';

import { HomeOutline, HomeFill, SearchOutline, PlusFill, ReelsOutline, InstaSymbol } from "../icons/icons";
import { usePathname } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function Menu() {

    const pathname = usePathname()
    // console.log(pathname)
    const [activeHome, setActiveHome] = useState(false)
    const [activeInsta, setActiveInsta] = useState(false)
    
    useEffect(() => {
        if (pathname === "/") {
            setActiveHome(true)
        } else {
            setActiveHome(false)
        }
    }, [pathname])


    return (
        <div
                className={`
                    footer
                    h-12 w-full
                    border-t border-gray-800
                    fixed bottom-0 z-30
                    bg-black

                    flex justify-evenly
                `}
            >
                <div className="flex items-center justify-evenly w-full space-x-4">
                    {activeHome ? <HomeFill /> : <HomeOutline />}
                    <SearchOutline />
                    <PlusFill />
                    <ReelsOutline />
                    <InstaSymbol />
                </div>
            </div>
    )
}