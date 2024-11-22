import React from 'react';
import Select, { OnChangeValue, StylesConfig } from 'react-select';

interface SelectComponentInterface {
  data: any[];
  setterFn: (data: string) => void
}

const customStyles: StylesConfig<false> = {
  control: provided => ({
    ...provided,
    borderRadius: '25px',
    marginTop: '1rem'
  })
}

const SelectComponent = ({data, setterFn}: SelectComponentInterface) => {
  return (
    <>
      <Select
        options={data}
        onChange={(newValue) => setterFn(newValue.value)}
        defaultValue={data[0]}
        isSearchable={false}
        styles={customStyles}
      />
    </>
  )
};

export default SelectComponent;