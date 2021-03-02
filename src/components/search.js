import React from 'react';
class Search extends React.Component {
    render() {
        return (
            <div className="search">
            <div className="col">
            <h4 className="text-center"> WEATHER SEARCH</h4>
            <label>Enter city name</label>
            <form onSubmit={this.props.submit}>
               <input className="hello form-control"  type="text"  value={this.props.value} onChange={this.props.change}></input> <br/>
               <button type="submit" className="btn btn-primary btn-block">Submit</button>
              </form>
</div>
            </div>
        );
    }
}

export default Search;