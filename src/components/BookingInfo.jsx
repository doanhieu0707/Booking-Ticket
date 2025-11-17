import React from "react";

const BookingInfo = ({ name, seats }) => {
  if (!name && seats.length === 0) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3 style={{ color: "#fff" }}>Thông tin đặt vé</h3>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#111",
          color: "#fff",
          border: "1px solid #555",
        }}
      >
        <thead>
          <tr>
            <th style={thStyle}>Tên khách</th>
            <th style={thStyle}>Ghế đã chọn</th>
            <th style={thStyle}>Số lượng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>{name}</td>
            <td style={tdStyle}>{seats.join(", ")}</td>
            <td style={tdStyle}>{seats.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  padding: "10px",
  border: "1px solid #444",
  background: "#222",
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #444",
};

export default BookingInfo;
