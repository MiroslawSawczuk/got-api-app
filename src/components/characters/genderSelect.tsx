import { GenderType } from "../../types/enums";

interface GenderSelectProps {
  gender: GenderType;
  handleChangeGender(gender: GenderType): void;
}

const GenderSelect = (props: GenderSelectProps): JSX.Element => {
  const handleChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.handleChangeGender(parseInt(event.target.value));
  };

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text">Gender</label>
      </div>
      <select
        className="custom-select"
        value={props.gender}
        onChange={handleChangeGender}
      >
        <option
          value={GenderType.NotSelected}
          defaultValue={GenderType.NotSelected}
        >
          Select
        </option>
        <option value={GenderType.Male}>Male</option>
        <option value={GenderType.Female}>Female</option>
        <option value={GenderType.Unknown}>Unknown</option>
      </select>
    </div>
  );
};

export default GenderSelect;
