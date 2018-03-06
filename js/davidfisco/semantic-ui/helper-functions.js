// Shows website feedback modal on click for all elements with class activate_website_feedback_modal_fisco
$('document').ready(function() {
    $('.activate_website_feedback_modal_fisco').click(function(event) {
        $('.ui.popup').hide();
        $('#website_feedback_google_form_fisco')
            .modal('setting', 'transition', 'horizontal flip')
            .modal('show');
        event.preventDefault();
    });
});