//3.4 Adding to the DOM I 175 PTS
//Let's add the phone number immediately before() the "Book Now" button. 
//You can check out the HTML of the rendered page by clicking on the HTML tab below.

var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
$('.book').before(message);

//3.9 Acting on Click 175 PTS
//Now that we have a working click handler for the "Book Now" buttons, 
//let's try something different. 
//Try changing the click handler to trigger when the .tour list item is clicked instead.
$('.tour').on('click', function() {
  var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
  $('.usa').append(message);
  $('button').remove();
});