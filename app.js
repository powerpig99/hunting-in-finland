/**
 * Hunting in Finland — Interactive Application Engine
 * Contains Pathway Wizard, 25-Question Exam Simulator, Species Database,
 * Budget Calculator, and Field Checklist Logic.
 */

document.addEventListener('DOMContentLoaded', () => {
  initWizard();
  initQuiz();
  initSpeciesExplorer();
  initCalculator();
  initChecklists();
});

/* ==========================================================================
   1. Interactive Pathway Finder Wizard
   ========================================================================== */

const wizardState = {
  residency: 'resident', // 'resident' | 'visitor'
  weapon: 'gun',        // 'gun' | 'bow' | 'mentor'
  target: 'small',      // 'small' | 'big' | 'all'
  budget: 'moderate'    // 'low' | 'moderate' | 'full'
};

function initWizard() {
  const options = document.querySelectorAll('.wizard-options .option-box');
  options.forEach(opt => {
    opt.addEventListener('click', () => {
      const step = opt.getAttribute('data-step');
      const val = opt.getAttribute('data-value');
      wizardState[step] = val;

      // Update UI selection for this step group
      document.querySelectorAll(`.wizard-options .option-box[data-step="${step}"]`).forEach(sibling => {
        sibling.classList.remove('selected');
      });
      opt.classList.add('selected');

      renderWizardPlan();
    });
  });

  renderWizardPlan();
}

