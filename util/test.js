
var placeIDDiv = d3.select("body")
    .append("div")
    .attr("id","placeIDWidget");

var placeIDInternalDiv = placeIDDiv.append("div");
placeIDInternalDiv
    .append("label")
    .attr("id","placeIDTextLabel")
    .attr("for","placeIDTextInput")
    .text("Place ID: ");

placeIDInternalDiv
    .append("input")
    .attr("type","text")
    .attr("id","placeIDTextInput")
    .attr("name","placeIDTextInput")
    .attr("style","width:500");

//
placeIDInternalDiv.append("button")
    .attr("id","placeIDQueryButton")
    .text("Query Places");

//
var placeIDChartWidth = 800;
var placeIDChartHeight = 300;

var svgPlaceIDChart = placeIDDiv
    .append("svg")
    .attr("id","placeIDWidgetSVG")
    .attr("width",placeIDChartWidth)
    .attr("height",placeIDChartHeight);
placeIDWidget = new BarChartWidget(svgPlaceIDChart,"placeID",0,0,placeIDChartWidth,placeIDChartHeight);

//
var placeIDLabel = placeIDInternalDiv.append("div")
    .attr("id","placeIDLabel")
    .attr("for","placeIDWidgetSVG")
    .text("asçldkfjaslçdfkjas");
