import coverImage from "../../assets/cover-image.jpg";
import Card from "../UI/Card";

import classes from "./styles.module.scss";

const ImageContainer = () => {
  return (
    <Card className={classes.container}>
      <img src={coverImage} alt="two-warriors-fighting"></img>
    </Card>
  );
};

export default ImageContainer;
