import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCol = styled.div`
    width: ${props => props.width}%;
    padding-right: ${props => props.padding};
    padding-left: ${props => props.padding};
    box-sizing: border-box;
    float: left;
`;

class Col extends Component {
    getChildContext() {
        const width = this.parseWidth();
        return {
            grid: {
                columns: this.context.grid.columns,
                nested: this.context.grid.nested * width,
                hasGutter: true,
                gutter: this.context.grid.gutter,
                debug: this.context.grid.debug
            }
        };
    }

    parseWidth() {
        const m = this.props.width.match(/([0-9]+)\/([0-9]+)/);
        let width = 1;
        if (m) {
            width = parseInt(m[1], 10) / parseInt(m[2], 10);
        }
        if (!this.props.forceWidth) {
            width = Math.floor(this.context.grid.nested * width) / this.context.grid.nested;
        }
        return width;
    }

    render() {
        let padding = (parseInt(this.context.grid.gutter, 10)/2) + 'px'; //only px supported for now
        const width = this.parseWidth()*100;

        return <StyledCol className={this.props.className} style={this.props.style} width={width} padding={padding}>
            {this.context.grid.debug && <div>
                {Math.round(width*100)/100}% {Math.round(width / 100 * this.context.grid.nested * 10)/10} of {this.context.grid.nested}
            </div>}
            {this.props.children}
        </StyledCol>;
    }
}

Col.childContextTypes = {
    grid: PropTypes.object
};
Col.contextTypes = {
    grid: PropTypes.object
};
Col.propTypes = {
    width: PropTypes.string.isRequired,
    forceWidth: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string
};
export default Col;
