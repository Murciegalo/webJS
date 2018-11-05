console.log('works');
const magnify = (imgID, zoom) =>{
  let imageMag , glass, w, h, bw;
  // 1.Get image
  imageMag = document.getElementById('myImage');
  // 2. Create glassMagnifier (div)
  glass = document.createElement('DIV');
  // 3. Set its class Name
  glass.setAttribute('class', 'magnifierGlass');
  // 4. Insert it in DOM
  imageMag.parentElement.insertBefore(glass, imageMag);
  // set background properties for the magnifier glass
  glass.style.backgroundImage = `url${imageMag.src}`;
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = `${imageMag.width * zoom}px  ${imageMag.height * zoom}px`;
  bw = 3;
  // Loop size
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

//execute a function when someone moves the magnifier glass
 glass.addEventListener("mousemove", moveMagnifier);
 imageMag.addEventListener("mousemove", moveMagnifier);
//also for touch screens
glass.addEventListener("touchmove", moveMagnifier);
imageMag.addEventListener("touchmove", moveMagnifier);

  // Function for Magnifier Mechanism
  function moveMagnifier(e){
    let pos, x, y;
    //prevent any other actions that may occur when moving over the image
    e.preventDefault();
    // get the cursor's x and y positions
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    // prevent the magnifier glass from being positioned outside the image
    // Width Image
    if (x > imageMag.width - (w /zoom)) {
          x = imageMag.width - (w/ zoom);}
    if (x < w/ zoom) {x = w/ zoom;}
    // Height image
    if (y > imageMag.height - (h/ zoom)) {y = imageMag.height - (h/ zoom);}
    if (y < h/ zoom) {y = h/ zoom;}
    // set the position of the magnifier glass
    glass.style.left = `${x - w}px`;
    glass.style.top = `${y - h}px`;
    //display what the magnifier glass "sees"
    glass.style.backgroundPosition = ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  function getCursorPos(e) {
    let a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = imageMag.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}
//--------------------------------
magnify('myImage', 3);
