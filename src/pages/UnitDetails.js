import { useParams } from 'react-router-dom';

const UnitDetails = () => {
  const params = useParams();

  return (
    <div>UnitDetails {params.unitId}</div>
  )
}

export default UnitDetails