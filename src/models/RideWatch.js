
/*
      "id": "151",
      "DX": true,

      "series": "misc",
      "name": "Amazon Omega",
      "katakana": "アマゾンオメガ",
      "year": "2016",
      "primaryColor": "black",
      "secondaryColor": "green"

*/


// RideWatch is the data model for a single watch.
// It defines the shape of every watch object in ridewatchdata.json.
export default class RideWatch
{
    // id            - unique identifier used for localStorage keys and image filenames
    // dx            - true = DX (Deluxe) release, false = GP (General Purpose) release
    // series        - the Kamen Rider series this watch belongs to (e.g. "zio", "build")
    // name          - English display name
    // katakana      - Japanese katakana display name
    // year          - release year
    // primaryColor  - dominant color of the watch face
    // secondaryColor - accent color of the watch face
    constructor(id, dx, series, name, katakana, year, primaryColor, secondaryColor)
    {
        this.id = id || "";
        this.DX = dx || true;
        this.series = series || "";
        this.name = name || "";
        this.katakana = katakana || "";
        this.year = year || "";
        this.primaryColor = primaryColor || "";
        this.secondaryColor = secondaryColor || "";
    }
}