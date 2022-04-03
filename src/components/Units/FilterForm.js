import { useCallback } from "react";
import { useDispatch } from "react-redux";
import dimensionActions from "../../store/actions/dimensionActions";
import classes from "./FilterForm.module.scss";

const FilterForm = () => {
  const dispatch = useDispatch();

  const ageChangeHandler = useCallback((event) => {
    dispatch(dimensionActions.changeAgeDimension(event.target.value));
  }, []);

  return (
    <form>
      <div className={classes.ages}>
        <label>All</label>
        <input
          type="radio"
          value="All"
          name="age"
          onChange={ageChangeHandler}
        />
        <label>Dark</label>
        <input
          type="radio"
          value="Dark"
          name="age"
          onChange={ageChangeHandler}
        />
        <label>Feudal</label>
        <input
          type="radio"
          value="Feudal"
          name="age"
          onChange={ageChangeHandler}
        />
        <label>Castle</label>
        <input
          type="radio"
          value="Castle"
          name="age"
          onChange={ageChangeHandler}
        />
        <label>Imperial</label>
        <input
          type="radio"
          value="Imperial"
          name="age"
          onChange={ageChangeHandler}
        />
      </div>
    </form>
  );
};

export default FilterForm;
