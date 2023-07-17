## GetDriveing
<img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689448397/Screenshot_2023-07-15_at_20.12.59_w3qytx.png" width = 15% alt="GetDriveing Logo"></a>

This is a responsive community website for people to share tips about how to make the most out of Google Drive Workplace, which recently grew to more than 3 billion users globally. Googe Drive Workplace  has a host of features and add-ons. At my work where Google Drive is the main system for making and sharing files, I’ve often heard things like ‘Oh, I didn’t know you could do that - that’s helpful!’ when I have showed someone a feature on Drive. Similarly,  I  have learned from others about add ons that I hadn’t previously heard of that offered extra useful functionality. There are also some features I have used that I can’t quite remember the exact text required (like forcing a pdf export of a live document) that I also find I am constantly searching the internet to find again.  I presume that the many employees at my workplace who only use Google Drive’s basic features are fairly representative of Google Drive Workplace users as a whole, and this website offers a chance to help people like them tap into more of the functionality that Google Drive has to offer, make it easier to access information they already found helpful and make their work more efficient as a result.

There are several features that make this community website become a useful resource. The rating feature can help users find what others have viewed the most helpful tips. If there is a tip that a user finds particularly helpful, they can find all the tips by the author of that particular tip so see if they like their other tips as well. Users can also ‘save’ a tip so they can easily find it again and refer back to it if needed. The main homepage feed sorts tips by when they were created so users can find what has been recently added so as to not miss anything.


Link to deployed site: <a href="https://get-drive-ing-36f2443ac236.herokuapp.com/" target="new" aria-label="Deployed GetDriveing website">https://get-drive-ing-36f2443ac236.herokuapp.com/</a>

Link to deployed database: <a href="https://getdriveing-6933e088a46d.herokuapp.com/" target="new" aria-label="Deployed GetDriveing website">https://getdriveing-6933e088a46d.herokuapp.com/</a> 

<img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1682343969/Screenshot_2023-04-24_at_14.21.09_lze2u8.png" width = 95% alt="Sample views of GetDriveing website"></a>

## Contents
<a href="#UX" aria-label="Jump to User Experience">User Experience</a>
<ul>
<li><a href="#stories" aria-label="Jump to User Exeperience: User Stories">User Stories</a></li>
<li><a href="#accessibility" aria-label="Jump to User Exeperience: Accessibility">Accessibility</a></li>
<li><a href="#design" aria-label="Jump to User Exeperience: Design">Design (typography, colour and imagery)</a></li>
<li><a href="#wireframes" aria-label="Jump to User Exeperience: Wireframes">Wireframes</a></li></ul>
<p><a href="#features" aria-label="Jump to Features">Key Features</a></p>
<p><a href="#technologies" aria-label="Jump to Technologies">Technologies Used</a></p>
<ul>
<li><a href="#languages" aria-label="Jump to Technologies: Languages Used">Languages Used</a></li>
<li><a href="#frameworks" aria-label="Jump to Technologies: Frameworks, Programmes and Libraries">Frameworks, Programmes and Libraries</a></li>
</ul>
<p><a href="#testing" aria-label="Jump to Testing">Testing</a></p>
<ul>
<li><a href="#html" aria-label="Jump to Testing: HTML">HTML</a></li>
<li><a href="#css" aria-label="Jump to Testing: CSS">CSS</a></li>
<li><a href="#java" aria-label="Jump to Testing: Javascript">Javascript</a></li>
<li><a href="#lighthouse" aria-label="Jump to Testing: Lighthouse">Lighthouse</a></li>
<li><a href="#python" aria-label="Jump to Testing: Python">Python</a></li>
<li><a href="#contrast" aria-label="Jump to Testing: Colour Contrast">Colour Contrast</a></li>
<li><a href="#UX-test" aria-label="Jump to Testing: User Experience">User Story: Experience Testing</a></li>
<li><a href="#feature-test" aria-label="Jump to Testing: Feature Testing">Feature Testing</a></li>
<li><a href="#further-testing" aria-label="Jump to Testing: Feature Testing">Further Testing</a></li>
<li><a href="#fixed-bugs" aria-label="Jump to Testing: Fixed bugs">Fixed bugs</a></li>
<li><a href="#known-bugs" aria-label="Jump to Testing: Known bugs">Known bugs</a></li>
</ul>
<p><a href="#deploy" aria-label="Jump to Deployment and Local Development">Deployment and Local Development</a></p>
<ul>
<li><a href="#deployment" aria-label="Jump to Deployment">Deployment</a></li>
<li><a href="#fork" aria-label="Jump to How to fork the repo">How to fork the repo</a></li>
<li><a href="#clone" aria-label="Jump to How to clone the repo">How to clone the repo</a></li>
</ul>
<p><a href="#credits" aria-label="Jump to Credits">Credits</a></p>
<ul>
<li><a href="#code" aria-label="Jump to Credits - Code">Code</a></li>
<li><a href="#content" aria-label="Jump to Credits - Content">Content</a></li>
<li><a href="#media" aria-label="Jump to Credits - Media">Media</a></li>
</ul>

