// This is the main part of the grid where we have the List of the Users with their task and date stuff and is using the data.js to take the dummy data

import React from "react";
import data from "./data";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { handleTotalPages, setData ,handleNameSort,handleTaskSort,handleDateSort} from "../../features/pageSlice";

const GridMain = () => {
  let dispatch = useDispatch();
  let {
    paginationPage,
    selectPage,
    search,
    data: dummyData,
  } = useSelector((state) => state.store);


  function handleName() {
    dispatch(handleNameSort())
  }

  React.useEffect(() => {
    dispatch(setData({ data: data }));
  }, []);

  React.useEffect(() => {
    dispatch(handleTotalPages({ pages: Math.ceil(data.length / selectPage) }));
  }, [selectPage]);

  return (
    <div className="TableDataMain">
      <div>
        <div className="flex-even gridHead">
          <div className="gridHeadSingle"  onClick={handleName}>
            <a>Client Name</a>
            <div className="gridHeadIcons">
              <AiFillCaretUp className="IconUp" />
              <AiFillCaretDown className="IconDown" />
            </div>
          </div>
          <div className="gridHeadSingle"  onClick={()=>dispatch(handleTaskSort())}>
            <a>Task</a>
            <div className="gridHeadIcons">
              <AiFillCaretUp className="IconUp" />
              <AiFillCaretDown className="IconDown" />
            </div>
          </div>
          <div className="gridHeadSingle clientDateHead" onClick={()=>dispatch(handleDateSort())}>
            <a>Due Date</a>
            <div className="gridHeadIcons">
              <AiFillCaretUp className="IconUp" />
              <AiFillCaretDown className="IconDown" />
            </div>
          </div>
        </div>
        <div className="headLine"></div>
        <div>
          {dummyData
            .slice(
              paginationPage * selectPage - selectPage,
              paginationPage * selectPage
            )
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((row) => {
              return (
                <div>
                  <div className="flex-even gridBody">
                    <div className="firstColumn" style={{ gap: "20px" }}>
                      <img
                        src={row.Image}
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "50%",
                        }}
                      />
                      <a>{row.name}</a>
                    </div>

                    <a>{row.Task}</a>
                    <a className="clientDate">{row.Date}</a>
                  </div>
                  <div className="RowsLine"></div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default GridMain;
