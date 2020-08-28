import React from 'react';
import { useQuery, useMutation } from 'react-query';

import { apiGETQuery, apiGETMutate } from '../../api/queryLookup';

export const TweetDetail = (props) => {
    const { requestUserId, tweetId } = props //get from django
    const { data: tweet, refetch, status} = useQuery(['tweetItem', `tweets/${tweetId}/`], apiGETQuery);
    
    const [like_mutate] = useMutation(apiGETMutate, {
        onSuccess : refetch
    });

    const handleLike = async (tweetId) => {
        const endpoint = `tweets/${tweetId}/like/`;
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
        if(tweet.error_message==='not found'){
            return (
                <div className="text-center">
                    <h1>Error 404 : Not Found</h1>
                </div>
            )
        }

        const liked = tweet.liked_by.includes(parseInt(requestUserId, 10));
        let btnClasses = 'text-secondary';
        if(liked){
            btnClasses = 'text-highlight';
        }
        return (
            <div className="card mb-4 card-custom">
                <div className="card-header px-3 py-1 clickable bg-custom-dark" onClick={() => handleUserProfileLink(tweet.author.username)}>
                    <h5>{ tweet.author.username }</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{tweet.content}</p>

                    <span className={`${btnClasses} mr-2`}>{`${tweet.liked_by.length}`}</span>
                    <span 
                        className={`${btnClasses} h5 mr-2 clickable`} 
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
