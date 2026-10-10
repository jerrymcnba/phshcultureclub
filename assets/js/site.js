(() => {
  'use strict';
  const cards = Array.isArray(window.SHANGHAI_CARDS) ? window.SHANGHAI_CARDS : [];
  const categories = window.CARD_CATEGORIES || {};
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const esc = (text) => String(text ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const asset = (card, filename) => card.folder + encodeURIComponent(filename);
  const detailUrl = card => `word.html?id=${encodeURIComponent(card.id)}`;

  function cardMarkup(card) {
    return `<a class="word-card" href="${detailUrl(card)}" aria-label="Listen to ${esc(card.en)} (${esc(card.zh)})">
      <div class="word-card-media"><img src="${esc(asset(card, card.image))}" alt="Illustrated word card: ${esc(card.zh)}" loading="lazy"></div>
      <div class="word-card-body">
        <div class="word-card-top"><span>${esc(categories[card.category] || 'Word card')}</span><span>No. ${String(card.id).padStart(2,'0')}</span></div>
        <div class="word-card-zh" lang="zh-Hans">${esc(card.zh)}</div>
        <div class="word-card-en">${esc(card.en)}</div>
        <div class="word-card-footer"><span>Listen & explore <span aria-hidden="true">↗</span></span><span class="play-circle" aria-hidden="true">▶</span></div>
      </div>
    </a>`;
  }

  function initNav() {
    const button = $('#menu-toggle');
    const nav = $('#primary-nav');
    if (button && nav) {
      button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!expanded));
        nav.classList.toggle('open', !expanded);
      });
    }
    document.querySelectorAll('[data-online-count]').forEach(el => { el.textContent = String(cards.length); });
  }

  function initHome() {
    const container = $('#featured-cards');
    if (container) {
      // Featured cards use examples with verified image/audio references.
      container.innerHTML = [8, 1, 23].map(id => cards.find(c => c.id === id)).filter(Boolean).map(cardMarkup).join('');
    }
  }

  function initCatalog() {
    const grid = $('#catalog-grid');
    if (!grid) return;
    const search = $('#card-search');
    const filters = $('#category-filters');
    const resultCount = $('#result-count');
    const empty = $('#empty-state');
    let active = 'all';

    filters.innerHTML = Object.entries(categories).map(([key, label]) =>
      `<button type="button" class="filter-button" data-category="${esc(key)}" aria-pressed="${key === 'all'}">${esc(label)}</button>`
    ).join('');

    function render() {
      const term = (search.value || '').trim().toLocaleLowerCase();
      const visible = cards.filter(card => {
        const categoryMatch = active === 'all' || card.category === active;
        const query = [card.zh, card.en, categories[card.category] || ''].join(' ').toLocaleLowerCase();
        return categoryMatch && (!term || query.includes(term));
      });
      grid.innerHTML = visible.map(cardMarkup).join('');
      grid.hidden = !visible.length;
      empty.hidden = Boolean(visible.length);
      resultCount.textContent = `${visible.length} of ${cards.length} audio word cards`;
    }

    filters.addEventListener('click', event => {
      const target = event.target.closest('button[data-category]');
      if (!target) return;
      active = target.dataset.category;
      filters.querySelectorAll('button').forEach(el => el.setAttribute('aria-pressed', String(el === target)));
      render();
    });
    search.addEventListener('input', render);
    render();
  }

  function initDetail() {
    const target = $('#word-detail');
    if (!target) return;
    const rawId = new URLSearchParams(window.location.search).get('id');
    const id = Number(rawId);
    const card = cards.find(entry => entry.id === id);
    if (!card) {
      document.title = 'Word not found | Shanghai Culture Club';
      target.innerHTML = `<div class="missing-page"><h1>Word not found.</h1><p>We couldn't find that word card.</p><a class="button button-primary" href="cards.html">Back to word cards →</a></div>`;
      const related = $('#related-section');
      if (related) related.hidden = true;
      return;
    }
    document.title = `${card.en} · ${card.zh} | Shanghai Culture Club`;
    const desc = $('#description-meta');
    if (desc) desc.setAttribute('content', `Listen to the Shanghainese pronunciation of ${card.en} (${card.zh}) and an example sentence.`);
    const index = cards.findIndex(entry => entry.id === card.id);
    const prev = cards[index - 1];
    const next = cards[index + 1];
    target.innerHTML = `<div class="detail-layout">
      <div class="detail-media"><img src="${esc(asset(card,card.image))}" alt="Original Shanghainese word card for ${esc(card.en)} (${esc(card.zh)})"></div>
      <div class="detail-copy">
        <a class="detail-back" href="cards.html">← All word cards</a>
        <div style="margin-top:32px" class="eyebrow">${esc(categories[card.category])} · Card ${String(card.id).padStart(2,'0')}</div>
        <h1 lang="zh-Hans">${esc(card.zh)}</h1>
        <div class="detail-english">${esc(card.en)}</div>
        <p class="detail-description">The card on the left comes from our campus word-card project. Listen to the Shanghainese pronunciation and then hear the word used in a sample sentence.</p>
        <div class="audio-box"><label>Word pronunciation <span>词语发音</span></label><audio controls preload="none"><source src="${esc(asset(card,card.word))}" type="audio/mp4">Your browser does not support audio.</audio></div>
        <div class="audio-box"><label>Example sentence <span>例句发音</span></label><audio controls preload="none"><source src="${esc(asset(card,card.example))}" type="audio/mp4">Your browser does not support audio.</audio></div>
        <div class="detail-navigation">
          <span>${prev ? `<a href="${detailUrl(prev)}">← Previous · ${esc(prev.en)}</a>` : ''}</span>
          <span class="detail-next">${next ? `<a href="${detailUrl(next)}">Next · ${esc(next.en)} →</a>` : ''}</span>
        </div>
      </div>
    </div>`;
    const related = cards.filter(entry => entry.category === card.category && entry.id !== card.id).slice(0, 3);
    const relatedGrid = $('#related-cards');
    if (relatedGrid && related.length) relatedGrid.innerHTML = related.map(cardMarkup).join('');
  }

  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initHome();
    initCatalog();
    initDetail();
  });
})();
