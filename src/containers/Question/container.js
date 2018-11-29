import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tsToDate } from '../../lib/utils/dateExtensions';
import { Link } from 'react-router-dom';
import AppHistory from '../../app/history';
import getQueryParams from '../../lib/utils/locationExtensions';

const items = [
    {
        "tags": [
            "html5",
            "reactjs",
            "file-upload"
        ],
        "owner": {
            "reputation": 1114,
            "user_id": 517073,
            "user_type": "registered",
            "accept_rate": 87,
            "profile_image": "https://www.gravatar.com/avatar/917ead48eb4ab8bcedbb454977143e60?s=128&d=identicon&r=PG",
            "display_name": "Stepan Yakovenko",
            "link": "https://stackoverflow.com/users/517073/stepan-yakovenko"
        },
        "is_answered": true,
        "view_count": 8557,
        "accepted_answer_id": 42192710,
        "answer_count": 5,
        "score": 5,
        "last_activity_date": 1542208479,
        "creation_date": 1486928549,
        "last_edit_date": 1526281764,
        "question_id": 42192346,
        "body_markdown": "I have file upload input:\r\n\r\n    &lt;input onChange={this.getFile} id=&quot;fileUpload&quot; type=&quot;file&quot; className=&quot;upload&quot;/&gt;\r\n\r\nAnd I handle upload this way:\r\n\r\n    getFile(e) {\r\n        e.preventDefault();\r\n        let reader = new FileReader();\r\n        let file = e.target.files[0];\r\n        reader.onloadend = (theFile) =&gt; {\r\n            var data = {\r\n                blob: theFile.target.result, name: file.name,\r\n                visitorId:  this.props.socketio.visitorId\r\n            };\r\n            console.log(this.props.socketio);\r\n            this.props.socketio.emit(&#39;file-upload&#39;, data);\r\n        };\r\n        reader.readAsDataURL(file);\r\n    }\r\n\r\nIf I upload same file twice, then upload event is not fired. How can I fix that? For simple js code it was enough to do the following: this.value = null; in change handler. How can I do it with ReactJS?\r\n",
        "link": "https://stackoverflow.com/questions/42192346/how-to-reset-reactjs-file-input",
        "title": "How to reset ReactJS file input",
        "body": "<p>I have file upload input:</p>\n\n<pre><code>&lt;input onChange={this.getFile} id=\"fileUpload\" type=\"file\" className=\"upload\"/&gt;\n</code></pre>\n\n<p>And I handle upload this way:</p>\n\n<pre><code>getFile(e) {\n    e.preventDefault();\n    let reader = new FileReader();\n    let file = e.target.files[0];\n    reader.onloadend = (theFile) =&gt; {\n        var data = {\n            blob: theFile.target.result, name: file.name,\n            visitorId:  this.props.socketio.visitorId\n        };\n        console.log(this.props.socketio);\n        this.props.socketio.emit('file-upload', data);\n    };\n    reader.readAsDataURL(file);\n}\n</code></pre>\n\n<p>If I upload same file twice, then upload event is not fired. How can I fix that? For simple js code it was enough to do the following: this.value = null; in change handler. How can I do it with ReactJS?</p>\n"
    }
];

