import ridewatchJson from "../ridewatchdata.json";

export default class DataService 
{

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