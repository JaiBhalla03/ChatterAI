import React from 'react';

type Props = React.PropsWithChildren<{}>;

const ConversationalLayout = ({children} : Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

ConversationalLayout.propTypes = {

};

export default ConversationalLayout;