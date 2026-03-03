/* ============================================
   COPILOT TRAINING APP — Application Logic
   Navigation, Progress, Gemini AI Chat
   ============================================ */

(function () {
  'use strict';

  // ---- State ----
  const STORAGE_KEY = 'copilot-training-state';
  const API_KEY_STORAGE = 'copilot-training-gemini-key';
  const HARDCODED_API_KEY = 'AIzaSyD_-bgGsWUkciPkim6z4W-rm3qXbZ_-hik';

  const MODULES = [
    { id: 'prerequisites', label: 'Prerequisites' },
    { id: 'welcome', label: 'Welcome & Introduction' },
    { id: 'module1', label: 'Copilot in M365' },
    { id: 'module2', label: 'Writing Prompts' },
    { id: 'module3', label: 'Drafting Comms' },
    { id: 'module4', label: 'Meetings & Follow-Ups' },
    { id: 'wrapup', label: 'Wrap-Up & Resources' },
    { id: 'reference', label: 'Quick Reference' },
    { id: 'citations', label: 'Citations & Sources' },
  ];

  const TOUR_KEY = 'copilot-training-tour-done';
  const TOUR_STEPS = [
    { target: '.sidebar', position: 'right', title: 'Navigation', text: 'Use the sidebar to move between training modules. Your progress is saved automatically.' },
    { target: '.progress-container', position: 'bottom', title: 'Progress Tracker', text: 'Track your completion here. Mark each module complete as you finish it.' },
    { target: '.chat-toggle', position: 'left', title: 'AI Assistant', text: 'Click this chat bubble anytime to ask questions or get help from the AI training assistant.' },
    { target: '#settingsBtn', position: 'bottom', title: 'Settings', text: 'Configure your Gemini API key here to enable the AI assistant.' },
    { target: '.module-section.active', position: 'top', title: 'You\'re Ready!', text: 'Start by reviewing the prerequisites, then work through each module at your own pace. Enjoy!' }
  ];

  let state = loadState();
  let chatHistory = [];
  let isStreaming = false;

  // ---- Helpers ----
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (_) { /* ignore */ }
    return { currentModule: 'prerequisites', completed: [] };
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function getApiKey() {
    return localStorage.getItem(API_KEY_STORAGE) || HARDCODED_API_KEY;
  }

  function setApiKey(key) {
    localStorage.setItem(API_KEY_STORAGE, key.trim());
  }

  // ---- Navigation ----
  function navigateTo(moduleId) {
    state.currentModule = moduleId;
    saveState();

    // update sections
    document.querySelectorAll('.module-section').forEach(s => {
      s.classList.toggle('active', s.dataset.module === moduleId);
    });

    // update nav
    document.querySelectorAll('.nav-item').forEach(n => {
      n.classList.toggle('active', n.dataset.module === moduleId);
    });

    // scroll to top
    document.querySelector('.main-content').scrollTo({ top: 0, behavior: 'smooth' });

    // close sidebar on mobile
    closeSidebar();
    updateProgress();
  }

  function updateProgress() {
    const total = MODULES.length;
    const done = state.completed.length;
    const pct = Math.round((done / total) * 100);

    const fill = document.getElementById('progressFill');
    const text = document.getElementById('progressText');
    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = pct + '% complete';

    // update nav checkmarks
    document.querySelectorAll('.nav-item').forEach(n => {
      const mid = n.dataset.module;
      n.classList.toggle('completed', state.completed.includes(mid));
    });

    // update completion buttons
    document.querySelectorAll('.complete-module-btn').forEach(btn => {
      const mid = btn.dataset.module;
      const done = state.completed.includes(mid);
      btn.classList.toggle('completed', done);
      if (done) {
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Module Completed`;
      } else {
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg> Mark as Complete`;
      }
    });
  }

  function toggleComplete(moduleId) {
    if (state.completed.includes(moduleId)) return; // no un-complete
    state.completed.push(moduleId);
    saveState();
    updateProgress();
  }

  // ---- Sidebar ----
  function openSidebar() {
    document.querySelector('.sidebar').classList.add('open');
    document.querySelector('.sidebar-overlay').classList.add('active');
  }

  function closeSidebar() {
    document.querySelector('.sidebar').classList.remove('open');
    document.querySelector('.sidebar-overlay').classList.remove('active');
  }

  // ---- Copy to clipboard ----
  function setupCopyButtons() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const block = btn.closest('.prompt-block');
        const text = block ? block.querySelector('.prompt-text')?.textContent || block.textContent : '';
        navigator.clipboard.writeText(text.trim()).then(() => {
          btn.classList.add('copied');
          const origHTML = btn.innerHTML;
          btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copied`;
          setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = origHTML;
          }, 2000);
        });
      });
    });
  }

  // ---- Chat ----
  function toggleChat() {
    const panel = document.getElementById('chatPanel');
    const toggle = document.querySelector('.chat-toggle');
    const isOpen = panel.classList.toggle('open');
    toggle.classList.toggle('has-panel-open', isOpen);
  }

  function addChatMessage(role, content) {
    const container = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = `chat-msg ${role}`;
    div.innerHTML = formatChatContent(content);
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return div;
  }

  function formatChatContent(text) {
    // Simple markdown formatting
    let html = text
      .replace(/```([\s\S]*?)```/g, '<code>$1</code>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/^- (.+)$/gm, '<li>$1</li>')
      .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>');

    // Wrap consecutive <li> in <ul>
    html = html.replace(/((?:<li>.*?<\/li>\s*)+)/g, '<ul>$1</ul>');

    // Paragraphs
    html = html.split('\n\n').map(p => {
      p = p.trim();
      if (!p) return '';
      if (p.startsWith('<ul>') || p.startsWith('<code>') || p.startsWith('<h')) return p;
      return `<p>${p}</p>`;
    }).join('');

    return html || `<p>${text}</p>`;
  }

  function showTyping() {
    const container = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = 'typing-indicator';
    div.id = 'typingIndicator';
    div.innerHTML = '<span></span><span></span><span></span>';
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  function removeTyping() {
    const el = document.getElementById('typingIndicator');
    if (el) el.remove();
  }

  async function sendMessage() {
    if (isStreaming) return;

    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;

    const apiKey = getApiKey();
    if (!apiKey) {
      openApiKeyModal();
      return;
    }

    input.value = '';
    input.style.height = 'auto';
    addChatMessage('user', text);

    chatHistory.push({ role: 'user', parts: [{ text }] });

    isStreaming = true;
    document.getElementById('chatSend').disabled = true;
    showTyping();

    try {
      const currentModuleLabel = MODULES.find(m => m.id === state.currentModule)?.label || '';
      const systemPrompt = `You are a friendly, expert AI training assistant for a Microsoft 365 Copilot training course designed for Executive Assistants and Admins. Your role is to:

1. Answer questions about Microsoft Copilot features across Outlook, Word, Teams, and Excel
2. Help users write better prompts using the GCSE framework (Goal, Context, Source, Expectations)
3. Provide practical examples and tips tailored to Executive Assistants
4. Guide users through exercises in the training modules
5. Keep responses concise and actionable (under 200 words unless detail is needed)

The user is currently on: "${currentModuleLabel}"

Be encouraging, practical, and use examples. Format responses with markdown (bold, lists, code blocks for prompts). If the user shares a prompt they wrote, give specific feedback on how to improve it using the GCSE framework.`;

      const messages = [
        { role: 'user', parts: [{ text: systemPrompt }] },
        { role: 'model', parts: [{ text: 'I understand! I\'m your Copilot training assistant. How can I help you?' }] },
        ...chatHistory
      ];

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: messages,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 1024,
            },
          }),
        }
      );

      removeTyping();

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err?.error?.message || `API error ${response.status}`);
      }

      const data = await response.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I didn\'t get a response. Please try again.';

      chatHistory.push({ role: 'model', parts: [{ text: reply }] });
      addChatMessage('ai', reply);
    } catch (err) {
      removeTyping();
      addChatMessage('ai', `**Error:** ${err.message}\n\nPlease check your API key in settings.`);
    } finally {
      isStreaming = false;
      document.getElementById('chatSend').disabled = false;
    }
  }

  // ---- Exercise: Check with AI ----
  async function checkWithAI(textareaId, context) {
    const textarea = document.getElementById(textareaId);
    if (!textarea) return;
    const prompt = textarea.value.trim();
    if (!prompt) {
      textarea.focus();
      textarea.placeholder = 'Write your prompt here first, then click "Check with AI"...';
      return;
    }

    // Open chat and send
    const panel = document.getElementById('chatPanel');
    if (!panel.classList.contains('open')) toggleChat();

    const msg = `I'm working on an exercise and wrote this prompt. Can you give me feedback?\n\n**Context:** ${context}\n\n**My prompt:**\n\`\`\`\n${prompt}\n\`\`\`\n\nPlease rate it and suggest improvements using the GCSE framework.`;

    const input = document.getElementById('chatInput');
    input.value = msg;
    await sendMessage();
  }

  // ---- API Key Modal ----
  function openApiKeyModal() {
    const modal = document.getElementById('apiKeyModal');
    modal.classList.add('visible');
    const input = document.getElementById('apiKeyInput');
    input.value = getApiKey();
    input.focus();
  }

  function closeApiKeyModal() {
    document.getElementById('apiKeyModal').classList.remove('visible');
  }

  function saveApiKeyFromModal() {
    const input = document.getElementById('apiKeyInput');
    const key = input.value.trim();
    if (!key) {
      document.getElementById('apiKeyError').style.display = 'block';
      document.getElementById('apiKeyError').textContent = 'Please enter a valid API key.';
      return;
    }
    setApiKey(key);
    closeApiKeyModal();
  }

  // ---- Auto-resize textarea ----
  function autoResize(el) {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 120) + 'px';
  }

  // ---- Render Content ----
  function renderModules() {
    const container = document.getElementById('moduleContainer');
    if (!container || typeof MODULE_CONTENT === 'undefined') return;

    MODULES.forEach(mod => {
      const data = MODULE_CONTENT[mod.id];
      if (!data) return;
      const section = document.createElement('div');
      section.className = 'module-section';
      section.dataset.module = mod.id;
      section.innerHTML = `
        <div class="module-header">
          <div class="module-badge ${data.badge}">${data.badgeText}</div>
          <h1>${data.title}</h1>
          <p>${data.subtitle}</p>
          ${data.duration ? `<div class="module-duration"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${data.duration}</div>` : ''}
        </div>
        <div class="content">${data.html}</div>
        <button class="complete-module-btn" data-module="${mod.id}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg> Mark as Complete
        </button>
      `;
      container.appendChild(section);
    });
  }

  // ---- Init ----
  function init() {
    // Render module content dynamically
    renderModules();

    // Nav items
    document.querySelectorAll('.nav-item').forEach(n => {
      n.addEventListener('click', () => navigateTo(n.dataset.module));
    });

    // Hamburger
    const hamburger = document.getElementById('hamburger');
    if (hamburger) hamburger.addEventListener('click', openSidebar);

    // Sidebar overlay
    document.querySelector('.sidebar-overlay')?.addEventListener('click', closeSidebar);

    // Chat toggle
    document.querySelector('.chat-toggle')?.addEventListener('click', toggleChat);
    document.getElementById('chatClose')?.addEventListener('click', toggleChat);

    // Chat input
    const chatInput = document.getElementById('chatInput');
    chatInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
    chatInput?.addEventListener('input', () => autoResize(chatInput));

    document.getElementById('chatSend')?.addEventListener('click', sendMessage);

    // Complete module buttons
    document.querySelectorAll('.complete-module-btn').forEach(btn => {
      btn.addEventListener('click', () => toggleComplete(btn.dataset.module));
    });

    // API key modal
    document.getElementById('apiKeySave')?.addEventListener('click', saveApiKeyFromModal);
    document.getElementById('apiKeyCancel')?.addEventListener('click', closeApiKeyModal);
    document.getElementById('apiKeyInput')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') saveApiKeyFromModal();
    });

    // Settings button
    document.getElementById('settingsBtn')?.addEventListener('click', openApiKeyModal);

    // Copy buttons
    setupCopyButtons();

    // Exercise AI check buttons
    document.querySelectorAll('.btn-check-ai').forEach(btn => {
      btn.addEventListener('click', () => {
        checkWithAI(btn.dataset.textarea, btn.dataset.context);
      });
    });

    // Restore state
    navigateTo(state.currentModule);
    updateProgress();

    // Prerequisites checkbox logic
    setupPrerequisites();

    // Add welcome message to chat
    addChatMessage('ai', `**Welcome to your Copilot Training!** 👋\n\nI'm your AI training assistant powered by Google Gemini. I can help you:\n\n- **Understand** how Copilot works in M365 apps\n- **Practice** writing effective prompts\n- **Review** your exercise prompts and give feedback\n- **Answer** any questions about the training\n\nAsk me anything to get started!`);

    // Show tour on first visit, or API key modal
    if (!localStorage.getItem(TOUR_KEY)) {
      setTimeout(startTour, 600);
    } else if (!getApiKey()) {
      setTimeout(openApiKeyModal, 800);
    }
  }

  // ---- Prerequisites Validation ----
  function setupPrerequisites() {
    const checkboxes = document.querySelectorAll('.prereq-checkbox');
    const confirmBtn = document.getElementById('prereqConfirmBtn');
    if (!confirmBtn || checkboxes.length === 0) return;

    function validateChecks() {
      const allChecked = Array.from(checkboxes).every(cb => cb.checked);
      confirmBtn.disabled = !allChecked;
    }

    checkboxes.forEach(cb => cb.addEventListener('change', validateChecks));

    confirmBtn.addEventListener('click', () => {
      toggleComplete('prerequisites');
      navigateTo('welcome');
    });
  }

  // ---- Guided Tour ----
  let tourStep = 0;

  function startTour() {
    tourStep = 0;
    showTourStep();
  }

  function showTourStep() {
    // Remove existing tooltip
    document.querySelectorAll('.tour-overlay, .tour-tooltip').forEach(e => e.remove());

    if (tourStep >= TOUR_STEPS.length) {
      localStorage.setItem(TOUR_KEY, 'true');
      if (!getApiKey()) setTimeout(openApiKeyModal, 400);
      return;
    }

    const step = TOUR_STEPS[tourStep];
    const target = document.querySelector(step.target);

    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'tour-overlay';
    document.body.appendChild(overlay);

    // Tooltip
    const tooltip = document.createElement('div');
    tooltip.className = `tour-tooltip tour-${step.position}`;
    tooltip.innerHTML = `
      <div class="tour-step-counter">${tourStep + 1} of ${TOUR_STEPS.length}</div>
      <div class="tour-title">${step.title}</div>
      <div class="tour-text">${step.text}</div>
      <div class="tour-actions">
        ${tourStep > 0 ? '<button class="btn btn-secondary tour-prev">Back</button>' : ''}
        <button class="btn btn-primary tour-next">${tourStep === TOUR_STEPS.length - 1 ? 'Get Started' : 'Next'}</button>
        <button class="btn btn-secondary tour-skip" style="margin-left:auto">Skip Tour</button>
      </div>
    `;
    document.body.appendChild(tooltip);

    // Position tooltip near target
    if (target) {
      target.style.position = target.style.position || 'relative';
      target.style.zIndex = '1001';
      const rect = target.getBoundingClientRect();
      positionTooltip(tooltip, rect, step.position);
    } else {
      tooltip.style.top = '50%';
      tooltip.style.left = '50%';
      tooltip.style.transform = 'translate(-50%, -50%)';
    }

    // Event handlers
    tooltip.querySelector('.tour-next')?.addEventListener('click', () => {
      if (target) target.style.zIndex = '';
      tourStep++;
      showTourStep();
    });
    tooltip.querySelector('.tour-prev')?.addEventListener('click', () => {
      if (target) target.style.zIndex = '';
      tourStep--;
      showTourStep();
    });
    tooltip.querySelector('.tour-skip')?.addEventListener('click', () => {
      if (target) target.style.zIndex = '';
      document.querySelectorAll('.tour-overlay, .tour-tooltip').forEach(e => e.remove());
      localStorage.setItem(TOUR_KEY, 'true');
      if (!getApiKey()) setTimeout(openApiKeyModal, 400);
    });
    overlay.addEventListener('click', () => {
      if (target) target.style.zIndex = '';
      tourStep++;
      showTourStep();
    });
  }

  function positionTooltip(tooltip, rect, position) {
    const gap = 12;
    switch (position) {
      case 'right':
        tooltip.style.top = Math.max(80, rect.top) + 'px';
        tooltip.style.left = (rect.right + gap) + 'px';
        break;
      case 'bottom':
        tooltip.style.top = (rect.bottom + gap) + 'px';
        tooltip.style.left = Math.max(16, rect.left - 100) + 'px';
        break;
      case 'left':
        tooltip.style.top = (rect.top - 60) + 'px';
        tooltip.style.left = (rect.left - 340) + 'px';
        break;
      case 'top':
        tooltip.style.top = '50%';
        tooltip.style.left = '50%';
        tooltip.style.transform = 'translate(-50%, -50%)';
        break;
    }
  }

  // Make checkWithAI available globally for inline onclick
  window.checkWithAI = checkWithAI;

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
