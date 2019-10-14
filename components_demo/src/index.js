import React from 'react';
import ReactDOM from 'react-dom';
import CommonDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommonDetail />
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));