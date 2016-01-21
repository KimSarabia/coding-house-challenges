//Write jQuery code to loop over every DIV in any HTML document and give that DIV a random color background. 
//Then invert the DIVs background color using the function below, and use the inverted color for the font on that DIV.

//Test your code in Chrome console on many pages.

//Here's the function to use for inverting colors:


function invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1);           // remove #
    color = parseInt(color, 16);          // convert to integer
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = color.toString(16);           // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color;                  // prepend #
    return color;
}

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>each demo</title>
  <style>
  div {
    color: red;
    text-align: center;
    cursor: pointer;
    font-weight: bolder;
    width: 300px;
  }
  </style>
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
</head>
<body>
 
<div>Click here</div>
<div>to iterate through</div>
<div>these divs.</div>
 
<script>
$( document.body ).click(function() {
  $( "div" ).each(function( i ) {
    if ( this.style.color !== "blue" ) {
      this.style.color = "blue";
    } else {
      this.style.color = "";
    }
  });
});
</script>
 
</body>
</html>