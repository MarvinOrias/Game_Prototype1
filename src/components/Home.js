import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';

export default function Home(props){
	const {btn} = props;

	return(
		<>
			<Row style={{textAlign: 'center'}}>
				<Col sm={12}>
					<h2 className="h2-home">Welcome players!</h2>
					<button type="submit" className="btn-home" onClick={btn}>START</button>
				</Col>
			</Row>
		</>
	)
}