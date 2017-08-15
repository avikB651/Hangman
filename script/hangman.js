document.addEventListener('contextmenu', event => event.preventDefault());
$('#attemptCount').text(5);
var flag = 0;
var newFlag = 0;
$("#submit").click(function(){
  $('#container').toggleClass('invisible');
  $('#maincontent').toggleClass('invisible');
  // $('#attempts').toggleClass('invisible');
  var movieName = $('#moviename').val();
  var industry = $('.industry').val();
  console.log(movieName);
  console.log(industry);
  $('#industryName').text(industry.toUpperCase());
  var arrayLetters = movieName.split('');
  var length = arrayLetters.length;
  console.log(arrayLetters.length);

  for (var i = 0; i < length; i++){
      // $('#game').append("<div class='blankLetters'>"+ movieName.charAt(i) +"</div>");
      if(arrayLetters[i].toUpperCase() === "A" || arrayLetters[i].toUpperCase() === "E" || arrayLetters[i].toUpperCase() === "I" ||
        arrayLetters[i].toUpperCase() === "O" || arrayLetters[i].toUpperCase() === "U"){
        // console.log("found vowels");
        $('#game').append("<div class='blankLetters visibletext'>"+ movieName.charAt(i) +"</div>");
      }else if (arrayLetters[i].toUpperCase() === " ") {
        $('#game').append("<div class='blankLetters visibletext'>/</div>");
      }else{
        $('#game').append("<div class='blankLetters'>"+ movieName.charAt(i) +"</div>");
      }
  }
});

$('#userEntry').on("keypress",function(e){
  if(e.which === 13){
    var ch = $(this).val();
    newFlag = 0;
    var blankEls = $('.blankLetters');
    // check if it matches any of the array data
    for (var i = 0; i < blankEls.length; i++) {
      console.log(ch);
      console.log(blankEls[i].textContent);
      // if matched then print out those in perfect order
      if(blankEls[i].textContent === ch) {
        console.log('loop content is '+blankEls[i].textContent);
        blankEls[i].classList.toggle('visibletext');
        newFlag = 1;
      }
      if(newFlag == 1){
        flag = 1;
      }
    }

    if(flag == 0){
      var oldAtCnt = $('#attemptCount').text();
      if(oldAtCnt == 0){
        // console.log('IN NESTED LOOP');
        for (var i = 0; i < blankEls.length; i++){
            blankEls[i].classList.add('visibletext');
        }
        $('#userEntry').prop("disabled",true);
      }
      newAtCnt = oldAtCnt - 1;
      $('#attemptCount').text(newAtCnt);
    }
    $(this).val("");

  }
});
