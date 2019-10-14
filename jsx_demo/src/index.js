//import the react and react dom libraries
import React from "react";
import ReactDOM from "react-dom";

function getButtonText1(){
  return 'Click ';
}
//Create a react component
const App = () => {
  const buttonText2 = 'Me!';
  //const buttonText2 = {text: "Me!"};
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{backgroundColor:'blue',color:'white'}}>{getButtonText1()+buttonText2}</button>
      {/* <button style={{backgroundColor:'blue',color:'white'}}>{buttonText2}</button> */}
    </div>
  );
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
