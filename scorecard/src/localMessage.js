import { ConceptType, FieldType } from "@google/dscc";

export const message = {
  tables: {
    DEFAULT: [
      {
        date: ["20181201"],
        effectif: [12994],
      },
      {
        date: ["20181206"],
        effectif: [6110],
      },
      {
        date: ["20181207"],
        effectif: [38873],
      },
      {
        date: ["20181208"],
        effectif: [33951],
      },
      {
        date: ["20181212"],
        effectif: [23468],
      },
      {
        date: ["20181213"],
        effectif: [92688],
      },
      {
        date: ["20181214"],
        effectif: [69336],
      },
      {
        date: ["20181215"],
        effectif: [159397],
      },
      {
        date: ["20181221"],
        effectif: [48492],
      },
      {
        date: ["20181224"],
        effectif: [44708],
      },
      {
        date: ["20181226"],
        effectif: [37324],
      },
      {
        date: ["20181227"],
        effectif: [28108],
      },
      {
        date: ["20181229"],
        effectif: [21236],
      },
    ],
    COMPARISON: [
      {
        date: ["20181102"],
        effectif: [271132],
      },
      {
        date: ["20181114"],
        effectif: [116543],
      },
      {
        date: ["20181122"],
        effectif: [68012],
      },
      {
        date: ["20181130"],
        effectif: [53266],
      },
      {
        date: ["20181123"],
        effectif: [49036],
      },
      {
        date: ["20181121"],
        effectif: [44253],
      },
      {
        date: ["20181116"],
        effectif: [38329],
      },
      {
        date: ["20181031"],
        effectif: [36512],
      },
      {
        date: ["20181120"],
        effectif: [34038],
      },
      {
        date: ["20181109"],
        effectif: [23983],
      },
      {
        date: ["20181103"],
        effectif: [22310],
      },
      {
        date: ["20181110"],
        effectif: [16955],
      },
      {
        date: ["20181128"],
        effectif: [4099],
      },
    ],
  },
  dateRanges: {
    DEFAULT: {
      start: "20181201",
      end: "20181231",
    },
    COMPARISON: {
      start: "20181031",
      end: "20181130",
    },
  },
  fields: {
    date: [
      {
        id: "qt_tluv4zutrc",
        name: "Created",
        type: "YEAR_MONTH_DAY",
        concept: "DIMENSION",
      },
    ],
    effectif: [
      {
        id: "qt_mdvv4zutrc",
        name: "Num Votes",
        type: "NUMBER",
        concept: "METRIC",
      },
    ],
  },
  interactions: {},
  colorMap: {},
};
