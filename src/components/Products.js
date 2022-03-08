import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import Item from "./Item";

function Products() {
  const items = useSelector((state) => state.products.items);

  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        rowGap={1}
        columnGap={1}
        gridRow={3}
      >
        {items.map((item) => (
          <Box
            key={item.id}
            padding={4}
            bgcolor="white"
            borderRadius={2}
            width={314}
            height="100%"
          >
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Item item={item} />
            </Grid>
          </Box>
        ))}
      </Grid>
    </Container>
  );
}

export default Products;

{
  /* <Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowGap={1}
        columnGap={1}
        gridRow={2}
      >
        <Box padding={4} bgcolor="white" width={302} borderRadius={2}>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              width={130}
              height={120}
              src="https://via.placeholder.com/130x120.png"
              alt="placeholder"
            />
            <Typography variant="h6" color="#333232" fontWeight="bold">
              Product Name
            </Typography>
            <Box textAlign="center" color="green">
              <Typography fontSize={20} color="#24C58C">
                $2
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
              >
                Sell
              </Button>
              <TextField
                inputProps={{ min: 0, style: { textAlign: "center" } }}
                type="number"
                size="small"
                sx={{ marginLeft: 1, marginRight: 1, width: "80px" }}
                InputLabelProps={{
                  shrink: true,
                }}
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
              >
                Buy
              </Button>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Container> */
}
