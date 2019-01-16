import React, { Component } from 'react';

class GoogleAuth extends Component {
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "393102471135-553556igr452i5t58uth27n6qhd32dc8.apps.googleusercontent.com",
                scope: "email"
            });
        })
    }

    render() {
        return (
            <div>
                GoogleAuth
            </div>
        );
    }
}

export default GoogleAuth;