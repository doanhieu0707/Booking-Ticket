import React from "react";
import SeatItem from "./SeatItem.jsx";

export default function SeatRow({ row }) {
  const isLabelRow = row.hang === "";

  return (
    <div className="seat-row">
      {/* chữ A B C  */}
      <div className="firstChar">{isLabelRow ? "" : row.hang}</div>

      {/* grid ghế */}
      <div className="seat-grid">
        {row.danhSachGhe.map((g) => (
          <SeatItem key={g.soGhe} seat={g} isLabel={isLabelRow} />
        ))}
      </div>
    </div>
  );
}
