import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";
import { LanguageStore } from "../contexts/LanguageContext";

class App extends React.Component {
  // state = { language: "english" };
  // onLanguageChange = language => {
  //   this.setState({ language });
  // };
  // render() {
  //   return (
  //     <div className="ui container">
  //       <LanguageSelector onLanguageChange={this.onLanguageChange}/>
  //       <ColorContext.Provider value="red">
  //         <LanguageContext.Provider value={this.state.language}>
  //           <UserCreate />
  //         </LanguageContext.Provider>
  //       </ColorContext.Provider>
  /* <LanguageContext.Provider value={"dutch"}>
          <UserCreate />
        </LanguageContext.Provider>
        <UserCreate /> */
  //    </div>
  //   );
  //  }

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
