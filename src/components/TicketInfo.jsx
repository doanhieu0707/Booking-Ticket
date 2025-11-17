import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCustomerName, confirmBooking, clearSelection } from "../Redux/SeatSlice.js";

export default function TicketInfo() {
  const selectedSeats = useSelector((s) => s.seat.selectedSeats);
  const { customerName } = useSelector(state => state.seat);
  const total = selectedSeats.reduce((sum, s) => sum + Number(s.gia), 0);
  const dispatch = useDispatch();

  const handleConfirm = () => {
    if (selectedSeats.length === 0) {
      alert("Chưa chọn ghế nào!");
      return;
    }
    dispatch(confirmBooking());
    alert("Đặt vé thành công!");
  };

  return (
    <div>
      {/* Ô nhập tên */}
      <div className="inputGroup">
        <label>Họ và tên</label>
        <input 
          type="text"
          value={customerName}
          onChange={e => dispatch(setCustomerName(e.target.value))}
          placeholder="Nhập tên khách hàng"
        />
      </div>

      {/* Ô nhập số lượng */}
      <div className="inputGroup">
        <label>Số lượng ghế đã chọn</label>
        <input 
            type="number"
            value={selectedSeats.length}
            readOnly
        />
      </div>

      <h3>Danh sách ghế bạn chọn</h3>

      <div className="ticket-list">
        {selectedSeats.length === 0 && <div>Chưa có ghế nào</div>}
        {selectedSeats.map((s) => (
          <div className="ticket-row" key={s.soGhe}>
            <div>{s.soGhe}</div>
            <div>{Number(s.gia).toLocaleString()} đ</div>
          </div>
        ))}
      </div>

      <div className="total">
        <div>Tổng tiền</div>
        <div>{total.toLocaleString()} đ</div>
      </div>

      <div className="btns">
        <button className="btn confirm" onClick={handleConfirm}>
          Xác nhận
        </button>
        <button className="btn clear" onClick={() => dispatch(clearSelection())}>
          Hủy chọn
        </button>
      </div>

      <div className="legend bottom-legend">
        <div className="legendItem">
          <div className="legendBox ghe" />
          <span>Ghế trống</span>
        </div>
        <div className="legendItem">
          <div className="legendBox gheDangChon" />
          <span>Ghế đang chọn</span>
        </div>
        <div className="legendItem">
          <div className="legendBox gheDuocChon" />
          <span>Ghế đã đặt</span>
        </div>
      </div>


      <div style={{ marginTop: "30px" }}>
        <h3>Thông tin đặt vé</h3>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
            color: "white",
            background: "rgba(255,255,255,0.05)"
          }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid white" }}>
              <th style={{ padding: "10px" }}>Họ tên</th>
              <th style={{ padding: "10px" }}>Ghế</th>
              <th style={{ padding: "10px" }}>Tổng tiền</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ padding: "10px" }}>{customerName || "---"}</td>
              <td style={{ padding: "10px" }}>
                {selectedSeats.length > 0
                  ? selectedSeats.map((s) => s.soGhe).join(", ")
                  : "---"}
              </td>
              <td style={{ padding: "10px" }}>
                {selectedSeats.length > 0
                  ? total.toLocaleString() + " đ"
                  : "---"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
