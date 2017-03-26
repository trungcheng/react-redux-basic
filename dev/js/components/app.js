import React from 'react';
import UserList from '../containers/user-lists';
import UserDetail from '../containers/user-detail';
require('../../scss/style.scss');

const app = () => {
	return (
		<div>
			<h2>Username List:</h2>
			<UserList />
			<hr />
			<h2>User Details:</h2>
			<UserDetail />
		</div>
	);
};

export default app;