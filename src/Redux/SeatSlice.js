import { createSlice } from "@reduxjs/toolkit";
import danhSachGhe from "../components/danhSachGhe.json";

const initialState = {
  seatRows: danhSachGhe,
  selectedSeats: [],
  customerName: "",
};

const seatSlice = createSlice({
  name: "seat",
  initialState,
  reducers: {
    setCustomerName(state, action) {
        state.customerName = action.payload;
    },
    toggleSelect(state, action) {
      const { soGhe, gia } = action.payload;
      const idx = state.selectedSeats.findIndex(s => s.soGhe === soGhe);
      if (idx !== -1) {
        state.selectedSeats.splice(idx, 1);
        return;
      }

      const foundBooked = state.seatRows.some(row =>
        row.danhSachGhe.some(g => g.soGhe === soGhe && g.daDat)
      );
      if (foundBooked) return;
      state.selectedSeats.push({ soGhe, gia });
      if (state.quantityLimit > 0 && state.selectedSeats.length >= state.quantityLimit) {
        return; // không cho thêm nữa
        }
    },
    confirmBooking(state) {
      state.selectedSeats.forEach(sel => {
        for (const row of state.seatRows) {
          const seat = row.danhSachGhe.find(g => g.soGhe === sel.soGhe);
          if (seat) {
            seat.daDat = true;
            break;
          }
        }
      });
      state.selectedSeats = [];
    },
    clearSelection(state) {
      state.selectedSeats = [];
    }
  }
});

export const { toggleSelect, confirmBooking, clearSelection, setQuantityLimit, setCustomerName} = seatSlice.actions;
export default seatSlice.reducer;
