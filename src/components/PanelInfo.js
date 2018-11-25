import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    QuestionListByTag,
    QuestionListByAuthor,
} from './lists/index'

class PanelInfo extends Component {
    selectList = (typeList) => {
        const { itemList } = this.props;

        switch (typeList) {
            case 'byTag': {
                return <QuestionListByTag itemList={itemList} />
            }

            case 'byAuthor': {
                return <QuestionListByAuthor itemList={itemList} />
            }

            default: return;
        }
    };

    render() {
        const { listBy } = this.props;

        return (
            <div style={{border: '1px solid #ccc'}}>
                <h3>{listBy.value}</h3>
                {this.selectList(listBy.typeList)}
            </div>
        );
    };
}

PanelInfo.propTypes = {
    typeList: PropTypes.string,
};

PanelInfo.defaultProps = {
    itemList: [],
};

export default PanelInfo;
