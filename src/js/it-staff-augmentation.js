
// Accordion Function
function toggleAccordionPPC(button) {
  const content = button.nextElementSibling;
  const isOpen = content.classList.contains("show");
  const icon = button.querySelector(".transform");
  const plusIcon = button.querySelector(".plus-icon");
  const minusIcon = button.querySelector(".minus-icon");

  // Close all other accordions in the same container? 
  // The original behavior seemed to allow multiple or maybe not, but let's stick to standard behavior.
  // The original function wasn't found, but usually these collapse others. 
  // Let's implement independent toggling for now as it's safer, or check other accordion logic in main script.
  // Looking at the HTML structure, it uses `accordion-content-ppc` class.

  if (isOpen) {
    content.classList.remove("show");
    content.style.maxHeight = null;
    if (icon) icon.classList.remove("rotate-180");
  } else {
    content.classList.add("show");
    content.style.maxHeight = content.scrollHeight + "px";
    if (icon) icon.classList.add("rotate-180");
  }
}

// Data for Tools and Technologies
const toolsData = {
  column1: [
    {
      title: "Frontend & Mobile Programming Languages",
      items: [
        { name: "Swift", icon: "./img/tic-swift.svg" },
        { name: "Kotlin", icon: "./img/isa/tic-Kotlin.svg" },
        { name: "Dart", icon: "./img/dart-thumb.svg" },
        { name: "JavaScript", icon: "./img/tic-JavaScript.svg" },
        { name: "TypeScript", icon: "./img/TypeScript.svg" }
      ]
    },
    {
      title: "General Purpose / Legacy / System",
      items: [
        { name: "Objective-C", icon: "./img/obj-c.svg" },
        { name: "C++", icon: "./img/cpp.svg" },
        { name: "ColdFusion", icon: "./img/cf.svg" }
      ]
    },
    {
        title: "APIs & Integrations",
        items: [
             { name: "GO build", icon: "./img/g-icon.svg" },
             { name: "Go Test", icon: "./img/g-icon.svg" },
             { name: "Go Fmt", icon: "./img/g-icon.svg" },
             { name: "Go Get", icon: "./img/g-icon.svg" },
             { name: "Go Run", icon: "./img/g-icon.svg" }
        ]
    },
    {
        title: "Backend Frameworks",
        items: [
            { name: "Node.js", icon: "./img/tic-Node.js.svg" },
            { name: "Express.js", icon: "./img/express-icon.svg" },
            { name: "Django", icon: "./img/tic-Django.svg" },
            { name: "Flask", icon: "./img/flask-icon.svg" },
            { name: "FastAPI", icon: "./img/FastAPI 1.png" },
            { name: "Laravel", icon: "./img/laravel.svg" },
            { name: "Spring", icon: "./img/tic-Spring_Boot.svg" },
            { name: "Ruby on Rails", icon: "./img/ruby-icon.svg" },
            { name: ".NET", icon: "./img/dotnet.svg" },
            { name: "Revel", icon: "./img/tic-revel.svg" },
            { name: "Gin", icon: "./img/isa/gin.svg" }
        ]
    },
    {
        title: "State Management & Utilities",
        items: [
            { name: "Redux", icon: "./img/tic-React-Redux.svg" },
            { name: "MobX", icon: "./img/m-icon.svg" },
            { name: "Zustand", icon: "./img/z-icon.svg" },
            { name: "BLoC", icon: "./img/b-icon.svg" },
            { name: "Hooks", icon: "./img/h-icon.svg" },
            { name: "HOC", icon: "./img/h-icon.svg" }
        ]
    },
    {
        title: "Social Media APIs",
        items: [
            { name: "Facebook API", icon: "./img/fb-ic.svg" },
            { name: "Instagram API", icon: "./img/insta-ic.svg" },
            { name: "YouTube API", icon: "./img/youtube.svg" },
            { name: "Spotify API", icon: "./img/s-icon.svg" },
            { name: "Apple Music API", icon: "./img/apple-173_svgrepo.com.svg" },
            { name: "Google API", icon: "./img/google-g.svg" },
            { name: "SoundCloud API", icon: "./img/s-icon.svg" },
            { name: "Jira REST API", icon: "./img/jira-ic.svg" },
            { name: "GitHub API", icon: "./img/github-ic.svg" }
        ]
    },
    {
        title: "Location & Utility APIs",
        items: [
            { name: "Google Maps", icon: "./img/g-maps.svg" },
            { name: "Open Maps", icon: "./img/open-maps-icon.svg" }
        ]
    },
    {
        title: "Payments & Monetization",
        items: [
            { name: "Stripe", icon: "./img/stripe.svg" },
            { name: "PayPal", icon: "./img/tic-Paypal.svg" },
            { name: "Square Up", icon: "./img/squareup.svg" },
            { name: "Razorpay", icon: "./img/r-icon.svg" },
            { name: "Braintree", icon: "./img/b-icon.svg" },
            { name: "Authorize.net", icon: "./img/a-icon.svg" },
            { name: "GoDaddy Poynt", icon: "./img/g-icon.svg" },
            { name: "AfterPay", icon: "./img/a-icon.svg" },
            { name: "Affirm", icon: "./img/a-icon.svg" },
            { name: "Klarna", icon: "./img/k-icon.svg" },
            { name: "Apple Pay", icon: "./img/apple-pay.svg" }
        ]
    },
    {
        title: "NoSQL Databases",
        items: [
            { name: "MongoDB", icon: "./img/tic-Mongodb.svg" },
            { name: "Firebase Realtime Database", icon: "./img/tic-firebase.svg" },
            { name: "Firestore", icon: "./img/firestore-icon.svg" },
            { name: "DynamoDB", icon: "./img/dynamodb-icon.svg" },
            { name: "Redis", icon: "./img/redis-icon.svg" },
            { name: "CouchDB", icon: "./img/c-icon.svg" },
            { name: "RethinkDB", icon: "./img/r-icon.svg" }
        ]
    },
    {
        title: "Cloud Platforms & Hosting",
        items: [
            { name: "AWS (EC2, Lambda, Amplify, Datastore)", icon: "./img/aws--thumb.svg" },
            { name: "Google Cloud Platform (GCP)", icon: "./img/g-cloud.svg" },
            { name: "Microsoft Azure", icon: "./img/azure-logo.svg" },
            { name: "Netlify", icon: "./img/tic_Netlify.svg" },
            { name: "Vercel", icon: "./img/vercel.svg" },
            { name: "GoDaddy", icon: "./img/g-icon.svg" },
            { name: "ngrok", icon: "./img/n-icon.svg" }
        ]
    },
    {
        title: "Project Management",
        items: [
            { name: "Jira", icon: "./img/jira-ic.svg" },
            { name: "Trello", icon: "./img/t-icon.svg" },
            { name: "Asana", icon: "./img/a-icon.svg" },
            { name: "Basecamp", icon: "./img/b-icon.svg" },
            { name: "Slack", icon: "./img/slack-ic.svg" }
        ]
    },
    {
        title: "Testing & QA",
        items: [
            { name: "Jest", icon: "./img/jest-ic.svg" },
            { name: "Detox", icon: "./img/Detox.svg" },
            { name: "Espresso (UI Test)", icon: "./img/espresso-icon.svg" },
            { name: "JUnit (Functional Test)", icon: "./img/junit-thumb.svg" },
            { name: "Selenium", icon: "./img/selenium-ic.svg" },
            { name: "Go Test", icon: "./img/go-icon.svg" }
        ]
    },
    {
        title: "Build tools",
        items: [
            { name: "Go Build", icon: "./img/go-icon.svg" },
            { name: "Go Fmt", icon: "./img/go-icon.svg" },
            { name: "Go Get", icon: "./img/go-icon.svg" },
            { name: "Go Run", icon: "./img/go-icon.svg" }
        ]
    },
    {
        title: "Monitoring & Analytics",
        items: [
            { name: "Firebase", icon: "./img/tic-firebase.svg" },
            { name: "Flurry", icon: "./img/f-icon.svg" },
            { name: "Google Analytics", icon: "./img/g-analytics.svg" },
            { name: "Mixpanel", icon: "./img/m-icon.svg" },
            { name: "AppsFlyer", icon: "./img/a-icon.svg" },
            { name: "NewRelic", icon: "./img/n-icon.svg" },
            { name: "Amplitude", icon: "./img/a-icon.svg" }
        ]
    }
  ],
  column2: [
    {
      title: "Backend Programming Languages",
      items: [
        { name: "Python", icon: "./img/tic-Python.svg" },
        { name: "Java", icon: "./img/tic-java.svg" },
        { name: "Go", icon: "./img/go-thumb.svg" },
        { name: "Ruby", icon: "./img/ruby-1.svg" },
        { name: "PHP", icon: "./img/php.svg" },
        { name: "C#", icon: "./img/c-icon.svg" },
        { name: "Rust", icon: "./img/r-icon.svg" },
        { name: "R", icon: "./img/r-icon.svg" }
      ]
    },
    {
        title: "Frontend & Mobile Frameworks",
        items: [
            { name: "React", icon: "./img/tic-reactjs.svg" },
            { name: "React Native", icon: "./img/reactnative-icon.svg" },
            { name: "Next.js", icon: "./img/nextjs.svg" },
            { name: "Angular", icon: "./img/angular.svg" },
            { name: "Vue.js", icon: "./img/vue.svg" },
            { name: "Flutter", icon: "./img/tic-Flutter.svg" },
            { name: "Ionic", icon: "./img/ionic.svg" },
            { name: "NativeScript", icon: "./img/nativescript-1-1-1.webp" },
            { name: "SwiftUI", icon: "./img/swiftui-96x96_2x.webp" },
            { name: "Android SDK", icon: "./img/android-icon.svg" },
            { name: "Android Jetpack Compose", icon: "./img/android-jetpack-compose-icon.svg" }
        ]
    },
    {
        title: "UI Libraries & Components",
        items: [
            { name: "Material UI", icon: "./img/m-icon.svg" },
            { name: "Tailwind CSS", icon: "./img/tailwind-css-icon.svg" },
            { name: "Tailwind UI", icon: "./img/tailwind-ui-icon.svg" },
            { name: "PrimeReact", icon: "./img/p-icon.svg" },
            { name: "Flowbite React", icon: "./img/f-icon.svg" },
            { name: "shadcn/ui", icon: "./img/s-icon.svg" },
            { name: "React Bootstrap", icon: "./img/r-icon.svg" },
            { name: "UIKit", icon: "./img/u-icon.svg" },
            { name: "Material Design Kit", icon: "./img/m-icon.svg" },
            { name: "React Native Components", icon: "./img/react-native-components-icon.svg" },
            { name: "Flutter Widgets", icon: "./img/flutter-widgets-icon.svg" }
        ]
    },
    {
        title: "Analytics & Marketing Integrations",
        items: [
            { name: "CleverTap", icon: "./img/c-icon.svg" },
            { name: "Firebase", icon: "./img/tic-firebase.svg" },
            { name: "Amplitude", icon: "./img/a-icon.svg" },
            { name: "AppsFlyer", icon: "./img/a-icon.svg" },
            { name: "Mixpanel", icon: "./img/m-icon.svg" },
            { name: "Flurry Analytics", icon: "./img/f-icon.svg" },
            { name: "Game Analytics", icon: "./img/g-icon.svg" },
            { name: "Urban Airship", icon: "./img/u-icon.svg" },
            { name: "Yandex", icon: "./img/y-icon.svg" },
            { name: "AppMetrica", icon: "./img/a-icon.svg" },
            { name: "AppLovin", icon: "./img/a-icon.svg" }
        ]
    },
    {
        title: "SQL Databases",
        items: [
            { name: "MySQL", icon: "./img/tic-mysql.svg" },
            { name: "PostgreSQL", icon: "./img/tic-postgresql.svg" },
            { name: "SQLite", icon: "./img/sqllite.svg" },
            { name: "MSSQL Server", icon: "./img/tic-mysql.svg" },
            { name: "MariaDB", icon: "./img/tic-MariaDB.svg" }
        ]
    },
    {
        title: "ORMs / Data Tools",
        items: [
            { name: "CoreData", icon: "./img/c-icon.svg" },
            { name: "Swift Data", icon: "./img/s-icon.svg" },
            { name: "Realm", icon: "./img/realm-icon.svg" },
            { name: "Hive", icon: "./img/h-icon.svg" },
            { name: "ObjectBox", icon: "./img/o-icon.svg" },
            { name: "Sembast", icon: "./img/s-icon.svg" },
            { name: "StorageMoor", icon: "./img/s-icon.svg" },
            { name: "GORM", icon: "./img/g-icon.svg" }
        ]
    },
    {
        title: "IDEs",
        items: [
            { name: "Android Studio", icon: "./img/android-studio-icon.svg" },
            { name: "Xcode", icon: "./img/xcode-icon.svg" },
            { name: "Eclipse", icon: "./img/eclipse-icon.svg" },
            { name: "IntelliJ IDEA", icon: "./img/intellij-icon.svg" },
            { name: "Visual Studio Code", icon: "./img/vscode-icon.svg" },
            { name: "WebStorm", icon: "./img/webstorm-icon.svg" },
            { name: "Vim", icon: "./img/vim-icon.svg" }
        ]
    }
  ]
};

