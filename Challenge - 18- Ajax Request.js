/* 18. Making AJAX requests
Write a JavaScript file with jQuery that on document ready will:

make a ‘get’ request to the GitHub api using your username ('https://api.github.com/users/YOURUSERNAMEHERE')
this request should use the shorthand $.get() method.
make a ‘post’ request to a dummy database passing the data received from the GitHub request ('http://httpbin.org/post')
this request should use the long-form $.ajax({}) method and you should set your configuration object manually.
on the success callback for your post request, use jQuery create a <div> element. This <div> should include your avatar photo limited to 150px width (using jQuery, not a CSS Stylesheet), your username, and your real name.
append the div you create to the div with a class of ‘container’ with only one read/write function to the DOM.
*/
