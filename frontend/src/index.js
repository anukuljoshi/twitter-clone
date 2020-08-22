import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import { TweetListComponent } from './components/tweets/components'
import { TweetDetailComponent } from './components/tweets/components';
import { UserProfileComponent } from './components/accounts/components';

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );

const tweetListDiv = document.getElementById('tweet-list');
if(tweetListDiv){
	const TweetListElement = React.createElement(TweetListComponent, tweetListDiv.dataset)
	ReactDOM.render(TweetListElement, tweetListDiv)
}

const tweetDetailDiv = document.getElementById('tweet-detail');
if(tweetDetailDiv){
	const TweetDetailElement = React.createElement(TweetDetailComponent, tweetDetailDiv.dataset)
	ReactDOM.render(TweetDetailElement, tweetDetailDiv)
}

const userProfileDiv = document.getElementById('user-profile');
if(userProfileDiv){
	const UserProfileElement = React.createElement(UserProfileComponent, userProfileDiv.dataset)
	ReactDOM.render(UserProfileElement, userProfileDiv)
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
