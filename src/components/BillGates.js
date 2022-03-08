import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

function BillGates() {
  return (
    <Container
      sx={{
        marginTop: 3,
      }}
    >
      <Box bgcolor="white" paddingY={5} borderRadius={2}>
        <Box
          sx={{
            display: "grid",
            justifyItems: "center",
          }}
        >
          <Avatar
            alt="Bill Gates"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bill_Gates_June_2015.png/640px-Bill_Gates_June_2015.png"
            sx={{
              width: 125,
              height: 125,
            }}
          />
          <Typography
            marginTop={3}
            variant="h4"
            color="#333232"
            fontWeight="bold"
          >
            Spend Bill Gates&apos; Money
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default BillGates;
