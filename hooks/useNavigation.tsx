import { usePathname } from "next/navigation";
import { useMemo } from "react";
import {BookCheck, Bot, MessageSquare, UsersRound} from "lucide-react";

export const useNavigation = () => {
    const pathname = usePathname();

    const paths = useMemo(() => [
        {
        name: "Friends",
        href: "/friends",
        icon: <UsersRound/>,
        active: pathname.startsWith("/friends"),
        },
        {
            name: "Conversations",
            href: "/conversations",
            icon: <MessageSquare />,
            active: pathname.startsWith("/conversations"),
        },
        {
            name: "Todo",
            href: "/todo",
            icon: <BookCheck />,
            active: pathname.startsWith("/todo"),
        },
        {
            name: "Chatbot",
            href: "/chatbot",
            icon: <Bot />,
            active: pathname.startsWith("/chatbot"),
        }
    ], [pathname]);

    return paths;
};
