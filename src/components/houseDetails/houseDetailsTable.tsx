import { House } from "../../types/domain";

interface HouseDetailsTableProps {
  houseDetails: House;
}

const HouseDetailsTable = (props: HouseDetailsTableProps): JSX.Element => {
  const { houseDetails } = props;

  return (
    <table className="table table-sm table-hover">
      <tbody>
        <tr>
          <td>
            <strong>Name of the House</strong>
          </td>
          <td>{houseDetails.name}</td>
        </tr>
        <tr>
          <td>
            <strong>Region</strong>
          </td>
          <td>{houseDetails.region}</td>
        </tr>
        <tr>
          <td>
            <strong>Coat of Arms</strong>
          </td>
          <td>{houseDetails.coatOfArms}</td>
        </tr>
        <tr>
          <td>
            <strong>Words</strong>
          </td>
          <td>{houseDetails.words}</td>
        </tr>
        <tr>
          <td>
            <strong>Titles</strong>
          </td>
          <td>{houseDetails.titles?.join(", ")}</td>
        </tr>
        <tr>
          <td>
            <strong>Seats</strong>
          </td>
          <td>{houseDetails.seats?.join(", ")}</td>
        </tr>
        <tr>
          <td>
            <strong>Has died out</strong>
          </td>
          <td>{houseDetails.diedOut ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <td>
            <strong>Has overlord</strong>
          </td>
          <td>{houseDetails.overlord ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <td>
            <strong>Number of Cadet Branches</strong>
          </td>
          <td>{houseDetails.cadetBranches?.length}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default HouseDetailsTable;
