import React, { Component } from 'react';
import Row from '../src/Row';
import Col from '../src/Col';

class Content2 extends Component {
    render() {
        return <Row>
                <Col width={{md: "1/5", lg: "1/5", xl: "1/5"}} forceWidth style={{ backgroundColor: 'pink'}} foo>
                    <div style={{ backgroundColor: 'yellow'}}>Content2 left</div>
                </Col>
                <Col width={{md: "1/5", lg: "1/5", xl: "1/5"}} style={{ backgroundColor: 'orange'}}>
                    <div style={{ backgroundColor: 'yellow'}}>Content2 right</div>
                </Col>
            </Row>
    }
}
export default Content2;
