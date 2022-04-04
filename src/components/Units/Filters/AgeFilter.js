import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import dimensionActions from "../../../store/actions/dimensionActions";

import classes from "./AgeFilter.module.scss";

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
    <div>
      <div className={classes.ages}>
        <label>All</label>
        <input
          type="radio"
          value="All"
          name="age"
          onChange={ageChangeHandler}
          checked={selectedAge === "All"}
        />
        <label>Dark</label>
        <input
          type="radio"
          value="Dark"
          name="age"
          onChange={ageChangeHandler}
          checked={selectedAge === "Dark"}
        />
        <label>Feudal</label>
        <input
          type="radio"
          value="Feudal"
          name="age"
          onChange={ageChangeHandler}
          checked={selectedAge === "Feudal"}
        />
        <label>Castle</label>
        <input
          type="radio"
          value="Castle"
          name="age"
          onChange={ageChangeHandler}
          checked={selectedAge === "Castle"}
        />
        <label>Imperial</label>
        <input
          type="radio"
          value="Imperial"
          name="age"
          onChange={ageChangeHandler}
          checked={selectedAge === "Imperial"}
        />
      </div>
    </div>
  );
};

export default AgeFilter;
