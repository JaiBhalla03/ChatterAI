import { usePathname } from "next/navigation";
import { useMemo } from "react";
import {BookCheck, Bot, MessageSquare, UsersRound} from "lucide-react";
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";

export const useNavigation = () => {
    const pathname = usePathname();

    const requestsCount = useQuery(api.requests.count);

    const paths = useMemo(() => [
        {
        name: "Friends",
        href: "/friends",
        icon: <UsersRound/>,
        active: pathname.startsWith("/friends"),
            count: requestsCount
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
    ], [pathname, requestsCount]);

    return paths;
};
