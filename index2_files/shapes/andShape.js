// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var andShape = draw2d.SetFigure.extend({            

   NAME: "andShape",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:93,height:131.18085},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(-2.907526881720255, 28.819612390070656));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(-2.907526881720255, 45.57006605766012));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100.47043010752688, 72.72968005619722));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(-2.907526881720255, 61.558985171997314));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(-2.907526881720255, 77.88120369703353));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(-2.907526881720255, 93.00137939340995));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
     
    this.image = new draw2d.shape.basic.Image();
    this.add(this.image, new draw2d.layout.locator.CenterLocator( ));
    
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 93;
      this.originalHeight= 131.18085;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       this.image.path = this.getUserData()['imageIcon'];

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L93,0 L93,131.18085 L0,131.18085");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M93 127L0 127L0 0L93 0Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#29B0FF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'AND');
        shape.attr({"x":25.3828125,"y":20.309087500000004,"text-anchor":"start","text":"AND","font-family":"\"Arial\"","font-size":20,"stroke":"none","fill":"#FFFFFF","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'in1');
        shape.attr({"x":5,"y":37.8058125,"text-anchor":"start","text":"in1","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#FFFFFF","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'in2');
        shape.attr({"x":5.5,"y":59.063625,"text-anchor":"start","text":"in2","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#FFFFFF","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'res');
        shape.attr({"x":65.78125,"y":95.40741249999999,"text-anchor":"start","text":"res","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#FFFFFF","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'in3');
        shape.attr({"x":5.5,"y":80.03701250000003,"text-anchor":"start","text":"in3","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#FFFFFF","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'in4');
        shape.attr({"x":5.5,"y":101.16522499999999,"text-anchor":"start","text":"in4","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#FFFFFF","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'in5');
        shape.attr({"x":5.5,"y":120.42303749999999,"text-anchor":"start","text":"in5","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#FFFFFF","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
andShape = andShape.extend({

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