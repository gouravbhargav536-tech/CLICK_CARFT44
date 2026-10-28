import { TranslationSchema } from '../../types';
import { hi } from './hi';

// Helper to clone Hindi base with regional language localized keys
export const gu: TranslationSchema = {
  ...hi,
  nav: {
    ...hi.nav,
    home: 'હોમ',
    about: 'અમારા વિશે',
    services: 'સેવાઓ',
    difference: 'શા માટે અમે',
    reviews: 'ગ્રાહક સમીક્ષાઓ',
    founder: 'સંસ્થાપક',
    contact: 'સંપર્ક',
    getStarted: 'શરૂ કરો',
    callNow: 'કોલ કરો',
  },
  hero: {
    ...hi.hero,
    offerBadge: '🔥 મર્યાદિત સમયની ઓફર: પ્રથમ કેમ્પેઈન પર 50% ડિસ્કાઉન્ટ',
    headlineStart: 'નકામા લાઈક્સ પર રૂપિયા વેડફવાનું બંધ કરો.',
    headlineHighlight: 'ટાર્ગેટેડ જાહેરાતોથી વાસ્તવિક ગ્રાહકો',
    headlineEnd: 'અને વેચાણ મેળવો.',
    subheadline:
      'ક્લિકક્રાફ્ટ ડિજિટલ એજન્સી વ્યવસાયો માટે એવા મેટા એડ્સ અને લેન્ડિંગ પેજ બનાવે છે જે માત્ર લાઈક્સ નહીં પરંતુ સીધા વાસ્તવિક ગ્રાહકો લાવે છે.',
    ctaPrimary: '50% ડિસ્કાઉન્ટ મેળવો',
    ctaSecondary: 'વોટ્સએપ પર વાત કરો',
  },
};

export const mr: TranslationSchema = {
  ...hi,
  nav: {
    ...hi.nav,
    home: 'होम',
    about: 'आमच्याबद्दल',
    services: 'सेवा',
    difference: 'आमचे वेगळेपण',
    reviews: 'अभिप्राय',
    founder: 'संस्थापक',
    contact: 'संपर्क',
    getStarted: 'सुरू करा',
    callNow: 'कॉल करा',
  },
  hero: {
    ...hi.hero,
    offerBadge: '🔥 मर्यादित कालावधीची ऑफर: पहिल्या मोहिमेवर 50% सूट',
    headlineStart: 'फालतू लाइक्सवर पैसे वाया घालवणे थांबवा.',
    headlineHighlight: 'टार्गेटेड जाहिरातींद्वारे खरे ग्राहक',
    headlineEnd: 'आणि थेट विक्री मिळवा.',
    subheadline:
      'आम्ही अशा मेटा जाहिराती आणि लँडिंग पेजेस डिझाइन करतो ज्या केवळ लाइक्स नाही तर थेट व्यवसाय आणि ग्राहक देतात. "प्रत्येक क्लिक मौल्यवान बनवणे" हेच आमचे ध्येय आहे.',
    ctaPrimary: '50% सूट मिळवा',
    ctaSecondary: 'व्हॉट्सॲपवर बोला',
  },
};

export const pa: TranslationSchema = {
  ...hi,
  nav: {
    ...hi.nav,
    home: 'ਹੋਮ',
    about: 'ਸਾਡੇ ਬਾਰੇ',
    services: 'ਸੇਵਾਵਾਂ',
    difference: 'ਸਾਡੀ ਵਿਸ਼ੇਸ਼ਤਾ',
    reviews: 'ਗਾਹਕਾਂ ਦੀ ਰਾਏ',
    founder: 'ਸੰਸਥਾਪਕ',
    contact: 'ਸੰਪਰਕ',
    getStarted: 'ਸ਼ੁਰੂ ਕਰੋ',
    callNow: 'ਕਾਲ ਕਰੋ',
  },
  hero: {
    ...hi.hero,
    offerBadge: '🔥 ਸੀਮਤ ਸਮੇਂ ਦੀ ਪੇਸ਼ਕਸ਼: ਪਹਿਲੀ ਮੁਹਿੰਮ ਤੇ 50% ਛੋਟ',
    headlineStart: 'ਨਕਲੀ ਲਾਈਕਾਂ ਤੇ ਪੈਸੇ ਬਰਬਾਦ ਕਰਨੇ ਬੰਦ ਕਰੋ।',
    headlineHighlight: 'ਟਾਰਗੇਟਡ ਇਸ਼ਤਿਹਾਰਾਂ ਨਾਲ ਅਸਲ ਗਾਹਕ',
    headlineEnd: 'ਅਤੇ ਵਿਕਰੀ ਹਾਸਲ ਕਰੋ।',
    subheadline:
      'ਅਸੀਂ ਕਾਰੋਬਾਰਾਂ ਲਈ ਅਜਿਹੇ ਮੈਟਾ ਐਡਸ ਅਤੇ ਲੈਂਡਿੰਗ ਪੇਜ ਬਣਾਉਂਦੇ ਹਾਂ ਜੋ ਅਸਲ ਗਾਹਕ ਲਿਆਉਂਦੇ ਹਨ। "ਹਰ ਕਲਿੱਕ ਨੂੰ ਕੀਮਤੀ ਬਣਾਉਣਾ" ਸਾਡਾ ਮਕਸਦ ਹੈ।',
    ctaPrimary: '50% ਛੋਟ ਲਵੋ',
    ctaSecondary: 'ਵਟਸਐਪ ਤੇ ਗੱਲ ਕਰੋ',
  },
};

