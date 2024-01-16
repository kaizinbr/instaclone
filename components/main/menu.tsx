"use client";

import {
    HomeOutline,
    HomeFill,
    SearchOutline,
    PlusFill,
    ReelsOutline,
    InstaSymbol,
    HeartFillMenu,
    HeartOutlineMenu,
    MessageOutline,
    MessageFill,
    ExploreFill,
    ExploreOutline,
    DesktopMenu,
} from "../icons/icons";
import { usePathname } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function Menu() {
    const pathname = usePathname();
    // console.log(pathname)
    const [activeHome, setActiveHome] = useState(false);
    const [showMenu, setshowMenu] = useState(false);

    useEffect(() => {
        if (pathname === "/") {
            setActiveHome(true);
        } else {
            setActiveHome(false);
        }

        if (pathname === "/message") {
            setshowMenu(false);
        } else {
            setshowMenu(true);
        }
    }, [pathname]);

    return (
        showMenu && (
            <div
                className={`
                    footer
                    h-12 w-full
                    border-t border-neutral-800
                    fixed bottom-0 z-30
                    bg-black

                    flex justify-evenly 

                    md:left-0 md:bottom-auto md:h-full md:w-[72px] md:top-0 
                    md:border-t-0 md:border-r md:flex-col md:justify-start md:items-center md:space-y-4
                    md:py-4
                `}
            >
                
                <div className="hidden md:flex mb-6">
                    <InstaSymbol />
                </div>
                <div className="md:flex-1 w-full flex">
                    <div
                        className={`
                        flex items-center justify-evenly w-full space-x-4
                        md:flex-col md:space-y-4 md:space-x-0 md:justify-start md:w-full
                    `}
                    >
                        {activeHome ? <HomeFill /> : <HomeOutline />}
                        <SearchOutline />
                        <PlusFill />
                        <ReelsOutline />
                        <InstaSymbol />
                        <div className="hidden order-3 md:flex">
                            <HeartOutlineMenu />
                        </div>
                        <div className="hidden order-5 md:flex">
                            <MessageOutline />
                        </div>
                        <div className="hidden order-6 md:flex">
                            <ExploreOutline />
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex">
                    <DesktopMenu />
                </div>
            </div>
        )
    );
}
