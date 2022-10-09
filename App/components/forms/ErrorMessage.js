import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

const ErrorMessage = ({ error, visible }) => {
  const styles = useStyles();

  if (!visible || !error) return null;

  return <Text style={styles.text}>{error}</Text>;
};

export default ErrorMessage;

const useStyles = () =>
  StyleSheet.create({
    text: {
      color: "red",
    },
  });
