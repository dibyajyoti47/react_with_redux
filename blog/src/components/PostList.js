import React from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';

class PostList extends React.Component {

    componentDidMount () {
        this.props.fetchPosts();
    }

    render () {
        return <div>PostList</div>
    }
}

export default connect(
    null, 
    { fetchPosts }
) (PostList);