import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {deleteGrocery, listGrocery, listGymRecords} from "../service/GroceryService";

const Grocery = () => {
  const [grocery, setGrocery] = useState([]);
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    getGroceries();
  }, []);

  function getGroceries() {
    listGrocery()
      .then((res) => setGrocery(res.data))
      .catch((error) => console.log(error));
  }

  function getGymRecords() {
    listGymRecords()
      .then((res) => setRecords(res.data))
      .catch((error) => console.log(error));
  }

  function handleDelete(id) {
    deleteGrocery(id)
      .then((res) => {
        getGroceries();
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <h2>List of Grocery</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Type</th>
            <th>Source</th>
            <th>Quantity</th>
            <th>Cost</th>
            <th>Total Cost</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {grocery.map((g) => (
            <tr key={g.id}>
              <td>{g.id}</td>
              <td>{g.name}</td>
              <td>{g.type}</td>
              <td>{g.source}</td>
              <td>{g.itemsAvailable}</td>
              <td>{g.costPerItem}</td>
              <td>{g.costPerItem * g.itemsAvailable}</td>
              <td onClick={() => handleDelete(g.id)}>
                <i className="fa fa-trash-o"></i>
              </td>
              <td>
                <button
                  onClick={() => {
                    navigate("/update", {state: g});
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="btn">
        <Link to="/add">
          <button className="add">Add New Grocery</button>
        </Link>
        <button className="refresh" onClick={getGroceries}>
          Refresh
        </button>
      </div>

      <h2>List of Gym Records - Fetched from external Service</h2>
      <table>
      <thead>
          <tr>
            <th>Exercise</th>
            <th>Weight</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r) => (
            <tr key={r.exercise}>
              <td>{r.exercise}</td>
              <td>{r.weight}</td>
              <td>{r.date}</td>
            </tr>
          ))}
        </tbody>
        </table>
        <div className="btn">
        <button className="fetch" onClick={getGymRecords}>
          Fetch Data from Gym App on Demand
        </button>
      </div>

    </>
  );
};

export default Grocery;
