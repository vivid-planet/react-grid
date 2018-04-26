import React, { Component } from 'react';
import {ThemeProvider} from 'styled-components';
import Grid from '../src/Grid';
import Col from '../src/Col';
import Row from '../src/Row';
import Content1 from './Content1';
import Content2 from './Content2';

const theme = {
    breakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200
    }
};

class App extends Component {
  render() {
    return (
        <ThemeProvider theme={theme}>
            <Grid columns={12} gutter="30px" debug={true}>
                <Row>
                    <Col width="1/6" style={{backgroundColor: 'red', height: '400px'}}>
                        menü
                    </Col>
                    <Col width="5/6" style={{backgroundColor: 'blue', height: '400px'}}>
                        <Content1 />
                        <Content2 />
                    </Col>
                </Row>
            </Grid>
        </ThemeProvider>
    );
  }
}

export default App;