function renderWizardPlan() {
  const container = document.getElementById('wizard-plan-output');
  if (!container) return;

  const steps = [];

  // Step 1: Orientation & Culture
  steps.push({
    title: "Step 1: Low-Risk Orientation & Range Visit (Weeks 1–3)",
    desc: "Visit a local shooting club for clay shooting under supervised shooting (Valvottu ammunta, ~25-40 €). No license needed! Connect with a local hunting club to join an autumn moose or deer hunt as an unarmed beater (Ajomies) to experience the culture.",
    doc: "docs/06_zero_experience_roadmap.md"
  });

  // Step 2: Certification / Exam
  if (wizardState.residency === 'resident') {
    steps.push({
      title: "Step 2: Hunter's Exam & Hunting Card (Month 1–2)",
      desc: "Attend an RHY weekend preparatory course (~40 €) and sit the 60-question Hunter's Exam (Metsästäjätutkinto, 20 €) in English or Finnish. Pay the annual 43 € Game Management Fee to activate your Hunting Card on the Oma riista mobile app.",
      doc: "docs/01_legal_framework_and_exam.md"
    });
  } else {
    steps.push({
      title: "Step 2: Foreign License Recognition (Pre-trip)",
      desc: "Submit your home-country hunting license to the local Game Management Association (RHY) coordinator to receive a temporary 1-season Finnish Hunting Card (43 €) without taking the written examination.",
      doc: "docs/01_legal_framework_and_exam.md"
    });
  }

  // Step 3: Weapon Pathway
  if (wizardState.weapon === 'bow') {
    steps.push({
      title: "Step 3: Bow Setup & 3D Archery Practice (Month 2–3)",
      desc: "Acquire a compound hunting bow with at least 180 N (40.5 lbs) draw weight and cutting broadheads (≥ 22 mm). No police permit or gun safe required! If hunting roe deer or white-tailed deer, pass the 18-meter Bow Shooting Test (Jousiampumakoe, 20 €).",
      doc: "docs/03_bow_hunting_alternative.md"
    });
  } else if (wizardState.weapon === 'gun') {
    steps.push({
      title: "Step 3: Police Firearm Permit & Gun Safe (Month 2–4)",
      desc: "Install an approved lockable gun storage / EN 14450 safe. Apply for an Acquisition Permit (Hankkimislupa, ~106 €) via Poliisi.fi with your Hunting Card. Buy a 12-gauge shotgun (for birds/hare) or .308 rifle (for deer/moose), and present for police inspection within 30 days.",
      doc: "docs/02_firearms_and_licensing.md"
    });
    if (wizardState.target === 'big' || wizardState.target === 'all') {
      steps.push({
        title: "Step 3b: Big Game Rifle Shooting Test (Ampumakoe)",
        desc: "Pass the mandatory 4-shot moose/deer rifle test at 75 meters (all 4 hits in 23 cm ring within 90 sec, 20 € fee, valid 3 years).",
        doc: "docs/05_game_species_and_seasons.md"
      });
    }
  } else {
    // Mentor / Guided
    steps.push({
      title: "Step 3: Supervised Hunting or Parallel Permit",
      desc: "Hunt under the direct physical supervision (arm's reach) of an experienced licensed guide or mentor using their firearm. Alternatively, apply for a Parallel Permit (Rinnakkaislupa, ~40 €) to share their weapon legally.",
      doc: "docs/02_firearms_and_licensing.md"
    });
  }

  // Step 4: Land Access
  if (wizardState.target === 'small') {
    steps.push({
      title: "Step 4: State Forest Small Game Permits (Eräluvat.fi)",
      desc: "Purchase day permits (10 €–25 €/day) for 9+ million hectares of state-owned forests in Kainuu, Lapland, or coastal waters. Target capercaillie, black grouse, hares, or waterfowl.",
      doc: "docs/04_land_access_and_permits.md"
    });
  } else {
    steps.push({
      title: "Step 4: Hunting Club (Metsästysseura) or Guided Deer Stand",
      desc: "Join a local hunting club in Southern/Western Finland as a small-game or deer member, or book a guided high-seat ambush hunt (Kyttäysjahti) over winter feeding stations.",
      doc: "docs/04_land_access_and_permits.md"
    });
  }

  // Render HTML
  let html = `
    <div class="wizard-summary">
      <div style="margin-bottom: 1.25rem;">
        <span class="badge-fi" style="background-color: var(--color-pine-700); color: white; padding: 0.3rem 0.7rem; border-radius: 4px; font-weight: 700; font-size: 0.85rem;">
          TAILORED ROADMAP FOR YOU
        </span>
      </div>
      <ul class="roadmap-steps">
  `;

  steps.forEach((s, idx) => {
    html += `
      <li class="roadmap-step-item">
        <div class="step-badge">${idx + 1}</div>
        <div class="step-details">
          <h4>${s.title}</h4>
          <p>${s.desc}</p>
          <div style="margin-top: 0.5rem;">
            <a href="${s.doc}" target="_blank" style="color: var(--color-orange-500); font-size: 0.8rem; font-weight: 600; text-decoration: underline;">Read in-depth chapter →</a>
          </div>
        </div>
      </li>
    `;
  });

  html += `</ul></div>`;
  container.innerHTML = html;
}

/* ==========================================================================
   2. Hunter's Exam Practice Quiz (Simulated Metsästäjätutkinto)
   ========================================================================== */