export const bn: TranslationSchema = {
  ...hi,
  nav: {
    ...hi.nav,
    home: 'হোম',
    about: 'আমাদের সম্পর্কে',
    services: 'সেবাসমূহ',
    difference: 'কেন আমরা',
    reviews: 'গ্রাহক মতামত',
    founder: 'প্রতিষ্ঠাতা',
    contact: 'যোগাযোগ',
    getStarted: 'শুরু করুন',
    callNow: 'কল করুন',
  },
  hero: {
    ...hi.hero,
    offerBadge: '🔥 সীমিত সময়ের অফার: প্রথম ক্যাম্পেইনে ৫০% ছাড়',
    headlineStart: 'অপ্রয়োজনীয় লাইকে টাকা নষ্ট করা বন্ধ করুন।',
    headlineHighlight: 'সঠিক বিজ্ঞাপনে আসল ক্রেতা',
    headlineEnd: 'এবং লাভজনক বিক্রয় পান।',
    subheadline:
      'আমরা এমন মেটা বিজ্ঞাপন ও ল্যান্ডিং পেজ তৈরি করি যা শুধু লাইক নয়, আসল ক্রেতা ও লিড এনে দেয়। প্রতিটি ক্লিককে মূল্যবান করাই আমাদের লক্ষ্য।',
    ctaPrimary: '৫০% ছাড় পান',
    ctaSecondary: 'হোয়াটসঅ্যাপে কথা বলুন',
  },
};

export const ta: TranslationSchema = {
  ...hi,
  nav: {
    ...hi.nav,
    home: 'முகப்பு',
    about: 'எங்களை பற்றி',
    services: 'சேவைகள்',
    difference: 'எங்கள் சிறப்பு',
    reviews: 'மதிப்புரைகள்',
    founder: 'நிறுவனர்',
    contact: 'தொடர்பு',
    getStarted: 'தொடங்குங்கள்',
    callNow: 'அழைக்கவும்',
  },
  hero: {
    ...hi.hero,
    offerBadge: '🔥 வரையறுக்கப்பட்ட சலுகை: முதல் விளம்பரத்திற்கு 50% தள்ளுபடி',
    headlineStart: 'வெறும் லைக்குகளுக்கு பணம் வீணடிப்பதை நிறுத்துங்கள்.',
    headlineHighlight: 'உண்மையான வாடிக்கையாளர்களைப் பெறுங்கள்',
    headlineEnd: 'இலக்கு விளம்பரங்கள் மூலம்.',
    subheadline:
      'உங்கள் வணிகத்தை உயர்த்தும் இலக்கு சார்ந்த மெட்டா விளம்பரங்கள் மற்றும் லேண்டிங் பக்கங்களை நாங்கள் உருவாக்குகிறோம். ஒவ்வொரு கிளிக்கும் மதிப்புமிக்கது.',
    ctaPrimary: '50% தள்ளுபடி பெறுக',
    ctaSecondary: 'வாட்ஸ்அப்பில் பேசவும்',
  },
};

export const te: TranslationSchema = {
  ...hi,
  nav: {
    ...hi.nav,
    home: 'హోమ్',
    about: 'మా గురించి',
    services: 'సేవలు',
    difference: 'మా ప్రత్యేకత',
    reviews: 'సమీక్షలు',
    founder: 'వ్యవస్థాపకుడు',
    contact: 'సంప్రదించండి',
    getStarted: 'ప్రారంభించండి',
    callNow: 'కాల్ చేయండి',
  },
  hero: {
    ...hi.hero,
    offerBadge: '🔥 పరిమిత సమయం ఆఫర్: మొదటి క్యాంపెయిన్‌పై 50% తగ్గింపు',
    headlineStart: 'వ్యర్థమైన లైక్‌లపై డబ్బు వృథా చేయడం ఆపండి.',
    headlineHighlight: 'ఖచ్చితమైన ప్రకటనలతో నిజమైన కస్టమర్లు',
    headlineEnd: 'మరియు విక్రయాలు పొందండి.',
    subheadline:
      'లైక్‌లు మాత్రమే కాకుండా నిజమైన కొనుగోలుదారులు మరియు లీడ్స్ తెచ్చే మెటా యాడ్స్ మరియు ల్యాండింగ్ పేజీలను మేము రూపొందిస్తాము.',
    ctaPrimary: '50% తగ్గింపు పొందండి',
    ctaSecondary: 'వాట్సాప్‌లో మాట్లాడండి',
  },
};

