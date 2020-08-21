import React from 'react';
import { useQuery, useMutation } from 'react-query';

import { apiGETMutate } from './queryLookup';

const TweetItem = (props) => {
    const { tweet, userId, handleLike } = props;
    const liked = tweet.liked_by.includes(parseInt(userId, 10));
    let btnClasses = 'h5 text-secondary';
    if(liked){
        btnClasses = 'h5 text-primary';
    }

    const handleTweetDetailLink = (event) => {
        event.preventDefault();
        window.location.href = `/${tweet.id}`
    }

    return (

        <div className="card mb-4">
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">
                    { tweet.author.username }
                </h6>
                <div className="">
                    <p className="card-text">
                        {tweet.content}
                    </p>
                </div>

                <span className="mr-2">{`${tweet.liked_by.length}`}</span>
                <span 
                    className={`${btnClasses} mr-2 clickable`} 
                    onClick={() => handleLike(tweet.id) }
                >
                    <i className="fa fa-thumbs-up"></i>
                </span>
                <button className="btn btn-sm btn-outline-primary" onClick={handleTweetDetailLink}>View</button>
                <small className="float-right">
                    {tweet.timestamp}
                </small>
            </div>
        </div>
    )
}


export const TweetList = (props) => {
    const { tweetList, refetch, username, userId } = props
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
        <TweetItem key={tweet.id} tweet={tweet} handleLike={handleLike} userId={userId}/>
    ))
    return (
        <div className="">
            { tweetListDiv }
        </div>
    )

}