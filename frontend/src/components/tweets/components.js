import React from 'react';
import { useQuery, useMutation } from 'react-query';

import { apiGETQuery, apiPOSTMutate } from './queryLookup';
import { TweetCreate } from './create';
import { TweetList } from './list';
import { TweetDetail } from './detail';

export const TweetListComponent = (props) => {
    const { username, userId } = props;
    const { data : tweetList, status, refetch } = useQuery(['tweetListState', 'tweets/'], apiGETQuery);

    const [create_mutate] = useMutation(apiPOSTMutate, {
        onSuccess : refetch
    });

    const handleTweetCreate = async (content) => {
        const endpoint = `tweets/create/`;
        const newTweet = {
            'content' : content
        }
        try {
            await create_mutate({ endpoint, newTweet })
        } catch (error) {
            console.log('tweet create error');
        }
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
        return (
            <div className="col-12 col-md-5 offset-md-2">
                <>
                    {/* form to create tweet */}
                    { 
                        (userId) && 
                        <TweetCreate handleTweetCreate={handleTweetCreate}/>
                    }

                </>
                <>
                    <TweetList tweetList={tweetList} refetch={refetch} {...props}/>
                </>
            </div>
        )
    }
}

export const TweetDetailComponent = (props) => {
    return (
        <div className="col-12 col-md-5 offset-md-2">
            <TweetDetail {...props}/>    
        </div>
    )
}