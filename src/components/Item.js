import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { changeAmount, setLastItem } from "../redux/product/productSlice";

function Item({ item }) {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.products.money);
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(item.amount);
  }, []);

  const currencyFormat = (num) => {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const handleChange = (e) => {
    if (
      money + item.amount * item.price <
      item.price * Number(e.target.value)
    ) {
      setValue(Number(value));
    } else {
      setValue(Number(e.target.value));
      if (value > 0) {
        dispatch(changeAmount({ id: item.id, amount: e.target.value }));
      }
      if (value <= 0) {
        setValue(0);
      }
    }
  };

  const handleBuy = () => {
    if (money < item.price) {
      setValue(Number(value));
    } else {
      setValue(Number(value + 1));
      dispatch(changeAmount({ id: item.id, amount: value + 1 }));
      dispatch(setLastItem({ price: item.price, type: "buy" }));
    }
  };

  const handleSell = () => {
    if (value > 0) {
      setValue(value - 1);
      dispatch(changeAmount({ id: item.id, amount: value - 1 }));
      dispatch(setLastItem({ price: item.price, type: "sell" }));
    }
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box>
        <img
          width={130}
          height={120}
          src={item.img}
          alt="placeholder"
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Typography variant="h6" color="#333232" fontWeight="bold">
        {item.name}
      </Typography>
      <Box textAlign="center" color="green">
        <Typography fontSize={20} color="#24C58C">
          ${currencyFormat(item.price)}
        </Typography>
      </Box>

      <Box display="inline-block">
        <Button
          style={{
            maxWidth: "80px",
            maxHeight: "40px",
            minWidth: "80px",
            minHeight: "40px",
          }}
          variant="contained"
          color="error"
          disabled={Number(value) === 0}
          onClick={handleSell}
        >
          Sell
        </Button>
        <TextField
          value={value}
          type="number"
          inputProps={{ min: 0, style: { textAlign: "center" } }}
          size="small"
          sx={{ marginLeft: 1, marginRight: 1, width: "80px" }}
          onChange={handleChange}
        />
        <Button
          style={{
            maxWidth: "80px",
            maxHeight: "40px",
            minWidth: "80px",
            minHeight: "40px",
          }}
          variant="contained"
          color="success"
          onClick={handleBuy}
        >
          Buy
        </Button>
      </Box>
    </Box>
  );
}

export default Item;
