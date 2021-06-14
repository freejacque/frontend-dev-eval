import React from 'react';

/**
 * @array data - data for a row
 */
const TableRow = ({ data }) => {
  return (
    <tr>
      {data.map((item) => {
        return <td key={item}>{item}</td>;
      })}
    </tr>
  );
};

export default TableRow;