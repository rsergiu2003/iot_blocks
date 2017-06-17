/**
 * @class draw2d.shape.analog.OpAmp
 * Hand drawn arrow which points down left
 * 
 * See the example:
 *
 *     @example preview small frame
 *     
 *     var figure =  new draw2d.shape.analog.OpAmp({x:10, y:10});
 *     
 *     canvas.add(figure);
 *     
 *     
 * @extends draw2d.SVGFigure
 */
powerShape = draw2d.shape.basic.Image.extend({

    NAME:"powerShape",
    
  
    /**
     * @constructor
     * Create a new instance
     * 
     * @param {Object} [attr] the configuration of the shape
     */
    init: function(attr, setter,getter){
        this._super($.extend({stroke:0, bgColor:"#f0f0ff"},attr), setter,getter);
        
        this.inputLocator = new draw2d.layout.locator.InputPortLocator()
        
        this.createPort("input", this.inputLocator);
        this.createPort("input", this.inputLocator);
        
        this.createPort("output");
        this.path = "plug.png";
    },
  
    /**
     * @inheritdoc
     */
     repaint: function(attributes)
     {
         if (this.repaintBlocked===true || this.shape === null){
             return;
         }

         attributes= attributes || {};

         // redirect the backgroundColor to an internal SVG node.
         // In this case only a small part of the shape are filled with the background color
         // and not the complete rectangle/bounding box
         //
         attributes["fill"] = "none";
         if( this.bgColor!=null){
             this.svgNodes[0].attr({fill: this.bgColor.hash()});
         }
         
         this._super(attributes);
         
         return this;
     }

});