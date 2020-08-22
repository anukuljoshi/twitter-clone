import React from 'react';
import { useMutation } from 'react-query';

import { apiGETMutate } from '../../api/queryLookup';

export const UserProfileItem = (props) => {
    const { profile, requestUserId, refetch, userProfileRefetch } = props;
    const [follow_mutate] = useMutation(apiGETMutate, {
        onSuccess: () => {
            refetch()
            userProfileRefetch()
        }
    })

    const handleFollow = async ( username ) => {
        const endpoint = `accounts/${username}/follow/`;
        await follow_mutate({ endpoint })
    }

    let btnClasses = 'btn-primary';
    let value = 'Follow'
    if(profile.user.id===parseInt(requestUserId, 10)){
        btnClasses = 'd-none'
    }else{
        const followed = profile.followers.includes(parseInt(requestUserId, 10));
        if(followed){
            btnClasses = 'btn-danger';
            value = 'Unfollow';
        }
    }

    return (
        <div className="profile-card mb-3">
            <div className="profile-card-header">
                <div className="profile-card-usertitle">
                    <div className="profile-card-user-full-name">
                        {`${profile.user.first_name} ${profile.user.last_name}`}
                    </div>
                    <div className="profile-card-user-username">
                        {`@${profile.user.username}`}
                    </div>
                </div>
                <button 
                    className={`profile-card-userbutton btn ${btnClasses}`}
                    onClick={() => handleFollow(profile.user.username)}
                >
                    {`${value}`}
                </button>
            </div>
            <div className="profile-card-user-bio">
                {`${profile.bio}`}
            </div>
        </div>
    )
}
