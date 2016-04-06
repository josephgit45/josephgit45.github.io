var dataStore = (function(){
    var response_data;

    $.ajax({
      type: "GET",
      url: "http://localhost:1337/chinese_translator/php/parse.php", //This URL is for Json file
      success : function(data) {
                    response_data = data;
                }
    });

    return {getResponse : function()
    {
      console.log(response_data);
        if (response_data) return response_data;
        // else show some error that it isn't loaded yet;
    }};
})();


console.log($(dataStore.getResponse()));
