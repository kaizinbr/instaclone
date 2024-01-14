import Image from "next/image"
import { HiPlus } from "react-icons/hi"

export default function Stories() {
    return( <div
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
    </div>)
}