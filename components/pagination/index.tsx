import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faArrowRight } from "@fortawesome/pro-solid-svg-icons";
//@ts-ignore
const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  //@ts-ignore
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {nPages > 1 && (
        <div className="border-t lg:mt-8 ">
          <ul className=" flex flex-row items-center justify-between sm:gap-6 pt-1">
            <li className="cursor-pointer flex items-center" onClick={prevPage}>
              <span className="font-normal  text-uniqueprimarybody">
                {/* <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="mr-2 text-[#49525E]"
                /> */}

              </span>
              <span className="hidden sm:block">Previous</span>
            </li>
            <li className="flex items-center gap-1">
              {pageNumbers.map((pgNumber) => {
                return (
                  <p
                    key={pgNumber}
                    className={`flex gap-4 ${currentPage === pgNumber
                      ? " relative top-[-5px]  border-t-2 border-[#157CFB] pt-[8px] font-black  text-[#157CFB]"
                      : " text-[#49525E]"
                      }`}
                  >
                    <span
                      className="cursor-pointer px-2 text-[14px] lg:text-[16px]"
                      onClick={() => {
                        setCurrentPage(pgNumber);
                        handleClick();
                      }}
                    >
                      {pgNumber}
                    </span>
                  </p>
                );
              })}
            </li>

            <li className="cursor-pointer flex items-center" onClick={nextPage}>
              <span className="hidden sm:block">Next</span>
              <span className="font-normal text-[#49525E]">
                {/* <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 text-[#49525E]"
                /> */}
              </span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Pagination;
