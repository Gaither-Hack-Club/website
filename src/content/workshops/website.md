---
name: Personal Website Workshop
description: Build your own personal website!
---

Welcome to Hack Club! Today we\'ll start building our own personal
website (with the help of Hack Club's mascot, Prophet Orpheus)!

# Part I: Setup

First, we need to get set up. Go to
<https://code.visualstudio.com/docs/?dv=win64user> to download Visual
Studio Code, which is a code editor. Instead of using something like
Microsoft Word, we an editor which is better suited for coding and comes
with a lot of cool tools and features. Once the download is finished, go
ahead and run the installer, and use all the default options.

Now that you have Visual Studio Code installed, there\'s one more thing
to do: extensions! Extensions for Visual Studio Code (abbreviated VSCode
from here on) are just like web browser extensions. To help us build our
website, we\'ll be using two extensions: \" Microsoft Edge Tools for VS
Code\" (which will allow us to use handy website tools) and \"Live
Server\" (which will spin up a local server that allows us to view our
app). To do this, open VSCode if it is not already open, go to the
\"Extensions\" tab on the left bar, which looks like some blocks. Then,
search for the extension you want to install, and click \"Install\".

![](/images/install-ext.png)

One last thing: we need to create a folder to store our website code in!
Go to the Explorer button (the top icon on the left bar), click \"Open
Folder\", go to your Documents folder, and create a new folder named
\"website\". Then open that new folder (If VSCode asks you if you trust
the folder, say \"Yes, I trust the authors\").

Now we\'re ready to code!

# Part II: The HTML File

## 1) The HTML file

HTML stands for Hypertext Markup Language. Every website from the New
York Times to Twitch uses HTML to display content on the web. Our HTML
file will be named index.html - this is the convention to use for the
home page on a website. Create a new file named \"index.html\" by
clicking on the \"New File\" icon next to the folder name in the
explorer pane, then **type** in the following code (VSCode may
autocomplete some parts. Also, ignore any errors that it gives you for
now). **DO NOT COPY AND PASTE.**

```
<!DOCTYPE html>
<html>
  <head> </head>
  <body></body>
</html>
```

