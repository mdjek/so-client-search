import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { getNumberCase } from '../../lib/utils/stringExtensions';
import { tsToDate } from '../../lib/utils/dateExtensions';

const QuestionListByAuthor = (props) => {
    return (
        <ul className="question-list">
            {props.itemList.map(item => (
                <li className="question-item" key={item.question_id}>
                    <p className="question-item__title">
                        <Link
                            to={`/question/${item.question_id}${props.requestText && `/?refer=${props.requestText}`}`}
                        >
                            {item.title}
                        </Link>
                    </p>
                    <p className="question-item__ans">
                        {item.answer_count
                            ?
                            (<Link
                                to={`/question/${item.question_id}${props.requestText && `/?refer=${props.requestText}`}#answers`}
                            >
                                {item.answer_count} {getNumberCase(item.answer_count, 'ответ', 'ответа', 'ответов')}
                            </Link>)
                            :
                            (<span>Ответов нет</span>)
                        }
                    </p>
                    <p className="question-item__date">Добавлен: {tsToDate(item.creation_date)}</p>
                    <ul className="tags cursor-default">
                        {item.tags.map((tag) => (
                            <li
                                key={`${item.question_id}${tag}`}
                            >
                                <button
                                    type="button"
                                    className="btn btn-default btn-xs"
                                    disabled
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
};

QuestionListByAuthor.propTypes = {
    itemList: PropTypes.arrayOf(
        PropTypes.shape(),
    ),
    requestText: PropTypes.string,
};

QuestionListByAuthor.defaulProps = {
    itemList: [],
};

export default QuestionListByAuthor;
