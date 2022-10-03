console.log("Running HitbullsEye Automation!");

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  let ansData = message.keys;

  // let testName = document.querySelector(
  //   "#main_div > div.header > div.topBarBg > span > strong"
  // ).innerHTML;

  try {
    let testName = document.querySelector(
      "#main_div > div.header > div.topBarBg > span > strong"
    ).innerHTML;

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
      }, 2000);
    }
  } catch (err) {
    alert("Please open the Test Tab and try Again!");
  }
});
