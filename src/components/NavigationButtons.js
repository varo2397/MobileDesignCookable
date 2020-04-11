import React, { Component, Fragment } from 'react';
import withMobile from '../hoc/withMobile';

class NavigationButtons extends Component {
    render() {
        const { isMobile, children } = this.props;
        return (
            <div className={!isMobile ? "row pb-4 d-flex justify-content-space-between" : "pb-4"}>
                {
                    !isMobile ?
                        <Fragment>
                            <div className="d-flex flex-row w-50 align-items-center">
                                <p><i className="fa fa-chevron-left text-white bottom-text"></i></p>
                                <p className="pl-2 bottom-text">PREVIEW VIDEO</p>
                            </div>
                            <div className="d-flex flex-row w-50 justify-content-end align-items-center">
                                <p className="pr-2 bottom-text" id="showPopUp">GATHER INGREDIENTS</p>
                                <p><i className="fa fa-chevron-right text-white bottom-text"></i></p>
                            </div>
                        </Fragment> :
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <p className="d-flex flex-column h-100 justify-content-center"><i className="fa fa-chevron-left text-white bottom-text"></i></p>
                            {children}
                            <p className="d-flex flex-column h-100 justify-content-center"><i className="fa fa-chevron-right text-white bottom-text"></i></p>
                        </div>
                }

            </div>
        )
    }
}

export default withMobile(NavigationButtons);