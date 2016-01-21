function reverse(string) {
  for (var i = string.length - 1, o = ''; i >= 0; o += string[i--]) { }
  return o;
}
console.log(reverse("I love Coding House!"));
