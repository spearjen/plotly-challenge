
// How to get just the top 10 OTUs found in that individual and keep integrity with otu_ids?
// What exactly am I supposed to be bubble graphing?
// Pass demographic values to index.html.

// unpack
function unpack(dataArr, index) {
    return dataArr.map(row=>row[index])
};

// retrieve info from samples file and print to console to verify
// function createSelection() {
d3.json("../../samples.json").then((data)=>{
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
function indexIdNo() {
    d3.json("../../samples.json").then((data)=>{
        console.log(data);
        console.log(data.names);
        console.log(data.metadata);
        
    var dropdownMenu = d3.select("#selDataset");

    // Assign the value of the dropdown menu option to a variable
    var indexNo = dropdownMenu.property("value");
    console.log(indexNo);

    // demographics
    var PtId = data.metadata[indexNo];
    console.log(PtId);

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

    var otuIds=bbInfo.otu_ids.slice(0,10);
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

    var sampleValues=bbInfo.sample_values.slice(0,10);
    var sampleValuesAll=bbInfo.sample_values;
    console.log(sampleValues);

    var otuLabels=bbInfo.otu_labels.slice(0,10);
    var otuLabelsAll=bbInfo.otu_labels;
    console.log(otuLabels);

    // bar graph
    var trace1={
        type: "bar",
        x: sampleValues,
        y: otuIdBarArray,
        orientation: "h",
        text: otuLabels
    };

    var data = [trace1];

    var layout = {
        title: `Belly Button Bacteria (OTU) by Values`,
        height: 600,
        width: 1000
    };

    Plotly.newPlot("bar",data,layout);

    var trace2 = {
        x: otuIdBarArrayAll,
        y: sampleValuesAll,
        mode: 'markers',
        text: otuLabelsAll,
        marker: {
            color: otuIdsAll,
            size: sampleValuesAll,
        }
      };
      
      var data = [trace2];
      
      var layout = {
        showlegend: false,
        height: 1000,
        width: 1500,

      };
      
      Plotly.newPlot('bubble', data, layout);

    //   const oldli1 = document.getElementById("PtId");
    //   const newli1 = document.createElement("li");
    //   newDiv.innterHTML = `<li id="PtId1"> ID: ${PtId}</li>`;
    //   oldli1.replace(oldli1,newli1);

    //   <li id="ethnicity"> Ethnicity: ${ethnicity}</li>
    //     <li id="gender"> Gender: ${gender}</li><li id="age"> Age: ${age}</li><li id="location">Location: ${location}</li></ul></div>`;
    //   oldDiv.replace(newDiv,oldDiv);
    });


};