import React from 'react';

class Player extends React.Component {
    render() {
        if (this.props.error != null) {
            return (
                <div className="player">
                    <h5 className="text-center pname" >{this.props.value}</h5>
                    <p className="text-center bowlstyle">not found  </p>
                </div>
            )

        }
        else {
            return (


                <div className="player">

                    <h5 className="text-center pname" >{this.props.value}</h5>

                    <img className="picture" src={this.props.image} alt=""></img>
                    <p className="text-center bowlstyle">{this.props.result.description} </p>

                </div>

            )
        }
    }
}

export default Player;
