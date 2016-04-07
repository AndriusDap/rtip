
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

    	this.$timeout(() => {
    		var tripResults = [
    			{
    				serviceId: "R28231S",
    				fromDatetime: "2016-03-15T14:00:00",
    				delay: 0
    			},
    			{
    				serviceId: "S273622",
    				fromDatetime: "2016-03-15T14:03:00",
    				delay: 12
    			},
    			{
    				serviceId: "R237362",
    				fromDatetime: "2016-03-15T14:10:00",
    				delay: 177
    			},
    			{
    				serviceId: "S376283",
    				fromDatetime: "2016-03-15T14:15:00",
    				delay: 78
    			},
    			{
    				serviceId: "R21232",
    				fromDatetime: "2016-03-15T14:18:00",
    				delay: 33
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