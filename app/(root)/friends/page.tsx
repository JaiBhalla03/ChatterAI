'use client'
import React from 'react';
import ItemList from "@/components/shared/item-list/ItemList";
import ConversationFallback from "@/components/shared/conversation/ConversationFallback";
import AddFriendDialog from "@/app/(root)/friends/_components/AddFriendDialog";
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import Request from "@/app/(root)/friends/_components/Request"

type Props = {};

const FriendsPage = (props: Props) => {
    const requests = useQuery(api.requests.get);
    return <>
        <ItemList title={'Friends'} action={<AddFriendDialog/>}>
            {
                requests ? (
                    requests.length === 0 ? (
                        <p>No friend requests found</p>
                    ): (
                        requests.map((request) =>{
                            return (
                                <Request
                            key={request.request._id}
                            id={request.request._id}
                            imageUrl={request.sender.imageUrl}
                            username={request.sender.username}
                            email={request.sender.email}
                            />
                            )
                        })
                    )
                ): null
            }
        </ItemList>
        <ConversationFallback/>
    </>
};

export default FriendsPage;