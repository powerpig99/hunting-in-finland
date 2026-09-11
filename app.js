/**
 * Hunting in Finland — Trilingual Interactive Engine
 * Supports English (en), Chinese (zh), and Finnish (fi)
 * Features Dual-Language live comparison mode and In-App Guide Reader!
 */

let currentChapterId = 'ch1';

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initWizard();
  initQuiz();
  initSpeciesExplorer();
  initCalculator();
  initChecklists();
  initReader();
  renderAll();
});

/* ==========================================================================
   0. Language & Dual-Language Management
   ========================================================================== */

function initLanguage() {
  const savedLang1 = localStorage.getItem('hunting_finland_lang1');
  const savedLang2 = localStorage.getItem('hunting_finland_lang2');

  if (savedLang1 && ['en', 'zh', 'fi'].includes(savedLang1)) {
    I18N.currentLang = savedLang1;
  } else {
    I18N.currentLang = 'en';
  }

  if (savedLang2 && ['en', 'zh', 'fi'].includes(savedLang2) && savedLang2 !== I18N.currentLang) {
    I18N.secondaryLang = savedLang2;
  } else {
    I18N.secondaryLang = null;
  }

  // Primary language buttons
  document.querySelectorAll('.primary-lang-row .lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.dataset.lang;
      if (targetLang === I18N.currentLang) return;
      I18N.currentLang = targetLang;
      if (I18N.secondaryLang === I18N.currentLang) {
        I18N.secondaryLang = null;
        localStorage.removeItem('hunting_finland_lang2');
      }
      localStorage.setItem('hunting_finland_lang1', I18N.currentLang);
      renderAll();
    });
  });

  // Secondary comparison language buttons (toggle on / off)
  document.querySelectorAll('.secondary-lang-row .lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang2 = btn.dataset.lang2;
      if (targetLang2 === I18N.currentLang) return;

      if (I18N.secondaryLang === targetLang2) {
        // Toggle off
        I18N.secondaryLang = null;
        localStorage.removeItem('hunting_finland_lang2');
      } else {
        I18N.secondaryLang = targetLang2;
        localStorage.setItem('hunting_finland_lang2', I18N.secondaryLang);
      }
      renderAll();
    });
  });
}

