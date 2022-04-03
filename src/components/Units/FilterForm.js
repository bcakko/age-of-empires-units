import { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import dimensionActions from "../../store/actions/dimensionActions";
import classes from "./FilterForm.module.scss";

const FilterForm = () => {
  const [userSelections, setUserSelections] = useState({
    age: {
      all: true,
      dark: false,
      castle: false,
      imperial: false,
    },
    cost: {
      food: false,
      wood: false,
      gold: false,
    },
  });

  const selections = useMemo(() => {
    return userSelections;
  }, [userSelections]);

  const dispatch = useDispatch();

  const ageChangeHandler = useCallback((event) => {
    dispatch(dimensionActions.changeAgeDimension(event.target.value));
  }, []);

  const costValueChangeHandler = useCallback((event) => {
    dispatch(
      dimensionActions.changeCostDimension({
        name: event.target.name,
        number: event.target.value,
      })
    );
  }, []);

  const foodChangeHandler = (event) => {
    setUserSelections((prevState) => ({
      ...prevState,
      cost: {
        ...prevState.cost,
        [event.target.value]: !prevState.cost[event.target.value],
      },
    }));
    console.log(event.target.value);
  };

  return (
    <div>
      <div className={classes.ages}>
        <label>All</label>
        <input
          type="radio"
          value="All"
          name="age"
          onChange={ageChangeHandler}
          defaultChecked
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
      <div className={classes.costs}>
        <label>Food</label>
        <input
          type="checkbox"
          value="food"
          checked={userSelections.cost.food}
          onChange={foodChangeHandler}
        />
        <input
          type="range"
          disabled={!userSelections.cost.food}
          min="0"
          max="200"
          name="food"
          onChange={costValueChangeHandler}
        />

        <label>Wood</label>
        <input
          type="checkbox"
          value="wood"
          checked={userSelections.cost.wood}
          onChange={foodChangeHandler}
        />
        <input
          type="range"
          disabled={!userSelections.cost.wood}
          min="0"
          max="200"
          name="wood"
          onChange={costValueChangeHandler}
        />

        <label>Gold</label>
        <input
          type="checkbox"
          value="gold"
          checked={userSelections.cost.gold}
          onChange={foodChangeHandler}
        />
        <input
          type="range"
          disabled={!userSelections.cost.gold}
          min="0"
          max="200"
          name="gold"
          onChange={costValueChangeHandler}
        />
      </div>
    </div>
  );
};

export default FilterForm;
