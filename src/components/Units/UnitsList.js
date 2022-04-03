import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import data from "../../data/data";

import classes from "./UnitsList.module.scss";

const UnitsList = () => {
  const dimensions = useSelector((state) => state.dimensions);

  const filteredData = useMemo(() => {
    const ageDimensions = dimensions.age;
    // ADD COST FILTER

    return data.units.filter((datum) => {
      if (ageDimensions) {
        if (ageDimensions === "All") {
          return datum;
        }
        return datum.age === ageDimensions;
      }

      //ADD LOGIC FOR ALL POSSIBLE FILTERING OPTIONS
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
            <td>{"costs"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UnitsList;
