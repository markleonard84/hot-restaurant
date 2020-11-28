$(".submit").on("click", function() {
    var newBooking = {

        customerName: $('#reserve_name').value().trim(),
        phoneNumber: $('#reserve_phone').value().trim(),
        customerEmail: $('#reserve_email').value().trim(),
        uniqueID: $('#reserve_uniqueID').value().trim(),

    };
})