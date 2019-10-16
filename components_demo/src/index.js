import React from 'react';
import ReactDOM from 'react-dom';
import CommonDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                Are you sure you want to do this ?
            </ApprovalCard>
            <ApprovalCard>
                <div>
                    <h4>Warning !</h4>
                    Are you sure you want to do this ?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommonDetail
                    author={faker.name.firstName()}
                    comment={faker.lorem.sentence()}
                    timeAgo={faker.date.recent().toDateString()}
                    imageSrc={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommonDetail
                    author={faker.name.firstName()}
                    comment={faker.lorem.sentence()}
                    timeAgo={faker.date.recent().toDateString()}
                    imageSrc={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommonDetail
                    author={faker.name.firstName()}
                    comment={faker.lorem.sentence()}
                    timeAgo={faker.date.recent().toDateString()}
                    imageSrc={faker.image.avatar()} />
            </ApprovalCard>
            
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));