export const kn: TranslationSchema = {
  ...hi,
  nav: {
    ...hi.nav,
    home: 'ಮುಖಪುಟ',
    about: 'ನಮ್ಮ ಬಗ್ಗೆ',
    services: 'ಸೇವೆಗಳು',
    difference: 'ನಮ್ಮ ವೈಶಿಷ್ಟ್ಯ',
    reviews: 'ವಿಮರ್ಶೆಗಳು',
    founder: 'ಸಂಸ್ಥಾಪಕರು',
    contact: 'ಸಂಪರ್ಕಿಸಿ',
    getStarted: 'ಪ್ರಾರಂಭಿಸಿ',
    callNow: 'ಕರೆ ಮಾಡಿ',
  },
  hero: {
    ...hi.hero,
    offerBadge: '🔥 ಸೀಮಿತ ಸಮಯದ ಆಫರ್: ಮೊದಲ ಅಭಿಯಾನಕ್ಕೆ 50% ರಿಯಾಯಿತಿ',
    headlineStart: 'ವ್ಯರ್ಥ ಲೈಕ್‌ಗಳಿಗೆ ಹಣ ಪೋಲು ಮಾಡುವುದನ್ನು ನಿಲ್ಲಿಸಿ.',
    headlineHighlight: 'ನಿಜವಾದ ಗ್ರಾಹಕರನ್ನು ಪಡೆಯಿರಿ',
    headlineEnd: 'ಗುರಿ ಆಧಾರಿತ ಜಾಹೀರಾತುಗಳಿಂದ.',
    subheadline:
      'ವ್ಯವಹಾರಗಳಿಗೆ ಕೇವಲ ಲೈಕ್ಸ್ ಅಲ್ಲ, ನಿಜವಾದ ಗ್ರಾಹಕರು ಮತ್ತು ಮಾರಾಟ ತರುವ ಮೆಟಾ ಜಾಹೀರಾತುಗಳನ್ನು ನಾವು ನಿರ್ಮಿಸುತ್ತೇವೆ. ಪ್ರತಿಯೊಂದು ಕ್ಲಿಕ್ ಮೌಲ್ಯಯುತ.',
    ctaPrimary: '50% ರಿಯಾಯಿತಿ ಪಡೆಯಿರಿ',
    ctaSecondary: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಮಾತನಾಡಿ',
  },
};

export const ml: TranslationSchema = {
  ...hi,
  nav: {
    ...hi.nav,
    home: 'ഹോം',
    about: 'ഞങ്ങളെക്കുറിച്ച്',
    services: 'സേവനങ്ങൾ',
    difference: 'ഞങ്ങളുടെ പ്രത്യേകത',
    reviews: 'അഭിപ്രായങ്ങൾ',
    founder: 'സ്ഥാപകൻ',
    contact: 'ബന്ധപ്പെടുക',
    getStarted: 'ആരംഭിക്കുക',
    callNow: 'വിളിക്കുക',
  },
  hero: {
    ...hi.hero,
    offerBadge: '🔥 പരിമിതകാല ഓഫർ: ആദ്യ കാമ്പെയ്‌നിൽ 50% ഇളവ്',
    headlineStart: 'വെറുതെ ലൈക്കുകൾക്ക് പണം പാഴാക്കുന്നത് നിർത്തൂ.',
    headlineHighlight: 'യഥാർത്ഥ ഉപഭോക്താക്കളെ നേടൂ',
    headlineEnd: 'ടാർഗെറ്റഡ് പരസ്യങ്ങളിലൂടെ.',
    subheadline:
      'ബിസിനസ്സുകൾക്ക് യഥാർത്ഥ ഉപഭോക്താക്കളെയും ലീഡുകളെയും എത്തിക്കുന്ന മെറ്റാ പരസ്യങ്ങളും ലാൻഡിംഗ് പേജുകളും ഞങ്ങൾ നിർമ്മിക്കുന്നു.',
    ctaPrimary: '50% ഇളവ് നേടൂ',
    ctaSecondary: 'വാട്ട്‌സ്ആപ്പിൽ ബന്ധപ്പെടുക',
  },
};

export const ur: TranslationSchema = {
  ...hi,
  nav: {
    home: 'ہوم',
    about: 'ہمارے بارے میں',
    services: 'خدمات',
    difference: 'ہماری خصوصیت',
    reviews: 'گاہکوں کی رائے',
    founder: 'بانی',
    contact: 'رابطہ',
    getStarted: 'شروع کریں',
    callNow: 'کال کریں',
  },
  hero: {
    ...hi.hero,
    offerBadge: '🔥 محدود وقت کی پیشکش: پہلی مہم پر 50٪ رعایت',
    headlineStart: 'بیکار لائکس پر پیسے ضائع کرنا بند کریں۔',
    headlineHighlight: 'ہدف بنائے گئے اشتہارات سے حقیقی گاہک',
    headlineEnd: 'اور منافع حاصل کریں۔',
    subheadline:
      'کلک کرافٹ ڈیجیٹل ایجنسی حقیقی گاہک لانے والے میٹا اشتہارات اور لینڈنگ پیجز تیار کرتی ہے۔ ہمارا مشن ہر کلک کو قیمتی بنانا ہے۔',
    ctaPrimary: '50٪ رعایت حاصل کریں',
    ctaSecondary: 'واٹس ایپ پر رابطہ کریں',
  },
};
