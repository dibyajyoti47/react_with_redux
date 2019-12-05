import React from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';

class PostList extends React.Component {

    componentDidMount () {
        this.props.fetchPosts();
    }

    render () {
        console.log(this.props.posts);
        return <div>PostList</div>
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
}

export default connect(
        mapStateToProps, 
        { fetchPosts }
    ) (PostList);