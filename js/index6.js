$(function () {

    function format(v) {
        return v.toString().length == 1 ? '0' + v : v;
    }

    var now = new Date();

    var currentDate = Date.now();
    now.setTime(now.getTime() + 86400000);
    var endDateString = now.toISOString();
    console.log(endDateString);
    var endDateTime = Date.parse(endDateString);
    console.log(endDateTime);
    var endDate = new Date(endDateTime);

    var $days = $('.days');
    var $hours = $('.hours');
    var $mins = $('.minutes');
    var $secs = $('.seconds');

    setInterval(function () {

        currentDate = Date.now();
        if (currentDate < endDate) {


            endDate = 1517241600000;
            var time = endDate - currentDate;

            var seconds = Math.floor(time / 1000 % 60);
            var minutes = Math.floor(time / 60000 % 60);
            var hours = Math.floor(time / 3600000 % 24);
            var days = Math.floor(time / 86400000);

            $secs.text(format(seconds));
            $mins.text(format(minutes));
            $hours.text(format(hours));
            $days.text(days);
        }
    }, 100);
});
