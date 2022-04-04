import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import dimensionActions from "../../../store/actions/dimensionActions";
import MultiRangeSlider from "../../UI/MultiRangeSlider";

import classes from "./CostFilter.module.scss";

const CostFilter = () => {
  const dispatch = useDispatch();
  const dimensions = useSelector((state) => state.dimensions);
  const costDimension = dimensions.cost;

  const costValueChangeHandler = useCallback(
    (event) => {
      console.log(event);
      dispatch(
        dimensionActions.changeCostDimension({
          name: event.name,
          min: event.min,
          max: event.max,
        })
      );
    },
    [dispatch]
  );

  const activateCostHandler = useCallback((event) => {
    dispatch(
      dimensionActions.activateCostDimension({
        name: event.target.value,
      })
    );
  });

  const rangeChangeHandler = (event) => {
    console.log(event);
  };

  return (
    <div>
      <div className={classes.costs}>
        <label>Food</label>
        <input
          type="checkbox"
          value="food"
          checked={costDimension.food.active}
          onChange={activateCostHandler}
        />
        <MultiRangeSlider
          disabled={!costDimension.food.active}
          min={0}
          max={200}
          name="food"
          onChange={costValueChangeHandler}
        />
        <label>Wood</label>
        <input
          type="checkbox"
          value="wood"
          checked={costDimension.wood.active}
          onChange={activateCostHandler}
        />
        <MultiRangeSlider
          disabled={!costDimension.wood.active}
          min={0}
          max={200}
          name="wood"
          onChange={costValueChangeHandler}
        />
        <label>Gold</label>
        <input
          type="checkbox"
          value="gold"
          checked={costDimension.gold.active}
          onChange={activateCostHandler}
        />
        <MultiRangeSlider
          disabled={!costDimension.gold.active}
          min={0}
          max={200}
          name="gold"
          onChange={costValueChangeHandler}
        />
      </div>
    </div>
  );
};

export default CostFilter;
