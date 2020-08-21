import React, { useState, useEffect } from 'react';

import { TweetListComponent } from './components/tweets/components';


const App = () => {
	const [userState, setUserState] = useState({})

	useEffect(() => {
		const url = `http://127.0.0.1:8000/api/accounts/current`;
		fetch(url)
		.then(res => res.json())
		.then(data => {
			setUserState(data)
		})
	}, [])

	return (
		<div className="App">
			<TweetListComponent user={userState}/>
		</div>
	);
}

export default App;
