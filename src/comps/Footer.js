import React from "react";
import { Box, Container, Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <Box component="footer" m={6}>
      <Container>
        <Typography
          align="center"
          color="textSecondary"
          display="block"
          variant="overline"
        >
          &copy; 2020{" "}
          {new Date().getFullYear() === 2020
            ? null
            : ` - ${new Date().getFullYear()} `}
          David Andrews
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
