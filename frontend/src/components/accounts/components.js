import React, { useState } from 'react';

import { useQuery } from 'react-query';

import { apiGETQuery } from '../../api/queryLookup';
import { UserProfile } from './profile';
import { ScrollComponent } from '../layout/scroll';
import { UserTweetList } from './userTweets';
import { FollowerList, FollowingList  } from './userList';
import { UpdateProfile } from './profileUpdate'

export const UserProfileComponent = (props) => {
    const { profileUsername, requestUserId } = props
    const {data: userProfile, status, refetch: userProfileRefetch} = useQuery(['userDetailState', `accounts/${profileUsername}/`], apiGETQuery);

    const [content, setContent] = useState('tweets');

    const handleProfileSidebarLink = (value) => {
        setContent(value);
        const listElements = document.querySelectorAll('.profile-links ul li');
        listElements.forEach(element => {
            element.classList.remove('active')
        })
        const element = document.getElementById(`profile-${value}`);
        element.classList.toggle('active')
    }

    const toggleProfileComponent = () => {
        document.getElementById('profile-component').classList.toggle('fixed-div-none')
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
                <div className="profile-toggle-button" onClick={toggleProfileComponent}>
                    <span>
                        <i className="fa fa-user"></i>
                    </span>
                </div>
                <div className="row">
                    <div id="profile-component" className="fixed-div fixed-div-none">
                        <ScrollComponent>
                            <UserProfile userProfile={userProfile}  handleProfileSidebarLink={handleProfileSidebarLink} requestUserId={requestUserId} userProfileRefetch={userProfileRefetch}/>
                        </ScrollComponent>
                    </div>
                    <div className="profile-content-div mt-3">
                        <div className="profile-content">
                            {
                                content==='update' && userProfile.id===parseInt(requestUserId,10) && 
                                <UpdateProfile profileUsername={profileUsername} requestUserId={requestUserId} userProfileRefetch={userProfileRefetch}/>
                            }

                            { content==='tweets' && <UserTweetList profileUsername={profileUsername} requestUserId={requestUserId}/> }

                            { content==='followers' && <FollowerList profileUsername={profileUsername} requestUserId={requestUserId} userProfileRefetch={userProfileRefetch} /> }
                            
                            { content==='following' && <FollowingList profileUsername={profileUsername} requestUserId={requestUserId} userProfileRefetch={userProfileRefetch} /> }
                        </div>
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