// unpack
function unpack(dataArr, index) {
    return dataArr.map(row=>row[index])
};

// retrieve info from samples file and print to console to verify
// function createSelection() {
d3.json("samples.json").then((data)=>{
    console.log(data);
    console.log(data.names);
    console.log(data.metadata);
    console.log(data.samples);

// define variables for use
var namesArray = data.names;

// add namesArray as dropdown selection
var value = document.getElementById("selDataset");
for(index in namesArray) {
    value.options[value.options.length] = new Option(namesArray[index], index);
}
})

// change everything on user selection
function indexIdNo(sample) {
    console.log(`sample`)
    d3.json("samples.json").then((data)=>{

        
    var dropdownMenu = d3.select("#selDataset");

    // Assign the value of the dropdown menu option to a variable
    var indexNo = sample;
    // var indexNo = dropdownMenu.property("value");
    console.log(indexNo);

    // demographics
    var PtId = data.metadata[indexNo];
    console.log(PtId);

    var id = PtId.id;
    console.log(id);

    var bbType = PtId.bbtype;
    console.log(bbType);

    var ethnicity = PtId.ethnicity;
    console.log(ethnicity);

    var gender = PtId.gender;
    console.log(gender);

    var age = PtId.age;
    console.log(age);

    var location = PtId.location;
    console.log(location);

    // bellybutton info
    var bbInfo = data.samples[indexNo];
    console.log(bbInfo);

    var otuIds=bbInfo.otu_ids.slice(0,10).reverse();
    var otuIdsAll=bbInfo.otu_ids;
    console.log(otuIds);
    console.log(otuIdsAll);

    // turn otu ids into OTU [number]
    var otuIdBarArray = []
    var otuIdBar = otuIds.forEach(element => otuIdBarArray.push(`OTU ${element}`));
    console.log(otuIdBarArray);


    // turn otu ids into OTU [number]
    var otuIdBarArrayAll = []
    var otuIdBarAll = otuIdsAll.forEach(element => otuIdBarArrayAll.push(`OTU ${element}`));
    console.log(otuIdBarArrayAll);

    var sampleValues=bbInfo.sample_values.slice(0,10).reverse();
    var sampleValuesAll=bbInfo.sample_values;
    console.log(sampleValues);
    console.log(sampleValuesAll);

    var otuLabels=bbInfo.otu_labels.slice(0,10).reverse();
    var otuLabelsAll=bbInfo.otu_labels;
    console.log(otuLabels);
    console.log(otuLabelsAll);

    // bar graph
    var trace1={
        type: "bar",
        x: sampleValues,
        y: otuIdBarArray,
        orientation: "h",
        text: otuLabels,
    };

    var data = [trace1];

    var layout = {
        title: `Belly Button Bacteria (OTU) by Values`,
        height: 600,
        width: 1000,

    };

    Plotly.newPlot("bar",data,layout);

    var trace2 = {
        x: otuIdsAll,
        y: sampleValuesAll,
        mode: 'markers',
        text: otuLabelsAll,
        marker: {
            color: otuIdsAll,
            size: sampleValuesAll,
            colorscale: 'Earth'
        }
      };
      
      var data = [trace2];
      
      var layout = {
        title: `Belly Button Bacteria (OTU) by Values`,
        showlegend: false,
        height: 1000,
        width: 1400,

      };
      
      Plotly.newPlot('bubble', data, layout);

       // Then, select the unordered list element by class name
        var list = d3.select(".summary");

        // remove any children from the list to
        list.html("");

        // append stats to the list
        list.append("li").text(`ID: ${id}`);
        list.append("li").text(`BB Type: ${bbType}`);
        list.append("li").text(`Ethnicity: ${ethnicity}`);
        list.append("li").text(`Gender: ${gender}`);
        list.append("li").text(`Age: ${age}`);
        list.append("li").text(`Loc: ${location}`);

    });
};
indexIdNo(0)