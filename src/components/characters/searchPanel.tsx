import GenderSelect from "../characters/genderSelect";
import CultureSearch from "../characters/cultureSearch";
import { GenderType } from "../../types/enums";

interface SearchPanelProps {
  gender: GenderType;
  culture: string;
  handleChangeGender(gender: GenderType): void;
  handleChangeCulture(culture: string): void;
  handleClickSearchCharacters(): Promise<void>;
}

const SearchPanel = (props: SearchPanelProps): JSX.Element => {
  const {
    gender,
    culture,
    handleChangeGender,
    handleChangeCulture,
    handleClickSearchCharacters,
  } = props;

  return (
    <div className="row">
      <div className="col-2">
        <GenderSelect gender={gender} handleChangeGender={handleChangeGender} />
      </div>
      <div className="col-2">
        <CultureSearch
          culture={culture}
          handleChangeCulture={handleChangeCulture}
        />
      </div>
      <div className="col-1">
        <button
          type="button"
          className="btn btn-light"
          onClick={async () => await handleClickSearchCharacters()}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchPanel;