const ans = [
    {
        "owner": {
            "reputation": 6,
            "user_id": 5429554,
            "user_type": "registered",
            "profile_image": "https://lh3.googleusercontent.com/-_oB3xABtO30/AAAAAAAAAAI/AAAAAAAAI-k/ABFCqpyCMNU/photo.jpg?sz=128",
            "display_name": "Agustina Chaer",
            "link": "https://stackoverflow.com/users/5429554/agustina-chaer"
        },
        "is_accepted": false,
        "score": 0,
        "last_activity_date": 1542208479,
        "creation_date": 1542208479,
        "answer_id": 53303352,
        "question_id": 42192346,
        "body_markdown": "Here is my solution using redux form\r\n\r\n    class FileInput extends React.Component {\r\n      constructor() {\r\n        super();\r\n\r\n        this.deleteImage = this.deleteImage.bind(this);\r\n      }\r\n\r\n      deleteImage() {\r\n        // Just setting input ref value to null did not work well with redux form\r\n        // At the same time just calling on change with nothing didn&#39;t do the trick\r\n        // just using onChange does the change in redux form but if you try selecting\r\n        // the same image again it doesn&#39;t show in the preview cause the onChange of the\r\n        // input is not called since for the input the value is not changing\r\n        // but for redux form would be.\r\n\r\n        this.fileInput.value = null;\r\n        this.props.input.onChange();\r\n      }\r\n\r\n      render() {\r\n        const { input: { onChange, value }, accept, disabled, error } = this.props;\r\n        const { edited } = this.state;\r\n\r\n        return (\r\n          &lt;div className=&quot;file-input-expanded&quot;&gt;\r\n            {/* ref and on change are key properties here */}\r\n            &lt;input\r\n              className=&quot;hidden&quot;\r\n              type=&quot;file&quot;\r\n              onChange={e =&gt; onChange(e.target.files[0])}\r\n              multiple={false}\r\n              accept={accept}\r\n              capture\r\n              ref={(input) =&gt; { this.fileInput = input; }}\r\n              disabled={disabled}\r\n            /&gt;\r\n            {!value ?\r\n              {/* Add button */}\r\n              &lt;Button\r\n                className=&quot;btn-link action&quot;\r\n                type=&quot;button&quot;\r\n                text=&quot;Add Image&quot;\r\n                onPress={() =&gt; this.fileInput.click()}\r\n                disabled={disabled}\r\n              /&gt;\r\n              :\r\n              &lt;div className=&quot;file-input-container&quot;&gt;\r\n                &lt;div className=&quot;flex-row&quot;&gt;\r\n                  {/* Image preview */}\r\n                  &lt;img src={window.URL.createObjectURL(value)} alt=&quot;outbound MMS&quot; /&gt;\r\n                  &lt;div className=&quot;flex-col mg-l-20&quot;&gt;\r\n                    {/* This button does de replacing */}\r\n                    &lt;Button\r\n                      type=&quot;button&quot;\r\n                      className=&quot;btn-link mg-b-10&quot;\r\n                      text=&quot;Change Image&quot;\r\n                      onPress={() =&gt; this.fileInput.click()}\r\n                      disabled={disabled}\r\n                    /&gt;\r\n                    {/* This button is the one that does de deleting */}\r\n                    &lt;Button\r\n                      type=&quot;button&quot;\r\n                      className=&quot;btn-link delete&quot;\r\n                      text=&quot;Delete Image&quot;\r\n                      onPress={this.deleteImage}\r\n                      disabled={disabled}\r\n                    /&gt;\r\n                  &lt;/div&gt;\r\n                &lt;/div&gt;\r\n                {error &amp;&amp;\r\n                  &lt;div className=&quot;error-message&quot;&gt; {error}&lt;/div&gt;\r\n                }\r\n              &lt;/div&gt;\r\n            }\r\n          &lt;/div&gt;\r\n        );\r\n      }\r\n    }\r\n    \r\n    FileInput.propTypes = {\r\n      input: object.isRequired,\r\n      accept: string,\r\n      disabled: bool,\r\n      error: string\r\n    };\r\n\r\n    FileInput.defaultProps = {\r\n      accept: &#39;*&#39;,\r\n    };\r\n\r\n    export default FileInput;\r\n",
        "body": "<p>Here is my solution using redux form</p>\n\n<pre><code>class FileInput extends React.Component {\n  constructor() {\n    super();\n\n    this.deleteImage = this.deleteImage.bind(this);\n  }\n\n  deleteImage() {\n    // Just setting input ref value to null did not work well with redux form\n    // At the same time just calling on change with nothing didn't do the trick\n    // just using onChange does the change in redux form but if you try selecting\n    // the same image again it doesn't show in the preview cause the onChange of the\n    // input is not called since for the input the value is not changing\n    // but for redux form would be.\n\n    this.fileInput.value = null;\n    this.props.input.onChange();\n  }\n\n  render() {\n    const { input: { onChange, value }, accept, disabled, error } = this.props;\n    const { edited } = this.state;\n\n    return (\n      &lt;div className=\"file-input-expanded\"&gt;\n        {/* ref and on change are key properties here */}\n        &lt;input\n          className=\"hidden\"\n          type=\"file\"\n          onChange={e =&gt; onChange(e.target.files[0])}\n          multiple={false}\n          accept={accept}\n          capture\n          ref={(input) =&gt; { this.fileInput = input; }}\n          disabled={disabled}\n        /&gt;\n        {!value ?\n          {/* Add button */}\n          &lt;Button\n            className=\"btn-link action\"\n            type=\"button\"\n            text=\"Add Image\"\n            onPress={() =&gt; this.fileInput.click()}\n            disabled={disabled}\n          /&gt;\n          :\n          &lt;div className=\"file-input-container\"&gt;\n            &lt;div className=\"flex-row\"&gt;\n              {/* Image preview */}\n              &lt;img src={window.URL.createObjectURL(value)} alt=\"outbound MMS\" /&gt;\n              &lt;div className=\"flex-col mg-l-20\"&gt;\n                {/* This button does de replacing */}\n                &lt;Button\n                  type=\"button\"\n                  className=\"btn-link mg-b-10\"\n                  text=\"Change Image\"\n                  onPress={() =&gt; this.fileInput.click()}\n                  disabled={disabled}\n                /&gt;\n                {/* This button is the one that does de deleting */}\n                &lt;Button\n                  type=\"button\"\n                  className=\"btn-link delete\"\n                  text=\"Delete Image\"\n                  onPress={this.deleteImage}\n                  disabled={disabled}\n                /&gt;\n              &lt;/div&gt;\n            &lt;/div&gt;\n            {error &amp;&amp;\n              &lt;div className=\"error-message\"&gt; {error}&lt;/div&gt;\n            }\n          &lt;/div&gt;\n        }\n      &lt;/div&gt;\n    );\n  }\n}\n\nFileInput.propTypes = {\n  input: object.isRequired,\n  accept: string,\n  disabled: bool,\n  error: string\n};\n\nFileInput.defaultProps = {\n  accept: '*',\n};\n\nexport default FileInput;\n</code></pre>\n"
    },
    {
        "owner": {
            "reputation": 1,
            "user_id": 9393990,
            "user_type": "registered",
            "profile_image": "https://www.gravatar.com/avatar/98b6466f46de8728f269128c05d1aef0?s=128&d=identicon&r=PG&f=1",
            "display_name": "Jack L.",
            "link": "https://stackoverflow.com/users/9393990/jack-l"
        },
        "is_accepted": false,
        "score": 0,
        "last_activity_date": 1532696317,
        "last_edit_date": 1532696317,
        "creation_date": 1532693815,
        "answer_id": 51557797,
        "question_id": 42192346,
        "body_markdown": "I know file input is always uncontrolled however the following code still works in my own porject, I can reset the input with no problems at all.\r\n\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            selectedFile: undefined,\r\n            selectedFileName: undefined,\r\n            imageSrc: undefined,\r\n            value: &#39;&#39;\r\n        };\r\n\r\n        this.handleChange = this.handleChange.bind(this);\r\n        this.removeImage = this.removeImage.bind(this);\r\n    }\r\n\r\n    handleChange(event) {\r\n        if (event.target.files[0]) {\r\n            this.setState({\r\n                selectedFile: event.target.files[0],\r\n                selectedFileName: event.target.files[0].name,\r\n                imageSrc: window.URL.createObjectURL(event.target.files[0]),\r\n                value: event.target.value,\r\n            });\r\n        }\r\n    }\r\n\r\n    // Call this function to reset input\r\n    removeImage() {\r\n        this.setState({\r\n            selectedFile: undefined,\r\n            selectedFileName: undefined,\r\n            imageSrc: undefined,\r\n            value: &#39;&#39;\r\n        })\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            &lt;input type=&quot;file&quot; value={this.state.value} onChange={this.handleChange} /&gt;\r\n        );\r\n    }",
        "body": "<p>I know file input is always uncontrolled however the following code still works in my own porject, I can reset the input with no problems at all.</p>\n\n<pre><code>constructor(props) {\n    super(props);\n    this.state = {\n        selectedFile: undefined,\n        selectedFileName: undefined,\n        imageSrc: undefined,\n        value: ''\n    };\n\n    this.handleChange = this.handleChange.bind(this);\n    this.removeImage = this.removeImage.bind(this);\n}\n\nhandleChange(event) {\n    if (event.target.files[0]) {\n        this.setState({\n            selectedFile: event.target.files[0],\n            selectedFileName: event.target.files[0].name,\n            imageSrc: window.URL.createObjectURL(event.target.files[0]),\n            value: event.target.value,\n        });\n    }\n}\n\n// Call this function to reset input\nremoveImage() {\n    this.setState({\n        selectedFile: undefined,\n        selectedFileName: undefined,\n        imageSrc: undefined,\n        value: ''\n    })\n}\n\nrender() {\n    return (\n        &lt;input type=\"file\" value={this.state.value} onChange={this.handleChange} /&gt;\n    );\n}\n</code></pre>\n"
    },
    {
        "owner": {
            "reputation": 390,
            "user_id": 2207986,
            "user_type": "registered",
            "profile_image": "https://www.gravatar.com/avatar/851930e8aa818706e1ecb8c73c52adaa?s=128&d=identicon&r=PG",
            "display_name": "Jozcar",
            "link": "https://stackoverflow.com/users/2207986/jozcar"
        },
        "is_accepted": false,
        "score": 10,
        "last_activity_date": 1507255551,
        "creation_date": 1507255551,
        "answer_id": 46597245,
        "question_id": 42192346,
        "body_markdown": "This work for me - ref={ref =&gt; this.fileInput = ref}\r\n\r\n    &lt;input id=&quot;file_input_file&quot; type=&quot;file&quot; onChange={(e) =&gt; this._handleFileChange(e)} ref={ref=&gt; this.fileInput = ref} /&gt;\r\n\r\nthen in my case once the file was uploaded to the server , I clear it by using the statement below\r\n\r\n     this.fileInput.value = &quot;&quot;;",
        "body": "<p>This work for me - ref={ref => this.fileInput = ref}</p>\n\n<pre><code>&lt;input id=\"file_input_file\" type=\"file\" onChange={(e) =&gt; this._handleFileChange(e)} ref={ref=&gt; this.fileInput = ref} /&gt;\n</code></pre>\n\n<p>then in my case once the file was uploaded to the server , I clear it by using the statement below</p>\n\n<pre><code> this.fileInput.value = \"\";\n</code></pre>\n"
    },
    {
        "owner": {
            "reputation": 850,
            "user_id": 1164011,
            "user_type": "registered",
            "accept_rate": 20,
            "profile_image": "https://www.gravatar.com/avatar/acd8703511cd5073e6d24884dd8fd1d5?s=128&d=identicon&r=PG",
            "display_name": "tonatiuh-N",
            "link": "https://stackoverflow.com/users/1164011/tonatiuh-n"
        },
        "is_accepted": false,
        "score": 9,
        "last_activity_date": 1503510264,
        "creation_date": 1503510264,
        "answer_id": 45846251,
        "question_id": 42192346,
        "body_markdown": "What worked for me was setting a `key` attribute to the file input, then when I needed to reset it I update the key attribute value:\r\n\r\n    functionThatResetsTheFileInput() {\r\n      let randomString = Math.random().toString(36);\r\n    \r\n      this.setState({\r\n        theInputKey: randomString\r\n      });\r\n    }\r\n    \r\n    render() {\r\n      return(\r\n        &lt;div&gt;\r\n          &lt;input type=&quot;file&quot;\r\n                 key={this.state.theInputKey || &#39;&#39; } /&gt;\r\n          &lt;button onClick={this.functionThatResetsTheFileInput()} /&gt;\r\n        &lt;/div&gt;\r\n      )\r\n    }\r\n\r\nThat forces React to render the input again from scratch.",
        "body": "<p>What worked for me was setting a <code>key</code> attribute to the file input, then when I needed to reset it I update the key attribute value:</p>\n\n<pre><code>functionThatResetsTheFileInput() {\n  let randomString = Math.random().toString(36);\n\n  this.setState({\n    theInputKey: randomString\n  });\n}\n\nrender() {\n  return(\n    &lt;div&gt;\n      &lt;input type=\"file\"\n             key={this.state.theInputKey || '' } /&gt;\n      &lt;button onClick={this.functionThatResetsTheFileInput()} /&gt;\n    &lt;/div&gt;\n  )\n}\n</code></pre>\n\n<p>That forces React to render the input again from scratch.</p>\n"
    },
    {
        "owner": {
            "reputation": 3232,
            "user_id": 4332533,
            "user_type": "registered",
            "profile_image": "https://www.gravatar.com/avatar/dde08584163d505e3952393707ac25e4?s=128&d=identicon&r=PG&f=1",
            "display_name": "Freez",
            "link": "https://stackoverflow.com/users/4332533/freez"
        },
        "is_accepted": true,
        "score": 14,
        "last_activity_date": 1486931337,
        "last_edit_date": 1486931337,
        "creation_date": 1486930491,
        "answer_id": 42192710,
        "question_id": 42192346,
        "body_markdown": "I think you can just clear the input value like this :\n\n    e.target.value = null;\n\nFile input cannot be controlled, there is no React specific way to do that.",
        "body": "<p>I think you can just clear the input value like this :</p>\n\n<pre><code>e.target.value = null;\n</code></pre>\n\n<p>File input cannot be controlled, there is no React specific way to do that.</p>\n"
    }
];

