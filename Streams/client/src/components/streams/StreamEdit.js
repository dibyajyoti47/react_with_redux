import React from 'react';
import { connect } from 'react-redux';
import {fetchStream, editStream } from '../../actions';
import StreamFrom from './StreamForm';
import { Stream } from 'stream';

class StreamEdit extends React.Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = ( formValues) => {
        console.log(formValues);
    }

    render () {
      if(!this.props.stream){
          return <div>Loading...</div>;
      }
      return  (
                <div> 
                    <h3>Edit a Stream</h3>
                    <StreamFrom 
                        onSubmit={this.onSubmit} 
                        initialValues= {this.props.stream}
                    />
                </div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps, 
                        {
                            fetchStream,
                            editStream
                        })(StreamEdit);