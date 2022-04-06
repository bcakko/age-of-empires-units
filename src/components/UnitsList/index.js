import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./styles.module.scss";

const UnitsList = () => {
  const dimensions = useSelector((state) => state.dimensions);

  const filteredData = useMemo(() => {
    const ageDimension = dimensions.age;
    const costDimension = dimensions.cost;
    const dataDimension = dimensions.data.units;

    const foodFilterIsActive = costDimension.food.active;
    const woodFilterIsActive = costDimension.wood.active;
    const goldFilterIsActive = costDimension.gold.active;

    return dataDimension.filter((datum) => {
      // Defining new data to prevent search in null
      let cost = {};
      if (datum.cost) {
        cost = datum.cost;
      }

      const conditions = {
        food: true,
        wood: true,
        gold: true,
      };

      if (foodFilterIsActive) {
        // Updating filtering conditions
        conditions.food =
          (!cost.Food && costDimension.food.min === 0) ||
          (cost.Food <= costDimension.food.max &&
            cost.Food >= costDimension.food.min);
      }
      if (woodFilterIsActive) {
        conditions.wood =
          (!cost.Wood && costDimension.wood.min === 0) ||
          (cost.Wood <= costDimension.wood.max &&
            cost.Wood >= costDimension.wood.min);
      }
      if (goldFilterIsActive) {
        conditions.gold =
          (!cost.Gold && costDimension.gold.min === 0) ||
          (cost.Gold <= costDimension.gold.max &&
            cost.Gold >= costDimension.gold.min);
      }

      if (ageDimension === "All") {
        return conditions.food && conditions.wood && conditions.gold;
      }

      return (
        datum.age === ageDimension &&
        conditions.food &&
        conditions.wood &&
        conditions.gold
      );
    });
  }, [dimensions]);
  
  return (
    <table className={classes.unitsTable} data-testid="units-list">
      <tbody>
        <tr>
          <th className={classes["id-head"]}>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Cost</th>
        </tr>
        {filteredData.length === 0 && (
          <tr>
            <td className={classes["not-found"]} colSpan="4">
              No units found.
            </td>
          </tr>
        )}
        {filteredData.map((unit) => (
          <tr key={unit.id}>
            <td>{unit.id}</td>
            <td>
              <Link to={`/units/${unit.id}`}>{unit.name}</Link>
            </td>
            <td>{unit.age}</td>
            <td>
              {unit.cost === null
                ? "-"
                : Object.keys(unit.cost).map((key) => (
                    <p key={key}>{`${key}: ${unit.cost[key]}`}</p>
                  ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UnitsList;
