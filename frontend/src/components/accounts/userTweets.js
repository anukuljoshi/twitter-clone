import React from 'react';
import { useQuery } from 'react-query';

import { apiGETQuery } from '../../api/queryLookup'
import { TweetList } from '../tweets/list';

export const UserTweetList = (props) => {
    const { profileUsername, requestUserId } = props;
    const {data: userTweets, status, refetch} = useQuery(['userTweetList', `accounts/${profileUsername}/tweets/`], apiGETQuery);
    
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

        if(userTweets.error_message==='not found'){
            return (
                <div className="text-center">
                    <h1>Error 404 : Not Found</h1>
                </div>
            )
        }
        return (
            <div>
                <h1 className="mb-4">{`${profileUsername}'s Tweets`}</h1>
                <TweetList tweetList={userTweets} refetch={refetch} requestUserId={requestUserId}/>
            </div>
        )
    }
}