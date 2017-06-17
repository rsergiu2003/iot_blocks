// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var xgtyShape = draw2d.SetFigure.extend({            

   NAME: "xgtyShape",

   init:function(attr, setter, getter)
   {

     this._super( $.extend({stroke:0, bgColor:null, width:93,height:127},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-2.907526881720255, 61.052765748031526));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-2.907526881720255, 89.10647637795276));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.47043010752688, 75.1239468503937));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 93;
      this.originalHeight= 127;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L93,0 L93,127 L0,127");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle

         shape = this.canvas.paper.path('M 55.692 65.937 C 53.242 65.937 50.869 66.25 48.607 66.834 L 48.607 24.105 C 48.607 16.369 42.072 10.076 34.041 10.076 L 26.567 10.076 C 18.534 10.076 12.001 16.369 12.001 24.105 L 12.001 80.5 C 8.015 84.815 5.835 90.314 5.835 96.142 C 5.835 102.499 8.424 108.458 13.123 112.922 C 17.739 117.307 23.827 119.71 30.3 119.71 C 30.417 119.71 30.533 119.708 30.65 119.708 C 35.258 119.645 39.675 118.345 43.485 115.981 C 47.164 117.75 51.309 118.748 55.692 118.748 C 70.808 118.748 83.106 106.903 83.106 92.342 C 83.106 77.782 70.808 65.937 55.692 65.937 Z M 55.692 111.695 C 44.614 111.695 35.601 103.013 35.601 92.342 C 35.601 81.672 44.614 72.992 55.692 72.992 C 66.771 72.992 75.783 81.672 75.783 92.342 C 75.783 103.013 66.771 111.695 55.692 111.695 Z M 19.323 24.105 C 19.323 20.257 22.572 17.128 26.567 17.128 L 34.041 17.128 C 38.035 17.128 41.285 20.257 41.285 24.105 L 41.285 49.145 L 41.285 69.887 C 38.464 71.574 35.983 73.737 33.964 76.262 L 33.964 26.909 C 33.964 24.961 32.326 23.383 30.303 23.383 C 28.283 23.383 26.642 24.961 26.642 26.909 L 26.642 90.079 C 24.477 91.295 23.021 93.554 23.021 96.142 C 23.021 100.016 26.282 103.156 30.303 103.156 C 30.431 103.156 30.555 103.154 30.68 103.147 C 32.141 106.272 34.217 109.078 36.756 111.418 C 34.829 112.186 32.735 112.626 30.55 112.656 C 25.913 112.719 21.558 111.029 18.266 107.902 C 14.972 104.773 13.157 100.597 13.157 96.142 C 13.157 91.701 14.962 87.534 18.238 84.409 C 18.932 83.747 19.323 82.844 19.323 81.903 L 19.323 24.105 L 19.323 24.105 Z');
          shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#29B0FF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
  shape = this.canvas.paper.path('M 54.426 99.482 C 53.974 99.869 53.481 100.188 52.953 100.432 C 52.422 100.677 51.864 100.856 51.277 100.968 C 50.689 101.083 50.128 101.14 49.586 101.14 C 48.548 101.14 47.595 100.95 46.724 100.572 C 45.857 100.196 45.112 99.695 44.49 99.072 C 43.872 98.449 43.393 97.728 43.053 96.907 C 42.714 96.088 42.547 95.233 42.547 94.348 C 42.547 93.555 42.692 92.758 42.985 91.955 C 43.278 91.153 43.713 90.437 44.288 89.805 C 44.863 89.173 45.586 88.658 46.454 88.263 C 47.325 87.866 48.346 87.667 49.517 87.667 C 50.059 87.667 50.613 87.72 51.176 87.823 C 51.74 87.928 52.282 88.093 52.799 88.32 C 53.32 88.546 53.804 88.853 54.257 89.238 C 54.705 89.627 55.092 90.101 55.406 90.669 L 58.995 88.601 C 58.204 87.301 57.003 86.243 55.389 85.433 C 53.777 84.622 51.864 84.215 49.654 84.215 C 47.781 84.215 46.112 84.508 44.644 85.092 C 43.177 85.678 41.937 86.443 40.921 87.386 C 39.905 88.329 39.133 89.4 38.604 90.597 C 38.073 91.794 37.808 93.008 37.808 94.233 C 37.808 95.517 38.095 96.777 38.67 98.013 C 39.245 99.249 40.048 100.352 41.074 101.323 C 42.101 102.294 43.325 103.084 44.745 103.686 C 46.166 104.29 47.735 104.592 49.449 104.592 C 50.421 104.592 51.411 104.487 52.427 104.281 C 53.443 104.073 54.396 103.77 55.289 103.374 C 56.178 102.978 56.98 102.493 57.69 101.918 C 58.402 101.341 58.949 100.677 59.332 99.922 L 55.507 98.083 C 55.236 98.63 54.875 99.097 54.426 99.482 Z');
          shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#29B0FF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
   shape = this.canvas.paper.path('M 66.466 85.297 C 66.307 85.693 66.08 86.039 65.788 86.338 C 65.494 86.634 65.135 86.87 64.714 87.045 C 64.292 87.22 63.819 87.307 63.294 87.307 C 62.756 87.307 62.277 87.22 61.855 87.045 C 61.431 86.87 61.076 86.634 60.781 86.338 C 60.487 86.039 60.264 85.693 60.113 85.297 C 59.959 84.902 59.884 84.483 59.884 84.04 C 59.884 83.608 59.959 83.196 60.113 82.799 C 60.264 82.403 60.489 82.057 60.781 81.76 C 61.076 81.462 61.431 81.225 61.855 81.043 C 62.277 80.863 62.756 80.773 63.294 80.773 C 63.832 80.773 64.311 80.863 64.733 81.043 C 65.155 81.225 65.512 81.462 65.806 81.76 C 66.099 82.057 66.321 82.403 66.475 82.799 C 66.627 83.196 66.704 83.608 66.704 84.04 C 66.704 84.483 66.625 84.902 66.466 85.297 Z M 64.422 82.747 C 64.122 82.408 63.746 82.241 63.294 82.241 C 62.84 82.241 62.462 82.407 62.157 82.739 C 61.851 83.07 61.698 83.497 61.698 84.022 C 61.698 84.558 61.851 84.992 62.157 85.324 C 62.462 85.656 62.84 85.822 63.294 85.822 C 63.746 85.822 64.122 85.656 64.422 85.324 C 64.72 84.992 64.87 84.563 64.87 84.04 C 64.87 83.515 64.72 83.085 64.422 82.747 Z');

        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#29B0FF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");

        
        // Label
        shape = this.canvas.paper.text(0,0,'X>Y');
        shape.attr({"x":31.15625,"y":21.53788750000001,"text-anchor":"start","text":"X>Y","font-family":"\"Arial\"","font-size":20,"stroke":"none","fill":"#FFFFFF","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'x');
        shape.attr({"x":5,"y":77.53701250000003,"text-anchor":"start","text":"x","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#FFFFFF","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'y');
        shape.attr({"x":5,"y":112.7890625,"text-anchor":"start","text":"y","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#FFFFFF","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'res');
        shape.attr({"x":65.78125,"y":95.40741249999999,"text-anchor":"start","text":"res","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#FFFFFF","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
xgtyShape = xgtyShape.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);


// this._super(attr, setter, getter);

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