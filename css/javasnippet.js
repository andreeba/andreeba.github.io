// JavaScript Document

jQuery.fn.clickOutside = function(callback){
    var $me = this;
    $(document).mouseup(function(e) {
        if ( !$me.is(e.target) && $me.has(e.target).length === 0 ) {
            callback.apply($me);
        }
    });
};

$('[selector]').clickOutside(function(){
    $(this).removeClass('active'); // or `$(this).hide()`, if you must
});