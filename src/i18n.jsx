// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const localStorageKey = 'myAppTranslations';

const translationData = {

  
  en: {
    Headerlink: {
     
    },
    AboutUs: {
      title: 'About Xprios Surveys',
      description: 'Xprios Surveys is your go-to platform for creating, managing, and analyzing surveys with ease. Whether you\'re conducting market research, gathering customer feedback, or evaluating employee satisfaction, our feature-rich platform empowers you throughout the entire survey process.',
      features: {
        creation: {
          title: 'Survey Creation',
          description: 'Effortlessly create surveys using a variety of questions tailored to your needs.',
        },
        languages: {
          title: 'Languages',
          description: 'Empower your survey experiences with our multilingual options. Engage respondents with our multilingual support for comprehensive insights.',
        },
        templates: {
          title: 'Survey Templates',
          description: 'Gain access to a range of pre-built questionnaires designed by our team of research experts. Explore a vast library comprising customer and employee satisfaction surveys, website feedback surveys, Net Promoter Score surveys, and more.',
        },
      },
      learnMore: 'Learn More',
    },Landing:{
      title:"Join The Conversation,Take Our Surveys Today",
      description:"In a world of questions, surveys hold the answers",
      button:"sign up for free",
      nav1: 'Home',
      nav2: 'About',
      nav3: 'Template',
      nav4: 'Features',
      nav5: 'Contact',


    },Template:{
      title:"Obtain Survey Templates To Aid In Your Initial Steps",
      templates:{
        template1:{
          title:"Customer Satisfaction",
          description:"Enhance user experience and measure client happiness to improve products and overall business performance"
        },
        template2:{
          title:"Employee Engagement",
          description:"Build a healthy company culture by understanding how to retain top talent and foster workforce participation."
        },
        template3:{
          title:"Market Research",
          description:"Stay ahead of the competition by keeping track of industry trends, conducting market studies, and analyzing competitor research."
        },
        template4:{
          title:"Event Planning",
          description:"Gather feedback before, during, and after events to ensure successful event organization and improve future gatherings."
        },
        template5:{
          title:"Education and Schools",
          description:"Improve academic programs and processes in learning organizations by collecting insights and feedback from students and staff.",
        },
        template6:{
          title:"Healthcare",
          description:"Support patient-provider communication and enhance healthcare services by obtaining feedback on medical care and patient well-being."
        }

        
      }

    },
    Different:{
      title1:"Reports",
      caption1:"Generate comprehensive reports and export survey data to other tools for further analysis",
      title2:"Sms",
      caption2:"Optimize your survey outreach by leveraging personalized SMS invitations",
      title3:"Questionnaires",
      caption3:"Gain access to a range of pre-built questionnaires designed by our team of research experts",
      title4:"Helpdesk",
      caption4:"Experience comprehensive support options with our Helpdesk services",


    } ,
    Seeit:{
      title:"You have to see it to believe ",
      button:"submit",
      footer:"Contact us with xprios@gmail.com"
    },
    Footer:{
      title1:"Survey Creator",
      p:"Create surveys and gather valuable feedback from your audience.",
      title2:"Contact Us",
      email:"email",
      phone:"phone",
      title3:"Follow Us",
      last:"Survey Creator. All rights reserved"

    },
    Feature:{
      title:"Survey Features",
        features:{
          feature1:{
            title:"Survey Creation",
            description:"Create surveys easily using a variety of questions tailored to your needs."
          },
           feature2:{
            title:"Dashboards",
            description:"Empower your decision-making process with dynamic dashboards linked to real-time data."
          },
           feature3:{
            title:"QR Code",
            description:"Enhance survey outreach by incorporating QR codes in flyers, posters, or ads."
          },
           feature4:{
            title:"SMS",
            description:"Optimize survey outreach with personalized SMS invitations containing unique short URLs."
          },
           feature5:{
            title:"Real-time Report with Charts",
            description:"Effortlessly access real-time reports featuring interactive charts immediately upon survey launch."
          },
           feature6:{
            title:"Mobile-Responsive Surveys",
            description:"Optimize accessibility with mobile-responsive surveys that enhance user experience on various devices."
          },
        }
    },
    Contact:{
      title:"Xprios Enterprise",
      sub:"Join The Conversation, Take Our Surveys Today",
      form:{
        one:"FIRST NAME",
        two:"LAST NAME",
        three:"BUSINESS EMAIL",
        four:"COMPANY",
        five:"COUNTRY",
        six:"WRITE"
      },
      title2:"Make important business decisions with insight-based support",
      sub2:"Xpiros Enterprise allows you to get feedback from your target market, workers, and customers.",
      p1:" Oversee numerous individuals and have access to all survey information gathered throughout your company.",
      p2:" Make sure sensitive information is safeguarded using advanced security measures, such as encryption, SSO, and others.",
      p3:" Automate feedback and use APIs and strong connectors to link it to important corporate processes.",
      card1t:"Feedback",
      card1d:"Embrace it as a constructive guide on your journey towards growth and excellence.",
      card2t:"Collect Valuable Insights",
      card2d:"Gather valuable feedback and insights from your audience to make informed decisions.",

      community:"Community",
      communityd:"Creators Instagram Facebook Twitter LinkedIn Our BlogYouCam",
      ourstory:"Our story",
      ourstoryd:"Directory of LeadershipAppsPress RoomSurvey on Vision and MissionCollective , Inclusion, and DiversityHealth Scheme Honesty in ReportingOffice Addresses Remarkable Careers Map AsistRegister Sign Up",
      guidelines:"Guidelines",
      guidelinesd:" Rules of UsePrivacy StatementCalifornia Notice of PrivacyPolicy for Acceptable UsesSecurity ProclamationGDPR ConformityOpt-In Accessibility for EmailNotice about CookiesPersonalize",
      applycases:"Apply Cases",
      applycasesdp1:"Online SurveysSurveys on FacebookTemplate for Surveys: Planning Polls vs. Google FormsSurveys of employee satisfactionFree Templates for SurveysSurveys on the GoWays to Enhance Customer SupportCalculator for AB Test SignificanceNPS EstimatorSamples for QuestionnairesEvent Listing",
      applycasesdp2:" Calculator for Sample SizeCreating Quality SurveysLikert  MeasureAnalysis of Surveys360-degree evaluationSurveys of EducationQuestions for SurveysNPS EstimationQuestions from theCustomer Satisfaction SurveyQuestions about AgreedDisagreeEstablish a Survey",
      applycasesdp3:"  Online testsResearch: Qualitative versus QuantitativeConsumer FeedbackSurveys for Market ResearchNPS Survey: Best Practices for Survey DesignCalculator for Error MarginQuestion MarkQuestions about DemographicsSurvey on TrainingSurvey360 Review Template for Offline Use"
    },
    Testimonial:{
      title:"Read trusted reviews from our customers",
      testimonial:{
        name1:"Liya",
        des1:"Creating surveys has never been easier! This survey creation website offers an intuitive and user-friendly interface that allowed me to design and customize surveys effortlessly",
        name2:"Arjun",
        des2:"The range of question types and styling options provided a lot of flexibility. I particularly liked how quickly I could share the surveys with my audience, and the real-time analytics helped me gather valuable insights instantly.",
        name3:"Vimal",
        des3:"It's a powerful tool for anyone looking to gather feedback or conduct research. Highly recommended!",
        name4:"Gokul",
        des4:"Outstanding experience with this survey creation platform! The user interface is sleek and modern, making the entire survey-building process a breeze",
        name5:"Rose",
        des5:"The real-time collaboration feature was a game-changer for our team, allowing us to seamlessly work together on crafting the perfect surveys.",
        name6:"Aneesh",
        des6:"The analytics dashboard provides insightful data visualizations, making analysis a joy. This website has truly elevated our surveying game!"

      }
    }


  },
  ar: {
    Headerlink: {
      
    },
    AboutUs: {
      title: 'حول استطلاعات ',
      description: 'استطلاعات  هي منصتك المفضلة لإنشاء وإدارة وتحليل الاستطلاعات بسهولة. سواء كنت تجري أبحاث السوق أو تجمع ملاحظات العملاء أو تقيم رضا الموظفين ، فإن منصتنا الغنية بالميزات تمكنك طوال عملية الاستطلاع بأكملها.',
      features: {
        creation: {
          title: 'إنشاء استطلاع',
          description: 'قم بإنشاء استطلاعات بسهولة باستخدام مجموعة من الأسئلة المصممة حسب احتياجاتك.',
        },
        languages: {
          title: 'اللغات',
          description: 'قم بتمكين تجارب الاستطلاع الخاصة بك مع خياراتنا متعددة اللغات. اجذب المشاركين بدعمنا للغات متعددة للحصول على رؤى شاملة.',
        },
        templates: {
          title: 'قوالب الاستطلاع',
          description: 'احصل على وصول إلى مجموعة من الاستبيانات الجاهزة التي صممها فريقنا من خبراء البحوث. استكشف مكتبة واسعة تضم استطلاعات رضا العملاء والموظفين واستطلاعات تعليقات المواقع واستطلاعات  ، وأكثر من ذلك.',
        },
      },
      learnMore: 'اعرف أكثر',
    },Landing:{
      title:"انضم إلى المحادثة، قم بأخذ استطلاعاتنا اليوم",
      description:"في عالم من الأسئلة، تحمل الاستطلاعات الإجابات.",
      button:"اشترك مجانًا",
      nav1: 'الصفحة الرئيسية',
      nav2: 'صفحة حول',
      nav3: 'صفحة القالب',
      nav4: 'صفحة الميزات',
      nav5: 'صفحة الاتصال',

    },Template:{
      title:"احصل على قوالب استطلاع للمساعدة في خطواتك الأولى.",
      templates:{
      template1:{
        title:"رضا العملاء",
        description:"تعزيز تجربة المستخدم وقياس سعادة العملاء لتحسين المنتجات وأداء الأعمال بشكل عام."
      },
      template2:{
        title:" الانخراط الوظيفي",
        description:" بناء ثقافة شركية صحية من خلال فهم كيفية الاحتفاظ بأفضل المواهب وتعزيز مشاركة القوى العاملة."
      },
      template3:{
        title:" أبحاث السوق",
        description:"ابقَ في صدارة المنافسة عبر متابعة اتجاهات الصناعة، وإجراء دراسات السوق، وتحليل أبحاث المنافسين."
      },
      template4:{
        title:" تخطيط الفعاليات",
        description:" جمع التغذية الراجعة قبل، خلال، وبعد الفعاليات لضمان تنظيم الحدث بنجاح وتحسين التجمعات المستقبلية."
      },
      template5:{
        title:"التعليم والمدارس",
        description:"تحسين البرامج الأكاديمية والعمليات في منظمات التعلم من خلال جمع الآراء والتغذية الراجعة من الطلاب والموظفين.",
      },
      template6:{
        title:"الرعاية الصحية",
        description:"دعم التواصل بين المريض ومقدم الخدمة الصحية وتعزيز الخدمات الصحية من خلال الحصول على تغذية راجعة حول الرعاية الطبية ورفاهية المريض. "
      }

      }
    },  Different:{
      title1:"تقارير",
      caption1:"إنشاء تقارير شاملة وتصدير بيانات الاستطلاع إلى أدوات أخرى لإجراء تحليلات إضافية.",
      title2:"رسالة نصية",
      caption2:"قم بتحسين جهود الاستطلاع الخاصة بك من خلال الاستفادة من دعوات الرسائل النصية الشخصية. ",
      title3:"استبيانات",
      caption3:"احصل على وصول إلى مجموعة من الاستبيانات الجاهزة التي صممها فريقنا من خبراء البحث. ",
      title4:" مكتب المساعدة",
      caption4:"استمتع بخيارات دعم شاملة من خلال خدمات مكتب المساعدة لدينا. ",


    }
    ,
    Seeit:{
      title:"عليك أن تراه لتصدق ذلك",
      button:" قدِّم أو أرسل",
      footer:"تواصل معنا عبر البريد الإلكتروني: xprios@gmail.com"
    },
    Footer:{
      title1:"منشئ الاستطلاعات",
      p:"أنشئ استطلاعات واجمع ملاحظات قيمة من جمهورك. ",
      title2:" اتصل بنا",
      email:"بريد إلكتروني",
      phone:" هاتف",
      title3:" تابعنا",
      last:"مُنشئ الاستبيان. جميع الحقوق محفوظة. "
    },
    Feature:{
      title:"ميزات الاستبيان ",
      features:{
        feature1:{
          title:"إنشاء المسح",
          description:"يمكنك إنشاء استطلاعات بسهولة باستخدام مجموعة متنوعة من الأسئلة المصممة حسب احتياجاتك. "
        },
         feature2:{
          title:"لوحات التحكم",
          description:"تمكين عملية اتخاذ القرار الخاصة بك مع لوحات التحكم الديناميكية المرتبطة بالبيانات في الوقت الحقيقي."
        },
         feature3:{
          title:"رمز الاستجابة السريعة",
          description:"تعزيز الوصول إلى الاستطلاع عن طريق إدراج رموز الاستجابة السريعة في النشرات، والملصقات، أو الإعلانات. "
        },
         feature4:{
          title:"رسالة نصية قصيرة",
          description:"تحسين الوصول إلى الاستطلاع من خلال دعوات الرسائل النصية الشخصية التي تحتوي على روابط قصيرة فريدة. "
        },
         feature5:{
          title:"تقرير فوري بمؤشرات بيانية ",
          description:"تمكين الوصول بسهولة إلى تقارير فورية تتضمن مخططات تفاعلية فور إطلاق الاستطلاع. "
        },
         feature6:{
          title:"استطلاعات متجاوبة مع الهواتف المحمولة  ",
          description:"تحسين إمكانية الوصول من خلال استطلاعات متجاوبة مع الهواتف المحمولة تعزز تجربة المستخدم على مختلف الأجهزة. "
        },
      }
  
    },
    Contact:{
      title:" شركة",
      sub:"انضم إلى الحوار، شارك في استطلاعاتنا اليوم. ",
      form:{
        one:"الاسم الأول",
        two:"الاسم الأخير",
        three:"البريد الإلكتروني للعمل",
        four:"شركة",
        five:"بلد",
        six:"اكتب شيئًا"
      },
      title2:"اتخاذ قرارات أعمال هامة باستناد إلى دعم قائم على الإبصار. ",
      sub2:"نحن نتيح لك الحصول على تعليقات من السوق المستهدف، والعاملين، والعملاء.",
      p1:" إشراف على عدد كبير من الأفراد والوصول إلى جميع معلومات الاستبيان المجمعة في جميع أنحاء شركتك.",
      p2:" تأكد من حماية المعلومات الحساسة باستخدام تدابير أمان متقدمة، مثل التشفير، وتسجيل الدخول الموحد، وغيرها.",
      p3:"أتمتع بتلقي التعليقات تلقائيًا واستخدم واجهات التطبيقات (APIs) ووسائط الاتصال القوية لربطها بعمليات الشركة الحيوية. ",
            card1t:"ردود الفعل",
      card1d:"تقبلها كدليل بناء في رحلتك نحو النمو والتفوق. ",
      card2t:"اجمع أفكارًا قيمة ",
      card2d:"اجمع ملاحظات وآراء قيمة من جمهورك لاتخاذ قرارات مستنيرة.",
      community:"مجتمع",
      communityd:"المبدعين إنستغرام فيسبوك تويتر لينكدإن مدونتنا يوكام",
      ourstory:"قصتنا",
      ourstoryd:"توجيه التطبيقات استطلاع حول الرؤية والرسالةالنزاهة في التقارير",
      guidelines:"إرشادات",
      guidelinesd:" قواعد الاستخدامبيان الخصوصيةإشعار الخصوصية في كاليفورنياسياسة الاستخدام المقبولإعلان الأمانالامتثال للنظام العام لحماية البياناتإمكانية الاختيار لتلقي البريد الإلكترونيإشعار حول ملفات الكوكيزتخصيص",
      applycases:"تطبيق الحالات",
      applycasesdp1:"استطلاعات عبر الإنترنتاستطلاعات على فيسبوكقالب للاستطلاعاتالتخطيط للاستطلاعات مقابل استخدام نماذجاستطلاعات رضا الموظفيناستطلاعات رضا الموظفينقوالب مجانية للاستطلاعاتقوالب مجانية للاستطلاعاتقوالب مجانية للاستطلاعات",
      applycasesdp2:" حاسبة لحجم العينةإنشاء استطلاعات ذات جودةقياس لايكرتتحليل الاستطلاعاتتقييم 360 درجةاستطلاعات التعليمأسئلة للاستطلاعاتأسئلة من استبيان رضا العملاءإنشاء استطلاع",
      applycasesdp3:"  البحث: الجودة مقابل الكميةردود فعل المستهلكاستطلاعات لأغراض البحث السوقياستطلاع حول التدريبقالب استعراض  للاستخدام دون الاتصال بالإنترنت"
    },
    Testimonial:{
      title:"اقرأ تقييمات موثوقة من عملائنا",
      testimonial:{
        name1:"ليا",
        des1:"إن إنشاء استطلاعات لم يكن أبسط أبدًا! يقدم هذا الموقع لإنشاء الاستطلاعات واجهة سهلة الاستخدام وبديهية، سمحت لي بتصميم وتخصيص الاستطلاعات بكل سهولة وبدون عناء.",
        name2:"أرجون",
        des2:" توفر مجموعة أنواع الأسئلة وخيارات التنسيق مرونة كبيرة. أعجبني خصوصاً الطريقة التي يمكنني بها بسرعة مشاركة الاستطلاعات مع جمهوري، وساعدتني التحليلات الفورية في جمع رؤى قيمة فوراً",
        name3:"فيمال",
        des3:"إنه أداة قوية لأي شخص يتطلع إلى جمع الملاحظات أو إجراء البحث. يُوصى به بشدة! ",
        name4:"جوكول",
        des4:"تجربة رائعة مع هذه المنصة لإنشاء الاستطلاعات! واجهة المستخدم أنيقة وحديثة، مما يجعل عملية بناء الاستطلاع بسيطة وسهلة.",
        name5:"وردة",
        des5:"ميزة التعاون في الوقت الفعل كانت محورية بالنسبة لفريقنا، حيث سمحت لنا بالعمل بسلاسة معًا على صياغة الاستطلاعات المثالية. ",
        name6:"أنيش.",
        des6:"لوحة التحليلات توفر تصورات بيانية موجزة، مما يجعل عملية التحليل ممتعة. هذا الموقع حقاً رفع لعبتنا في إجراء الاستطلاعات! "
  
      }
    }
  }
  
  
};
const sessionStorageKey = 'myAppTranslations';