function updateLanguageButtons() {
  const l1 = I18N.currentLang;
  const l2 = I18N.secondaryLang;

  // Primary buttons
  document.querySelectorAll('.primary-lang-row .lang-btn').forEach(btn => {
    if (btn.dataset.lang === l1) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Secondary buttons
  document.querySelectorAll('.secondary-lang-row .lang-btn').forEach(btn => {
    const bLang2 = btn.dataset.lang2;
    if (bLang2 === l1) {
      btn.classList.add('disabled-lang');
      btn.classList.remove('active-secondary');
    } else {
      btn.classList.remove('disabled-lang');
      if (bLang2 === l2) {
        btn.classList.add('active-secondary');
      } else {
        btn.classList.remove('active-secondary');
      }
    }
  });
}

function renderAll() {
  updateLanguageButtons();
  renderStaticUI();
  renderWizardUI();
  renderQuizQuestion();
  renderSpeciesExplorer();
  renderCalculatorUI();
  renderChecklistsUI();
  renderDocsHub();
  renderReader();
}

function renderStaticUI() {
  const l1 = I18N.currentLang;
  const l2 = I18N.secondaryLang;
  const ui1 = I18N.ui[l1];
  const ui2 = l2 ? I18N.ui[l2] : null;

  // Site Brand & Badge
  setHtmlWithBilingual('site-brand-text', ui1.siteBrand, ui2 ? ui2.siteBrand : null);
  setHtmlWithBilingual('site-badge-text', ui1.siteBadge, ui2 ? ui2.siteBadge : null);

  // Navigation Links
  setHtmlWithBilingual('nav-wizard-link', ui1.navWizard, ui2 ? ui2.navWizard : null);
  setHtmlWithBilingual('nav-quiz-link', ui1.navQuiz, ui2 ? ui2.navQuiz : null);
  setHtmlWithBilingual('nav-species-link', ui1.navSpecies, ui2 ? ui2.navSpecies : null);
  setHtmlWithBilingual('nav-calc-link', ui1.navCalc, ui2 ? ui2.navCalc : null);
  setHtmlWithBilingual('nav-checklists-link', ui1.navChecklists, ui2 ? ui2.navChecklists : null);
  setHtmlWithBilingual('nav-docs-link', ui1.navDocs, ui2 ? ui2.navDocs : null);
  setHtmlWithBilingual('nav-blog-link', ui1.navBlog, ui2 ? ui2.navBlog : null);

  // Hero Section
  setHtmlWithBilingual('hero-tag-text', ui1.heroTag, ui2 ? ui2.heroTag : null);
  setHtmlWithBilingual('hero-title-text', ui1.heroTitle, ui2 ? ui2.heroTitle : null, true);
  setHtmlWithBilingual('hero-subtitle-text', ui1.heroSubtitle, ui2 ? ui2.heroSubtitle : null, true);
  setHtmlWithBilingual('hero-btn-wizard', ui1.heroBtnWizard, ui2 ? ui2.heroBtnWizard : null);
  setHtmlWithBilingual('hero-btn-quiz', ui1.heroBtnQuiz, ui2 ? ui2.heroBtnQuiz : null);

  // Hero Stats
  setText('stat-1-num', ui1.stat1Num);
  setHtmlWithBilingual('stat-1-label', ui1.stat1Label, ui2 ? ui2.stat1Label : null);
  setText('stat-2-num', ui1.stat2Num);
  setHtmlWithBilingual('stat-2-label', ui1.stat2Label, ui2 ? ui2.stat2Label : null);
  setText('stat-3-num', ui1.stat3Num);
  setHtmlWithBilingual('stat-3-label', ui1.stat3Label, ui2 ? ui2.stat3Label : null);
  setText('stat-4-num', ui1.stat4Num);
  setHtmlWithBilingual('stat-4-label', ui1.stat4Label, ui2 ? ui2.stat4Label : null);

  // PR Status Notice Card
  setHtmlWithBilingual('pr-notice-title', ui1.prNoticeTitle, ui2 ? ui2.prNoticeTitle : null);
  setHtmlWithBilingual('pr-notice-body', ui1.prNoticeBody, ui2 ? ui2.prNoticeBody : null, true);

  // Section Headers
  setHtmlWithBilingual('sec-tag-wizard', ui1.wizardTag, ui2 ? ui2.wizardTag : null);
  setHtmlWithBilingual('sec-title-wizard', ui1.wizardTitle, ui2 ? ui2.wizardTitle : null);
  setHtmlWithBilingual('sec-sub-wizard', ui1.wizardSubtitle, ui2 ? ui2.wizardSubtitle : null);

  setHtmlWithBilingual('sec-tag-quiz', ui1.quizTag, ui2 ? ui2.quizTag : null);
  setHtmlWithBilingual('sec-title-quiz', ui1.quizTitle, ui2 ? ui2.quizTitle : null);
  setHtmlWithBilingual('sec-sub-quiz', ui1.quizSubtitle, ui2 ? ui2.quizSubtitle : null);

  setHtmlWithBilingual('sec-tag-species', ui1.speciesTag, ui2 ? ui2.speciesTag : null);
  setHtmlWithBilingual('sec-title-species', ui1.speciesTitle, ui2 ? ui2.speciesTitle : null);
  setHtmlWithBilingual('sec-sub-species', ui1.speciesSubtitle, ui2 ? ui2.speciesSubtitle : null);

  const searchInp = document.getElementById('species-search-input');
  if (searchInp) searchInp.placeholder = ui1.speciesSearchPlaceholder;

  setHtmlWithBilingual('filter-all', ui1.filterAll, ui2 ? ui2.filterAll : null);
  setHtmlWithBilingual('filter-big', ui1.filterBig, ui2 ? ui2.filterBig : null);
  setHtmlWithBilingual('filter-grouse', ui1.filterGrouse, ui2 ? ui2.filterGrouse : null);
  setHtmlWithBilingual('filter-waterfowl', ui1.filterWaterfowl, ui2 ? ui2.filterWaterfowl : null);
  setHtmlWithBilingual('filter-small', ui1.filterSmall, ui2 ? ui2.filterSmall : null);
  setHtmlWithBilingual('filter-invasive', ui1.filterInvasive, ui2 ? ui2.filterInvasive : null);

  setHtmlWithBilingual('sec-tag-calc', ui1.calcTag, ui2 ? ui2.calcTag : null);
  setHtmlWithBilingual('sec-title-calc', ui1.calcTitle, ui2 ? ui2.calcTitle : null);
  setHtmlWithBilingual('sec-sub-calc', ui1.calcSubtitle, ui2 ? ui2.calcSubtitle : null);

  setHtmlWithBilingual('sec-tag-checklists', ui1.checklistsTag, ui2 ? ui2.checklistsTag : null);
  setHtmlWithBilingual('sec-title-checklists', ui1.checklistsTitle, ui2 ? ui2.checklistsTitle : null);
  setHtmlWithBilingual('sec-sub-checklists', ui1.checklistsSubtitle, ui2 ? ui2.checklistsSubtitle : null);

  setHtmlWithBilingual('sec-tag-docs', ui1.docsTag, ui2 ? ui2.docsTag : null);
  setHtmlWithBilingual('sec-title-docs', ui1.docsTitle, ui2 ? ui2.docsTitle : null);
  setHtmlWithBilingual('sec-sub-docs', ui1.docsSubtitle, ui2 ? ui2.docsSubtitle : null);

  setHtmlWithBilingual('footer-desc', ui1.footerDesc, ui2 ? ui2.footerDesc : null);
  setHtmlWithBilingual('footer-auth-title', ui1.footerAuthTitle, ui2 ? ui2.footerAuthTitle : null);
  setHtmlWithBilingual('footer-assoc-title', ui1.footerAssocTitle, ui2 ? ui2.footerAssocTitle : null);
  setHtmlWithBilingual('footer-ecosystem-title', ui1.footerEcosystemTitle, ui2 ? ui2.footerEcosystemTitle : null);
  setHtmlWithBilingual('footer-note', ui1.footerNote, ui2 ? ui2.footerNote : null);
}

function setHtmlWithBilingual(elemId, text1, text2, isBlock = false) {
  const el = document.getElementById(elemId);
  if (!el || !text1) return;
  if (!text2 || text1 === text2) {
    el.innerHTML = text1;
  } else {
    if (isBlock) {
      el.innerHTML = `<div>${text1}</div><div class="dual-secondary-text" style="color: rgba(255,255,255,0.75); font-size: 0.88em; margin-top: 0.35rem; line-height: 1.45;">${text2}</div>`;
    } else {
      el.innerHTML = `${text1} <span class="dual-secondary-text" style="color: inherit; opacity: 0.8; font-size: 0.85em; font-weight: normal;">/ ${text2}</span>`;
    }
  }
}

function setText(elemId, text) {
  const el = document.getElementById(elemId);
  if (el && text) el.textContent = text;
}

/* ==========================================================================
   1. Pathway Finder Wizard
   ========================================================================== */

const wizardState = {
  weapon: 'gun',   // 'gun' | 'bow' | 'mentor'
  target: 'small'  // 'small' | 'big' | 'invasive'
};

function initWizard() {
  // Option selection clicks will be bound during renderWizardUI()
}

function renderWizardUI() {
  const l1 = I18N.currentLang;
  const l2 = I18N.secondaryLang;
  const ui1 = I18N.ui[l1];
  const ui2 = l2 ? I18N.ui[l2] : null;

  // Step titles
  setHtmlWithBilingual('wizard-step-1-title', ui1.wizardStep1, ui2 ? ui2.wizardStep1 : null);
  setHtmlWithBilingual('wizard-step-2-title', ui1.wizardStep2, ui2 ? ui2.wizardStep2 : null);

  // Weapon Options Container
  const weaponContainer = document.getElementById('wizard-weapon-options');
  if (weaponContainer) {
    weaponContainer.innerHTML = '';
    I18N.wizardOptions.weapon.forEach(opt => {
      const box = document.createElement('div');
      box.className = `option-box ${wizardState.weapon === opt.id ? 'selected' : ''}`;
      box.dataset.step = 'weapon';
      box.dataset.value = opt.id;
      box.innerHTML = `
        <div class="opt-icon">${opt.icon}</div>
        <h4>${renderBilingualText(opt.title, l1, l2)}</h4>
        <p>${renderBilingualText(opt.desc, l1, l2, true)}</p>
      `;
      box.addEventListener('click', () => {
        wizardState.weapon = opt.id;
        renderWizardUI();
      });
      weaponContainer.appendChild(box);
    });
  }

  // Target Options Container
  const targetContainer = document.getElementById('wizard-target-options');
  if (targetContainer) {
    targetContainer.innerHTML = '';
    I18N.wizardOptions.target.forEach(opt => {
      const box = document.createElement('div');
      box.className = `option-box ${wizardState.target === opt.id ? 'selected' : ''}`;
      box.dataset.step = 'target';
      box.dataset.value = opt.id;
      box.innerHTML = `
        <div class="opt-icon">${opt.icon}</div>
        <h4>${renderBilingualText(opt.title, l1, l2)}</h4>
        <p>${renderBilingualText(opt.desc, l1, l2, true)}</p>
      `;
      box.addEventListener('click', () => {
        wizardState.target = opt.id;
        renderWizardUI();
      });
      targetContainer.appendChild(box);
    });
  }

  renderWizardPlan();
}

function renderWizardPlan() {
  const container = document.getElementById('wizard-plan-output');
  if (!container) return;
  const l1 = I18N.currentLang;
  const l2 = I18N.secondaryLang;

  const steps = [];

  // Step 1: Orientation & Culture
  steps.push({
    chapterId: "ch6",
    title: {
      en: "Step 1: Low-Risk Orientation & Range Visit (Weeks 1–3)",
      zh: "第1步：零门槛实弹体验与猎会观摩（第1–3周）",
      fi: "Vaihe 1: Tutustuminen ja ratakäynti ilman byrokratiaa (viikot 1–3)"
    },
    desc: {
      en: "Visit a sporting clay range for supervised shooting (Valvottu ammunta, ~25-40 €). No license needed! Join a local hunting club's autumn moose/deer drive as an unarmed beater (Ajomies) to experience the culture and meet mentors.",
      zh: "前往飞碟靶场进行受监督射击体验（Valvottu ammunta，约25-40欧），无需任何持枪证！受邀作为驱兽员（Ajomies）参加当地猎会的秋季围猎，直观感受猎犬与团队协作。",
      fi: "Käy ampumaradalla kokeilemassa haulikkoammuntaa valvotusti (n. 25–40 €). Liity paikallisen seuran jahtiin aseettomana ajomiehenä oppiaksesi käytännön jahtia ja tutustuaksesi eräväkeen."
    }
  });

  // Step 2: Resident Exam & Oma Riista
  steps.push({
    chapterId: "ch1",
    title: {
      en: "Step 2: Hunter's Exam (In English) & Hunting Card (Months 1–2)",
      zh: "第2步：报考猎人资格（可申请英文考卷）并激活猎人卡（第1–2个月）",
      fi: "Vaihe 2: Metsästäjätutkinto (myös englanniksi) ja metsästyskortti (kuukaudet 1–2)"
    },
    desc: {
      en: "Attend a weekend preparatory course (~40 €) and take the 60-question Hunter's Exam (Metsästäjätutkinto, 20 €) at your local RHY (available in English). Register on Oma riista using your Finnish personal ID and banking credentials (Suomi.fi), then pay the annual 43 € Game Management Fee to activate your hunting card and statutory insurance.",
      zh: "参加当地猎会预备班（约40欧），并在当地RHY考点参加60题猎人考试（20欧，可现场要求英文考卷）。通过后使用芬兰个人税号及银行电子认证（Suomi.fi）登录Oma riista，缴纳43欧管理费激活官方猎人卡及法定义务险。",
      fi: "Osallistu RHY:n valmentavalle kurssille ja suorita 60 kysymyksen metsästäjätutkinto (20 €). Kirjaudu suomalaisilla pankkitunnuksilla Oma riistaan ja maksa 43 euron riistanhoitomaksu, joka aktivoi metsästyskortin ja vakuutuksen."
    }
  });

  // Step 3: Weapon Choice
  if (wizardState.weapon === 'bow') {
    steps.push({
      chapterId: "ch3",
      title: {
        en: "Step 3: Compound Bow & 3D Archery Practice (Months 2–3)",
        zh: "第3步：选购复合猎弓与3D射箭实操（第2–3个月）",
        fi: "Vaihe 3: Taljajousen hankinta ja 3D-harjoittelu (kuukaudet 2–3)"
      },
      desc: {
        en: "Purchase a compound hunting bow with draw weight ≥ 180 N (40.5 lbs) and legal cutting broadheads (≥ 22 mm). No police permit or gun safe required! If hunting deer, take the 18-meter Bow Shooting Test (Jousiampumakoe, 20 €).",
        zh: "购入拉力≥40.5磅的复合猎弓和法定割裂式刀头箭（≥22mm）。完全免除警察局办证和厚重枪柜！若计划猎白尾鹿或狍子，参加18米弓猎测试（20欧）。",
        fi: "Hanki metsästysjousi (vetovoima väh. 180 N) ja leikkaavat kärjet (väh. 22 mm). Ei aselupia tai asekaappia! Peuran ja kauriin pyyntiin suorita 18 metrin jousikoe (20 €)."
      }
    });
  } else if (wizardState.weapon === 'gun') {
    steps.push({
      chapterId: "ch2",
      title: {
        en: "Step 3: Police Firearm Permit (Hankkimislupa) & Safe (Months 2–4)",
        zh: "第3步：向警察局申领购枪许可证（Hankkimislupa）（第2–4个月）",
        fi: "Vaihe 3: Hankkimislupa poliisilta ja aseen hankinta (kuukaudet 2–4)"
      },
      desc: {
        en: "Apply electronically on Poliisi.fi with your Hunting Card. Complete a brief interview at your local police station (military service requirements are waived for non-citizens). Purchase a 12-gauge shotgun (birds/hare) or .308 rifle (deer/moose), and present it for serial number inspection within 30 days.",
        zh: "凭借猎人卡及身份证明直接在Poliisi.fi网申购枪证（约106欧）。前往所属警察局接受常规安全面谈（非芬兰公民免服兵役，免除军人证审核）。获批后购买12号双管霰弹枪或.308步枪，30天内携枪前往警局核验枪号换发持枪证。",
        fi: "Hae poliisin sähköisessä asioinnissa hankkimislupaa metsästyskortilla. Käy haastattelussa (ei-kansalaisille sotilaspassivaatimus katsotaan suoraan täytetyksi). Osta 12-kaliiperinen haulikko tai .308-kivääri ja esitä se poliisille 30 päivän kuluessa."
      }
    });

    if (wizardState.target === 'big') {
      steps.push({
        chapterId: "ch5",
        title: {
          en: "Step 3b: Big Game Rifle Shooting Test (Ampumakoe)",
          zh: "第3b步：通过75米大猎物步枪射击测试（Hirvikoe）",
          fi: "Vaihe 3b: Hirvi- ja peurakokeen suoritus (Ampumakoe)"
        },
        desc: {
          en: "Pass the mandatory 4-shot moose/deer rifle test at 75 meters (all 4 shots in 23 cm vital circle within 90 seconds, 20 € fee, valid 3 years).",
          zh: "参加步枪大动物考核：在75米靶距下，90秒内4枪全部射入直径23厘米的靶心环内（费用20欧，成绩全芬兰通用，有效期3年）。",
          fi: "Ammu 4 laukausta 90 sekunnissa 75 metrin matkalta 23 cm osuma-alueeseen (20 €, voimassa 3 vuotta)."
        }
      });
    }
  } else {
    // Mentor / Guided
    steps.push({
      chapterId: "ch2",
      title: {
        en: "Step 3: Supervised Hunting or Parallel Permit (Months 2–3)",
        zh: "第3步：导师现场陪同实猎或申请副持枪证（第2–3个月）",
        fi: "Vaihe 3: Valvottu metsästys tai rinnakkaislupa (kuukaudet 2–3)"
      },
      desc: {
        en: "Hunt under the immediate supervision (arm's reach) of an experienced licensed friend or guide using their firearm. Alternatively, apply for a Parallel Permit (Rinnakkaislupa, ~40 €) to share their weapon legally on solo trips.",
        zh: "在资深猎人导师一臂之内借用导师枪械开火（Valvottu ammunta）。或申请导师枪支名下的副持枪证（Rinnakkaislupa，约40欧），即可独立携带该枪出猎。",
        fi: "Metsästä kokeneen luvanhaltijan välittömässä valvonnassa tai hae poliisilta rinnakkaislupaa ystävän aseeseen (n. 40 €)."
      }
    });
  }

  // Step 4: Land Access
  if (wizardState.target === 'small' || wizardState.target === 'invasive') {
    steps.push({
      chapterId: "ch4",
      title: {
        en: "Step 4: Public State Forest Permits via Eräluvat.fi",
        zh: "第4步：在Eräluvat.fi购买国家公有森林小猎物日票",
        fi: "Vaihe 4: Valtionmaiden luvat Metsähallitukselta (Eräluvat.fi)"
      },
      desc: {
        en: "Purchase day permits (10 €–25 €/day) for 9+ million hectares of state-owned forests in Kainuu, Lapland, or coastal islands. Small predator permits for raccoon dog/mink are only ~10 € for the full season.",
        zh: "在Eräluvat.fi在线购买国家林业局900万公顷公有森林的小猎物日票（10-25欧/天）。外来入侵害兽清除票（貉与水貂）全季仅需约10欧元！",
        fi: "Osta kanalintu- tai vesilintulupia valtion maille (10–25 €/vrk). Pienpetoluvat supikoiralle ja minkille maksavat vain n. 10 € koko kaudelta."
      }
    });
  } else {
    steps.push({
      chapterId: "ch4",
      title: {
        en: "Step 4: Join a Local Hunting Club (Metsästysseura)",
        zh: "第4步：加入当地猎会或预订专业猎塔机位",
        fi: "Vaihe 4: Liittyminen paikalliseen metsästysseuraan"
      },
      desc: {
        en: "Big game hunting in Finland is organized through hunting clubs. As a resident, apply to your local club or participate as a guest on deer stand hunts (Kyttäysjahti).",
        zh: "芬兰大动物狩猎依托地方猎会开展。作为本地居民，可申请加入居住地附近的猎会，或作为客座猎人预约带保暖加热的猎塔机位守猎白尾鹿。",
        fi: "Hirvieläinjahti toimii seurojen kautta. Pysyvänä asukkaana voit hakea kotiseutusi seuran jäsenyyttä tai osallistua peurapasseihin vierasluvalla."
      }
    });
  }

  // Render HTML
  let html = `
    <div class="wizard-summary">
      <div style="margin-bottom: 1.25rem;">
        <span class="badge-fi" style="background-color: var(--color-pine-700); color: white; padding: 0.35rem 0.85rem; border-radius: 4px; font-weight: 700; font-size: 0.88rem;">
          ${l1 === 'zh' ? '为您量身定制的居民实战路径' : (l1 === 'fi' ? 'SINULLE RÄÄTÄLÖITY ASUKKAAN POLKU' : 'TAILORED RESIDENT ROADMAP')}
        </span>
      </div>
      <ul class="roadmap-steps">
  `;

  steps.forEach((s, idx) => {
    html += `
      <li class="roadmap-step-item">
        <div class="step-badge">${idx + 1}</div>
        <div class="step-details">
          <h4>${renderBilingualText(s.title, l1, l2)}</h4>
          <p>${renderBilingualText(s.desc, l1, l2, true)}</p>
          <div style="margin-top: 0.65rem;">
            <button type="button" class="btn btn-secondary doc-open-btn" data-chapter="${s.chapterId}" style="padding: 0.35rem 0.85rem; font-size: 0.82rem; cursor: pointer;">
              📖 ${l1 === 'zh' ? '直接在网页中阅读深度专章' : (l1 === 'fi' ? 'Avaa opasluku sovelluksessa' : 'Read Chapter in Web App')} →
            </button>
          </div>
        </div>
      </li>
    `;
  });

  html += `</ul></div>`;
  container.innerHTML = html;

  // Bind doc-open buttons inside wizard plan
  container.querySelectorAll('.doc-open-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      openReader(btn.dataset.chapter);
    });
  });
}

