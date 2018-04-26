import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';


const StyledRow = styled.div`
    clear: both;
    
    ${props => props.margin && css`
        margin-right: -${props.margin};
        margin-left: -${props.margin};
    `}
`;

class Row extends Component {
    getChildContext() {
        return {
            grid: {
                columns: this.context.grid.columns,
                nested: this.context.grid.nested,
                hasGutter: false,
                gutter: this.context.grid.gutter,
                debug: this.context.grid.debug
            }
        };
    }
    render() {
        let margin = undefined;
        if (this.context.grid.hasGutter) {
            margin = (parseInt(this.context.grid.gutter, 10)/2) + 'px'; //only px supported for now
        }
        return <StyledRow className={this.props.className} style={this.props.style} margin={margin}>{this.props.children}</StyledRow>;
    }
}
Row.childContextTypes = {
    grid: PropTypes.object
};
Row.contextTypes = {
    grid: PropTypes.object
};
Row.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
};
export default Row;
