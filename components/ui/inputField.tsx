import React from "react";

interface Props {
  disabled?: Boolean;
  value?: string | number;
  label?: string;
  name?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  valueType?: string;
}

const InputField = (props: Props) => {
  const { value, name, placeholder, onChange, label, valueType } = props;
  return (
    <div className="w-40 space-y-2 flex flex-col justify-end">
      {label && (
        <label
          htmlFor={name}
          className="text-md font-medium text-gray-700 my-auto"
        >
          {label}
        </label>
      )}
      <div className="max-w-full h-9 flex flex-row items-center relative">
        <input
          type="number"
          value={value}
          name={name}
          id={name}
          className="w-full h-full focus:outline-none text-sm border border-gray-200 rounded-md pl-2 pr-12 focus:border-green-300 focus:shadow-md focus:shadow-green-300/30"
          placeholder={placeholder}
          onChange={onChange}
        />
        <div className="font-medium text-gray-700 text-sm absolute right-3">
          {valueType}
        </div>
      </div>
    </div>
  );
};

export default InputField;