/* ==========================================================================
   2. Hunter's Exam Practice Quiz (Simulated Metsästäjätutkinto)
   ========================================================================== */

let quizCurrentIndex = 0;
let quizScore = 0;
let quizAnswered = false;

function initQuiz() {
  document.getElementById('quiz-next-btn')?.addEventListener('click', () => {
    if (quizCurrentIndex < I18N.quizQuestions.length - 1) {
      quizCurrentIndex++;
      quizAnswered = false;
      renderQuizQuestion();
    } else {
      showQuizResults();
    }
  });

  document.getElementById('quiz-restart-btn')?.addEventListener('click', () => {
    quizCurrentIndex = 0;
    quizScore = 0;
    quizAnswered = false;
    document.getElementById('quiz-results-card').style.display = 'none';
    document.getElementById('quiz-active-card').style.display = 'block';
    renderQuizQuestion();
  });
}

function renderQuizQuestion() {
  const l1 = I18N.currentLang;
  const l2 = I18N.secondaryLang;
  const ui1 = I18N.ui[l1];

  const q = I18N.quizQuestions[quizCurrentIndex];
  if (!q) return;

  // Header & progress
  const progressPercent = Math.round(((quizCurrentIndex + 1) / I18N.quizQuestions.length) * 100);
  document.getElementById('quiz-progress-fill').style.width = `${progressPercent}%`;
  document.getElementById('quiz-current-num').textContent = quizCurrentIndex + 1;
  document.getElementById('quiz-total-num').textContent = I18N.quizQuestions.length;
  
  // Category Tag
  document.getElementById('quiz-category-tag').innerHTML = renderBilingualText(q.category, l1, l2);
  document.getElementById('quiz-score-display').textContent = `${ui1.quizScoreLabel} ${quizScore}/${quizCurrentIndex}`;

  // Question text
  document.getElementById('quiz-question-text').innerHTML = renderBilingualText(q.question, l1, l2, true);

  // Answers list
  const list = document.getElementById('quiz-answers-list');
  list.innerHTML = '';

  q.options.forEach((optItem, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-answer-btn';
    btn.innerHTML = `
      <span style="font-weight:700; color:var(--color-slate-400); width:24px; flex-shrink:0;">${['A', 'B', 'C', 'D'][idx]}.</span> 
      <div style="flex-grow:1;">${renderBilingualText(optItem, l1, l2, true)}</div>
    `;
    btn.addEventListener('click', () => handleQuizAnswer(idx, btn));
    list.appendChild(btn);
  });

  // Hide feedback & next button
  document.getElementById('quiz-feedback-box').style.display = 'none';
  const nextBtn = document.getElementById('quiz-next-btn');
  if (nextBtn) {
    nextBtn.style.display = 'none';
    nextBtn.textContent = ui1.quizNextBtn;
  }
}

