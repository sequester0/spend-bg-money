import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <Box bgcolor="white" paddingY={3}>
      <Container>
        <Typography variant="h5" color="#333232" fontWeight="bold">
          Spend Bill Gates&apos; Money
        </Typography>
      </Container>
    </Box>
  );
}

export default React.memo(Header);
