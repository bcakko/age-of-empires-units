import { Link } from "react-router-dom";
import classes from "./styles.module.scss";

const NotFound = () => {
  return (
    <div className={classes.container} data-testid="not-found">
      <h1 className={classes.error}>404</h1>
      <p className={classes.message}>Page Not Found :(</p>
      <Link to="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
