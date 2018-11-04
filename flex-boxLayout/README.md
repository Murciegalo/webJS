# cssChallenge

## Challenge Criteria

Not always does a web developer have a free hand at what he should do. Actually most of the time he is at his client's and a graphic designer's mercy.

A front-end developer is given an image and is expected to deliver HTML & CSS code within a short time.

He can't choose to do something differently or in an easier way only because he feels like it. The client wants this exact design and thats it.

This challenge will make you try just that—take an image that the client made together with a graphic designer and recreate it in code.

### The Task
Download this file: challenge.zip and unpack it.

The file contains an image of the entire page's design, a document containing all the texts used on the page and a folder with separate images that you will need.

**The task is to recreate the designed image in working HTML & CSS.**

### Notes
The keyword here is **pixel perfection**. The client wants **exactly** this. Try to get as close to the original image as possible.

The fonts used in the design are [Alegreya](https://fonts.google.com/specimen/Alegreya) and [Open Sans](https://fonts.google.com/specimen/Open+Sans). Both can be found on Google fonts.

For measuring and color sampling a developer would generally use a graphical program (eg. Photoshop), but you can do just as well with a couple of Chrome plugins.

Just open the image with the design in Chrome (make sure you have it zoomed at 100% size) and use these plugins (or find some others for youself):

**For measurements:** [ruler plugin](https://chrome.google.com/webstore/detail/page-ruler/jlpkojjdgbllmedoapgfodplfhcbnbpn)

**For color picking:** [Colorzilla](https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp) or [ColorPick Eyedropper](https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg)

### Want more?
The designer did not design a mobile-phone version of the page. **Do it yourself!**

Add CSS media queries to make the page look nice on mobile phones and other small screen devices.

___

## My Comments

**There are two versions of this website:**

1. Using mostly Flexbox, with an added mobile version
2. Using a combination of Flexbox and CSS Grid. This version is accessible on [most current browsers](https://caniuse.com/#search=css%20grid), except for Android, Opera Mini, and only partial support for Explorer and Edge.

I used the a11y "skip to content" link to hide the navigation for this. To access it you'll need to use the `tab` key in Chrome, `alt-tab` in Safari (apparently Firefox requires more settings to make tabbed navigation work properly, unless run in safe-more?<a href="fn-1"><sup>1</sup></a>).

**However**, in Firefox's developer tools, there is a really great [grid inspector](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts) that overlays the declared grid for the container.

The CSS Grid version is also a lot more true to the original "pixel-perfect" design approach (one explanation is that I was building for the full-version rather than beginning from a mobile version and making that scale into the image). I'm sure it's because the image had some distortion (the links aren't level, for example), but getting to that state required some very… *interesting* measurements.

### CSS Grid

This was my first time using CSS Grid beyond small experiments on my own. I'm fully aware that there is probably a way to set-up the grid so that it reacts responsively with minimal effort. However, I was more interested in just seeing how it plays along on an actual web page than anything else.

This is going to be awesome. CSS Grid, in my minimally-educated and zero-experienced opinion, is awesome; big fan.

[Jen Simmons](http://jensimmons.com/) and [Rachel Andrew](https://rachelandrew.co.uk/) are pretty much **the** people to go to to learn more about this topic.

### Buttons

Not a lot of a11y effort went into this project, unfortunately. However, I did take the time to read more about how to treat buttons and when a button is a `<button>` and when it's not. This [article on creating accessible buttons](https://www.deque.com/blog/accessible-aria-buttons/) says,

> Buttons are used to trigger an action or event (i.e. submitting a form, opening a dialog, canceling an action, or deleting an item). 
> Buttons are not used to open webpages, instead use Links.

That's why I didn't use `<button>` for the call-to-action link in the `<header>`. It looks like a button, but that's merely its visual design—not its function.

And reading further, I also shouldn't include `role="button"` on things that look like buttons yet aren't. From the [MDN on this topic:](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role)

> Warning: Be careful when marking up links with the button role. Buttons are expected to be triggered using the Space key, while links are expected to be triggered through the Enter key. In other words, when links are used to behave like buttons, adding role="button" alone is not sufficient. It will also be necessary to add a key event handler that listens for the Space key in order to be consistent with native buttons.

## Ordering SASS Properties

In America we have a phrase, "majoring in the minors". That's what this whole topic of ordering properties is right now. I know it isn't **really** all that important, and finding the "right way" to order SASS properties isn't what I'm trying to do here. I'm simply trying to make a conscious effort to write legible code. It isn't the destination; it's the journey.

However, I did manage to read [this article by Chris Coyier](http://mediatemple.net/blog/tips/different-logical-ways-group-css-properties/) on the topic and made a slightly half-hearted attempt at staying true to it. 

```sass
.module
	font-family
	font-size
	line-height

	background
	color
	opacity

	border
	border-radius

	position
	display
	flex-direction
	clear
	overflow

	margin 
	padding  
	transform
	transform-origin
```

Essentially, this can be broken-down (broadly) into:

- text
- hue
- shape
- location
- relationship/size & visual

## Experimenting with Responsive Type

[This article](https://eduardoboucas.com/blog/2015/06/18/viewport-sized-typography-with-minimum-and-maximum-sizes.html) was interesting. I like the idea of it, and I added it in only one place on the main site (in the `<header>`) to try it out. It "works". However, I didn't really put a lot of effort into making it work at the level I'd like. I still need to spend more time playing around with this technique.

___

<sup id="#fn-1">1</sup> I could totally be wrong about this.