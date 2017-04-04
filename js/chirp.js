function chirp(n){
  n--;
  if (n === 0){
    return "chirp ";
  }
  return chirp(n) + "chirp ";
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});