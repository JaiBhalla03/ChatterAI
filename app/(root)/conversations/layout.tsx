'use client';

import React from 'react';
import ItemList from "@/components/shared/item-list/ItemList";
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import {Loader2} from "lucide-react";
import DMConversationItem from "@/app/(root)/conversations/_components/DMConversationItem";

type Props = React.PropsWithChildren<{}>;

const ConversationalLayout = ({children} : Props) => {
    const conversations = useQuery(api.conversations.get);
    return (
        <>
            <ItemList title={'Conversations'}>
                {
                    conversations ? (
                        conversations.length === 0 ? (
                           <p>No conversations found</p>
                        ): (
                            conversations.map((conversations) => {
                                return conversations.conversation.isGroup ? null : (
                                    <DMConversationItem
                                        key={conversations.conversation._id}
                                        id={conversations.conversation._id}
                                        username={conversations.otherMember?.username || ""}
                                        imageUrl={conversations.otherMember?.imageUrl || ""}
                                    />
                                )
                            })
                        )
                    ): (<Loader2/>)
                }
            </ItemList>
            {children}
        </>
    );
};

ConversationalLayout.propTypes = {

};

export default ConversationalLayout;