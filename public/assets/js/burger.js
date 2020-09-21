// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour-state").on("click", function(event) {
      const id = $(this).data("id");
      const newDevour = $(this).data("ready");
  
      const newDevourState = {
        devoured: newDevour
      };
  
      // Send the PUT request.
      $.ajax(`/api/burgers/${id}`, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devoured to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // CREATE NEW BURGER
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        burgerName: $("#burger").val().trim(),
        devoured: $("[name=eaten]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      const id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax(`/api/burgers/${id}`, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger with ID of", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  