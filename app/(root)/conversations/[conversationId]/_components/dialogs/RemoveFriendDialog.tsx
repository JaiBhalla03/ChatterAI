import React, {Dispatch, SetStateAction} from 'react';
import {Id} from "@/convex/_generated/dataModel";
import {useMutationState} from "@/hooks/useMutationState";
import {api} from "@/convex/_generated/api";
import {ConvexError} from "convex/values";
import {toast} from "sonner";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog";
import {Cancel} from "@radix-ui/react-alert-dialog";

type Props = {
    conversationId: Id<"conversations">;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const RemoveFriendDialog = ({conversationId, open, setOpen}: Props) => {
    const {mutate: removeFriend, pending} = useMutationState(api.friend.remove);
    const handleRemoveFriend = async () => {
        removeFriend({conversationId})
            .then(() => {
                toast.success("Remove friend");
            })
            .catch((error) => {
                toast.error(
                    error instanceof ConvexError ? error.data : "Unexpected error occcured"
                );
            })
    }
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. All message will be deleted and you will not be able to message this user. All group chats will still work as normal.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel disabled={pending}><Cancel/></AlertDialogCancel>
                    <AlertDialogAction disabled={pending} onClick={handleRemoveFriend}>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default RemoveFriendDialog;