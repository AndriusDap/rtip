
angular.module('repay')
	.factory('repay.stopsService', function() {

		function cache(fn) {
			var cached = {};
			return function() {
				var args = Array.prototype.slice.call(arguments);
				var argString = args.join('--');
				if (!(argString in cached)) cached[argString] = fn.apply(null, args);
				return cached[argString];
			};
		}

		function stringDistance(s1, s2) {
			var i, j;

			// Auxiliary 2D array
			var arr = new Array(s1.length + 1);
			for (i = 0; i < s1.length + 1; i++)
				arr[i] = new Array(s2.length + 1);

			// Algorithm
			for (i = 0; i <= s1.length; i++) for (j = 0; j <= s2.length; j++) arr[i][j] = 0;
			for (i = 0; i <= s1.length; i++) arr[i][0] = i;
			for (i = 0; i <= s2.length; i++) arr[0][i] = i;

			for (i = 1; i <= s1.length; i++)
				for (j = 1; j <= s2.length; j++)
					arr[i][j] = Math.min(arr[i - 1][j - 1] + (s1.charAt(i - 1) == s2.charAt(j - 1) ? 0 : 1), arr[i - 1][j] + 1, arr[i][j - 1] + 1);

			// Final answer
			return arr[s1.length][s2.length].toString(10);
		}

		var findStop = cache(function(name) {
			name = name.toLowerCase();

			var almost = [];
			var likely = [];
			var possibly = [];
			var threshold = 3;

			for (var i = 0; i < STOPS.length; i++) {
				var test = STOPS[i].name.toLowerCase();

				if (name == test) {
					return STOPS[i];
				} else if (test.split(' ').indexOf(name) >= 0) {
					almost.push(STOPS[i]);
				} else if (test.indexOf(name) >= 0) {
					likely.push(STOPS[i]);
				} else {
					var dist = stringDistance(name, test);
					if (dist < threshold) possibly.push({ word: STOPS[i], distance: dist });
				}
			}

			if (almost.length) return almost[0];
			if (likely.length) return likely[0];

			if (!possibly.length) return null;
			possibly.sort(function(a, b) {
				return a.distance - b.distance;
			});
			return possibly[0].word;
		});

		window.findStop = findStop;
		return { find: findStop };

	});
