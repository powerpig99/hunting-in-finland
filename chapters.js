/**
 * Full Trilingual Handbook Data for In-App Document Reader
 * Supports English (en), Chinese (zh), and Finnish (fi)
 * Powers the In-App Guide Reader without needing raw markdown files.
 */

const CHAPTERS_DATA = [
  {
    id: "ch1",
    num: "01",
    icon: "🏛️",
    slug: "legal_framework_and_exam",
    title: {
      en: "01. Legal Framework & The Hunter's Exam (Metsästäjätutkinto)",
      zh: "01. 法律框架与芬兰猎人资格考试（Metsästäjätutkinto）",
      fi: "01. Lainsäädäntö ja metsästäjätutkinto"
    },
    subtitle: {
      en: "Suomen riistakeskus, local RHYs, 60-question exam format in English, Oma riista portal, and domestic resident hunting rights.",
      zh: "芬兰国家野生动物署、基层猎会架构、全真60题英文考卷、Oma riista注册及本地居民完全国民待遇。",
      fi: "Suomen riistakeskus, riistanhoitoyhdistykset, 60 kysymyksen tutkinto, Oma riista ja asukkaan metsästysoikeudet."
    },
    content: {
      en: `
        <h2>🏛️ The Institutional Hierarchy of Finnish Hunting</h2>
        <p>In Finland, hunting is governed under the Ministry of Agriculture and Forestry (<em>Maa- ja metsätalousministeriö</em>, MMM) and executed by two key operational pillars:</p>
        <ul>
          <li><strong>Suomen riistakeskus (Finnish Wildlife Agency)</strong>: The central independent statutory authority. It oversees game policy, census research, damage prevention, and the national digital registry <strong>Oma riista</strong>.</li>
          <li><strong>Riistanhoitoyhdistys (RHY - Game Management Association)</strong>: There are approx. 280 local RHYs across Finland. They organize voluntary preparatory courses, administer the official Hunter's Examination, host shooting tests (<em>ampumakoe</em>), and provide grassroots community support.</li>
          <li><strong>Suomen Metsästäjäliitto (Finnish Hunters' Association)</strong>: The voluntary non-governmental association with over 150,000 members, providing training, legal defense, and youth events.</li>
        </ul>

        <h2>📝 The Hunter's Examination (Metsästäjätutkinto)</h2>
        <p>Under Section 17 of the Finnish Hunting Act, anyone wishing to hunt in Finland must pass the 60-question qualification exam:</p>
        <table>
          <thead>
            <tr><th>Exam Component</th><th>Structure</th><th>Allowed Errors</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>15 Species ID Questions</strong></td><td>Identifying photos/illustrations of mammals, waterfowl, protected species, and predators</td><td>Max 4 errors permitted</td></tr>
            <tr><td><strong>45 Theory Questions</strong></td><td>Hunting law, seasons, weapon safety, ecology, dogs, game handling</td><td>Max 4 errors permitted</td></tr>
            <tr><td><strong>Overall Passing Rule</strong></td><td>60 questions total</td><td><strong>Max 8 errors total</strong> (and no more than 4 in either section)</td></tr>
          </tbody>
        </table>

        <div class="reader-alert note">
          <strong>Taking the Exam in English:</strong> You can officially sit the Hunter's Exam in <strong>English</strong>! While study books (<em>Metsästäjän opas</em>) are published in Finnish and Swedish, English exam question sheets are available at any RHY session upon request.
        </div>

        <h2>🇫🇮 Domestic Hunting Rights for Residents in Finland</h2>
        <p>If you reside in Finland (as a permanent resident, long-term resident, or on track to citizenship):</p>
        <ul>
          <li><strong>Equal Domestic Rights</strong>: You are treated legally as a domestic hunter. You do <strong>not</strong> need foreign tourist visitor permits.</li>
          <li><strong>Personal ID (Henkilötunnus)</strong>: Your hunter registry number and RHY membership are linked directly to your Finnish identity code and home municipality.</li>
          <li><strong>Suomi.fi Authentication</strong>: Log into <strong>Oma riista</strong> with your Finnish bank ID to access your digital hunting card and log harvests.</li>
          <li><strong>Annual Fee (43 €)</strong>: Paying the annual Game Management Fee (<em>riistanhoitomaksu</em>) provides your official Hunting Card and automatically includes statutory third-party hunter's liability insurance.</li>
        </ul>
      `,
      zh: `
        <h2>🏛️ 芬兰狩猎国家监管与管理架构</h2>
        <p>在芬兰，狩猎绝非漫无目的的打猎娱乐，而是受芬兰农林部（MMM）管辖的高度严谨的生态管理活动。两大核心机构为您服务：</p>
        <ul>
          <li><strong>Suomen riistakeskus（芬兰国家野生动物署）</strong>：独立的国家级法定执行机构，主管国家级野生动物监测、配额制定、大动物许可证审批以及国家数字狩猎系统 <strong>Oma riista</strong>。</li>
          <li><strong>Riistanhoitoyhdistys（RHY - 基层猎业协会）</strong>：全国设立约280个基层RHY。负责举办新手考前培训、主持国家猎人考试、组织射击考核（Ampumakoe）及处理本地野生动物保护事务。</li>
          <li><strong>Suomen Metsästäjäliitto（芬兰猎人协会）</strong>：拥有15万会员的非政府公益联合会，负责组织靶场射击培训、青年夏令营与出版《Jahti》杂志。</li>
        </ul>

        <h2>📝 芬兰国家猎人资格考试（Metsästäjätutkinto）</h2>
        <p>依据芬兰《狩猎法》第17条，任何在芬兰境内独立实施狩猎的人员均必须通过由RHY主办的统一笔试考核：</p>
        <table>
          <thead>
            <tr><th>考试构成部分</th><th>考题内容</th><th>允许最高错误数</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>15道 物种鉴别题</strong></td><td>看图辨识水鸭、森林松鸡、受保护猛禽、本地野兔及外来入侵兽类</td><td>最多允许错 4 题</td></tr>
            <tr><td><strong>45道 理论法规题</strong></td><td>狩猎法规、安全射程、150米安全红线、猎枪安全保管、野味开膛卫生</td><td>最多允许错 4 题</td></tr>
            <tr><td><strong>总计及格红线</strong></td><td>共计 60 道单项选择题</td><td><strong>总错误数不得超过 8 题</strong>（两部分均不能超限）</td></tr>
          </tbody>
        </table>

        <div class="reader-alert note">
          <strong>可直接申请英文考卷：</strong> 官方考试明确提供 <strong>英文考卷</strong>！考生只需在抵达考场时向前台考官说明即可领取全英文纸质考卷。考试费为每次 20 欧元。
        </div>

        <h2>🇫🇮 芬兰本土狩猎权益与常住居民身份说明</h2>
        <p>只要您在芬兰定居生活（持有芬兰个人税号与常住居留）：</p>
        <ul>
          <li><strong>完全国民待遇</strong>：享有与芬兰本土猎人完全同等的法定权益，彻底告别游客短期通行证（Tourism Pass）。</li>
          <li><strong>绑定芬兰税号（Henkilötunnus）</strong>：您的猎人编号与所属当地RHY完全挂钩您的常住户籍地（Kotikunta）。</li>
          <li><strong>银行电子认证（Suomi.fi）</strong>：通过银行APP直接登录 <strong>Oma riista</strong>，激活电子猎人卡与上报捕获战果。</li>
          <li><strong>每年仅需43欧元</strong>：缴纳法定义务狩猎管理费（Riistanhoitomaksu）后，自动获得覆盖全芬兰的持证猎人第三方人身财产责任险。</li>
        </ul>
      `,
      fi: `
        <h2>🏛️ Suomen riistahallinnon organisaatio</h2>
        <p>Metsästystä ohjaa maa- ja metsätalousministeriö (MMM), ja käytännön toiminnasta vastaavat:</p>
        <ul>
          <li><strong>Suomen riistakeskus</strong>: Itsenäinen julkisoikeudellinen laitos, joka edistää kestävää riistataloutta, myöntää pyyntiluvat ja ylläpitää <strong>Oma riista</strong> -palvelua.</li>
          <li><strong>Riistanhoitoyhdistykset (RHY)</strong>: Noin 280 paikallista yhdistystä, jotka järjestävät valmentavaa koulutusta, vastaanottavat metsästäjätutkintoja ja ampumakokeita.</li>
          <li><strong>Suomen Metsästäjäliitto</strong>: Metsästäjien vapaaehtoinen kansalaisjärjestö (n. 150 000 jäsentä).</li>
        </ul>

        <h2>📝 Metsästäjätutkinto</h2>
        <p>Metsästyslain 17 §:n mukaan jokaisen metsästäjän on suoritettava metsästäjätutkinto:</p>
        <table>
          <thead>
            <tr><th>Osio</th><th>Sisältö</th><th>Sallitut virheet</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>15 lajintunnistuskysymystä</strong></td><td>Nisäkkäiden ja lintujen tunnistus valokuvista (myös rauhoitetut ja vieraslajit)</td><td>Enintään 4 virhettä</td></tr>
            <tr><td><strong>45 teoriakysymystä</strong></td><td>Lainsäädäntö, turvallisuus, riistanhoito, koirat ja saaliin käsittely</td><td>Enintään 4 virhettä</td></tr>
            <tr><td><strong>Läpipääsyvaatimus</strong></td><td>Yhteensä 60 kysymystä</td><td><strong>Enintään 8 virhettä</strong> yhteensä</td></tr>
          </tbody>
        </table>

        <div class="reader-alert note">
          <strong>Kokeen suorittaminen englanniksi:</strong> Tutkinnon voi virallisesti suorittaa myös englannin kielellä! Pyydä englanninkielinen koelomake kokeen vastaanottajalta.
        </div>

        <h2>🇫🇮 Asukkaan asema ja oikeudet Suomessa</h2>
        <ul>
          <li><strong>Täydet kotimaiset oikeudet</strong>: Sinua kohdellaan kotimaisena metsästäjänä; et tarvitse mitään turistilupia.</li>
          <li><strong>Henkilötunnus</strong>: Metsästäjänumero ja RHY-jäsenyys kytkeytyvät suoraan henkilötunnukseesi ja kotikuntaasi.</li>
          <li><strong>Pankkitunnistus</strong>: Kirjaudu Oma riistaan verkkopankkitunnuksilla (Suomi.fi).</li>
          <li><strong>Riistanhoitomaksu (43 €)</strong>: Sisältää metsästyskortin ja lakisääteisen metsästäjävakuutuksen.</li>
        </ul>
      `
    }
  },
  {
    id: "ch2",
    num: "02",
    icon: "🔫",
    slug: "firearms_and_licensing",
    title: {
      en: "02. Firearms, Licensing & Supervised Shooting (Ampuma-aselaki)",
      zh: "02. 枪支许可、枪柜法规与无证受监督射击",
      fi: "02. Ampuma-aseet, luvitus ja valvottu ammunta"
    },
    subtitle: {
      en: "Applying to Finnish Police (Poliisi) for firearm acquisition permits, weapon suitability, certified safe standards (EN 14450), and shooting under supervision without a personal permit.",
      zh: "向芬兰警察局申办购枪证流程、枪支口径与猎物匹配原则、EN 14450防盗枪柜法规及合法近身受监督射击。",
      fi: "Hankkimislupa poliisilta asukkaalle, aseen soveltuvuus, asekaappimääräykset ja laillinen valvottu ammunta ilman omaa aselupaa."
    },
    content: {
      en: `
        <h2>🏛️ Applying to the Finnish Police (Poliisi) for a Firearm Acquisition Permit</h2>
        <p>Under the Finnish Firearms Act (<em>Ampuma-aselaki</em>), hunting weapons are granted based on genuine hunting need. For residents applying in Finland:</p>
        <ol>
          <li><strong>Military Service Clarification</strong>: Finnish male citizens must show a military passport (<em>sotilaspassi</em>). Foreign residents residing in Finland are legally exempt from conscription; police automatically waive this requirement upon verifying your registry status.</li>
          <li><strong>Online Application Submission</strong>: Apply via <strong>poliisi.fi</strong> using your bank ID. Attach your Hunting Card and a statement of your planned hunting grounds and target species. Fee: ~106 € – 115 €.</li>
          <li><strong>Police Interview</strong>: An in-person interview at your local police station (can be conducted in English or Finnish). You will confirm storage plans and complete a standard safety aptitude test on a computer terminal.</li>
          <li><strong>Inspection & Firearms Card</strong>: Within 30 days of purchasing your firearm, bring the unloaded gun in a locked case to the police station for serial number verification to receive your permanent plastic Firearms Card (<em>Asekortti</em>).</li>
        </ol>

        <h2>🔒 Safe Storage Laws (EN 14450 Standard)</h2>
        <ul>
          <li><strong>1 to 4 Firearms</strong>: Must be stored in a locked cabinet or locked location, or with a vital component (bolt/forend) locked in a separate safe container.</li>
          <li><strong>5 or more Firearms</strong>: Under Finnish law, a certified steel safe conforming to <strong>EN 14450 Level S1/S2</strong> or <strong>EN 1143-1</strong> is <strong>mandatory</strong>. Safes weighing under 150 kg must be securely bolted to floor or wall studs.</li>
        </ul>

        <h2>💡 How to Shoot WITHOUT Your Own Gun Permit: Valvottu Ammunta</h2>
        <div class="reader-alert note">
          <strong>Section 88 of the Firearms Act:</strong> Any beginner can legally shoot at clay ranges or on hunts under the immediate personal supervision of a licensed adult permit holder. The supervisor must stand at arm's reach and maintain visual contact, able to intervene immediately. No personal gun permit required!
        </div>
      `,
      zh: `
        <h2>🏛️ 向芬兰警察局（Poliisi）申领枪支执照流程</h2>
        <p>在芬兰，枪支绝不可用于所谓的“防身防卫”，枪械申请基于“真实狩猎需求”原则。对于定居芬兰的申请人：</p>
        <ol>
          <li><strong>兵役证明依法免除</strong>：芬兰本国男性公民申请枪证需提交退伍军人证（Sotilaspassi）。<strong>外国籍常住居民依法免服芬兰兵役，警察局在审理时直接免除此项要求</strong>，按常规调取本地无犯罪记录与医疗安全评估。</li>
          <li><strong>网上提交申请</strong>：凭银行ID在 <strong>poliisi.fi</strong> 电子政务系统填表，上传猎人卡照片并填写猎场说明（如购买国家林业局Eräluvat日票打水鸭或加入本地猎会打鹿）。每把枪规费约106-115欧元。</li>
          <li><strong>警局现场面试</strong>：前往辖区警察局（如赫尔辛基Pasila警局或所在市镇警局）接受常规面谈（可用英语沟通）。警官会询问枪支存放地点，并在警局电脑上完成心理与安全认知问卷。</li>
          <li><strong>警局核验证件</strong>：获发购枪许可证（Hankkimislupa）后前往枪店选购。购枪后30天内，携带未上膛并妥善锁闭的枪支前往警局核验枪号换发永久持枪证（Asekortti）。</li>
        </ol>

        <h2>🔒 枪支安全存放与防盗枪柜（EN 14450 标准）</h2>
        <ul>
          <li><strong>拥有1至4把长枪</strong>：必须保存在加锁的坚固壁柜中，或将关键击发零件（枪栓/前托）拆卸锁在独立保险箱内。</li>
          <li><strong>拥有5把及以上枪支</strong>：芬兰法律强制要求必须拥有符合欧洲 <strong>EN 14450 (S1/S2级别)</strong> 或 <strong>EN 1143-1</strong> 认证的专用重型防盗钢制枪柜。空重低于150公斤的枪柜必须用膨胀螺栓牢固固定在地基或承重墙上。</li>
        </ul>

        <h2>💡 无枪证如何合法实弹射击与出猎：受监督射击（Valvottu Ammunta）</h2>
        <div class="reader-alert note">
          <strong>《枪支法》第88条黄金条款：</strong> 尚未获得枪支执照的新手，只要在持有效枪证的成年持照人<strong>近身一臂之内（Käsivarren mitan päässä）</strong>直接视线监督下，即可合法在飞碟靶场练习射击或在野外开枪狩猎！这是零门槛体验的绝佳途径。
        </div>
      `,
      fi: `
        <h2>🏛️ Hankkimisluvan hakeminen poliisilta asukkaana</h2>
        <ol>
          <li><strong>Asevelvollisuus</strong>: Ei-kansalaiselle pysyvälle asukkaalle asevelvollisuuden sotilaspassivaatimus katsotaan suoraan täytetyksi.</li>
          <li><strong>Hakemus</strong>: Hae lupaa poliisi.fi-palvelussa pankkitunnuksilla. Liitä mukaan metsästyskortti ja perustelut (metsästysmaat ja riistalajit). Maksu n. 106–115 €.</li>
          <li><strong>Poliisin haastattelu</strong>: Haastattelu poliisiasemalla (mahdollista englanniksi tai suomeksi) ja soveltuvuustesti.</li>
          <li><strong>Aseen esittäminen</strong>: Osta ase ja esitä se poliisille 30 päivän kuluessa asekortin saamiseksi.</li>
        </ol>

        <h2>🔒 Aseen säilytysmääräykset</h2>
        <ul>
          <li><strong>1–4 asetta</strong>: Lukitussa tilassa tai aseen kriittinen osa erillään.</li>
          <li><strong>5 tai useampi ase</strong>: Standardin <strong>EN 14450 (taso S1 tai S2)</strong> tai <strong>EN 1143-1</strong> mukainen hyväksytty asekaappi on lakisääteinen vaatimus.</li>
        </ul>

        <h2>💡 Valvottu ammunta (Ampuma-aselaki 88 §)</h2>
        <div class="reader-alert note">
          Henkilö, jolla ei ole aselupaa, saa ampua luvanhaltijan välittömässä valvonnassa (käsivarren mitan päässä) ampumaradalla tai metsällä.
        </div>
      `
    }
  },
  {
    id: "ch3",
    num: "03",
    icon: "🏹",
    slug: "bow_hunting_alternative",
    title: {
      en: "03. Bow Hunting Alternative (Jousimetsästys)",
      zh: "03. 现代复合弓猎路线（免枪柜、低门槛）",
      fi: "03. Jousimetsästys — Moderni vaihtoehto"
    },
    subtitle: {
      en: "Why bow hunting is exploding in Finland: no police permits or gun safes required, 180 N draw force laws, 22 mm broadheads, and 18 m bow shooting test.",
      zh: "为何弓猎在芬兰备受推崇：完全免除警局枪证与枪柜繁琐手续、法定180牛最低拉力、22毫米割裂式刀头及18米射击考核。",
      fi: "Taljajousimetsästyksen edut: ei aselupia tai asekaappia, 180 N vetovoima, 22 mm leikkaavat kärjet ja 18 m jousikoe."
    },
    content: {
      en: `
        <h2>🌟 Why Bow Hunting Is Thriving in Finland</h2>
        <p>For residents living in urban flats or suburban areas (such as the Helsinki Metropolitan Area), <strong>bow hunting (jousimetsästys)</strong> provides an exceptional, modern entry route:</p>
        <ul>
          <li><strong>Zero Police Bureaucracy</strong>: Hunting bows are classified as sports equipment, not firearms. No police background interviews, no acquisition permits, and no certified steel safes in your apartment!</li>
          <li><strong>Suburban Deer Management</strong>: White-tailed deer and roe deer are extremely abundant in Uusimaa and Southwest Finland. Because firearms cannot be discharged near residential buildings, hunting clubs actively recruit bow hunters for stealthy management.</li>
          <li><strong>Practice Anywhere</strong>: You can legally shoot practice targets in private backyards or local archery clubs (e.g. Robin Hood in Espoo) without needing a distant certified ballistic range.</li>
        </ul>

        <h2>⚖️ Legal Equipment Requirements (Metsästysasetus § 20)</h2>
        <ul>
          <li><strong>Minimum Draw Force</strong>: Must be at least <strong>180 Newtons</strong> (~40.5 lbs). Modern compound bows set between 50–70 lbs easily exceed this.</li>
          <li><strong>Broadheads</strong>: For deer and wild boar, arrows must be equipped with razor-sharp <strong>cutting broadheads with a cutting diameter of at least 22 mm</strong>. Practice field points are strictly prohibited for game.</li>
          <li><strong>Crossbows are Strictly Illegal</strong>: Crossbows (<em>varsijousi</em>) cannot legally be used for hunting any animal in Finland.</li>
        </ul>

        <h2>🎯 The Bow Shooting Test (Jousiampumakoe)</h2>
        <p>If you only hunt small game (birds, hares), you only need your regular Hunting Card. If you hunt <strong>roe deer, white-tailed deer, or wild boar</strong>, you must pass the Bow Test:</p>
        <table>
          <thead>
            <tr><th>Test Parameter</th><th>Requirement</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Distance</strong></td><td>18 meters</td></tr>
            <tr><td><strong>Shots</strong></td><td>3 arrows within 180 seconds (3 minutes)</td></tr>
            <tr><td><strong>Target Zone</strong></td><td>All 3 arrows must hit inside a 23 cm circular kill zone</td></tr>
            <tr><td><strong>Validity & Fee</strong></td><td>Valid for 3 years; fee is 20 €</td></tr>
          </tbody>
        </table>
      `,
      zh: `
        <h2>🌟 为什么复合弓猎在芬兰城市居民中迅速风靡？</h2>
        <p>对于生活在城市公寓或住宅区的常住居民（如大赫尔辛基地区），<strong>现代复合弓猎（Jousimetsästys）</strong>是体验狩猎极具吸引力的现代捷径：</p>
        <ul>
          <li><strong>完全免除警察局审批与枪柜</strong>：在芬兰法律中，猎弓属于体育器材，不受《枪支法》管控！无需向警察局网申排期、免去警局面谈，也不必在公寓卧室里安装笨重的加固防盗枪柜。</li>
          <li><strong>近郊白尾鹿治理主力军</strong>：芬兰南部（乌西玛大区）白尾鹿与狍鹿极其泛滥。由于民居周围150米内禁止开枪，许多猎会极为渴求安静且安全的弓猎手参与庭院周边的减害控群。</li>
          <li><strong>练箭场地极其灵活</strong>：您可以在个人院落、郊外林地设置泡沫箭靶，或在本地射箭俱乐部室内外靶场随时练习，无需舟车劳顿前往偏远的封闭式实弹靶场。</li>
        </ul>

        <h2>⚖️ 法定器材规范（《狩猎法令》第20条）</h2>
        <ul>
          <li><strong>法定最低拉力</strong>：弓的峰值拉紧力必须达到至少 <strong>180牛顿（约合40.5磅）</strong>。市售成年复合猎弓（通常设在50-70磅）可轻松达标。</li>
          <li><strong>割裂式猎箭头规格</strong>：猎杀鹿类与野猪时，箭支必须装配锋利的 <strong>切削式割刀头，且切割直径法定必须达到至少22毫米</strong>。打靶练习的平头练习箭绝对禁止用于狩猎！</li>
          <li><strong>机械弩在芬兰严禁用于狩猎</strong>：芬兰法律严格禁止使用十字弩/机械弩（Varsijousi）狩猎任何动物，必须为人力拉满拉弓的纯手持弓。</li>
        </ul>

        <h2>🎯 芬兰国家弓猎考核（Jousiampumakoe）</h2>
        <p>若您仅用弓猎取野兔、松鸡、水鸭，只需持有效猎人卡即可，无需射箭考核；若计划猎杀<strong>狍鹿、白尾鹿或野猪</strong>，则必须通过RHY考核：</p>
        <table>
          <thead>
            <tr><th>考核参数</th><th>法定标准</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>靶距</strong></td><td>18米</td></tr>
            <tr><td><strong>发箭要求</strong></td><td>180秒（3分钟）内射出3支箭</td></tr>
            <tr><td><strong>及格标准</strong></td><td>3支箭必须全部射入直径23厘米的鹿心肺靶心环内</td></tr>
            <tr><td><strong>成绩效力与费用</strong></td><td>成绩全芬兰通用，有效期3年；每次考核费20欧元</td></tr>
          </tbody>
        </table>
      `,
      fi: `
        <h2>🌟 Jousimetsästyksen suosio kasvaa</h2>
        <ul>
          <li><strong>Ei aselupabyrokratiaa</strong>: Jousiase ei ole ampuma-aselain alainen ase; ei aselupia tai asekaappivaatimusta.</li>
          <li><strong>Tehokas taajamien lähellä</strong>: Hiljainen ja turvallinen valkohäntäpeuran ja metsäkauriin pyyntiin asutuksen lähellä.</li>
        </ul>

        <h2>⚖️ Vaatimukset (Metsästysasetus 20 §)</h2>
        <ul>
          <li><strong>Vetovoima</strong>: Vähintään 180 newtonia (~40,5 paunaa).</li>
          <li><strong>Kärki</strong>: Hirvieläimille ja villisialle leikkaava kärki, halkaisija vähintään 22 mm.</li>
          <li><strong>Varsijousi on kielletty</strong>: Varsijousta ei saa käyttää metsästykseen Suomessa.</li>
        </ul>

        <h2>🎯 Jousikoe</h2>
        <p>Pakollinen kauriin, peuran ja villisian pyynnissä. Ammutaan 18 metrin matkalta 3 nuolta 180 sekunnissa 23 cm osumarenkaaseen (voimassa 3 v, maksu 20 €).</p>
      `
    }
  },
  {
    id: "ch4",
    num: "04",
    icon: "🌲",
    slug: "land_access_and_permits",
    title: {
      en: "04. Land Access, State Forests & Hunting Clubs (Metsästysoikeus)",
      zh: "04. 猎场准入：国家林业局Eräluvat与地方猎会机制",
      fi: "04. Metsästysoikeus, valtionmaat ja seuratoiminta"
    },
    subtitle: {
      en: "Why Everyman's Right excludes hunting, 9M hectares of public state forests on Eräluvat.fi, resident municipal rights (§ 8), and how to join a hunting club.",
      zh: "自然漫游权绝对排除狩猎、国家林业局900万公顷公有森林日票系统、芬兰北部居民免票权（第8条）及加入地方猎会攻略。",
      fi: "Miksi jokamiehenoikeus ei kata metsästystä, Metsähallituksen Eräluvat 9 miljoonalle hehtaarille, 8 §:n vapaa metsästysoikeus pohjoisessa ja seuroihin liittyminen."
    },
    content: {
      en: `
        <h2>🌲 Everyman's Right Does NOT Include Hunting!</h2>
        <p>In Finland, Everyman's Right (<em>Jokamiehenoikeus</em>) gives free access to roam, hike, camp, and pick wild berries and mushrooms across any forest in the country. However, <strong>hunting and fishing with tackle are strictly excluded</strong>. Under Section 6 of the Hunting Act, hunting rights belong exclusively to the landowner.</p>

        <h2>🌲 1. State-Owned Forests via Eräluvat.fi (Metsähallitus)</h2>
        <p>Metsähallitus manages over 9 million hectares of public land in Eastern and Northern Finland:</p>
        <ul>
          <li><strong>Small Game Permits (Pienriistalupa)</strong>: Buy online at <strong>Eräluvat.fi</strong> for 10 € – 25 € / day. Covers capercaillie, black grouse, hares, and waterfowl.</li>
          <li><strong>Small Predator Permits</strong>: Only ~10 € for the full season to eliminate invasive raccoon dogs and mink.</li>
          <li><strong>Northern Resident Free Hunting (Metsästyslaki 8 §)</strong>: If your registered permanent home municipality (<em>kotikunta</em>) is in Lapland or Kainuu, Finnish law grants you completely free small game hunting on state lands in your municipality!</li>
        </ul>

        <h2>🏡 2. Private Hunting Clubs (Metsästysseurat)</h2>
        <p>In Southern and Central Finland, private forest parcels are aggregated by local hunting clubs into territories of 2,000 to 25,000 hectares:</p>
        <ul>
          <li><strong>Big Game Requirement</strong>: Finnish law requires at least 1,000 hectares of contiguous land to issue moose hunting permits. Moose and deer hunting is therefore organized through clubs.</li>
          <li><strong>Joining as a Local Resident</strong>: You can apply as a resident member. Clubs actively recruit reliable new members willing to volunteer for summer maintenance, building high seats, and game feeding.</li>
          <li><strong>The Beater Fast-Track (Ajomies)</strong>: Volunteer to walk drive lines in autumn moose hunts. No gun or hunting card required to be a beater, and it is the fastest way to earn trust and mentorship!</li>
        </ul>
      `,
      zh: `
        <h2>🌲 严正澄清：芬兰“自然漫游权”绝对不包含狩猎权！</h2>
        <p>在芬兰，名扬世界的自然漫游权（Jokamiehenoikeus）允许任何人自由漫步、露营和采摘浆果蘑菇。但<strong>狩猎与钓鱼器具捕鱼绝不属于漫游权范畴！</strong>根据《狩猎法》第6条，森林狩猎权严格专属于地主，未经许可进入他方土地狩猎属于刑事违法。</p>

        <h2>🌲 1. 国家林业局公有森林直通车：Eräluvat.fi</h2>
        <p>芬兰国家林业局（Metsähallitus）在芬兰东部和北部管理着超过 <strong>900万公顷</strong> 的壮丽公有森林：</p>
        <ul>
          <li><strong>小猎物日票（Pienriistalupa）</strong>：持有效猎人卡直接在 <strong>Eräluvat.fi</strong> 在线购买，日票约10-25欧元。涵盖松鸡、黑琴鸡、野鸭与野兔。</li>
          <li><strong>外来害兽清除票</strong>：针对外来物种貉（Supikoira）和美洲水貂，全季仅需约10欧元，是极佳的新手练兵场。</li>
          <li><strong>芬兰北部居民免票法案（《狩猎法》第8条）</strong>：如果您的常住户籍登记在拉普兰或凯努（Kainuu）等北部市镇，法律赋予您在本市镇范围内国家土地上<strong>完全免费狩猎小猎物</strong>的特权！</li>
        </ul>

        <h2>🏡 2. 地方私有林狩猎协会（Metsästysseurat）</h2>
        <p>在芬兰南部与中部，私人林地由当地狩猎俱乐部整合租用，形成 2,000 至 25,000 公顷的连片优质猎场：</p>
        <ul>
          <li><strong>大型猎物法定准入</strong>：法律规定发放驼鹿狩猎配额必须具备至少 1,000 公顷连片林地，因此驼鹿与白尾鹿狩猎全都在俱乐部框架下展开。</li>
          <li><strong>本地居民入会攻略</strong>：芬兰猎会非常欢迎积极勤劳的新鲜血液！主动参与夏季维护、搭建高位猎塔（Passitorni）、为鹿群冬季投料（Riistaruokinta）是最佳破冰方式。</li>
          <li><strong>无枪驱兽员捷径（Ajomies）</strong>：报名作为秋季围猎的橙色背心驱兽员。完全无需枪证与猎人卡，在林间穿行呼喊配合猎犬驱赶猎物，不仅能结识资深导师，赛后还能在篝火旁分得鲜美野味！</li>
        </ul>
      `,
      fi: `
        <h2>🌲 Jokamiehenoikeudet eivät kata metsästystä</h2>
        <p>Metsästysoikeus kuuluu aina maanomistajalle (Metsästyslaki 6 §). Toisen maalla ei saa metsästää ilman lupaa.</p>

        <h2>🌲 1. Valtionmaat (Eräluvat.fi)</h2>
        <ul>
          <li><strong>Pienriistaluvat</strong>: Osta kanalintu- tai vesilintulupia verkosta (10–25 €/vrk).</li>
          <li><strong>Pienpetolupa</strong>: Noin 10 € koko kaudelta supikoiran ja minkin poistoon.</li>
          <li><strong>Pohjoisen vapaa metsästysoikeus (8 §)</strong>: Lapissa ja Kainuussa kunnassa pysyvästi asuvilla on vapaa oikeus metsästää valtionmailla kotikunnassaan.</li>
        </ul>

        <h2>🏡 2. Metsästysseurat</h2>
        <ul>
          <li>Hirvieläinten pyynti vaatii vähintään 1 000 ha yhtenäisen alueen, ja se tapahtuu seurojen kautta.</li>
          <li>Pysyvänä asukkaana voit hakea jäsenyyttä paikalliseen seuraan.</li>
          <li>Ajomieheksi lähteminen on paras ja maksuton tapa tutustua seuran toimintaan.</li>
        </ul>
      `
    }
  },
  {
    id: "ch5",
    num: "05",
    icon: "🦌",
    slug: "game_species_and_seasons",
    title: {
      en: "05. Finnish Game Species, Seasons & Rifle Test (Hirvikoe)",
      zh: "05. 芬兰主要猎物物种、开放季节与大动物射击考核",
      fi: "05. Riistalajit, metsästysajat ja ampumakoe"
    },
    subtitle: {
      en: "Forest grouse, Aug 20 duck opening, hares, deer, moose, invasive alien predators, and the 75m rifle shooting test.",
      zh: "松鸡类生态习性、8月20日野鸭盛典、野兔白毛辨析、白尾鹿与驼鹿、外来害兽清除及75米步枪考核动能规范。",
      fi: "Metsäkanalinnut, sorsastus 20.8., jänikset, hirvieläimet, vieraspedot ja 75 metrin hirvikoe."
    },
    content: {
      en: `
        <h2>📅 The Finnish Hunting Calendar Milestones</h2>
        <ul>
          <li><strong>August 10 at 00:00</strong>: Wood pigeon season opens (field decoy hunting).</li>
          <li><strong>August 20 at 12:00 NOON</strong>: Waterfowl season opens nationwide (biggest annual celebration!).</li>
          <li><strong>September 1</strong>: Roe deer, hares, and forest grouse open.</li>
          <li><strong>September / October</strong>: Moose and white-tailed deer drives begin.</li>
        </ul>

        <h2>🎯 The Mandatory Rifle Shooting Test (Ampumakoe / Hirvikoe)</h2>
        <p>Required for rifle hunting of moose, deer, bear, and wild boar:</p>
        <table>
          <thead>
            <tr><th>Parameter</th><th>Official Rule</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Target</strong></td><td>Life-sized stationary moose target (23 cm diameter circle)</td></tr>
            <tr><td><strong>Distance</strong></td><td>75 meters</td></tr>
            <tr><td><strong>Execution</strong></td><td>4 shots fired within 90 seconds (standing, kneeling, or sitting)</td></tr>
            <tr><td><strong>Validity</strong></td><td>3 years (fee is 20 €)</td></tr>
          </tbody>
        </table>

        <h2>⚖️ Kinetic Energy Thresholds for Big Game Rifles (E100)</h2>
        <ul>
          <li>Bullet weight ≥ 6.0 g and <strong>E100 ≥ 2,000 Joules</strong>; OR</li>
          <li>Bullet weight ≥ 8.0 g and <strong>E100 ≥ 1,700 Joules</strong>; OR</li>
          <li><strong>Lead-Free Bullets</strong>: Bullet weight ≥ 5.1 g and <strong>E100 ≥ 1,700 Joules</strong>.</li>
        </ul>
      `,
      zh: `
        <h2>📅 芬兰年度狩猎日历关键节点</h2>
        <ul>
          <li><strong>8月10日午夜 00:00</strong>：斑尾林鸽季打响（农田假鸟伏击）。</li>
          <li><strong>8月20日正午 12:00整</strong>：全国水禽水鸭季鸣枪开猎（芬兰猎人全民节日！）。</li>
          <li><strong>9月1日</strong>：狍鹿、野兔及森林松鸡类全面开季。</li>
          <li><strong>9月下旬至10月初</strong>：驼鹿与白尾鹿集体围猎大幕拉开。</li>
        </ul>

        <h2>🎯 芬兰法定大动物步枪考核（Hirvikoe / Ampumakoe）</h2>
        <p>使用步枪猎杀驼鹿、鹿类、野猪或熊之前，必须通过RHY考核：</p>
        <table>
          <thead>
            <tr><th>考核项目</th><th>法定标准规范</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>标靶与命中区</strong></td><td>全尺寸静止驼鹿心肺图，核心击中环直径 23 厘米</td></tr>
            <tr><td><strong>射距</strong></td><td>75 米</td></tr>
            <tr><td><strong>发枪要求</strong></td><td>首发开火后 90 秒内打出 4 发（允许立姿、跪姿或坐姿及使用射击支架）</td></tr>
            <tr><td><strong>及格效力</strong></td><td>4发全部命中23厘米环；成绩有效期 3 年；考核费 20 欧元</td></tr>
          </tbody>
        </table>

        <h2>⚖️ 步枪大猎物法定弹药动能标准（100米处 E100）</h2>
        <ul>
          <li>弹头重 ≥ 6.0克，且 <strong>100米残留动能 ≥ 2,000焦耳</strong>；或</li>
          <li>弹头重 ≥ 8.0克，且 <strong>100米残留动能 ≥ 1,700焦耳</strong>；或</li>
          <li><strong>全铜环保无铅弹</strong>：弹头重 ≥ 5.1克，且 <strong>100米动能 ≥ 1,700焦耳</strong>。</li>
        </ul>
      `,
      fi: `
        <h2>📅 Metsästysvuoden tärkeimmät päivämäärät</h2>
        <ul>
          <li><strong>10. elokuuta</strong>: Sepelkyyhky alkaa.</li>
          <li><strong>20. elokuuta klo 12.00</strong>: Vesilinnustus alkaa.</li>
          <li><strong>1. syyskuuta</strong>: Metsäkanalinnut, jänikset ja kauris alkavat.</li>
          <li><strong>Syys/lokakuu</strong>: Hirven ja valkohäntäpeuran jahti alkaa.</li>
        </ul>

        <h2>🎯 Ampumakoe (Hirvikoe)</h2>
        <p>Ammutaan 75 metristä 4 laukausta 90 sekunnissa 23 cm osumarenkaaseen (voimassa 3 v, maksu 20 €).</p>
      `
    }
  },
  {
    id: "ch6",
    num: "06",
    icon: "🧭",
    slug: "zero_experience_roadmap",
    title: {
      en: "06. Zero-Experience Practical Roadmap (From Beginner to Harvest)",
      zh: "06. 零基础实战四阶段路线图（从新手到首次丰收）",
      fi: "06. Nollakokemuksesta jahtiin — Aloittelijan tiekartta"
    },
    subtitle: {
      en: "Phase 0 (Observer & Clay range) to Phase 1 (Exam & Oma riista), Phase 2 (Weapon choice), and Phase 3 (Field dressing & aging meat).",
      zh: "零花费观摩体验、考取猎人卡、选择武器方案，以及从放血、开膛去内脏到40度日排酸熟化的全流程实践。",
      fi: "Vaihe 0 (tutustuminen ja rata) -> Vaihe 1 (tutkinto ja Oma riista) -> Vaihe 2 (asepolku) -> Vaihe 3 (saaliin käsittely ja riiputus)."
    },
    content: {
      en: `
        <h2>🧭 The 4 Natural Phases for Beginners</h2>
        <ol>
          <li><strong>Phase 0: Orientation & Range Visit (Weeks 1–4)</strong>: Book a clay shooting session at a sporting range under supervision (no license needed). Join an autumn club hunt as an unarmed beater (<em>ajomies</em>).</li>
          <li><strong>Phase 1: Qualification & Certification (Months 1–2)</strong>: Attend a local weekend preparatory course, sit the 60-question exam in English, pay the 43 € fee, and activate Oma riista.</li>
          <li><strong>Phase 2: Weapon Selection (Months 2–4)</strong>:
            <ul>
              <li><em>Route A (Firearm)</em>: Buy safe, apply to police for 12G shotgun or .308 rifle, inspect at station, pass 75m rifle test.</li>
              <li><em>Route B (Bow)</em>: Buy compound bow package (≥ 40.5 lbs), practice 3D targets, pass 18m bow test for deer.</li>
              <li><em>Route C (Mentored)</em>: Shoot under immediate supervision of a mentor/guide without buying weapons yet.</li>
            </ul>
          </li>
          <li><strong>Phase 3: The Forest & Meat Care (Months 4–12)</strong>: Book state permits or club stands. Harvest clean game, bleed carcass (<em>pistäminen</em>), gut entrails (<em>suolistus</em>), and hang meat according to the <strong>40 degree-day rule</strong> (e.g. 10 days at 4°C).</li>
        </ol>
      `,
      zh: `
        <h2>🧭 零基础新手的四个进阶阶段</h2>
        <ol>
          <li><strong>第0阶段：低成本初探与靶场体验（第1–4周）</strong>：前往飞碟靶场进行受监督实弹射击（无需枪证）；作为无枪驱兽员（Ajomies）穿橙色背心观摩当地猎会围猎，坐在篝火旁结识资深导师。</li>
          <li><strong>第1阶段：备考认证与猎人卡激活（第1–2个月）</strong>：参加周末考前培训，报考60题猎人考试（可申请全英文考卷），通过后在Oma riista缴费43欧激活猎人卡与全年意外险。</li>
          <li><strong>第2阶段：明确个人武器路线（第2–4个月）</strong>：
            <ul>
              <li><em>路线 A（传统枪支）</em>：安装加固枪柜，在Poliisi.fi申领购枪许可证，购置12号双管霰弹枪或.308步枪，靶场实训并通过75米考核。</li>
              <li><em>路线 B（现代弓猎）</em>：免警局办证免枪柜，购置拉力≥40.5磅复合弓，练习3D箭靶，通过18米射箭考核打白尾鹿。</li>
              <li><em>路线 C（导师陪同）</em>：暂不购枪，在持证向导身边一臂内近身陪同射击，或申请副持枪证。</li>
            </ul>
          </li>
          <li><strong>第3阶段：森林首猎与野味熟化（第4–12个月）</strong>：获取Eräluvat日票或猎塔机位。首猎成功后，在15分钟内确认心跳停止，割喉放血（Pistäminen），精细开膛剥离内脏（Suolistus），并在冷库中遵循 <strong>“40度·日” 熟化法则</strong>（如4°C冷库吊挂熟化10天）使得野味肉质软嫩无膻味。</li>
        </ol>
      `,
      fi: `
        <h2>🧭 Aloittelijan 4 vaihetta</h2>
        <ol>
          <li><strong>Vaihe 0: Tutustuminen (viikot 1–4)</strong>: Kokeile haulikkoammuntaa radalla valvotusti. Lähde ajomieheksi hirvijahtiin.</li>
          <li><strong>Vaihe 1: Tutkinto ja kortti (kuukaudet 1–2)</strong>: Käy valmentava kurssi, suorita metsästäjätutkinto ja maksa riistanhoitomaksu.</li>
          <li><strong>Vaihe 2: Asepolun valinta (kuukaudet 2–4)</strong>: Hanki aselupa ja ase, tai aloita jousimetsästys ilman aselupabyrokratiaa.</li>
          <li><strong>Vaihe 3: Ensimmäinen jahti ja saaliinkäsittely</strong>: Pistäminen, suolistus ja riiputus (40 astevuorokautta).</li>
        </ol>
      `
    }
  },
  {
    id: "ch7",
    num: "07",
    icon: "🛡️",
    slug: "safety_gear_and_ethics",
    title: {
      en: "07. Safety Regulations, Gear & Nordic Ethics",
      zh: "07. 法定安全红线、北欧装备分层与狩猎礼仪",
      fi: "07. Turvallisuusmääräykset, varusteet ja eräperinne"
    },
    subtitle: {
      en: "Mandatory blaze orange 2/3 coverage law, EU wetland lead bans, sub-zero Nordic clothing layers, safe shooting angles, and trichinella testing.",
      zh: "法定2/3面积亮橙警示服法条、湿地禁铅令、极寒分层保暖法则、地面安全受弹背景及野猪旋毛虫强制化验。",
      fi: "Oranssin 2/3-sääntö, kosteikkojen lyijykielto, kerrospukeutuminen, turvallinen tausta ja trikiinitutkimus."
    },
    content: {
      en: `
        <h2>🚨 Statutory Safety Mandates</h2>
        <ul>
          <li><strong>The Blaze Orange Law (Metsästysasetus § 22)</strong>: During group hunts for moose or deer, at least <strong>two-thirds (2/3)</strong> of the visible surface of your jacket/vest and headwear must be blaze orange or blaze red.</li>
          <li><strong>150-Meter Buffer Zone (Metsästyslaki § 25)</strong>: Firing a weapon is strictly forbidden within 150 meters of any inhabited building without written owner permission.</li>
          <li><strong>Safe Backstop Rule (Turvallinen tausta)</strong>: High-powered rifle bullets travel over 4,000 meters if elevated. <strong>NEVER shoot at skylines or silhouettes.</strong> The projectile must always impact solid earth or downward terrain berms.</li>
          <li><strong>EU REACH Wetland Lead Ban</strong>: Discharging or carrying lead shot within 100 meters of any wetland, lake, or marsh is illegal. Use steel, bismuth, or tungsten.</li>
        </ul>

        <h2>🔬 Wild Boar & Bear Trichinella Lab Testing</h2>
        <div class="reader-alert danger">
          <strong>Mandatory Food Safety:</strong> Meat harvested from wild boar and bear must always be tested in an accredited laboratory for the microscopic parasite <em>Trichinella spiralis</em> before consumption to prevent fatal trichinosis!
        </div>
      `,
      zh: `
        <h2>🚨 必须铭记的芬兰刑事安全红线</h2>
        <ul>
          <li><strong>法定2/3亮橙警示服法条（《法令》第22条）</strong>：围猎大猎物时，外套/背心及帽子表面积的 <strong>至少三分之二（2/3）</strong> 必须为醒目的亮橙色或橙红色。鹿类眼睛缺少红色感光锥体，对亮橙色呈灰暗视差，但对人类极为醒目。</li>
          <li><strong>150米安全红线（《狩猎法》第25条）</strong>：严禁在距离有人居住的住宅、农舍150米范围内击发任何武器或拉弓，除非获得屋主书面同意。严禁横跨公共公路开火。</li>
          <li><strong>安全受弹背景原则（Turvallinen tausta）</strong>：高威力步枪弹（如.308）射程超过4000米！<strong>严禁对准地平线或林冠开火！</strong>弹道后方必须有坚实土地、坡地土堤作为稳妥受弹背景。</li>
          <li><strong>湿地100米铅弹禁令（欧盟REACH法案）</strong>：在任何湿地、湖泊及水体100米缓冲区内，击发或随身携带铅弹霰弹均属于违法。必须使用钢珠、铋或钨合金环保弹。</li>
        </ul>

        <h2>🔬 野猪与棕熊肉旋毛虫（Trichinella）强制化验</h2>
        <div class="reader-alert danger">
          <strong>致命食品安全警报：</strong> 野猪和熊是致命旋毛虫寄生虫的主要自然宿主。收获后严禁直接烹饪食用，必须取深部肌肉样本送至官方认证实验室化验，取得无虫报告后方可安全食用！
        </div>
      `,
      fi: `
        <h2>🚨 Lakisääteiset turvallisuusmääräykset</h2>
        <ul>
          <li><strong>Oranssi huomioväri (22 §)</strong>: Hirvieläinjahdissa vähintään 2/3 vaatteesta ja päähineestä on oltava oranssia.</li>
          <li><strong>150 metrin sääntö (25 §)</strong>: Asuttua rakennusta ei saa ampua lähempää kuin 150 metriä.</li>
          <li><strong>Turvallinen tausta</strong>: Kiväärin luoti lentää kilometrejä; varmista aina valli tai maatausta.</li>
          <li><strong>Lyijykielto kosteikoilla</strong>: EU:n REACH kieltää lyijyhaulit kosteikoilla ja 100 metrin suojavyöhykkeellä.</li>
        </ul>

        <h2>🔬 Trikiinitutkimus</h2>
        <div class="reader-alert danger">
          Villisian ja karhun liha on aina tutkittava laboratoriossa trikiinin varalta ennen ihmisravinnoksi käyttöä!
        </div>
      `
    }
  },
  {
    id: "ch8",
    num: "08",
    icon: "📖",
    slug: "finnish_hunting_glossary",
    title: {
      en: "08. Finnish Hunting Glossary & Field Radio Commands",
      zh: "08. 芬兰语狩猎高频专业词汇与对讲机实战指令",
      fi: "08. Eräsanasto ja radiokomennot"
    },
    subtitle: {
      en: "Field terminology, legal phrases, forest commands, and radio discipline (Passit paikalla, Hirvi nurin, Jahti poikki).",
      zh: "森林对讲机暗号规范、持枪证件术语、传统猎礼词汇及芬-英-中三语对照表。",
      fi: "Metsästyksen ammattisanasto, lainsäädäntötermit ja VHF-radioliikenteen komennot."
    },
    content: {
      en: `
        <h2>📻 Critical Radio Commands Heard in Finnish Drives</h2>
        <table>
          <thead>
            <tr><th>Finnish Radio Command</th><th>Meaning & Expected Action</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>"Passit paikalla!"</strong></td><td><em>"Standers are in position!"</em> All perimeter hunters are set; weapons may now be safely loaded in the stand.</td></tr>
            <tr><td><strong>"Ajo alkaa!"</strong></td><td><em>"The drive begins!"</em> Beaters and dogs have entered the forest. Maintain extreme sector discipline.</td></tr>
            <tr><td><strong>"Paukku lähti!"</strong></td><td><em>"A shot was fired!"</em> A stander reports a discharge. Keep quiet and wait for status updates.</td></tr>
            <tr><td><strong>"Hirvi nurin / Peura nurin!"</strong></td><td><em>"Moose is down / Deer is down!"</em> Animal has fallen safely. Standers remain on watch.</td></tr>
            <tr><td><strong>"Jahti poikki, aseet tyhjäksi!"</strong></td><td><em>"Hunt is halted, unload all weapons!"</em> Immediately clear chamber, open bolt, and leave action open.</td></tr>
          </tbody>
        </table>

        <h2>🌲 Essential Field Vocabulary</h2>
        <ul>
          <li><strong>Puukko</strong>: Traditional Scandinavian fixed-blade belt knife.</li>
          <li><strong>Metsästyksenjohtaja</strong>: Legally appointed Hunt Master overseeing safety.</li>
          <li><strong>Passimies</strong>: Stander waiting stationary at an assigned forest perimeter spot.</li>
          <li><strong>Ajomies</strong>: Beater/driver pushing timber lines with dogs.</li>
          <li><strong>Lahtivaja</strong>: Slaughterhouse / butchery shed owned by hunting clubs.</li>
          <li><strong>Saalis</strong>: Harvest / bag.</li>
        </ul>
      `,
      zh: `
        <h2>📻 芬兰围猎现场VHF对讲机高频标准指令</h2>
        <table>
          <thead>
            <tr><th>芬兰语无线电指令</th><th>中文含义与现场应对行动</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>"Passit paikalla!"</strong></td><td><em>“所有枪手机位就绪！”</em> 意味着外围猎人已全部就位，此时可在猎位上安全装弹上膛。</td></tr>
            <tr><td><strong>"Ajo alkaa!"</strong></td><td><em>“驱赶线开始启动！”</em> 驱兽员与猎犬已进入森林核心区，必须严守法定射击夹角扇面。</td></tr>
            <tr><td><strong>"Paukku lähti!"</strong></td><td><em>“已击发一枪！”</em> 有猎人开火射击，全体人员保持肃静等待通报，严禁随意走动。</td></tr>
            <tr><td><strong>"Hirvi nurin / Peura nurin!"</strong></td><td><em>“驼鹿已击倒 / 鹿已击倒！”</em> 目标猎物已安全倒地确认命中。各点位继续警惕守候。</td></tr>
            <tr><td><strong>"Jahti poikki, aseet tyhjäksi!"</strong></td><td><em>“狩猎紧急暂停，全员退弹！”</em> 最严肃指令！立即退出弹药、拉开枪栓保持空膛，方可移动。</td></tr>
          </tbody>
        </table>

        <h2>🌲 核心专业名词速查</h2>
        <ul>
          <li><strong>Puukko</strong>：芬兰传统直刀，野外开膛、剔骨与生火必备。</li>
          <li><strong>Metsästyksenjohtaja</strong>：围猎总指挥官（法律任命，对全队安全负刑事责任）。</li>
          <li><strong>Passimies</strong>：站桩枪手（守候在指定树干或高塔机位上的射手）。</li>
          <li><strong>Ajomies</strong>：驱兽员（徒步穿行灌木丛驱赶动物向枪手靠拢的人员）。</li>
          <li><strong>Lahtivaja</strong>：俱乐部专属屠宰剥皮房与排酸冷库。</li>
          <li><strong>Saalis</strong>：猎获物 / 收获的野味。</li>
        </ul>
      `,
      fi: `
        <h2>📻 Radioliikenteen vakiokomennot</h2>
        <table>
          <thead>
            <tr><th>Komento</th><th>Merkitys</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>"Passit paikalla!"</strong></td><td>Passit ovat miehitettyinä; aseet saa ladata passipaikalla.</td></tr>
            <tr><td><strong>"Ajo alkaa!"</strong></td><td>Koirat ja ajomiehet ovat metsässä; noutakaa tarkkaa sektorikuria.</td></tr>
            <tr><td><strong>"Paukku lähti!"</strong></td><td>Laukaus on ammuttu; odotetaan ilmoitusta.</td></tr>
            <tr><td><strong>"Hirvi nurin!"</strong></td><td>Kaato on varmistunut.</td></tr>
            <tr><td><strong>"Jahti poikki, aseet tyhjäksi!"</strong></td><td>Jahti keskeytyy heti; aseet on tyhjennettävä välittömästi.</td></tr>
          </tbody>
        </table>
      `
    }
  }
];
