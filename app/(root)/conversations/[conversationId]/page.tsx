'use client';
import React, {useState} from 'react';
import ConversationContainer from "@/components/shared/conversation/ConversationContainer";
import {useQuery} from "convex/react";
import {Id} from "@/convex/_generated/dataModel";
import {api} from "@/convex/_generated/api";
import {Loader2} from "lucide-react";
import Header from "@/app/(root)/conversations/[conversationId]/_components/Header";
import Body from "@/app/(root)/conversations/[conversationId]/_components/body/Body";
import ChatInput from "@/app/(root)/conversations/[conversationId]/_components/Input/ChatInput";
import RemoveFriendDialog from "@/app/(root)/conversations/[conversationId]/_components/dialogs/RemoveFriendDialog";

type Props = {
    params: {
        conversationId: Id<"conversations">;
    }
};

const Page = ({params: {conversationId}} : Props) => {
    const conversation = useQuery(api.conversation.get, {id: conversationId});

    const [removeFriendDialog, setRemoveFriendDialog] = useState(false);
    const [deleteGroupDialogOpen, setDeleteGroupDialogOpen] = useState(false);
    const [leaveGroupDialogOpen, setLeaveGroupDialogOpen] = useState(false);
    const [callType, setCallType] = useState<"audio" | "video" | null>(null);

    return conversation === undefined ?
        <div className={'w-full h-full flex items-center justify-center'}>
            <Loader2 className={'h-8 w-8'}/>
        </div> :
        conversation === null ? <p className={'w-full h-full flex items-center justify-center'}>
            Conversation not found
        </p> : <ConversationContainer>
            <RemoveFriendDialog conversationId={conversationId} open={removeFriendDialog} setOpen={setRemoveFriendDialog}/>
            <Header name={(conversation.isGroup ? conversation.name : conversation.otherMember.username) || ""}
                    imageUrl={conversation.isGroup ? undefined : conversation.otherMember.imageUrl}
                    options={conversation.isGroup ? [
                        {
                            label: "Leave Group",
                            destructive: false,
                            onClick: () => setLeaveGroupDialogOpen(true),
                        },
                        {
                            label: "Delete",
                            destructive: true,
                            onClick: () => setDeleteGroupDialogOpen(true),
                        }
                    ] : [
                        {
                            label: "Remove Friend",
                            destructive: true,
                            onClick: () => setRemoveFriendDialog(true)
                        }
                    ]}
            />
            <Body/>
            <ChatInput/>
        </ConversationContainer>
};

Page.propTypes = {

};

export default Page;