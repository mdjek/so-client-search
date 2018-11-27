import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { QuestionList } from '../../components/lists/index';
import PanelInfo from '../../components/PanelInfo';
import * as actions from './actions';

const arr = {
    "items": [
        {
            "tags": [
                "file",
                "null",
                "nsis",
                "overwrite"
            ],
            "owner": {
                "reputation": 6,
                "user_id": 2408124,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/9158d5f8a82d51ec25b706ed35cd71d7?s=128&d=identicon&r=PG",
                "display_name": "user2408124",
                "link": "https://stackoverflow.com/users/2408124/user2408124"
            },
            "is_answered": true,
            "view_count": 52,
            "answer_count": 1,
            "score": 1,
            "last_activity_date": 1452294470,
            "creation_date": 1452283533,
            "last_edit_date": 1452285347,
            "question_id": 34685205,
            "link": "https://stackoverflow.com/questions/34685205/overwrting-multiple-file-using-nsis-script-how-win-zip-extractor-does",
            "title": "Overwrting multiple file using NSIS Script (how Win Zip extractor does)"
        },
        {
            "tags": [
                "c#",
                "c++",
                "windows",
                "winapi",
                "dwm"
            ],
            "owner": {
                "reputation": 2502,
                "user_id": 471810,
                "user_type": "registered",
                "accept_rate": 67,
                "profile_image": "https://www.gravatar.com/avatar/c5e7adb21a5a00108890a2d52bd5cc1e?s=128&d=identicon&r=PG&f=1",
                "display_name": "klyd",
                "link": "https://stackoverflow.com/users/471810/klyd"
            },
            "is_answered": true,
            "view_count": 347,
            "accepted_answer_id": 5851972,
            "answer_count": 2,
            "score": 0,
            "last_activity_date": 1304289978,
            "creation_date": 1301505949,
            "question_id": 5489828,
            "link": "https://stackoverflow.com/questions/5489828/extending-how-win-7-aero-draws-its-default-windows-and-controls",
            "title": "Extending how Win 7 (Aero) draws it&#39;s default Windows and Controls"
        }
    ],
};

class Search extends Component {
    componentDidMount() {
        const { actions: { init } } = this.props;

        init();

        console.log(this.props);

        // getQuestionList('react');
    }

    render() {
        const {
            panelListParams,

            actions: {
                getListByValue,
                reset,
            }
        } = this.props;

        console.log(this.props);

        return (
            <div>
                <h2>Результаты по запросу <span></span></h2>

                <div>
                    {arr && arr.items
                        && (
                                <QuestionList
                                    itemList={arr.items}
                                    getListByValue={getListByValue}
                                />
                            )
                    }
                </div>
                <div>
                    {
                        panelListParams && panelListParams.typeList && panelListParams.properties
                        && (
                            <PanelInfo
                                itemList={arr.items}
                                listBy={panelListParams}
                                reset={reset}
                            />
                        )
                    }
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    questionData: state.SearchReducer.questionData,
    panelListParams: state.SearchReducer.panelListParams,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
