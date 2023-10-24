import React, { useRef, useState } from 'react';

export default function Task5() {
  const dateRef = useRef(null);
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const inputDate = dateRef.current.value;
    const birthDate = new Date(inputDate);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));

    setAge(ageInYears);
  };

  return (
    <div className="container mt-5">
      <h1>Age Calculator</h1>
      <h2 className="mb-3">Enter your DOB</h2>
      <div className="row">
        <div className="col-8">
          <input type="date" className="form-control form-control-lg" ref={dateRef} style={{ width: '20%' }} />
        </div>
        <br>
        </br>
        <div className="col-4">
          <button
            className="btn btn-primary btn-lg w-100"
            type="button"
            onClick={calculateAge}
            style={{ padding: '10px', backgroundColor: 'orange' }}
          >
            Calculate Age
          </button>
        </div>
      </div>
      {age !== null && <p className="mt-3">Your age is: {age} years</p>}
    </div>
  );
}
