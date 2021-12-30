import React from 'react';
import Select, { createFilter } from 'react-select';

const CustomSelectProps = ({ id, options }) => {
  const styles = {
    paddingLeft: '1rem',
    color: 'red',
  };

  return (
    <Select
      isSearchable
      id={id}
      options={options}
      styles={styles}
      filterOption={createFilter({ matchFromStart: 'true' })}
    />
  );
};

export default CustomSelectProps;
