import React, { Component } from 'react';
import withMobile from '../hoc/withMobile';

class MobileNavigation extends Component {

    onClickNavigationButton = (e) => {
        e.stopPropagation();
        console.log('logic goes here')
    }

    render() {
        const { toggleNavigation } = this.props;
        return (
            <div className="absolute d-flex flex-row" onClick={() => toggleNavigation()} style={{ width: '100vw', height: '100%', backgroundColor: 'transparent !important', zIndex: 1000 }}>
                <div className="h-100 w-50 d-flex flex-row justify-content-end align-items-center ">
                    <div className="d-flex flex-row justify-content-end align-items-center text-white pr-5" onClick={this.onClickNavigationButton}>
                        <i className="far fa-angle-left" style={{ fontSize: 30 }}></i>
                        <span className="pl-4">PREVIEW VIDEO</span>
                    </div>
                </div>
                <div className="h-100 w-50 d-flex flex-row justify-content-start align-items-center">
                    <div className="d-flex flex-row justify-content-start align-items-center text-white pl-5" onClick={this.onClickNavigationButton}>
                        <span className="pr-4">PREVIEW VIDEO</span>
                        <i className="far fa-angle-right" style={{ fontSize: 30 }}></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default withMobile(MobileNavigation);