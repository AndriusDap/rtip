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

        function findStations(text) {
            text = text.replace(/SEAT/g, '').replace(/TRAIN/g, '').replace(/TICKET/g, '');

            var rows = text.split('\n').map(function(x) {
                return x.replace(/[^A-Z\s]/g, '').trim();
            });
            rows = rows.filter(function(x) {
                return x.length > 3
            });

            var stations = [];
            rows.forEach(function(row) {
                var result = stopsService.find(row)
                if (result) stations.push(result.name);
            });
            if (stations.length == 2) return stations;
            throw new Error();
        }

        function parseText(text) {
            var stations = findStations(text);
            return {
                from: stations[0],
                to: stations[1],
                'class': 'STD',
                peak: 0
            };
        }

        return {
            scanImage: function(image) {
                return runOcr(image).then(function(text) {
                    console.log(text);
                    return parseText(text);
                })
            }
        };

    }]);