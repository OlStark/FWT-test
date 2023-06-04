import "./index.scss";
import { getPagesArray } from "../utils/pages";

const Paginations = ({ totalPage, page, changePage, totalPages }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className="Pagination">
      {pagesArray.map((el) => (
        <button onClick={() => changePage(el)} key={el.id}>
          {el}
        </button>
      ))}
    </div>
  );
};

export default Paginations;
