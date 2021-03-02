const countyStateURL =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";

const educationURL =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";

let width = 950;
let height = 650;
// Got the color scheme from https://observablehq.com/@d3/color-schemes. Can make it cut into reasonable amount such as 4-11 but chose the squential array because I am fancy.
let colors = [
  "#fff7fb",
  "#fef6fb",
  "#fef6fa",
  "#fdf5fa",
  "#fdf5fa",
  "#fcf4fa",
  "#fbf4f9",
  "#fbf3f9",
  "#faf3f9",
  "#faf2f8",
  "#f9f2f8",
  "#f8f1f8",
  "#f8f1f8",
  "#f7f0f7",
  "#f7f0f7",
  "#f6eff7",
  "#f5eff6",
  "#f5eef6",
  "#f4eef6",
  "#f3edf6",
  "#f3edf5",
  "#f2ecf5",
  "#f1ecf5",
  "#f1ebf4",
  "#f0ebf4",
  "#efeaf4",
  "#efe9f3",
  "#eee9f3",
  "#ede8f3",
  "#ede8f2",
  "#ece7f2",
  "#ebe7f2",
  "#eae6f1",
  "#eae5f1",
  "#e9e5f1",
  "#e8e4f0",
  "#e7e3f0",
  "#e7e3f0",
  "#e6e2ef",
  "#e5e2ef",
  "#e4e1ef",
  "#e3e0ee",
  "#e3e0ee",
  "#e2dfee",
  "#e1deed",
  "#e0deed",
  "#dfdded",
  "#dedcec",
  "#dddcec",
  "#dcdbec",
  "#dcdaeb",
  "#dbdaeb",
  "#dad9ea",
  "#d9d8ea",
  "#d8d8ea",
  "#d7d7e9",
  "#d6d6e9",
  "#d5d6e9",
  "#d4d5e8",
  "#d3d4e8",
  "#d2d4e8",
  "#d1d3e7",
  "#d0d2e7",
  "#ced2e6",
  "#cdd1e6",
  "#ccd1e6",
  "#cbd0e5",
  "#cacfe5",
  "#c9cfe5",
  "#c8cee4",
  "#c7cde4",
  "#c5cde4",
  "#c4cce3",
  "#c3cbe3",
  "#c2cbe3",
  "#c0cae2",
  "#bfc9e2",
  "#bec9e1",
  "#bdc8e1",
  "#bbc7e1",
  "#bac7e0",
  "#b9c6e0",
  "#b8c6e0",
  "#b6c5df",
  "#b5c4df",
  "#b4c4df",
  "#b2c3de",
  "#b1c2de",
  "#afc2de",
  "#aec1dd",
  "#adc1dd",
  "#abc0dc",
  "#aabfdc",
  "#a8bfdc",
  "#a7bedb",
  "#a6bddb",
  "#a4bddb",
  "#a3bcda",
  "#a1bcda",
  "#a0bbda",
  "#9ebad9",
  "#9dbad9",
  "#9bb9d9",
  "#9ab8d8",
  "#98b8d8",
  "#97b7d7",
  "#95b6d7",
  "#94b6d7",
  "#92b5d6",
  "#91b5d6",
  "#8fb4d6",
  "#8db3d5",
  "#8cb3d5",
  "#8ab2d4",
  "#89b1d4",
  "#87b1d4",
  "#85b0d3",
  "#84afd3",
  "#82afd2",
  "#81aed2",
  "#7fadd2",
  "#7dadd1",
  "#7bacd1",
  "#7aabd0",
  "#78abd0",
  "#76aad0",
  "#75a9cf",
  "#73a9cf",
  "#71a8ce",
  "#6fa7ce",
  "#6ea6cd",
  "#6ca6cd",
  "#6aa5cd",
  "#68a4cc",
  "#66a3cc",
  "#65a3cb",
  "#63a2cb",
  "#61a1ca",
  "#5fa0ca",
  "#5da0c9",
  "#5b9fc9",
  "#5a9ec9",
  "#589dc8",
  "#569dc8",
  "#549cc7",
  "#529bc7",
  "#509ac6",
  "#4e99c6",
  "#4d99c5",
  "#4b98c5",
  "#4997c4",
  "#4796c4",
  "#4595c3",
  "#4394c3",
  "#4294c2",
  "#4093c2",
  "#3e92c1",
  "#3c91c1",
  "#3b90c1",
  "#398fc0",
  "#378ec0",
  "#358dbf",
  "#348cbf",
  "#328cbe",
  "#308bbe",
  "#2f8abd",
  "#2d89bd",
  "#2b88bc",
  "#2a87bc",
  "#2886bb",
  "#2785bb",
  "#2584ba",
  "#2483b9",
  "#2282b9",
  "#2181b8",
  "#1f80b8",
  "#1e7fb7",
  "#1c7eb7",
  "#1b7eb6",
  "#1a7db5",
  "#197cb5",
  "#177bb4",
  "#167ab4",
  "#1579b3",
  "#1478b2",
  "#1377b1",
  "#1276b1",
  "#1175b0",
  "#1074af",
  "#0f74af",
  "#0e73ae",
  "#0d72ad",
  "#0c71ac",
  "#0c70ab",
  "#0b6fab",
  "#0a6faa",
  "#0a6ea9",
  "#096da8",
  "#096ca7",
  "#086ba6",
  "#086ba5",
  "#076aa4",
  "#0769a3",
  "#0768a2",
  "#0667a1",
  "#0667a0",
  "#06669f",
  "#06659e",
  "#05649d",
  "#05649c",
  "#05639b",
  "#056299",
  "#056198",
  "#056097",
  "#046096",
  "#045f95",
  "#045e93",
  "#045d92",
  "#045c91",
  "#045c90",
  "#045b8e",
  "#045a8d",
  "#04598c",
  "#04588a",
  "#045789",
  "#045687",
  "#045586",
  "#045585",
  "#045483",
  "#045382",
  "#035280",
  "#03517f",
  "#03507d",
  "#034f7c",
  "#034e7a",
  "#034d79",
  "#034c77",
  "#034b75",
  "#034a74",
  "#034972",
  "#034871",
  "#03476f",
  "#03466d",
  "#03456c",
  "#03446a",
  "#034369",
  "#034267",
  "#024165",
  "#023f64",
  "#023e62",
  "#023d60",
  "#023c5f",
  "#023b5d",
  "#023a5b",
  "#02395a",
  "#023858",
];