class Question extends Component {
    componentDidMount() {
        const {
            match: { params: { id } },
            actions: { init }
        } = this.props;

        // init(id);
    }

    componentWillUnmount() {
        const {
            actions: { reset }
        } = this.props;

        reset();
    }

    getRequestText = () => {
        const { location: { search } } = AppHistory;
        const requestText = getQueryParams('refer', search);

        if (requestText) {
            return requestText;
        }
    };

    renderMarkup = (prop) => {
        return (
            <div dangerouslySetInnerHTML={{
                __html: prop,
            }} />
        );
    };

    render() {
        // const { question, answers } = this.props;
        const question = items[0];
        const answers = ans;

        return (
            <>
                <ul className="nav nav-pills">
                    {
                        this.getRequestText() && (
                            <li role="presentation">
                                <Link to={`/search/?text=${this.getRequestText()}`}>← Вернуться к результатам</Link>
                            </li>
                        )
                    }
                    <li role="presentation">
                        <Link to="/">Новый поиск</Link>
                    </li>
                </ul>
                {question && question.title
                    ? (
                        <div className="question-info">
                            <h1>{question.title}</h1>
                            {this.renderMarkup(question.body)}
                            <div className="question-info__owner">{`— ${question.owner.display_name}, ${tsToDate(question.creation_date)}`}</div>
                            <hr/>
                        </div>
                    )
                    : <h2>Вопрос не найден</h2>
                }

                {question.answer_count > 0 ? (
                        <div id="answers">
                            <h2>Ответы</h2>
                            <ul className="answer-list">
                                {
                                    answers.map(item => (
                                        item.is_accepted === true &&
                                            (<li key={item.answer_id} className="accepted">
                                                {this.renderMarkup(item.body)}
                                                <div className="answer-info">
                                                    {`— ${item.owner.display_name}, ${tsToDate(item.creation_date)}`}
                                                </div>
                                            </li>)
                                        )
                                    )
                                }

                                {
                                    answers.map(item => (
                                            item.is_accepted !== true &&
                                            (<li key={item.answer_id}>
                                                {this.renderMarkup(item.body)}
                                                <div className="answer-info">
                                                    {`— ${item.owner.display_name}, ${tsToDate(item.creation_date)}`}
                                                </div>
                                            </li>)
                                        )
                                    )
                                }

                            </ul>
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
