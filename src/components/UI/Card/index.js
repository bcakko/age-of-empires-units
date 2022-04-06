import PropTypes from "prop-types";

import classes from "./styles.module.scss";

const Card = (props) => {
  return (
    <div className={`${props.className} ${classes.card}`}>{props.children}</div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Card;
