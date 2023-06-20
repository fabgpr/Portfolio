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
            render({ data }) {
              if (
                data?.response?.data?.message ===
                "Debes llenar todos los campos"
              ) {
                return `${data.response.data.message}`;
              } else
                return "Puede que el servidor no haya encendido, porfavor espere un minuto y vuelva a intentarlo";
            },
            position: toast.POSITION.BOTTOM_LEFT,
          },
        }
      );
      console.log(response);

      return response.data;
    } catch (error) {
      console.log(error);
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
    builder.addCase(sendMail.fulfilled, (state, action) => {
      state.mensajes = [...state.mensajes, action.payload];
      toast.success("El mensaje se envio correctamente!", {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 2000,
      });
    });
    // .addCase(sendMail.rejected, (state, action) => {
    //   action.payload === "Debes llenar todos los campos"
    //     ? toast.error(action.payload, {
    //         position: toast.POSITION.BOTTOM_LEFT,
    //         autoClose: 2000,
    //       })
    //     : null;
    // });
  },
});

export default mailSlice.reducer;
