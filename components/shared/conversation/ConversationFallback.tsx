import React from 'react';
import {Card} from "@/components/ui/card";


const ConversationFallback = () => {
    return (
        <Card className={'hidden lg:flex h-full w-full p-2 items-center justify-center bg-white text-gray-400 shadow shadow-lg'}>
            SELECT/START A CONVERSATION TO GET STARTED!
        </Card>
    );
};

export default ConversationFallback;