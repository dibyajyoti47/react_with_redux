import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
    
    state= {images: []};

    /*async onSearchSubmit(term) { */ //results in error due to "this" problem
    onSearchSubmit = async (term)=> {
        const responce = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });
        this.setState({images: responce.data.results})
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        )
    }
}

export default App;