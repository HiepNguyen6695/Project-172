import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Footer extends Component {

    render() {
        const pStyle = {
            fontSize: '15px',
            textAlign: 'center',
            fontFamily: 'sans-serif',
        };

        return (
            <footer>
                <p style={pStyle}>Copyright &copy; 2019. All rights reserved.</p>
            </footer>
        );
    }
}

export default Footer;