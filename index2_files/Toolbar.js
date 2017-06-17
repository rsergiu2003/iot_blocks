
example.Toolbar = Class.extend({
	
	init:function(elementId, app, view){
        $( "#radio" ).buttonset();
        this.view = view;
      
        
        $("#clear").button().click(function(){
            app.view.clear();
        });


        $("#generateScript").button().click(function(){
            var finalStr = "";
            app.view.getFigures().each(function (index, figure) {
                if(figure.NAME == "OutShape") {
                    finalStr = finalStr + figure.renderPath();
                }
            });
            if(confirm("your code is: "+finalStr+" upload ?")) {
                
            }
            // alert(finalStr);
        });
        
        
        
        $('#radio>input').click(function() {

          
        });
	}
});