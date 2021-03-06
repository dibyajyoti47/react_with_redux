import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context.language === "english" ? "Submit" : "Voorleggen";
    return (
      <ColorContext.Consumer>
        {
            (colorValue) => {
                return (
                    <button className={`ui button ${colorValue}`}>
                        <LanguageContext.Consumer>
                            {({language}) => (language === "english" ? "Submit" : "Vooleggen")}
                        </LanguageContext.Consumer>
                    </button>
                );
            }
        }
      </ColorContext.Consumer>
    );
  }
}

export default Button;
