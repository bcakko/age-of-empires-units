import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import dimensionActions from "../../../store/actions/dimensionActions";
import MultiRangeSlider from "../../UI/MultiRangeSlider";

import classes from "./styles.module.scss";

const CostFilter = () => {
  const dispatch = useDispatch();
  const dimensions = useSelector((state) => state.dimensions);
  const costDimension = dimensions.cost;

  const costValueChangeHandler = useCallback(
    (event) => {
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

  const activateCostHandler = useCallback(
    (event) => {
      dispatch(
        dimensionActions.activateCostDimension({
          name: event.target.value,
        })
      );
    },
    [dispatch]
  );

  const dataTestids = {
    food: { low: "food-range-input-lower", high: "food-range-input-higher" },
    wood: { low: "wood-range-input-lower", high: "wood-range-input-higher" },
    gold: { low: "gold-range-input-lower", high: "gold-range-input-higher" },
  };

  return (
    <div className={classes.costs} data-testid="cost-filter">
      <div className={classes.type}>
        <input
          data-testid="food-checkbox"
          type="checkbox"
          value="food"
          checked={costDimension.food.active}
          onChange={activateCostHandler}
        />
        <label className={`${costDimension.food.active ? classes.active : ""}`}>
          Food
        </label>
        <MultiRangeSlider
          dataTestid={dataTestids.food}
          disabled={!costDimension.food.active}
          min={0}
          max={200}
          name="food"
          onChange={costValueChangeHandler}
        />
      </div>
      <div className={classes.type}>
        <input
          data-testid="wood-checkbox"
          type="checkbox"
          value="wood"
          checked={costDimension.wood.active}
          onChange={activateCostHandler}
        />
        <label className={`${costDimension.wood.active ? classes.active : ""}`}>
          Wood
        </label>
        <MultiRangeSlider
          dataTestid={dataTestids.wood}
          disabled={!costDimension.wood.active}
          min={0}
          max={200}
          name="wood"
          onChange={costValueChangeHandler}
        />
      </div>
      <div className={classes.type}>
        <input
          data-testid="gold-checkbox"
          type="checkbox"
          value="gold"
          checked={costDimension.gold.active}
          onChange={activateCostHandler}
        />
        <label className={`${costDimension.gold.active ? classes.active : ""}`}>
          Gold
        </label>
        <MultiRangeSlider
          dataTestid={dataTestids.gold}
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
