// console.log("Running HitbullsEye Automation!");
let current_tab_url = window.location.href;
let speed = 3000;


if (
  current_tab_url.includes(
    "https://www.youtube.com/@Tutoriex_?sub_confirmation=1"
  )
) {
  // console.log("I Ma here");
  const click = function () {
    // Your script here
    // console.log("Page loaded!");
    document
      .querySelector("#confirm-button > yt-button-shape > button")
      .click();
  };
  setTimeout(click, 5000);
}

const click1 = function () {
  document
    .querySelector(
      "body > div.logged-in.env-production.page-responsive.page-profile > div.application-main > main > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-sidebar > div > div.js-profile-editable-replace > div.d-flex.flex-column > div.flex-order-1.flex-md-order-none > div > div > span > form:nth-child(1) > input.btn.btn-block"
    )
    ?.click();
};
setTimeout(click1, 2000);

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.msg === "sliderValue") {
    speed = message.speed * 1000;
    console.log(speed);
    
  }

  if (message.msg === "Sending Data") {
    let ansData = message.keys;

    // let testName = document.querySelector(
    //   "#main_div > div.header > div.topBarBg > span > strong"
    // ).innerHTML;

    try {
      let testName = document.querySelector(
        "#main_div > div.header > div.topBarBg > span > strong"
      ).textContent;

      let i = 0;
      console.log(testName);
      for (i = 0; i < ansData.test.length; i++) {
        if (testName == ansData.test[i].name) {
          console.log(ansData.test[i].keys);
          automate(ansData.test[i].keys);
          break;
        }
      }

      //If No Match Found
      if (i == ansData.test.length) {
        alert("No Answer Keys found for this test!");
      }

      // automate the test
      function automate(keys) {
        let len = keys.length;

        let i = 0;

        const inter = setInterval(function () {
          document.querySelector(`#${keys[i]}_${i + 1}`).click();
          document
            .querySelector(
              "#main_div > div.tableWidthPercent > div.onlineTestLeftDiv > div.qnav > span.saveNextButton > a"
            )
            .click();
          i++;

          if (i == len) {
            clearInterval(inter);
          }
        }, speed);
      }
    } catch (err) {
      alert("Please open the Test Tab and try Again!");
    }
  }
});
