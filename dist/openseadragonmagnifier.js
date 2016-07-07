!function(e){"use strict";function i(e,i){e.style.webkitTransform="rotate("+i+"deg)",e.style.mozTransform="rotate("+i+"deg)",e.style.msTransform="rotate("+i+"deg)",e.style.oTransform="rotate("+i+"deg)",e.style.transform="rotate("+i+"deg)"}function t(e,i){for(var t,n=0;n<i.world.getItemCount();n++)t=i.world.getItemAt(n),e.world.addItem(o(e,t));i.world.addHandler("add-item",function(t){e.world.addItem(o(e,t.item),{index:i.world.getIndexOfItem(t.item)})})}function o(i,t){var o=new e.TiledImage({viewer:i,source:t.source,viewport:i.viewport,drawer:i.drawer,tileCache:t._tileCache,imageLoader:t._imageLoader,clip:t._clip,placeholderFillStyle:t.placeholderFillStyle,opacity:t.opacity,springStiffness:i.springStiffness,animationTime:i.animationTime,minZoomImageRatio:i.minZoomImageRatio,wrapHorizontal:i.wrapHorizontal,wrapVertical:i.wrapVertical,immediateRender:i.immediateRender,blendTime:i.blendTime,alwaysBlend:i.alwaysBlend,minPixelRatio:i.minPixelRatio,smoothTileEdgesMinZoom:i.smoothTileEdgesMinZoom,crossOriginPolicy:i.crossOriginPolicy,debugMode:i.debugMode});return o._originalForNavigator=t,i._matchBounds(o,t,!0),t.addHandler("bounds-change",function(){i._matchBounds(o,t)}),o}function n(e){this.viewport&&(this.panHorizontal||(e.delta.x=0),this.panVertical||(e.delta.y=0),this.viewport.panBy(this.viewer.viewport.deltaPointsFromPixels(e.delta)))}function r(e){var i=this.viewport.getBounds(!0),t=this.viewer.viewport.pixelFromPoint(i.getTopLeft(),!0),o=this.viewer.viewport.pixelFromPoint(i.getBottomRight(),!0).minus(this.totalBorderWidths),n=Math.abs(t.x-o.x),r=Math.abs(t.y-o.y),a=e.delta.x/n+e.delta.y/r,s=this.viewport.getZoom()*(1-a);s>this.minZoomImageRatio&&s<this.viewport.getMaxZoom()&&this.viewport.zoomTo(s,void 0,!0)}function a(e){var i=e.keyCode||e.charCode;String.fromCharCode(i)===this.keyboardShortcut&&this.toggleVisibility()}function s(e){e.style.display="none"===e.style.display?"block":"none"}if(!e.version||e.version.major<2)throw new Error("This version of MpenSeadragonmagnifier requires OpenSeadragon version 2.0.0+");e.Viewer.prototype.magnifier=function(i){return this.magnifierInstance&&!i||(i=i||{},i.viewer=this,this.magnifierInstance=new e.Magnifier(i)),this.magnifierInstance},e.Magnifier=function(o){var s,l,d=o.viewer,h=this;o.id?(this.element=document.getElementById(o.id),o.controlOptions=e.extend(!0,{anchor:e.ControlAnchor.NONE,attachToViewer:!1,autoFade:!1},o.controlOptions||{})):(o.id="magnifier-"+e.now(),this.element=e.makeNeutralElement("div"),o.controlOptions=e.extend(!0,{anchor:e.ControlAnchor.BOTTOM_RIGHT,attachToViewer:!0,autoFade:!1},o.controlOptions||{}),o.position&&("BOTTOM_RIGHT"===o.position?o.controlOptions.anchor=e.ControlAnchor.BOTTOM_RIGHT:"BOTTOM_LEFT"===o.position?o.controlOptions.anchor=e.ControlAnchor.BOTTOM_LEFT:"TOP_RIGHT"===o.position?o.controlOptions.anchor=e.ControlAnchor.TOP_RIGHT:"TOP_LEFT"===o.position?o.controlOptions.anchor=e.ControlAnchor.TOP_LEFT:"ABSOLUTE"===o.position&&(o.controlOptions.anchor=e.ControlAnchor.ABSOLUTE,o.controlOptions.top=o.top,o.controlOptions.left=o.left,o.controlOptions.height=o.height,o.controlOptions.width=o.width))),this.element.id=o.id,this.element.className+=" magnifier",o=e.extend(!0,e.DEFAULT_SETTINGS,{sizeRatio:.2,magnifierRotate:!0,minPixelRatio:d.minPixelRatio,defaultZoomLevel:2*d.viewport.getZoom(),minZoomLevel:1,keyboardShortcut:"m"},o,{element:this.element,tabIndex:-1,showNavigator:!1,showNavigationControl:!1,showSequenceControl:!1,magnifier:null,immediateRender:!0,blendTime:0,animationTime:0,autoResize:o.autoResize,minZoomImageRatio:1}),e.setElementTouchActionNone(this.element),this.borderWidth=2,this.fudge=new e.Point(1,1),this.totalBorderWidths=new e.Point(2*this.borderWidth,2*this.borderWidth).minus(this.fudge),o.controlOptions.anchor!==e.ControlAnchor.NONE&&!function(e,i){e.margin="0px",e.border=i+"px solid #555",e.padding="0px",e.background="#000",e.overflow="hidden"}(this.element.style,this.borderWidth),this.displayRegion=e.makeNeutralElement("div"),this.displayRegion.id=this.element.id+"-displayregion",this.displayRegion.className="displayregion",function(e,i){e.position="absolute",e.border=i+"px solid #900",e.margin="0px",e.padding="0px"}(this.displayRegion.style,this.borderWidth),this.regionMoveHangle=e.makeNeutralElement("div"),this.regionMoveHangle.id=this.element.id+"-displayregion-move",this.regionMoveHangle.className="displayregion-move",this.regionMoveHangle.style.width="10%",this.regionMoveHangle.style.height="10%",this.regionMoveHangle.style.maxWidth="50px",this.regionMoveHangle.style.maxHeight="50px",this.regionMoveHangle.style.cursor="move",this.regionMoveHangle.style.background="rgba(0, 0, 0, .1)",new e.MouseTracker({element:this.regionMoveHangle,dragHandler:e.delegate(this,n)}),this.regionResizeHangle=e.makeNeutralElement("div"),this.regionResizeHangle.id=this.element.id+"-displayregion-move",this.regionResizeHangle.className="displayregion-move",this.regionResizeHangle.style.position="absolute",this.regionResizeHangle.style.bottom="-1px",this.regionResizeHangle.style.right="-1px",this.regionResizeHangle.style.width="10%",this.regionResizeHangle.style.height="10%",this.regionResizeHangle.style.maxWidth="50px",this.regionResizeHangle.style.maxHeight="50px",this.regionResizeHangle.style.cursor="se-resize",this.regionResizeHangle.style.background="rgba(0, 0, 0, .1)",new e.MouseTracker({element:this.regionResizeHangle,dragHandler:e.delegate(this,r)}),this.displayRegionContainer=e.makeNeutralElement("div"),this.displayRegionContainer.id=this.element.id+"-displayregioncontainer",this.displayRegionContainer.className="displayregioncontainer",this.displayRegionContainer.style.width="0",this.displayRegionContainer.style.height="0",d.addControl(this.element,o.controlOptions),this._resizeWithViewer=o.controlOptions.anchor!==e.ControlAnchor.ABSOLUTE&&o.controlOptions.anchor!==e.ControlAnchor.NONE,this._resizeWithViewer&&(o.width&&o.height?(this.element.style.height="number"==typeof o.height?o.height+"px":o.height,this.element.style.width="number"==typeof o.width?o.width+"px":o.width):(s=e.getElementSize(d.element),this.element.style.height=Math.round(s.y*o.sizeRatio)+"px",this.element.style.width=Math.round(s.x*o.sizeRatio)+"px",this.oldViewerSize=s),l=e.getElementSize(this.element),this.elementArea=l.x*l.y),this.oldContainerSize=new e.Point(0,0),e.Viewer.apply(this,[o]),this.displayRegion.appendChild(this.regionMoveHangle),this.displayRegion.appendChild(this.regionResizeHangle),this.displayRegionContainer.appendChild(this.displayRegion),d.canvas.appendChild(this.displayRegionContainer),this.keyboardShortcut&&e.addEvent(this.viewer.container,"keypress",e.delegate(this,a),!1),o.magnifierRotate&&d.addHandler("rotate",function(e){var t=d.viewport.pixelFromPoint(d.viewport.getCenter(),!0);h.displayRegionContainer.style.transformOrigin=t.x+"px "+t.y+"px",i(h.displayRegionContainer,e.degrees),i(h.displayRegion,-e.degrees),h.viewport.setRotation(e.degrees)}),this.addHandler("reset-size",function(){h.viewport&&h.viewport.goHome(!0)}),this.addHandler("update-level",function(){d.viewport&&h.update(d.viewport)}),d.addHandler("update-level",function(){d.viewport&&h.update(d.viewport)}),d.addHandler("close",function(){h.close()}),d.addHandler("full-page",function(){d.viewport&&h.update(d.viewport)}),d.addHandler("full-screen",function(){d.viewport&&h.update(d.viewport)}),d.world.addHandler("update-viewport",function(){d.viewport&&h.update(d.viewport)}),d.world.addHandler("item-index-change",function(e){var i=h.world.getItemAt(e.previousIndex);h.world.setItemIndex(i,e.newIndex)}),d.world.addHandler("remove-item",function(e){var i=e.item,t=h._getMatchingItem(i);t&&h.world.removeItem(t)}),t(this,d),this.update(d.viewport)},e.extend(e.Magnifier.prototype,e.Viewer.prototype,{updateSize:function(){if(this.viewport){var i=new e.Point(0===this.container.clientWidth?1:this.container.clientWidth,0===this.container.clientHeight?1:this.container.clientHeight);i.equals(this.oldContainerSize)||(this.viewport.resize(i,!0),this.viewport.goHome(!0),this.oldContainerSize=i,this.drawer.clear(),this.world.draw())}},update:function(i){var t=e.getElementSize(this.viewer.element);if(this._resizeWithViewer&&t.x&&t.y&&!t.equals(this.oldViewerSize)){var o,n;this.oldViewerSize=t,this.maintainSizeRatio||!this.elementArea?(o=t.x*this.sizeRatio,n=t.y*this.sizeRatio):(o=Math.sqrt(this.elementArea*(t.x/t.y)),n=this.elementArea/o),this.element.style.width=Math.round(o)+"px",this.element.style.height=Math.round(n)+"px",this.elementArea||(this.elementArea=o*n),this.updateSize()}if(i&&this.viewport){var r=this.viewport.getBounds(!0),a=i.pixelFromPoint(r.getTopLeft(),!0),s=i.pixelFromPoint(r.getBottomRight(),!0).minus(this.totalBorderWidths),l=this.displayRegion.style;l.display=this.world.getItemCount()?"block":"none",l.top=Math.round(a.y)+"px",l.left=Math.round(a.x)+"px";var d=Math.abs(a.x-s.x),h=Math.abs(a.y-s.y);l.width=Math.round(Math.max(d,0))+"px",l.height=Math.round(Math.max(h,0))+"px"}},addTiledImage:function(i){var t=this,o=i.originalTiledImage;delete i.original;var n=e.extend({},i,{success:function(e){var i=e.item;i._originalForNavigator=o,t._matchBounds(i,o,!0),o.addHandler("bounds-change",function(){t._matchBounds(i,o)})}});return e.Viewer.prototype.addTiledImage.apply(this,[n])},toggleVisibility:function(){return s(this.element),s(this.displayRegionContainer),this},_getMatchingItem:function(e){for(var i,t=this.world.getItemCount(),o=0;o<t;o++)if(i=this.world.getItemAt(o),i._originalForNavigator===e)return i;return null},_matchBounds:function(e,i,t){var o=i.getBounds();e.setPosition(o.getTopLeft(),t),e.setWidth(o.width,t)}})}(OpenSeadragon);
//# sourceMappingURL=openseadragonmagnifier.js.map