tooltip = d3
  .select("#choropleth-map")
  .append("div")
  .attr("id", "tooltip")
  .style("opacity", "0");

svgContainer = d3
  .select("#choropleth-map")
  .append("svg")
  .attr("class", "graph")
  .attr("width", width)
  .attr("height", height);

// First thing is to draw map. We do this by calling queue with d3 because there are two files we want to get. Then we call await with the function name we are using to make the map
d3.queue()
  .defer(d3.json, countyStateURL)
  .defer(d3.json, educationURL)
  .await(mapFunction);

// We can give the paramerters new names. They are still the same data we upload from the queue
function mapFunction(error, usMap, education) {
  if (error) {
    // This handles situation of files not loading
    throw error;
  }

  /* We need to create a function where we take the  id from the usMap array and match it with the fib (id) of the education array. This way we can call on the fib information and display county information. */
  function getCountyByMatchFipsWithId(dataId) {
    let county = education.find((element) => element.fips == dataId);
    // We use find instead of filter so it returns an object. Filter can also work but it will return an array of just one object. So later when calling on the array we would have to add [0] after function call in order to display information. Using find takes the [0] out of the way and makes it more concise as we are only looking for one county.
    return county;
  }

  // Make a scale to set color for amount of education. Then we can use that in the fill value for the counties.
  let bachelorOnly = education.map((element) => element.bachelorsOrHigher); // Array of the bachorlorsOrHigher information only
  let minBachelors = d3.min(bachelorOnly);
  let maxBachelors = d3.max(bachelorOnly);

  let colorScale = d3
    .scaleLinear()
    .domain(
      d3.range(
        minBachelors,
        maxBachelors,
        (maxBachelors - minBachelors) / colors.length
      )
    )
    // The math at the end takes the differnece between max and min and cuts it up into the amount of colors that we decide to use. Meaning the domain has as many options as colors array that are spread out evenly
    .range(colors);

  // This does the actual drawing of the path when we call it later for the value of the "d" (direction) of the path
  const path = d3.geoPath();

  // Call on the counties
  svgContainer
    .selectAll("path")
    .data(topojson.feature(usMap, usMap.objects.counties).features) // here you convert topojson data to geojson data. I have no idea how the math works. Topojson is like a 'compressed' version of geojson
    .enter()
    .append("path")
    .attr("d", path) // Direction is given by geoPath()
    .attr("class", "county")
    .attr("fill", (d, i) =>
      // Use the colorScale and the specific county's bachelorsOrHigher percentage to choose color
      colorScale(getCountyByMatchFipsWithId(d.id).bachelorsOrHigher)
    )

    .attr("data-fips", (d, i) => d.id) // Test wants this to be the data's id
    .attr(
      "data-education",
      (d, i) => getCountyByMatchFipsWithId(d.id).bachelorsOrHigher
    )
    .on("mouseover", function (d, i) {
      tooltip
        .style("opacity", ".85")
        .style("left", d3.event.pageX + 20 + "px") // Places tooltip to the right of mouse position
        .style("top", d3.event.pageY - 40 + "px") // Places tooltip to the left of mouse position
        .html(
          // Use getCounty function then display the things you want with HTML
          getCountyByMatchFipsWithId(d.id).area_name +
            ", " +
            getCountyByMatchFipsWithId(d.id).state +
            ": " +
            getCountyByMatchFipsWithId(d.id).bachelorsOrHigher +
            "%"
        )
        .attr(
          "data-education",
          getCountyByMatchFipsWithId(d.id).bachelorsOrHigher
        );
    })
    .on("mouseout", function (d) {
      tooltip.style("opacity", "0").style("top", -30000 + "px"); // Add this top line to move tooltip off svg when mouseout so the tooltip is not covering another datapoint. Thus being able to use mouseover for points that would otherwise be behind the tooltip (needs to be negative)
    });

  // Us state borders for map
  svgContainer
    // Don't need to selct all and such as we are just adding a path and meshing it with datum and topojson.mesh
    .append("path")
    .attr("class", "states")
    .attr("fill", "none") // Doesn't fill in the area between state borders with black
    .attr("stroke", "black") // Gives the stroke a color
    .datum(topojson.mesh(usMap, usMap.objects.states), (a, b) => a !== b) // Meshes the state borders with county paths and places the state borders on top of the counties with the function saying a !==b.
    .attr("d", path);

  // Start legend here
  let numberOfBars = colors.length; // Number of bars is the amount of colors we use in our scale
  let legendWidth = width / 5; // one fifth of the svg width
  let barWidth = legendWidth / numberOfBars;
  let barHeight = 20;

  // Set up legend by itself and give it an id before appending rect to pass tests.
  let legend = svgContainer
    .append("g")
    .attr("id", "legend")
    .attr("transform", "translate(" + (width - 300) + ",0)");

  legend
    .append("g")
    .selectAll("rect")
    .data(colors) // Use colors array as we will be appending one rect for each color to put in legend
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * barWidth)
    .attr("y", 40)
    .attr("width", barWidth + 1) // Added the 1 so the bar goes into the bar beside it making it get rid of the little gap between each rect (makes it look smooth like butter boy)
    .attr("height", barHeight + "px")
    .style("fill", (d, i) => colors[i]);

  // set Scale for legend so that the minBachelors and maxBachelors fit in the legend (0 and the legend's Width)
  legendScale = d3
    .scaleLinear()
    .domain([minBachelors, maxBachelors])
    .range([0, legendWidth]);

  legendAxis = d3
    .axisBottom()
    .scale(legendScale) // Make an axis for the legend and add a percent sign at the end of each tick to show percentage
    .tickFormat((element) => element + "%");

  svgContainer
    .append("g") // Append "g" and call legendAxis placing it under the legend with transform
    .attr("transform", "translate(" + (width - 300) + ", " + 60 + ")")
    .call(legendAxis)
    .attr("id", "legend-axis");
}
