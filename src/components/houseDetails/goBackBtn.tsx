import { Link } from "react-router-dom";

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
