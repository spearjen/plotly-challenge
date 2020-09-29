
// unpack
function unpack(dataArr, index) {
    return dataArr.map(row=>row[index])
};

function buildPlot(otuIds) {
    d3.json("../../samples.json").then(function(data) {
        var name = data.names;
        var otuIds = data.samples.otu_ids;
        var otuValues = data.samples.sample_values;
        console.log(otuIds);
        console.log(otuValues);
        var unpkdDataOtuIds = unpack(data.samples,1);
        var unpkdDataOtuValues = unpack(data.samples,2);

        var trace1={
            type: "bar",
            // name: names,
            x: unpkdDataOtuValues,
            y: unpkdDataOtuIds,
            orientation: "h"
        };

        var data = [trace1];

        var layout = {
            title: `OTU ${otuIds}`,
        };

        Plotly.newPlot("plot",data,layout);
    });
}

buildPlot('940')
  
// function init() {
//     data = [{selDataset}]
//     Plotly.newPlot("plot",data);
// };

// // retrieve info from samples file
// function buttonIds (){
//     d3.json("../../samples.json").then((data)=>{
//         console.log(data);

//         // define variables for use
//         var namesArray = data.names;

//         // add namesArray as dropdown selection
//         var value = document.getElementById("selDataset");
//         for(index in namesArray) {
//             value.options[value.options.length] = new Option(namesArray[index], index);
//         }
//     });

// // function to get the Index No. of data associated w/user selection
// function indexIdNo() {
//     var dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a variable
//     var indexNo = dropdownMenu.property("value");
//     console.log( indexNo);

// function retrieveIdData() {
//     var iNames= Object.values(samples.names.indexNo)
//     var iMeta = Object.values(samples.metadata.indexNo);
//     var iSamples = Object.values(samples.samples.indexNo);
//     console.log(iNames);
//     console.log(iMeta);
//     console.log(iSamples);
// };

// // // User Selection handler
// // function handleSelection() {
// //     // Prevent the page from refreshing
// //     d3.event.preventDefault();
  
// //     // Select the input value from the form
// //     var idNo = d3.select("#selDataset").node().value;
// //     console.log(idNo);
  
//     // clear the input value
//     d3.select("#selDataset").node().value = "";
  
//     // Build the plot with the new stock
// //     buildPlot(stock);
// //   }

// retrieveIdData()

// function buildBar() {
//     var idSelected = d3.select('#selDataset').property('value')
//     idSelected 

// }

//     // // Call function to update the chart
//     // updatePlotly(data);
//   }}
// // init()

// // horizontal bar
// // trace = [{
// //     type: 'bar',
// //     x: [20, 14, 23],
// //     y: ['giraffes', 'orangutans', 'monkeys'],
// //     orientation: 'h'
// //   }];
  
// //   Plotly.newPlot('myDiv', data);

