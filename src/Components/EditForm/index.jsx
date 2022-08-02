import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditForm = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [fullName, setFullName] = useState();
  const [bookName, setBookName] = useState();
  const [author, setAuthorName] = useState();
  const [borrowd, setBorrowdName] = useState();
  const [borrowdDate, setborrowdDate] = useState();
  const [returnDate, setreturnDate] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/details/${userId}`)
      .then((res) => {
        setFullName(res.data[0].fullName);
        setBookName(res.data[0].bookName);
        setAuthorName(res.data[0].author);
        setBorrowdName(res.data[0].borrowd);
        setborrowdDate(res.data[0].borrowdDate);
        setreturnDate(res.data[0].returnDate);
      })
      .catch((err) => alert(err));
  }, []);

  const updateUserHandler = (e) => {
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
      .put(`http://localhost:5000/details/${userId}`, data)
      .then((res) => {
        alert("User Details Updatad Successfully...!");
        navigate("/");
      })
      .catch((err) => alert(err.response.data));
  };
  return (
    <div>
      <h1>Edit User Info</h1>
      <form onSubmit={updateUserHandler}>
        <div className="text-wrapper">
          <label>Full Name</label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="text-wrapper">
          <label>Book Name</label>
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
        </div>
        <div className="text-wrapper">
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>
        <div className="text-wrapper">
          <label>Borrowd By </label>
          <input
            type="text"
            value={borrowd}
            onChange={(e) => setBorrowdName(e.target.value)}
          />
        </div>
        <div className="text-wrapper">
          <label>Date of borrow </label>
          <input
            type="text"
            value={borrowdDate}
            onChange={(e) => setborrowdDate(e.target.value)}
          />
        </div>
        <div className="text-wrapper">
          <label>Return Date </label>
          <input
            type="text"
            value={returnDate}
            onChange={(e) => setreturnDate(e.target.value)}
          />
        </div>
        <div>
          <button className="adduser-btn " type="submit">
            Save Changes!
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
