import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

export const sendMail = createAsyncThunk(
  "mails/sendMail",
  async (data, { rejectWithValue }) => {
    try {
      const response = await toast.promise(
        axios.post("https://portofolioapi.onrender.com/mail", data),
        {
          pending: {
            render() {
              return "El mensaje se esta enviando";
            },
            position: toast.POSITION.BOTTOM_LEFT,
          },
          error: {
            render() {
              return "Hubo un problema, puede que el servidor no haya encendido aun, porfavor espere 1 minuto y vuelva a intentarlo.";
            },
            position: toast.POSITION.BOTTOM_LEFT,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const mailSlice = createSlice({
  name: "mails",
  initialState: {
    mensajes: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMail.fulfilled, (state, action) => {
        state.mensajes = [...state.mensajes, action.payload];
        toast.success("El mensaje se envio correctamente!", {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 2000,
        });
      })
      .addCase(sendMail.rejected, (state, action) => {
        toast.error(action.payload, {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 2000,
        });
      });
  },
});

export default mailSlice.reducer;
