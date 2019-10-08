import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTab } from "../reducers/tabsReduces";
import { useTabs } from "../hooks/useSelectors";

const Select = memo(() => {
  const tabsCounter = useTabs();
  const dispatch = useDispatch();
  const [selectedOption, setOption] = useState("tab 1");
  const onchangeSelect = e => {
    setOption(e.target.value);
  };
  const setSelectedOption = () => {
    dispatch(addNewTab(selectedOption));
  };

  return (
    <div className="select-wrapper">
      <select className="select-css" onChange={onchangeSelect}>
        {new Array(10).fill("tab").map((item, inx) => (
          <option key={inx} value={`${item} ${inx + 1}`}>{`${item} ${inx +
            1}`}</option>
        ))}
      </select>
      <button
        className="btn"
        disabled={tabsCounter.length >= 20}
        onClick={setSelectedOption}
      >
        Open tab
      </button>
    </div>
  );
});

export default Select;