const quizQuestions = [
  {
    category: "Species Identification",
    question: "You observe a large, dark forest grouse in a pine ridge with a heavy bearded chin, red eyebrow comb, and a rounded tail. Which bird is this?",
    options: [
      "Male Western Capercaillie (Metso)",
      "Male Black Grouse (Teeri)",
      "Hazel Grouse (Pyy)",
      "Willow Grouse (Riekko)"
    ],
    answer: 0,
    explanation: "This is a male capercaillie (metso). The male black grouse has a distinctive lyre-shaped tail, while hazel and willow grouse are much smaller birds."
  },
  {
    category: "Hunting Law",
    question: "Under Finnish hunting law, what is the minimum legal distance required when discharging a firearm near an inhabited building without the owner's explicit permission?",
    options: [
      "50 meters",
      "100 meters",
      "150 meters",
      "300 meters"
    ],
    answer: 2,
    explanation: "Section 25 of the Finnish Hunting Act explicitly forbids shooting within 150 meters of an inhabited residential or school building without the owner's written consent."
  },
  {
    category: "Weapon & Safety",
    question: "During a driven club hunt for moose or white-tailed deer, what proportion of your outer jacket/vest and headwear must legally be blaze orange or blaze red?",
    options: [
      "At least 1/3 (one-third)",
      "At least 1/2 (half)",
      "At least 2/3 (two-thirds)",
      "100% solid orange with no patterns allowed"
    ],
    answer: 2,
    explanation: "Section 22 of the Hunting Decree mandates that at least two-thirds (2/3) of the visible surface of the jacket/vest and headwear must be blaze orange or blaze red. Camo orange is legal if it meets the 2/3 rule."
  },
  {
    category: "Species Identification",
    question: "In January in Southern Finland, you see a large hare (approx. 5 kg) that remains grayish-brown with reddish legs in the snow along an agricultural field edge. What is it?",
    options: [
      "Mountain Hare (Metsäjänis)",
      "European Brown Hare (Rusakko)",
      "Wild European Rabbit (Kani)",
      "Snowshoe Hare"
    ],
    answer: 1,
    explanation: "This is the European Brown Hare (rusakko). Finland's native mountain hare (metsäjänis) turns pure white in winter with only black ear tips."
  },
  {
    category: "Ammunition & Environment",
    question: "Under EU REACH regulations in force in Finland, where is the use of lead-shot ammunition strictly prohibited?",
    options: [
      "Only in state national parks",
      "In and within 100 meters of any wetland, lake, pond, or marsh",
      "Only when shooting moose",
      "Lead shot is banned exclusively north of the Arctic Circle"
    ],
    answer: 1,
    explanation: "Under EU REACH legislation, discharging or carrying lead shot within 100 meters of any wetland or open water body is strictly illegal. Non-toxic alternatives (steel, bismuth, tungsten) must be used."
  },
  {
    category: "Hunting Law",
    question: "At what exact time and date does the Finnish waterfowl (vesilinnut) hunting season open each year?",
    options: [
      "August 1st at midnight (00:00)",
      "August 10th at 12:00 noon",
      "August 20th at 12:00 NOON",
      "September 1st at sunrise"
    ],
    answer: 2,
    explanation: "The opening of duck season is a sacred Finnish tradition that starts precisely on August 20th at 12:00 NOON."
  },
  {
    category: "Bow Hunting",
    question: "Which of the following game species CANNOT legally be hunted with a bow in Finland?",
    options: [
      "White-tailed deer (Valkohäntäpeura)",
      "Roe deer (Metsäkauris)",
      "European Moose (Hirvi)",
      "Wild Boar (Villisika)"
    ],
    answer: 2,
    explanation: "European Moose (hirvi) is legally restricted to rifles. Deer species and wild boar can be hunted with bows provided the hunter passes the bow test."
  },
  {
    category: "Bow Hunting",
    question: "What is the minimum legal draw weight required for a hunting bow in Finland?",
    options: [
      "120 Newtons (~27 lbs)",
      "180 Newtons (~40.5 lbs)",
      "250 Newtons (~56 lbs)",
      "There is no minimum draw weight"
    ],
    answer: 1,
    explanation: "Section 20 of the Hunting Decree sets the minimum draw weight at 180 Newtons (approx. 40.5 lbs) for all bow hunting in Finland."
  },
  {
    category: "Weapon & Safety",
    question: "How must firearms be legally transported inside a private motor vehicle while traveling to a hunting site?",
    options: [
      "Loaded on the passenger seat with the safety catch engaged",
      "Unloaded in the trunk or backseat, but out of a case",
      "Completely unloaded and enclosed in a closed gun case or scabbard",
      "Disassembled into three separate pieces"
    ],
    answer: 2,
    explanation: "Firearms must always be completely unloaded and enclosed in a protective scabbard or gun case when transported in any motor vehicle, ATV, or boat."
  },
  {
    category: "Species Identification",
    question: "You see a medium-sized carnivore with a black facial mask resembling a raccoon, a brownish-grey fur coat, and short legs. It moves slowly near a coastal reed bed. What is it?",
    options: [
      "European Badger (Mäyrä)",
      "Raccoon Dog (Supikoira)",
      "Pine Marten (Näätä)",
      "Wolverine (Ahma)"
    ],
    answer: 1,
    explanation: "This is the invasive Raccoon Dog (supikoira). The European badger has distinctive bold white-and-black longitudinal stripes down its forehead and snout."
  },
  {
    category: "Game Ecology & Care",
    question: "Why must meat harvested from wild boar and brown bear always be laboratory-tested before human consumption?",
    options: [
      "To check for radioactive cesium levels",
      "To test for the microscopic parasite Trichinella spiralis",
      "To verify wild origin for tax authorities",
      "To measure omega-3 fatty acids"
    ],
    answer: 1,
    explanation: "Wild boars and bears can carry Trichinella spiralis larvae, which causes trichinosis in humans. Testing in an accredited laboratory is legally and medically essential."
  },
  {
    category: "Hunting Administration",
    question: "What essential protection is automatically included when you pay your annual Finnish Game Management Fee (Riistanhoitomaksu)?",
    options: [
      "Free unlimited ammunition at state shooting ranges",
      "Statutory Hunter's Third-Party Liability Insurance (Metsästäjävakuutus)",
      "Free fuel for all hunting trips",
      "Free state land hunting permits everywhere in Finland"
    ],
    answer: 1,
    explanation: "Paying the 43 € annual game fee provides your active Hunting Card and statutory hunter's liability insurance covering accident liability and personal injury."
  },
  {
    category: "Firearms & Law",
    question: "Under Finnish law, can a person who does NOT own a firearm permit practice shooting at a range or shoot on a hunt?",
    options: [
      "No, it is strictly illegal under any circumstances",
      "Yes, provided they are under the immediate personal supervision (at arm's reach) of a licensed adult permit holder (Valvottu ammunta)",
      "Yes, but only with air rifles",
      "Only if they have a signed letter from the President"
    ],
    answer: 1,
    explanation: "Section 88 of the Firearms Act allows supervised shooting (valvottu ammunta) where an unpermitted person may shoot under immediate, arm's-reach supervision of a licensed gun owner."
  },
  {
    category: "Hunting Law",
    question: "Does Everyman's Right (Jokamiehenoikeus) permit a person to hunt or set traps on private land?",
    options: [
      "Yes, anyone can hunt anywhere on uncultivated land",
      "Yes, but only for hares and ducks",
      "No, hunting rights belong exclusively to the landowner; Everyman's Right strictly excludes hunting and fishing with tackle",
      "Only during national holidays"
    ],
    answer: 2,
    explanation: "Everyman's Right allows foraging and hiking, but NEVER hunting. Hunting rights belong solely to the landowner under Section 6 of the Hunting Act."
  },
  {
    category: "Rifle Shooting Test",
    question: "What is the shooting distance and target ring diameter for the mandatory Finnish Big Game Rifle Shooting Test (Hirvikoe)?",
    options: [
      "50 meters distance, 15 cm ring",
      "75 meters distance, 23 cm ring",
      "100 meters distance, 30 cm ring",
      "150 meters distance, 40 cm ring"
    ],
    answer: 1,
    explanation: "The rifle test (hirvikoe) is shot at 75 meters into a stationary moose target with a 23 cm diameter hit zone (4 shots within 90 seconds)."
  }
];

