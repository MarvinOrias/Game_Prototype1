import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

import Home from '../components/Home';

export default function HomePage(){
	const [seeNext, setSeeNext] = useState(false);
	const navigate = useNavigate();

	localStorage.setItem('access', seeNext);

	const access = localStorage.getItem('access');

	function redirectLink(){
		setSeeNext(true);
	}

	return(
		<>
			{
				access === 'true'
				?
				<Home btn={() => {
					navigate('/game-match');
				}} />
				:
				<Home btn={() => {
					redirectLink();
					Swal.fire({
							text: 'Try again'
						})
				}} />
			}
		</>
	)
}