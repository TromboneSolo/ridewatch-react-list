
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


export default class RideWatch
{
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