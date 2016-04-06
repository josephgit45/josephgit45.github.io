
function searchDictionary(){
  $(document).ready(function() {
    document.getElementById('results').innerHTML = "";
    search_input = document.getElementById('englishSearchInput').value.toLowerCase();
    console.log(search_input);
    if(dictionary[search_input] != null){
      var chinese_translations = dictionary[search_input].split(";");
      for (i = 0; i < chinese_translations.length; i++){
        document.getElementById('results').innerHTML += chinese_translations[i] + "\n";
      }
    }
  });
}
