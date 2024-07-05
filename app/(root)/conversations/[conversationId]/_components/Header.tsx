import React from 'react';
import Link from "next/link";
import {CircleArrowLeft, Settings} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

type Props = {
    imageUrl?: string;
    name: string;
    options?: {
       label: string;
       destructive: boolean;
       onClick: () => void;
    }[]
}

const Header = ({imageUrl, name, options} : Props) => {
    console.log(options)
    return (
        <div className={'flex'}>
            <div>
                <Link href={'/conversations'}>
                    <CircleArrowLeft/>
                </Link>
                <Avatar>
                    <AvatarImage src={imageUrl}/>
                    <AvatarFallback>{name.substring(0,1)}</AvatarFallback>
                </Avatar>
                <h2>{name}</h2>
            </div>
            <div className={'flex'}>
                {options ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button size={"icon"} variant={'secondary'}>
                                <Settings/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {options.map((option, id) => {
                                return(
                                <DropdownMenuItem
                                    key={id}
                                    onClick={option.onClick}
                                    className={cn("font-semibold", {
                                        "text-destructive": option.destructive,
                                    })}
                                >
                                    {option.label}
                                </DropdownMenuItem>)
                            })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    );
};



export default Header;