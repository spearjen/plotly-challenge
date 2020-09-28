d3.json("../../samples.json").then((data)=>{
    console.log(data);

    var namesArray = data.names;

    var select = document.getElementById("selDataset");
    for(index in namesArray) {
        select.options[select.options.length] = new Option(namesArray[index], index);
    }
});

function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
}  

