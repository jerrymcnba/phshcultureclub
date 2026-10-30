/*
 * Shanghai Culture Club — bilingual content.
 * 修改网页文案：在下面的 en（英文）和 zh（中文）两组中修改对应文字即可。
 * Change website copy in the en / zh dictionaries below.
 * Word-card vocabulary and audio stay in data/cards.js (unchanged).
 */
(() => {
  'use strict';

  const TEXT = {
    en: {
      brandName: "Shanghai Culture Club <small class=\"brand-sub\">上海文化社</small>",
      menu: "Menu ☰",
      navHome: "Home",
      navCards: "Word Cards",
      navStory: "Our Story",
      homeTitle: "Pinghe<br>Shanghai Culture Club",
      homeCards: "Word Cards <span aria-hidden=\"true\">↗</span>",
      homeStory: "Our Story <span aria-hidden=\"true\">→</span>",
      cardsEyebrow: "The collection / 词语卡片",
      cardsTitle: "Words from everyday life.",
      cardsIntro: "With the goal of preserving and promoting the local dialect Shanghainese, we designed more than 100 Shanghainese word cards and placed them around campus. We carefully selected Shanghainese words and phrases that are closely connected to everyday life, including school spaces, classroom objects, and food. Below are the 26 word cards we have digitized so far. Choose a topic or search in English or Chinese, then open it to hear the word and the sample sentence.",
      searchLabel: "Search word cards",
      empty1: "No word cards match your search.",
      empty2: "Try another word or select “All cards”.",
      storyEyebrow: "About the club",
      storyTitle: "Our Story",
      storyP1: "Founded in 2024, Pinghe Shanghai Culture Club began with two students born and raised in Shanghai. Seeing how the local dialect and culture has been gradually fading in recent years, we wanted to do something to preserve them, starting with our own school.",
      storyP2: "Today, our club community has grown to over 120 members. Through 22 club events, we have introduced students to Shanghai's local culture and helped them learn more about Shanghainese through lessons and activities.",
      storyP3: [
        "What you see on this website is only the beginning. I plan to keep expanding and improving it, even after I graduate from Pinghe.",
        "Here are some directions I hope to explore in the future:",
        "1.Complete our existing word cards: Finish recording audio and digitizing the word cards we have already created.",
        "2.Expand our vocabulary collection: Create more word cards covering different aspects of everyday life beyond the school campus, gradually building a small Shanghainese dictionary.",
        "3.Explore pronunciation differences across generations: I've noticed differences in how Shanghainese is pronounced by older speakers, including my grandparents and those of other club members, compared with younger generations. I hope to collect recordings from speakers of different ages, compare their pronunciations, and identify recurring patterns of variation.",
        "4.Develop beginner-friendly Shanghainese lessons: Create a more structured introduction to Shanghainese, helping beginners understand the language and learn how to use it in everyday conversations.",
        "5.Share more about Shanghai's culture and history: Introduce local traditions, customs, and how the city has changed over the years."
      ].join("\n"),
      storyBadge: "A familiar place, in another voice.",
      futureEyebrow: "Looking ahead",
      futureTitle: "Continuing the project",
      relatedEyebrow: "Keep listening",
      relatedTitle: "More to discover.",
      relatedLink: "Browse all cards →",
      footerAbout: "A student-led effort to make Shanghainese a little easier to see, hear, and share.",
      footerBottom: "Shanghai Culture Club · A school culture project · Made with curiosity in Shanghai."
    },
    zh: {
      brandName: "平和上海文化社 <small class=\"brand-sub\">Shanghai Culture Club</small>",
      menu: "菜单 ☰",
      navHome: "首页",
      navCards: "上海话词卡",
      navStory: "我们的故事",
      homeTitle: "平和上海文化社",
      homeCards: "上海话词卡 <span aria-hidden=\"true\">↗</span>",
      homeStory: "我们的故事 <span aria-hidden=\"true\">→</span>",
      cardsEyebrow: "词语卡片 / Word Cards",
      cardsTitle: "来自日常生活的上海话。",
      cardsIntro: "为了保护和推广上海本地方言——上海话，我们设计了100多张上海话词卡，并将它们张贴在校园各处。我们精心挑选了与日常生活密切相关的词语，包括校园场所、教室物品和餐饮等。以下是目前已经完成数字化的26张词卡。你可以按类别浏览，也可以使用中文或英文搜索，点开词卡后即可收听词语和例句的上海话录音。",
      searchLabel: "搜索词语卡片",
      empty1: "没有找到符合条件的词卡。",
      empty2: "试试其他关键词，或选择“全部词卡”。",
      storyEyebrow: "关于社团",
      storyTitle: "我们的故事",
      storyP1: "平和上海文化社成立于2024年。两位在上海出生、长大的创办者注意到，近年来本地方言和文化正逐渐式微，因此希望从自己的校园开始，为保护上海文化做一些事。",
      storyP2: "如今，社团社区已有120多位成员。通过22次社团活动，我们向同学们介绍上海本地文化，并通过教学与活动帮助大家了解和学习上海话。",
      storyP3: [
        "目前网站展示的内容还只是一个开始。即使从平和毕业，我也计划继续完善和扩充这个项目。",
        "未来，我希望从以下几个方向继续努力：",
        "1. 完善已有词卡：为已经制作完成的词卡补充录音，并完成数字化整理。",
        "2. 扩充词汇收录：制作更多与校园之外的日常生活相关的词卡，逐步将网站发展为一本小型上海话词典。",
        "3. 探索不同世代的发音差异：我注意到，我的祖辈以及其他社员的祖辈，与年轻人说上海话时的发音存在差异。我希望收集不同年龄段使用者的语音录音，进行比较，并整理出一些反复出现的语音变异规律。",
        "4. 制作适合初学者的上海话课程：系统介绍上海话的基本知识，帮助初学者在日常交流中理解和使用上海话。",
        "5. 分享更多上海文化与历史：介绍上海的传统习俗、地方文化，以及这座城市多年来的变化。"
      ].join("\n"),
      storyBadge: "熟悉的地方，另一种声音。",
      futureEyebrow: "展望未来",
      futureTitle: "让项目继续发展",
      relatedEyebrow: "继续聆听",
      relatedTitle: "发现更多词语。",
      relatedLink: "查看全部词卡 →",
      footerAbout: "由学生发起的上海文化项目，希望让上海话更容易被看见、听见和分享。",
      footerBottom: "上海文化社 · 校园文化项目 · 创作于上海。"
    }
  };

  // Category ids correspond to data/cards.js; vocabulary & audio remain unchanged.
  const CATEGORY_ZH = {
    all: '全部词卡', spaces: '校园场所', sports: '体育与活动',
    objects: '日常物品', food: '餐饮相关'
  };
  const cards = Array.isArray(window.SHANGHAI_CARDS) ? window.SHANGHAI_CARDS : [];
  const categoryEn = window.CARD_CATEGORIES || {};
  const params = new URLSearchParams(window.location.search);
  let stored = null;
  try { stored = window.localStorage.getItem('scc-language'); } catch (_) { /* private browsing */ }
  let current = ['zh', 'en'].includes(params.get('lang')) ? params.get('lang')
    : (['zh', 'en'].includes(stored) ? stored : 'en');

  const page = document.body.classList.contains('home-page') ? 'index'
    : document.body.classList.contains('cards-page') ? 'cards'
    : document.body.classList.contains('about-page') ? 'about' : 'word';

  function assignHtml(node, html) {
    if (!node) return;
    // Compare normalized markup (e.g. '&' is serialized as '&amp;').
    // This avoids an endless MutationObserver loop when cards are translated.
    const template = document.createElement('template');
    template.innerHTML = html;
    if (node.innerHTML !== template.innerHTML) node.innerHTML = template.innerHTML;
  }
  function assignText(node, value) {
    if (node && node.textContent !== value) node.textContent = value;
  }
  function categoryLabel(category) {
    return current === 'zh' ? (CATEGORY_ZH[category] || categoryEn[category] || '')
      : (categoryEn[category] || category || 'Word card');
  }
  function cardById(id) { return cards.find(c => String(c.id) === String(id)); }
  function formatCount(count) {
    return current === 'zh' ? `显示 ${count} / ${cards.length} 张有声词卡`
      : `${count} of ${cards.length} audio word cards`;
  }

  // storyP3 accepts \n-separated lines. Each numbered line becomes its own
  // styled paragraph, with its title bolded. Use textContent, not innerHTML,
  // so apostrophes, angle brackets and user-edited copy are treated as text.
  function renderStoryParagraphs(node, source) {
    if (!node || node.dataset.storySource === source) return;
    const lines = String(source).split(/\r?\n/).map(s => s.trim()).filter(Boolean);
    const fragment = document.createDocumentFragment();
    for (const line of lines) {
      const match = line.match(/^(\d+)[.．、]\s*(.+)$/);
      const p = document.createElement('p');
      if (!match) {
        p.className = 'story-future-intro';
        p.textContent = line;
      } else {
        p.className = 'story-future-item';
        const number = document.createElement('span');
        number.className = 'story-future-number';
        number.textContent = match[1].padStart(2, '0');
        const copy = document.createElement('span');
        copy.className = 'story-future-item-copy';
        const titleMatch = match[2].match(/^([^:：]+)[:：]\s*(.*)$/);
        if (titleMatch) {
          const title = document.createElement('strong');
          title.textContent = titleMatch[1];
          copy.append(title, document.createTextNode(titleMatch[2]));
        } else {
          copy.textContent = match[2];
        }
        p.append(number, copy);
      }
      fragment.appendChild(p);
    }
    node.replaceChildren(fragment);
    node.dataset.storySource = source;
  }

  function translateStatic() {
    const dictionary = TEXT[current];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (!Object.prototype.hasOwnProperty.call(dictionary, key)) return;
      const html = dictionary[key].replaceAll('{{count}}', String(cards.length));
      if (key === 'storyP3') renderStoryParagraphs(el, html);
      else assignHtml(el, html);
    });
    document.querySelectorAll('[data-online-count]').forEach(el => assignText(el, String(cards.length)));
    document.documentElement.lang = current === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('.language-switch [data-lang]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === current));
    });
    const search = document.querySelector('#card-search');
    if (search) search.placeholder = current === 'zh' ? '搜索中文或 English…' : 'Search in English or 中文…';
    const filters = document.querySelector('#category-filters');
    if (filters) filters.setAttribute('aria-label', current === 'zh' ? '按类别筛选' : 'Filter by category');
  }

  function translateCards() {
    document.querySelectorAll('#category-filters [data-category]').forEach(btn => {
      assignText(btn, categoryLabel(btn.dataset.category));
    });
    document.querySelectorAll('.word-card').forEach(el => {
      const a = el.getAttribute('href') || '';
      const id = new URL(a, document.baseURI).searchParams.get('id');
      const card = cardById(id);
      if (card) {
        assignText(el.querySelector('.word-card-top span:first-child'), categoryLabel(card.category));
        const no = el.querySelector('.word-card-top span:last-child');
        assignText(no, current === 'zh' ? `编号 ${String(card.id).padStart(2, '0')}` : `No. ${String(card.id).padStart(2, '0')}`);
        el.setAttribute('aria-label', current === 'zh' ? `收听 ${card.zh}（${card.en}）` : `Listen to ${card.en} (${card.zh})`);
      }
      assignHtml(el.querySelector('.word-card-footer > span:first-child'),
        (current === 'zh' ? '收听与探索' : 'Listen & explore') + ' <span aria-hidden="true">↗</span>');
    });
    const result = document.querySelector('#result-count');
    const grid = document.querySelector('#catalog-grid');
    if (result && grid) assignText(result, formatCount(grid.querySelectorAll('.word-card').length));
  }

  function translateDetail() {
    const target = document.querySelector('#word-detail');
    if (!target) return;
    const id = new URLSearchParams(location.search).get('id');
    const card = cardById(id);
    if (!card) {
      const missing = target.querySelector('.missing-page');
      if (missing) {
        assignText(missing.querySelector('h1'), current === 'zh' ? '找不到这张词卡。' : 'Word not found.');
        assignText(missing.querySelector('p'), current === 'zh' ? '我们没有找到对应的词卡。' : "We couldn't find that word card.");
        assignText(missing.querySelector('a'), current === 'zh' ? '返回词卡列表 →' : 'Back to word cards →');
      }
      return;
    }
    assignText(target.querySelector('.detail-back'), current === 'zh' ? '← 全部词卡' : '← All word cards');
    assignText(target.querySelector('.detail-copy > .eyebrow'),
      `${categoryLabel(card.category)} · ${current === 'zh' ? '第' : 'Card '}${String(card.id).padStart(2, '0')}${current === 'zh' ? '张' : ''}`);
    assignText(target.querySelector('.detail-description'), current === 'zh'
      ? '左侧图片来自我们的校园上海话词卡项目。你可以先听词语的上海话发音，再收听包含这个词语的例句。'
      : 'The card on the left comes from our campus word-card project. Listen to the Shanghainese pronunciation and then hear the word used in a sample sentence.');
    const labels = target.querySelectorAll('.audio-box label');
    assignHtml(labels[0], current === 'zh' ? '词语发音 <span>Word pronunciation</span>' : 'Word pronunciation <span>词语发音</span>');
    assignHtml(labels[1], current === 'zh' ? '例句发音 <span>Example sentence</span>' : 'Example sentence <span>例句发音</span>');
    const prev = target.querySelector('.detail-navigation > span:first-child a');
    const next = target.querySelector('.detail-navigation .detail-next a');
    [prev, next].forEach((anchor, index) => {
      if (!anchor) return;
      const linked = cardById(new URL(anchor.href).searchParams.get('id'));
      if (!linked) return;
      const title = current === 'zh' ? linked.zh : linked.en;
      assignText(anchor, index === 0 ? (current === 'zh' ? `← 上一张 · ${title}` : `← Previous · ${title}`)
        : (current === 'zh' ? `下一张 · ${title} →` : `Next · ${title} →`));
    });
  }

  function updateLinks() {
    // Carry the language in URLs as well as localStorage; preserves word.html?id=…
    document.querySelectorAll('a[href]').forEach(anchor => {
      if (!anchor.dataset.originalHref) anchor.dataset.originalHref = anchor.getAttribute('href');
      const raw = anchor.dataset.originalHref;
      if (!raw || raw.startsWith('#') || /^(https?:|mailto:|tel:|javascript:)/i.test(raw)) return;
      try {
        const url = new URL(raw, document.baseURI);
        if (url.origin !== new URL(document.baseURI).origin || !/\.html$/i.test(url.pathname)) return;
        url.searchParams.set('lang', current);
        const part = url.pathname.substring(url.pathname.lastIndexOf('/') + 1);
        const href = part + url.search + url.hash;
        if (anchor.getAttribute('href') !== href) anchor.setAttribute('href', href);
      } catch (_) { /* unsupported URL */ }
    });
  }

  function translate() {
    translateStatic();
    translateCards();
    translateDetail();
    updateLinks();
    const titles = {
      index: current === 'zh' ? '平和上海文化社' : 'Pinghe Shanghai Culture Club',
      cards: current === 'zh' ? '上海话词卡 | 平和上海文化社' : 'Word Cards | Shanghai Culture Club',
      about: current === 'zh' ? '我们的故事 | 平和上海文化社' : 'Our Story | Shanghai Culture Club',
      word: current === 'zh' ? '上海话词卡 | 平和上海文化社' : 'Listen to a Word | Shanghai Culture Club'
    };
    const detail = page === 'word' && cardById(new URLSearchParams(location.search).get('id'));
    document.title = detail ? `${current === 'zh' ? detail.zh : detail.en} · ${current === 'zh' ? detail.en : detail.zh} | ${current === 'zh' ? '平和上海文化社' : 'Shanghai Culture Club'}` : titles[page];
  }

  function setLanguage(lang) {
    if (!['zh', 'en'].includes(lang)) return;
    current = lang;
    try { localStorage.setItem('scc-language', lang); } catch (_) { /* fine */ }
    try {
      const url = new URL(location.href);
      url.searchParams.set('lang', lang);
      history.replaceState(null, '', url.pathname + url.search + url.hash);
    } catch (_) { /* file:// or private mode */ }
    translate();
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.language-switch [data-lang]').forEach(button => {
      button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });
    translate();
    // site.js renders first, then these listeners translate its updated cards.
    // This avoids observing/changing the DOM continuously.
    const search = document.querySelector('#card-search');
    if (search) search.addEventListener('input', () => { translateCards(); updateLinks(); });
    const filters = document.querySelector('#category-filters');
    if (filters) filters.addEventListener('click', () => { translateCards(); updateLinks(); });
  });
})();