<h2 id="UX">User Experience</h2>

<ul id="stories"><li><strong>User Stories</strong></li>

<ul><li>Accounts</li><ul><li>Sign up: As a user, I can create an account so that I can add, save, and rate tips.
</li>
<li>Sign  in: As a user, I can easily log into my account once created so that I can access the additional features.
</li>
<li>Status: As a user, I can easily see if I’m logged in or not so I can login if required.
</li>
<li>Logout: As a user, I can stayed logged in until I choose to log out so that way I don’t have to keep logging in to access the additional features.
</li>
</ul></ul>

<ul><li>Viewing Content</li><ul><li>Menu Access: As a user, I can access the menu from all pages so that I can easily make my way through the site.
</li>
<li>Responsiveness: As a user, I can read and use the content / features on all screensizes so that I can access the content from various devices.
</li>
<li>Menu options: As a user, I will only see menu options relevant to me based on my login status so that the appropriate content is easily accessible.
</li>
</ul></ul>

<ul><li>Tip Feed</li><ul><li>New info: As a user, I can find the most recently added content on the homepage so I don’t miss new content.
</li>
<li>Filter/sort tips: As a user, I can access the full list of tips which I can sort and filter so I can easily find what I need.
</li>
<li>Search tips: As a user, I can search the tip title and content so that I can find a topic of particular interest to me.
</li>
<li>Create a tip: As a logged in user, I can create a tip so that I can share my insights with the wider community.
</li>
<li>Infinite scroll: As a user I can keep scrolling through the tips on the site, that are loaded for me automatically so that I don’t have to click to get more tips.
</li>
<li>Tip Overview: As a user, I can see key tip information (Title Category, Ability, rating and number of times saved) so I know whether I want to access the detailed content.</li>
</ul></ul>

<ul><li>Tip Details</li><ul><li>Tip Detail: As a user, I can open a specific tip so that I can access the content and any comments.
</li>
<li>Comment View: As a user, I  can read comments made about a specific tip so that I can connect with the community.
</li>
<li>Rate tip: As a logged in user, I can rate how useful the tip is so that I can help the community find the most useful content.
</li>
<li>Save tip: As a logged in user, I can save the tip so that I can easily find it again for reference.
</li>
<li>Create comment: As a logged in user, I can comment on a tip so that the community can benefit from additional insights or can answer a question I might post.
</li>
<li>Edit/delete comment: As a logged in user, I can edit or delete a comment that I had previously made so that I can keep my information relevant.</li>
<li>User stats: As a user I can view information about a specific user: avatar, bio, number of tips created and date joined so that I can learn more about them</li>
<li>View tip by user: As a user I can view all the tips by a specific user so I can access further tips by someone I found helpful.</li>
</ul></ul>

