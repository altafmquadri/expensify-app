import React, { Component } from 'react';
import '../styles/HelloWorld.css'
import '../styles/HelloWorld.scss'

class HelloWorld extends Component {
    state = {}
    handleClick = () => {
        alert('I am clicked! Yay')
    }
    render() {
        return (
            <div>
                <h1 className='title'>Hello World</h1>
                <button className='button'
                    onClick={this.handleClick}>Click Me!</button>
            </div>
        );
    }
}
export default HelloWorld;