import React from "react";
import PropTypes from "prop-types";
import classes from "./SandwichIngredients.module.css";

const SandwichIngredients = (props) => {
  let scoop = null;

  switch (props.type) {
    /*if there is a match between props.type and any of the cases below then
    the associated block of code is executed. If there is no match the default 
    code block is executed*/
    case "BreadBottom":
      scoop = <div className={classes.BreadBottom}></div>;
      break;
    case "BreadTop":
      scoop = <div className={classes.BreadTop}></div>;
      break;
    case "Chicken":
      scoop = <div className={classes.Chicken}></div>;
      break;
    case "Cheese":
      scoop = <div className={classes.Cheese}></div>;
      break;
    case "Salad":
      scoop = <div className={classes.Salad}></div>;
      break;
    case "Bacon":
      scoop = <div className={classes.Bacon}></div>;
      break;
    default:
      scoop = null;
  }
  return scoop;
};

SandwichIngredients.propTypes = {
  type: PropTypes.string.isRequired,
};
//Prop.types = provides informatin on what type of prop to expect
//isRequired = If this component is used without passing a type, we get an error

export default SandwichIngredients;
