"use client";

import { useState } from "react";

import {
    DotsVertical,
    HeartOutline,
    Comment,
    Send,
    BookmarkOutline,
} from "./icons/icons";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import Carousel from "./slider/src/js/EmblaCarousel";

const OPTIONS: EmblaOptionsType = { containScroll: "trimSnaps" };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Post() {
    const [isTruncated, setIsTruncated] = useState(true);

    return (
        <div
            className={`
                post
                w-full
                mb-4
            `}
        >
            <div
                className={`
                    post-header
                    h-14 w-full
                    border-b border-gray-800
                    flex items-center justify-between
                    pl-4 pr-2
                `}
            >
                <div className="flex items-center gap-3">
                    <Image
                        src="/3.jpg"
                        alt="Post Avatar"
                        width={32}
                        height={32}
                        className={`
                            post-avatar
                            h-8 w-8
                            
                            rounded-full
                            bg-gray-400
                        `}
                    />
                    <div
                        className={`
                            post-username
                            text-sm font-medium
                        `}
                    >
                        ric.marinho
                    </div>
                </div>
                <DotsVertical />
            </div>
            <div
                className={`
                    post-image
                    w-full
                    bg-gray-400
                `}
            >
                <div className="sandbox">
                    <div className="sandbox__carousel">
                        <Carousel slides={SLIDES} options={OPTIONS} />
                    </div>
                </div>
            </div>
            <div
                className={`
                    h-12 w-full
                    border-t border-gray-800
                    flex items-center justify-between
                    px-4
                `}
            >
                <div className="flex gap-4">
                    <HeartOutline />
                    <Comment />
                    <Send />
                </div>
                <BookmarkOutline />
            </div>
            <div
                className={`
                    post-likes
                    h-4 w-full
                    px-4
                    text-sm font-medium
                    mb-1
                `}
            >
                100 curtidas
            </div>
            <div
                className={`
                    post-caption
                    w-full
                    px-4
                    flex flex-row
                `}
            >
                <div
                    className={`
                        post-text
                        text-sm 
                    `}
                >
                    <span
                        className={`
                            post-text
                            text-sm font-normal
                            ${isTruncated ? "line-clamp-2" : "line-clamp-none"}
                        `}
                    >
                    <span
                        className={`
                            post-username
                            text-sm font-medium
                            mr-1
                        `}
                    >
                        username
                    </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, voluptatum. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Quisquam, voluptatum.
                    </span>
                    <button
                        type="button"
                        className={`
                            post-username
                            text-sm font-normal
                            text-gray-400
                            mr-1
                        `}
                        onClick={() => setIsTruncated(!isTruncated)}
                    >
                        Ver {isTruncated ? "mais" : "menos"}
                    </button>
                </div>
            </div>
            <div
                className={`
                        post-comments
                        text-sm font-normal
                        text-gray-400
                        w-full
                        px-4 mt-1
                    `}
            >
                Ver todos os 100 comentários
            </div>
            <span
                className={`
                    post-date
                    text-[10px] font-normal
                    text-gray-400
                    w-full
                    px-4 mt-1
                `}
            >
                Há 1 hora
            </span>
        </div>
    );
}
