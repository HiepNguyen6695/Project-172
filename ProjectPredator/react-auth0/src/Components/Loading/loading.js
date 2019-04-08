/* eslint no-restricted-globals: 0 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const loaded = "loaded";
class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = { addClass: false }
    }
    componentDidMount() {
        this.timeoutId = setTimeout(function () {
            this.setState({ show: true });
        }.bind(this), 1000);
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    render() {
        const startPoint = [55, 60];
        const pathRight = (
            <path
                d={`
		      M ${startPoint}
		      C 15,90 85,85 55,125
		      C 65,185 -10,150 35,175
		      C 95,205 10,290 405,290

  			`}
                fill="none"
                stroke="#11BAFA"
                strokeWidth={1.5}
            />
        )
        const pathLeft = (
            <path
                d={`
		      M ${startPoint}
		      C 15,90 85,85 55,125
		      C 65,185 -10,150 35,175
		      C 95,205 10,290 405,290

  			`}
                fill="none"
                stroke="#11FAD7"
                strokeWidth={1.5}
            />
        );


        setTimeout(function () {
            document.body.classList.add(loaded);
        }.bind(this), 2000);

        return (
            <div className="loading">
                <div id="face-wrap">
                    <div id="face" className="body">
                        <div className="left-eye-shade"></div>
                        <div className="left-eye-curve"></div>
                        <div className="right-eye-shade"></div>
                        <div className="right-eye-curve"></div>

                        <div className="nose"></div>
                    </div>
                    <div className="left-ear"></div>
                    <div className="right-ear"></div>

                    <svg id="left-earphone"
                        style={{
                            height: 300,
                            width: 100,
                            position: "absolute",
                            top: 167,
                            left: 603,

                        }}>

                        {pathLeft}

                    </svg>

                    <svg id="right-earphone"
                        style={{
                            height: 300,
                            width: 100,
                            position: "absolute",
                            top: 207,
                            left: 773,

                            transform: "scaleX(-1) rotate(-30deg)",
                        }}>
                        {pathRight}

                    </svg>

                    <div className="iphone">
                        <div className="phone-camera">
                            <div className="lense"></div>
                        </div>

                        <div className="phone-logo">PANDA</div>

                        <div className="left-blinking-animation"></div>
                        <div className="left-blinking-animation"></div>
                        <div className="left-blinking-animation"></div>
                        <div className="left-blinking-animation"></div>
                        <div className="left-blinking-animation"></div>
                    </div>

                </div>
            </div>

        );
    }
}
export default Loading;