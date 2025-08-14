import Stock from "../models/Stock.js";

export const getCompanies = async (req, res) => {
  try {
    const companies = await Stock.find({}, { symbol: 1, name: 1, _id: 0 });
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getStockData = async (req, res) => {
  try {
    const stock = await Stock.findOne({ symbol: req.params.symbol });
    res.json(stock);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addOrUpdateMultipleStocks = async (req, res) => {
  try {
    const stocks = Array.isArray(req.body) ? req.body : [req.body];
    const results = [];

    for (let stockData of stocks) {
      const updatedStock = await Stock.findOneAndUpdate(
        { symbol: stockData.symbol }, // match by symbol
        stockData,                    // new data
        { new: true, upsert: true }   // create if not exist
      );
      results.push(updatedStock);
    }

    res.status(200).json({
      message: "Stocks added/updated successfully",
      stocks: results
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

