import ridewatchJson from "../ridewatchdata.json";

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
      name = name.substring(1, maxLength);
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

export default class DataService 
{

    fetch(search)
    {
        var filteredList = this.fetchAll();
        let a;
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
        if (search.primaryColorSearch !== "all") {
          filteredList = filteredList.filter(watch => {
            return watch.primaryColor === search.primaryColorSearch;
          });
        }
        if (search.secondaryColorSearch !== "all") {
          filteredList = filteredList.filter(watch => {
            return watch.secondaryColor === search.secondaryColorSearch;
          });
        }
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

    fetchAll()
    {
        var result = ridewatchJson.watch.map(rw =>{
            return rw;
        })
        return result;
    }

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


        //const result = allWatches.filter((x, i, a) => a.indexOf(x) == i)


        /*
        var result = allWatches.map(w => {
            if (result.some(r => r!==w.series))
            {
                return w.series;
            }
        })
        */
        return result;
    
    }


}