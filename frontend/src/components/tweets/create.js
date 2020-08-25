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
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="tweet-create-div">
                <textarea
                    className="form-control input-custom"
                    rows="3"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                    placeholder="Say something..."
                    maxLength={255}
                >    
                </textarea>
                <span>
                    <small>
                        {255-content.length}
                    </small>
                </span>
            </div>
            <input className="btn-custom" type="submit" value="Tweet" />
        </form>
    )
}