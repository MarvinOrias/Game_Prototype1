import React, {useEffect, useRef} from 'react';
import {Row} from 'react-bootstrap';
import Swal from 'sweetalert2';

import MatchMaking from '../components/MatchMaking';
import Error404Page from './Error404Page';

export default function MatchMakingPage(){
	const pageLoad = useRef(true);
	const access = localStorage.getItem('access');

/*	function hook(){
		useEffect(() => {
			if(pageLoad.current){
				pageLoad.current = false;
				setTimeout(
					() => {
						Swal.fire({
							text: 'BEGIN BATTLE!'
						})
					}, 500)
			}
		}, [])
	}*/
	function notif(){
		setTimeout(
			() => {
				Swal.fire({
					text: 'BEGIN BATTLE!'
				})
			}, 500)
	}

	return(
		<>
			{
				access === 'true'
				?
				<>	
					{notif()}
					<MatchMaking />
					
				</>
				:
				<Error404Page />
			}
		</>
	)
}