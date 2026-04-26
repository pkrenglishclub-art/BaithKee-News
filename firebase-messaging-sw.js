importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// ⚠️ यहाँ अपने Firebase प्रोजेक्ट की डिटेल्स डालें
const firebaseConfig = {
    apiKey: "AIzaSyAwpf0IEd0wl6mvJ6EV5XB3XQYoLwmWXZQ",
    authDomain: "https://baithkee-news.firebaseapp.com",
    projectId: "baithkee-news",
    storageBucket: "https://baithkee-news.firebasestorage.app",
    messagingSenderId: "274990392562",
    appId: "274990392562"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxZYThJov7nVLeejJp30nZ130Js5tuIKOicgFSzAT8BV-sWAhDWy2oWKX5uzTY9BpRefSvN-leUHeaIvcTPDYCX7G2qjChtibiJapDQ1IzCTVekLffx7d-jZopQRENCRh-12BzEHwC4azCmX1mcavCBGCfa8Yf3Rhv0XxucZ6IwppXX1m_flG5YV1X8ig/s1600/20260412_015639_0000.png',
    image: payload.notification.image // न्यूज़ की फोटो भी लॉक स्क्रीन पर दिखेगी
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});


