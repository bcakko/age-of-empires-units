import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage";

import classes from "./styles.module.scss";

const UnitProperties = () => {
  const params = useParams();
  const dimensions = useSelector((state) => state.dimensions);

  const dataDimension = dimensions.data.units;
  const paramId = +params.unitId;

  let unitData = {};
  let cost = {};

  const singleUnitData = dataDimension.find((unit) => unit.id === paramId);

  if (!singleUnitData) {
    return <NotFoundPage />;
  } else {
    unitData = singleUnitData;
    if (unitData.cost) {
      cost = unitData.cost;
    }
  }

  return (
    <table className={classes.detailsTable} data-testid="unit-details">
      <tbody>
        <tr>
          <th>ID:</th>
          <td>{unitData.id}</td>
        </tr>
        <tr>
          <th>Name:</th>
          <td>{unitData.name}</td>
        </tr>
        <tr>
          <th>Description:</th>
          <td>{unitData.description}</td>
        </tr>
        <tr>
          <th>Min. Required Age:</th>
          <td>{unitData.age}</td>
        </tr>
        <tr>
          <th>Wood Cost:</th>
          <td>{cost.Wood || "-"}</td>
        </tr>
        <tr>
          <th>Food Cost:</th>
          <td>{cost.Food || "-"}</td>
        </tr>
        <tr>
          <th>Gold Cost:</th>
          <td>{cost.Gold || "-"}</td>
        </tr>
        <tr>
          <th>Build Time:</th>
          <td>{unitData.build_time || "-"}</td>
        </tr>
        <tr>
          <th>Reload Time:</th>
          <td>{unitData.reload_time || "-"}</td>
        </tr>
        <tr>
          <th>Hit Points:</th>
          <td>{unitData.hit_points || "-"}</td>
        </tr>
        <tr>
          <th>Attack:</th>
          <td>{unitData.attack || "-"}</td>
        </tr>
        <tr>
          <th>Accuracy:</th>
          <td>{unitData.accuracy || "-"}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UnitProperties;
