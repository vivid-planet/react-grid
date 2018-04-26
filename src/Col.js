import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme, css } from 'styled-components';
import breakpoint, { map } from 'styled-components-breakpoint';

const StyledCol = styled.div`
    padding-right: ${props => props.padding};
    padding-left: ${props => props.padding};
    box-sizing: border-box;
    float: left;
    ${props => map(props.widths, val => `width: ${val}%;`)}
`;

class Col extends Component {
    getChildContext() {
        const nested = {};
        Object.keys(this.props.theme.breakpoints).forEach(i => {
            nested[i] = this.context.grid.nested[i] * this.parseWidth(i);
        });

        return {
            grid: {
                columns: this.context.grid.columns,
                nested: nested,
                hasGutter: true,
                gutter: this.context.grid.gutter,
                debug: this.context.grid.debug
            }
        };
    }

    parseWidth(breakpoint) {
        let width = null;
        if (typeof this.props.width == 'string') {
            //for all breakpoints
            width = this.props.width;
        } else {
            //given breakpoints
            if (this.props.width[breakpoint]) {
                width = this.props.width[breakpoint];
            }
        }
        if (!width) return 1;

        const m = width.match(/([0-9]+)\/([0-9]+)/);
        if (!m) return 1;
        let ret = parseInt(m[1], 10) / parseInt(m[2], 10);
        if (!this.props.forceWidth) {
            ret = Math.floor(this.context.grid.nested[breakpoint] * ret) / this.context.grid.nested[breakpoint];
        }
        return ret;
    }

    render() {
        let padding = (parseInt(this.context.grid.gutter, 10)/2) + 'px'; //only px supported for now

        const widths = {};
        Object.keys(this.props.theme.breakpoints).forEach(i => {
            widths[i] = this.parseWidth(i) * 100;
        });

        return <StyledCol className={this.props.className} style={this.props.style} widths={widths} padding={padding}>
            {/*this.context.grid.debug && <div>
                {Math.round(width*100)/100}% {Math.round(width / 100 * this.context.grid.nested.md * 10)/10} of {this.context.grid.nested.md}
            </div>*/}
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
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]).isRequired,
    forceWidth: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string
};
export default withTheme(Col);
