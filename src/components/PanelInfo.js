import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    QuestionListByTag,
    QuestionListByAuthor,
} from './lists/index'

class PanelInfo extends Component {
    renderList = (typeList) => {
        const { itemList, requestText } = this.props;

        switch (typeList) {
            case 'byTag': {
                return <QuestionListByTag itemList={itemList} requestText={requestText} />
            }

            case 'byAuthor': {
                return <QuestionListByAuthor itemList={itemList} requestText={requestText} />
            }

            default: return;
        }
    };

    componentWillUnmount() {
        const { resetPanel } = this.props;

        resetPanel();
    }

    render() {
        const {
            listBy: {
                typeList,
                properties: {
                    name,
                }
            },
            resetPanel,
            itemList,
        } = this.props;

        return (
            <div className="panel-info">
                <span
                    className="panel-info__close"
                    onClick={resetPanel}
                />
                {itemList && itemList.length > 0
                    && (
                        <h3>
                            {typeList === 'byTag' && 'Похожие вопросы по тегу'}
                            {typeList === 'byAuthor' && 'Другие вопросы автора'}
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
    resetPanel: PropTypes.func,
    id: PropTypes.number,
    name: PropTypes.string,
    typeList: PropTypes.string,
    itemList: PropTypes.arrayOf(PropTypes.shape()),
};

PanelInfo.defaultProps = {
    itemList: [],
};

export default PanelInfo;
