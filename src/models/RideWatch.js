
/*
      "id": "151",
      "DX": true,

      "series": "misc",
      "name": "Amazon Omega",
      "katakana": "アマゾンオメガ",
      "year": "2016",
      "imagesource": "https://i.imgur.com/YK5wmTk.png",
      "primaryColor": "black",
      "secondaryColor": "green"

*/


export default class RideWatch
{
    constructor(id, dx, series, name, katakana, year, imageSource, primaryColor, secondaryColor)
    {
        this.id = id || "";
        this.DX = dx || true;
        this.series = series || "";
        this.name = name || "";
        this.katakana = katakana || "";
        this.year = year || "";
        this.imageSource = imageSource || "";
        this.primaryColor = primaryColor || "";
        this.secondaryColor = secondaryColor || "";
    }
}