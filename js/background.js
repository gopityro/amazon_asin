console.log("backgroun script is running in safe mode...");
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      "id": "id_select_text",
      "title": "Search on amazon.in",
      "contexts": ["selection"]
    });
});
chrome.contextMenus.onClicked.addListener(searchONAmazon);
function searchONAmazon(info, tab){
  if(info.menuItemId=="id_select_text"){
    var amazonUrl = "https://www.amazon.in/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=";
    var selectedTxt = info.selectionText;
    if( typeof selectedTxt!="undefined"){
      window.open(amazonUrl+selectedTxt);
    }
  }
}
