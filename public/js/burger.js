//make sure to wait to attach handlebars until the DOM is fully loaded
$(function () {

  // add a new burger to the database by POST request
  $(".burgerForm").on("submit", function (event) {
    event.preventDefault();


    // if ($("#newburger").val() === "") {
    //   console.log("Enter a burger name!");
    // } else {
      const newBurger = {
        burger_name: $("#newburger").val().trim(),
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
  }),

  $(".eatburger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function() {
      console.log("Burger devoured");
      location.reload();
    });
  });

  // when delete button is clicked, delete the burger from the page

  $(".trashburger").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");

    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id
    }).then(location.reload());
  });
});





