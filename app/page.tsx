import Image from "next/image";

import RevealComp from "@/components/main/header";
import {
    DotsHorizontal,
    InstagramLogo,
    SearchFill,
    HomeOutline,
    SearchOutline,
    PlusFill,
    ReelsOutline,
    InstaSymbol,
    HeartOutline,
    MessageOutline,
} from "@/components/icons/icons";
import Post from "@/components/Post";
import { HiPlus } from "react-icons/hi";
import { EmblaOptionsType } from 'embla-carousel'
import Carousel from "@/components/slider/src/js/EmblaCarousel";

const OPTIONS: EmblaOptionsType = { containScroll: 'trimSnaps' }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


export default function Home() {
    return (
        <main className="flex min-h-screen h-[200vh] flex-col items-center justify- w-full">
            
            <div
                className={`
                    stories
                    h-28 w-full
                    mt-14
                    border-b border-gray-800
                `}
            >
                <div
                    className={`
                        stories-container
                        h-full w-full
                        flex items-center justify-start
                        px-4 gap-3
                    `}
                >
                    <div className="flex flex-col items-center">
                        <div
                            className={`
                                story
                                h-fit w-fit
                                rounded-full
                                relative
                                p-[2.5px]
                            `}
                        >
                            <div className={`
                                flex h-16 w-16 rounded-full
                                items-center justify-center
                                bg-gray-800
                                border-[3px] border-black
                                overflow-hidden
                            `}>
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
                            ><HiPlus className="h-[14px] w-[14px"/></span>
                        </div>
                        <span className="text-xs">Seu story</span>
                    </div>
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
                            <div className={`
                                flex h-16 w-16 rounded-full
                                items-center justify-center
                                bg-gray-800
                                border-[3px] border-black
                                overflow-hidden
                            `}>
                                <Image
                                    src="/1.png"
                                    alt="Post Image"
                                    width={64}
                                    height={64}
                                    className={`
                                    `}
                                />
                            </div>
                        </div>
                        <span className="text-xs">username</span>
                    </div>
                </div>
            </div>
            <div
                className={`
                    feed
                    w-full
                `}
            >
                <Post />
                <div className="sandbox">
                    <div className="sandbox__carousel">
                        <Carousel slides={SLIDES} options={OPTIONS} />
                    </div>
                </div>
            </div>

            {/* 
<RevealComp y={-20} duration='200ms' threshold={0.75}>
                        <h2 className='text-xl md:text-4xl mb-4 font-bold'>Welcome</h2>
                        <p className='max-w-sm text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla qui provident dolor beatae laborum, nisi laudantium tempora numquam aut molestiae velit eius minus. Odio voluptas at eveniet quasi, excepturi eaque?</p>
                    </RevealComp> */}
            
        </main>
    );
}
