(function($) {

  $.fn.filedrop = function(options) {

    if(!$.support.fileReader) return false;

    var defaults = {
      drop  : function(event) {},
      files : function(files) {},
    };

    var options = $.extend({}, defaults, options);
    var drop    = options.drop;

    options.drop = function(event) {
      drop.apply(this, [event]);
      $.fileReader(event.originalEvent.dataTransfer.files, options.files);
    };

    this.drop(options);

  };

})(jQuery);