/* eslint-disable no-template-curly-in-string */
import { useState, useEffect } from "react";

const Pagination = ({pages, setCurrentPage, currentEmployees, sortedEmployees}) => {
    const [currentButton, setCurrentButton] = useState(1);

    useEffect(() => {
      setCurrentPage(currentButton);
    }, [currentButton, setCurrentPage])

    const numOfPages = [];

    for (let i=1; i <= pages; i++) {
        numOfPages.push(i);
    }

    
  return (
    <div className="clearfix">
      <div className="hint-text">
        Showing <b>{currentEmployees.length}</b> out of <b>{sortedEmployees.length}</b> entries
      </div>
      <ul className="pagination">
        <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item'}`}>
          <a href="#!" onClick = {() => setCurrentButton((prev) => prev === 1 ? prev : prev -1 )}>Previous</a>
        </li>
        {
            // eslint-disable-next-line array-callback-return
            numOfPages.map((page, index) => {
                return (
                <li key={index} className={`${currentButton === page ? 'page-item active' : 'page-item'}`}>
                <a onClick = {() => setCurrentButton(page)} href="#!" className="page-link">
                {page}
                </a>
            </li>
                )
            })
        }
        <li className={`${currentButton === numOfPages.length ? 'page-item disabled' : 'page-item'}`}>
          <a href="#!" onClick = {() => setCurrentButton((next) => next === numOfPages ? next : next -1 )}>Next</a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
