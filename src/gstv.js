$("body").append("<div id='thumb_viewer' style='position:absolute; visibility:hidden; top:15px; text-align:center; width:100%; padding:10px'></div>");

var viewer = $("#thumb_viewer");
var tmr    = null;

$("#main-ui .file-name a").live({
    mouseenter:
       function()
       {
          switch(this.href.substr(-4).toLowerCase())
          {
            case '.jpg':
            case 'jpeg':
            case '.gif':
            case '.png':
            case '.bmp':
            case 'tiff':
            tmr = setTimeout("displayViewer('"+this.href+"')",300);
            break;
          }
       },
    mouseleave:
       function()
       {
          viewer.css('visibility','hidden');
          clearTimeout(tmr);
       }
   }
);

function displayViewer(src) {
  viewer.html("<div id='viewer_loading' style='line-height:20px; font-size:22px; font-weight:bold; color:#fff; text-shadow: 0 0 6px black;'>Loading...</div><img style='max-width:300px;' src='"+src+"' onload='document.getElementById(\"viewer_loading\").innerHTML=\"\"; this.style.border=\"1px silver solid\"'>")
        .css('visibility','visible');
}
