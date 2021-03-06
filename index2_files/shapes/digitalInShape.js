// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var digitalInShape = draw2d.SetFigure.extend({            

   NAME: "digitalInShape",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:91,height:87},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output",new draw2d.layout.locator.XYRelPortLocator(91, 50));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#287EC9");
     port.setName("Port");
     port.setMaxFanOut(30);
     
     this.label = new draw2d.shape.basic.Label({text:"input", color:"#0d0d0d", fontColor:"#0d0d0d"});
      
      // add the new decoration to the connection with a position locator.
      //
      this.add(this.label, new draw2d.layout.locator.BottomLocator());
      
       this.image = new draw2d.shape.basic.Image();

        this.add(this.image, new draw2d.layout.locator.CenterLocator( ));
     
     this.persistPorts=false;
   },

    renderPath: function () {
        var str = "";
        
        //output specific code
        str = str + "i:" + portVarTranslate("port."+this.getOutputPorts().first().id) + ":" + this.id + instructionSeparator();

        return str;
    },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 91;
      this.originalHeight= 87;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       this.label.text = "Input " + this.id;
       this.image.path = this.getUserData()['imageIcon'];
       

         // BoundingBox
        shape = this.canvas.paper.path("M0,0 L91,0 L91,87 L0,87");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M91,72Q91,87 76, 87L15,87Q0,87 0, 72L0,15Q0,0 15, 0L76,0Q91,0 91, 15L91,72');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#54EEFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'');
        shape.attr({"x":24.546875,"y":43.5,"text-anchor":"start","text":"","font-family":"\"Arial\"","font-size":26,"stroke":"#FF0000","fill":"#616161","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
digitalInShape = digitalInShape.extend({

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