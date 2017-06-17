
example.Toolbar = Class.extend({
	
	init:function(elementId, app, view){
        $( "#radio" ).buttonset();
        this.view = view;
      
        
        $("#clear").button().click(function(){
            app.view.clear();
        });


        $("#generateScript").button().click(function(){
            app.view.getFigures().each(function (index, figure) {
                if(figure.NAME == "OutShape") {
                    figure.renderPath();
                }
            });
        });
        
        
        
        $('#radio>input').click(function() {

          
        });
	}
});