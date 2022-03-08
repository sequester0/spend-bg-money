import { useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { format } from "d3-format";

function Receipt() {
  const items = useSelector((state) => state.products.items);

  const filteredItems = items.filter((item) => item.amount > 0);

  const totalPrice = () => {
    let price = 0;
    filteredItems.map((item) => {
      price += item.amount * item.price;
    });
    return price;
  };

  return (
    <Container
      sx={{
        marginTop: 1,
      }}
    >
      {filteredItems.length > 0 && (
        <Box
          bgcolor="white"
          paddingY={3}
          borderRadius={2}
          sx={{
            display: "grid",
            justifyItems: "center",
          }}
        >
          <Typography
            component={"span"}
            fontSize={"28px"}
            color="#333232"
            fontWeight="bold"
            mb={2}
          >
            Your Receipt
          </Typography>

          {filteredItems.map((item) => (
            <Box
              display="flex"
              justifyItems="center"
              justifyContent="space-between"
              width="25%"
              key={item.id}
            >
              <Typography
                component={"span"}
                color="#333232"
                fontWeight="medium"
              >
                {item.name}
              </Typography>
              <Typography component={"span"} color="#333232">
                x{item.amount}
              </Typography>
              <Typography component={"span"} color="#24C486" fontWeight="bold">
                <Typography
                  component={"span"}
                  color="#24C486"
                  fontWeight="bold"
                >
                  {format("$,.2s")(item.price * item.amount)}
                </Typography>
                {/* <CurrencyFormat
                  value={item.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  format="$###m"
                /> */}
              </Typography>
            </Box>
          ))}
          {/* <Typography color="#333232" fontWeight="medium">
              Make a Movie
            </Typography>
            <Typography color="#333232">x1</Typography>
            <Typography color="#24C486" fontWeight="bold">
              $930m
            </Typography> */}
          <Box width="25%">
            <hr />
          </Box>
          <Box
            display="flex"
            justifyItems="center"
            justifyContent="space-between"
            width="25%"
          >
            <Typography fontSize={"18px"} color="#333232" fontWeight="bold">
              TOTAL
            </Typography>
            <Typography fontSize={"18px"} color="#24C58C" fontWeight="bold">
              <CurrencyFormat
                value={totalPrice()}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </Typography>
          </Box>
        </Box>
      )}
    </Container>
  );
}

export default Receipt;

/*
<Container
      sx={{
        marginTop: 1,
      }}
    >
      <Box
        bgcolor="white"
        paddingY={3}
        borderRadius={2}
        sx={{
          display: "grid",
          justifyItems: "center",
        }}
      >
        <Typography fontSize={"28px"} color="#333232" fontWeight="bold" mb={2}>
          Your Receipt
        </Typography>
        <Box
          display="flex"
          justifyItems="center"
          justifyContent="space-between"
          width="25%"
        >
          <Typography color="#333232" fontWeight="medium">
            Make a Movie
          </Typography>
          <Typography color="#333232">x1</Typography>
          <Typography color="#24C486" fontWeight="bold">
            $930m
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyItems="center"
          justifyContent="space-between"
          width="25%"
        >
          <Typography color="#333232" fontWeight="medium">
            Make a Movie
          </Typography>
          <Typography color="#333232">x1</Typography>
          <Typography color="#24C486" fontWeight="bold">
            $930m
          </Typography>
        </Box>
        <Box width="25%">
          <hr />
        </Box>
        <Box
          display="flex"
          justifyItems="center"
          justifyContent="space-between"
          width="25%"
        >
          <Typography fontSize={"18px"} color="#333232" fontWeight="bold">
            TOTAL
          </Typography>
          <Typography fontSize={"18px"} color="#24C58C" fontWeight="bold">
            $1,780,000,000
          </Typography>
        </Box>
      </Box>
    </Container>
*/
