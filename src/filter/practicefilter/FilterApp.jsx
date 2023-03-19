import React, { useState } from "react";
import AppData from "./AppData.json";
import Table from "./Table";

export default function FilterApp() {
  const [sea, setSea] = useState("");
  const handleChange = (e) => {
    setSea(e.target.value);
  };
 
  const searching = (data) => {
    return data.filter((item) =>
     item.name.toLocaleLowerCase().includes(sea)||  
      item.email.toLocaleLowerCase().includes(sea) ||  
       item.body.toLocaleLowerCase().includes(sea)
     
     )
    
  };

  //  const  search={filter.((item)=>
  //   item.email.toLocaleLowerCase().includes(sea)

  //   )}
  return (
    <div className=" container  ">
      <p className="text-success h1"> Search Filter Application for election  names</p>

      <form >
        <span>
          {" "}
          <input
            style={{ marginBottom: "200px" }}
            type="text"
            placeholder="Search...."
            className="border border-1 my-5"
            onChange={handleChange}
            value={sea}
          />
        </span>{" "}
      </form>
      <div>
        <Table data={searching(AppData)} />
      </div>
    </div>
  );
}
