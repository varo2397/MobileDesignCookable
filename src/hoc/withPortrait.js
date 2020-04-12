import React, { Component } from 'react';

export default function withPortrait(Component) {
    class HOC extends Component {
        constructor(props) {
            super(props);
            this.subscription = () => {};
        }
        state = {
            isPortrait: false
        }
    
        componentDidMount() {
            this.setState({isPortrait: window.screen.width <= window.screen.height });
            this.subscription = window.matchMedia('(orientation: portrait)');
            this.subscription.addListener(this.onChange);
        }

        onChange = (event) => {
            this.setState({isPortrait: event.matches});
        }
    
        componentWillUnmount() {
            this.subscription.removeListener(this.onChange);
        }

        render() {
            return (
                <Component {...this.props} isPortrait={this.state.isPortrait}/>
            )
        }
    }
    return HOC;
}