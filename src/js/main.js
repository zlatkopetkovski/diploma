$('.carousel').carousel({
    pause: "false"
});
function showHashTargetTab() {
    //// tab switch function. this is Bootstrap
    $('#myTab a[href="'+window.location.hash+'"]').tab('show');
};
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
};
// we need to know when we change the hash to show the specific tab
$(window).on('hashchange', function(e) {
    e.preventDefault();
    showHashTargetTab();
});
//funkcija za postavuvanje na scrol koga odbirame drug tab
// The function actually applying the offset
function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY-5000);
    }
}
// This will capture hash changes while on the page
window.addEventListener("hashchange", offsetAnchor);
// This is here so that when you enter the page with a hash,
// it can provide the offset in that case too. Having a timeout
// seems necessary to allow the browser to jump to the anchor first.
window.setTimeout(offsetAnchor, 1); // The delay of 1 is arbitrary and may not always work right (although it did in my testing).