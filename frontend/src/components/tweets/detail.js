import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';

import { apiGETQuery, apiGETMutate } from './queryLookup';

export const TweetDetail = (props) => {

    // const tweet_id = // get from django 
    // const user = //get from django
    const tweet_id = 1;
    const { data: tweet, refetch, status} = useQuery(['tweetItem', `tweets/${tweet_id}/`], apiGETQuery);
    
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
    
    const handleUserProfileLink = (username) => {
        window.location.href = `/${username}`
    }
    
    if(status==="loading"){
        return (
            <div className="text-center">
                <h1>Loading</h1>
            </div>
        )
    }

    if(status==="error"){
        return (
            <div className="text-center">
                <h1>Error. Try Again</h1>
            </div>
        )
    }

    if(status==="success"){

        const liked = tweet.liked_by.includes(1);
        let btnClasses = 'h5 text-secondary';
        if(liked){
            btnClasses = 'h5 text-primary';
        }

        return (
            <div className="card mb-4">
                <div className="card-header clickable" onClick={() => handleUserProfileLink(tweet.author.username)}>
                    { tweet.author.username }
                </div>
                <div className="card-body">
                    <p className="card-text">{tweet.content}</p>

                    <span className="mr-2">{`${tweet.liked_by.length}`}</span>
                    <span 
                        className={`${btnClasses} mr-2 clickable`} 
                        onClick={() => handleLike(tweet.id) }
                    >
                        <i className="fa fa-thumbs-up"></i>
                    </span>
                    <small className="float-right">
                        {tweet.timestamp}
                    </small>
                </div>
            </div>
        )
    }
}
