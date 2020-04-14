import React, { Component } from 'react';
import withMobile from '../hoc/withMobile';
import withPortrait from '../hoc/withPortrait';

class RecipeTitle extends Component {

    render() {
        const { name, author, isMobile, toggleOptinsBar, showIcon, isPortrait } = this.props;

        return (
            <div className="row margin-header pt-2">
                <div className="col-md-12 col-sm-12 title-text d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row  ">
                        <img src={process.env.PUBLIC_URL + "/cookable.png"} alt="" style={{ width: 20, height: 20, objectFit: 'cover', marginRight: isPortrait ? '0.5rem' : '1rem', filter: 'brightness(0) invert(1)' }} />
                        <p className="text-white font-weight-bold flex-wrap">{name} <span
                            className="font-italic flex-wrap font-weight-light pr-1">{author}</span></p>
                    </div>
                    {
                        isMobile && showIcon && !isPortrait ?
                            <div className="center-icon active-icon" onClick={toggleOptinsBar} style={{ borderStyle: 'none', marginTop: -6 }}>
                                <i className="fal fa-lightbulb-on"></i>
                            </div> : null
                    }
                </div>
            </div>
        )
    }
}

export default withPortrait(withMobile(RecipeTitle));