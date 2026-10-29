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
      brandName: 'Shanghai Culture Club <small class="brand-sub">上海文化社</small>',
      menu: 'Menu ☰', navHome: 'Home', navCards: 'Word Cards', navStory: 'Our Story',
      homeTitle: 'Pinghe<br>Shanghai Culture Club',
      homeCards: 'Word Cards <span aria-hidden="true">↗</span>',
      homeStory: 'Our Story <span aria-hidden="true">→</span>',
      cardsEyebrow: 'The collection / 词语卡片',
      cardsTitle: 'Words from our everyday.',
      cardsIntro: 'What does a place sound like in Shanghainese? Explore the audio-enabled word cards from our campus project. Choose a topic or search in English or Chinese, then open a card to hear the word and a sample sentence.',
      searchLabel: 'Search word cards', empty1: 'No word cards match your search.',
      empty2: 'Try another word or select “All cards”.',
      storyEyebrow: 'The story behind our cards',
      storyTitle: 'More than a translation. <em>A connection.</em>',
      storyP1: "Growing up in Shanghai, it is easy to know a street without knowing every story or voice associated with it. Shanghainese is part of the city's everyday culture, yet not everyone growing up here speaks it.",
      storyP2: 'Our Shanghai Culture Club project started with something small: the places and objects we pass every day at school. We designed more than 100 Shanghainese word cards and placed them around campus, turning familiar surroundings into opportunities to notice the local language.',
      storyP3: 'We wanted to make the words visible. Then we asked how to make them audible, too.',
      storyBadge: 'A familiar place, in another voice.',
      storySection1Eyebrow: 'What we created',
      storySection1Title: 'A project made to be encountered.',
      storySection1Intro: 'The physical cards brought words into school life. This website preserves an audio-enabled selection so people can explore them beyond the campus.',
      process1Title: 'Choose everyday vocabulary',
      process1Text: 'Places like the library, gym, cafeteria, and stairwell make language learning relevant to where we actually spend our time.',
      process2Title: 'Design and share the cards',
      process2Text: "We paired written words and pronunciation guidance with illustrations, then displayed the cards around campus. Some word-card lettering was contributed by our school's calligraphy club.",
      process3Title: 'Add voices to the words',
      process3Text: 'This online collection brings together <span data-online-count>{{count}}</span> word cards with word and example-sentence recordings. Sound adds a dimension that text and phonetic notation alone cannot fully capture.',
      noteEyebrow: 'WHY IT MATTERS', noteTitle: 'Listen closely.',
      noteSub: 'Every voice carries a place.',
      storySection2Eyebrow: 'What we learned',
      storySection2Title: "A written word isn't the whole language.",
      storySection2P1: 'We could carefully arrange characters, explanations, and phonetic notation on a card. But the rhythm of speech, the shape of a sound, and the feeling of hearing someone use a familiar phrase were harder to capture on paper.',
      storySection2P2: 'Recordings are one attempt to close that gap—not to replace real conversation, but to encourage it. For us, learning about a city increasingly means listening to the people who give it life.',
      storyListen: 'Hear the words →', ctaEyebrow: 'Explore the project',
      ctaTitle: 'Start with one word.', ctaLink: 'Listen to “Library” / 图书馆 →',
      relatedEyebrow: 'Keep listening', relatedTitle: 'More to discover.',
      relatedLink: 'Browse all cards →',
      footerAbout: 'A student-led effort to make Shanghainese a little easier to see, hear, and share.',
      footerBottom: 'Shanghai Culture Club · A school culture project · Made with curiosity in Shanghai.'
    },
    zh: {
      brandName: '平和上海文化社 <small class="brand-sub">Shanghai Culture Club</small>',
      menu: '菜单 ☰', navHome: '首页', navCards: '上海话词卡', navStory: '我们的故事',
      homeTitle: '平和上海文化社',
      homeCards: '上海话词卡 <span aria-hidden="true">↗</span>',
      homeStory: '我们的故事 <span aria-hidden="true">→</span>',
      cardsEyebrow: '词语卡片 / Word Cards',
      cardsTitle: '从熟悉的校园，听见上海话。',
      cardsIntro: '图书馆、体育馆、食堂……这些熟悉的地方，用上海话怎么说？在这里，你可以浏览我们制作的校园词卡，按类别筛选或使用中文、英文搜索，并收听词语和例句的上海话录音。',
      searchLabel: '搜索词语卡片', empty1: '没有找到符合条件的词卡。',
      empty2: '试试其他关键词，或选择“全部词卡”。',
      storyEyebrow: '词卡背后的故事',
      storyTitle: '不只是翻译，<em>更是一种连接。</em>',
      storyP1: '我们在上海长大，熟悉这里的街道，却未必了解每条街道背后的故事与声音。上海话是这座城市日常文化的一部分，但并不是每个在上海长大的人都会说上海话。',
      storyP2: '平和上海文化社的项目，从校园里随处可见的场所和物品开始。我们设计了100多张上海话词卡，并将它们张贴在校园各处，希望让大家在熟悉的环境中重新注意到这门本地语言。',
      storyP3: '我们先尝试让上海话被看见，后来又开始思考：怎样才能让这些词语真正被听见？',
      storyBadge: '熟悉的地方，另一种声音。',
      storySection1Eyebrow: '我们做了什么',
      storySection1Title: '让语言融入每天的校园生活。',
      storySection1Intro: '纸质词卡把上海话带进校园，而这个网站则收录了一部分带有音频的词卡，让更多人即使不在学校，也能聆听和探索。',
      process1Title: '选择日常词汇',
      process1Text: '图书馆、体育馆、食堂、楼梯等校园场景，都是我们每天接触的事物，也是学习上海话的自然起点。',
      process2Title: '设计并展示词卡',
      process2Text: '我们把词语、注音提示和插画结合起来，将词卡张贴在校园各处。部分词卡的书法文字还得到了学校书法社同学的帮助。',
      process3Title: '为词语加入声音',
      process3Text: '这个网站目前收录了 <span data-online-count>{{count}}</span> 张词卡，并配有词语和例句录音。声音能够传达许多仅凭文字和注音难以完整表现的细节。',
      noteEyebrow: '为什么重要', noteTitle: '认真倾听。',
      noteSub: '每一种声音，都与一座城市相连。',
      storySection2Eyebrow: '我们的收获',
      storySection2Title: '写下一个词，并不等于记录了一门语言。',
      storySection2P1: '我们可以把汉字、释义和注音仔细排在卡片上，但说话的节奏、细微的发音，以及听见熟悉词句时的感受，却很难仅仅靠纸面呈现。',
      storySection2P2: '因此，我们尝试用录音补充词卡。这并不是为了取代真实的交流，而是希望让更多对话由此开始。对于我们来说，认识一座城市，也意味着倾听生活在这里的人。',
      storyListen: '去听听这些词语 →', ctaEyebrow: '探索这个项目',
      ctaTitle: '从一个词开始。', ctaLink: '听一听“图书馆” →',
      relatedEyebrow: '继续聆听', relatedTitle: '发现更多词语。',
      relatedLink: '查看全部词卡 →',
      footerAbout: '由学生发起的上海文化项目，希望让上海话更容易被看见、听见和分享。',
      footerBottom: '上海文化社 · 校园文化项目 · 创作于上海。'
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

  function translateStatic() {
    const dictionary = TEXT[current];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (!Object.prototype.hasOwnProperty.call(dictionary, key)) return;
      const html = dictionary[key].replaceAll('{{count}}', String(cards.length));
      assignHtml(el, html);
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
