import React, { Component, Fragment } from 'react';
import withMobile from '../hoc/withMobile';
import { RecipeTitle, OptinsBar } from './';

class TopContainer extends Component {
    render() {
        const { isMobile } = this.props;
        return (
            <Fragment>
                <RecipeTitle
                    name="Crispiest Juiciest Oven Baked Wings"
                    author="- by Grace Choi"
                />
                {!isMobile ? <OptinsBar /> : null}
            </Fragment>
        )
    }
}

export default withMobile(TopContainer);