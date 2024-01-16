/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MessagePage: React.FC = () => {
    return (
        <div className="flex  ">
            <div className="flex-1 max-w-3xl m-auto">
                <div className="flex flex-col items-center justify-start h-full mt-7">
                    <Image
                        src="/pfp.jpg"
                        alt="404"
                        width={500}
                        height={500}
                        className='rounded-full h-32 w-32 mb-2'
                    />
                    <h1 className="text-md font-semibold">Kaio Nunes</h1>
                    <p className="text-xs ">
                        <span className="">Instagram{' '}</span>&#183;
                        <span className="">{' '}05kaizin</span>
                    </p>
                    
                    <p className="text-xs text-neutral-500">
                        <span className="">465 seguidores{' '}</span>&#183;
                        <span className="">{' '}8 publicações</span>
                    </p>
                    <p className="text-xs text-neutral-500">
                        Vocês não se seguem mutuamente no Instagram
                    </p>
                    <p className="text-xs text-neutral-500">
                        Me contate em uma das formas abaixo!
                    </p>
                </div>
                <div className="flex flex-row mt-4 w-full justify-center text-center items-center gap-2 px-4">
                    <Link href='https://www.instagram.com/05kaizin/' target="_blank" className="flex-1 bg-neutral-800 text-neutral-200 text-sm font-semibold py-2 px-4 rounded-md">
                        Instagram
                    </Link>
                    <Link href='mailto:kaiolucas1812@gmail.com' target="_blank" className="flex-1 bg-neutral-800 text-neutral-200 text-sm font-semibold py-2 px-4 rounded-md">
                        Email
                    </Link>
                    <Link href='https://github.com/kaizinbr' target="_blank" className="flex-1 bg-neutral-800 text-neutral-200 text-sm font-semibold py-2 px-4 rounded-md">
                        Github
                    </Link>
                    <Link href='https://www.linkedin.com/in/kaizin' target="_blank" className="flex-1 bg-neutral-800 text-neutral-200 text-sm font-semibold py-2 px-4 rounded-md">
                        LinkedIn
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MessagePage;
