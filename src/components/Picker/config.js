import React from "react";

const marksStyle = {
  color: "#fff"
};

const temperatureMarks = {
  0: {
    style: marksStyle,
    label: <strong>0°C</strong>
  },
  22: {
    style: marksStyle,
    label: <strong>22°C</strong>
  },
  30: {
    style: marksStyle,
    label: <strong>30°C</strong>
  },
  50: {
    style: {
      color: "#f50"
    },
    label: <strong>50°C</strong>
  }
};

const humidityMarks = {
  0: {
    style: marksStyle,
    label: <strong>0%</strong>
  },
  23: {
    style: marksStyle,
    label: <strong>23%</strong>
  },
  40: {
    style: marksStyle,
    label: <strong>40%</strong>
  },
  60: {
    style: marksStyle,
    label: <strong>60%</strong>
  },
  100: {
    style: {
      color: "rgba(34, 167, 240, 1)"
    },
    label: <strong>100%</strong>
  }
};

export { temperatureMarks, humidityMarks };
