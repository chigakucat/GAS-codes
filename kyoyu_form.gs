function myFunction() {
  var mySheet = SpreadsheetApp.getActiveSpreadsheet();
  var rowSheet=mySheet.getDataRange().getLastRow(); //シートの使用範囲のうち最終行を取得
  Logger.log(rowSheet);
  var cell= "B"+String(rowSheet);
  Logger.log(cell);
  var address = mySheet.getRange(cell).getValue();
  if (address.match("gmail.com"))  {
    mySheet.addViewer(address);
  }  
}
