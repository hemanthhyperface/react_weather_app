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
                {this.props.value ?  <>
                    <h5 className="text-center text-capitalize text-lg pname" >{this.props.value}</h5>
                    <img className="picture" height="50" width="50" src={this.props.image} alt=""></img>
                    <p className="text-center text-capitalize bowlstyle">{this.props.result.description} </p>
                    </>
                    : <h4 className="text-center">----</h4>
                }
                </div>
              
               

            )
        }
    }
}

export default Player;
