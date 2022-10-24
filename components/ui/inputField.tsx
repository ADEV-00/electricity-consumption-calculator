import React, { useEffect, useRef } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

interface Props {
  disabled?: Boolean;
  value?: string | number;
  label?: string;
  name?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  valueType?: string;
  tooltip?: string;
}

const InputField = (props: Props) => {
  const { value, name, placeholder, onChange, label, valueType, tooltip } =
    props;
  const ref = useRef(null);

  /*   useEffect(() => {
    if (tooltip) {
      tippy(ref.current, {
        content: tooltip,
        duration: 0,
        theme: "light",
        placement: "right",
        allowHTML: true,
      });
    }
  }, []); */

  return (
    <>
      <div className="w-40 space-y-2 flex flex-col justify-end">
        {label && (
          <label
            ref={ref}
            id={name}
            htmlFor={name}
            className="text-md font-medium text-gray-700 my-auto"
          >
            {label}
          </label>
        )}
        <div className="max-w-full h-9 flex flex-row items-center relative">
          <input
            min="0"
            type="number"
            value={value ? value : 0}
            name={name}
            id={name}
            className="w-full h-full focus:outline-none text-sm border border-gray-200 rounded-md pl-2 pr-12 focus:border-green-300 focus:shadow-md focus:shadow-green-300/30"
            placeholder={placeholder}
            onChange={onChange}
            pattern="[0-9]*"
          />
          <div className="font-medium text-gray-700 text-sm absolute right-3">
            {valueType}
          </div>
        </div>
      </div>
    </>
  );
};

export default InputField;
