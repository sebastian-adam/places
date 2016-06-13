// BACKEND
function Place(location, landmark, favoriteThing) { this.location = location; this.landmark = landmark; this.favoriteThing = favoriteThing; }


// FRONTEND
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var loc = $("#location").val();
    var ldmrk = $("#landmark").val();
    var fav = $("#favorite-thing").val();

    var newPlace = new Place(loc, ldmrk, fav);

    $("#place-list").append("<li><span class='places'>" + newPlace.location + "</span></li>");

    $("#location").val('');
    $("#landmark").val('');
    $("#favorite-thing").val('');

    $("#place-list").show();
    $("#places-list").css("display", "inline-block");

    $(".places").last().click(function() {
      $("#show-places").show();
      $("#show-places").css("display", "inline-block");
      $("#show-places h2").text(newPlace.location);
      $("#show-places .landmark").text(newPlace.landmark);
      $("#show-places .fav").text(newPlace.favoriteThing);


    });
  });
});