function handleQuizAnswer(selectedIndex, clickedBtn) {
  if (quizAnswered) return;
  quizAnswered = true;

  const l1 = I18N.currentLang;
  const l2 = I18N.secondaryLang;
  const q = I18N.quizQuestions[quizCurrentIndex];
  const allBtns = document.querySelectorAll('.quiz-answer-btn');
  allBtns.forEach(btn => btn.disabled = true);

  const feedbackBox = document.getElementById('quiz-feedback-box');
  feedbackBox.style.display = 'block';

  const expHtml = renderBilingualText(q.explanation, l1, l2, true);

  if (selectedIndex === q.answer) {
    quizScore++;
    clickedBtn.classList.add('correct');
    feedbackBox.className = 'quiz-feedback-box';
    feedbackBox.innerHTML = `<strong>✅ ${l1 === 'zh' ? '回答正确！' : (l1 === 'fi' ? 'Oikein!' : 'Correct!')}</strong><div style="margin-top:4px;">${expHtml}</div>`;
  } else {
    clickedBtn.classList.add('incorrect');
    allBtns[q.answer].classList.add('correct');
    feedbackBox.className = 'quiz-feedback-box error';
    feedbackBox.innerHTML = `<strong>❌ ${l1 === 'zh' ? '回答错误。' : (l1 === 'fi' ? 'Väärin.' : 'Incorrect.')}</strong><div style="margin-top:4px;">${expHtml}</div>`;
  }

  document.getElementById('quiz-score-display').textContent = `${I18N.ui[l1].quizScoreLabel} ${quizScore}/${quizCurrentIndex + 1}`;
  document.getElementById('quiz-next-btn').style.display = 'inline-flex';
}