let storedData = JSON.parse(sessionStorage.getItem(sessionStorageKey)) || {};
const defaultLanguageCode = 'en';  // Set the default language to 'en'
const defaultTranslations = translationData[defaultLanguageCode];

function initializeStoredData(callback) {
  const storedLanguageCode = storedData.languageCode;

  if (storedLanguageCode && translationData[storedLanguageCode]) {
    storedData.translations = translationData[storedLanguageCode];
    storedData.languageCode = storedLanguageCode;
  } else {
    storedData.translations = defaultTranslations;
    storedData.languageCode = defaultLanguageCode;
  }

  localStorage.setItem(sessionStorageKey, JSON.stringify(storedData));
  callback();
}

function changeLanguage(languageCode) {
  if (translationData[languageCode]) {
    storedData.translations = translationData[languageCode];
    storedData.languageCode = languageCode;
    localStorage.setItem(sessionStorageKey, JSON.stringify(storedData));

    i18n.changeLanguage(languageCode);

    const bodyElement = document.querySelector('body');
    bodyElement.classList.toggle('rtl', languageCode === 'ar');
  } else {
    console.error('Invalid language code');
  }
}

function forceArabic() {
  changeLanguage('ar');
}

function initializeI18n() {
  return new Promise((resolve) => {
    i18n
      .use(initReactI18next)
      .init({
        resources: translationData,
        lng: storedData.languageCode,
        fallbackLng: "ar",
        interpolation: {
          escapeValue: false,
        },
      }, () => {
        console.log('Stored data:', storedData);
        resolve();
      });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initializeStoredData(() => {
    initializeI18n().then(() => {
      const bodyElement = document.querySelector('body');

      if (storedData.languageCode === 'ar') {
        bodyElement.classList.add('rtl');
      } else {
        bodyElement.classList.remove('rtl');
      }
    });
  });
});





// Now you can use storedData.translations wherever needed in your code
//  storedData.translations wherever needed in your code

// Now you can use storedData.translations wherever needed in your code


export default i18n;

