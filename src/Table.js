import React, { Component } from 'react';
import TableRow from './TableRow';
import TableHeadItem from './TableHead';

/**
 * @array theadData - an array of strings
 * @array tbodyData - an array of arrays
 * @string customClass - undefined if no class is defined
 */
const Table = ({ theadData, tbodyData, customClass }) => {
  return (
    <table className={customClass}>
      <thead>
        <tr>
          {theadData.map((h) => {
            return <TableHeadItem key={h} item={h} />;
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((item) => {
          return <TableRow data={item} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;