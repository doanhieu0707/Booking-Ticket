import React from "react";
import SeatList from "./components/SeatList";
import TicketInfo from "./components/TicketInfo";
import "./assets/BaiTapBookingTicket.css";

export default function App() {
  return (
    <div className="booking-container">
      <div className="booking-inner">
        <div className="left-panel">
          <h1 className="title">ĐẶT VÉ XEM PHIM</h1>

          <div className="screen">MÀN HÌNH</div>

          <SeatList />
        </div>

        <div className="right-panel">
          <TicketInfo />
        </div>

      </div>
    </div>
  );
}
