import React, { useState, useRef, useEffect } from "react";

interface Props {
  data: string[];
  value?: string;
  onChange?: (category: string) => void;
  label?: string;
}

const Dropdown = (props: Props) => {
  const { data, value, onChange, label } = props;
  const [toggle, setToggle] = useState<Boolean>(false);
  const ref = useRef(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleItemClick = (category) => {
    if (category != value) {
      onChange(category);
      setToggle(false);
    }
    return;
  };

  return (
    <div className="relative flex flex-col space-y-2" ref={ref}>
      {label && (
        <label className="text-lg font-medium text-gray-700">{label}</label>
      )}
      <button
        onClick={() => setToggle(!toggle)}
        className="text-gray-700 border border-gray-200 hover:shadow-md bg-transparent focus:outline-none focus:border-green-300 focus:shadow-md focus:shadow-green-300/30 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        {value || "Kategorija"}
        <svg
          className="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {toggle && (
        <div
          id="dropdown"
          className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute top-[75px] right-0"
        >
          <div className="py-1 text-sm text-gray-700 dark:text-gray-200">
            {data &&
              data.map((category: any) => (
                <div
                  onClick={() => handleItemClick(category)}
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                >
                  {category}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
