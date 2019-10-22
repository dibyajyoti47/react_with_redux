import React from "react";

class SearchBar extends React.Component {
  constructor(){
    super();
    /*
    //one of the approach to solve "this" problem
    this.onFormSubmit = this.onFormSubmit.bind(this);
    */
  }

  state = { term: '' };

  onInputChange(event) {
    console.log(event.target.value);
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }
  /* //one of the approach to solve "this" problem
  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
  } 
  */
  render() {
    return (
      <div className="ui segment">
        {/*  one of the approach to solve "this" problem
        <form onSubmit={e=>{e.preventDefault();console.log(this.state.term);} } className="ui form"> 
       */}
        {/*  one of the approach to solve "this" problem, but not recommended, 
              because it creates a new function each time it is invoked.. 
        <form onSubmit={this.onFormSubmit.bind(this) } className="ui form"> 
        */}
        <form onSubmit={event => this.onFormSubmit(event) } className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* <input type="text" onChange={this.onInputChange}></input> */}
            <input
              type="text"
              value={this.state.term}
              onChange={e =>
                this.setState({ term: e.target.value })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
