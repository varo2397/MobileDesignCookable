import React, { Component } from 'react';
import withPortrait from '../hoc/withPortrait';

class OptinsBar extends Component {

    render() {
        const { toggleOptinsBar = () => { }, isPortrait } = this.props

        return (
            <div className={`row ${isPortrait ? 'justify-content-center pt-4' : 'justify-content-end align-items-end'} `}>
                <div className=" justify-content-start align-items-end flex-column">
                    <div className=" bg-history text-center padding-optins margin-optins optins-bar" style={{maxWidth: isPortrait ? '100%' : ''}}>
                        <div className="relative margin-text-optins">
                            <div className="center-icon active-icon absolute" onClick={toggleOptinsBar}>
                                <i className="fa fa-lightbulb-on"></i>
                            </div>
                            <p className="text-white text-left  optins-text"><span
                                className="font-weight-bold main-text-optins">WATCH </span>
                                or
                                <span className="font-weight-bold main-text-optins"> LISTEN</span>
                            </p>
                        </div>

                        <div className="relative  margin-text-optins">
                            <div className="center-icon absolute ">
                                <i className="fa fa-volume-up fa-lg"></i>
                            </div>
                            <p className="text-white text-left  font-italic optins-text" id="example">Set the time to 20
                                minutes</p>
                        </div>
                        <div className="relative ">
                            <div className="center-icon absolute ">
                                <i className="fa fa-video fa-lg"></i>
                            </div>
                            <p className="text-white text-left font-italic optins-text">Show me a video about
                                Grace and Wings</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row  optins-bar" style={{ padding: 0, maxWidth: isPortrait ? '100%' : '' }}>
                        <div className="book-bottom-left"></div>
                        <div className="book-bottom-right" ></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withPortrait(OptinsBar);