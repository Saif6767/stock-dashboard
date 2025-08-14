import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
  symbol: String,
  name: String,
  dates: [String],
  prices: [Number],
  metrics: {
    high52: Number,
    low52: Number,
    avgVolume: Number
  }
});

export default mongoose.model("Stock", stockSchema);
