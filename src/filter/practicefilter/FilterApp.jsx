import React, { useState } from "react";
import AppData from "./AppData.json";
import Table from "./Table";

export default function FilterApp() {
  const [sea, setSea] = useState("");
  const handleChange = (e) => {
    setSea(e.target.value);
  };

  const searching = (data) => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(sea.toLowerCase()) ||
        item.email.toLowerCase().includes(sea.toLowerCase()) ||
        item.body.toLowerCase().includes(sea.toLowerCase())
    );
  };

  //  const  search={filter.((item)=>
  //   item.email.toLocaleLowerCase().includes(sea)

  //   )}
  return (
    <div className=" container  ">
      <p className="text-success h1"> Search Filter Application and sorting out names mainly for developer</p>

      <form>
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
