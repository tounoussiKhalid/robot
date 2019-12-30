import React from 'react';
const Scroll = (props) =>{
    return(
        <div style={{
            overflow: 'scroll',
            border : '4px solid black',
            height : '800px',
            width : '85%',
            textAlign: 'center',
            margin: 'auto'
            }}>
        {props.children}
        </div>
    );
}

export default Scroll;