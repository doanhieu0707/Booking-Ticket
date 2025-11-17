import React from "react";
import SeatRow from "./SeatRow.jsx";
import danhSachGhe from "./danhSachGhe.json";

export default function SeatList() {
  return (
    <div className="seat-area">
      {danhSachGhe.map((row, idx) => (
        <SeatRow row={row} key={idx} />
      ))}
    </div>
  );
}
