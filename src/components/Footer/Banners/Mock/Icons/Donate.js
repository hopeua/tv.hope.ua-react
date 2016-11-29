import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 200
})

/* eslint-disable react/prefer-stateless-function */
export default class Donate extends Component {

    static propTypes = {
        color: PropTypes.string
    };

    render() {
        const { color } = this.props;

        return (
            <g>
                <path
                    fill={ color } d="M73.6,135.2C73.6,135.2,73.6,135.1,73.6,
                    135.2c-3.5-2.8-7.4-5.8-11.5-9.3c-18.5-15.3-34.7-31.4-40.3-40.1c-7.2-11-10.2-20.9-9.6-32.2C13.3,
                    30.7,32.4,12,54.5,12c16.9,0,29.2,14,35.8,21.6c3.9,4.4,6,6.9,9.6,6.9c3.7,0,6.1-2.6,
                    10.5-7.4c7.2-7.9,19.3-21.1,35-21.1c22.2,0,41.2,18.7,42.4,41.6c0.6,11.4-2.3,21.1-9.6,32.2c-1.6,
                    2.4-4,5.4-7,8.8c4.6,0.3,9,1.4,13.1,3.1c1.5-1.9,2.8-3.6,3.9-5.3c5.9-9,12.5-21.5,
                    11.5-39.5c-0.8-14.1-6.7-27.4-16.8-37.3C172.9,5.6,159.5,0,145.5,0c-21,0-35.9,16.2-43.9,25c-0.5,
                    0.5-0.9,1-1.4,1.5c-0.3-0.3-0.5-0.6-0.8-0.9C92.1,17.3,76.9,0,54.5,0c-14,0-27.4,5.6-37.6,15.7C6.8,
                    25.6,0.9,38.9,0.1,53c-0.7,14,2.8,26.2,11.5,39.5c7.8,11.9,28.2,30.7,43.3,43.2c6.5,5.4,13.8,11.1,
                    20.8,16C74,146.4,73.2,140.9,73.6,135.2z"
                />
                <path
                    fill={ color } d="M199.9,135.8c-0.4-8.2-3.9-15.9-9.7-21.6c-5.9-5.9-13.7-9.1-21.8-9.1c-12.2,
                    0-20.8,9.4-25.4,14.5c-0.3,0.3-0.5,
                    0.6-0.8,0.9c-0.1-0.2-0.3-0.3-0.4-0.5c-4.2-4.8-13-14.9-26-14.9c-8.1,0-15.9,3.2-21.8,9.1c-5.8,
                    5.8-9.3,13.5-9.7,21.6c-0.4,8.1,1.6,15.2,6.7,22.9c4.5,6.9,16.4,17.8,25.1,25c9,7.4,20.8,16.3,26.2,
                    16.3c5.4,0,17.2-8.9,26.2-16.3c8.7-7.2,20.4-18.1,25-25.1C196.7,153.4,200.5,146.2,199.9,135.8z"
                />
            </g>
        );
    }
}
