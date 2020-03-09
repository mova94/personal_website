import React from 'react';

import '../css/header.css';

function Header(props) {
    return(
        <div className={'title title-' + props.pos}>
            {props.children}
        </div>
        
    );
}

export default Header;