## Easy Tax Calculator

A simple tax calculator for U.S., U.K. and Singapore employees where one can enter their base salary, bonus and days of annual paid leave and see their respective take home salaries by different time frames.

Deployed [here](https://tax-calculator-pwa.vercel.app/)

### Fun Technologies Used and Learned!

- [TypeScript](https://www.typescriptlang.org/)
- [Angular](https://angular.io/), my former nemesis
- [SASS](https://sass-lang.com/) because Pythonic syntax is the best
- [Progressive Web App (PWA)](https://web.dev/progressive-web-apps/) because I discovered these existed
- [Vercel CI/CD Deployment](https://vercel.com/)

### Site Usage

- Just enter your base pre-tax salary and bonus into the provided inputs, as well as your days of leave, and the tax calculations and deductions will updated in real time!
- There's a handy currency converter on the top right in case you want to compare salaries
- The days of paid leave is used to calculate your adjusted daily take home pay. So if you would like to know how much cheddar you're hauling home every day of work, taking into account not getting paid when you're on leave, this is the tool for you!

### Installing a Progressive Web App

- Apparently, these days it's possible to make web apps that are **installable** on native mobile devices!
- They can be installed directly from the website, without needing to be listed on the App Store or Google Play store

#### Installing PWAs on iOS

- Go to the [website](https://tax-calculator-pwa.vercel.app/) using *Safari*
- Tap on the *share* icon either on the bottom (iPhone) or top-right (iPad) of the screen
- Scroll down and find the *Add to Home Screen* option
- Click *Add*, and there you go! It's now installed your phone

#### Installing PWAs on Android

Google does the best job of explaining this one, so [enjoy](https://support.google.com/chrome/answer/9658361?hl=en-GB&co=GENIE.Platform%3DAndroid&oco=0)

#### Advantages of PWAs

- Feel of a native mobile app (no annoying address bar)
- Works offline because a service worker keeps static components cached
- App Store can't take a cut of your revenue!


*Disclaimer*: The U.S. Tax system is so complicated that I probably missed some tax in the calculations. Use the U.S. calculator with caution
