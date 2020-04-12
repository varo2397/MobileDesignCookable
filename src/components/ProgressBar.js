import React, { Component, Fragment } from 'react';
import withMobile from '../hoc/withMobile';

class ProgressBar extends Component {
    render() {
        const { isMobile, instructionsText, instructionsTitle, instructionsStep, showNavigation } = this.props;
        console.log(showNavigation)
        return (
            <Fragment>
                {!isMobile ?
                    <div className="row justify-content-space-evenly margin-progress">
                        <div className="d-flex flex-column pr-2" style={{ width: '10%' }}>

                            <div className="absolute  overflow-auto col-lg-4 col-md-5 col-sm-4  step-details-container">
                                <div className="step-details col-md-12 col-sm-12 col-6 padding-instructional">
                                    <p className="text-white instructional-title">{instructionsTitle} &nbsp;
                                            <span>{instructionsStep}</span>
                                    </p>
                                    <p className="text-white font-weight-light instructional-text">
                                        {instructionsText}
                                    </p>
                                </div>
                            </div>
                            <p className="text-white progress-text">WARM UP</p>
                            <div className="progress-default progress-done"></div>
                        </div>

                        <div className="d-flex flex-column pr-2" style={{ width: '20%' }}>

                            <p className="text-white align-self-center progress-text"><i
                                className="fas fa-chevron-double-down current-step-icon-details"></i></p>
                            <div className="d-flex flex-row">
                                <div className="progress-default progress-process"></div>
                                <div className="progress-missing"></div>
                            </div>
                        </div>

                        <div className="d-flex flex-column pr-2" style={{ width: '30%' }}>
                            <p className="text-white progress-text">COOK</p>
                            <div className="progress-default"></div>
                        </div>

                        <div className="d-flex flex-column pr-2" style={{ width: '30%' }}>
                            <p className="text-white progress-text">BAKE</p>
                            <div className="progress-default"></div>
                        </div>

                        <div className="d-flex flex-column" style={{ width: '10%' }}>
                            <p className="text-white progress-text">SERVE</p>
                            <div className="progress-default"></div>
                        </div>
                    </div>
                    :
                    showNavigation ?
                        <div className="d-flex flex-row w-100 pb-4" >
                            <div className="d-flex flex-column pr-2" style={{ width: '10%' }}>
                                <p className="text-white progress-text">WARM UP</p>
                                <div className="progress-default progress-done"></div>
                            </div>

                            <div className="d-flex flex-column pr-2" style={{ width: '20%' }}>

                                <p className="text-white align-self-center progress-text"><i
                                    className="fas fa-chevron-double-down current-step-icon-details"></i></p>
                                <div className="d-flex flex-row">
                                    <div className="progress-default progress-process"></div>
                                    <div className="progress-missing"></div>
                                </div>
                            </div>

                            <div className="d-flex flex-column pr-2" style={{ width: '30%' }}>
                                <p className="text-white progress-text">COOK</p>
                                <div className="progress-default"></div>
                            </div>

                            <div className="d-flex flex-column pr-2" style={{ width: '30%' }}>
                                <p className="text-white progress-text">BAKE</p>
                                <div className="progress-default"></div>
                            </div>

                            <div className="d-flex flex-column" style={{ width: '10%' }}>
                                <p className="text-white progress-text">SERVE</p>
                                <div className="progress-default"></div>
                            </div>
                        </div> :
                        <div className="d-flex flex-column" >
                            <div className="d-flex flex-row">
                                <p className="text-white instructional-title">{instructionsTitle} &nbsp;
                                            <span>{instructionsStep}</span>
                                </p>
                            </div>
                            <p className="text-white font-weight-light instructional-text">
                                {instructionsText}
                            </p>
                        </div>
                }
            </Fragment>
        )
    }
}

export default withMobile(ProgressBar);