import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DebugCol = styled.div`
    position: absolute;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    width: ${props => props.columnWidth}%;
    box-sizing: border-box;
    border-left: ${props => props.borderWidth} solid rgba(0, 255, 0, 0.1);
    border-right: ${props => props.borderWidth} solid rgba(0, 255, 0, 0.1);
    left: ${props => props.columnWidth * props.columnNumber}%;
`;

class Grid extends Component {
    getChildContext() {
        return {
            grid: {
                columns: this.props.columns,
                nested: this.props.columns,
                hasGutter: false,
                gutter: this.props.gutter,
                debug: this.props.debug
            }
        };
    }

    render() {
        let borderWidth = (parseInt(this.props.gutter, 10)/2) + 'px'; //only px supported for now
        let columnWidth = 100 / parseInt(this.props.columns, 10);
        return <div className={this.props.className}>
            {this.props.children}
            {this.props.debug && [...Array(this.props.columns)].map((x, i) =>
                <DebugCol key={i} columnNumber={i} borderWidth={borderWidth} columnWidth={columnWidth}></DebugCol>
            )}

        </div>;
    }
}

Grid.childContextTypes = {
    grid: PropTypes.object
};
Grid.propTypes = {
    columns: PropTypes.number.isRequired,
    gutter: PropTypes.string.isRequired,
    className: PropTypes.string,
    debug: PropTypes.bool
};

export default Grid;
