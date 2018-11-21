
$(function () {
    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        // Sending the DELETE request, via an ajax call.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted da burger", id);
                // Reloading the page
                location.reload();
            }
        );
    });
});
