import React from 'react';
import { useQuery } from 'react-query';

import { apiGETQuery } from '../../api/queryLookup';
import { UserProfileItem } from './usercard';

const UserProfileList = (props) => {
    const { userProfileList, requestUserId, refetch, userProfileRefetch } = props;
    const profileListDiv = userProfileList.map(profile => (
        <UserProfileItem key={profile.id} profile={profile} requestUserId={requestUserId} refetch={refetch} userProfileRefetch={userProfileRefetch} />
    ))
    return (
        <>
            { profileListDiv }
        </>
    )
}

export const FollowerList = (props) => {
    const { profileUsername, requestUserId, userProfileRefetch } = props;
    const { data: followers, status, refetch} = useQuery(['followerList', `accounts/${profileUsername}/followers/`], apiGETQuery);

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
        if(followers.error_message==='not found'){
            return (
                <div className="text-center">
                    <h1>Error 404 : Not Found</h1>
                </div>
            )
        }
        return (
            <UserProfileList userProfileList={followers} requestUserId={requestUserId} refetch={refetch} userProfileRefetch={userProfileRefetch} />
        )
    }
}


export const FollowingList = (props) => {
    const { profileUsername, requestUserId, userProfileRefetch } = props;
    const { data: following, status, refetch} = useQuery(['followingList', `accounts/${profileUsername}/following/`], apiGETQuery);

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
            <UserProfileList userProfileList={following} requestUserId={requestUserId} refetch={refetch} userProfileRefetch={userProfileRefetch} />
        )
    }
}