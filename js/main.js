jQuery(document).ready(function($){
    console.log('plugin js loaded');

    $("#subscriber-form").submit(function(e){
        e.preventDefault();
        console.log('submit');

        // Serialize Form
        var subcriberData = $(this).serialize();

        // Submit Form

        $.ajax({
            type: 'post',
            url: $(this).attr('action'),
            data: subcriberData
        }).done(function(response){
            
            // if success
            $("#form-msg").removeClass('error');
            $("#form-msg").addClass('success');
            
            // Set Message Text
            $("#form-msg").text(response);

            // Clear fields
            $("#name").val('');
            $("#email").val('');
        }).fail(function(data){
            // if error
            $("#form-msg").removeClass('success');
            $("#form-msg").addClass('error');
            
            if(data.responseText !== ''){
                // Set Message Text
                $("#form-msg").text(data.responseText);
            } else {
                $("#form-msg").text('Message did not sent');  
            }
            

        });



    });


});