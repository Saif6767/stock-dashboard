import { useState, useEffect } from "react";
import axios from "axios";

export default function useStockData() {
  const [companies, setCompanies] = useState([]);
  const [selected, setSelected] = useState(null);
  const [stock, setStock] = useState(null);

  // Fetch companies list
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/companies");
        setCompanies(res.data);
        if (res.data.length > 0) setSelected(res.data[0]);
      } catch (err) {
        console.error("Error fetching companies:", err);
      }
    };
    fetchCompanies();
  }, []);

  // Fetch selected company stock data
  useEffect(() => {
    const fetchStockData = async () => {
      if (!selected) return;
      try {
        const res = await axios.get(`http://localhost:5000/api/stocks/${selected.symbol}`);
        setStock(res.data);
      } catch (err) {
        console.error("Error fetching stock data:", err);
      }
    };
    fetchStockData();
  }, [selected]);

  return { companies, selected, setSelected, stock };
}
