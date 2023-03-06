
import React from "react";
import './Tab.style.css'

export default function Table({data}) {
  return (
    <div>
      <table className="mt-5">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
       {data.map((user)=>
       
       <tr>

            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.body}</td>
          </tr>
       
       )}   
        </tbody>
      </table>
    </div>
  );
}
