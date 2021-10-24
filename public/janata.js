var len = document.querySelectorAll(".btn").length;
for (var i = 0; i < len; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function Handle() {
    var key = this.innerHTML;
    events(key);
  });

}


function events(key) {
  switch (key) {
    case "Pranamam":
      var tom1 = new Audio("music/Pranaamam.mp3");
      tom1.loop = true;
      tom1.play();

      var obj = document.getElementById("btn1");
      obj.addEventListener("click",handles);

      function handles(){
        if(tom1.play()){
          tom1.pause(),100;
        }
        else{
          tom1.play();
        }
      }

      break;
    case "Apple beauty":
      var tom2 = new Audio("music/Apple Beauty.mp3");
      tom2.play();
      break;
    case "Pakka local":
      var tom3 = new Audio("music/PakkaLocal.mp3");
      tom3.play();
      break;
    case "Jayaho janata":
      var tom4 = new Audio("music/Jayaho Janatha.mp3");
      tom4.play();
      break;
    case "Ni selavadigi":
      var tom5 = new Audio("music/Nee Selavadigi.mp3");
      tom5.play();
      break;
    case "Rockonbro":
      var tom6 = new Audio("music/Rock On Bro.mp3");
      tom6.play();
      break;
    default:
      console.log(this.innerHTML);
  }
  window.addEventListener("load", initAudioPlayer);
}
