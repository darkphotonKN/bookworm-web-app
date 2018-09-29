import React from 'react';
import PropTypes from 'prop-types';

const InlineError = (props) => {
    return ( 
        <p className="alert alert-danger p-2 display-inline">{props.error}</p>
    );
}

InlineError.propTypes = {
    props: PropTypes.string
}
 
export default InlineError;