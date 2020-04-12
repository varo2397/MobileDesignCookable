import React, { Component } from 'react';
import withMobile from '../hoc/withMobile';

class MobileNavigation extends Component {
    render() {
        return (
            <div className="absolute d-flex flex-row" style={{width: '100vw', height: '100vh', backgroundColor: 'transparent !important', zIndex: 1000}}>
                <div className="h-100 w-50 d-flex flex-row justify-content-end align-items-center text-white pr-5">
                    <span className="pr-4">PREVIEW VIDEO</span>
                    <i class="far fa-angle-left" style={{ fontSize: 40 }}></i>
                </div>
                <div className="h-100 w-50 d-flex flex-row justify-content-start align-items-center text-white pl-5">
                    <i class="far fa-angle-right" style={{ fontSize: 40 }}></i>
                    <span className="pl-4">PREVIEW VIDEO</span>
                </div>
            </div>
        )
    }
}

export default withMobile(MobileNavigation);