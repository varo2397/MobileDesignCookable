import React, { Component } from 'react';

export default function withMobile(Component) {
    class HOC extends Component {
        constructor(props) {
            super(props);
            this.subscription = () => {};
        }
        state = {
            isMobile: false
        }
    
        componentDidMount() {
            this.setState({isMobile: window.screen.width <= 780});
            this.subscription = window.matchMedia('(max-width: 780px)');
            this.subscription.addListener(this.onChange);
        }

        onChange = (event) => {
            this.setState({isMobile: event.matches});
        }
    
        componentWillUnmount() {
            this.subscription.removeListener(this.onChange);
        }

        render() {
            return (
                <Component {...this.props} isMobile={this.state.isMobile}/>
            )
        }
    }
    return HOC;
}
