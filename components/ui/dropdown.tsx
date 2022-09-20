import React, { useState, useRef, useEffect } from "react";

interface Props {
  data: string[];
  value?: string;
  onChange?: () => void;
}

const Dropdown = (props: Props) => {
  const { data, value } = props;
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

  return (
    <div className="relative" ref={ref}>
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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {toggle && (
        <div
          id="dropdown"
          className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute top-12 right-0"
        >
          <div className="py-1 text-sm text-gray-700 dark:text-gray-200">
            {data &&
              data.map((category: any) => (
                <div className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
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
