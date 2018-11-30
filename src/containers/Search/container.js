import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { QuestionList } from '../../components/lists/index';
import PanelInfo from '../../components/PanelInfo';
import * as actions from './actions';

class Search extends Component {
    componentDidMount() {
        const { actions: { init } } = this.props;

        init();
    }

    componentWillUnmount() {
        const { actions: { reset } } = this.props;

        reset();
    }

    render() {
        const {
            questionData,
            panelQuestionData,
            panelListParams,
            requestText,

            actions: {
                getListByValue,
                resetPanel,
            }
        } = this.props;

        return (
            <>
                <ul className="nav nav-pills">
                    <li role="presentation">
                        <Link to="/">Новый поиск</Link>
                    </li>
                </ul>
                <div className="row">
                    <div className="col-sm-12">
                        <h2>
                            {'Результаты '}
                            { requestText
                                && (<>
                                    {'по запросу '}
                                    <span style={{ color: '#ccc' }}>"{decodeURI(requestText)}"</span>
                                    {':'}
                                </>)
                            }
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        {questionData
                            && (
                                    <div>
                                        <QuestionList
                                            itemList={questionData}
                                            getListByValue={getListByValue}
                                            requestText={requestText}
                                        />
                                    </div>
                                )
                        }
                    </div>
                    <div className="col-sm-4">
                        {
                            panelQuestionData && panelQuestionData.length > 0
                            && panelListParams && panelListParams.typeList
                            && (
                                <PanelInfo
                                    itemList={panelQuestionData}
                                    listBy={panelListParams}
                                    resetPanel={resetPanel}
                                    requestText={requestText}
                                />
                            )
                        }
                    </div>
                </div>
            </>
        );
    }
}

Search.propTypes = {
    actions: PropTypes.shape({
        init: PropTypes.func,
        reset: PropTypes.func,
        getListByValue: PropTypes.func,
        resetPanel: PropTypes.func,
    }),
    questionData: PropTypes.arrayOf(PropTypes.shape()),
    panelQuestionData: PropTypes.arrayOf(PropTypes.shape()),
    panelListParams: PropTypes.shape(),
    requestText: PropTypes.string,
};

const mapStateToProps = state => ({
    questionData: state.SearchReducer.questionData,
    panelQuestionData: state.SearchReducer.panelQuestionData,
    panelListParams: state.SearchReducer.panelListParams,
    requestText: state.SearchReducer.requestText,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
