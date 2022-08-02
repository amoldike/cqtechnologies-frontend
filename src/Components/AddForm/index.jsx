import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

const AddForm = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState();
  const [bookName, setBookName] = useState();
  const [author, setAuthorName] = useState();
  const [borrowd, setBorrowdName] = useState();
  const [borrowdDate, setborrowdDate] = useState();
  const [returnDate, setreturnDate] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      fullName: fullName,
      bookName: bookName,
      author: author,
      borrowd: borrowd,
      borrowdDate: borrowdDate,
      returnDate: returnDate,
    };
    console.log(data);
    axios
      .post("http://localhost:5000/details", data)
      .then((res) => {
        alert("User Add Data Successfully...!");
        navigate("/");
      })
      .catch((err) => alert(err.response.data));
  };

  return (
    <div>
      <h1>Add New Student</h1>
      <form onSubmit={submitHandler}>
        <div className="text-wrapper">
          <label>Full Name</label>
          <input
            type="text"
            required
            placeholder="Enter your full name"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="text-wrapper">
          <label>Book Name</label>
          <input
            type="text"
            required
            placeholder="Enter book name"
            onChange={(e) => setBookName(e.target.value)}
          />
        </div>
        <div className="text-wrapper">
          <label>Author</label>
          <input
            type="text"
            required
            placeholder="Book author name"
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>
        <div className="text-wrapper">
          <label>Borrowd By </label>
          <input
            type="text"
            required
            placeholder="Enter name here"
            onChange={(e) => setBorrowdName(e.target.value)}
          />
        </div>
        <div className="text-wrapper">
          <label>Date of borrow </label>
          <input
            type="date"
            required
            onChange={(e) => setborrowdDate(e.target.value)}
          />
        </div>
        <div className="text-wrapper">
          <label>Return Date </label>
          <input
            type="date"
            required
            onChange={(e) => setreturnDate(e.target.value)}
          />
        </div>
        <div>
          <button className="adduser-btn " type="submit">
            Add New Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