let quizCurrentIndex = 0;
let quizScore = 0;
let quizAnswered = false;

function initQuiz() {
  renderQuizQuestion();

  document.getElementById('quiz-next-btn')?.addEventListener('click', () => {
    if (quizCurrentIndex < quizQuestions.length - 1) {
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
  const q = quizQuestions[quizCurrentIndex];
  if (!q) return;

  // Header & progress
  const progressPercent = Math.round(((quizCurrentIndex + 1) / quizQuestions.length) * 100);
  document.getElementById('quiz-progress-fill').style.width = `${progressPercent}%`;
  document.getElementById('quiz-current-num').textContent = quizCurrentIndex + 1;
  document.getElementById('quiz-total-num').textContent = quizQuestions.length;
  document.getElementById('quiz-category-tag').textContent = q.category;
  document.getElementById('quiz-score-display').textContent = `Score: ${quizScore}/${quizCurrentIndex}`;

  // Question text
  document.getElementById('quiz-question-text').textContent = q.question;

  // Answers list
  const list = document.getElementById('quiz-answers-list');
  list.innerHTML = '';

  q.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-answer-btn';
    btn.innerHTML = `<span style="font-weight:700; color:var(--color-slate-400); width:20px;">${['A', 'B', 'C', 'D'][idx]}.</span> <span>${optText}</span>`;
    btn.addEventListener('click', () => handleQuizAnswer(idx, btn));
    list.appendChild(btn);
  });

  // Hide feedback & next button
  document.getElementById('quiz-feedback-box').style.display = 'none';
  document.getElementById('quiz-next-btn').style.display = 'none';
}

function handleQuizAnswer(selectedIndex, clickedBtn) {
  if (quizAnswered) return;
  quizAnswered = true;

  const q = quizQuestions[quizCurrentIndex];
  const allBtns = document.querySelectorAll('.quiz-answer-btn');
  allBtns.forEach(btn => btn.disabled = true);

  const feedbackBox = document.getElementById('quiz-feedback-box');
  feedbackBox.style.display = 'block';

  if (selectedIndex === q.answer) {
    quizScore++;
    clickedBtn.classList.add('correct');
    feedbackBox.className = 'quiz-feedback-box';
    feedbackBox.innerHTML = `<strong>✅ Correct!</strong> ${q.explanation}`;
  } else {
    clickedBtn.classList.add('incorrect');
    allBtns[q.answer].classList.add('correct');
    feedbackBox.className = 'quiz-feedback-box error';
    feedbackBox.innerHTML = `<strong>❌ Incorrect.</strong> Correct answer: <strong>${q.options[q.answer]}</strong>.<br>${q.explanation}`;
  }

  document.getElementById('quiz-score-display').textContent = `Score: ${quizScore}/${quizCurrentIndex + 1}`;
  document.getElementById('quiz-next-btn').style.display = 'inline-flex';
}

function showQuizResults() {
  document.getElementById('quiz-active-card').style.display = 'none';
  const resCard = document.getElementById('quiz-results-card');
  resCard.style.display = 'block';

  const percent = Math.round((quizScore / quizQuestions.length) * 100);
  const passed = percent >= 80;

  document.getElementById('quiz-final-score').textContent = `${quizScore} / ${quizQuestions.length} (${percent}%)`;
  const statusEl = document.getElementById('quiz-pass-status');
  if (passed) {
    statusEl.textContent = "🎉 PASSED! You are well-prepared for the Finnish Hunter's Exam!";
    statusEl.style.color = "var(--color-success)";
  } else {
    statusEl.textContent = "⚠️ NOT YET PASSING: In the real exam, max 8 errors are permitted. Review the study docs and try again!";
    statusEl.style.color = "var(--color-danger)";
  }
}

/* ==========================================================================
   3. Game Species & Seasons Explorer
   ========================================================================== */

const speciesData = [
  {
    id: "hirvi",
    nameFi: "Hirvi",
    nameEn: "European Moose",
    latin: "Alces alces",
    category: "big",
    season: "Oct – mid-Jan (opens Sept in Lapland)",
    weapons: "Rifle (E100 ≥ 2000 J or lead-free ≥ 1700 J)",
    permit: "Quota license (Hirvilupa) through hunting club (min 1,000 ha contiguous land)",
    tips: "Finland's iconic big game. Hunted primarily with loose-running Scandinavian hounds (Jämtland hound, Norwegian elkhound) or driven line of standers."
  },
  {
    id: "peura",
    nameFi: "Valkohäntäpeura",
    nameEn: "White-tailed Deer",
    latin: "Odocoileus virginianus",
    category: "big",
    season: "Sept 1 – Feb 15",
    weapons: "Rifle (min 6g / E100 ≥ 2000 J), Shotgun slug, or Compound Bow (passed test)",
    permit: "Quota license through hunting club",
    tips: "Abundant in Southwest Finland (>100k deer). Superb venison. Ideal for beginners sitting in heated high stands (kyttäysjahti) over apple/grain feed."
  },
  {
    id: "kauris",
    nameFi: "Metsäkauris",
    nameEn: "Roe Deer",
    latin: "Capreolus capreolus",
    category: "big",
    season: "May 16 – June 15 (Bucks) & Sept 1 – Feb 15 (General)",
    weapons: "Rifle, Shotgun buckshot, or Compound Bow (passed test)",
    permit: "No license quota needed from Wildlife Agency; requires landowner permission & Oma riista report",
    tips: "Small, agile deer. Calling bucks in spring with a buttolo call is an unforgettable experience. Delicacy meat."
  },
  {
    id: "metso",
    nameFi: "Metso",
    nameEn: "Western Capercaillie",
    latin: "Tetrao urogallus",
    category: "grouse",
    season: "Sept 10 – Nov/Dec (Annually set)",
    weapons: "Shotgun (steel/lead-free 3.5–4.0mm) or small caliber rifle (.222, .223, 6.5mm) or Bow",
    permit: "Metsähallitus state permit (Kanalintulupa) or club land",
    tips: "Giant of the boreal pine forest. Stalked slowly along ridges or hunted with a Finnish Spitz (Suomenpystykorva) barking at tree canopies."
  },
  {
    id: "teeri",
    nameFi: "Teeri",
    nameEn: "Black Grouse",
    latin: "Lyrurus tetrix",
    category: "grouse",
    season: "Sept 10 – Nov/Dec (Annually set)",
    weapons: "Shotgun, Rifle, or Bow",
    permit: "Metsähallitus state permit or club land",
    tips: "Hunted on open peat bogs at dawn using decoys mounted on tall birch poles (kuvapyynti), or walking through birch edge forests."
  },
  {
    id: "pyy",
    nameFi: "Pyy",
    nameEn: "Hazel Grouse",
    latin: "Tetrastes bonasia",
    category: "grouse",
    season: "Sept 10 – Dec 31",
    weapons: "Shotgun or small rifle (.22 LR / .17 HMR)",
    permit: "Metsähallitus state permit or club land",
    tips: "Inhabits thick spruce stands with alders. Hunted by imitating its high-pitched territorial whistle with a metal pipe (pyypilli). Very approachable for beginners!"
  },
  {
    id: "sinisorsa",
    nameFi: "Sinisorsa",
    nameEn: "Mallard",
    latin: "Anas platyrhynchos",
    category: "waterfowl",
    season: "Aug 20 (12:00 noon) – Dec 31",
    weapons: "Shotgun (NON-LEAD ONLY: steel, bismuth, copper, tungsten)",
    permit: "Metsähallitus waterfowl permit or private waters",
    tips: "The staple of duck hunting. Decoy spreads and retrieving retrievers on lake bays and reed marshes. Strict non-lead shot ban enforced!"
  },
  {
    id: "tavi",
    nameFi: "Tavi",
    nameEn: "Eurasian Teal",
    latin: "Anas crecca",
    category: "waterfowl",
    season: "Aug 20 (12:00 noon) – Dec 31",
    weapons: "Shotgun (non-lead shot mandatory)",
    permit: "Waterfowl permit",
    tips: "Smallest European duck. Extremely fast, acrobatic fliers. Excellent tasting meat."
  },
  {
    id: "kyyhky",
    nameFi: "Sepelkyyhky",
    nameEn: "Common Wood Pigeon",
    latin: "Columba palumbus",
    category: "small",
    season: "Aug 10 – Oct 31",
    weapons: "Shotgun",
    permit: "Field land permission or state permit",
    tips: "Fast decoying action over freshly harvested pea and grain fields in August. Rich, lean, tender dark breast fillets."
  },
  {
    id: "metsajanis",
    nameFi: "Metsäjänis",
    nameEn: "Mountain Hare",
    latin: "Lepus timidus",
    category: "small",
    season: "Sept 1 – Feb 28",
    weapons: "Shotgun, small rifle, or bow",
    permit: "Small game permit",
    tips: "Turns completely white in winter. Hunted with traditional Finnish scent hounds (Suomenajokoira) or tracking fresh tracks on snowshoes/skis."
  },
  {
    id: "rusakko",
    nameFi: "Rusakko",
    nameEn: "European Brown Hare",
    latin: "Lepus europaeus",
    category: "small",
    season: "Sept 1 – Feb 28 (often March)",
    weapons: "Shotgun, rifle, or bow",
    permit: "Land permission",
    tips: "Large hare found in farm fields and southern suburban fringes. Does not turn white in winter."
  },
  {
    id: "supikoira",
    nameFi: "Supikoira",
    nameEn: "Raccoon Dog",
    latin: "Nyctereutes procyonoides",
    category: "invasive",
    season: "Year-round (Invasive Alien Species)",
    weapons: "Shotgun, small rifle, bow, or live-catch trap",
    permit: "Small predator permit (very cheap, ~10 €/yr) or land access",
    tips: "Invasive predator devastating ground-nesting waterbirds. Vital conservation service to eliminate them from archipelagos and wetlands."
  },
  {
    id: "minkki",
    nameFi: "Minkki",
    nameEn: "American Mink",
    latin: "Neovison vison",
    category: "invasive",
    season: "Year-round (Invasive Alien Species)",
    weapons: "Small caliber, kill traps, or hunting dogs",
    permit: "Small predator permit",
    tips: "Invasive predator causing severe harm to coastal bird colonies and fish stocks. Trapping is very common."
  },
  {
    id: "majava",
    nameFi: "Kanadanmajava",
    nameEn: "Canadian Beaver",
    latin: "Castor canadensis",
    category: "small",
    season: "Aug 20 – April 30",
    weapons: "Rifle (bullet ≥ 3.2g / E100 ≥ 800 J) or Bow (arrow tethered with line)",
    permit: "Beaver permit (Majavalupa)",
    tips: "Challenging spring hunt along thawed forest creeks. Arrow must be tied to bow with line to retrieve from water."
  }
];

function initSpeciesExplorer() {
  const container = document.getElementById('species-cards-container');
  const searchInput = document.getElementById('species-search-input');
  const filterChips = document.querySelectorAll('.filter-chip');

  let activeCategory = 'all';
  let searchTerm = '';

  function render() {
    if (!container) return;
    container.innerHTML = '';

    const filtered = speciesData.filter(item => {
      const matchesCat = (activeCategory === 'all') || (item.category === activeCategory);
      const matchesSearch = item.nameFi.toLowerCase().includes(searchTerm) ||
                            item.nameEn.toLowerCase().includes(searchTerm) ||
                            item.latin.toLowerCase().includes(searchTerm) ||
                            item.tips.toLowerCase().includes(searchTerm);
      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 2rem; color: var(--color-slate-500);">No game species match your search.</div>`;
      return;
    }

    filtered.forEach(s => {
      const card = document.createElement('div');
      card.className = 'species-card';
      card.innerHTML = `
        <div class="species-card-header">
          <div class="species-card-tag">${getCategoryName(s.category)}</div>
          <h3>${s.nameEn} <span style="font-weight:400; color:var(--color-slate-500); font-size:1rem;">(${s.nameFi})</span></h3>
          <div class="latin-name">${s.latin}</div>
        </div>
        <div class="species-card-body">
          <div class="info-row">
            <span class="info-label">📅 Season:</span>
            <span class="info-value">${s.season}</span>
          </div>
          <div class="info-row">
            <span class="info-label">🔫 Weapons:</span>
            <span class="info-value">${s.weapons}</span>
          </div>
          <div class="info-row">
            <span class="info-label">🎫 Permit:</span>
            <span class="info-value">${s.permit}</span>
          </div>
          <div class="info-row">
            <span class="info-label">🌲 Field Tip:</span>
            <span class="info-value">${s.tips}</span>
          </div>
        </div>
        <div class="species-card-footer">
          Legal Game in Finland
        </div>
      `;
      container.appendChild(card);
    });
  }

  function getCategoryName(cat) {
    switch (cat) {
      case 'big': return 'Big Game / Cervids';
      case 'grouse': return 'Forest Grouse';
      case 'waterfowl': return 'Waterfowl';
      case 'small': return 'Small Game';
      case 'invasive': return 'Invasive Predator (Conservation)';
      default: return 'Game Species';
    }
  }

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.getAttribute('data-cat');
      render();
    });
  });

  searchInput?.addEventListener('input', (e) => {
    searchTerm = e.target.value.toLowerCase().trim();
    render();
  });

  render();
}

