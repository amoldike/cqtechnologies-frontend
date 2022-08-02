import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/details")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => alert(err));
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/add-user" className="add-btn">
        Add User
      </Link>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Book Name</th>
              <th>Author by</th>
              <th>Borrowd by</th>
              <th>Date of borrow</th>
              <th>Return Date</th>
              <th>Edit Details</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.fullName}</td>
                  <td>{user.bookName}</td>
                  <td>{user.author}</td>
                  <td>{user.borrowd}</td>
                  <td>{user.borrowdDate}</td>
                  <td>{user.returnDate}</td>
                  <td>
                    <Link to={`/edit-user/${user._id}`} className="edit-btn">
                      &emsp;Edit&emsp;
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
