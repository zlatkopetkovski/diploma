$('.carousel').carousel({
    pause: "false"
});
function showHashTargetTab() {
    //// tab switch function. this is Bootstrap
    $('#myTab a[href="'+window.location.hash+'"]').tab('show');

    $('.package .sub-menu li').removeClass('active open');
    $('.package .sub-menu a[href*="'+window.location.hash+'"]').parent('li').addClass('active open');
}
$(document).on('click', '#myTab a[data-toggle="tab"]', function (e) {
    e.preventDefault();
    window.location.hash = $(this)[0].hash;
    //// tab switch function. this is Bootstrap again
    $(this).tab('show');
});

// this happens on load, we check if the hash exists and if it is show the specific tab, otherwise show default tab
if(window.location.hash) {
    showHashTargetTab();
} else {
    //// tab switch function. this is Bootstrap again
    $('#myTab a[data-toggle="tab"]:first').tab('show');
}
// we need to know when we change the hash to show the specific tab
$(window).on('hashchange', function(e) {
    e.preventDefault();
    showHashTargetTab();
});