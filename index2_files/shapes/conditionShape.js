// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var conditionShape = draw2d.SetFigure.extend({            

   NAME: "conditionShape",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:161,height:101},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0, 38.613861386138616));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0, 69.8019801980198));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(98.75776397515527, 48.51485148514851));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
     
    this.image = new draw2d.shape.basic.Image();
    this.add(this.image, new draw2d.layout.locator.CenterLocator( ));
     
     this.persistPorts=false;
   },
   
   renderPath: function () {
        // var str = this.id + "=";
        var str = "";
        var v;
        var parameters = "";
        this.getInputPorts().each(function (index, port) {
           
            var conn = port.getConnections().first();
            v = conn.getSource().getParent().renderPath();
            v = v + "=" + portVarTranslate("port."+conn.getTarget().id) + ":" + portVarTranslate("port."+conn.getSource().id) + instructionSeparator();
            str = str + v;
            parameters = parameters + portVarTranslate("port."+conn.getTarget().id) + ":";
        });
        
        //output specific code
        str = str + ">:" + parameters +  portVarTranslate("port."+this.getOutputPorts().first().id)+instructionSeparator();

        return str;
    },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 161;
      this.originalHeight= 101;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       this.image.path = this.getUserData()['imageIcon'];

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L161,0 L161,101 L0,101");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M0 0L161 0L161 101L0 101Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#94D8FF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'IN1 > IN2');
        shape.attr({"x":40.109375,"y":15.5,"text-anchor":"start","text":"IN1 > IN2","font-family":"\"Arial\"","font-size":19,"stroke":"none","fill":"#000000","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'IN1');
        shape.attr({"x":11,"y":39,"text-anchor":"start","text":"IN1","font-family":"\"Arial\"","font-size":11,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'IN2');
        shape.attr({"x":11,"y":72,"text-anchor":"start","text":"IN2","font-family":"\"Arial\"","font-size":11,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'OUT');
        shape.attr({"x":124.5,"y":49,"text-anchor":"start","text":"OUT","font-family":"\"Arial\"","font-size":11,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      if(this.svgNodes===null) return null;

      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     if(this.svgNodes===null) return;

     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(this.svgNodes===null) return;

      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    getParameterSettings: function()
    {
        return [];
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
conditionShape = conditionShape.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         // your special code here
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function()
    {
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function()
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function()
    {
    }
});