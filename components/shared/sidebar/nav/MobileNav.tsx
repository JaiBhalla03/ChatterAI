"use client";
import React from 'react';
import {Card} from "@/components/ui/card";
import {useNavigation} from "@/hooks/useNavigation";
import {UserButton} from "@clerk/clerk-react";
import Link from "next/link";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";
import {useConversation} from "@/hooks/useConversation";
import {Badge} from "@/components/ui/badge";


const MobileNav = () => {
    const paths = useNavigation();
    const {isActive} = useConversation();
    if(isActive) return null;
    return (
        <Card className={'fixed mx-auto bottom-0 w-[calc(100vw)] flex items-center h-14 p-2 lg:hidden'}>
            <nav className={'w-full'}>
                <ul className={'flex justify-evenly w-full'}>
                    {paths.map((path, id) => {
                        return (
                            <li key={id} className={'relative py-3'}>
                                <Link href={path.href}>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Button
                                                size={'icon'}
                                                variant={path.active ? 'default' : 'outline'}
                                                className={'bg-transparent'}
                                            >{path.icon}</Button>
                                        </TooltipTrigger>
                                        {
                                            path.count ? (<Badge className={'absolute top-1 left-7 rounded-full w-4 h-4 text-xs bg-[#FF4A09]'}>
                                                {path.count}
                                            </Badge>) : null
                                        }
                                        <TooltipContent>
                                            <p>{path.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

        </Card>
    );
};

MobileNav.propTypes = {};

export default MobileNav;