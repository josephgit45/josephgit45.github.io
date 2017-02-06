// ID of the Google Spreadsheet
 var spreadsheetID = "1BeFwmls7rTdueKFgjz2CYluatfGSRxuUD3BSV60bb_A";

 // Make sure it is public or set to Anyone with link can view
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

// make JSON call to Google Data API
$.getJSON(url, function(data) {

  // set global html variable
  var html = '';

  // build table headings
  html += '<table cellpadding=0 cellspacing=0 border=0>';
  html += '<tr>';
  html += '<th class= "tbl-header">Player</th>';
  html += '<th class= "tbl-header">Race</th>';
  html += '<th class= "tbl-header">Team</th>';
  html += '<th class= "tbl-header">PPG</th>';
  html += '<th class= "tbl-header">FG%</th>';
  html += '</tr>';

  // loop to build html output for each row
  var entry = data.feed.entry;
  /**
  ** Change to descending order
  ** for (var i = entry.length - 1; i >= 0; i -= 1) {
   */
  for (var i = 0; i < entry.length; i++) {
    html += '<tr>';
    html += '<td class = "tbl-content">' + entry[i]['gsx$player']['$t'] + '</td>';
    html += '<td class = "tbl-content">' + entry[i]['gsx$race']['$t'] + '</td>';
    html += '<td class = "tbl-content">' + entry[i]['gsx$team']['$t'] + '</td>';
    html += '<td class = "tbl-content">' + entry[i]['gsx$ppg']['$t'] + '</td>';
    html += '<td class = "tbl-content">' + entry[i]['gsx$fg']['$t'] + '</td>';
    html += '</tr>';
  }
  html += '</table>';

  // output html
  $('#table').html(html);
});
