import React from 'react';
import PropTypes from 'prop-types';

const MainPageTemplate = (props) => {
    const { children } = props;

    return (
        <div className="container-fluid">
            <div className="wrapper">
                <div className="main">
                    { children }
                </div>
            </div>
        </div>
    );
};

MainPageTemplate.propTypes = {
    children: PropTypes.element,
};

MainPageTemplate.defaultProps = {
    children: {},
};

export default MainPageTemplate;
