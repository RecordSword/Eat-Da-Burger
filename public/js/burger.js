//make sure to wait to attach handlebars until the DOM is fully loaded
$(function () {

  // add a new burger to the database by POST request
  $(".burger-form").on("submit", function (event) {
    event.preventDefault();


    if ($("#burger-name").val() === "") {
      console.log("Enter a burger name!");
    } else {
      const newBurger = {
        burger_name: $("#burger-name").val().trim(),
        devoured: 0
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function () {
        console.log("Added burger to list");
        // reload the page to display updated list
        location.reload();
      });
    }
  });

  $(".devoured-btn").on("click", function (event) {
    const id = $(this).data("id");
    const newDevoured = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevoured
    }).then(function () {
      console.log("You Scoffed the Burger!");
      // reload the page to display updated list
      location.reload();
    });
  });

  // when delete button is clicked, delete the burger from the page

  $(".delete-btn").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");

    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id
    }).then(location.reload());
  });
});





