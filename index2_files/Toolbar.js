
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
                if(figure.NAME == "OutShape" || figure.NAME == "printShape") {
                    finalStr = finalStr + figure.renderPath();
                }
            });
       
            if(confirm("your code is: "+finalStr+" upload ?")) {
                var data = new Object();
                data['ip'] = $("#device_ip").val();
                data['code'] = finalStr;
                $.ajax({
                  type: "POST",
                  url: "upload.php",
                  data: data,
                  success: function (response) {
                      alert(response);
                  }
                });
           }
            // alert(finalStr);
        });
        
        
        
        $('#radio>input').click(function() {

          
        });
	}
});