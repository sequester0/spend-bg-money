import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import CountUp from "react-countup";

function Money() {
  const money = useSelector((state) => state.products.money);

  return (
    <Container
      sx={{
        marginTop: 1,
        marginBottom: 1,
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(to bottom, #2CCA74, #1ABD9B)",
        }}
        padding={3}
        display="flex"
        justifyContent="center"
        borderRadius={2}
      >
        <Typography variant="h5" color="white" fontWeight="bold">
          <CountUp
            start={100000000000}
            end={money}
            duration={0.9}
            separator=","
            prefix="$"
          />
        </Typography>
      </Box>
    </Container>
  );
}

export default Money;