<ul><li>Personal Profile Info</li><ul><li>Edit tip: As a logged in user, I can edit a tip that I had previously created so that I can keep it up to date.
</li>
<li>Delete tip: As a logged in user, I can delete a tip that I had previously created so that only relevant information stays on the site.
</li>
<li>See saved tips: As a logged in user, I can access my saved tips easily so that I can easily find what I need.
</li>
<li>Unsave tip: As a logged in user, I can ‘unsave’ a tip so that only information I want saved appears. 
</li>
<li>As a logged in user, I can update my profile image so other users can see an avatar of my choosing by my content.
</li>
</ul></ul></ul>

<ul id="accessibility"><li><strong>Accessibility</strong></li>

<ul><li>Designed to assist users with screenreaders</li><ul>
<li>Images have an alt tag label</li>
<li>Links have an aria label</li>
<li>Semantic elements used</li></ul></ul></ul>
<ul><li id="design"><strong>Design</strong></li></ul>
<ul><ul><li>Typography</li>
<ul><li>I chose Roboto (embedded from Google Fonts) as it is designed for reading comfort on screen. In addition, it renders well on modern browsers and also performs on older versions. It is the ‘back-up’ font on the Google website; the Google ‘normal’ font isn’t an open source font.</li></ul>
<img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689450148/Screenshot_2023-07-13_at_15.59.08_asqhdj.png" width = 75% alt="Example of font used in different weights">
<li>Colour Scheme</li>
<ul><li>I chose the colours based on the Google logo as I wanted to show the relationship between the information on this website and Google Drive (whilst also making it clear in the footer that it is not actually affiliated with Google). The grey and black provide a contrast to the bright colours thereby creating additional readability options. The blue is used predominantly in each header to convey stability and reliability.</li>
</ul>
<img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689450136/Screenshot_2023-07-11_at_13.43.40_irjmdp.png" width = 25% alt="Examples of colours used">

<li>Imagery</li>
<ul><li>There is intentionally minimal imagery on this website as I wanted the focus to be on the tips and ‘tip authors’ themselves. I also wanted the website to feel professional / trustworthy and so as an alternative to images, I used a blue gradient to convey that message. There is, however, a logo, a favicon and a default user profile image with the option for users to add screenshots and avatar images as well as widely recognised icons to help people on their user journey.

Logo: I used the Google colours to pull out the word ‘Drive’ and make the play on words clear. 
Favicon: I again used the Google colours with the css gradient in the center in a circle (same shape as the user profile images) to pull the elements together.
User profile image: This is a fairly standard style photo for people who have yet to add an avatar.</li>
</ul></ul>

<img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689450559/Screenshot_2023-07-15_at_20.49.07_ed26s2.png" width = 95% alt="Core images used in GetDriveing website"></a>

<ul><li id="wireframes"><strong>Wireframes</strong></li>
## ADD ACTUAL sCREEnsHOT - homepage
<ul><li><a href="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689450844/GetDriveIngHomepage_mi6cwc.png" aria-label="a wireframe of the desktop homepage(logged out)" target="new">Mockup of the Homepage (desktop view; logged out)</a> and the <a href="#" aria-label="screenshot of the desktop version of the homepage" target="new">actual screenshot.</a></li>

<li><a href="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689450924/GetDriveIng6_w6cplf.png" aria-label="a wireframe mockup of the Tip Detail page (desktop view; logged in" target="new">Mockup of the Tip Detail page (desktop view; logged in)</a> and the <a href="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689451794/Screenshot_2023-07-15_at_21.09.35_robd7a.png" aria-label="screenshot of the desktop version of the Tip Detail page" target="new">actual screenshot.</a></li>

<li><a href="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689450924/GetDriveIng11_rqlbf8.png" aria-label="a wireframe mockup of the Sign up page (mobile view" target="new">Mockup of the Sign up page (mobile view)</a> and the <a href="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689456115/Screenshot_2023-07-15_at_22.19.34_raqt36.png" aria-label="screenshot of the Sign up page" target="new">actual screenshot.</a></li>

