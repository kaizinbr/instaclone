
import Post from "@/components/Post";
import Stories from "@/components/main/Stories";

import data from "@/data/data.json";

export default function Home() {
    // console.log(data);
    return (
        <div className="flex min-h-screen flex-col items-center justify- w-full">
            
            <Stories />
            <div
                className={`
                    feed
                    w-full
                    
                `}
            >
                {data[0].posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </div>
            
        </div>
    );
}
