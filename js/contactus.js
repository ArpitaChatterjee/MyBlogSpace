$(document).ready(function() {
    $('.myform').on('submit', function() {

        // Add text 'loading...' right after clicking on the submit button. 
        $('.output_message').text('Please wait...');

        var form = $(this);
        $.ajax({
            url: form.attr('action'),
            method: form.attr('method'),
            data: form.serialize(),
            success: function(result) {
                if (result == 'success') {
                    $('.output_message').text('Message Sent!');
                } else {
                    $('.output_message').text('Error Sending email!');
                }
            }
        });

        // Prevents default submission of the form after clicking on the submit button. 
        return false;
    });
});