<li><a href="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689451909/GetDriveIng4_iffphc.png" aria-label="a wireframe mockup of the My Info up page (desktop view)" target="new">Mockup of the My Info page (desktop view)</a> and the <a href="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689453092/Screenshot_2023-07-15_at_21.22.22_pz1sbc.png" aria-label="screenshot of the My Info page (logged out)" target="new">actual screenshot (logged out)</a>
and the <a href="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689453091/Screenshot_2023-07-15_at_21.23.22_ohkh3q.png" aria-label="screenshot of the My Info page (logged in)" target="new">actual screenshot (logged in).</a></li>
</ul>


<h2 id="features">Key Features</h2>
<ul>
<li>Responsive on all device sizes</li>
<li>Login authentication</li>
<li>Linked to a django rest framework database that users can amend/delete/create content to</li>
<li>Accessible for screenreaders</li>
<li>Tips can be sorted and filtered</li>
</ul>

<h2 id="technologies">Technologies Used</h2>

<h3 id="languages">Languages Used</h3>
<ul>
<li>HTML5</li>
<li>CSS</li>
<li>Javascript</li>
<li>Python (for the linked database not this frontend)</li>
</ul>

<h3 id="frameworks"> Frameworks, Libraries & Programmes Used</h3>
<ul>
<li><strong>React</strong> a JavaScript library used to build the user interface
</li>
<li><strong>React Bootstrap 5.0 v2.8.0</strong> used as a starting point to stylise navigation bar, cards, forms and layout to accompany bespoke CSS styling.</li>
<li><strong>Django Rest Framework</strong> used in a separate deployed website to provide the database.</li>
<li><strong>Google Fonts:</strong> used to import the 'Roboto' font used on all pages.</li>
<li><strong>Font Awesome:</strong> used for iconography</li>
<li><strong>Git:</strong> used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.</li>
<li><strong>GitHub:</strong> used to store the projects code after being pushed from Git.</li>
<li><strong>Axios:</strong> used to connect the frontend website to the database</li>
<li><strong>Adobe Photoshop:</strong> used to resize images for the website.</li>
<li><strong>Adobe InDesign:</strong> used to create the wireframes during the design process.</li>
<li><strong>Adobe Illustrator:</strong> used to create the logo.</li>
<li><strong>Cloudinary:</strong> used to store photographs for the project</li>
<li><strong>ICO Converter:</strong> used to create a favicon from an image created in Illustrator <a href="https://www.icoconverter.com/" aria-label="ICO Converter website" target="new">ICO Converter website</a></li>
<li><strong>ElephantSQL:</strong> used to host the database</li>
<li><strong>Google Dev Tools:</strong> used to troubleshoot and test features, responsiveness and styling.</li>
<li><strong>Am I Responsive:</strong> used to demonstrate how the website looks on various websites</li>
</ul>

## Testing

<p id="html"><strong>HTML:</strong> Tested the following pages with <a href="https://validator.w3.org/" target="new" aria-label="W3C Markup Validator website">W3C Markup Validator</a></p>
<ul>
<li>account/login.html: #### https://school-clubs.herokuapp.com/accounts/login/</li>
</ul>

<p id="css"><strong>CSS:</strong> Tested style pages with <a href="https://jigsaw.w3.org/css-validator/" aria-label="W3C CSS Validator" target="new"> W3C CSS Validator</a> using the direct input method (no errors found) </p>

<p id="java"><strong>Javascript:</strong> Tested with eslint in terminal by running 'npx eslint src'<a href="https://eslint.org/" target="new" aria-label="eslint website">eslint website</a> (no errors found)</p>
</ul>

<p id="lighthouse"><strong>Lighthouse:</strong></p>
<img 
              src="#" width = 25% alt="Lighthouse report"></a>

