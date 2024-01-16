
import Modal from "@/components/Modal";
import Post from "@/components/Post";
import Stories from "@/components/main/Stories";

import data from "@/data/data.json";

export default function Home() {
    // console.log(data);
    return (
        <div className={`
            flex min-h-screen flex-col items-center 
            w-full max-w-screen-sm m-auto
        `}>
            
            <Stories />
            <div
                className={`
                    feed
                    w-full
                    max-w-md m-auto
                    
                `}
            >
                {data[0].posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </div>
            {/* <Modal /> */}
        </div>
    );
}