function showQuizResults() {
  const l1 = I18N.currentLang;
  const ui1 = I18N.ui[l1];

  document.getElementById('quiz-active-card').style.display = 'none';
  const resCard = document.getElementById('quiz-results-card');
  resCard.style.display = 'block';

  const percent = Math.round((quizScore / I18N.quizQuestions.length) * 100);
  const passed = percent >= 80;

  document.getElementById('quiz-final-score').textContent = `${quizScore} / ${I18N.quizQuestions.length} (${percent}%)`;
  const statusEl = document.getElementById('quiz-pass-status');
  if (passed) {
    statusEl.textContent = l1 === 'zh' ? '🎉 恭喜通过！您的芬兰狩猎知识储备已完全满足官方考试要求！' : (l1 === 'fi' ? '🎉 HYVÄKSYTTY! Tietotasosi vastaa virallista metsästäjätutkintoa!' : '🎉 PASSED! You are well-prepared for the Finnish Hunter\'s Exam!');
    statusEl.style.color = 'var(--color-success)';
  } else {
    statusEl.textContent = l1 === 'zh' ? '⚠️ 尚未达到及格线：官方真题考试最多仅允许错8题。请复习深度手册后重试！' : (l1 === 'fi' ? '⚠️ HYLÄTTY: Oikeassa kokeessa sallitaan enintään 8 virhettä. Kertaa oppaat ja yritä uudelleen!' : '⚠️ NOT YET PASSING: In the real exam, max 8 errors are permitted. Review the docs and try again!');
    statusEl.style.color = 'var(--color-danger)';
  }
}

