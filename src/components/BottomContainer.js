import React, { Component, Fragment } from 'react';
import { ProgressBar, NavigationButtons } from './';
import withMobile from '../hoc/withMobile';

class BottomContainer extends Component {
    render() {
        const { isMobile, showNavigation } = this.props;
        const instructionsText = `
        Line the sheet tray with the parchment.
        Place wings on parchment.
        Season both sides withsalt mix and pepper.
        Arrange wings skin side down.
        Let wings dry uncovered for an hour(or up to overnight in the fridge).
        `
        const instructionsTitle = 'MISE EN PLACE';
        const instructionsStep = '- Gather materials'
        return (
            <div className="row fixed-bottom gradient-bottom padding-footer " style={{ bottom: '-15px' }} >
                <div className={`col-md-12 col-sm-12 ${isMobile ? 'd-flex flex-row justify-content-between' : ''}`}>

                    {
                        !isMobile ?
                            <Fragment>
                                <ProgressBar
                                    instructionsText={instructionsText}
                                    instructionsTitle={instructionsTitle}
                                    instructionsStep={instructionsStep}
                                />
                                <NavigationButtons />
                            </Fragment>
                            :
                            <Fragment>
                                <NavigationButtons>
                                    <ProgressBar
                                        showNavigation={showNavigation}
                                        instructionsText={instructionsText}
                                        instructionsTitle={instructionsTitle}
                                        instructionsStep={instructionsStep}
                                    />
                                </NavigationButtons>
                            </Fragment>
                    }

                </div>
            </div>
        )
    }
}

export default withMobile(BottomContainer);