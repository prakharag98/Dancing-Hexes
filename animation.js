function start() {
  var w = window.innerWidth;                                                                          //Get Windows Height and Width
  var h = window.innerHeight;
  console.log(w);
  console.log(h);

  startAnimation(document.getElementById("img-floater-1"), "d", "r", 1);                              //These function call start the translational and vertical animation.
  startAnimation(document.getElementById("img-floater-2"), "u", "r", 1);                              //Rotation is obtained using CSS elements.
  startAnimation(document.getElementById("img-floater-3"), "u", "l", 2);
  startAnimation(document.getElementById("img-floater-4"), "d", "r", 1);
  startAnimation(document.getElementById("img-floater-5"), "u", "r", 2);
  startAnimation(document.getElementById("img-floater-6"), "d", "l", 1);

  function startAnimation(elem, flag_ver, flag_hor, speed) {                                         // elem takes the object argument, flag_ver takes vertical movement( d, u)
    var int = setInterval(animate_img, 5);                                                           // flag_hor takes horizontal movement (l,r), speed takes the relative change value.

    function animate_img() {

      var w = window.innerWidth;
      var h = window.innerHeight;

      style = window.getComputedStyle(elem);                                                         //get the style array for the document
      var pos_top = style.getPropertyValue('top');                                                   
      var pos_left = style.getPropertyValue('left');
      var wid = style.getPropertyValue('width');
      var hei = style.getPropertyValue('height');

      pos_top = pos_top.substring(0, pos_top.length - 2);                                            // removes the 'px' from the size value returned and convert to a number
      pos_left = pos_left.substring(0, pos_left.length - 2);
      wid = wid.substring(0, wid.length - 2);
      hei = hei.substring(0, hei.length - 2);

      pos_top = Number(pos_top);
      pos_left = Number(pos_left);
      wid = Number(wid);
      hei = Number(hei);

      if (flag_ver == 'd') {                                                                          // displaces the object downwards if margin allows
        if (pos_top + 1 < (h - hei))
          pos_top = pos_top + 1;
        else {
          flag_ver = 'u';
          return;
        }
      }

      if (flag_ver == 'u') {                                                                          // displaces the object upwards if margin allows
        if (pos_top - 1 >= 0)
          pos_top = pos_top - 1;
        else {
          flag_ver = 'd';
          return;
        }
      }

      if (flag_hor == 'r') {                                                                          // displaces the object rightwards if margin allows
        if (pos_left + speed * 1 < w - wid)
          pos_left = pos_left + speed * 1;
        else {
          flag_hor = 'l';
          return;
        }
      }
      if (flag_hor == 'l') {                                                                          // displaces the object leftwards if margin allows
        if (pos_left - speed * 1 >= 0)
          pos_left = pos_left - speed * 1;
        else {
          flag_hor = 'r';
          return;
        }
      }

      elem.style.top = pos_top + "px";                                                                //sets the width and height again for the object
      elem.style.left = pos_left + "px";
    }
  }
}
window.onload = start;                                                                                //automatically starts the function when page completely loads.
