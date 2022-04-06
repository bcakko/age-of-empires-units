import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import dimensionActions from "../../../store/actions/dimensionActions";

import classes from "./styles.module.scss";

const AgeFilter = () => {
  const dispatch = useDispatch();
  const dimensions = useSelector((state) => state.dimensions);
  const selectedAge = dimensions.age;

  const ageChangeHandler = useCallback(
    (event) => {
      dispatch(dimensionActions.changeAgeDimension(event.target.value));
    },
    [dispatch]
  );

  return (
    <div className={classes.ages} data-testid="age-filter">
      <input
        label="All"
        type="radio"
        value="All"
        name="age"
        onChange={ageChangeHandler}
        checked={selectedAge === "All"}
      />
      <input
        label="Dark"
        type="radio"
        value="Dark"
        name="age"
        onChange={ageChangeHandler}
        checked={selectedAge === "Dark"}
      />
      <input
        label="Feudal"
        type="radio"
        value="Feudal"
        name="age"
        onChange={ageChangeHandler}
        checked={selectedAge === "Feudal"}
      />
      <input
        label="Castle"
        type="radio"
        value="Castle"
        name="age"
        onChange={ageChangeHandler}
        checked={selectedAge === "Castle"}
        data-testid="castle-radio"
      />
      <input
        label="Imperial"
        type="radio"
        value="Imperial"
        name="age"
        onChange={ageChangeHandler}
        checked={selectedAge === "Imperial"}
      />
    </div>
  );
};

export default AgeFilter;
