/**
 * Trilingual Internationalization Database (English, 中文, Suomi)
 * & Dual-Language Comparison Engine for Hunting in Finland
 */

const I18N = {
  currentLang: 'en',
  secondaryLang: null,

  ui: {
    en: {
      siteBrand: "🌲 Eräopas Suomi",
      siteBadge: "FINLAND FIELD GUIDE",
      navWizard: "🎯 Pathway Finder",
      navQuiz: "📝 Exam Practice",
      navSpecies: "🦌 Game Species",
      navCalc: "💰 Budget Tool",
      navChecklists: "📋 Checklists",
      navDocs: "📚 Deep Dive Docs",

      heroTag: "🌲 Finnish Wildlife Stewardship & Hunting Guide",
      heroTitle: "Hunting in Finland: <br><span class=\"highlight\">The Complete Beginner's Field Guide</span>",
      heroSubtitle: "An authoritative, safety-first guide to hunting, game ecology, and wildlife stewardship in Finland. Learn how to prepare for the Hunter's Exam in English, navigate domestic firearm licensing, explore modern bow hunting, access 9+ million hectares of public state forests, and harvest ethical wild game from scratch.",
      heroBtnWizard: "Find Your Starting Route 🎯",
      heroBtnQuiz: "Take Practice Exam (15 Qs) 📝",

      stat1Num: "300,000+",
      stat1Label: "Active Hunters in Finland (6% of population)",
      stat2Num: "9,000,000+",
      stat2Label: "Hectares of Public State Hunting Lands (Eräluvat)",
      stat3Num: "English / FI",
      stat3Label: "Hunter's Exam Available in English, Finnish & Swedish",
      stat4Num: "Resident Rights",
      stat4Label: "Full domestic access to gun permits, clubs & state tags",

      prNoticeTitle: "🌲 Living in Finland: Domestic Hunting Framework & Fast-Track",
      prNoticeBody: "If you reside in Finland, you participate under the full domestic system: you register with your local Game Management Association (RHY) using your Finnish personal ID (henkilötunnus), authenticate via Suomi.fi online banking, take the Hunter's Exam in English, and apply for standard police firearm permits (with military service requirements waived for non-citizens). There is no need for tourist passes—you have direct access to over 9 million hectares of Metsähallitus state lands and local hunting clubs from day one.",

      wizardTag: "Step-by-Step Advisor",
      wizardTitle: "Hunter Pathway Finder",
      wizardSubtitle: "Select your preferred approach to generate your exact roadmap, timeline, and permit requirements.",
      wizardStep1: "1. What is your preferred weapon route?",
      wizardStep2: "2. What game do you want to pursue first?",
      wizardStep3: "3. What is your budget and timeline?",

      quizTag: "Exam Simulator",
      quizTitle: "Metsästäjätutkinto Practice Quiz",
      quizSubtitle: "Test your knowledge with 15 official exam-style questions covering species identification, Finnish hunting law, and field safety. Available with side-by-side translation.",
      quizQuestionLabel: "Question",
      quizOfLabel: "of",
      quizScoreLabel: "Score:",
      quizNextBtn: "Next Question →",
      quizRestartBtn: "Retake Quiz 🔄",
      quizCompletedTitle: "Quiz Completed!",
      quizCompletedDesc: "Here is your final score on the simulated Finnish Hunter's Exam:",

      speciesTag: "Wildlife Database",
      speciesTitle: "Finnish Game Species & Seasons Explorer",
      speciesSubtitle: "Explore the primary huntable animals of Finland, seasonal dates, permitted weapons, and field tips.",
      speciesSearchPlaceholder: "Search by Finnish, English, Chinese, or Latin name...",
      filterAll: "All Species",
      filterBig: "Big Game & Deer",
      filterGrouse: "Forest Grouse",
      filterWaterfowl: "Waterfowl",
      filterSmall: "Small Mammals",
      filterInvasive: "Invasive Predators",
      seasonLabel: "📅 Season:",
      weaponsLabel: "🔫 Weapons:",
      permitLabel: "🎫 Permit:",
      fieldTipLabel: "🌲 Field Tip:",

      calcTag: "Financial Planning",
      calcTitle: "Startup Cost & Gear Estimator",
      calcSubtitle: "Transparent breakdown of realistic initial costs in Finland across the three primary beginner pathways.",
      calcGunTitle: "🔫 Firearm Pathway",
      calcGunDesc: "12-gauge shotgun or .308 rifle ownership (Poliisi permit)",
      calcBowTitle: "🏹 Bow Hunting Pathway",
      calcBowDesc: "Compound bow with zero police bureaucracy or gun safe",
      calcGuidedTitle: "🤝 Mentored / Supervised Route",
      calcGuidedDesc: "Learn and harvest before buying your own weapons",

      checklistsTag: "Interactive Preparation",
      checklistsTitle: "Essential Hunter's Field Checklists",
      checklistsSubtitle: "Interactive checklists for key milestones in your resident journey.",
      clExamTitle: "📝 Hunter's Exam Day",
      clRangeTitle: "🎯 Shooting Range Practice",
      clHuntTitle: "🌲 First Forest Hunt Day",

      docsTag: "Documentation Hub",
      docsTitle: "Deep Dive Handbooks",
      docsSubtitle: "Full-length comprehensive documentation chapters located in the docs/ folder.",

      footerDesc: "A comprehensive educational project and practical field guide for outdoor enthusiasts, residents, and beginners in Finland, fostering safe, ethical, and sustainable wildlife stewardship.",
      footerAuthTitle: "Official Finnish Authorities",
      footerAssocTitle: "Hunting Associations & Training",
      footerNote: "Created for outdoor learning. Always verify regional quotas and seasonal dates on official Finnish portals before heading into the forest."
    },

    zh: {
      siteBrand: "🌲 芬兰狩猎指南 • Eräopas Suomi",
      siteBadge: "芬兰野外实战指南",
      navWizard: "🎯 路径规划器",
      navQuiz: "📝 考试模拟测验",
      navSpecies: "🦌 猎物物种图鉴",
      navCalc: "💰 预算计算器",
      navChecklists: "📋 备考与出猎清单",
      navDocs: "📚 深度研习手册",

      heroTag: "🌲 芬兰野外生态管理与狩猎实战指南",
      heroTitle: "芬兰狩猎全景指南：<br><span class=\"highlight\">零基础入门与本地实战全攻略</span>",
      heroSubtitle: "专为在芬兰生活的户外爱好者与零基础新手打造的权威安全野外指南。系统详解如何使用英文参加芬兰国家猎人资格考试（Metsästäjätutkinto）、以本土居民身份合规申领枪证、探索免去枪柜手续的现代复合弓猎、畅行国家林业局900万公顷公有森林配额许可，并从零开始收获绿色有机的自然野味。",
      heroBtnWizard: "定制您的新手发展路径 🎯",
      heroBtnQuiz: "进入15题全真考试模拟 📝",

      stat1Num: "300,000+",
      stat1Label: "芬兰活跃持证猎人（占全国人口6%）",
      stat2Num: "9,000,000+",
      stat2Label: "国家林业局（Eräluvat）公有狩猎森林面积（公顷）",
      stat3Num: "英语 / 芬兰语",
      stat3Label: "官方猎人资格考试可直接申请英文考卷",
      stat4Num: "本土完全平权",
      stat4Label: "在芬居民享有完全同等的持枪、入会与公有森林购票权",

      prNoticeTitle: "🌲 定居芬兰：本土狩猎制度与零基础快速通道",
      prNoticeBody: "只要您常住芬兰并拥有芬兰个人税号（Henkilötunnus），即可完全依托本土国民管理体系参与狩猎：凭银行电子认证（Suomi.fi）登录国家野生动物门户 Oma riista、在所属基层猎会（RHY）报考资格考试（可直接申请英文考卷）、依法向芬兰警察局申领枪证（非本国公民依法免服兵役，免除军人证审核），并以本地居民身份直接购买国家林业局（Eräluvat）900万公顷公有森林配额或申请加入当地民间猎会，无需办理繁琐的短期游客通行证。",

      wizardTag: "智能规划向导",
      wizardTitle: "芬兰猎人发展路径规划器",
      wizardSubtitle: "根据您的武器偏好、目标猎物与时间预算，量身定制从零开始的最佳合法实践步骤与装备建议。",
      wizardStep1: "1. 您偏好哪种武器方案？",
      wizardStep2: "2. 您的首选目标猎物是什么？",
      wizardStep3: "3. 您的预算与时间预期如何？",

      quizTag: "全真考试模拟",
      quizTitle: "芬兰猎人考试（Metsästäjätutkinto）模拟题库",
      quizSubtitle: "精选15道涵盖物种鉴别、芬兰狩猎法条和野外安全的经典真题，支持英/中/芬双语对照学习。",
      quizQuestionLabel: "题目",
      quizOfLabel: "/",
      quizScoreLabel: "当前得分：",
      quizNextBtn: "下一题 →",
      quizRestartBtn: "重新答题 🔄",
      quizCompletedTitle: "测试完成！",
      quizCompletedDesc: "您在芬兰猎人资格模拟考中的最终评测结果为：",

      speciesTag: "芬兰猎物图鉴",
      speciesTitle: "芬兰可猎物种与狩猎季全景图鉴",
      speciesSubtitle: "详尽收录芬兰主要合法猎物、开放季节、法定最低枪械动能要求与实战野外技巧。",
      speciesSearchPlaceholder: "输入中文、芬兰语、英语或拉丁学名搜索（如：黑琴鸡、Moose、Teeri）...",
      filterAll: "全部物种",
      filterBig: "大型鹿类与驼鹿",
      filterGrouse: "森林松鸡类",
      filterWaterfowl: "水禽鸭类",
      filterSmall: "小型哺乳动物",
      filterInvasive: "外来入侵害兽（生态保护）",
      seasonLabel: "📅 狩猎期：",
      weaponsLabel: "🔫 法定武器：",
      permitLabel: "🎫 许可要求：",
      fieldTipLabel: "🌲 实战技巧：",

      calcTag: "开销与财务规划",
      calcTitle: "新手装备与启动预算评估器",
      calcSubtitle: "基于芬兰本土市场真实价格，透明对比传统枪械、复合弓猎与向导陪同三种路线的费用。",
      calcGunTitle: "🔫 传统枪械路线",
      calcGunDesc: "合法拥有12号双管霰弹枪或.308步枪（警察局办证）",
      calcBowTitle: "🏹 现代复合弓猎路线",
      calcBowDesc: "无需警察枪证与厚重防盗枪柜，直接合法开展",
      calcGuidedTitle: "🤝 导师陪同/商业向导路线",
      calcGuidedDesc: "在购买贵重个人装备前，先行体验并获得首战斩获",

      checklistsTag: "野外准备清单",
      checklistsTitle: "猎人关键里程碑核对清单",
      checklistsSubtitle: "交互式出猎备忘清单，确保您在考试日、靶场练习日和森林首猎中合规安全。",
      clExamTitle: "📝 猎人资格考试当天",
      clRangeTitle: "🎯 靶场实弹射击练习",
      clHuntTitle: "🌲 森林首次实战出猎",

      docsTag: "深度研习手册",
      docsTitle: "全套8章深度研习手册",
      docsSubtitle: "存储在 docs/ 目录下的系统化专业文档，支持在线阅读与双语对照。",

      footerDesc: "专为在芬兰生活的户外爱好者及零基础新手打造的生态友好型可持续野生动物管理指引与实战手册。",
      footerAuthTitle: "芬兰官方监管机构",
      footerAssocTitle: "行业协会与官方培训平台",
      footerNote: "本指南用于野外技能与法律知识普及。实际出猎前请务必在芬兰官方门户确认当季具体区域配额与最新禁猎日期。"
    },

    fi: {
      siteBrand: "🌲 Eräopas Suomi",
      siteBadge: "KOTIMAINEN ERÄOPAS",
      navWizard: "🎯 Polun valitsin",
      navQuiz: "📝 Tutkintotesti",
      navSpecies: "🦌 Riistalajit",
      navCalc: "💰 Budjettilaskuri",
      navChecklists: "📋 Tarkistuslistat",
      navDocs: "📚 Syventävät oppaat",

      heroTag: "🌲 Suomalainen eräkulttuuri ja riistanhoito",
      heroTitle: "Metsästys Suomessa: <br><span class=\"highlight\">Aloittelijan ja asukkaan täydellinen eräopas</span>",
      heroSubtitle: "Kattava ja turvallisuuslähtöinen opas suomalaiseen metsästykseen, riistanhoitoon ja luonnon antimien kestävään hyödyntämiseen. Opi suorittamaan metsästäjätutkinto (myös englanniksi), hakemaan poliisin aselupia, aloittamaan jousimetsästys, hyödyntämään Metsähallituksen 9 miljoonaa hehtaaria valtion maita ja hankkimaan eettistä lähiriistaa.",
      heroBtnWizard: "Löydä oma aloituspolkusi 🎯",
      heroBtnQuiz: "Tee harjoitustentti (15 kysymystä) 📝",

      stat1Num: "300 000+",
      stat1Label: "Aktiivista metsästäjää Suomessa (6 % väestöstä)",
      stat2Num: "9 000 000+",
      stat2Label: "Hehtaaria valtion maita Metsähallituksen Eräluvilla",
      stat3Num: "Englanti / Suomi",
      stat3Label: "Metsästäjätutkinnon voi suorittaa englanniksi tai suomeksi",
      stat4Num: "Asukkaan oikeudet",
      stat4Label: "Täydet aseluvanhaku-, seura- ja valtionmaiden luvanoikeudet",

      prNoticeTitle: "🌲 Suomessa asuminen: Kotimainen riistanhoitojärjestelmä ja asukkaan edut",
      prNoticeBody: "Suomessa asuvana toimit täysin kotimaisen riistanhoitojärjestelmän puitteissa: rekisteröidyt Oma riistaan henkilötunnuksellasi ja pankkitunnuksillasi (Suomi.fi), suoritat virallisen metsästäjätutkinnon (saatavilla myös englanniksi), haet aseluvat kotipaikkakuntasi poliisilta (ei-kansalaisille asevelvollisuuden sotilaspassivaatimus katsotaan suoraan täytetyksi) ja pääset suoraan käsiksi Metsähallituksen laajoihin valtionmaihin ja paikallisiin metsästysseuroihin ilman turistirajoituksia.",

      wizardTag: "Askel askeleelta",
      wizardTitle: "Metsästäjän aloituspolun valitsin",
      wizardSubtitle: "Valitse toiveesi ja luo itsellesi selkeä, räätälöity etenemissuunnitelma kustannusarvioineen.",
      wizardStep1: "1. Mikä on toivomasi asetyyppi?",
      wizardStep2: "2. Mitä riistaa haluat pyytää ensin?",
      wizardStep3: "3. Mikä on budjettisi ja aikataulusi?",

      quizTag: "Harjoitustentti",
      quizTitle: "Metsästäjätutkinnon harjoitustentti",
      quizSubtitle: "Testaa osaamisesi 15 aidolla koekysymyksellä (lajintunnistus, lainsäädäntö ja turvallisuus). Kaksikielinen tuki käytettävissä.",
      quizQuestionLabel: "Kysymys",
      quizOfLabel: "/",
      quizScoreLabel: "Pisteet:",
      quizNextBtn: "Seuraava kysymys →",
      quizRestartBtn: "Uusi testi 🔄",
      quizCompletedTitle: "Testi suoritettu!",
      quizCompletedDesc: "Tuloksesi simulaatiossa metsästäjätutkinnosta:",

      speciesTag: "Riistatietopankki",
      speciesTitle: "Suomen riistalajit ja metsästysajat",
      speciesSubtitle: "Tutustu Suomen tärkeimpiin riistaeläimiin, metsästysaikoihin, vaadittaviin aseisiin ja erävinkkeihin.",
      speciesSearchPlaceholder: "Hae suomeksi, englanniksi, kiinaksi tai tieteellisellä nimellä...",
      filterAll: "Kaikki lajit",
      filterBig: "Hirvieläimet",
      filterGrouse: "Metsäkanalinnut",
      filterWaterfowl: "Vesilinnut",
      filterSmall: "Piennisäkkäät",
      filterInvasive: "Vieraspedot",
      seasonLabel: "📅 Metsästysaika:",
      weaponsLabel: "🔫 Sallitut aseet:",
      permitLabel: "🎫 Lupa:",
      fieldTipLabel: "🌲 Erävinkki:",

      calcTag: "Kustannukset",
      calcTitle: "Aloituskustannusten ja varusteiden arviointi",
      calcSubtitle: "Rehellinen katsaus Suomen todellisiin aloituskustannuksiin eri harrastuspoluilla.",
      calcGunTitle: "🔫 Ampuma-asereitti",
      calcGunDesc: "12-kaliiperinen haulikko tai .308-kivääri (poliisin aselupa)",
      calcBowTitle: "🏹 Jousimetsästysreitti",
      calcBowDesc: "Taljajousi ilman poliisin aselupia tai asekaappivaatimusta",
      calcGuidedTitle: "🤝 Ohjattu / opastettu reitti",
      calcGuidedDesc: "Aloita ilman omia aseita kokeneen metsästäjän opastuksella",

      checklistsTag: "Tarkistuslistat",
      checklistsTitle: "Metsästäjän tärkeimmät muistilistat",
      checklistsSubtitle: "Interaktiiviset tarkistuslistat kokeeseen, radalle ja ensimmäiseen jahtiin.",
      clExamTitle: "📝 Metsästäjätutkintopäivä",
      clRangeTitle: "🎯 Ampumaratapäivä",
      clHuntTitle: "🌲 Ensimmäinen metsäpäivä",

      docsTag: "Syventävät oppaat",
      docsTitle: "Syventävät käsikirjat",
      docsSubtitle: "Kattavat 8 luvun eräoppaat, luettavissa suoraan selaimessa tai erillisinä HTML-sivuina.",

      footerDesc: "Kattava koulutusprojekti ja käytännön eräopas luonnossa liikkujille, asukkaille ja vasta-alkajille vastuullisen suomalaisen eräkulttuurin edistämiseksi.",
      footerAuthTitle: "Viralliset viranomaiset",
      footerAssocTitle: "Järjestöt ja koulutus",
      footerNote: "Tarkista aina alueelliset kiintiöt ja rauhoitusajat virallisista viranomaislähteistä ennen jahtiin lähtöä."
    }
  },

  // Pathway Wizard Data (Trilingual)
  wizardOptions: {
    weapon: [
      {
        id: "gun",
        icon: "🔫",
        title: {
          en: "Firearms (Shotgun or Rifle)",
          zh: "传统枪械（霰弹枪或猎枪）",
          fi: "Ampuma-aseet (haulikko tai kivääri)"
        },
        desc: {
          en: "Apply to Finnish Police (Poliisi) as a resident for Hankkimislupa. 12-gauge for birds/hare; .308 Win for deer/moose. Safe storage required.",
          zh: "作为芬兰居民向警察局申请购枪许可（Hankkimislupa）。12号打飞禽水鸭；.308步枪打鹿打驼鹿。家中需安全保管。",
          fi: "Hae poliisilta hankkimislupaa asukkaana. 12-kaliiperinen linnuille/jäniksille; .308 hirvieläimille. Asianmukainen säilytys vaaditaan."
        }
      },
      {
        id: "bow",
        icon: "🏹",
        title: {
          en: "Compound Bow Hunting",
          zh: "现代复合弓狩猎",
          fi: "Taljajousimetsästys"
        },
        desc: {
          en: "No police firearm permit or heavy gun safe required! Modern compound bow (≥ 40.5 lbs). 18m bow test for deer. High suburban deer harvest.",
          zh: "无需警察局枪证，无需昂贵重型防盗枪柜！复合弓拉力≥40.5磅。考取18米弓猎测试可合法打鹿。近郊猎鹿热门之选。",
          fi: "Ei poliisin aselupia tai asekaappipakkoa! Taljajousi (väh. 180 N). 18 metrin jousikoe hirvieläimille. Tehokas valinta peurajahteihin."
        }
      },
      {
        id: "mentor",
        icon: "🤝",
        title: {
          en: "Supervised Shooting & Guided Hunt",
          zh: "持牌导师直接陪同出猎",
          fi: "Valvottu ammunta ja ohjattu jahti"
        },
        desc: {
          en: "Shoot legally without your own gun license under immediate supervision (Valvottu ammunta) of a mentor or guide. Or apply for a Parallel Permit.",
          zh: "无需拥有枪证即可在持证导师臂长距离内合法开枪（Valvottu ammunta）。或申请配偶/朋友名下枪支的副持枪证（Rinnakkaislupa）。",
          fi: "Ammu laillisesti ilman omaa aselupaa toisen valvonnassa (Valvottu ammunta) tai hae rinnakkaislupaa ystävän aseeseen."
        }
      }
    ],

    target: [
      {
        id: "small",
        icon: "🦆",
        title: {
          en: "Small Game & Waterfowl",
          zh: "小型猎物与水禽飞鸟",
          fi: "Pienriista ja vesilinnut"
        },
        desc: {
          en: "Capercaillie, black grouse, mallards, and hares. Accessible on 9M ha of public state forests via Eräluvat.fi day permits.",
          zh: "松鸡、黑琴鸡、野鸭与野兔。凭Eräluvat.fi日票即可在芬兰国家林业局900万公顷公有森林自主开猎。",
          fi: "Metso, teeri, sinisorsa ja jänikset. Helppo aloittaa Metsähallituksen valtionmailla (Eräluvat.fi) omatoimisesti."
        }
      },
      {
        id: "big",
        icon: "🦌",
        title: {
          en: "Big Game (Deer & Moose)",
          zh: "大型猎物（白尾鹿与驼鹿）",
          fi: "Hirvieläimet (peura ja hirvi)"
        },
        desc: {
          en: "Abundant white-tailed deer in southern Finland (>100k) and communal moose hunts. Requires passing shooting test and joining a club.",
          zh: "芬兰南部白尾鹿种群极其庞大（超10万头），驼鹿集体围猎氛围极佳。需通过靶场射击测试并加入当地猎会。",
          fi: "Etelä-Suomen valtavat valkohäntäpeurakannat ja seurojen yhteiset hirvijahdit. Vaatii ampumakokeen ja seurajäsenyyden."
        }
      },
      {
        id: "invasive",
        icon: "🦝",
        title: {
          en: "Invasive Predator Conservation",
          zh: "外来入侵害兽清除（生态环保）",
          fi: "Pienpedot ja vieraslajit"
        },
        desc: {
          en: "Eliminate invasive raccoon dogs (supikoira) and mink to protect nesting birds. Minimal permit fees (~10 €/year) and year-round hunting.",
          zh: "猎捕对本地鸟巢破坏极大的外来物种貉（Supikoira）和美洲水貂。极低许可证费（约10欧/年），全年可捕，造福生态。",
          fi: "Supikoiran ja minkin poistoa luonnonhoitotyönä lintuvesien turvaksi. Erittäin edulliset pienpetoluvat (n. 10 €/vuosi) ja ympärivuotinen pyynti."
        }
      }
    ]
  },

  // 15 Exam Questions with Full Trilingual Content
  quizQuestions: [
    {
      category: { en: "Species Identification", zh: "物种鉴别", fi: "Lajintunnistus" },
      question: {
        en: "You observe a large, dark forest grouse in a pine ridge with a heavy bearded chin, red eyebrow comb, and a rounded tail. Which bird is this?",
        zh: "在松树林山脊上，你发现一只体型硕大、羽色深黑的大型森林鸟类，下颌有胡须状羽毛，眉部带鲜红肉冠，尾羽呈圆形。这是哪种鸟？",
        fi: "Havaitset mäntykankaalla kookkaan, tumman metsäkanalinnun, jolla on leuan alla partamainen höyhentupsu, punaiset kulmakaaret ja pyöreä pyrstö. Mikä lintu on kyseessä?"
      },
      options: [
        { en: "Male Western Capercaillie (Metso)", zh: "雄性西方松鸡（Metso）", fi: "Urosmetso" },
        { en: "Male Black Grouse (Teeri)", zh: "雄性黑琴鸡（Teeri）", fi: "Urosteeri" },
        { en: "Hazel Grouse (Pyy)", zh: "花尾榛鸡（Pyy）", fi: "Pyy" },
        { en: "Willow Grouse (Riekko)", zh: "柳雷鸟（Riekko）", fi: "Riekko" }
      ],
      answer: 0,
      explanation: {
        en: "This is a male Western Capercaillie (metso). The male black grouse has a lyre-shaped curved tail, while hazel grouse and willow grouse are significantly smaller.",
        zh: "这是雄性西方松鸡（Metso）。雄性黑琴鸡（Teeri）拥有标志性的琴状弯曲尾羽，而榛鸡和柳雷鸟体型要小得多。",
        fi: "Tämä on urosmetso. Urosteerillä on tyypillinen lyyramainen pyrstö, kun taas pyy ja riekko ovat huomattavasti pienempiä lintuja."
      }
    },
    {
      category: { en: "Hunting Law", zh: "狩猎法律法规", fi: "Metsästyslaki" },
      question: {
        en: "Under Finnish hunting law, what is the minimum distance required when discharging a firearm near an inhabited building without the owner's explicit permission?",
        zh: "根据芬兰狩猎法，在未经屋主明确书面同意的情况下，向有人居住的房屋开枪射击的法定最低安全距离是多少？",
        fi: "Mikä on metsästyslain mukainen vähimmäisetäisyys asuttuun rakennukseen ammuttaessa ilman rakennuksen omistajan lupaa?"
      },
      options: [
        { en: "50 meters", zh: "50米", fi: "50 metriä" },
        { en: "100 meters", zh: "100米", fi: "100 metriä" },
        { en: "150 meters", zh: "150米", fi: "150 metriä" },
        { en: "300 meters", zh: "300米", fi: "300 metriä" }
      ],
      answer: 2,
      explanation: {
        en: "Section 25 of the Finnish Hunting Act explicitly forbids shooting within 150 meters of an inhabited residential or school building without the owner's written consent.",
        zh: "芬兰《狩猎法》第25条明确严禁在距离有人居住的住宅、建筑或学校150米范围内开火射击，除非获得屋主书面授权。",
        fi: "Metsästyslain 25 § kieltää aseen laukaisemisen 150 metriä lähempänä asuttua rakennusta ilman nimenomaista lupaa."
      }
    },
    {
      category: { en: "Weapon & Safety", zh: "武器与安全法规", fi: "Turvallisuusmääräykset" },
      question: {
        en: "During a driven hunt for moose or white-tailed deer, what proportion of your outer jacket/vest and headwear must legally be blaze orange or blaze red?",
        zh: "在驼鹿或白尾鹿集体围猎中，猎人穿着的外套/背心和帽子的表面积中，法定至少有多大比例必须为亮橙色或橙红色？",
        fi: "Kuinka suuren osan hirvieläinten seurajahdissa käytettävän päähineen ja vaatteen näkyvästä pinta-alasta on oltava oranssia tai oranssinpunaista?"
      },
      options: [
        { en: "At least 1/3 (one-third)", zh: "至少 1/3", fi: "Vähintään 1/3" },
        { en: "At least 1/2 (half)", zh: "至少 1/2", fi: "Vähintään 1/2" },
        { en: "At least 2/3 (two-thirds)", zh: "至少 2/3", fi: "Vähintään 2/3" },
        { en: "100% solid orange only", zh: "必须100%纯色橙色", fi: "100 % kokonaan oranssi" }
      ],
      answer: 2,
      explanation: {
        en: "Section 22 of the Hunting Decree mandates that at least two-thirds (2/3) of the visible surface of the jacket/vest and headwear must be blaze orange or blaze red.",
        zh: "《狩猎法令》第22条严格规定，围猎有蹄类大猎物时，外套和帽子可见表面积的至少三分之二（2/3）必须为警示橙色或橙红色。",
        fi: "Metsästysasetuksen 22 § edellyttää, että vähintään kaksi kolmasosaa (2/3) vaatteen ja päähineen näkyvästä pinta-alasta on oranssia tai oranssinpunaista."
      }
    },
    {
      category: { en: "Species Identification", zh: "物种鉴别", fi: "Lajintunnistus" },
      question: {
        en: "In January in Southern Finland, you see a large hare (approx. 5 kg) that remains grayish-brown with reddish legs in the snow along an agricultural field edge. What is it?",
        zh: "1月份在芬兰南部的农田边，你看到一只体型较大（约5公斤）的野兔，在雪地里依然保持灰褐色皮毛和红褐色腿部。这是哪种兔子？",
        fi: "Tammikuussa Etelä-Suomessa pellon reunalla lumessa liikkuu kookas jäniseläin (n. 5 kg), jonka turkki on edelleen harmaanruskea. Mikä laji on kyseessä?"
      },
      options: [
        { en: "Mountain Hare (Metsäjänis)", zh: "芬兰本土雪兔/山兔（Metsäjänis）", fi: "Metsäjänis" },
        { en: "European Brown Hare (Rusakko)", zh: "欧洲野兔/草兔（Rusakko）", fi: "Rusakko" },
        { en: "Wild Rabbit (Kani)", zh: "野生穴兔（Kani）", fi: "Kani" },
        { en: "Snowshoe Hare", zh: "北美白靴兔", fi: "Amerikan lumikenkäjänis" }
      ],
      answer: 1,
      explanation: {
        en: "This is the European Brown Hare (rusakko). Finland's native mountain hare (metsäjänis) turns pure white in winter with black ear tips.",
        zh: "这是欧洲野兔（Rusakko）。芬兰本土雪兔（Metsäjänis）到冬季会换成通体雪白的冬毛，仅耳尖保留黑色。",
        fi: "Kyseessä on rusakko. Suomen luonnonvarainen metsäjänis vaihtaa talveksi puhtaan valkoisen talviturkin mustia korvanpäitä lukuun ottamatta."
      }
    },
    {
      category: { en: "Ammunition & Environment", zh: "弹药与环保法规", fi: "Ampumatarvikkeet" },
      question: {
        en: "Under EU REACH regulations in force in Finland, where is the use of lead-shot ammunition strictly prohibited?",
        zh: "根据芬兰执行的欧盟REACH环保法规，在什么区域内严禁使用或携带铅弹霰弹？",
        fi: "Missä lyijyhaulien käyttö ja hallussapito on EU:n REACH-asetuksen mukaan tiukasti kielletty Suomessa?"
      },
      options: [
        { en: "Only in national parks", zh: "仅在国家公园内", fi: "Vain kansallispuistoissa" },
        { en: "In and within 100 meters of any wetland, lake, pond, or marsh", zh: "在任何湿地、湖泊、池塘或沼泽地及水体周边100米范围内", fi: "Kosteikoilla ja niiden 100 metrin suojavyöhykkeellä" },
        { en: "Only when shooting moose", zh: "仅在猎驼鹿时", fi: "Vain hirvenmetsästyksessä" },
        { en: "Only north of the Arctic Circle", zh: "仅在北极圈以北", fi: "Vain napapiirin pohjoispuolella" }
      ],
      answer: 1,
      explanation: {
        en: "Under EU REACH regulations, discharging or carrying lead shot within 100 meters of any wetland or open water is strictly banned. Non-toxic shot (steel, bismuth, tungsten) must be used.",
        zh: "欧盟REACH环保法案禁止在任何湿地及水体100米缓冲区内击发或携带含铅霰弹。猎水禽必须使用钢珠、铋或钨合金环保弹。",
        fi: "EU:n REACH-asetuksen mukaan lyijyhaulien käyttö ja mukana kantaminen kosteikoilla ja 100 metrin etäisyydellä niistä on laissa kielletty."
      }
    },
    {
      category: { en: "Hunting Law", zh: "狩猎法与季节", fi: "Metsästysajat" },
      question: {
        en: "At what exact time and date does the Finnish waterfowl (vesilinnut) hunting season open each year?",
        zh: "芬兰每年全国水禽水鸭（Vesilinnut）狩猎季在哪个具体日期的什么时刻准时鸣枪开猎？",
        fi: "Mihin tarkkaan kellonaikaan ja päivämäärään vesilintujen metsästys alkaa Suomessa vuosittain?"
      },
      options: [
        { en: "August 1st at midnight (00:00)", zh: "8月1日午夜 00:00", fi: "1. elokuuta klo 00.00" },
        { en: "August 10th at 12:00 noon", zh: "8月10日正午 12:00", fi: "10. elokuuta klo 12.00" },
        { en: "August 20th at 12:00 NOON", zh: "8月20日正午 12:00（整）", fi: "20. elokuuta klo 12.00" },
        { en: "September 1st at sunrise", zh: "9月1日日出时分", fi: "1. syyskuuta auringonnousun aikaan" }
      ],
      answer: 2,
      explanation: {
        en: "Duck hunting opening is a sacred Finnish tradition starting precisely on August 20th at 12:00 NOON.",
        zh: "芬兰野鸭季开猎是全国性的传统节日，每年严格在8月20日中午12点整鸣枪开幕，上午绝不可提前击发。",
        fi: "Vesilinnustuksen aloitus on perinteikäs erätapahtuma, joka alkaa aina 20. elokuuta tasan klo 12.00."
      }
    },
    {
      category: { en: "Bow Hunting", zh: "弓猎法规", fi: "Jousimetsästys" },
      question: {
        en: "Which of the following game species CANNOT legally be hunted with a bow in Finland?",
        zh: "以下哪种芬兰野生动物在法律上【严禁】使用弓箭进行猎杀？",
        fi: "Mitä seuraavista riistaeläimistä EI saa metsästää jousella Suomessa?"
      },
      options: [
        { en: "White-tailed deer (Valkohäntäpeura)", zh: "白尾鹿（Valkohäntäpeura）", fi: "Valkohäntäpeura" },
        { en: "Roe deer (Metsäkauris)", zh: "西方狍鹿（Metsäkauris）", fi: "Metsäkauris" },
        { en: "European Moose (Hirvi)", zh: "欧洲驼鹿（Hirvi）", fi: "Hirvi" },
        { en: "Wild Boar (Villisika)", zh: "欧洲野猪（Villisika）", fi: "Villisika" }
      ],
      answer: 2,
      explanation: {
        en: "European Moose (hirvi) is legally restricted to rifles. Deer species and wild boar may be hunted with compound bows if the bow shooting test is passed.",
        zh: "欧洲驼鹿（Hirvi）在芬兰法律中严禁用弓箭猎杀，必须使用符合枪口能量标准的步枪。白尾鹿、狍鹿和野猪通过射箭考后均可弓猎。",
        fi: "Hirveä ei saa metsästää Suomessa jousella. Valkohäntäpeuraa, metsäkaurista ja villisikaa saa metsästää jousella suoritetun jousikokeen jälkeen."
      }
    },
    {
      category: { en: "Bow Hunting", zh: "弓猎器材要求", fi: "Jousiasteet" },
      question: {
        en: "What is the minimum legal peak draw weight required for a hunting bow in Finland?",
        zh: "在芬兰进行合法狩猎时，猎弓的法定最低峰值拉力要求是多少？",
        fi: "Mikä on metsästysjouselta vaadittava lakisääteinen vähimmäisvetovoima Suomessa?"
      },
      options: [
        { en: "120 Newtons (~27 lbs)", zh: "120牛顿（约27磅）", fi: "120 newtonia (~27 paunaa)" },
        { en: "180 Newtons (~40.5 lbs)", zh: "180牛顿（约40.5磅）", fi: "180 newtonia (~40,5 paunaa)" },
        { en: "250 Newtons (~56 lbs)", zh: "250牛顿（约56磅）", fi: "250 newtonia (~56 paunaa)" },
        { en: "There is no minimum", zh: "没有最低拉力要求", fi: "Ei vähimmäisrajaa" }
      ],
      answer: 1,
      explanation: {
        en: "Section 20 of the Hunting Decree sets the minimum draw weight at 180 Newtons (approx. 40.5 lbs) for all bow hunting in Finland.",
        zh: "芬兰《狩猎法令》第20条明确规定，狩猎弓的最低拉紧力必须达到至少180牛顿（约合40.5磅）。",
        fi: "Metsästysasetuksen 20 § edellyttää jouselta vähintään 180 newtonin (n. 40,5 paunaa) vetovoimaa."
      }
    },
    {
      category: { en: "Weapon & Safety", zh: "枪械安全运输", fi: "Aseen kuljettaminen" },
      question: {
        en: "How must firearms be legally transported inside a private motor vehicle when driving to a hunting location in Finland?",
        zh: "驱车前往狩猎地点时，枪支在机动车辆内法定必须如何存放与运输？",
        fi: "Miten ampuma-asetta on lain mukaan kuljetettava moottoriajoneuvossa metsälle mentäessä?"
      },
      options: [
        { en: "Loaded on passenger seat with safety catch engaged", zh: "放在副驾驶座上，已上膛但关上保险", fi: "Ladattuna etupenkillä varmistettuna" },
        { en: "Unloaded on the backseat without a case", zh: "未装弹直接放在后座上，无需枪套", fi: "Lataamattomana takapenkillä ilman suojapussia" },
        { en: "Completely unloaded and enclosed in a closed gun case or scabbard", zh: "枪膛内完全清空无弹，且必须装在闭合的专用枪套或枪盒中", fi: "Lataamattomana ja suojuksessa (suljetussa asepussissa/laukussa)" },
        { en: "Disassembled into 3 separate pieces", zh: "必须拆解为3个独立零件", fi: "Purettuna kolmeen osaan" }
      ],
      answer: 2,
      explanation: {
        en: "Firearms must always be completely unloaded and enclosed in a protective scabbard or gun case when transported in any motor vehicle, ATV, or boat.",
        zh: "在机动车、雪地摩托或船只中运输枪支，枪支必须完全退弹清膛，并且必须完全收纳在封闭的枪包/枪盒内。",
        fi: "Asetta saa kuljettaa moottoriajoneuvossa vain lataamattomana ja suojuksessa."
      }
    },
    {
      category: { en: "Species Identification", zh: "物种鉴别", fi: "Lajintunnistus" },
      question: {
        en: "You see a medium-sized carnivore with a black facial mask resembling a raccoon, a brownish-grey fur coat, and short legs moving near a coastal reed bed. What is it?",
        zh: "你在沿海芦苇滩边看到一只中等体型的食肉动物，面部有类似小浣熊的黑眼罩斑块，毛皮呈灰褐色，四肢粗短。这是什么？",
        fi: "Näet rannikkoruovikossa keskikokoisen, lyhytjalkaisen pedon, jolla on pesukarhumainen musta naamio silmien ympärillä ja tuuhea harmaanruskea turkki. Mikä laji on kyseessä?"
      },
      options: [
        { en: "European Badger (Mäyrä)", zh: "欧洲獾（Mäyrä）", fi: "Mäyrä" },
        { en: "Raccoon Dog (Supikoira)", zh: "外来入侵害兽：貉（Supikoira）", fi: "Supikoira" },
        { en: "Pine Marten (Näätä)", zh: "松貂（Näätä）", fi: "Näätä" },
        { en: "Wolverine (Ahma)", zh: "狼獾（Ahma）", fi: "Ahma" }
      ],
      answer: 1,
      explanation: {
        en: "This is the invasive Raccoon Dog (supikoira). The native European badger has bold white-and-black longitudinal stripes down its forehead and snout.",
        zh: "这是严重危害鸟类的外来入侵害兽——貉（Supikoira）。芬兰本地的狗獾（Mäyrä）头部具有从鼻尖延伸至头顶明显的黑白相间纵向条纹。",
        fi: "Kyseessä on supikoira. Alkuperäisellä mäyrällä on selkeät mustavalkoiset pitkittäisraidat kuonosta otsalle."
      }
    },
    {
      category: { en: "Game Ecology & Care", zh: "肉质卫生与寄生虫", fi: "Riistan hygienia" },
      question: {
        en: "Why must meat harvested from wild boar and brown bear in Finland always be laboratory-tested before human consumption?",
        zh: "在芬兰收获的野猪和棕熊肉，为什么在人类食用前法定必须送检获得实验室合格证明？",
        fi: "Miksi luonnonvaraisen villisian ja karhun liha on aina tutkittava laboratoriossa ennen syömistä?"
      },
      options: [
        { en: "To measure cesium radiation", zh: "测量放射性元素铯", fi: "Cesium-säteilyn mittaamiseksi" },
        { en: "To test for the dangerous parasite Trichinella spiralis", zh: "检测致命的旋毛虫（Trichinella）寄生虫幼虫", fi: "Trikiiniloisen (Trichinella spiralis) varalta" },
        { en: "To calculate tax brackets", zh: "核算税务申报级别", fi: "Veroluokituksen määrittämiseksi" },
        { en: "To measure fat content", zh: "检测脂肪含量比例", fi: "Rasvaprosentin toteamiseksi" }
      ],
      answer: 1,
      explanation: {
        en: "Wild boars and bears can carry Trichinella spiralis larvae, which causes trichinosis in humans. Testing in an accredited laboratory is legally and medically essential.",
        zh: "野猪和熊是旋毛虫（Trichinella）的主要宿主，人感染后可能致命。必须通过官方认可实验室的消化法检测确认安全方可食用。",
        fi: "Karhuissa ja villisioissa voi esiintyä vaarallista trikiiniloista, joka tarttuu ihmiseen huonosti kypsennetystä lihasta."
      }
    },
    {
      category: { en: "Hunting Administration", zh: "猎人卡与管理费", fi: "Metsästyshallinto" },
      question: {
        en: "What critical benefit is automatically included when a resident pays the annual Finnish Game Management Fee (Riistanhoitomaksu, ~43 €)?",
        zh: "当居民每年缴纳芬兰法定狩猎管理费（Riistanhoitomaksu，约43欧元）后，会自动获得什么核心法律保障？",
        fi: "Mitä lakisääteinen riistanhoitomaksu (n. 43 €) sisältää automaattisesti metsästyskortin lisäksi?"
      },
      options: [
        { en: "Free unlimited ammunition at state ranges", zh: "国家靶场无限免费弹药", fi: "Ilmaiset patruunat valtion ampumaradoilla" },
        { en: "Statutory Hunter's Third-Party Liability Insurance (Metsästäjävakuutus)", zh: "法定持卡猎人第三方人身财产责任险与意外险（Metsästäjävakuutus）", fi: "Lakisääteisen metsästäjävakuutuksen (vastuu- ja tapaturmavakuutus)" },
        { en: "Free fuel for hunting trips", zh: "出猎加油全额免费报销", fi: "Ilmaiset polttoaineet metsästysmatkoille" },
        { en: "Free state hunting tags in all national parks", zh: "所有国家公园免门票任意狩猎", fi: "Maksuttomat valtion luvat kaikkiin kansallispuistoihin" }
      ],
      answer: 1,
      explanation: {
        en: "Paying the 43 € annual game fee provides your active Hunting Card and statutory hunter's liability insurance covering accident liability and personal injury.",
        zh: "每年43欧元的狩猎管理费不仅激活您的猎人卡，还自动捆绑全年在全芬兰有效的持证猎人第三方责任险与意外事故险。",
        fi: "Riistanhoitomaksuun sisältyy metsästäjävakuutus, joka korvaa metsästyksen ja ampumakokeen yhteydessä aiheutuneita vahinkoja."
      }
    },
    {
      category: { en: "Firearms & Law", zh: "无枪证合法开枪", fi: "Ampuma-aselaki" },
      question: {
        en: "Under Finnish law, can a beginner who does NOT own a firearm permit practice shooting at a range or shoot on a hunt?",
        zh: "根据芬兰《枪支法》，尚未考取个人枪支执照的新手，能否在靶场或野外合法射击？",
        fi: "Voiko henkilö, jolla ei ole omaa aselupaa, ampua laillisesti ampumaradalla tai metsällä?"
      },
      options: [
        { en: "No, strictly illegal under any circumstances", zh: "绝对违法，任何情况均不行", fi: "Ei missään tilanteessa, se on laitonta" },
        { en: "Yes, under immediate personal supervision (at arm's reach) of an adult permit holder (Valvottu ammunta)", zh: "可以，只要在成年持证枪主的直接近身（一臂之内）视线监督下（Valvottu ammunta）即可", fi: "Kyllä, aseluvan haltijan välittömässä valvonnassa (käsivarren mitan päässä) valvottuna ammuntona" },
        { en: "Only with air rifles", zh: "仅允许使用气步枪", fi: "Vain ilma-aseilla" },
        { en: "Only if accompanied by police officers", zh: "必须由现役警察陪同", fi: "Vain poliisin seurassa" }
      ],
      answer: 1,
      explanation: {
        en: "Section 88 of the Firearms Act allows supervised shooting (valvottu ammunta) where an unpermitted person may shoot under the immediate arm's-reach supervision of a licensed gun owner.",
        zh: "《枪支法》第88条规定了“受监督射击”（Valvottu ammunta）：任何人在持照导师近身一臂内、能随时介入制止的监督下，无需枪证即可合法实弹射击与狩猎。",
        fi: "Ampuma-aselain mukaan asetta saa käyttää ilman lupaa, jos luvanhaltija valvoo toimintaa välittömästi niin lähellä, että voi heti puuttua tilanteeseen."
      }
    },
    {
      category: { en: "Hunting Law", zh: "自然漫游权与狩猎权", fi: "Jokamiehenoikeus" },
      question: {
        en: "Does Finland's famous Everyman's Right (Jokamiehenoikeus) permit anyone to hunt on private or public land?",
        zh: "芬兰闻名全球的“自然漫游权”（Jokamiehenoikeus / 每个人权利）是否赋予个人任意在森林中狩猎的权利？",
        fi: "Antaako suomalainen jokamiehenoikeus oikeuden metsästää toisen mailla?"
      },
      options: [
        { en: "Yes, anyone can hunt anywhere in uncultivated forests", zh: "是的，所有人均可在未耕作森林自由狩猎", fi: "Kyllä, jokainen saa metsästää vapaasti metsässä" },
        { en: "Yes, but only for hares and waterfowl", zh: "可以，但仅限野兔与野鸭", fi: "Kyllä, mutta vain jäniksiä ja sorsia" },
        { en: "No, hunting rights belong exclusively to the landowner; Everyman's Right strictly excludes hunting and fishing with tackle", zh: "否！狩猎权专属于土地产权所有者；自然漫游权严格排除狩猎和器具垂钓", fi: "Ei, metsästysoikeus kuuluu maanomistajalle; jokamiehenoikeudet eivät kata metsästystä" },
        { en: "Only on Midsummer weekend", zh: "仅在仲夏节周末允许", fi: "Vain juhannusviikonloppuna" }
      ],
      answer: 2,
      explanation: {
        en: "Everyman's Right grants access to hike, camp, and pick wild berries/mushrooms, but NEVER to hunt. Hunting rights belong solely to the landowner under Section 6 of the Hunting Act.",
        zh: "自然漫游权只允许徒步露营、采摘蓝莓和野生菌菇，绝对不包含狩猎权！根据《狩猎法》第6条，狩猎权严格专属于地主，在任何土地狩猎均需取得专门授权与配额许可。",
        fi: "Jokamiehenoikeudet mahdollistavat marjastuksen ja retkeilyn, mutta metsästysoikeus kuuluu aina maanomistajalle (Metsästyslaki 6 §)."
      }
    },
    {
      category: { en: "Rifle Shooting Test", zh: "步枪射击考核", fi: "Ampumakoe" },
      question: {
        en: "What is the shooting distance and target ring diameter for the mandatory Finnish Big Game Rifle Shooting Test (Hirvikoe)?",
        zh: "芬兰法律规定猎捕驼鹿、白尾鹿等大猎物必须通过的步枪考核（Hirvikoe），射击靶距与合格环直径是多少？",
        fi: "Mikä on lakisääteisen hirvi- ja peurakokeen ampumaetäisyys ja osuma-alueen halkaisija?"
      },
      options: [
        { en: "50 meters distance, 15 cm ring", zh: "50米距离，15厘米目标圆环", fi: "50 metriä, 15 cm osuma-alue" },
        { en: "75 meters distance, 23 cm ring", zh: "75米距离，23厘米目标圆环（90秒内4发全部命中）", fi: "75 metriä, 23 cm osuma-alue (4 laukausta 90 sekunnissa)" },
        { en: "100 meters distance, 30 cm ring", zh: "100米距离，30厘米目标圆环", fi: "100 metriä, 30 cm osuma-alue" },
        { en: "150 meters distance, 40 cm ring", zh: "150米距离，40厘米目标圆环", fi: "150 metriä, 40 cm osuma-alue" }
      ],
      answer: 1,
      explanation: {
        en: "The rifle test (hirvikoe) is shot at 75 meters into a stationary moose target with a 23 cm diameter hit zone (4 shots fired within 90 seconds, all 4 must hit).",
        zh: "步枪大动物考核（Hirvikoe）要求在75米射距对准静止驼鹿心肺区，在首枪击发后90秒内打出4发，4发必须全部射入直径23厘米的核心圈内。",
        fi: "Hirvikoe ammutaan 75 metrin matkalta paikallaan olevaan hirvikuvioon, jonka osumarenkaan halkaisija on 23 cm (4 laukausta 90 sekunnissa)."
      }
    }
  ],

  // 14 Species Database with Full Trilingual Content
  species: [
    {
      id: "hirvi",
      nameFi: "Hirvi",
      nameEn: "European Moose",
      nameZh: "欧洲驼鹿",
      latin: "Alces alces",
      category: "big",
      season: {
        en: "Oct – mid-Jan (opens Sept in Lapland)",
        zh: "10月初至翌年1月中旬（拉普兰北部9月即开猎）",
        fi: "Lokakuu – tammikuun puoliväli (Lapissa jo syyskuussa)"
      },
      weapons: {
        en: "Rifle (E100 ≥ 2000 J or lead-free ≥ 1700 J, e.g. .308 Win)",
        zh: "大口径步枪（100米动能≥2000焦耳，或无铅弹≥1700焦耳，如.308 Win）",
        fi: "Kivääri (E100 ≥ 2000 J tai lyijytön ≥ 1700 J, esim. .308 Win)"
      },
      permit: {
        en: "Quota license (Hirvilupa) through hunting club (min 1,000 ha contiguous land)",
        zh: "猎物配额许可证（Hirvilupa），由拥有至少1000公顷连片森林的猎会统一申请",
        fi: "Hirvilupa metsästysseuran kautta (väh. 1 000 ha yhtenäistä maata)"
      },
      tips: {
        en: "Finland's iconic big game. Hunted primarily with loose-running Scandinavian hounds (Jämtland hound, Norwegian elkhound) or driven line of standers. Joining a club as an unarmed beater is the fastest way to learn.",
        zh: "芬兰最具代表性的森林大兽。成牛重达400-600公斤。主要通过放牧猎犬吠叫围堵或打猎队布控站桩。新手以驱兽员（Ajomies）身份入会有助于迅速融入。",
        fi: "Suomen kansallinen suurriista. Pyydetään perinteisesti haukkuvalla koiralla (jämtlanninpystykorva, norjanhirvikoira) tai ajojahdissa. Ajomieheksi liittyminen on paras tapa oppia."
      }
    },
    {
      id: "peura",
      nameFi: "Valkohäntäpeura",
      nameEn: "White-tailed Deer",
      nameZh: "白尾鹿",
      latin: "Odocoileus virginianus",
      category: "big",
      season: {
        en: "Sept 1 – Feb 15",
        zh: "9月1日 至 翌年2月15日",
        fi: "1. syyskuuta – 15. helmikuuta"
      },
      weapons: {
        en: "Rifle (min 6g / E100 ≥ 2000 J), Shotgun slug, or Compound Bow (passed test)",
        zh: "步枪（弹头≥6g且动能达标）、独头弹霰弹枪、或通过考核的复合猎弓",
        fi: "Kivääri (luoti väh. 6g / E100 ≥ 2000 J), haulikon täyteinen tai taljajousi (koe suoritettu)"
      },
      permit: {
        en: "Quota license through hunting club",
        zh: "猎会配额许可证（极度充裕）",
        fi: "Peuran kaatolupa metsästysseuran kautta"
      },
      tips: {
        en: "Abundant in Southwest Finland (>100,000 deer). Highly prized tender venison. Ideal for beginners sitting in heated high stands (kyttäysjahti) over apple/grain feed at dusk.",
        zh: "芬兰南部泛滥（种群超10万头）。肉质极度鲜嫩美味。初学者非常适合在黄昏坐在带暖气的了望高塔（Kytis）中守候采食的鹿群。",
        fi: "Erittäin runsas kanta Etelä- ja Lounais-Suomessa. Loistava ruokariista. Aloittelijalle helppo ja tehokas pyyntitapa on kyttäysjahti lämpimästä kopista ruokintapaikalta."
      }
    },
    {
      id: "kauris",
      nameFi: "Metsäkauris",
      nameEn: "Roe Deer",
      nameZh: "西方狍鹿（狍子）",
      latin: "Capreolus capreolus",
      category: "big",
      season: {
        en: "May 16 – June 15 (Bucks) & Sept 1 – Feb 15 (General)",
        zh: "春季雄鹿季：5月16日-6月15日；秋季综合季：9月1日-2月15日",
        fi: "16.5.–15.6. (pukki) ja 1.9.–15.2. (yleinen)"
      },
      weapons: {
        en: "Rifle, Shotgun buckshot, or Compound Bow (passed test)",
        zh: "步枪、霰弹枪大号鹿弹、或持证复合弓",
        fi: "Kivääri, haulikko (haulit sallittu) tai taljajousi (jousikoe)"
      },
      permit: {
        en: "No license quota needed from Wildlife Agency; requires landowner permission & Oma riista report",
        zh: "无需向官方申请配额许可！只需获得地主/猎会同意，猎获后7天内Oma riista打卡上报",
        fi: "Ei vaadi riistakeskuksen pyyntilupaa; vaatii metsästysoikeuden ja saalisilmoituksen Oma riistaan"
      },
      tips: {
        en: "Europe’s smallest deer (15–30 kg). Delicacy venison. Calling bucks in spring with a buttolo whistle in forest edges is exhilarating.",
        zh: "欧洲最小体型的鹿类（体重15-30公斤）。顶级美味。春季在林缘使用拟声哨模仿雌鹿叫声诱引公鹿，极富趣味。",
        fi: "Euroopan pienin hirvieläin. Huippuluokan riistalihaa. Pukin houkuttelupyynti keväällä Buttolo-pillillä pellonreunoilta on elämyksellistä."
      }
    },
    {
      id: "metso",
      nameFi: "Metso",
      nameEn: "Western Capercaillie",
      nameZh: "西方松鸡",
      latin: "Tetrao urogallus",
      category: "grouse",
      season: {
        en: "Sept 10 – Nov/Dec (Set annually in August)",
        zh: "9月10日至11月/12月（每年8月根据三角线普查确定禁猎期）",
        fi: "10. syyskuuta – marras/joulukuu (päätetään vuosittain)"
      },
      weapons: {
        en: "Shotgun (3.5–4.0mm non-lead), small-caliber rifle (.222, .223, 6.5mm) or Bow",
        zh: "霰弹枪（3.5-4.0mm无铅散弹）、小口径精密步枪（.222/.223/6.5mm）或猎弓",
        fi: "Haulikko (3,5–4,0 mm), rihlakko, tarkkuuskivääri tai jousi"
      },
      permit: {
        en: "Metsähallitus state permit (Kanalintulupa) or club land",
        zh: "国家林业局森林鸟类日票（Kanalintulupa）或猎会会员地",
        fi: "Metsähallituksen kanalintulupa tai metsästysseuran maa"
      },
      tips: {
        en: "King of the boreal pine forest. Stalked slowly along ridges or hunted with a Finnish Spitz (Suomenpystykorva) barking up into old-growth canopies.",
        zh: "北方针叶林之王（雄鸟重4-5公斤）。在成熟松树林沙脊上轻声穿行，或跟随国犬芬兰猎犬（Suomenpystykorva）寻声追猎。",
        fi: "Pohjoisen havumetsän kuningaslintu. Pyydetään hiipimällä mäntykankailla tai perinteisesti haukkuvalla suomenpystykorvalla vanhoista metsistä."
      }
    },
    {
      id: "teeri",
      nameFi: "Teeri",
      nameEn: "Black Grouse",
      nameZh: "黑琴鸡",
      latin: "Lyrurus tetrix",
      category: "grouse",
      season: {
        en: "Sept 10 – Nov/Dec (Annually set)",
        zh: "9月10日至11月/12月（每年公布）",
        fi: "10. syyskuuta – marras/joulukuu"
      },
      weapons: {
        en: "Shotgun, Rifle, or Bow",
        zh: "霰弹枪、步枪或猎弓",
        fi: "Haulikko, kivääri tai jousi"
      },
      permit: {
        en: "Metsähallitus state permit or club land",
        zh: "国家林业局小猎物票或猎会地",
        fi: "Metsähallituksen kanalintulupa tai seuran lupa"
      },
      tips: {
        en: "Hunted on open peat bogs at sunrise using silhouette decoys mounted on tall birch poles (kuvapyynti), or walking forest edges.",
        zh: "清晨在开阔泥炭沼泽边将假鸟诱饵立在高高白桦树顶进行引诱（Kuvapyynti），也可在桦树混交林漫步巡猎。",
        fi: "Pyynti suoritetaan usein aamuvarhaisella suonlaidoilla kuvastamalla (koppelon/teeren kuvat korkeissa koivuissa) tai kävellen laiteilla."
      }
    },
    {
      id: "pyy",
      nameFi: "Pyy",
      nameEn: "Hazel Grouse",
      nameZh: "花尾榛鸡（飞龙鸟）",
      latin: "Tetrastes bonasia",
      category: "grouse",
      season: {
        en: "Sept 10 – Dec 31",
        zh: "9月10日 至 12月31日",
        fi: "10. syyskuuta – 31. joulukuuta"
      },
      weapons: {
        en: "Shotgun or small rifle (.22 LR / .17 HMR)",
        zh: "轻便小霰弹枪或微口径步枪（.22 LR / .17 HMR）",
        fi: "Haulikko tai pienoiskivääri (.22 LR / .17 HMR)"
      },
      permit: {
        en: "Metsähallitus state permit or club land",
        zh: "国家林业局小猎物票或猎会地",
        fi: "Kanalintulupa tai seuran lupa"
      },
      tips: {
        en: "Inhabits thick spruce hollows with alder trees. Whistle using a tiny metal pipe (pyypilli) to imitate its territorial call. Accessible and fun for complete beginners!",
        zh: "芬兰极易上手的鸟类！栖息于溪谷云杉桤木茂密处。用金属小哨子（Pyypilli）模拟领地叫声，鸟会直接飞落在你头顶树枝上回应。",
        fi: "Asustaa tiheissä kuusikoissa ja leppäkorvissa. Houkutellaan pienellä metallipillillä (pyypilli). Erinomainen ja opettavainen laji aloittelijalle!"
      }
    },
    {
      id: "sinisorsa",
      nameFi: "Sinisorsa",
      nameEn: "Mallard",
      nameZh: "绿头鸭",
      latin: "Anas platyrhynchos",
      category: "waterfowl",
      season: {
        en: "Aug 20 (12:00 noon) – Dec 31",
        zh: "8月20日正午12:00整 至 12月31日",
        fi: "20. elokuuta klo 12.00 – 31. joulukuuta"
      },
      weapons: {
        en: "Shotgun (NON-LEAD ONLY: steel, bismuth, tungsten)",
        zh: "霰弹枪（严格仅限无铅环保弹：钢珠、铋或钨）",
        fi: "Haulikko (VAIN LYIJYTTÖMÄT: teräs, vismutti jne.)"
      },
      permit: {
        en: "Metsähallitus waterfowl permit or private waters",
        zh: "国家林业局水禽票或私有水域许可",
        fi: "Vesilintulupa valtion vesille tai yksityinen vesialue"
      },
      tips: {
        en: "The staple of Finnish duck hunting. Decoy spreads and retrievers on lake shores. Strictly enforce the non-lead wetland shot rule!",
        zh: "芬兰野鸭开猎日全民盛典的主角。湖泊芦苇荡中布设假鸭与寻回犬。务必严格遵守湿地100米铅弹禁令！",
        fi: "Vesilinnustuksen suosituin saalis. Houkutuskuvat ja noutava koira tekevät jahdista tehokasta. Muista ehdoton lyijyhaulikielto kosteikoilla!"
      }
    },
    {
      id: "tavi",
      nameFi: "Tavi",
      nameEn: "Eurasian Teal",
      nameZh: "绿翅鸭",
      latin: "Anas crecca",
      category: "waterfowl",
      season: {
        en: "Aug 20 (12:00 noon) – Dec 31",
        zh: "8月20日正午12:00整 至 12月31日",
        fi: "20. elokuuta klo 12.00 – 31. joulukuuta"
      },
      weapons: {
        en: "Shotgun (non-lead shot mandatory)",
        zh: "霰弹枪（强制无铅弹）",
        fi: "Haulikko (lyijytön haulimateriaali pakollinen)"
      },
      permit: {
        en: "Waterfowl permit",
        zh: "水禽狩猎许可",
        fi: "Vesilintulupa"
      },
      tips: {
        en: "Smallest European duck. Extremely fast, acrobatic fliers. Tender, exquisite culinary meat.",
        zh: "欧洲体型最小的野鸭。飞行敏捷如闪电，极考验飞碟射击功底。肉质极其细嫩甘甜。",
        fi: "Euroopan pienin sorsalintu. Nopea ja taitava lentäjä, joka vaatii ripeää haulikonkäsittelyä. Liha on ensiluokkaisen mureaa."
      }
    },
    {
      id: "kyyhky",
      nameFi: "Sepelkyyhky",
      nameEn: "Common Wood Pigeon",
      nameZh: "斑尾林鸽",
      latin: "Columba palumbus",
      category: "small",
      season: {
        en: "Aug 10 – Oct 31",
        zh: "8月10日 至 10月31日",
        fi: "10. elokuuta – 31. lokakuuta"
      },
      weapons: {
        en: "Shotgun",
        zh: "12号双管或半自动霰弹枪",
        fi: "Haulikko"
      },
      permit: {
        en: "Field landowner permission or state land permit",
        zh: "农田地主授权或许可证",
        fi: "Pellonvuokraajan/maanomistajan lupa tai valtion lupa"
      },
      tips: {
        en: "Fast decoying action over freshly harvested pea and grain fields in August. Rich, lean, tender dark breast fillets.",
        zh: "8月收割后的豌豆田或麦茬田假鸟伏击战，击发频率极高。深红精瘦的林鸽胸肉是米其林级别的野味佳肴。",
        fi: "Nopearytmistä pyyntiä vastapuinnuilla herne- ja viljapelloilla houkutuskuvilla elokuussa. Rintafileet ovat tummaa herkkua."
      }
    },
    {
      id: "metsajanis",
      nameFi: "Metsäjänis",
      nameEn: "Mountain Hare",
      nameZh: "雪兔（芬兰山兔）",
      latin: "Lepus timidus",
      category: "small",
      season: {
        en: "Sept 1 – Feb 28",
        zh: "9月1日 至 翌年2月28日",
        fi: "1. syyskuuta – 28. helmikuuta"
      },
      weapons: {
        en: "Shotgun, small rifle, or bow",
        zh: "霰弹枪、小口径步枪或猎弓",
        fi: "Haulikko, pienoiskivääri tai jousi"
      },
      permit: {
        en: "Small game permit (Eräluvat or club)",
        zh: "国家小猎物票或俱乐部会籍",
        fi: "Pienriistalupa (Eräluvat tai metsästysseura)"
      },
      tips: {
        en: "Turns pure white in winter. Traditionally hunted behind purebred Finnish Hounds (Suomenajokoira) or tracking ski routes in fresh powder.",
        zh: "入冬后褪成通体雪白。传统依靠芬兰猎兔犬（Suomenajokoira）追猎，或在深冬滑野雪寻觅新鲜脚印追踪。",
        fi: "Muuttuu talvella vitivalkoiseksi. Perinteinen pyynti tapahtuu suomenajokoiralla kuunnellen ajoa passissa, tai hiihtäen tuoreita jälkiä seuraten."
      }
    },
    {
      id: "rusakko",
      nameFi: "Rusakko",
      nameEn: "European Brown Hare",
      nameZh: "欧洲野兔（草兔）",
      latin: "Lepus europaeus",
      category: "small",
      season: {
        en: "Sept 1 – Feb 28 (often March in south)",
        zh: "9月1日 至 翌年2月28日（南部常延至3月）",
        fi: "1. syyskuuta – 28. helmikuuta"
      },
      weapons: {
        en: "Shotgun, rifle, or bow",
        zh: "霰弹枪、步枪或复合弓",
        fi: "Haulikko, kivääri tai jousi"
      },
      permit: {
        en: "Landowner permission",
        zh: "地主许可",
        fi: "Maanomistajan lupa"
      },
      tips: {
        en: "Large hare found in farm fields and southern suburban fringes. Does not turn white in winter.",
        zh: "体型庞大（可达5-6公斤），栖息于农耕平原及大赫尔辛基近郊绿带。冬季不换白毛。",
        fi: "Kookkaampi jänislaji viljelysalueilla ja taajamien laitamilla. Ei vaihda valkoista talvipukua."
      }
    },
    {
      id: "supikoira",
      nameFi: "Supikoira",
      nameEn: "Raccoon Dog",
      nameZh: "貉（外来入侵物种）",
      latin: "Nyctereutes procyonoides",
      category: "invasive",
      season: {
        en: "Year-round (Invasive Alien Species)",
        zh: "全年无休可捕（法定有害外来入侵物种）",
        fi: "Ympärivuotinen (haitallinen vieraslaji)"
      },
      weapons: {
        en: "Shotgun, small rifle, bow, or live-catch trap",
        zh: "霰弹枪、小口径步枪、猎弓或安全活捕笼",
        fi: "Haulikko, pienoiskivääri, jousi tai elävänä pyytävä loukku"
      },
      permit: {
        en: "Small predator permit (~10 €/yr) or land access",
        zh: "国家小害兽票（仅约10欧/年）或私人林地准许",
        fi: "Pienpetolupa (n. 10 €/vuosi) tai maanhaltijan lupa"
      },
      tips: {
        en: "Invasive predator devastating ground-nesting waterbirds. Removing them from archipelagos is vital conservation work. Very easy for beginners to trap or shoot at feeding points.",
        zh: "严重威胁群岛本土筑巢水禽蛋与雏鸟的入侵物种。清除它们是备受赞赏的环保义举。新手极易通过诱捕箱或夜间守点捕获。",
        fi: "Haitallinen vieraspeto, joka tuhoaa maassa pesivien lintujen pesiä. Supikoiran pyynti saaristossa ja kosteikoilla on arvokasta luonnonhoitoa."
      }
    },
    {
      id: "minkki",
      nameFi: "Minkki",
      nameEn: "American Mink",
      nameZh: "美洲水貂（外来入侵物种）",
      latin: "Neovison vison",
      category: "invasive",
      season: {
        en: "Year-round (Invasive Alien Species)",
        zh: "全年可捕（法定有害外来入侵物种）",
        fi: "Ympärivuotinen (haitallinen vieraslaji)"
      },
      weapons: {
        en: "Small caliber, humane kill-traps, or dogs",
        zh: "微口径枪械、符合标准的人道撞击踏板陷阱箱",
        fi: "Pienoiskivääri, heti tappavat raudat suojalaatikossa tai koira"
      },
      permit: {
        en: "Small predator permit",
        zh: "小兽捕猎票",
        fi: "Pienpetolupa"
      },
      tips: {
        en: "Invasive predator causing severe harm to coastal bird colonies and fish stocks. Trapping with conibear-style boxes along shorelines is common.",
        zh: "皮草农场逃逸并在芬兰野化繁殖的恶性掠食者。沿海岩礁布设安全保护箱机械陷阱是最高效的治理手段。",
        fi: "Karkulaisena luontoon levinnyt peto, joka tyhjentää ulkosaariston linnustoa. Loukkupyynti rannoilla on tehokasta."
      }
    },
    {
      id: "majava",
      nameFi: "Kanadanmajava",
      nameEn: "Canadian Beaver",
      nameZh: "加拿大海狸（河狸）",
      latin: "Castor canadensis",
      category: "small",
      season: {
        en: "Aug 20 – April 30",
        zh: "8月20日 至 翌年4月30日（春季解冻期为黄金捕季）",
        fi: "20. elokuuta – 30. huhtikuuta"
      },
      weapons: {
        en: "Rifle (bullet ≥ 3.2g / E100 ≥ 800 J) or Bow (arrow tethered with line)",
        zh: "步枪（弹头≥3.2g，动能≥800J）或带回收钓线绑定的复合弓",
        fi: "Kivääri (luoti väh. 3,2g / E100 ≥ 800 J) tai jousi (nuoli kytkettävä siimalla)"
      },
      permit: {
        en: "Beaver permit (Majavalupa)",
        zh: "海狸专项配额票（Majavalupa）",
        fi: "Metsähallituksen majavalupa"
      },
      tips: {
        en: "Challenging spring hunt along thawed forest creeks in April. When bow hunting, the arrow must legally be tied to the bow with line to retrieve from water.",
        zh: "4月冰雪初融时在林间小溪旁的隐蔽狩猎极具挑战性。弓猎海狸法律强制要求必须在箭尾绑上坚固尼龙线连接弓把，防止落水沉没遗失。",
        fi: "Upea kevätjahti huhtikuisilla puroilla jäiden lähdettyä. Jousella ammuttaessa nuolen siimasidonta on lakisääteinen vaatimus."
      }
    }
  ]
};

// Helper: render bilingual text string or object
function getI18nText(item, lang) {
  if (!item) return "";
  if (typeof item === 'string') return item;
  return item[lang] || item.en || "";
}

function renderBilingualText(item, lang1, lang2, isBlock = false) {
  if (!item) return "";
  const t1 = getI18nText(item, lang1);
  if (!lang2 || lang1 === lang2) {
    return t1;
  }
  const t2 = getI18nText(item, lang2);
  if (!t2 || t1 === t2) return t1;

  if (isBlock) {
    return `
      <div class="primary-text">${t1}</div>
      <div class="secondary-text" style="color: #64748b; font-size: 0.9em; margin-top: 4px; line-height: 1.4;">${t2}</div>
    `;
  } else {
    return `${t1} <span class="secondary-text" style="color: #64748b; font-size: 0.88em; font-weight: normal;">/ ${t2}</span>`;
  }
}
