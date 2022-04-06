import AgeFilter from "./AgeFilter";
import CostFilter from "./CostFilter";

import classes from "./styles.module.scss";

const Filters = () => {
  return (
    <div data-testid="filters">
      <div className={classes["age-group"]}>
        <h3>Ages:</h3>
        <AgeFilter />
      </div>
      <div className={classes["cost-group"]}>
        <h3>Costs:</h3>
        <CostFilter />
      </div>
    </div>
  );
};

export default Filters;
