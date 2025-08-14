import express from "express";
import { getCompanies, getStockData, addOrUpdateMultipleStocks  } from "../controllers/stockController.js";

const router = express.Router();

router.get("/companies", getCompanies);
router.get("/stocks/:symbol", getStockData);
router.post("/stocks", addOrUpdateMultipleStocks ); 

export default router;
