import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getNumberCase } from '../../lib/utils/stringExtensions';
import { tsToDate } from '../../lib/utils/dateExtensions';

class QuestionList extends Component {
    render () {
        const { itemList, getListByValue } = this.props;
        return (
            <ul className="question-list">
                {itemList.map(item => (
                    <li className="question-item" key={item.question_id}>
                        <p className="question-item__title">
                            <Link to={`/question/${item.question_id}`}>
                                {item.title}
                            </Link>
                        </p>
                        <p className="question-item__ans"><span>{item.answer_count} {getNumberCase(item.answer_count, 'ответ', 'ответа', 'ответов')}</span></p>
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
                                    onClick={() => {getListByValue('byTag', {
                                            name: tag,
                                        })
                                    }}
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        );
    }
};

QuestionList.propTypes = {
    itemList: PropTypes.arrayOf(
        PropTypes.shape(),
    )
};

QuestionList.defaulProps = {
    itemList: [],
};

export default QuestionList;
