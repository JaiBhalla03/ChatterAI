"use client";
import React from 'react';
import {Card} from "@/components/ui/card";
import {useNavigation} from "@/hooks/useNavigation";
import {UserButton} from "@clerk/clerk-react";
import Link from "next/link";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";


const DesktopNav = () => {
    const paths = useNavigation();
    return (
        <Card className={'hidden lg:flex lg:flex-col lg:justify-between lg:items-center lg:h-full lg:w-20 lg:px-2 lg:py-4'}>
            <div>
                <svg width="25" height="25" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_7_9)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M17.495 0.15C20.0889 0.147788 22.6503 0.727224 24.9908 1.84567C27.3312 2.96411 29.391 4.5931 31.0187 6.61276C32.6464 8.63242 33.8006 10.9914 34.3962 13.516C34.9918 16.0406 35.0138 18.6666 34.4605 21.2008C33.9072 23.7351 32.7927 26.113 31.199 28.1596C29.6054 30.2062 27.5731 31.8695 25.2517 33.0269C22.9303 34.1844 20.379 34.8066 17.7854 34.8478C15.1918 34.889 12.622 34.3481 10.265 33.265L1.62001 34.83C1.40252 34.8693 1.1785 34.8503 0.970766 34.7749C0.763033 34.6994 0.57902 34.5702 0.437481 34.4005C0.295943 34.2307 0.20194 34.0265 0.165054 33.8086C0.128168 33.5907 0.149718 33.3669 0.227507 33.16L2.70501 26.56C1.0951 23.9307 0.214862 20.92 0.154875 17.8376C0.0948878 14.7552 0.85732 11.7125 2.36371 9.02256C3.8701 6.33265 6.06603 4.09271 8.72553 2.53326C11.385 0.97381 14.412 0.15117 17.495 0.15ZM11.875 13.2825C12.3723 13.2825 12.8492 13.085 13.2008 12.7333C13.5525 12.3817 13.75 11.9048 13.75 11.4075C13.75 10.9102 13.5525 10.4333 13.2008 10.0817C12.8492 9.73004 12.3723 9.5325 11.875 9.5325C11.3777 9.5325 10.9008 9.73004 10.5492 10.0817C10.1975 10.4333 10 10.9102 10 11.4075C10 11.9048 10.1975 12.3817 10.5492 12.7333C10.9008 13.085 11.3777 13.2825 11.875 13.2825ZM24.9225 11.4075C24.9225 11.9048 24.725 12.3817 24.3733 12.7333C24.0217 13.085 23.5448 13.2825 23.0475 13.2825C22.5502 13.2825 22.0733 13.085 21.7217 12.7333C21.3701 12.3817 21.1725 11.9048 21.1725 11.4075C21.1725 10.9102 21.3701 10.4333 21.7217 10.0817C22.0733 9.73004 22.5502 9.5325 23.0475 9.5325C23.5448 9.5325 24.0217 9.73004 24.3733 10.0817C24.725 10.4333 24.9225 10.9102 24.9225 11.4075ZM26.25 18.75C26.25 21.0706 25.3281 23.2962 23.6872 24.9372C22.0462 26.5781 19.8207 27.5 17.5 27.5C15.1794 27.5 12.9538 26.5781 11.3128 24.9372C9.67188 23.2962 8.75001 21.0706 8.75001 18.75H26.25Z"
                              fill="#FF4A09"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_7_9">
                            <rect width="35" height="35" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <nav>
                <ul className={''}>
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
                                            {
                                                path.count ? (<Badge className={'absolute top-1 left-7 rounded-full w-4 h-4 text-xs bg-[#FF4A09]'}>
                                                    {path.count}
                                                </Badge>) : null
                                            }
                                        </TooltipTrigger>
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
            <div className={'flex flex-col items-center gap-4'}>
                <UserButton/>
            </div>
        </Card>
    );
};

DesktopNav.propTypes = {};

export default DesktopNav;