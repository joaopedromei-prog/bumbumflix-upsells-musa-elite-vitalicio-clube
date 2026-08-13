(function () {
  'use strict';

  var body = document.body;
  var pageKey = body.getAttribute('data-page-key') || 'upsell';
  var paytObject = body.getAttribute('data-payt-object') || '';
  var checkoutPending = !paytObject || /^PAYT_OBJECT_/.test(paytObject);
  var fontLoaded = false;

  function appendFontStylesheet() {
    if (fontLoaded) return;
    fontLoaded = true;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'assets/font.css';
    document.head.appendChild(link);
  }

  function configureCheckout() {
    var ctas = document.querySelectorAll('[payt_action="oneclick_buy"]');
    var installment = document.querySelector('[payt_element="installment"]');

    ctas.forEach(function (cta) {
      cta.setAttribute('data-object', paytObject);
      if (!checkoutPending) return;
      cta.setAttribute('data-checkout-pending', 'true');
      cta.setAttribute('aria-disabled', 'true');
      cta.addEventListener('click', function (event) {
        event.preventDefault();
        window.alert('Checkout protegido: substitua o placeholder ' + paytObject + ' pelo objeto Payt desta oferta antes de publicar.');
      });
    });

    if (installment) installment.setAttribute('data-object', paytObject);

    if (checkoutPending) {
      appendFontStylesheet();
      console.warn('[Upsell] Checkout bloqueado até configurar:', paytObject);
      return;
    }

    var payt = document.createElement('script');
    payt.src = 'assets/payt-oneclick.js';
    payt.async = false;
    payt.onload = appendFontStylesheet;
    payt.onerror = appendFontStylesheet;
    document.body.appendChild(payt);
  }

  function configureYear() {
    var year = document.getElementById('ano');
    if (year) year.textContent = String(new Date().getFullYear());
  }

  function configureAvailability() {
    var count = document.querySelector('.scarcity-count[data-countdown]');
    if (!count || !count.firstChild) return;

    var start = Number(count.getAttribute('data-start')) || 20;
    var minimum = Number(count.getAttribute('data-min')) || 3;
    var key = 'musaUpsell:' + pageKey + ':vagasRestantes';
    var remaining = start;

    try {
      var saved = parseInt(localStorage.getItem(key), 10);
      if (saved >= minimum && saved <= start) remaining = saved;
    } catch (error) {}

    function render() {
      count.firstChild.nodeValue = String(remaining);
    }

    function save() {
      try { localStorage.setItem(key, String(remaining)); } catch (error) {}
    }

    function schedule() {
      window.setTimeout(tick, 2400 + Math.random() * 1500);
    }

    function tick() {
      if (remaining <= minimum) return;
      remaining -= 1;
      render();
      save();
      schedule();
    }

    function startCounter() {
      if (count.getAttribute('data-running') === 'true' || remaining <= minimum) return;
      count.setAttribute('data-running', 'true');
      schedule();
    }

    render();

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        if (!entries.some(function (entry) { return entry.isIntersecting; })) return;
        observer.disconnect();
        startCounter();
      }, { threshold: 0.4 });
      observer.observe(count);
    } else {
      startCounter();
    }
  }

  function currentQuery() {
    if (window.location.search && window.location.search.length > 1) {
      try { localStorage.setItem('utm_query', window.location.search); } catch (error) {}
      return window.location.search;
    }
    try { return localStorage.getItem('utm_query') || ''; } catch (error) { return ''; }
  }

  function appendQuery(url, query) {
    if (!query || query.length < 2) return url;
    return url + (url.indexOf('?') >= 0 ? '&' : '?') + query.substring(1);
  }

  function configureDeclineLinks() {
    var query = currentQuery();
    document.querySelectorAll('a.decline').forEach(function (link) {
      var base = link.getAttribute('data-base-href') || link.getAttribute('href');
      link.setAttribute('href', appendQuery(base, query));
    });
  }

  function configureBackredirect() {
    var isLocal = window.location.protocol === 'file:' || /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname);
    if (isLocal || !window.history || !window.history.pushState) return;

    var backUrl = body.getAttribute('data-back-url') || '../down1/';
    var redirected = false;
    var pageReady = false;
    var lastClick = 0;

    window.setTimeout(function () { pageReady = true; }, 2000);

    function redirect() {
      if (redirected) return;
      redirected = true;
      window.location.replace(appendQuery(backUrl, currentQuery()));
    }

    for (var index = 0; index < 5; index += 1) {
      window.history.pushState({ br: index }, '', window.location.href);
    }

    document.addEventListener('click', function () { lastClick = Date.now(); }, true);
    window.addEventListener('popstate', function () {
      if (Date.now() - lastClick < 1500) return;
      redirect();
    });
    document.addEventListener('mouseleave', function (event) {
      if (pageReady && event.clientY <= 0 && !event.relatedTarget) redirect();
    });
    window.addEventListener('pageshow', function (event) {
      if (event.persisted) redirect();
    });
  }

  configureYear();
  configureAvailability();
  configureDeclineLinks();
  configureBackredirect();
  configureCheckout();
})();
