var response_data
var dictionary_map = {};

function getInfo(callback) {
  $(document).ready(function() {
    jQuery.ajax({
      url: "http://localhost:1337/chinese_translator/php/parse.php", //This URL is for Json file
      type: "GET",
      // dataType: "text",
      async:true,
      success: function (data) {
            callback(data);
        },
      error: function() {
        //Do alert is error
      }
    });
  });
}
function populate_dictionary(input){
   var data = input.split('\r\n');
   for (i = 0; i < data.length; i++) {
      var line_split = data[i].split('/');
      dictionary_map[line_split[0].trim()] = line_split[1];
   }
   //console.log(temp_map["a barge"]);
   document.write(JSON.stringify(dictionary_map));
}

getInfo(populate_dictionary);
console.log(dictionary_map["a barge"]);
//document.write(JSON.stringify(dictionary_map));
