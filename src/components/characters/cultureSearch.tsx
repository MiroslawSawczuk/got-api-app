interface CultureSearchProps {
  culture: string;
  handleChangeCulture(culture: string): void;
}

const CultureSearch = (props: CultureSearchProps): JSX.Element => {
  const handleChangeCulture = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleChangeCulture(event.currentTarget.value);
  };

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text">Culture</label>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        aria-label="Culture"
        aria-describedby="basic-addon1"
        value={props.culture}
        onChange={handleChangeCulture}
      />
    </div>
  );
};

export default CultureSearch;
