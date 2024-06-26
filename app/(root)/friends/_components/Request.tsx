import React from 'react';
import {Id} from "@/convex/_generated/dataModel";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Check, Cross, User, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {api} from "@/convex/_generated/api";
import {useMutationState} from "@/hooks/useMutationState";
import {toast} from "sonner";
import {ConvexError} from "convex/values";
import {accept} from "@/convex/request";

type Props = {
    id: Id<'requests'>;
    imageUrl: string;
    username: string;
    email: string;
}

const Request = ({id, imageUrl, username, email}: Props)  => {
    const {mutate: denyRequest, pending: denyPending} = useMutationState(api.request.deny);
    const {mutate: acceptRequest, pending: acceptPending} = useMutationState(api.request.accept);

    return (
        <div className={''}>
            <div className={'flex items-center gap-2 justify-between truncate border-b py-2 px-1'}>
                <Avatar className={'w-12 h-12'}>
                    <AvatarImage src={imageUrl}/>
                    <AvatarFallback>
                        <User/>
                    </AvatarFallback>
                </Avatar>
                <div>
                    <h4 className={'truncate text-sm font-bold'}>{username}</h4>
                    <p className={'text-xs text-muted-foreground truncate'}>{email}</p>
                </div>
                <div className={'flex flex-col gap-1'}>
                    <Button size={'request'} disabled={denyPending || acceptPending} className={'bg-green-600 hover:bg-green-700 text-white hover:scale-105 duration-150 transition-all'}
                            onClick={() => {
                                acceptRequest({id})
                                    .then(()=>{
                                        toast.success("Friend request accepted");
                                    })
                                    .catch((error)=>{
                                        toast.error(
                                            error instanceof
                                            ConvexError ? error.data : "Unexpected error occurred"
                                        )
                                    })
                            }}
                    >
                        <Check/>
                    </Button>
                    <Button
                        size={'request'}
                        disabled={denyPending || acceptPending}
                        onClick = {
                            ()=>{
                                denyRequest({id})
                                    .then(()=>{
                                        toast.success("Friend request denied");
                                    })
                                    .catch((error)=>{
                                        toast.error(
                                            error instanceof
                                            ConvexError ? error.data : "Unexpected error occurred"
                                        )
                                    })
                            }
                        }
                        className={'bg-red-600 hover:bg-red-700 text-white hover:scale-105 duration-150 transition-all'}
                    >
                        <X/>
                    </Button>
                </div>
            </div>

        </div>
    );
};


export default Request;