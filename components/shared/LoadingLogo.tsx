import React from 'react';
import Image from "next/image";

type Props = {
    size?: number;
}

const LoadingLogo = ({size = 200} : Props) => {
    return (
        <div>
            <Image src={'./logo.svg'} alt={""} height={size} width={size}/>
        </div>
    )
};

export default LoadingLogo;