/* ==========================================================================
   3. Species Explorer
   ========================================================================== */

let activeCategory = 'all';
let speciesSearchTerm = '';

function initSpeciesExplorer() {
  const searchInput = document.getElementById('species-search-input');
  const filterChips = document.querySelectorAll('.filter-chip');

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.getAttribute('data-cat');
      renderSpeciesExplorer();
    });
  });

  searchInput?.addEventListener('input', (e) => {
    speciesSearchTerm = e.target.value.toLowerCase().trim();
    renderSpeciesExplorer();
  });
}

function renderSpeciesExplorer() {
  const container = document.getElementById('species-cards-container');
  if (!container) return;
  const l1 = I18N.currentLang;
  const l2 = I18N.secondaryLang;
  const ui1 = I18N.ui[l1];

  container.innerHTML = '';

  const filtered = I18N.species.filter(item => {
    const matchesCat = (activeCategory === 'all') || (item.category === activeCategory);
    const textCorpus = `${item.nameFi} ${item.nameEn} ${item.nameZh} ${item.latin} ${getI18nText(item.tips, 'en')} ${getI18nText(item.tips, 'zh')} ${getI18nText(item.tips, 'fi')}`.toLowerCase();
    const matchesSearch = textCorpus.includes(speciesSearchTerm);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 2.5rem; color: var(--color-slate-500);">
      ${l1 === 'zh' ? '未找到匹配的猎物物种，请尝试清空搜索词。' : (l1 === 'fi' ? 'Ei hakua vastaavia riistalajeja.' : 'No game species match your search.')}
    </div>`;
    return;
  }

  filtered.forEach(s => {
    const card = document.createElement('div');
    card.className = 'species-card';

    // Primary & Secondary Names
    const primaryName = l1 === 'zh' ? s.nameZh : (l1 === 'fi' ? s.nameFi : s.nameEn);
    const secondaryName = l2 ? (l2 === 'zh' ? s.nameZh : (l2 === 'fi' ? s.nameFi : s.nameEn)) : null;

    card.innerHTML = `
      <div class="species-card-header">
        <div class="species-card-tag">${getCategoryBadge(s.category, l1)}</div>
        <h3>
          ${primaryName} 
          <span style="font-weight:400; color:var(--color-slate-500); font-size:0.95rem;">(${s.nameFi})</span>
        </h3>
        ${secondaryName && secondaryName !== primaryName ? `<div style="color:var(--color-pine-700); font-size:0.9rem; font-weight:600;">${secondaryName}</div>` : ''}
        <div class="latin-name">${s.latin}</div>
      </div>
      <div class="species-card-body">
        <div class="info-row">
          <span class="info-label">${ui1.seasonLabel}</span>
          <span class="info-value">${renderBilingualText(s.season, l1, l2, true)}</span>
        </div>
        <div class="info-row">
          <span class="info-label">${ui1.weaponsLabel}</span>
          <span class="info-value">${renderBilingualText(s.weapons, l1, l2, true)}</span>
        </div>
        <div class="info-row">
          <span class="info-label">${ui1.permitLabel}</span>
          <span class="info-value">${renderBilingualText(s.permit, l1, l2, true)}</span>
        </div>
        <div class="info-row">
          <span class="info-label">${ui1.fieldTipLabel}</span>
          <span class="info-value">${renderBilingualText(s.tips, l1, l2, true)}</span>
        </div>
      </div>
      <div class="species-card-footer">
        🇫🇮 ${l1 === 'zh' ? '芬兰合法法定猎物' : (l1 === 'fi' ? 'Suomen laillinen riistaeläin' : 'Legal Game in Finland')}
      </div>
    `;
    container.appendChild(card);
  });
}

function getCategoryBadge(cat, lang) {
  switch (cat) {
    case 'big': return lang === 'zh' ? '大型鹿类/驼鹿' : (lang === 'fi' ? 'Hirvieläimet' : 'Big Game / Cervids');
    case 'grouse': return lang === 'zh' ? '森林松鸡类' : (lang === 'fi' ? 'Metsäkanalinnut' : 'Forest Grouse');
    case 'waterfowl': return lang === 'zh' ? '水禽鸭类' : (lang === 'fi' ? 'Vesilinnut' : 'Waterfowl');
    case 'small': return lang === 'zh' ? '小型猎物' : (lang === 'fi' ? 'Pienriista' : 'Small Game');
    case 'invasive': return lang === 'zh' ? '外来入侵有害害兽' : (lang === 'fi' ? 'Haitallinen vieraslaji' : 'Invasive Predator');
    default: return 'Game';
  }
}

/* ==========================================================================
   4. Budget & Startup Cost Calculator
   ========================================================================== */

function initCalculator() {
  document.querySelectorAll('.calc-toggle').forEach(cb => {
    cb.addEventListener('change', updateCalculatorTotals);
  });
}

function renderCalculatorUI() {
  const l1 = I18N.currentLang;
  const l2 = I18N.secondaryLang;
  const ui1 = I18N.ui[l1];
  const ui2 = l2 ? I18N.ui[l2] : null;

  setHtmlWithBilingual('calc-gun-title', ui1.calcGunTitle, ui2 ? ui2.calcGunTitle : null);
  setHtmlWithBilingual('calc-gun-desc', ui1.calcGunDesc, ui2 ? ui2.calcGunDesc : null);
  setHtmlWithBilingual('calc-bow-title', ui1.calcBowTitle, ui2 ? ui2.calcBowTitle : null);
  setHtmlWithBilingual('calc-bow-desc', ui1.calcBowDesc, ui2 ? ui2.calcBowDesc : null);
  setHtmlWithBilingual('calc-guided-title', ui1.calcGuidedTitle, ui2 ? ui2.calcGuidedTitle : null);
  setHtmlWithBilingual('calc-guided-desc', ui1.calcGuidedDesc, ui2 ? ui2.calcGuidedDesc : null);

  updateCalculatorTotals();
}

function updateCalculatorTotals() {
  // Gun Route
  let gunTotal = 20 + 43; // Exam + Game fee
  if (document.getElementById('cb-gun-safe')?.checked) gunTotal += 350;
  if (document.getElementById('cb-gun-permit')?.checked) gunTotal += 106;
  if (document.getElementById('cb-gun-weapon')?.checked) gunTotal += 650;
  if (document.getElementById('cb-gun-ammo')?.checked) gunTotal += 80;
  if (document.getElementById('cb-gun-club')?.checked) gunTotal += 200;
  const gunTotalEl = document.getElementById('calc-gun-total');
  if (gunTotalEl) gunTotalEl.textContent = `${gunTotal} €`;

  // Bow Route
  let bowTotal = 20 + 43;
  if (document.getElementById('cb-bow-pkg')?.checked) bowTotal += 490;
  if (document.getElementById('cb-bow-arrows')?.checked) bowTotal += 90;
  if (document.getElementById('cb-bow-target')?.checked) bowTotal += 70;
  if (document.getElementById('cb-bow-heads')?.checked) bowTotal += 50;
  if (document.getElementById('cb-bow-test')?.checked) bowTotal += 20;
  const bowTotalEl = document.getElementById('calc-bow-total');
  if (bowTotalEl) bowTotalEl.textContent = `${bowTotal} €`;

  // Guided Route
  let guidedTotal = 20 + 43;
  if (document.getElementById('cb-guide-clay')?.checked) guidedTotal += 35;
  if (document.getElementById('cb-guide-hunt')?.checked) guidedTotal += 220;
  if (document.getElementById('cb-guide-gear')?.checked) guidedTotal += 80;
  const guidedTotalEl = document.getElementById('calc-guided-total');
  if (guidedTotalEl) guidedTotalEl.textContent = `${guidedTotal} €`;
}

/* ==========================================================================
   5. Interactive Checklists
   ========================================================================== */

function initChecklists() {
  document.querySelectorAll('.check-item input[type="checkbox"]').forEach(box => {
    box.addEventListener('change', () => {
      const parent = box.closest('.check-item');
      if (box.checked) {
        parent.classList.add('done');
      } else {
        parent.classList.remove('done');
      }
    });
  });
}

function renderChecklistsUI() {
  const l1 = I18N.currentLang;
  const l2 = I18N.secondaryLang;
  const ui1 = I18N.ui[l1];
  const ui2 = l2 ? I18N.ui[l2] : null;

  setHtmlWithBilingual('cl-exam-title', ui1.clExamTitle, ui2 ? ui2.clExamTitle : null);
  setHtmlWithBilingual('cl-range-title', ui1.clRangeTitle, ui2 ? ui2.clRangeTitle : null);
  setHtmlWithBilingual('cl-hunt-title', ui1.clHuntTitle, ui2 ? ui2.clHuntTitle : null);
}

/* ==========================================================================
   6. Docs Hub & In-App Guide Reader
   ========================================================================== */

function initReader() {
  const modal = document.getElementById('reader-modal');
  const closeBtn = document.getElementById('reader-close-btn');
  const closeBottomBtn = document.getElementById('reader-close-bottom-btn');
  const chapterSelect = document.getElementById('reader-chapter-select');
  const prevBtn = document.getElementById('reader-prev-btn');
  const nextBtn = document.getElementById('reader-next-btn');

  closeBtn?.addEventListener('click', closeReader);
  closeBottomBtn?.addEventListener('click', closeReader);

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeReader();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closeReader();
    }
  });

  chapterSelect?.addEventListener('change', (e) => {
    openReader(e.target.value);
  });

  prevBtn?.addEventListener('click', () => {
    navigateChapter(-1);
  });

  nextBtn?.addEventListener('click', () => {
    navigateChapter(1);
  });

  // Global click interceptor: intercept any click to docs/*.md or docs/*.html and open in reader!
  document.addEventListener('click', (e) => {
    const targetLink = e.target.closest('a');
    if (!targetLink) return;
    const href = targetLink.getAttribute('href') || '';
    if (href.includes('docs/') && (href.endsWith('.md') || href.endsWith('.html'))) {
      e.preventDefault();
      const match = href.match(/0(\d)/);
      if (match && match[1]) {
        openReader(`ch${match[1]}`);
      } else {
        openReader('ch1');
      }
    }
  });
}

function openReader(chapterId) {
  if (!chapterId) chapterId = 'ch1';
  // If passed a path or digit
  if (chapterId.includes('01')) chapterId = 'ch1';
  else if (chapterId.includes('02')) chapterId = 'ch2';
  else if (chapterId.includes('03')) chapterId = 'ch3';
  else if (chapterId.includes('04')) chapterId = 'ch4';
  else if (chapterId.includes('05')) chapterId = 'ch5';
  else if (chapterId.includes('06')) chapterId = 'ch6';
  else if (chapterId.includes('07')) chapterId = 'ch7';
  else if (chapterId.includes('08')) chapterId = 'ch8';

  currentChapterId = chapterId;
  renderReader();

  const modal = document.getElementById('reader-modal');
  if (modal) {
    modal.classList.add('active');
    modal.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }
}

function closeReader() {
  const modal = document.getElementById('reader-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function navigateChapter(direction) {
  const currentIndex = CHAPTERS_DATA.findIndex(c => c.id === currentChapterId);
  if (currentIndex === -1) return;
  const newIndex = currentIndex + direction;
  if (newIndex >= 0 && newIndex < CHAPTERS_DATA.length) {
    openReader(CHAPTERS_DATA[newIndex].id);
  }
}

function renderReader() {
  const l1 = I18N.currentLang;
  const l2 = I18N.secondaryLang;

  const chapter = CHAPTERS_DATA.find(c => c.id === currentChapterId) || CHAPTERS_DATA[0];
  if (!chapter) return;

  // Chapter Select Dropdown
  const selectEl = document.getElementById('reader-chapter-select');
  if (selectEl) {
    selectEl.innerHTML = '';
    CHAPTERS_DATA.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      const t1 = getI18nText(c.title, l1);
      opt.textContent = `${c.num}. ${t1}`;
      if (c.id === currentChapterId) opt.selected = true;
      selectEl.appendChild(opt);
    });
  }

  // Tag & Titles
  const chapterTagEl = document.getElementById('reader-chapter-tag');
  if (chapterTagEl) {
    chapterTagEl.textContent = l1 === 'zh' ? `第 ${chapter.num} 章` : (l1 === 'fi' ? `Luku ${chapter.num}` : `Chapter ${chapter.num}`);
  }

  const titleEl = document.getElementById('reader-article-title');
  if (titleEl) {
    titleEl.innerHTML = renderBilingualText(chapter.title, l1, l2, true);
  }

  const subEl = document.getElementById('reader-article-subtitle');
  if (subEl) {
    subEl.innerHTML = renderBilingualText(chapter.subtitle, l1, l2, true);
  }

  // Content Area
  const contentEl = document.getElementById('reader-article-content');
  if (contentEl) {
    let mainContent = getI18nText(chapter.content, l1);
    if (l2 && l2 !== l1) {
      const secondaryContent = getI18nText(chapter.content, l2);
      if (secondaryContent && secondaryContent !== mainContent) {
        mainContent = `
          <div class="reader-primary-content">
            ${mainContent}
          </div>
          <div class="reader-secondary-content" style="margin-top: 3rem; padding-top: 2rem; border-top: 3px dashed var(--color-slate-300); background: #fdfdfd;">
            <div style="font-size: 0.82rem; font-weight: 700; text-transform: uppercase; color: var(--color-pine-700); margin-bottom: 1rem; letter-spacing: 1px;">
              🌐 ${l2 === 'zh' ? '对照参考文本（中文）' : (l2 === 'fi' ? 'Vertailukäännös (Suomi)' : 'Comparative Reference (English)')}
            </div>
            ${secondaryContent}
          </div>
        `;
      }
    }
    contentEl.innerHTML = mainContent;
  }

  // Prev / Next button states
  const currentIndex = CHAPTERS_DATA.findIndex(c => c.id === currentChapterId);
  const prevBtn = document.getElementById('reader-prev-btn');
  const nextBtn = document.getElementById('reader-next-btn');

  if (prevBtn) {
    prevBtn.disabled = currentIndex === 0;
    prevBtn.style.opacity = currentIndex === 0 ? '0.4' : '1';
    prevBtn.innerHTML = `← ${l1 === 'zh' ? '上一章' : (l1 === 'fi' ? 'Edellinen luku' : 'Previous Chapter')}`;
  }

  if (nextBtn) {
    nextBtn.disabled = currentIndex === CHAPTERS_DATA.length - 1;
    nextBtn.style.opacity = currentIndex === CHAPTERS_DATA.length - 1 ? '0.4' : '1';
    nextBtn.innerHTML = `${l1 === 'zh' ? '下一章' : (l1 === 'fi' ? 'Seuraava luku' : 'Next Chapter')} →`;
  }

  const closeBottomBtn = document.getElementById('reader-close-bottom-btn');
  if (closeBottomBtn) {
    closeBottomBtn.textContent = l1 === 'zh' ? '返回主页 ✕' : (l1 === 'fi' ? 'Sulje käsikirja ✕' : 'Close Handbook ✕');
  }

  const closeText = document.getElementById('reader-close-text');
  if (closeText) {
    closeText.textContent = l1 === 'zh' ? '返回主页' : (l1 === 'fi' ? 'Takaisin' : 'Back to Guide');
  }

  // Update Standalone Page link in reader modal header
  const standaloneLink = document.getElementById('reader-standalone-link');
  const standaloneText = document.getElementById('reader-standalone-text');
  if (standaloneLink) {
    standaloneLink.href = `docs/${chapter.num}_${chapter.slug}.html`;
  }
  if (standaloneText) {
    standaloneText.textContent = l1 === 'zh' ? '独立网页' : (l1 === 'fi' ? 'Erillinen sivu' : 'Standalone Page');
  }
}

function renderDocsHub() {
  const l1 = I18N.currentLang;
  const l2 = I18N.secondaryLang;

  const container = document.getElementById('docs-cards-grid');
  if (!container) return;
  container.innerHTML = '';

  CHAPTERS_DATA.forEach(d => {
    const card = document.createElement('div');
    card.className = 'doc-card-interactive';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    const chapterName = getI18nText(d.title, l1);
    card.setAttribute('aria-label', `${l1 === 'zh' ? '阅读章节' : 'Read chapter'}: ${chapterName}`);

    const badgeText = l1 === 'zh' ? `第 ${d.num} 章` : (l1 === 'fi' ? `Luku ${d.num}` : `Chapter ${d.num}`);

    card.innerHTML = `
      <div class="doc-card-top">
        <span class="opt-icon">${d.icon}</span>
        <span class="doc-card-badge">${badgeText}</span>
      </div>
      <h4>${renderBilingualText(d.title, l1, l2)}</h4>
      <p>${renderBilingualText(d.subtitle, l1, l2, true)}</p>
    `;

    card.addEventListener('click', () => {
      openReader(d.id);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openReader(d.id);
      }
    });

    container.appendChild(card);
  });
}

