import React, { Fragment, Component } from 'react';
import { TopContainer, BottomContainer, MobileNavigation, Layout } from './components';
import withMobile from './hoc/withMobile';
import withPortrait from './hoc/withPortrait';

class App extends Component {

  state = {
    showNavigation: false
  }

  render() {
    const { isMobile, isPortrait } = this.props;
    console.log(isPortrait)
    return (
      <Fragment>
        {
          !isPortrait ? 
          <span>
          {
            this.state.showNavigation && isMobile ? <MobileNavigation /> : null
          }
          <div className="video-bg-wrapper" >

            <video loop muted autoPlay src={process.env.PUBLIC_URL + "/Beer_Pour_Videvo.mp4"} className="video-bg"></video>
          </div>
          <div className={`h-100 w-100 absolute ${isMobile && this.state.showNavigation ? 'show-navigation-mobile' : ''}`} onClick={() => {
            this.setState({ showNavigation: true }, () => {
              setTimeout(() => this.setState({ showNavigation: false }), 3000)
            })
          }}>
            <div className="gradient-top">

            </div>

            <div className="container-fluid d-flex flex-grow-1 flex-column">
              <TopContainer />
              <BottomContainer
                showNavigation={this.state.showNavigation}
              />
            </div>
          </div>
        </span> :
        <Layout />
        }

      </Fragment>

    );
  }
}

export default withPortrait(withMobile(App));
