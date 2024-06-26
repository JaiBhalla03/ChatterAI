'use client';

import React from 'react';
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {UserRoundPlus} from "lucide-react";
import {cn} from "@/lib/utils";
import {useConversation} from "@/hooks/useConversation";

type Props = React.PropsWithChildren<{
    title: string;
    action?: React.ReactNode;
}>;

const ItemList = ({ children, title, action: Action}: Props) => {
    const {isActive} = useConversation();
    return (
        <div className={cn("hidden w-full h-full lg:flex-none lg:w-80", {
            "block": isActive,
            "lg:block": !isActive,
        })}>
            <div className={'flex flex-col gap-3 h-full'}>
                <div className={'shadow shadow-lg bg-white h-24 rounded-2xl flex items-center justify-between px-2'}>
                    <h1 className={'text-lg font-bold'}>{title}</h1>
                    <Input placeholder={'Search Your Friends'}></Input>
                    {Action ? Action : null}
                </div>
                <div className={'shadow shadow-lg bg-white rounded-2xl flex-grow p-4 w-full'}>
                    {children}
                </div>
            </div>
        </div>
    );
};


export default ItemList;