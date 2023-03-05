// console.log("This is background Script");
/*
    Author: Arijit Paria 
    Subscribe @tutoriex on youtube to get more such scripts
    Note:
    This script is free to use, do not pay anyone anything.
    To modify or redistribute, kindly follow the license agreement strictly.
*/
console.log("This is background Script @tutoriex (Arijit Paria)");

let installURL = "https://www.youtube.com/@Tutoriex_?sub_confirmation=1";
chrome.runtime.onInstalled.addListener(function (details) {
  // console.log(details);
  if (details.reason === "install") {
    chrome.tabs.create({
      url: installURL,
    });
    chrome.notifications.create({
      title: "TUTORIEX",
      message: "Please Subscribe to TUTORIEX YouTube Channel.",
      iconUrl: "icon.png",
      type: "basic",
    });
  }
});





