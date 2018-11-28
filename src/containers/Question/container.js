import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const items = [
    {
        "tags": [
            "python",
            "arrays",
            "python-3.x",
            "numpy"
        ],
        "owner": {
            "reputation": 68,
            "user_id": 9816518,
            "user_type": "registered",
            "profile_image": "https://www.gravatar.com/avatar/3562173c0ae3fe747487e5241477a021?s=128&d=identicon&r=PG&f=1",
            "display_name": "Mass17",
            "link": "https://stackoverflow.com/users/9816518/mass17"
        },
        "is_answered": true,
        "view_count": 46,
        "accepted_answer_id": 53488330,
        "answer_count": 2,
        "score": 0,
        "last_activity_date": 1543264905,
        "creation_date": 1543262533,
        "question_id": 53488187,
        "body_markdown": "I am trying to flip a binary array one at a time.\r\n\r\n    import numpy as np\r\n    k = np.array([0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1])\r\nfor example my out put should be like this;\r\n\r\n    [1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1] # 1st output\r\n    [0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1] # 2nd output\r\n    [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1] # 3rd output\r\n    [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1] # 4th output\r\n    [0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1] # 5th output\r\nIn the first output, I want to flip only the first element of the array (other elements do not change), in the second output, the second element should change (the 1st and the remaining elements should not change).. etc. \r\nCould anyone tell me how can flip one at a time? Thank you",
        "link": "https://stackoverflow.com/questions/53488187/changing-array-value-one-at-a-time",
        "title": "changing array value one at a time",
        "body": "<p>I am trying to flip a binary array one at a time.</p>\n\n<pre><code>import numpy as np\nk = np.array([0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1])\n</code></pre>\n\n<p>for example my out put should be like this;</p>\n\n<pre><code>[1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1] # 1st output\n[0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1] # 2nd output\n[0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1] # 3rd output\n[0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1] # 4th output\n[0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1] # 5th output\n</code></pre>\n\n<p>In the first output, I want to flip only the first element of the array (other elements do not change), in the second output, the second element should change (the 1st and the remaining elements should not change).. etc. \nCould anyone tell me how can flip one at a time? Thank you</p>\n"
    }
];

