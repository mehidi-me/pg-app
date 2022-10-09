import { Box, FormControl, Input, WarningOutlineIcon } from "native-base";
import React, { useContext } from "react";

const AppInputText = ({ icon, width = "100%", ...otherProps }) => {
  return (
    <Box alignItems="center">
      <FormControl isInvalid w="75%" maxW="300px">
        <FormControl.Label>Password</FormControl.Label>
        <Input placeholder="Enter password" />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Try different from previous passwords.
        </FormControl.ErrorMessage>
      </FormControl>
    </Box>
  );
};

export default AppInputText;
