import React, { Fragment, Component } from 'react';
import { TopContainer, BottomContainer } from './components';
import withMobile from './hoc/withMobile';

class App extends Component {

  state = {
    showNavigation: false
  }

  render() {
    const {isMobile} = this.props;
    return (
      <Fragment>
        <div className="video-bg-wrapper" >

          <video loop muted autoPlay src="Beer_Pour_Videvo.mp4" className="video-bg"></video>
        </div>
        <div className={`h-100 w-100 absolute ${isMobile && this.state.showNavigation ? 'show-navigation-mobile' : ''}`} onClick={() => {
            this.setState({showNavigation: true}, () => {
              setTimeout(() => this.setState({showNavigation: false}), 3000)
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
      </Fragment>

    );
  }
}

export default withMobile(App);
