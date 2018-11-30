import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { getNumberCase } from '../../lib/utils/stringExtensions';
import { tsToDate } from '../../lib/utils/dateExtensions';

class QuestionList extends Component {
    render () {
        const { itemList, getListByValue, requestText } = this.props;
        return (
            <ul className="question-list">
                {itemList.map(item => (
                    <li className="question-item" key={item.question_id}>
                        <p className="question-item__title">
                            <Link to={`/question/${item.question_id}${requestText && `/?refer=${requestText}`}`}>
                                {item.title}
                            </Link>
                        </p>
                        <p className="question-item__ans">
                            {item.answer_count
                                ? (
                                    <Link
                                        to={`/question/${item.question_id}${requestText && `/?refer=${requestText}`}#answers`}
                                        type="button"
                                        className="btn btn-info btn-sm"
                                    >
                                        {item.answer_count} {getNumberCase(item.answer_count, 'ответ', 'ответа', 'ответов')}
                                    </Link>)
                                :
                                (<span>Ответов нет</span>)
                            }
                        </p>
                        <p
                            className="question-item__author"
                        >
                            {'Автор: '}
                            <span
                                onClick={() => {
                                    getListByValue('byAuthor', {
                                        id: item.owner.user_id,
                                        name: item.owner.display_name,
                                    })
                                }}
                            >
                                {item.owner.display_name}
                            </span>
                        </p>
                        <p className="question-item__date">Добавлен: {tsToDate(item.creation_date)}</p>
                        <ul className="tags">
                            {item.tags.map((tag) => (
                                <li
                                    key={`${item.question_id}${tag}`}
                                >
                                    <button
                                        type="button"
                                        className="btn btn-default btn-xs"
                                        onClick={() => {getListByValue('byTag', {
                                                name: tag,
                                            })
                                        }}
                                    >
                                        {tag}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        );
    }
}

QuestionList.propTypes = {
    itemList: PropTypes.arrayOf(
        PropTypes.shape(),
    ),
    getListByValue: PropTypes.func,
    requestText: PropTypes.string,
};

QuestionList.defaulProps = {
    itemList: [],
};

export default QuestionList;
