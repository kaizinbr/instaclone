/* eslint-disable @next/next/no-img-element */
import React from 'react';


const MessagePage: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="bg-white rounded-lg shadow-lg p-4">
                        <div className="flex items-center mb-4">
                            <img
                                className="w-8 h-8 rounded-full mr-2"
                                src="https://via.placeholder.com/50"
                                alt="User Avatar"
                            />
                            <span className="font-bold">John Doe</span>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className="bg-gray-200 rounded-lg p-2">
                                <p className="text-gray-700">Hello!</p>
                            </div>
                            <div className="bg-gray-200 rounded-lg p-2">
                                <p className="text-gray-700">How are you?</p>
                            </div>
                            <div className="bg-gray-200 rounded-lg p-2">
                                <p className="text-gray-700">Im good, thanks!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <input
                    type="text"
                    className="border border-gray-300 rounded-lg p-2 w-full"
                    placeholder="Type a message..."
                />
            </div>
        </div>
    );
};

export default MessagePage;
