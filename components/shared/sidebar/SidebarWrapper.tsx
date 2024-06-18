import React from 'react';
import DesktopNav from "@/components/shared/sidebar/nav/DesktopNav";


type Props = React.PropsWithChildren<{}>;

const SidebarWrapper = ({children}: Props) => {
    return (
        <div className={'h-full w-full p-2 flex flex-col lg:flex-row gap-4'}>
            <DesktopNav/>
            <main className={'h-[calc(100%-80px)] lg:h-full w-full flex gap-4'}>
                {children}
            </main>
        </div>
    );
};

SidebarWrapper.propTypes = {

};

export default SidebarWrapper;