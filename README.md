Plotly Challenge

In this assignment, I built an interactive dashboard to explore a Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

I used the D3 library to read in a sample json file.

I created a horizontal bar chart to display the top 10 OTUs found in an individual.  I used sample values, otu id labels, and otu descriptions as hovertext for the bar chart.

I created a bubble chart that displays all sample values for each individual, with sized bubbles indicating the count of each microbe set and colors distinguishing OTUs.  Hove text shows full details of microbe set.

I created a dropdown selection, and the user's selection displays the individual's demographic information.

Upon selection of an individual's id number, the charts and demographic information update to reflect sample values for that individual.
