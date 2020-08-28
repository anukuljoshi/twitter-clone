import React from 'react';
import { useMutation } from 'react-query';

import { apiGETMutate } from '../../api/queryLookup';

export const UserProfile = (props) => {
    const { handleProfileSidebarLink, userProfile, requestUserId,userProfileRefetch } = props;
    const [follow_mutate] = useMutation(apiGETMutate, {
        onSuccess: () => {
            userProfileRefetch()
        }
    })

    const handleFollow = async (username) => {
        const endpoint = `accounts/${username}/follow/`;
        await follow_mutate({ endpoint })
    }

    let btnClasses = 'bg-btn-follow';
    let value = 'Follow'
    let isRequestUserProfile = false;
    if(userProfile.user.id===parseInt(requestUserId, 10)){
        btnClasses = 'd-none'
        isRequestUserProfile = true;
    }else{
        const followed = userProfile.followers.includes(parseInt(requestUserId, 10));
        if(followed){
            btnClasses = 'bg-btn-unfollow';
            value = 'Unfollow';
        }
    }

    return (
        <div className="profile card-custom">
            <div className="profile-header">
                <h4 className="mb-1">
                    {`${userProfile.user.first_name} ${userProfile.user.last_name}`}
                </h4>
                <h6 className="mb-2">
                    {`@${userProfile.user.username}`}
                </h6>
                <div>
                    <button 
                        className={`${btnClasses} btn-custom`}
                        onClick={() => handleFollow(userProfile.user.username)}
                    >
                        {`${value}`}
                    </button>
                </div>
                <p className="profile-bio">
                    {`${userProfile.bio}`}
                </p>
            </div>
            <div className="profile-links">
                <ul>
                    {
                        isRequestUserProfile &&
                        <li 
                            id="profile-update" 
                            className="clickable" 
                            onClick={
                                () => handleProfileSidebarLink('update')
                            }
                        >
                            {`Profile`}
                        </li>
                    }
                    <li 
                        id="profile-tweets" 
                        className="active clickable" 
                        onClick={
                            () => handleProfileSidebarLink('tweets')
                        }
                    >
                        {`Tweets (${userProfile.tweet_count})`}
                    </li>
                    <li 
                        id="profile-followers" 
                        className="clickable" 
                        onClick={
                            () => handleProfileSidebarLink('followers')
                        }
                    >
                        {`Followers (${userProfile.follower_count})`}
                    </li>
                    <li 
                        id="profile-following" 
                        className="clickable" 
                        onClick={
                            () => handleProfileSidebarLink('following')
                        }
                    >                 
                        {`Following (${userProfile.following_count})`}
                    </li>
                </ul>
            </div>
        </div>
    )
}
