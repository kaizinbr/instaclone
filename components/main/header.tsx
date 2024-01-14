"use client";
import React, { useEffect, useRef, useState } from 'react';
import { InstagramLogo, HeartOutline, MessageOutline } from '../icons/icons';

export default function Header() {
    const [scrollY, setScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState("up");
    const [moreOptions, setMoreOptions] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > scrollY) {
            setScrollDirection("down");
            console.log("down");
        } else {
            setScrollDirection("up");
            console.log("up");
        }
        setScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollY]);

    return (
        <div
                className={`
                    header-top
                    h-14 w-full
                    border-b 
                    bg-black
                    fixed top-0 z-30
                    flex items-center justify-between
                    px-4

                    transition-transform duration-200 ease-in-out
                    ${
                        scrollDirection === "up"
                            ? "translate-y-0"
                            : "-translate-y-16"
                    }

                    ${scrollY > 0 ? "border-gray-800" : "border-transparent"}
                `}
                
            >
                <InstagramLogo />
                <div className="flex gap-6">
                    <HeartOutline />
                    <MessageOutline />
                </div>
            </div>
    )
}