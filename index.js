$(function() {

    $.getJSON('topspots.json', function(result) {
        $(result).each(function(index, value) {
            var string = ""
            var mapLink = "https://www.google.com/maps?q=";
						var location = (value.location[0] + ',' + value.location[1])
						mapLink += location;

            var tr = $('<tr/>');
            tr.append("<td> " + value.name + "</td>");
            tr.append("<td> " + value.description + "</td>");
            tr.append('<td><a class="btn btn-primary" target="_blank" href="https://www.google.com/maps?q=' + location + '"> See Map </a></td>');
            $('thead').append(tr);
        });
    });

});
