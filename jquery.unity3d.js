/**
* unity3d - jQuery plugin to embed Unity3D files
* Created by: Makis Tracend (@tracend)
*
* Licensed under the MIT licenses:
* http://www.opensource.org/licenses/mit-license.php
*
**/
(function( $ ) {
	$.unity3d = function(options, container) {
	
		var $this = $(this);
		var settings = $.extend( {
							width : 600, 
							height : 450, 
							file : "WebPlayer.unity3d", 
							params: {
								disableContextMenu: false
							}
						}, options);
					
		// save settings for other methods
		$(this).data('settings', settings);
		$(this).data('container', container);


		var methods = {
			init : function( $this ){
				var self = this;
				// load the unity object script
				$.getScript("http://webplayer.unity3d.com/download_webplayer-3.x/3.0/uo/UnityObject.js", function () {
					self.embed( $this );
				});
				
			}, 
			embed : function( $this ){
				var settings = $this.data('settings'), 
					container = $this.data('container');
				
				// extract embed parameters
				var params = settings.params, 
					width = settings.width,
					height = settings.height,
					file = settings.file,
					id = container.attr("id");
				
				unityObject.embedUnity( id, file, width, height, params);
				
			}, 
			destroy : function( $this ) {
		
				 var settings = $this.data('settings');
		
				 data.settings.remove();
				 $this.removeData('settings');
		
		
			}
		
		}
		
		//initialize
		//$.unity3d.init( settings );
		methods.init( $this );
		
		return this;
	
	}
	// API
	$.unity3d.get = function(id) { 
		if (typeof unityObject != "undefined") {
			return unityObject.getObjectById(id);
		}
		return null;
	};
	
	// extending jQuery namespace
	$.fn.unity3d = function(options) {
		return this.each(function() {
			 (new $.unity3d(options, $(this)));
		});
	};

})(jQuery);

//Helper
function unity3d(options) {
	return jQuery.unity3d(options); 
}