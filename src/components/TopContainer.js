import React, { Component, Fragment } from 'react';
import withMobile from '../hoc/withMobile';
import { RecipeTitle, OptinsBar } from './';

class TopContainer extends Component {
    state = {
        showOptinsBar: false
    }

    toggleOptinsBar = (e) => {
        e.stopPropagation();
        this.setState({showOptinsBar: !this.state.showOptinsBar})
    }

    render() {
        const { isMobile } = this.props;
        return (
            <Fragment>
                <RecipeTitle
                    name="Crispiest Juiciest Oven Baked Wings"
                    author="- by Grace Choi"
                    toggleOptinsBar={this.toggleOptinsBar}
                    showIcon={!this.state.showOptinsBar}
                />
                {!isMobile ? <OptinsBar /> : this.state.showOptinsBar ? <OptinsBar toggleOptinsBar={this.toggleOptinsBar}/> : null}
            </Fragment>
        )
    }
}

export default withMobile(TopContainer);