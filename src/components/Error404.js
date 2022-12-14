import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Error404(){
	return(
		<>
			<Row style={{textAlign: 'center'}}>
				<Col sm={12}>
					<h1 className="h1-error">Page not found!</h1>
					<h1><Link to="/" className="a-error">Go back home</Link></h1>
				</Col>
			</Row>
		</>
	)
}