const answers = [
    {
        "owner": {
            "reputation": 11997,
            "user_id": 4016285,
            "user_type": "registered",
            "accept_rate": 100,
            "profile_image": "https://i.stack.imgur.com/SvSVV.png?s=128&g=1",
            "display_name": "B. M.",
            "link": "https://stackoverflow.com/users/4016285/b-m"
        },
        "is_accepted": false,
        "score": 1,
        "last_activity_date": 1543264905,
        "last_edit_date": 1543264905,
        "creation_date": 1543264557,
        "answer_id": 53488659,
        "question_id": 53488187,
        "body_markdown": "You can use a generator to save memory and even time on big arrays :\r\n\r\n    k=np.array([0, 0, 1])\r\n    \r\n    def flip_one(k):\r\n        k[0]=1-k[0]\r\n        yield k\r\n        for i in range(len(k)):\r\n            k[i:i+2]=1-k[i:i+2]\r\n            yield k\r\n                    \r\n    for f in flip_one(k) : \r\n        print (f) # or other useful things!\r\n    #[1 0 1]\r\n    #[0 1 1]\r\n    #[0 0 0]\r\n    #[0 0 1]\r\n        \r\n`k` is reset at the end of the loop.        \r\n",
        "body": "<p>You can use a generator to save memory and even time on big arrays :</p>\n\n<pre><code>k=np.array([0, 0, 1])\n\ndef flip_one(k):\n    k[0]=1-k[0]\n    yield k\n    for i in range(len(k)):\n        k[i:i+2]=1-k[i:i+2]\n        yield k\n\nfor f in flip_one(k) : \n    print (f) # or other useful things!\n#[1 0 1]\n#[0 1 1]\n#[0 0 0]\n#[0 0 1]\n</code></pre>\n\n<p><code>k</code> is reset at the end of the loop.        </p>\n"
    },
    {
        "owner": {
            "reputation": 28910,
            "user_id": 3483203,
            "user_type": "registered",
            "accept_rate": 78,
            "profile_image": "https://i.stack.imgur.com/592wq.png?s=128&g=1",
            "display_name": "user3483203",
            "link": "https://stackoverflow.com/users/3483203/user3483203"
        },
        "is_accepted": true,
        "score": 1,
        "last_activity_date": 1543263093,
        "creation_date": 1543263093,
        "answer_id": 53488330,
        "question_id": 53488187,
        "body_markdown": "What you&#39;re describing is flipping the diagonal of a tiled version of your array.  By stacking your array, you can operate on the entire array at once, using vectorized operations, rather than operating on each row individually.\r\n\r\n***Setup***\r\n\r\n    arr = np.tile(k, 5).reshape(-1, k.shape[0])\r\n\r\n&lt;!- -&gt;\r\n\r\n    array([[0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],\r\n           [0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],\r\n           [0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],\r\n           [0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],\r\n           [0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1]])\r\n\r\n---\r\n\r\nUsing [`numpy.diag_indices`](https://docs.scipy.org/doc/numpy-1.15.0/reference/generated/numpy.diag_indices.html):\r\n\r\n    x, y = np.diag_indices(arr.shape[0])\r\n    arr[x, y] = 1 - arr[x, y]\r\n\r\n&lt;!- -&gt;\r\n\r\n    array([[1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],\r\n           [0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],\r\n           [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],\r\n           [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],\r\n           [0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1]])",
        "body": "<p>What you're describing is flipping the diagonal of a tiled version of your array.  By stacking your array, you can operate on the entire array at once, using vectorized operations, rather than operating on each row individually.</p>\n\n<p><strong><em>Setup</em></strong></p>\n\n<pre><code>arr = np.tile(k, 5).reshape(-1, k.shape[0])\n</code></pre>\n\n<p></p>\n\n<pre><code>array([[0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],\n       [0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],\n       [0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],\n       [0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],\n       [0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1]])\n</code></pre>\n\n<hr>\n\n<p>Using <a href=\"https://docs.scipy.org/doc/numpy-1.15.0/reference/generated/numpy.diag_indices.html\" rel=\"nofollow noreferrer\"><code>numpy.diag_indices</code></a>:</p>\n\n<pre><code>x, y = np.diag_indices(arr.shape[0])\narr[x, y] = 1 - arr[x, y]\n</code></pre>\n\n<p></p>\n\n<pre><code>array([[1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],\n       [0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],\n       [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],\n       [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],\n       [0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1]])\n</code></pre>\n"
    }
];

class Question extends Component {
    componentDidMount() {
        const {
            match: { params: { id } },
            actions: { init }
        } = this.props;

        init(id);
    }

    componentWillUnmount() {
        const {
            actions: { reset }
        } = this.props;

        reset();
    }

    render() {
        const { question, answers } = this.props;

        return (
            <>
                {question && question.title
                    ? (
                        <>
                            <h1>{question.title}</h1>
                            <div>{question.body}</div>
                            <hr/>
                        </>
                    )
                    : <h2>Вопрос не найден</h2>
                }

                {question.answer_count > 0 ? (
                        <div>
                            <h3>Ответы</h3>
                            <div>
                                {
                                    answers.map(item => (
                                        <div key={item.answer_id}>
                                            {item.body_markdown}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                    : <p>Ответов пока нет :(</p>
                }
            </>
        );
    }
}

Question.propTypes = {
    question: PropTypes.shape(),
    answers: PropTypes.arrayOf(
        PropTypes.shape(),
    ),
};

Question.defaultProps = {
    question: {},
    answers: [],
};

const mapStateToProps = state => ({
    question: state.QuestionReducer.question,
    answers: state.QuestionReducer.answers,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
