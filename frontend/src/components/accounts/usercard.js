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

    const handleUserProfileLink = (username) => {
        window.location.href = `/${username}`
    }
    
    let btnClasses = 'bg-btn-follow';
    let value = 'Follow'
    if(profile.user.id===parseInt(requestUserId, 10)){
        btnClasses = 'd-none'
    }else{
        const followed = profile.followers.includes(parseInt(requestUserId, 10));
        if(followed){
            btnClasses = 'bg-btn-unfollow';
            value = 'Unfollow';
        }
    }

    return (
        <div className="profile-card card card-custom">
            <div className="card-body">
                <div className="card-info">
                    <div>
                        <h6 className="profile-card-fullname">
                            {`${profile.user.first_name} ${profile.user.last_name}`}
                        </h6>
                        <div className="">
                            <span className="user-link" onClick={() => handleUserProfileLink(profile.user.username)}>
                                {`@${profile.user.username}`}
                            </span>
                        </div>
                    </div>
                    <div>
                        <button 
                            className={`${btnClasses} btn-custom`}
                            onClick={() => handleFollow(profile.user.username)}
                        >
                            {`${value}`}
                        </button>
                    </div>
                </div>
                <div className="profile-bio">
                    {`${profile.bio}`}
                </div>
            </div>
        </div>
    )
}
