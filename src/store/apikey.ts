import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ApiKeyState {
  apiKey?: string;
}

const initialState: ApiKeyState = { apiKey: undefined };

const apiKeySlice = createSlice({
  name: 'apiKey',
  initialState,
  reducers: {
    setApiKey(state, action: PayloadAction<string>) {
      state.apiKey = action.payload;
    },
    clearApiKey(state) {
      state.apiKey = undefined;
    },
  },
});

export const { clearApiKey, setApiKey } = apiKeySlice.actions;
export default apiKeySlice.reducer;
