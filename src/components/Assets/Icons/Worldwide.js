import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 200
})

/* eslint-disable react/prefer-stateless-function */
export default class Worldwide extends Component {

    static propTypes = {
        color: PropTypes.string
    };

    render() {
        const { color } = this.props;

        return (
            <path
                fill={ color } d="M170.7,29.3c18.9,18.9,29.3,44,29.3,70.7c0,26.7-10.4,51.8-29.3,70.7c-18.9,18.9-44,
                29.3-70.7,29.3s-51.8-10.4-70.7-29.3C10.4,151.8,0,126.7,0,100c0-26.7,10.4-51.8,29.3-70.7S73.3,0,100,
                0S151.8,10.4,170.7,29.3z M161.9,161.9c12.3-12.3,20.5-27.7,23.9-44.3c-2.6,3.9-5.1,
                5.3-6.7-3.4c-1.6-14.1-14.6-5.1-22.8-10.1c-8.6,5.8-27.9-11.3-24.6,8c5.1,8.7,27.3-11.6,16.2,6.7c-7.1,
                12.8-25.9,41.2-23.5,55.9c0.3,21.4-21.9,
                4.5-29.6-2.6c-5.1-14.2-1.8-39.1-15.2-46.1c-14.6-0.6-27.1-2-32.8-18.3C43.5,95.9,50.5,78.5,63,
                75.9c18.3-11.5,24.9,13.5,42.1,14c5.3-5.6,19.9-7.4,21.1-13.6c-11.3-2,14.3-9.5-1.1-13.7c-8.5,1-14,
                8.8-9.4,15.4c-16.5,3.8-17-23.8-32.8-15.1c-0.4,13.8-25.8,4.5-8.8,1.7c5.9-2.6-9.5-10-1.2-8.6c4.1-0.2,
                17.8-5,14.1-8.3c7.7-4.8,14.1,11.4,21.6-0.4c5.4-9-2.3-10.7-9.1-6.1c-3.8-4.3,6.8-13.5,16.1-17.5c3.1-1.3,
                6.1-2.1,8.3-1.9c4.7,5.4,13.4,6.4,13.8-0.7c-11.6-5.6-24.5-8.5-37.8-8.5c-19.1,0-37.2,6.1-52.2,17.3c4,1.8,
                6.3,4.1,2.4,7.1c-3,9-15.3,21.1-26,19.4c-5.6,9.6-9.3,20.2-10.8,31.4c9,3,11.1,8.9,9.1,10.8c-4.6,4-7.4,
                9.7-8.9,15.9c2.9,17.9,11.4,34.5,24.5,47.6c16.5,16.5,38.5,25.6,61.9,25.6C123.4,187.5,145.3,178.4,161.9,
                161.9z"
            />
        );
    }
}
