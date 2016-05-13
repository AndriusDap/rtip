
module RailTech {
export module StaffRepay {

export class JourneyService {

    static $inject = [
        "$http",
        "$q",
        "$timeout"];

    constructor(
            private $http,
            private $q,
            private $timeout) {

    }

    search(fromStation, toStation, fromTime) {
        
    	var deferred = this.$q.defer();

        var d = new Date(fromTime);
        d.setMinutes(d.getMinutes() - 15);

        function tPlusOneMin() {
            return d.setMinutes(d.getMinutes() + 7);
        }

    	this.$timeout(() => {
    		var tripResults = [
    			{
    				serviceId: "R28231S",
    				fromDatetime: tPlusOneMin(),
    				delay: 0
    			},
    			{
    				serviceId: "S273622",
    				fromDatetime: tPlusOneMin(),
    				delay: 12
    			},
    			{
    				serviceId: "R237362",
    				fromDatetime: tPlusOneMin(),
    				delay: 177
    			},
    			{
    				serviceId: "S376283",
    				fromDatetime: tPlusOneMin(),
    				delay: 78
    			},
    			{
    				serviceId: "R21232",
    				fromDatetime: tPlusOneMin(),
    				delay: 33
    			},
                {
                    serviceId: "P81275",
                    fromDatetime: tPlusOneMin(),
                    delay: 20
                },
                {
                    serviceId: "V47232",
                    fromDatetime: tPlusOneMin(),
                    delay: 2
                },
                {
                    serviceId: "N81232",
                    fromDatetime: tPlusOneMin(),
                    delay: 0
                },
                {
                    serviceId: "N41232",
                    fromDatetime: tPlusOneMin(),
                    delay: 0
                },
                {
                    serviceId: "S41232",
                    fromDatetime: tPlusOneMin(),
                    delay: 0
                },
    		];

    		deferred.resolve(tripResults);
    	}, 1000);

    	return deferred.promise;
    }

}

angular.module('staffrepay')
    .service('JourneyService', JourneyService)


} // StaffRepay
} // RailTech