import React from 'react';

const Card = ({name, email, username, id}) => {
	return(
		<div className='bg-light-green dib br3 ma2 grow shadow-5 tc'>
			<img alt='robots' src={`https://robohash.org/${id}?set=set3`}/>
			<div>
				<h2>{username}</h2>
				<p>{name}</p>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;