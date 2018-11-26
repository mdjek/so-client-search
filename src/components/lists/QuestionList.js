import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class QuestionList extends Component {
    render () {
        const { itemList, getListByValue } = this.props;
        return (
            <ul>
                {itemList.map(item => (
                    <li className="list-item" key={item.question_id}>
                        <p>
                            <Link to={`question/${item.question_id}`}>
                                {item.title}
                            </Link>
                        </p>
                        <p
                            className="list-item__author"
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
                        <p className="list-item__ans"><span>{item.answer_count}</span></p>
                        <div className="list-item__tags">
                            {item.tags.map((tag, index, array) => (
                                <span
                                    key={`${item.question_id}${tag}`}
                                    onClick={() => {getListByValue('byTag', {
                                            name: tag,
                                        })
                                    }}
                                >
                                    {tag}{(index !== (array.length - 1)) && ', '}
                                </span>
                            ))}
                        </div>
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
