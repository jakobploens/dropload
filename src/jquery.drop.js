(function($) {

  $.fn.drop = function(options) {
    this.on('dragenter dragover dragexit dragleave dragend drop', function(e) {      
      e.stopPropagation();
      e.preventDefault();
      if(options[e.type]) options[e.type].apply(this, [e]);
    });
  };

})(jQuery);