import { Link } from "react-router-dom";

//TODO add caching table data(properties like search and pagination) when btnBack is pressed
const GoBackBtn = (): JSX.Element => {
  return (
    <Link to="/">
      <button type="button" className="btn btn-light">
        Go back
      </button>
    </Link>
  );
};

export default GoBackBtn;
