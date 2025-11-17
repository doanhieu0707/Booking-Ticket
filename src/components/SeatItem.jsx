import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSelect } from "../Redux/SeatSlice.js";

export default function SeatItem({ seat, isLabel = false }) {
  const dispatch = useDispatch();
  const selectedSeats = useSelector((s) => s.seat.selectedSeats);
  const isSelected = selectedSeats.some((x) => x.soGhe === seat.soGhe);

  const handleClick = () => {
    if (isLabel) return;
    if (seat.gia === 0) return;
    if (seat.daDat) return;
    dispatch(toggleSelect({ soGhe: seat.soGhe, gia: seat.gia }));
  };

  let className = "ghe"; 
  if (isLabel) className = "rowNumber";
  else if (seat.daDat) className = "gheDuocChon";
  else if (isSelected) className = "gheDangChon";

  return (
    <button
      className={className}
      onClick={handleClick}
      disabled={seat.daDat || isLabel}
      title={seat.soGhe}
      type="button"
    >
      {seat.soGhe}
    </button>
  );
}
