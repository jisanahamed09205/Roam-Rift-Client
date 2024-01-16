import React from "react";
import ProgressBar from "react-scroll-progress-bar";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <ProgressBar height="6" bgcolor="#000" duration="0.2" />
            </div>
        );
    }
}