"use client";

import React, {useEffect} from 'react';
import {useRouter} from "next/navigation";
import ConversationFallback from "@/components/shared/conversation/ConversationFallback";

const Error = ({error}: {error: Error}) => {
    const router = useRouter();
    useEffect(() => {
        router.push("/conversations")
    }, [error, router]);
    return (
        <ConversationFallback/>
    );
};

export default Error;