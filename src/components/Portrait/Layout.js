import React, { Component } from 'react';
import { RecipeTitle, ProgressBar, OptinsBar } from '../';
import withMobile from '../../hoc/withMobile';

class Layout extends Component {
    render() {
        const {
            instructionsTitle = 'MISE EN PLACE',
            instructionsStep = '- Gather materials',
            instructionsText = `
            Line the sheet tray with the parchment.
            Place wings on parchment.
            Season both sides withsalt mix and pepper.
            Arrange wings skin side down.
            Let wings dry uncovered for an hour(or up to overnight in the fridge).
            `,
            name = "Crispiest Juiciest Oven Baked Wings",
            author = "- by Grace Choi",
            isMobile
        } = this.props;

        return (
            <div className="w-100" style={{ backgroundColor: 'black', height: '100vh', overflowY: 'scroll', overflowX: 'hidden' }}>
                <div className="relative">
                    <div className="gradient-top" style={{ height: '20%', backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.01))' }}></div>
                    <video loop muted autoPlay src={process.env.PUBLIC_URL + "/Beer_Pour_Videvo.mp4"} style={{ width: '100vw', height: '30vh', objectFit: 'contain' }}></video>
                    <div className="absolute" style={{ top: 0, left: 10 }}>
                        <RecipeTitle
                            name={name}
                            author={author}
                        />
                    </div>
                    <div className="absolute gradient-bottom" style={{ bottom: 0, height: '20%', width: '100%' }}></div>
                </div>
                <div className="w-100 pl-2 pr-2" style={{paddingLeft: isMobile ? '' : '1.5rem !important', paddingRight: isMobile ? '' : '1.5rem !important'}}>
                    <ProgressBar />
                </div>
                <div className="d-flex flex-column pl-2 pr-2"  >
                    <div className="d-flex flex-row">
                        <p className="text-white instructional-title">{instructionsTitle} &nbsp;
                                            <span>{instructionsStep}</span>
                        </p>
                    </div>
                    <p className="text-white font-weight-light instructional-text">
                        {instructionsText}
                    </p>
                </div>
                <div className="w-100 pl-4 pr-4">
                    <OptinsBar />
                </div>


            </div>
        )
    }
}

export default withMobile(Layout); 