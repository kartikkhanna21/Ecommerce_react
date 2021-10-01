import React from 'react';
const MessageBox=(props)=>{

    return(
        <div className={`col-sm-12`}>
        <div className={`alert alert-danger`}  role="alert">
            {props.children}
        </div>
            <style>
                {"button:not(:disabled) {\
                    cursor: pointer;\
                    width: 100%;\
                }"}
            </style>
        </div>
       
    )



}

export default MessageBox;