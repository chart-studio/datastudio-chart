export const message = {
  tables: {
    DEFAULT: [
      {
        labels: ["Impressions"],
        effectif: [12000],
      },
      {
        labels: ["Add To Cart"],
        effectif: [5700],
      },
      {
        labels: ["Buy"],
        effectif: [360],
      },
    ],
    dateRanges: {},
    fields: {
      dimID: [
        {
          id: "labels",
          name: "labels",
          type: "TEXT",
          concept: "DIMENSION",
        },
      ],
      metricID: [
        {
          id: "effectif",
          name: "effectif",
          type: "NUMBER",
          concept: "METRIC",
        },
      ],
    },
    style: {},
  },
};
