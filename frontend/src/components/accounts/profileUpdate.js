import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from 'react-query'

import { apiGETQuery, apiPUTMutate } from '../../api/queryLookup'
import { PopupMessage } from '../layout/popup';

export const UpdateProfile = (props) => {
    const { profileUsername, requestUserId, userProfileRefetch} = props;
    const [profileData, setProfileData] = useState({
        'bio' : '',
        'first_name' : '',
        'last_name' : ''
    })
    const {data: profile, status} = useQuery(['userProfile', `accounts/${profileUsername}/update/`], apiGETQuery);
    const [update_mutate, { status : mutate_status, data : mutate_data }] = useMutation(apiPUTMutate, {
        onSuccess : (data) => {
            userProfileRefetch()
        }
    });

    useEffect(() => {
        if(status==="success"){
            setProfileData({
                'bio' : profile.bio,
                'first_name' : profile.user.first_name,
                'last_name' : profile.user.last_name
            })
        }
    }, [profile, status])

    const handleChange = (event) => {
        event.preventDefault();
        setProfileData({
            ...profileData,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const endpoint = `accounts/${profileUsername}/update/`;
        const payload = profileData
        try{
            update_mutate({endpoint, payload})
        }catch(error){
            console.log(error)
        }
    }
    
    if(status==="loading"){
        return (
            <div className="text-center">
                <h1>Loading...</h1>
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
        if(profile.error_message==='not found'){
            return (
                <div className="text-center">
                    <h1>Error 404 : Not Found</h1>
                </div>
            )
        }
        return (
            <div>
                <h1 className="mb-4">{`Update Profile`}</h1>
                <div className="card-custom form-custom profile-update">
                    {
                        (mutate_status==="success") &&
                        <PopupMessage message={mutate_data.success_message} status="success" />
                    }
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="form-group-custom">
                            <input 
                                maxLength={128}
                                name="bio"
                                type="text" 
                                placeholder=" "
                                value={profileData.bio}
                                onChange={handleChange}
                            />
                            <label className="label-custom">
                                <span className="label-text-custom">Bio</span>
                            </label>
                        </div>
                        <div className="form-group-custom">
                            <input 
                                name="first_name"
                                type="text" 
                                placeholder=" "
                                value={profileData.first_name}
                                onChange={handleChange}
                            />
                            <label className="label-custom">
                                <span className="label-text-custom">First Name</span>
                            </label>
                        </div>
                        <div className="form-group-custom">
                            <input 
                                name="last_name"
                                type="text" 
                                placeholder=" "
                                value={profileData.last_name}
                                onChange={handleChange}
                            />
                            <label className="label-custom">
                                <span className="label-text-custom">Last Name</span>
                            </label>
                        </div>
                        <div className="mt-3">
                            <input type="submit" value="Save Changes" className="btn-custom" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}