<!DOCTYPE html>
<html>
<head>
  <title>Chinese Translator</title>
  <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
  <script src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  <!-- Optional theme -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
  <!-- Latest compiled and minified JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

  <link href='https://fonts.googleapis.com/css?family=Quicksand|Questrial|Varela+Round' rel='stylesheet' type='text/css'>
  <link rel="shortcut icon" type="image/png" href="img/favicon.png"/>
  <link rel="stylesheet" href="css/style.css">
  <!-- <script src="js/get_info.js"></script> -->
  <script src="js/dictionary.js"></script>
  <script src="js/translate.js"></script>

</head>

<body>
  <h1 id = "header">CHINESE TRANSLATE TOOL</h1>

  <div class="form-horizontal main-form">
    <fieldset>

      <!-- Form Name -->

      <!-- Text input-->
      <div class="form-group">
        <label class="col-md-3 control-label labelText" for="textinput">Search</label>
        <div class="col-md-7">
          <input id="englishSearchInput" name="textinput" type="text" oninput="searchDictionary()" placeholder="Enter Search" value="" class="form-control input-md">
        </div>
      </div>

      <hr/>
      <div class="form-group">
        <label class="col-md-3 control-label labelText" for="textinput">Results</label>
        <div class="col-md-7">
          <textarea class="form-control" rows="10" id="results" style="font-size:30px; height:230px;"></textarea>
        </div>

      </div>


    </fieldset>
  </div>
</body>

</html>
