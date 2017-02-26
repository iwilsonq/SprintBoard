import React from 'React';
import TableRow from './TableRow';

const TableBody = props => {
  return (
    <div className="table-body">
      <TableRow
        index="ID"
        email="Subscriber Email"
      />
      {props.subscribers.map((sub, i) => (
        <TableRow key={sub._id} index={i} {...sub} />
      ))}
    </div>
  );
};

export default TableBody;
