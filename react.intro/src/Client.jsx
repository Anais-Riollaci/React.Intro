import React, { Component } from "react";

const Client = ({ details, onDelete }) => (
  <tr>
    <td key={details.id}>
      {details.nom}
      {""}
    </td>
    <td>
      <button onClick={() => onDelete(details.id)}>X</button>
    </td>
  </tr>
);

export default Client;