function renderTools(columnId, data) {
  const container = document.getElementById(columnId);
  if (!container) return;

  data.forEach((section, index) => {
    // Determine margin top class
    const mtClass = (index === 0) ? (columnId === 'tools-column-2' ? 'mt-3 lg:mt-0' : '') : 'mt-3';
    
    const html = `
      <div class="px-[6px]">
        <div class="bg-[#20212B] rounded-[10px] min-h-[80px] ${mtClass}">
          <button
            class="w-full text-left focus:outline-none flex justify-between items-center text-white py-5 pl-5 pr-[50px] relative text-[23px]"
            onclick="toggleAccordionPPC(this)"
          >
            <span class="font-[300]">${section.title}</span>
            <span class="transform transition-transform duration-200 text-black absolute right-[15px] rounded-[50%]">
              <span class="plus-icon">
                <img src="./img/down-arrow-accrodion.svg" alt="plus" class="w-[20px] h-[20px]" />
              </span>
            </span>
          </button>
          <div class="accordion-content-ppc overflow-hidden transition-all duration-300 max-h-0">
            <div class="p-2 md:p-5 flex flex-wrap gap-2 md:gap-4">
              ${section.items.map(item => `
                <div class="p-[1px] rounded-xl bg-gradient-to-b from-[#f9fafb7e] to-[#2b2d3a50] inline-block">
                  <div class="flex items-center gap-2 border rounded-xl px-3 py-2 bg-[#2B2D3A]">
                    <img src="${item.icon}" class="w-8 h-8 md:w-10 md:h-10" alt="${item.name}" loading="lazy" />
                    <p class="text-white text-[16px] md:text-[18px]">${item.name}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', html);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTools('tools-column-1', toolsData.column1);
  renderTools('tools-column-2', toolsData.column2);
});
