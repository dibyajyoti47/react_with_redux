import React from 'react';
import ReactDOM from 'react-dom';
import CommonDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
            <CommonDetail 
                author={faker.name.firstName()} 
                comment={faker.lorem.sentence()} 
                timeAgo={faker.date.recent().toDateString()} 
                imageSrc={faker.image.avatar()}/>
            <CommonDetail 
                author={faker.name.firstName()} 
                comment={faker.lorem.sentence()} 
                timeAgo={faker.date.recent().toDateString()} 
                imageSrc={faker.image.avatar()}/>
            <CommonDetail 
                author={faker.name.firstName()} 
                comment={faker.lorem.sentence()} 
                timeAgo={faker.date.recent().toDateString()} 
                imageSrc={faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));