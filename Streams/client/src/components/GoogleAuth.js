import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount () {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '167560716074-e37jbrqcjt648ermla1g35cp91v3l9lq.apps.googleusercontent.com',
                scope: 'email'
            }).then( () => {
                this.auth = window.gapi.auth2.getAuthInstance();
            });
        });
    }
    render () {
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;