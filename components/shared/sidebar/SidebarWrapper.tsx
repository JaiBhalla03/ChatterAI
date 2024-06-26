import React from 'react';
import DesktopNav from "@/components/shared/sidebar/nav/DesktopNav";
import MobileNav from "@/components/shared/sidebar/nav/MobileNav";
import MobileTopbar from "@/components/shared/sidebar/nav/MobileTopbar";


type Props = React.PropsWithChildren<{}>;

const SidebarWrapper = ({children}: Props) => {
    return (
        <div className={'bg-[#eeeeee] h-full w-full lg:p-2 flex flex-col items-center lg:flex-row gap-3'}>
            <MobileTopbar/>
            <MobileNav/>
            <DesktopNav/>
            <main className={'h-[calc(100%-80px)] lg:h-full w-full flex gap-4 pt-16 lg:pt-0'}>
                {children}
            </main>
        </div>
    );
};

SidebarWrapper.propTypes = {

};

export default SidebarWrapper;