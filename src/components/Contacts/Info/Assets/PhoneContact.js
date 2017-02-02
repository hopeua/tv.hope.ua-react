import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 58,
    height: 58
})

/* eslint-disable react/prefer-stateless-function */
export default class PhoneContact extends Component {

    static propTypes = {
        color: PropTypes.string
    };

    render() {
        const { color } = this.props;

        return (
            <path
                fill={ color } d="M22.2,35.9C27.4,41,33.5,46,35.8,43.6c3.4-3.4,5.5-6.4,13-0.4c7.5,6,1.8,10-1.5,
                13.4c-3.8,3.8-18,0.3-32-13.7c-14-14-17.7-28.1-13.9-32c3.3-3.3,7.3-9.1,13.3-1.6c6,7.5,3.1,9.6-0.3,
                13C12.1,24.7,17,30.7,22.2,35.9z M29.8,11.2c0,0-1.6-0.2-2.7,0.9c-1.1,1.1-1.2,3.1,0,4.3c0.7,0.7,1.7,0.9,
                1.7,0.9c1.9,0.4,4.9,1,8,4.1c3.1,3.1,3.7,6,4.1,8c0,0,0.2,1,0.9,1.7c1.2,1.2,3.1,1.1,4.3,0c1.1-1.1,0.9-2.7,
                0.9-2.7c-0.6-3.9-2.5-8-5.8-11.3C37.8,13.7,33.7,11.8,29.8,11.2z M44.5,13.5c5.7,5.7,8.1,12.2,7.3,17.4c0,
                0-0.3,1.7,0.8,2.7c1.2,1.2,3.1,1.2,4.3,0c0.7-0.7,0.9-1.9,
                0.9-1.9c0.7-4.5-0.2-13.7-9-22.5c-8.9-8.9-18-9.7-22.5-9.1c0,0-1.2,0.2-1.9,0.9c-1.1,1.1-1.2,3.1,0,4.3c1.1,
                1.1,2.7,0.8,2.7,0.8C32.4,5.4,38.8,7.8,44.5,13.5z"
            />
        );
    }
}
