
module RailTech {
export module Repay {

export class StopsServiceService {

	private ticketTypes = ["off-peak day single", "off-peak day return", "off-peak return", "off-peak single", "anytime single", "anytime return", "advance single", "anytime day single", "anytime day return", "annual season ticket", "season ticket"]
	private months = ["jrn", "fby", "mch", "apr", "may", "jun", "jly", "aug", "sep", "oct", "nov", "dmr"]

	findStations(rows) {

		var stations = [];

		for(var i in rows) {
			var name = rows[i];

			var options = {
				keys: ['name'],
				id: 'name',
				threshold: 0.2
			};

			var f = new Fuse(STOPS, options);
			var result = f.search(name);

			if (result.length > 0) {
				stations.push(result[0]);
			}
		}

		return stations;
	}

	getMonthNumber(ticketMonth) {
		var f = new Fuse(this.months);
		var result = f.search(ticketMonth);
		console.log(ticketMonth);
		console.log(result);

		return result.length > 0 ? result[0] : null;
	}

	findDates(rows) {

		var dateRegex = /([1-9loi][1-9loi]?\s*[a-z][a-z][a-z]?\s*[1-9][1-9loi]?)/g;
		var dateRegexParts = /([1-9loi][1-9loi]?)\s*([a-z][a-z][a-z]?)\s*([1-9][1-9loi]?)/;

		var dates = [];

		rows.forEach((name) => {

			var foundDates = name.match(dateRegex);

			if(foundDates && foundDates.length > 0) {
				var foundParts = foundDates[0].match(dateRegexParts);
				console.log(foundParts[0] + " " + foundParts[1] + " " + foundParts[2] + " " + foundParts[3]);

				var ticketMonth = foundParts[2];
				var foundMonth = this.getMonthNumber(ticketMonth);

				console.log("FOUND: " + foundMonth);
				if (foundMonth === null) return;

				var month = foundMonth + 1;
				var day = parseInt(foundParts[1].replace("l", "1").replace("i", "1").replace("o", "0"));
				var year = parseInt("20" + foundParts[3].replace("l", "1").replace("i", "1").replace("o", "0"));

				console.log(year + " " + month + " " + day);
				var date = new Date(year, month, day);

				dates.push(date);
			}
		});

		return dates;
	}

	findTicketClass(rows) {

		var stations = [];

		var classRegex = /.*([1li]\s*st).*/;
		var ticketClass = "STANDARD";

		rows.forEach((name) => {

			if (name.match(classRegex)) {
				ticketClass = "FIRST";
			}
		});

		return ticketClass;
	}

	findTicketType(rows) {

		var found = "";

		for(var i in rows) {
			var name = rows[i];

			var options = {
				includeScore: true,
				threshold: 0.4
			};

			var f = new Fuse(this.ticketTypes, options);
			var result = f.search(name);

			if (result.length > 0) {
				found = this.ticketTypes[result[0]];
				break;
			}
		};

		return found;
	}
}


angular.module('repay')
	.service('repay.stopsService', StopsServiceService);

}
}