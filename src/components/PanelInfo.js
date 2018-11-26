import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    QuestionListByTag,
    QuestionListByAuthor,
} from './lists/index'

class PanelInfo extends Component {
    renderList = (typeList) => {
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

    componentWillUnmount() {
        const { reset} = this.props;

        reset();
    }

    render() {
        const {
            listBy: {
                typeList,
                properties: {
                    name,
                }
            },
            reset,
            itemList,
        } = this.props;

        return (
            <div style={{border: '1px solid #ccc'}}>
                <i
                    onClick={reset}
                >Х</i>
                {itemList && itemList.length > 0
                    && (
                        <h3>
                            {'Похожие вопросы '}
                            {typeList === 'byTag' && 'по тегу'}
                            {typeList === 'byAuthor' && 'по автору'}
                            {name
                            && (<span style={{color: '#bbb'}}>{` "${name}"`}</span>)
                            }
                            {':'}
                        </h3>
                    )
                }
                {this.renderList(typeList)}
            </div>
        );
    };
}

PanelInfo.propTypes = {
    typeList: PropTypes.string,
    itemList: PropTypes.arrayOf(PropTypes.shape()),
};

PanelInfo.defaultProps = {
    itemList: [],
};

export default PanelInfo;
