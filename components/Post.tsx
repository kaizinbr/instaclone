"use client";

import { useState } from "react";

import {
    DotsVertical,
    HeartOutline,
    HeartFill,
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

interface PostProps {
    username: string;
    pfp: string;
    message: string;
    images: string[];
    data: string;
}

export default function Post(post: PostProps | any) {
    const [isTruncated, setIsTruncated] = useState(true);

    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [likes, setLikes] = useState(100);

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
                    border-b border-neutral-800
                    flex items-center justify-between
                    pl-4 pr-2
                `}
            >
                <div className="flex items-center gap-3">
                    <Image
                        src={post.post.pfp}
                        alt={`Ícone do perfil de ${post.post.username}`}
                        width={32}
                        height={32}
                        className={`
                            post-avatar
                            h-8 w-8                            
                            rounded-full
                            bg-neutral-200
                        `}
                    />
                    <div
                        className={`
                            post-username
                            text-sm font-medium
                        `}
                    >
                        {post.post.username}
                    </div>
                </div>
                <DotsVertical />
            </div>
            <div
                className={`
                    post-image
                    w-full
                    bg-neutral-800
                `}
                onDoubleClick={() => {
                    setLiked(!liked);
                    if (liked) {
                        setLikes(likes - 1);
                    } else {
                        setLikes(likes + 1);
                    }
                }}
            >
                <div className="sandbox">
                    <div className="sandbox__carousel">
                        <Carousel slides={post.post.images} options={OPTIONS} />
                    </div>
                </div>
            </div>
            <div
                className={`
                    h-12 w-full
                    border-t border-neutral-800
                    flex items-center justify-between
                    px-4
                `}
            >
                <div className="flex gap-4">
                    <div
                        onClick={() => {
                            setLiked(!liked);
                            if (liked) {
                                setLikes(likes - 1);
                            } else {
                                setLikes(likes + 1);
                            }
                        }}
                    >
                        {liked ? <HeartFill /> : <HeartOutline />}
                    </div>
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
                {likes} curtidas
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
                            {post.post.username}
                        </span>
                        {post.post.message}
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