<p id="contrast"><strong>Colour contrast:</strong> Tested using <a href="https://webaim.org/resources/contrastchecker/" target="new" aria-label="Webaim Contrast Checker Website">Webaim Contrast Checker Website</a></p>
<ul><li>#4285f4 (blue); pass AA on white background - large text only; pass AA on black background/vice versa</li>
<li>#ea4335 (red) pass AA on white background - large text; pass AA on black background/vice versa</li>
<li>#34a853 (green); pass AA on white background - large text; pass AA on black background/vice versa</li>
<li>#f9ab00 (yellow); fail all on white background; pass all on black background/vice versa</li>
<li>#575756 (grey); pass all on white background; fail all on black background/vice versa</li>
<li>#000 (black); pass all on white background; fail all on black background/vice versa</li>

<p>Sadly, because I wanted to use the Google colours, I had to sacrifice AAA standards. I aimed for AA by only using the colour for large fonts and keeping the above restraints into consideration.</p>

<h3 id="UX-test"> User Story: Experience Testing</h3>

| Goals | How are they achieved? | Image |
| :--- | :--- | :--- |
| `Accounts` |
|  |  |  |
| Sign up: As a user, I can create an account so that I can add, save, and rate tips. | If a user isn't currently signed in, they are given very limited options as to what they are able to do when they get to the homepage (either sign in or sign up) so that they are aware that they can create an account. | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689456115/Screenshot_2023-07-15_at_22.19.34_raqt36.png" alt="Screenshot of sign up page"> |
| Sign in: As a user, I can easily log into my account once created so that I can access the additional features. | The Sign in buttons are clearly visible on the homepage and in the NavBar if a user isn't already signed in. If they try to access content that requires an account, they are given a button to sign in| <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689453092/Screenshot_2023-07-15_at_21.22.22_pz1sbc.png" alt="Screenshot of sign in message"> |
| Status: As a user, I can easily see if I’m logged in or not so I can login if required. | The NavBar changes once logged in to clearly show this. Also, the user's name appears throughout the site| <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689456386/Screenshot_2023-07-15_at_22.26.14_vdhgwz.png" alt="Image showing both versions of the NavBar"> |
| Logout: As a user, I can stayed logged in until I choose to log out so that way I don’t have to keep logging in to access the additional features. | This is configured in the CurrentUsesrContext.js file| xxx |
| `Viewing Content` |
|  |  |  |
| Menu Access: As a user, I can access the menu from all pages so that I can easily make my way through the site. | The relevant menu (either for logged out / logged in user) is accessible on all pages; example page shown in image. | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689453091/Screenshot_2023-07-15_at_21.23.22_ohkh3q.png" alt="Screenshot of sample page with menu"> |
| Responsiveness: As a user, I can read and use the content / features on all screensizes so that I can access the content from various devices. | The site is designed with Bootstrap, and certain font elements (like the nav bar and the stars in the header of the Tip Ability page) are designed to go smaller at certain widths to fit neatly. | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689451794/Screenshot_2023-07-15_at_21.09.35_robd7a.png" alt="Screenshot of Tip Detail page"> |
| >Menu options: As a user, I will only see menu options relevant to me based on my login status so that the appropriate content is easily accessible. | The navbar changes once logged in so instead of just seeing options for Home, Sign up/Sign in, they see options for Home, Saved Tips, Add a Tip, My Info and Logout instead. | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689456386/Screenshot_2023-07-15_at_22.26.14_vdhgwz.png" alt="Image showing both versions of the NavBar"> |
| `Tip Feed` |
|  |  |  |
| New info: As a user, I can find the most recently added content on the homepage so I don’t miss new content.| The feed on the homepage defaults to showing all tips in a newest to oldest order. | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689453091/Screenshot_2023-07-15_at_21.23.22_ohkh3q.png" alt="Screenshot of sample page with menu"> |
| Filter/sort tips: As a user, I can access the full list of tips which I can sort and filter so I can easily find what I need.| XXX | XXX |
| Search tips: As a user, I can search the tip title and content so that I can find a topic of particular interest to me.| There is a search bar at the top of each Tips Feed that searches Titles and Content. | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689511502/Screenshot_2023-07-16_at_13.44.15_qgoqvq.png" alt="Screenshot of search bar">  |
| Create a tip: As a logged in user, I can create a tip so that I can share my insights with the wider community.| Once logged in, there is page accessible from the menu with a form to add a tip. | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689511722/Screenshot_2023-07-16_at_13.48.31_nergdc.png" alt="Screenshot of Add a Tip page">  |
| Infinite scroll: As a user I can keep scrolling through the tips on the site, that are loaded for me automatically so that I don’t have to click to get more tips.| XXX | XXX |
| Tip Overview: As a user, I can see key tip information (Title Category, Ability, rating and number of times saved) so I know whether I want to access the detailed content.| In the tip feed, you can see the title, category, ability, times saved and average rating along with the first few lines of the tip and a link to Read the Tip. | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689539373/Screenshot_2023-07-16_at_21.29.16_emidlo.png" alt="Screenshot of a sample overview in the tip feed.">  |
| `Tip Details` |
|  |  |  |
| Tip Detail: As a user, I can open a specific tip so that I can access the content and any comments.| In the tip feed, you can see the first bit of text along with an ellipsis to signify there is more along with a link to "Read tip" which takes you to a page with the full tip details. | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689539373/Screenshot_2023-07-16_at_21.29.16_emidlo.png" alt="Screenshot of a sample overview in the tip feed.">  |
| Comment View: As a user, I  can read comments made about a specific tip so that I can connect with the community.| In the tip detail page, you can read any comments that have been made, regardless of logged in status | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689539782/Screenshot_2023-07-16_at_21.36.12_ctxe5s.png" alt="Screenshot of a sample overview in the tip feed."> |
| Rate tip: As a logged in user, I can rate how useful the tip is so that I can help the community find the most useful content. | In the tip detail page, you can rate the tip if you are logged in and you don't own the tip. | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689539881/Screenshot_2023-07-16_at_21.37.31_n5e0kl.png" alt="Screenshot of the rate tip stars and button."> |
| Save tip: As a logged in user, I can save the tip so that I can easily find it again for reference. | In the tip detail page, you can save the tip if you are logged in and don't own the tip; the user can then find the saved tip on the saved tips page (/saved). | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689540053/Screenshot_2023-07-16_at_21.40.07_drjw14.png" alt="Screenshot of the save tip button."> |
| Create comment: As a logged in user, I can comment on a tip so that the community can benefit from additional insights or can answer a question I might post. | In the tip detail page, you can add a comment to the tip if you are logged in. | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689540208/Screenshot_2023-07-16_at_21.43.17_r6dlif.png" alt="Screenshot of a the create a comment form"> |
| Edit/delete comment: As a logged in user, I can edit or delete a comment that I had previously made so that I can keep my information relevant.  | In the tip detail page, you can see edit/delete buttons on any comment you have made (user has to be logged in). | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689539782/Screenshot_2023-07-16_at_21.36.12_ctxe5s.png" alt="Screenshot of a comment with edit/delete buttons"> |
| User stats: As a user I can view information about a specific user: avatar, bio, number of tips created and date joined so that I can learn more about them  | In the tip detail page, you can see a grey sidebar with the author's details. | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689540522/Screenshot_2023-07-16_at_21.48.13_nixgzb.png" alt="Screenshot of the grey sidebar with author information"> |
| View tip by user: As a user I can view all the tips by a specific user so I can access further tips by someone I found helpful.  | In the tip detail page, you can see a grey sidebar with the author's details that has a link to all the tips that they have made. | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689540522/Screenshot_2023-07-16_at_21.48.13_nixgzb.png" alt="Screenshot of the grey sidebar with author information, including a button with a link to their tips"> |
| `Personal Profile Info` |
|  |  |  |
| Edit tip: As a logged in user, I can edit a tip that I had previously created so that I can keep it up to date.  | In the tip detail page, you can see a button to edit the tip if you are logged in and own the tip. You can also see an edit button the tip feeds (if logged in and the owner). | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689540842/Screenshot_2023-07-16_at_21.53.42_rxupvn.png" alt="Screenshot of the tip feed with the grey edit button"> |
| Delete tip: As a logged in user, I can delete a tip that I had previously created so that only relevant information stays on the site.  | On the tip detail page, you can see a button to delete the tip if you are logged in and own the tip. This prompts a modal so that tips are less likely to be deleted accidentally | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689540989/Screenshot_2023-07-16_at_21.55.49_jxxjbu.png" alt="Screenshot of the edit and delete button"> |
| See saved tips: As a logged in user, I can access my saved tips easily so that I can easily find what I need.  | Saved tips can be found on /saved | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689541148/Screenshot_2023-07-16_at_21.58.56_mr88hg.png" alt="Screenshot of saved tips page"> |
| Unsave tip: As a logged in user, I can ‘unsave’ a tip so that only information I want saved appears.  | If a logged in user has already saved a tip, an 'unsave this tip button' appears instead | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689541286/Screenshot_2023-07-16_at_22.01.17_mzkxop.png" alt="Screenshot of unsave this tip button"> |
| As a logged in user, I can update my profile image so other users can see an avatar of my choosing by my content.  | A logged in user can access the option to edit their profile, including image, on /saved, /my-info and on the tip detail page of any tips that they own. | <img src="https://res.cloudinary.com/dd4cchm7g/image/upload/v1689541489/Screenshot_2023-07-16_at_22.04.33_cxchfg.png" alt="Screenshot of unsave this tip button"> |

