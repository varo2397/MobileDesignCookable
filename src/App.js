import React, { Fragment, Component } from 'react';
import { TopContainer, BottomContainer } from './components';

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
            <BottomContainer />
          </div>
        </div>
      </Fragment>

    );
  }
}

export default App;
