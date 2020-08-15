// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/burger/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var selectedVal = $("[burger_name=devoured]:checked")
    console.log(`Selected Value ${selectedVal}`, selectedVal)
    var newBurger = {
      burger_name: $("#burg").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/burger/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    // Send the DELETE request.
    $.ajax({
      type: "DELETE",
      url: "burger/api/burgers/" + id
    }).then(location.reload());
  });
});
