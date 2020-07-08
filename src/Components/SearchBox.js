import React from 'react';

const SearchBox = ({searchChange}) => 
	<input 
		className='ba b--green bg-lightest-blue tc w-30'
		type='search' 
		placeholder='search robots...'
		onChange={searchChange}
	/>

export default SearchBox;
