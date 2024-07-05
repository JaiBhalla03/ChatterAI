import React from 'react';
import {Id} from "@/convex/_generated/dataModel";
import Link from "next/link";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {User} from "lucide-react";

type Props = {
    id: Id<"conversations">;
    imageUrl: string;
    username: string;
    lastMessageSender?: string;
    lastMessageContent?: string;
};

const DmConversationItem = ({id, imageUrl, username, lastMessageSender, lastMessageContent}: Props) => {
    return (
        <Link href={`/conversations/${id}`} className={"w-full"}>
            <div className={'p-2 flex flex-row items-center gap-4 truncate w-full border-b border-gray-300'}>
                <div className={'flex flex-row items-center gap-4 truncate'}>
                    <Avatar className={'w-12 h-12'}>
                        <AvatarImage src={imageUrl}/>
                        <AvatarFallback>
                            <User/>
                        </AvatarFallback>
                    </Avatar>
                    <div className={'flex flex-col gap-1 truncate'}>
                        <h4 className={'font-bold text-sm truncate'}>{username}</h4>
                        {lastMessageSender && lastMessageContent ? (<span className={'text-sm text-muted-foreground flex truncate overflow-ellipsis'}>
                            <p className={'font-semibold'}>
                                {lastMessageSender} {":"}&nbsp;
                            </p>
                            <p className={'truncate overflow-ellipsis'}>{lastMessageContent}</p>
                        </span>) : (
                            <p className={'text-gray-400 text-xs truncate'}>Start the conversation!</p>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};


export default DmConversationItem;