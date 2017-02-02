import React, { PropTypes } from 'react';
import Info from './View/Common/tpl';

export default function Component(props) {
    const { mediaType } = props;

    return (
        <Info mediaType={ mediaType }/>
    );
}

Component.propTypes = {
    mediaType: PropTypes.string.isRequired
};
