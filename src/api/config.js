const api = axios.create({
  baseURL: "http://api.openweathermap.org/data/3.0/triggers"
});

const getTrigger = temp => {
  return JSON.stringify({
    time_period: {
      start: {
        expression: "after",
        amount: 132000000
      },
      end: {
        expression: "after",
        amount: 432000000
      }
    },
    conditions: [
      {
        name: "temp",
        expression: "$eq",
        amount: temp
      },
      {
        name: "humidity",
        expression: "$eq",
        amount: "50%"
      }
    ],
    area: [
      {
        type: "Point",
        coordinates: [53, 37]
      }
    ]
  });
};

export { getTrigger, api };
