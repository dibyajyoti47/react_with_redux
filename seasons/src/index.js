import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    /*constructor(props) {
        super(props);
        this.state = {
            lat: null,
            errorMessage: ''
        };
    } */   
    state = {
        lat: null,
        errorMessage: ''
    };  
    componentDidMount(){
        console.log("Componet did mount..");
        window.navigator.geolocation.getCurrentPosition(
            position => setTimeout(()=>this.setState({ lat: position.coords.latitude }),1000),
            err => this.setState({ errorMessage: err.message })
        )
    }
    componentDidUpdate(){
        console.log("Component did update..");
    }
    renderContent(){
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>;
        }
        return <Spinner message={'Loading, Please accept location request, if prompted.'}></Spinner>
    }
    //React says we have to define render function
    render() {
        console.log("render called..");
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
