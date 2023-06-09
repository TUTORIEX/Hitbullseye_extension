import data from "./ansKeys.json" assert { type: "json" };

//Run the sunctions after the contents are loaded
document.addEventListener("DOMContentLoaded", runFunction);

function runFunction() {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("slider-value");

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function () {
    output.innerHTML = this.value;
    let speed = Number(this.value);
    console.log(speed);
    

    // send message to content script
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { speed: speed, msg: "sliderValue" },
        function (response) {
          console.log(response);
        }
      );
    });
  };
  // alert("Conten Loaded!")
  document.getElementById("button").addEventListener("click", sendKeys);
  function sendKeys() {
    //Getting the current tab details
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      //Sending message to the active tab
      chrome.tabs.sendMessage(activeTab.id, {
        msg: "Sending Data",
        keys: data,
      });
    });
  }
}
