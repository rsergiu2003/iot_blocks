
example.Toolbar = Class.extend({
	
	init:function(elementId, app, view){
        $( "#radio" ).buttonset();
        this.view = view;
      
        
        $("#clear").button().click(function(){
            app.view.clear();
        });


        $("#generateScript").button().click(function(e){
            var finalStr = "";
            app.view.getFigures().each(function (index, figure) {
                if(figure.NAME == "OutShape" || figure.NAME == "printShape" || figure.NAME == "lcdShape"|| figure.NAME == "toneShape") {
                    finalStr = finalStr + figure.renderPath();
                }
            });
       
            console.log(finalStr);
            copyToClipboard(finalStr);
            
            if(confirm("your code is: "+finalStr+" upload ?")) {
                var data = new Object();
                data['ip'] = $("#device_ip").val();
                data['code'] = finalStr;
                $.ajax({
                  type: "POST",
                  url: "upload.php",
                  data: data,
                  success: function (response) {
                      console.log("code successfully deployed to device");
                      console.log(response);
                      alert("Yay! Code successfully deployed to device!");
                  }
                });
          }
            // alert(finalStr);
        });
        
        function copyToClipboard(text) {
          window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
        }
        
        $('#radio>input').click(function() {

          
        });
	}
});