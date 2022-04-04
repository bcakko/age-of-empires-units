import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import data from "../../data/data";

import classes from "./UnitsList.module.scss";

const UnitsList = () => {
  const dimensions = useSelector((state) => state.dimensions);

  const filteredData = useMemo(() => {
    const ageDimensions = dimensions.age;
    const costDimensions = dimensions.cost;

    return data.units.filter((datum) => {
      if (ageDimensions === "All") {
        return (
          (!datum.cost?.Food ||
            (datum.cost?.Food <= costDimensions.food.max &&
              datum.cost?.Food >= costDimensions.food.min)) &&
          (!datum.cost?.Wood ||
            (datum.cost?.Wood <= costDimensions.wood.max &&
              datum.cost?.Wood >= costDimensions.wood.min)) &&
          (!datum.cost?.Gold ||
            (datum.cost?.Gold <= costDimensions.gold.max &&
              datum.cost?.Gold >= costDimensions.gold.min))
        );
      }

      return (
        datum.age === ageDimensions &&
        (!datum.cost?.Food ||
          (datum.cost?.Food <= costDimensions.food.max &&
            datum.cost?.Food >= costDimensions.food.min)) &&
        (!datum.cost?.Wood ||
          (datum.cost?.Wood <= costDimensions.wood.max &&
            datum.cost?.Wood >= costDimensions.wood.min)) &&
        (!datum.cost?.Gold ||
          (datum.cost?.Gold <= costDimensions.gold.max &&
            datum.cost?.Gold >= costDimensions.gold.min))
      );
    });
  }, [dimensions]);

  return (
    <table>
      <tbody>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Cost</th>
        </tr>
        {filteredData.map((unit) => (
          <tr key={unit.id}>
            <td>{unit.id}</td>
            <td>
              <Link to={`/unit-details/${unit.id}`}>{unit.name}</Link>
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
