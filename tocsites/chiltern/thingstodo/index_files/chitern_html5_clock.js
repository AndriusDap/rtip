window.onload = show_chiltern_clock;

function show_chiltern_clock() {
    var ver = getInternetExplorerVersion();

    jQuery(document).ready(function() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (msie > 0) {
            if (ver > 8.0) {
                startTimer();
            }
        } else {
            startTimer();
        }
    });

    var arm_color = '#a1a2a4';

    function startTimer() {
        setInterval(updateClocks, 1000);
    }

    function updateClocks() {
        var now = new Date();
        var h = now.getHours() % 12;
        var m = now.getMinutes();
        var s = now.getSeconds();

        // --- Analog clock ---//

        var canvas = document.getElementById("chiltern-clock");

        if (canvas != null) {
            var context = canvas.getContext("2d");

            // You can change this to make the clock as big or small as you want.
            // Just remember to adjust the canvas size if necessary.
            var clockRadius = 18;
            arm_width = clockRadius / 10;

            // Make sure the clock is centered in the canvas
            var clockX = canvas.width / 2;
            var clockY = canvas.height / 2;

            // Make sure TAU is defined (it's not by default)
            Math.TAU = 2 * Math.PI;

            context.clearRect(0, 0, canvas.width, canvas.height);

            // Draw background

            for (var i = 0; i < 12; i++) {
                var innerDist = (i % 3) ? 0.75 : 0.7;
                var outerDist = (i % 3) ? 0.95 : 1.0;
                context.lineWidth = arm_width;
                //context.lineWidth 	= (i % 3) ? 4 : 10;
                context.strokeStyle = '#a1a2a4';

                var armRadians = (Math.TAU * (i / 12)) - (Math.TAU / 4);
                var x1 = clockX + Math.cos(armRadians) * (innerDist * clockRadius);
                var y1 = clockY + Math.sin(armRadians) * (innerDist * clockRadius);
                var x2 = clockX + Math.cos(armRadians) * (outerDist * clockRadius);
                var y2 = clockY + Math.sin(armRadians) * (outerDist * clockRadius);

                context.beginPath();
                context.moveTo(x1, y1); // Start at the center
                context.lineTo(x2, y2); // Draw a line outwards
                context.stroke();
            }

            // Draw arms

            function drawArm(progress, armThickness, armLength, armColor) {
                var armRadians = (Math.TAU * progress) - (Math.TAU / 4);
                var targetX = clockX + Math.cos(armRadians) * (armLength * clockRadius);
                var targetY = clockY + Math.sin(armRadians) * (armLength * clockRadius);

                context.lineWidth = armThickness;
                context.strokeStyle = armColor;

                context.beginPath();
                context.moveTo(clockX, clockY); // Start at the center
                context.lineTo(targetX, targetY); // Draw a line outwards
                context.stroke();
            }

            var hProgress = (h / 12) + (1 / 12) * (m / 60) + (1 / 12) * (1 / 60) * (s / 60);
            var mProgress = (m / 60) + (1 / 60) * (s / 60);
            var sProgress = (s / 60);

            drawArm(hProgress, arm_width, 0.5, arm_color); // Hour
            drawArm(hProgress, arm_width, -2 / clockRadius, arm_color); // Hour

            drawArm(mProgress, arm_width, 0.95, arm_color); // Minute
            drawArm(mProgress, arm_width, -2 / clockRadius, arm_color); // Minute

            drawArm(sProgress, 1, 0.95, '#a1a2a4'); // Second
            drawArm(sProgress, 1, -2 / clockRadius, '#a1a2a4'); // Second

        }


    }
}
function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer')
    {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}
