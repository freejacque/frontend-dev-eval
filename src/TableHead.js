import React from 'react';

/**
 * @string item
 */
const TableHeadItem = ({ item }) => {
  return (
    <td title={item}>
      {item}
    </td>
  );
};

export default TableHeadItem;