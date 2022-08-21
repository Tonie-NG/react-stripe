import React from "react";

function Sucess() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto ",

        flexDirection: "column",
        width: "300px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80px",
          width: "80px",
          borderRadius: "50%",
          marginBottom: "10px",
        }}
      >
        <img
          src={ThanksImage}
          width="80px"
          height="80px"
          style={{ objectFit: "cover", borderRadius: "50%" }}
          alt=""
        />
      </div>
      <button
        style={{
          border: "none",
          borderRadius: 5,
          padding: "20px",
          backgroundColor: "teal",
          color: "white",
          fontWeight: "600",
          fontSize: "1.25rem",
          cursor: "pointer",
        }}
      >
        Successful
      </button>
      <p
        style={{
          fontSize: "1.2rem",
          textAlign: "center",
        }}
      >
        Your order is being processed. Thanks for Shopping with us
      </p>
    </div>
  );
}

export default Sucess;
