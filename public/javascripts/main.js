$(document).ready(function(){
  loadAllCandies();
  bindCandyForm()
});

function loadAllCandies(){
  $.ajax({
    method: "GET",
    url: "/candies"
  })
    .done(function(response) {
      listCandies(response);
    });
}

function bindCandyForm(){
  $("#sendCandy").on("click", function(e){
    e.preventDefault();

    $.ajax({
      method: "POST",
      url: "/candies",
      data: {name: $("#candyName").val()}
    })
      .done(function(response) {
        addCandy(response);
        $("#candyName").val("");
      });
  })
}

function addCandy(candyObject){
  $('#candies').append(`<li>${candyObject.name}</li>`);
}

function listCandies(candyArray){
  candyArray.forEach(function(candy){
    $('#candies').append(`<li>${candy.name}</li>`)
  });
}
