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

    const handleFollow = async ( username ) => {
        const endpoint = `accounts/${username}/follow/`;
        await follow_mutate({ endpoint })
    }


    let btnClasses = 'btn-primary';
    let value = 'Follow'
    if(userProfile.user.id===parseInt(requestUserId, 10)){
        btnClasses = 'd-none'
    }else{
        const followed = userProfile.followers.includes(parseInt(requestUserId, 10));
        if(followed){
            btnClasses = 'btn-danger';
            value = 'Unfollow';
        }
    }

    return (
        <div className="profile">
            <div className="profile-header">
                <div className="profile-usertitle">
                    <div className="profile-user-full-name">
                        {`${userProfile.user.first_name} ${userProfile.user.last_name}`}
                    </div>
                    <div className="profile-user-username">
                        {`@${userProfile.user.username}`}
                    </div>
                </div>
                <div className="profile-userbuttons">
                    <button 
                        className={`btn btn-sm ${btnClasses}`}
                        onClick={() => handleFollow(userProfile.user.username)}
                    >
                        {`${value}`}
                    </button>
                </div>
                <div className="profile-user-bio">
                    {`${userProfile.bio}`}
                </div>
            </div>
            <div className="profile-usermenu">
                <ul>
                    <li id="profile-tweets-list" className="active" onClick={() => handleProfileSidebarLink('tweets')}>                 
                        {`Tweets (${userProfile.tweet_count})`}
                    </li>
                    <li id="profile-followers-list" onClick={() => handleProfileSidebarLink('followers')}>
                        {`Followers (${userProfile.follower_count})`}
                    </li>
                    <li id="profile-following-list" onClick={() => handleProfileSidebarLink('following')}>                 
                        {`Following (${userProfile.following_count})`}
                    </li>
                </ul>
            </div>
        </div>
    )
}
