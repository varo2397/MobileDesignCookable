import React, { Fragment, Component } from 'react';
import { TopContainer } from './components';
import withMobile from './hoc/withMobile';

class App extends Component {
  render() {
    const { isMobile } = this.props;
    return (
      <Fragment>
        <div className="video-bg-wrapper">

          <video loop muted autoPlay src="Beer_Pour_Videvo.mp4" className="video-bg"></video>
        </div>
        <div className="h-100 w-100 absolute">
          <div className="gradient-top">

          </div>

          <div className="container-fluid d-flex flex-grow-1 flex-column">

            <TopContainer />

            <div className="row fixed-bottom gradient-bottom padding-footer" style={{ bottom: '-15px' }} id="footer">
              <div className="col-md-12 col-sm-12 ">
                <div className="row justify-content-space-evenly margin-progress">

                  <div className="d-flex flex-column pr-2" style={{ width: '10%' }}>

                    <div className="absolute  overflow-auto col-lg-4 col-md-5 col-sm-4  step-details-container">
                      <div className="step-details col-md-12 col-sm-12 col-6 padding-instructional">
                        <p className="text-white instructional-title">MISE EN PLACE&nbsp; <span>- Gather
                                            materials</span></p>
                        <p className="text-white font-weight-light instructional-text">
                          Line the sheet tray with the parchment.

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
                <div className="row pb-4 d-flex justify-content-space-between">
                  <div className="d-flex flex-row w-50 align-items-center">
                    <p><i className="fa fa-chevron-left text-white bottom-text"></i></p>
                    <p className="pl-2 bottom-text">PREVIEW VIDEO</p>
                  </div>
                  <div className="d-flex flex-row w-50 justify-content-end align-items-center">
                    <p className="pr-2 bottom-text" id="showPopUp">GATHER INGREDIENTS</p>
                    <p><i className="fa fa-chevron-right text-white bottom-text"></i></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>

    );
  }
}

export default withMobile(App);
