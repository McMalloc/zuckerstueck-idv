// var timeformat = d3.timeFormat("%H:%M:%S");
// var values = [];
// var moodboard = d3.select("#moodboard");
//
// var scaleWarm = d3.scaleSequential(d3.interpolateWarm)
// 	.domain([40, 35]);
//
// var scaleCool = d3.scaleSequential(d3.interpolateCool)
// 	.domain([20, 35]);
//
// var recentValue = {};
// setInterval(function() {
// 	d3.text("mock_temp/", function(data) {
// 		recentValue = {
// 			temp: parseFloat(data),
// 			date: new Date()
// 		};
// 		values.push([new Date(), recentValue.temp]);
// 		draw();
// 	});
// }, 500);
//
// var graph = new Dygraph(document.getElementById("overview"), values,
// 	{
// 		drawPoints: true,
// 		showRoller: true,
// 		width: 600,
// 		valueRange: [25, 45],
// 		labels: ['time', 'temp'],
// 		showRangeSelector: false,
// 		series: {
// 			temp: {
// 				strokeWidth: 1
// 			}
// 		}
// 	});
//
// function draw() {
// 	graph.updateOptions({
// 		file: values
// 	});
//
// 	moodboard
// 		.append("div")
// 		.style("height", "100%")
// 		.style("width", "10px")
// 		.style("background-color", "white")
// 		.style("background-color", function() {
// 			if (recentValue.temp >= 35) {
// 				return scaleWarm(recentValue.temp);
// 			} else {
// 				return scaleCool(recentValue.temp);
// 			}
// 		})
// 		.on("mouseenter", function(value, i) {
// 			d3.select(this)
// 				.style("width", "100px")
// 				.select("p")
// 				.style("display", "block");
// 		})
// 		.on("mouseleave", function(value, i) {
// 			d3.select(this)
// 				.style("width", "10px")
// 				.select("p")
// 				.style("display", "none");
// 		})
// 		.append("p").html(recentValue.temp + "°<br />" + timeformat(recentValue.date));
// }
