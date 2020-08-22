import React, { useState } from 'react';

import { useQuery } from 'react-query';

import { apiGETQuery } from '../../api/queryLookup';
import { UserProfile } from './profile';
import { ScrollComponent } from '../layout/scroll';
import { UserTweetList } from './userTweets';
import { FollowerList, FollowingList  } from './userList';

export const UserProfileComponent = (props) => {
    const { profileUsername, requestUserId } = props
    const {data: userProfile, status, refetch: userProfileRefetch} = useQuery(['userDetailState', `accounts/${profileUsername}/`], apiGETQuery);

    const [content, setContent] = useState('tweets');
    const listItems = ['tweets', 'followers', 'following'];

    const handleProfileSidebarLink = (value) => {
        setContent(value);
        listItems.forEach(i => {
            const temp = document.getElementById(`profile-${i}-list`);
            temp.classList.remove('active');
        })
        const item = document.getElementById(`profile-${value}-list`);
        item.classList.add('active');
        
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
        if(userProfile.error_message==='not found'){
            return (
                <div className="text-center">
                    <h1>Error 404 : Not Found</h1>
                </div>
            )
        }
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="fixed-div">
                        <ScrollComponent>
                            <UserProfile userProfile={userProfile}  handleProfileSidebarLink={handleProfileSidebarLink} requestUserId={requestUserId} userProfileRefetch={userProfileRefetch}/>
                        </ScrollComponent>
                    </div>
                    <div className="col-10 col-md-6 mx-auto mt-5">

                        { content==='tweets' && <UserTweetList profileUsername={profileUsername} requestUserId={requestUserId}/> }

                        { content==='followers' && <FollowerList profileUsername={profileUsername} requestUserId={requestUserId} userProfileRefetch={userProfileRefetch} /> }
                        
                        { content==='following' && <FollowingList profileUsername={profileUsername} requestUserId={requestUserId} userProfileRefetch={userProfileRefetch} /> }
                    </div>
                </div>
            </div>
        )
    }
}

// export const TweetDetailComponent = (props) => {
//     return (
//         <div className="col-12 col-md-5 offset-md-2">
//             <TweetDetail {...props}/>    
//         </div>
//     )
// }