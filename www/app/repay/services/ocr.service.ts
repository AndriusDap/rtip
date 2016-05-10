angular.module('repay')
    .factory('repay.ocrService', ['$q', '$http', 'repay.stopsService', function($q, $http, stopsService) {

        function dataURItoBlob(dataURI, callback) {
            // convert base64 to raw binary data held in a string
            // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
            var byteString = atob(dataURI.split(',')[1]);

            // separate out the mime component
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

            // write the bytes of the string to an ArrayBuffer
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            // write the ArrayBuffer to a blob, and you're done
            var bb = new Blob([ab]);
            return bb;
        }

        function runOcr(image64) {
            var imageBlob = dataURItoBlob(image64);
            //Prepare form data
            var formData = new FormData();
            formData.append("file", imageBlob, 'ticket1.png');
            formData.append("language", "eng");
            formData.append("apikey", "helloworld");

            var request = {
                method: 'POST',
                url: 'https://api.ocr.space/parse/image',
                data: formData,
                headers: {
                    'Content-Type': undefined
                }
            };

            return $http(request).then(function(response) {
                var parsedResults = response.data.ParsedResults;
                if (parsedResults == null) throw new Error();
                return parsedResults[0].ParsedText;
            });
        }

        function parseText(text) {

            text = text.toLowerCase();

            text = text.replace(/seat/g, '')
                .replace(/train/g, '')
                .replace(/class/g, '')
                .replace(/start/g, '')
                .replace(/adult/g, '')
                .replace(/child/g, '')
                .replace(/date/g, '')
                .replace(/number/g, '')
                .replace(/price/g, '')
                .replace(/from/g, '')
                .replace(/to/g, '')
                .replace(/route/g, '')
                .replace(/validity/g, '')
                // .replace(/[\.,-•]/g, ' ')
                .replace(/ticket/g, '');

            // Removing empty strings
            var rows = text.split('\n').filter((obj) => {
                return obj.trim().length > 0;
            });

            var stations = stopsService.findStations(rows);
            var fromStation = stations.length > 0 ? stations[0] : "";
            var toStation = stations.length > 1 ? stations[1] : "";

            var dates = stopsService.findDates(rows);
            var fromDate = dates.length > 0 ? dates[0] : "";
            var toDate = dates.length > 1 ? dates[1]: "";

            var ticketClass = stopsService.findTicketClass(rows);
            var ticketType = stopsService.findTicketType(rows);

            var ticket = {
                "fromStation": fromStation,
                "toStation": toStation,
                "class": ticketClass,
                "type": ticketType,
                "fromDate": fromDate,
                "toDate": toDate
            };

            return ticket;
        }

        return {
            scanImage: function(image) {
                return runOcr(image)
                    .then(function(text) {
                        return parseText(text);
                    });
            }
        };

    }]);