import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";

interface ProgressBarProps {
  progress: number; // A number between 0 and 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <View style={[styles.fill, { width: `${clampedProgress}%` }]} />
      </View>
      <Text style={styles.text}>{clampedProgress.toFixed(0)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  bar: {
    flex: 1,
    height: 10,
    backgroundColor: Colors.secondary,
    borderRadius: 5,
    overflow: "hidden",
    marginRight: 10,
  },
  fill: {
    height: "100%",
    backgroundColor: Colors.accent,
    borderRadius: 5,
  },
  text: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: "600",
  },
});

export default ProgressBar;