This structure is common to all HTML pages. In fact, you can take a look
for yourself (NOTE: The developer tools are blocked on the school
computers, but feel free to try this out at home!) Just right click on
any web page, including this one, and click \"View page source\"
(sometimes called \"Inspect\" depending on your browser) to see what\'s
going on behind the scenes. You\'ll find each of these elements on every
page -- the doctype, and an HTML tag wrapped around a head and body.

![Inspect element panel containing html and css styles for a
website](/images/devtools.png)

**Before proceeding, we\'ll briefly go over what our template means.**

HTML works by storing information inside tags. <html></html> is an
example of one such tag. Inside <html></html>, we\'ve placed two
other sets of tags: \<head\>\</head\> (which wraps around the \"head\")
and <body></body> (which wraps around the \"body\"). The body holds
everything you would see in the actual tab/window when you open the
page, while the head conveys information about the page to the browser.

<!DOCTYPE html> tells the browser what version of HTML to expect.

Since it is a language, HTML is constantly growing and updating, so
there are multiple versions. In our case, we are going to use HTML5, the
latest version.

## 2) Previewing the page

Let\'s check out what our HTML file looks like in Live Preview! To do
this, click on the \"Go Live\" button on the right side of the lower bar
(If it opens a new browser tab, close it and go back to VSCode - we
won\'t need it):

![](/images/live.png)

This will start up a server that will serve your new website! To view
it, click the Microsoft Edge button on the left bar, and click \"Launch
Instance\". Microsoft Edge should open in a new pane on the right of
your screen. Set the website address in the address bar to
\"localhost:5500\" - this tells Microsoft Edge to use the server that we
just started using the Live Server extension. You should now see your
site! (Note: You will need to save your website files when you edit them
to see the changes - you can do this with the keyboard shortcut
Ctrl+S)However, as you can see, the page is blank. This is because we
haven\'t added anything to the body section yet. Let\'s add some
content!

## 3) Adding text to the body

As mentioned before, all information is wrapped in tags. Tags are
predefined in the language; think of them as the words in the language.
For text, HTML provides a number of tags to store text. We\'ll be using
two of the most basic ones: the h1 tag (\<h1\>) and the paragraph tag
(\<p\>). The h1 tag is the first in a series of heading tags, with h1
being the highest ranking, and h6 being the lowest ranking. Just as with
the other tags, you can place information within these tags by
surrounding your content with an opening and closing tag.

Go ahead and add your name in a heading tag, and your description in a
paragraph tag, in between the opening (<body>) and closing (</body>)
tags. Here is Prophet Orpheus\'s name and description:

```
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <h1>Prophet Orpheus</h1>
    <p>Coder Dino Will code for food</p>
  </body>
</html>
```

If your description was a few paragraphs, or had line breaks, you may
have noticed that one \<p\>\</p\> doesn\'t quite cut it. Adding extra
blank lines or spaces between words in HTML does not change the spacing
of the content. We can solve this by placing each paragraph in its own
\<p\>\</p\>.

```
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <h1>Prophet Orpheus</h1>
    <p>Coder Dino</p>
    <p>Will code for food</p>
  </body>
</html>
```

Take a look at your website now. Yay!

## 4) Adding images to the body

First, find an image you would like to include on your page. You can
find something on Google Images, Facebook, or Imgur. We\'ll need the
source URL of the image, so right click and select \"Copy image link\".

Images are included in HTML via the image tag, or \<img\>. The image tag
has an attribute called src, which will hold the _source_ URL of the
image you want to display. As an example, if I were to add this picture
of Prophet Orpheus, I would right click it and get the source URL, which
in this case is
<https://github.com/hackclub/dinosaurs/raw/master/smart_dinosaur_docs.png>,
and put it in an image tag like so:

```
<img
  src="https://github.com/hackclub/dinosaurs/raw/master/smart_dinosaur_docs.png"
/>
```

You may have noticed that the image tag doesn\'t have a closing tag like
\<h1\>\</h1\> or <body></body>. That\'s because it is a [[void
element]](https://www.w3.org/TR/html-markup/syntax.html#syntax-elements),
meaning that it doesn\'t have any contents.

Go ahead and add this into your index.html now. I put my picture before
my heading, and my code looks like this:

```
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <img
      src="https://github.com/hackclub/dinosaurs/raw/master/smart_dinosaur_docs.png"
    />
    <h1>Prophet Orpheus</h1>
    <p>Coder Dino</p>
    <p>Will code for food</p>
  </body>
</html>

```

![dinosaur reading a book and text describing it
below](/images/html-example.png)

Though our website has some text on it, we\'re not done. Our webpage is
fully functional, but needs a little help in the look-and-feel
department. Fret not. CSS will allow you to manipulate the styling of
your page in all your needs.

# Part III: The CSS File

So what is CSS? CSS, also known as Cascading Style Sheets, is a language
used for styling the tags (or \"elements\") on a web page.

While HTML oversees the content and the way it\'s structured, CSS is how
you\'ll specify how you\'d like your content to look---with it you can
set things like colors, spacing, and more.

## 1) Using CSS

First, we have to create a css file. Let\'s name it \"style.css\".

This is called an external style sheet because the CSS file is external
to the HTML file (i.e., the stylesheet is not inside the HTML file).

![](/images/explorer.png)

Although we have a CSS file, until we explicitly tell the HTML file to
use the CSS file, it will not use it. We must explicitly link the CSS
file in the HTML. We\'ll do this by typing the following into the head
of index.html (between \<head\> and \</head\>), because the head is
where we tell information about the page to the browser.

```
<link rel="stylesheet" href="style.css" />
```

\<link /\> is the link tag, which describes relationships between the
current file (in this case, index.html), and some external file
(style.css). In our example, rel=\"stylesheet\" specifies what this
relationship is, i.e., that style.css is a stylesheet, and href
(hypertext reference) specifies where the file can be found (in this
case, it\'s just the filename style.css). The link tag, similar to the
image tag, is a self-closing tag, once again denoted by the / that
precedes the \>.

Our HTML file now looks like so:

```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <img
      src="https://github.com/hackclub/dinosaurs/raw/master/smart_dinosaur_docs.png"
    />
    <h1>Prophet Orpheus</h1>
    <p>Coder Dino</p>
    <p>Will code for food</p>
  </body>
</html>
```

## 2) Adding styles to the stylesheet

Now that we\'ve linked our CSS file to our HTML file, let\'s write some
CSS to resize the image.

Open up style.css and type the following:

```
img {
  width: 200px;
}
```

A CSS stylesheet contains \"rules,\" each of which consists of a
selector, and attributes and values within brackets, known as a
\"declaration block\".

In our case, the selector is img. This merely selects all image tags
(and thus, all images). The rule then says to set the width (width) of
all things selected (in our case, all the images) to 200px. px refers to
pixels, which are a unit of measurement on the screen. When this rule is
applied, all the images on our page will have a width of 200 pixels.

Next, we\'re going to center-align the entire body section.

We\'ll add

```
body {
  text-align: center;
}
```

As with resizing the image, this rule specifies that every body tag
should have a text-align attribute of center. This centers everything on
our page because all of the content in our HTML file is written inside
the body tag.

Now let\'s change the font of our text. We\'ll add another attribute,
font-family, to the body rule, and set the value to \"Arial\". Now it
will look like this:

```
body {
  text-align: center;
  font-family: 'Arial';
}
```

You can take this even further by adding a bit of color to the page! The
attribute color allows you to set the text color, and background-color
allows you to set a background color. You can find a list of supported
color names over at
[[W3Schools]](https://www.w3schools.com/colors/colors_names.asp).
Keep in mind that it\'s a good idea to pick a combination of colors that
will keep the text readable.

```
body {
  text-align: center;
  font-family: 'Arial';
  background: azure;
  color: purple;
}
```

Take a look at your website now! Ah, it is truly beautiful to behold.

![Children celebrating](/images/yay.png)

# Part IV: Hacking

In this section, your challenge is to add additional features to your
website to make it your own!

Want to use a different font? Google it!\
Want to add more pictures? Google it!\
Want to add more text? Your entire life story? Background image?
Background music? Video? More pages? Google it!

A good way to get ideas for what to add to your website is to look at
other people\'s websites. Find a website that you like, either from the
list below or from somewhere else on the internet, pick one aspect of
that website that you would like on your own website, and Google for
ways to make it happen!

**Websites Made by Other Hack Club Hackers:**

[Zeyu (Peter) Yao](https://cytronicoder.com/)

[Reese Armstrong](https://reeseric.ci/)

[Malte I. Lauterbach](https://patakh.com/)

[Kognise](https://kognise.dev/)

[Celeste](https://celeste.exposed/)

[Leo McElroy](https://leomcelroy.com/)

[Sarthak Mohanty](https://sarthakmohanty.me/)

[Kat Huang](https://katmh.com/)

[Theo Bleier](https://tmb.sh/)

[Megan Cui](https://megancui.com/)

[Matthew Stanciu](https://matthewstanciu.me/)

[Winston Iskandar](https://winstoniskandar.com/)

[Sophie Huang](https://sohuang.github.io/)

[Jevin Sidhu](http://jevinsidhu.com/)

[Sam Poder](http://sampoder.com/)

[Nisarga Adhikary](https://nisarga.me/)

[Faisal Sayed](https://fayd.me/)

[EvanNotFound](https://ohevan.com/)

**Websites Made by Professionals:**

[Melody Starling](https://melody.dev/)

[Eel Slap](http://eelslap.com/)

[Lynn Fisher](https://lynnandtonic.com/)

[Tatiana Mac](https://tatianamac.com/)

[Mina Markham](http://mina.codes/)

[Robb Owen](https://robbowen.digital/)

[Alice Lee](http://byalicelee.com/)

[Yaron Schoen](http://yaronschoen.com/)

## Additional Resources

These are some additional resources that you can use to make your site
even better!

[HTML
Dog](http://www.htmldog.com/guides/html/beginner/):
_Very beginner focused. If you\'re not sure which one to choose,
pick this one._

[Free Code Camp](http://www.freecodecamp.com/map):
_Interactive and very methodical._

[Treehouse](https://teamtreehouse.com/library/html/introduction/):
_Their videos are extremely comprehensive and thorough._

# Part V: Sharing with the Community

You\'ve finished building a website, but it\'s not publicly accessible!
How are you supposed to share your creation?

Well, glad you asked, because guess what we\'ll be doing at the next
club meeting\...

See you there!

---

_This workshop was adapted from Hack Club's Personal Website workshop at https://workshops.hackclub.com/personal_website/_
