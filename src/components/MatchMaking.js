import React, {useState} from 'react';
import {Row, Col, ProgressBar} from 'react-bootstrap';
import Swal from 'sweetalert2';

import X from '../images/x.gif';
import Sigma from '../images/sigma.gif';

export default function MatchMaking(){
	const [xBar, setXBar] = useState(100);
	const [sigmaBar, setSigmaBar] = useState(100);

	function xAttack(){
		let x = Math.floor(Math.random()*(10)) + 1;
		if(sigmaBar <= 0){
			setSigmaBar(0);
			Swal.fire({
				text: 'Player 2 defeated!'
			})
		}
		else{
			if(x % 10 === 0){
				Swal.fire({
					text: 'Critical hit(10% damage)!'
				});
				setSigmaBar(sigmaBar - 10);
			}
			else{
				setSigmaBar(sigmaBar - x);
			}
		}
	}

	function sigmaAttack(){
		let sigma = Math.floor(Math.random()*(10)) + 1;
		if(xBar <= 0){
			setXBar(0);
			Swal.fire({
				text: 'Player 1 defeated!'
			})
		}
		else{
			if(sigma % 10 === 0){
				Swal.fire({
					text: 'Critical hit(10% damage)!'
				});
				setXBar(xBar - 10);
			}
			else{
				setXBar(xBar - sigma);
			}
		}
	}


	return(
		<>
			<Row>
				<Col sm={12}>
					<img src={X} alt="X" className="X" />
					<div style={{position: 'absolute', width: '100px'}} className="x-stats">
						Life: <div><ProgressBar variant="success" now={xBar} label={`${xBar}%`} /></div>
						<button className="x-tackle" onClick={xAttack} hidden={sigmaBar === 0 ? true : false} >Tackle</button>
					</div>			

					<img src={Sigma} alt="Sigma" className="Sigma"/>
					<div style={{marginLeft: '66vw', width: '100px'}} className="sigma-stats">
						Life: <div><ProgressBar variant="success" now={sigmaBar} label={`${sigmaBar}%`} /></div>
						<button className="sigma-tackle" onClick={sigmaAttack} hidden={xBar === 0 ? true : false}>Tackle</button>
					</div>	
					{/*<div style={{marginLeft: '35vw'}} className="match-begin">BATTLE!</div>*/}
				</Col>
			</Row>
		</>
	)
}