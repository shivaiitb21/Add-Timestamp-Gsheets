var SHEET_NAME = 'Sheet1';
var DATETIME_HEADER = 'datetime';

function getDatetimeCol(){
  var headers = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME).getDataRange().getValues().shift();
  var colindex = headers.indexOf(DATETIME_HEADER);
  return colindex+1;
}

function onEdit(e) {  
  var ss = SpreadsheetApp.getActiveSheet();
  var cell = ss.getActiveCell();
  var datecell = ss.getRange(cell.getRowIndex(), getDatetimeCol());
  if (ss.getName() == SHEET_NAME && cell.getColumn() == 1 && !cell.isBlank() && datecell.isBlank()) {      
    datecell.setValue(new Date()).setNumberFormat("yyyy-MM-dd hh:mm");
  }
};
