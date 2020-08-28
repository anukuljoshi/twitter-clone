import React from 'react';

export const PopupMessage = (props) => {
    const { message, status } = props;
    let bgColor = '';
    let textColor = '';
    if(status==='success'){
        bgColor = 'bg-custom-success';
        textColor = 'text-custom-success';
    }
    const hideMessageBox = () => {
        document.getElementById('popup-message').classList.add('d-none');
    }

    return (
        <div id="popup-message" className={`alert col-12 ${bgColor}` } style={{'display' : 'flex', justifyContent : 'space-between'}}>
            <div>
                <span className={`${textColor}`}>
                    { message }
                </span>
            </div>
            <button type="button" className="close" onClick={hideMessageBox}>
                <span className={`${textColor}`}>&times;</span>
            </button>
        </div>
    )
} 