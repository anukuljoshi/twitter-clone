import React from 'react';
import { useMutation } from 'react-query';

import { apiGETMutate } from '../../api/queryLookup';

const TweetItem = (props) => {
    const { tweet, requestUserId, handleLike } = props;
    const liked = tweet.liked_by.includes(parseInt(requestUserId, 10));
    
    let btnClasses = 'text-secondary';
    if(liked){
        btnClasses = 'text-highlight';
    }

    const handleTweetDetailLink = (event) => {
        event.preventDefault();
        window.location.href = `/${tweet.id}`
    }

    return (

        <div className="card card-custom">
            <div className="card-body">
                <h6 className="card-subtitle mb-2">
                    { tweet.author.username }
                </h6>
                <div className="clickable mb-1" onClick={handleTweetDetailLink}>
                    <p className="card-text py-2 px-1">
                        {tweet.content}
                    </p>
                </div>

                <span className={`${btnClasses} mr-2`}>{`${tweet.liked_by.length}`}</span>
                <span 
                    className={`${btnClasses} h5 mr-2 clickable`} 
                    onClick={() => handleLike(tweet.id) }
                >
                    <i className="fa fa-thumbs-up"></i>
                </span>
                {/* <span className="h5 text-primary clickable" onClick={handleTweetDetailLink}>                
                    <i className="fa fa-eye"></i>
                </span> */}
                <small className="float-right">
                    {tweet.timestamp}
                </small>
            </div>
        </div>
    )
}


export const TweetList = (props) => {
    const { tweetList, refetch, requestUserId } = props
    const [like_mutate] = useMutation(apiGETMutate, {
        onSuccess : refetch
    });

    const handleLike = async (tweet_id) => {
        const endpoint = `tweets/${tweet_id}/like/`;
        try {
            await like_mutate({ endpoint });
        } catch (error) {
            console.log('tweet like error');
        }
    }

    const tweetListDiv = tweetList.map(tweet => (
        <TweetItem key={tweet.id} tweet={tweet} handleLike={handleLike} requestUserId={requestUserId}/>
    ))
    return (
        <div className="">
            { tweetListDiv }
        </div>
    )

}