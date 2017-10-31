var data;
var cellheight = 40;

d3.text("data.csv", function(response) {
	data = d3.csvParse(response, function(d) {
		return d;
	});

	draw();
});

var thead = d3.select("thead");
var tbody = d3.select("tbody");

var createScale = function(datafield) {
	if ((datafield === "Indikator") || (datafield === "columns")) return function(d) {return d;};

	var singlerow = data.columns.map(function(column) {
		if ((column === "Indikator") || (column === "CAGR")) {
			return null;
		} else {
			return parseFloat(data[datafield][column])
		}
	});
	return d3.scaleLinear()
		.domain([d3.min(singlerow), d3.max(singlerow)])
		.range([2, cellheight]);
};

var draw = function() {
	thead
		.append("tr")
		.selectAll("th")
		.data(data.columns)
		.enter()
		.append("th")
		.text(function(d, i) {
			return d.split("/");
		});

	var rows = tbody.selectAll('tr')
		.data(data)
		.enter()
		.append('tr');

	var cells = rows.selectAll('td')
		.data(data)
		.data(function (row, i) {
			return data.columns.map(function (column, j) {
				return {column: column, value: row[column], scale: createScale(i)};
			});
		})
		.enter()
		.append('td')
		.attr("class", function(d, i) {
			if (d.column === "CAGR") {
				if (parseFloat(d.value) <= 0) {
					return "data-cell warning";
				} else {
					return "data-cell ok"
				}
			} else if (d.column !== "Indikator") {
				return "data-cell";
			}
		})
		.html(function (d) {
			console.log(d);
			if (d.column === "Indikator") {
				var splitted = d.value.split("/");
				if (splitted[1]) {
					return splitted[0] + "<br><span class='info'>" + splitted[1] + "</span>";
				} else {
					return splitted[0]
				}
			} else {
				return d.value;
			}
		})
		.append("div")
		.attr("class", "bar")
		.style("height", function(d, i) {
			if (d.column === "CAGR") return 0;
			return d.scale(parseFloat(d.value)) + "px";
		});
};