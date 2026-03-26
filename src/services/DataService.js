import ridewatchJson from "../ridewatchdata.json";

// Converts a name string into a 4-character Soundex phonetic code.
// This allows fuzzy name matching — e.g. "Zio" and "Zi-O" will produce the same code.
// maxLength limits how many characters of the name are considered before encoding.
function soundex(name, maxLength)
{
    let s = [];
    let si = 1;
    let c;

    //              ABCDEFGHIJKLMNOPQRSTUVWXYZ
    let mappings = "01230120022455012623010202";
    name = name.replaceAll(" ","").replaceAll("-","");
    if (name.length >= maxLength)
    {
      name = name.substring(0, maxLength);
    }

    s[0] = name[0].toUpperCase();

    for(let i = 1, l = name.length; i < l; i++)
    {
        c = (name[i].toUpperCase()).charCodeAt(0) - 65;

        if(c >= 0 && c <= 25)
        {
            if(mappings[c] !== '0')
            {
                if(mappings[c] !== s[si-1])
                {
                    s[si] = mappings[c];
                    si++;
                }

                if(si > 3)
                {
                    break;
                }
            }
        }
    }

    if(si <= 3)
    {
        while(si <= 3)
        {
            s[si] = '0';
            si++;
        }
    }

    return s.join("");
}

// DataService handles all data access and filtering for the watch catalog.
// It reads from ridewatchdata.json and applies filters based on search criteria.
export default class DataService
{

    // Fetches all watches and applies filters based on the search object.
    // Filters are applied sequentially — each step narrows the list further.
    // The search object contains: ownedSearch, nameSearch, primaryColorSearch,
    // secondaryColorSearch, and DX.
    fetch(search)
    {
        var filteredList = this.fetchAll();
        let a;

        // Filter by owned status using localStorage
        if (search.ownedSearch !== "all") {
          if (search.ownedSearch === "owned") {
            filteredList = filteredList.filter(watch => {
              a = localStorage.getItem(watch.id)
              return watch.id === a;
            });
          } else {
            filteredList = filteredList.filter(watch => {
              return watch.id !== localStorage.getItem(watch.id);
            });
          }
        }

        // Filter by name — tries an exact match first, then falls back to Soundex
        // fuzzy matching if no exact results are found
        if (search.nameSearch !== "") {
          var nameFilteredList = filteredList.filter(watch => {
            return watch.name === search.nameSearch;
          });
          if (nameFilteredList.length<1)
          {
            var soundexName = soundex(search.nameSearch, 5);
            filteredList = filteredList.filter(watch => {
                return (soundex(watch.name, 5) === soundexName);
            })
          }
          else {
            filteredList = nameFilteredList;
          }
        }

        // Filter by primary color
        if (search.primaryColorSearch !== "all") {
          filteredList = filteredList.filter(watch => {
            return watch.primaryColor === search.primaryColorSearch;
          });
        }

        // Filter by secondary color
        if (search.secondaryColorSearch !== "all") {
          filteredList = filteredList.filter(watch => {
            return watch.secondaryColor === search.secondaryColorSearch;
          });
        }

        // Filter by DX (true) or GP (false); null means show both
        if (search.DX !== null) {
          filteredList = filteredList.filter(watch => {
            return watch.DX === search.DX;
          });
        }

        console.group("Filtered by Search");
        console.info(search);
        console.info(filteredList);
        console.groupEnd();
        return filteredList;
    }

    // Returns all watches from ridewatchdata.json as an array.
    fetchAll()
    {
        var result = ridewatchJson.watch.map(rw =>{
            return rw;
        })
        return result;
    }

    // Returns an array of unique series names from the watch list.
    // If no watch list is provided, fetches all watches first.
    // Used by Checklist to know which series sections to render.
    fetchUniqueSeries(allWatches)
    {
        if (!allWatches)
        {
            allWatches = this.fetchAll();
        }

        var result = [];
        allWatches.filter(function(watch){
          var i = result.findIndex(x => (x === watch.series));
          if(i <= -1){
                result.push(watch.series);
          }
          return null;
        });

        return result;

    }


}