/* ==========================================================================
   4. Budget & Startup Cost Calculator
   ========================================================================== */

function initCalculator() {
  const checkboxes = document.querySelectorAll('.calc-toggle');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', updateCalculatorTotals);
  });
  updateCalculatorTotals();
}

function updateCalculatorTotals() {
  // Gun Route Calculation
  let gunTotal = 20 + 43; // Exam + Game fee
  if (document.getElementById('cb-gun-safe')?.checked) gunTotal += 350;
  if (document.getElementById('cb-gun-permit')?.checked) gunTotal += 106;
  if (document.getElementById('cb-gun-weapon')?.checked) gunTotal += 650;
  if (document.getElementById('cb-gun-ammo')?.checked) gunTotal += 80;
  if (document.getElementById('cb-gun-club')?.checked) gunTotal += 200;
  const gunTotalEl = document.getElementById('calc-gun-total');
  if (gunTotalEl) gunTotalEl.textContent = `${gunTotal} €`;

  // Bow Route Calculation
  let bowTotal = 20 + 43; // Exam + Game fee
  if (document.getElementById('cb-bow-pkg')?.checked) bowTotal += 490;
  if (document.getElementById('cb-bow-arrows')?.checked) bowTotal += 90;
  if (document.getElementById('cb-bow-target')?.checked) bowTotal += 70;
  if (document.getElementById('cb-bow-heads')?.checked) bowTotal += 50;
  if (document.getElementById('cb-bow-test')?.checked) bowTotal += 20;
  const bowTotalEl = document.getElementById('calc-bow-total');
  if (bowTotalEl) bowTotalEl.textContent = `${bowTotal} €`;

  // Guided / Supervised Route Calculation
  let guidedTotal = 20 + 43; // Exam + Game fee
  if (document.getElementById('cb-guide-clay')?.checked) guidedTotal += 35;
  if (document.getElementById('cb-guide-hunt')?.checked) guidedTotal += 220;
  if (document.getElementById('cb-guide-gear')?.checked) guidedTotal += 80;
  const guidedTotalEl = document.getElementById('calc-guided-total');
  if (guidedTotalEl) guidedTotalEl.textContent = `${guidedTotal} €`;
}

/* ==========================================================================
   5. Interactive Field Checklists
   ========================================================================== */

function initChecklists() {
  const items = document.querySelectorAll('.check-item input[type="checkbox"]');
  items.forEach(box => {
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
