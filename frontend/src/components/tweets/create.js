import React, { useState } from 'react';

export const TweetCreate = (props) => {
    const { handleTweetCreate } = props;
    const [content, setContent] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(content.trim().length===0){
            alert('Tweet cannot be blank')
        }else{
            handleTweetCreate(content);
        }
        setContent('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <textarea 
                    name=""
                    className="form-control" 
                    id="" 
                    rows="4"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                >    
                </textarea>
            <input className="btn btn-primary" type="submit" value="Tweet" />
            </div>
        </form>
    )
}