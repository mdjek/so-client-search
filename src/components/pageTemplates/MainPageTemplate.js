import React from 'react';
import PropTypes from 'prop-types';

const MainPageTemplate = (props) => {
    const { children } = props;

    return (
        <div className="wrapper">
            <main className="main">
                { children }
            </main>
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