<h3 id="feature-test">Feature Testing</h3>


`NavBar- not logged in`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Logo Image | Reloads Home page | Clicked logo image | Home page reloads | Pass |
| Home Link in Navbar | Reloads Home page | Clicked link | Home page reloads | Pass |
| Sign In Link in Navbar | Go to /sign-in | Clicked link | Went to sign in page | Pass |
| Sign Up Link in Navbar | Go to /sign-up | Clicked link | Went to sign up page | Pass |

`NavBar- logged in`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Logo Image | Reloads Home page | Clicked logo image | Home page reloads | Pass |
| Home Link in Navbar | Reloads Home page | Clicked link | Home page reloads | Pass |
| Saved Tips Link in Navbar | Go to /saved | Clicked link | Went to /saved | Pass |
| Add a Tip Link in Navbar | Go to /tips/create | Clicked link | Went to /tips/create | Pass |
| My Info Link in Navbar | Go to /my-info | Clicked link | Went to /my-info | Pass |
| Logout Link in Navbar | logout and redirect to home | Clicked link | logged out and at / | Pass |

`Footer`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Footer text | Stuck at bottom of all pages | visited all pages | footer present | Pass |


`Sign in page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Need correct username  | incorrect username produces error | Used incorrect username | saw error | Pass |
| Need correct password | incorrect password produces error | Used incorrect password | saw error | Pass |
| Sign in | correct credentials signs in user | Used correct credentials | was signed in | Pass |
| Redirect to /my-info | correct credentials automatically redirects user to /my-info | Used correct credentials | automatically went to /my-info | Pass |
| Link to Sign Up | Got to /sign-up | Clicked link | went to /sign-up | Pass |
| Redirects to home | Visiting /sign-in when logged in redirects user to homepage  | Visited /sign-in when logged in | went to / | Pass |

`Sign up page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Unique credentials required | Using a pre-existing username produces error | Used pre-existing username | saw error | Pass |
| Passwords must match | using different passwords produces error | Used two different passwords | saw error | Pass |
| Passwords must have at least 8 characters | using short password produces error | Used a short password | saw error | Pass |
| Redirect to /sign-in | correct credentials automatically redirects user to /sign-in | Used correct credentials | automatically went to /sign-in | Pass |
| New credentials work | supplied credentials work on /sign-in page | Used supplied credentials | logged in successfully | Pass |
| Link to Sign In | Got to /sign-in | Clicked link | went to /sign-in | Pass |
| Redirects to home | Visiting /sign-up when logged in redirects user to homepage  | Visited /sign-up when logged in | went to / | Pass |