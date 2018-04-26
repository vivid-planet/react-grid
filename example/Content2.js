import React, { Component } from 'react';
import Row from '../src/Row';
import Col from '../src/Col';

class Content2 extends Component {
    render() {
        return <Row>
                <Col width="1/5" forceWidth style={{ backgroundColor: 'pink'}}>
                    <div style={{ backgroundColor: 'yellow'}}>Content2 left</div>
                </Col>
                <Col width="4/5" style={{ backgroundColor: 'orange'}}>
                    <div style={{ backgroundColor: 'yellow'}}>Content2 right</div>
                </Col>
            </Row>
    }
}
export default Content2;
