import { Links } from "parse-link-header";

interface PaginationProps {
  pageNum: number;
  links: Links;
  pageSize: number;
  handleChangePageSize(
    event: React.ChangeEvent<HTMLSelectElement>
  ): Promise<void>;
  handleChangePageNum(pageNum: string): Promise<void>;
}

const Pagination = (props: PaginationProps): JSX.Element => {
  const {
    pageNum,
    links,
    pageSize,
    handleChangePageSize,
    handleChangePageNum,
  } = props;

  return (
    <div className="row">
      <div className="col-1">
        <button
          disabled={!links.prev}
          type="button"
          className="btn btn-secondary"
          onClick={async () => await handleChangePageNum(links.first.page)}
        >
          first
        </button>
      </div>
      <div className="col-1">
        <button
          disabled={!links.prev}
          type="button"
          className="btn btn-secondary"
          onClick={async () => await handleChangePageNum(links.prev.page)}
        >
          prev
        </button>
      </div>
      <div className="col-1">
        <span>{pageNum}</span>
      </div>
      <div className="col-1">
        <button
          disabled={!links.next}
          type="button"
          className="btn btn-secondary"
          onClick={async () => await handleChangePageNum(links.next.page)}
        >
          next
        </button>
      </div>
      <div className="col-1">
        <button
          disabled={!links.next}
          type="button"
          className="btn btn-secondary"
          onClick={async () => await handleChangePageNum(links.last.page)}
        >
          last
        </button>
      </div>
      <div className="col-1">
        <div className="input-group mb-3">
          <select
            className="custom-select"
            value={pageSize}
            onChange={handleChangePageSize}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
