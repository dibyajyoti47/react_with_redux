import React from "react";

class SearchBar extends React.Component {
  state = { term: "Hi there !" };
  onInputChange(event) {
    console.log(event.target.value);
  }
  onFormSubmit(event){
    event.preventDefault();
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* <input type="text" onChange={this.onInputChange}></input> */}
            <input
              type="text"
              value={this.state.term}
              onChange={e =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
