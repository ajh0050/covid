import { DeathDemographics } from './DeathDemographics.js';

// how do I return only the objects that contain "group"?
// solution example let data = DeathDemographics.filter((foo)=>(foo.Group == 'By age'))
// also the foo in that example is just a temporary name for the objects that it is iterating through aka the data
// how do I return the values for a property with the name All COVID-19 Deaths (U07.1)? I had to do find and replace in VS code
// this can be done by square brackets around the string you want to retrieve 
// solution example rowOfData["All COVID-19 Deaths (U07.1)"]

//how do I add a new key and unique value pair to each object in the dataset? example "color": "#8884d8" but with different colors for each object?
// index example that was implemented already

const colorMerge = ["#226969", "#2E4475", "#403078", "#403078", "#AF3838", "#AF5A38", "#AF7338", "#FFDD00", "#98AF39", "#439831","#0A311E" ]

const ReverseOrder = DeathDemographics.reverse();
const AgeData = () => ReverseOrder.map((rowOfData, index)=>({"name": rowOfData.Indicator, "number of deaths": rowOfData.CovidDeaths, "fill": colorMerge[index]}));

export default AgeData;
