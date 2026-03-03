/* Module content data - loaded by app.js */
const MODULE_CONTENT = {
  prerequisites: {
    badge: 'prereq', badgeText: 'Prerequisites', duration: '3 minutes',
    title: 'Before You Begin',
    subtitle: 'Confirm you have the required licenses and access to use Microsoft 365 Copilot',
    html: `
<h2>Licensing Requirements</h2>
<p>Microsoft 365 Copilot is a <strong>paid add-on</strong> that requires both a base Microsoft 365 subscription and a separate Copilot license. Please confirm the following before starting this training:</p>

<div class="card" style="padding:28px">
  <div class="card-title"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg> Required Checklist</div>
  <p style="margin-bottom:16px;color:var(--text-secondary)">Check each box to confirm you meet the requirements:</p>

  <label class="prereq-check" id="prereqCheck1"><input type="checkbox" class="prereq-checkbox"><span class="prereq-checkmark"></span><span><strong>Base Microsoft 365 Subscription</strong><br><span style="color:var(--text-muted);font-size:0.85rem">One of: M365 E3/E5, Business Basic/Standard/Premium, A3/A5, F1/F3, or Office 365 E1/E3/E5</span></span></label>

  <label class="prereq-check" id="prereqCheck2"><input type="checkbox" class="prereq-checkbox"><span class="prereq-checkmark"></span><span><strong>Microsoft 365 Copilot Add-On License</strong><br><span style="color:var(--text-muted);font-size:0.85rem">Purchased separately and assigned to your account by your IT admin</span></span></label>

  <label class="prereq-check" id="prereqCheck3"><input type="checkbox" class="prereq-checkbox"><span class="prereq-checkmark"></span><span><strong>Microsoft Entra ID (Azure AD) Account</strong><br><span style="color:var(--text-muted);font-size:0.85rem">Your organization's sign-in account for Microsoft 365</span></span></label>

  <label class="prereq-check" id="prereqCheck4"><input type="checkbox" class="prereq-checkbox"><span class="prereq-checkmark"></span><span><strong>Exchange Online Mailbox</strong><br><span style="color:var(--text-muted);font-size:0.85rem">Your primary mailbox must be hosted in Exchange Online (not on-premises)</span></span></label>

  <label class="prereq-check" id="prereqCheck5"><input type="checkbox" class="prereq-checkbox"><span class="prereq-checkmark"></span><span><strong>Copilot Enabled by IT Admin</strong><br><span style="color:var(--text-muted);font-size:0.85rem">Your organization's admin must have enabled Copilot features for your account</span></span></label>
</div>

<button class="btn btn-primary prereq-confirm-btn" id="prereqConfirmBtn" disabled>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg>
  Confirm & Start Training
</button>

<div class="callout important" style="margin-top:24px">
  <div class="callout-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
  <div><strong>Don't have Copilot yet?</strong> Ask your IT administrator about licensing, or visit:
    <ul style="margin-top:8px;padding-left:18px">
      <li><a href="https://www.microsoft.com/microsoft-365-copilot" target="_blank">Microsoft 365 Copilot Pricing & Plans</a></li>
      <li><a href="https://learn.microsoft.com/copilot/microsoft-365/microsoft-365-copilot-licensing" target="_blank">License Options Guide</a></li>
      <li><a href="https://learn.microsoft.com/copilot/microsoft-365/microsoft-365-copilot-minimum-requirements" target="_blank">Minimum Requirements</a></li>
    </ul>
  </div>
</div>

<h2>Eligible Base Subscriptions</h2>
<div class="table-wrapper"><table>
<tr><th>Plan</th><th>Editions</th></tr>
<tr><td><strong>Microsoft 365 Enterprise</strong></td><td>E3, E5</td></tr>
<tr><td><strong>Microsoft 365 Business</strong></td><td>Basic, Standard, Premium</td></tr>
<tr><td><strong>Microsoft 365 Education</strong></td><td>A3, A5 (Faculty & Students)</td></tr>
<tr><td><strong>Microsoft 365 Frontline</strong></td><td>F1, F3</td></tr>
<tr><td><strong>Office 365</strong></td><td>E1, E3, E5, A1, A3, A5, F3</td></tr>
</table></div>
`},

  welcome: {
    badge: 'intro', badgeText: 'Introduction', duration: '5 minutes',
    title: 'Welcome & Introduction',
    subtitle: 'What is Microsoft 365 Copilot and how does it work?',
    html: `
<h2>What Is Microsoft 365 Copilot?</h2>
<p>Microsoft 365 Copilot is an AI-powered productivity assistant embedded directly into the Microsoft 365 apps you already use &mdash; Outlook, Word, Teams, Excel, PowerPoint, and more. It combines large language models (LLMs) with <strong>your</strong> organizational data through Microsoft Graph.</p>
<p><strong>Think of Copilot as your AI-powered executive assistant:</strong> it can draft emails, summarize meeting notes, organize data, create documents, and anticipate what you need next &mdash; all without leaving the apps you already know.</p>

<h2>How Does It Work?</h2>
<div class="flow-diagram">
  <div class="flow-step"><div class="flow-number">1</div><div><strong>You</strong> write a prompt in any M365 app</div></div>
  <div class="flow-arrow">â†“</div>
  <div class="flow-step"><div class="flow-number">2</div><div><strong>Microsoft Graph</strong> connects your emails, chats, files, calendar, meetings, and contacts</div></div>
  <div class="flow-arrow">â†“</div>
  <div class="flow-step"><div class="flow-number">3</div><div><strong>Large Language Model</strong> understands context, generates content, summarizes, and reasons about your data</div></div>
  <div class="flow-arrow">â†“</div>
  <div class="flow-step"><div class="flow-number">4</div><div><strong>Copilot Response</strong> &mdash; draft email, summary, action items, document, or formula delivered in-app</div></div>
</div>

<div class="callout important">
  <div class="callout-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
  <div><strong>Key Principle:</strong> Copilot only sees what you can see. It respects all existing permissions &mdash; your data stays secure.</div>
</div>
`},

  module1: {
    badge: 'm1', badgeText: 'Module 1', duration: '12 minutes',
    title: 'Copilot Across Your M365 Toolkit',
    subtitle: 'Where Copilot lives in Outlook, Word, Teams, and Excel',
    html: `
<h2>Where Copilot Lives</h2>
<p>Copilot isn't a separate app &mdash; it's woven into the tools you already use every day.</p>
<img src="images/copilot-overview.jpg" class="tutorial-image" alt="Microsoft 365 Copilot integrated across Outlook, Word, Teams, and Excel">
<div class="media-caption">Copilot is embedded directly into the M365 apps you use daily</div>
<div class="table-wrapper"><table>
<tr><th>App</th><th>Where to Find Copilot</th><th>What It Does</th></tr>
<tr><td><strong>Outlook</strong></td><td>Compose toolbar + Side panel</td><td>Draft emails, summarize threads, coaching tips</td></tr>
<tr><td><strong>Word</strong></td><td>Ribbon + Side chat panel</td><td>Draft documents, rewrite text, summarize</td></tr>
<tr><td><strong>Teams</strong></td><td>Meeting panel + Chat sidebar</td><td>Meeting recaps, chat summaries, action items</td></tr>
<tr><td><strong>Excel</strong></td><td>Ribbon + Side panel</td><td>Generate formulas, analyze data, create charts</td></tr>
<tr><td><strong>PowerPoint</strong></td><td>Ribbon + Side panel</td><td>Create presentations, add slides, summarize</td></tr>
</table></div>

<h2>Copilot in Outlook &mdash; Your Inbox Co-Pilot</h2>
<div class="table-wrapper"><table>
<tr><th>Feature</th><th>What It Does</th><th>How to Access</th></tr>
<tr><td><strong>Draft Email</strong></td><td>Generate a full email from a prompt</td><td>Click <strong>Draft with Copilot</strong> in compose window</td></tr>
<tr><td><strong>Summarize Thread</strong></td><td>Concise summary of long email chains</td><td>Open thread â†’ <strong>Summary by Copilot</strong></td></tr>
<tr><td><strong>Coaching Tips</strong></td><td>Suggestions on tone, clarity, effectiveness</td><td>Write draft â†’ <strong>Coaching by Copilot</strong></td></tr>
<tr><td><strong>Reply Suggestions</strong></td><td>Generate contextual replies</td><td>Open email â†’ Copilot suggests replies</td></tr>
</table></div>
<img src="images/outlook-copilot.jpg" class="tutorial-image" alt="Copilot drafting an email in Microsoft Outlook">
<div class="media-caption">Copilot in Outlook &mdash; Draft emails, summarize threads, and get coaching tips</div>
<div class="callout tip"><div class="callout-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><div><strong>Pro Tip:</strong> When Copilot summarizes an email thread, click the citation numbers to jump to the exact part of the conversation.</div></div>

<h2>Copilot in Word &mdash; Your Writing Partner</h2>
<div class="table-wrapper"><table>
<tr><th>Feature</th><th>What It Does</th><th>How to Access</th></tr>
<tr><td><strong>Draft</strong></td><td>Generate text from a prompt</td><td><strong>Draft with Copilot</strong> in ribbon</td></tr>
<tr><td><strong>Rewrite</strong></td><td>Alternative versions with different tone</td><td>Select text â†’ <strong>Rewrite with Copilot</strong></td></tr>
<tr><td><strong>Chat</strong></td><td>Ask questions about your document</td><td><strong>Copilot</strong> panel on the right</td></tr>
<tr><td><strong>Reference Files</strong></td><td>Ground draft in up to 10 files</td><td>Use <strong>/</strong> to reference files</td></tr>
</table></div>
<img src="images/word-copilot.jpg" class="tutorial-image" alt="Copilot Draft with Copilot panel in Microsoft Word">
<div class="media-caption">Copilot in Word &mdash; Draft documents, rewrite text, and reference other files</div>

<h2>Copilot in Teams &mdash; Your Meeting Memory</h2>
<div class="table-wrapper"><table>
<tr><th>Feature</th><th>What It Does</th><th>How to Access</th></tr>
<tr><td><strong>Meeting Recap</strong></td><td>Summary, action items, follow-ups</td><td>Meeting â†’ <strong>Recap</strong> tab</td></tr>
<tr><td><strong>Live Copilot</strong></td><td>Ask questions during a meeting</td><td><strong>Copilot</strong> button during meeting</td></tr>
<tr><td><strong>Chat Summary</strong></td><td>Summarize up to 30 days of messages</td><td>Chat â†’ <strong>Copilot</strong> side panel</td></tr>
</table></div>
<img src="images/teams-recap.jpg" class="tutorial-image" alt="Copilot meeting recap in Microsoft Teams">
<div class="media-caption">Copilot in Teams &mdash; Meeting recaps with summaries, decisions, and action items</div>
<div class="callout warning"><div class="callout-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div><div><strong>Important:</strong> Transcription or recording must be enabled for meeting recaps. Always turn it on at the start!</div></div>

<h2>Copilot in Excel &mdash; Your Data Analyst</h2>
<div class="table-wrapper"><table>
<tr><th>Feature</th><th>What It Does</th></tr>
<tr><td><strong>Generate Formulas</strong></td><td>Create formulas from plain English</td></tr>
<tr><td><strong>Analyze Data</strong></td><td>Get insights, trends, and outliers</td></tr>
<tr><td><strong>Create Charts</strong></td><td>Generate visualizations from your data</td></tr>
<tr><td><strong>Format & Highlight</strong></td><td>Sort, filter, conditional formatting</td></tr>
</table></div>
<img src="images/excel-copilot.jpg" class="tutorial-image" alt="Copilot analyzing data in Microsoft Excel">
<div class="media-caption">Copilot in Excel &mdash; Generate formulas, analyze data, and create charts</div>
<div class="callout tip"><div class="callout-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><div><strong>Pro Tip:</strong> Your data needs to be in a <strong>formatted Excel Table</strong> (Ctrl+T) for Copilot to work best.</div></div>

<div class="exercise-block">
  <div class="exercise-title"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Exercise 1: Explore Copilot in Your Apps</div>
  <p>Open each app and locate the Copilot icon or button:</p>
  <ol>
    <li><strong>Outlook</strong> &mdash; Open a new email â†’ find "Draft with Copilot"</li>
    <li><strong>Word</strong> &mdash; Open a blank document â†’ look for the Copilot prompt</li>
    <li><strong>Teams</strong> &mdash; Open a recent chat â†’ find the Copilot side panel</li>
    <li><strong>Excel</strong> &mdash; Open a spreadsheet â†’ find the Copilot button in ribbon</li>
  </ol>
</div>

<div class="media-section">
  <div class="media-section-title">&#128250; Watch: Copilot Across Microsoft 365</div>
  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/MuNor5jjhVI" title="How to Use Copilot in Microsoft 365" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div class="media-caption">Full tutorial showing Copilot in action across Word, Outlook, Teams, and Excel</div>
</div>
`},

  module2: {
    badge: 'm2', badgeText: 'Module 2', duration: '15 minutes',
    title: 'Writing Prompts That Work',
    subtitle: 'The GCSE Framework and prompt patterns for Executive Assistants',
    html: `
<h2>The Secret: Great Prompts = Great Results</h2>
<p>The quality of Copilot's response depends directly on the quality of your prompt. Think of it like giving instructions to a brilliant new team member &mdash; the more context you provide, the better the output.</p>

<h2>The GCSE Framework</h2>
<p>Every effective Copilot prompt should include some combination of these four elements:</p>
<div class="flow-diagram">
  <div class="flow-step"><div class="flow-number" style="background:linear-gradient(135deg,#8b5cf6,#8b5cf6)">G</div><div><span class="kw-purple">Goal</span> &mdash; What do you want Copilot to do? "Summarize..." "Draft..." "List..."</div></div>
  <div class="flow-step"><div class="flow-number" style="background:linear-gradient(135deg,#3b82f6,#3b82f6)">C</div><div><span class="kw-blue">Context</span> &mdash; Why do you need it? What's the situation or audience?</div></div>
  <div class="flow-step"><div class="flow-number" style="background:linear-gradient(135deg,#14b8a6,#14b8a6)">S</div><div><span class="kw-teal">Source</span> &mdash; What data should Copilot use? Files, emails, meetings</div></div>
  <div class="flow-step"><div class="flow-number" style="background:linear-gradient(135deg,#ec4899,#ec4899)">E</div><div><span class="kw-pink">Expectations</span> &mdash; What format or tone do you want? Table, bullets, formal</div></div>
</div>
<img src="images/gcse-framework.jpg" class="tutorial-image" alt="GCSE Framework: Goal, Context, Source, Expectations">
<div class="media-caption">The GCSE Framework &mdash; Use all four elements for the most effective Copilot prompts</div>

<h2>Weak vs. Strong Prompts</h2>
<div class="table-wrapper"><table>
<tr><th></th><th>Weak Prompt</th><th>Strong Prompt</th></tr>
<tr><td><strong>Email</strong></td><td>"Write an email"</td><td>"Draft a formal email to the VP of Sales thanking them for yesterday's Q3 review. Mention 3 action items and suggest a follow-up Tuesday at 2pm. Under 150 words."</td></tr>
<tr><td><strong>Summary</strong></td><td>"Summarize this"</td><td>"Summarize this email thread into 3 bullets: the main request, the deadline, and who is responsible."</td></tr>
<tr><td><strong>Meeting</strong></td><td>"What happened?"</td><td>"List the top 5 action items from today's budget meeting, including owners and deadlines."</td></tr>
</table></div>

<h2>Choosing the Right Verb</h2>
<div class="table-wrapper"><table>
<tr><th>Purpose</th><th>Best Verbs</th></tr>
<tr><td>High-level info</td><td>Explain, Describe, Create a guide</td></tr>
<tr><td>Actionable output</td><td>Draft, Generate, Create, Compose</td></tr>
<tr><td>Finding info</td><td>Find, List, Retrieve, Summarize</td></tr>
<tr><td>Organizing</td><td>Sort, Group, Categorize, Prioritize</td></tr>
<tr><td>Editing</td><td>Rewrite, Shorten, Simplify, Adjust tone</td></tr>
<tr><td>Analyzing</td><td>Analyze, Compare, Calculate, Highlight</td></tr>
</table></div>

<h2>Prompt Patterns for Executive Assistants</h2>
<h3>Pattern 1: Organizing Meetings</h3>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Create a meeting agenda for a 60-minute quarterly business review with the leadership team. Include sections for: financial review (20 min), operational updates (15 min), strategic initiatives (15 min), and Q&A (10 min). Format as a table with columns for Topic, Presenter, Duration, and Notes.</span></div>

<h3>Pattern 2: Managing Email Overload</h3>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Summarize the 15 most recent emails from this week. For each: who it's from, the main request, urgency (high/medium/low), and whether a response is needed. Present as a prioritized table.</span></div>

<h3>Pattern 3: Action Item Tracking</h3>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Review the transcript from today's project standup and create a table of all action items. Include columns for: Task, Owner, Deadline, and Status. Sort by deadline, most urgent first.</span></div>

<h2>The Iterate Technique</h2>
<p>You don't need the perfect prompt on the first try. Build iteratively:</p>
<ol>
  <li><strong>Start broad:</strong> "Draft an email to the team about the upcoming retreat."</li>
  <li><strong>Refine:</strong> "Make it more formal and add the specific dates &mdash; March 15-17."</li>
  <li><strong>Adjust:</strong> "Shorten it to under 100 words and add a bullet list of what to bring."</li>
  <li><strong>Finalize:</strong> "Change the greeting to 'Dear Team' and add my signature block."</li>
</ol>
<div class="callout tip"><div class="callout-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><div><strong>Pro Tip:</strong> Each follow-up prompt builds on the previous context. Copilot remembers the entire conversation.</div></div>

<div class="exercise-block">
  <div class="exercise-title"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Exercise 2: Write Your First Prompt</div>
  <p><strong>Scenario:</strong> You need to send an email postponing tomorrow's 1:1 with your executive because they have a conflict.</p>
  <p>Write your prompt using the GCSE framework:</p>
  <textarea id="exercise2" class="exercise-textarea" placeholder="Type your prompt here using Goal, Context, Source, and Expectations..."></textarea>
  <div class="exercise-actions">
    <button class="btn btn-primary btn-check-ai" data-textarea="exercise2" data-context="Writing an email to postpone a 1:1 meeting due to an executive's scheduling conflict">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/></svg>
      Check with AI
    </button>
  </div>
</div>

<div class="media-section">
  <div class="media-section-title">&#128250; Watch: Writing Effective Copilot Prompts</div>
  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/JbOJliF-Cn4" title="How to Write Effective Prompts for Microsoft Copilot" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div class="media-caption">Comprehensive guide to writing prompts that get great results from Copilot</div>
</div>
`},

  module3: {
    badge: 'm3', badgeText: 'Module 3', duration: '13 minutes',
    title: 'Drafting Professional Communications',
    subtitle: 'Create polished emails and documents in seconds',
    html: `
<h2>Drafting Emails in Outlook</h2>
<h3>Step-by-Step: Draft a New Email</h3>
<ol>
  <li>Open <strong>Outlook</strong> â†’ click <strong>New Mail</strong></li>
  <li>Click the <strong>Copilot icon</strong> in the compose toolbar</li>
  <li>Type your prompt describing what you want</li>
  <li>Copilot generates a draft</li>
  <li><strong>Fine-tune:</strong> Adjust <strong>tone</strong> (formal, casual) and <strong>length</strong> (short, medium, long)</li>
  <li>Review, edit, and send</li>
</ol>

<h3>Step-by-Step: Get Coaching on a Draft</h3>
<ol>
  <li>Write your email draft normally</li>
  <li>Click <strong>Coaching by Copilot</strong></li>
  <li>Copilot provides feedback on <strong>Tone</strong>, <strong>Clarity</strong>, <strong>Sentiment</strong>, and overall assessment</li>
</ol>

<h2>Ready-to-Use Email Prompts</h2>
<h3>Meeting Follow-Up</h3>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Draft a professional follow-up email to attendees of today's marketing strategy meeting. Summarize the 3 key decisions made and list the action items with owners. Use a friendly but professional tone.</span></div>

<h3>Executive Update</h3>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Write a concise executive briefing email to the CEO summarizing this week's key accomplishments. Keep it to 5 bullet points, prioritized by business impact. Formal tone.</span></div>

<h3>Event Invitation</h3>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Create an engaging email inviting the department to a team-building lunch next Friday at noon. Mention lunch is provided and ask for dietary restrictions by Wednesday. Warm, enthusiastic tone.</span></div>

<h2>Creating Documents in Word</h2>
<h3>Step-by-Step: Draft a New Document</h3>
<ol>
  <li>Open a <strong>blank Word document</strong></li>
  <li>Copilot prompts: "What would you like to draft?"</li>
  <li>Type your prompt &mdash; be specific about <strong>purpose</strong>, <strong>audience</strong>, and <strong>structure</strong></li>
  <li>Copilot generates the document</li>
  <li>Edit or ask follow-up questions in the chat panel</li>
</ol>
<div class="callout tip"><div class="callout-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><div><strong>Pro Tip:</strong> Type <strong>/</strong> in the prompt box to reference up to 10 existing files, emails, or meetings as source material.</div></div>

<h3>Meeting Agenda Prompt</h3>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Create a detailed meeting agenda for a 90-minute board meeting. Include: opening remarks (5 min), financial review (25 min), strategic plan update (25 min), committee reports (20 min), new business (10 min), and adjournment (5 min). Format with times and presenters.</span></div>

<h3>Travel Itinerary Prompt</h3>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Draft a detailed executive travel itinerary for a 3-day trip to New York City, March 10-12. Include: flights, hotel, ground transportation, meeting locations with addresses, and dinner reservations. Format as a day-by-day table.</span></div>

<div class="exercise-block">
  <div class="exercise-title"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Exercise 3: Draft & Refine a Communication</div>
  <p>Write a prompt to draft an email that <strong>reschedules next week's team meeting from Tuesday to Thursday</strong> and includes the updated agenda:</p>
  <textarea id="exercise3" class="exercise-textarea" placeholder="Draft your rescheduling email prompt here..."></textarea>
  <div class="exercise-actions">
    <button class="btn btn-primary btn-check-ai" data-textarea="exercise3" data-context="Drafting a rescheduling email for a team meeting moved from Tuesday to Thursday with an updated agenda">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/></svg>
      Check with AI
    </button>
  </div>
</div>

<div class="media-section">
  <div class="media-section-title">&#128250; Watch: Copilot in Outlook & Word</div>
  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/RY1NRd-aoyI" title="How to Use Copilot for Professional Communications" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div class="media-caption">See Copilot draft emails, rewrite documents, and refine professional communications</div>
</div>
`},

  module4: {
    badge: 'm4', badgeText: 'Module 4', duration: '12 minutes',
    title: 'Summarizing Meetings & Follow-Ups',
    subtitle: 'Turn meetings into action with AI-powered recaps',
    html: `
<h2>Why This Matters</h2>
<p>Professionals spend an average of <strong>11 hours per week</strong> in meetings. For Executive Assistants, the post-meeting work &mdash; summarizing decisions, distributing action items, scheduling follow-ups &mdash; can take as long as the meeting itself. Copilot changes this.</p>

<h2>Meeting Recaps in Teams</h2>
<h3>Before the Meeting: Enable Transcription</h3>
<div class="callout warning"><div class="callout-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div><div><strong>Critical Step:</strong> Copilot needs a transcript. Always start transcription or recording before the meeting begins.</div></div>

<h3>During the Meeting: Ask Copilot in Real-Time</h3>
<div class="table-wrapper"><table>
<tr><th>What You Need</th><th>What to Ask Copilot</th></tr>
<tr><td>Quick catch-up</td><td>"What has been discussed so far?"</td></tr>
<tr><td>Decisions made</td><td>"What decisions have been made?"</td></tr>
<tr><td>Action items</td><td>"What action items have been assigned?"</td></tr>
<tr><td>Specific topic</td><td>"What did Sarah say about the budget?"</td></tr>
<tr><td>Disagreements</td><td>"Where do the participants disagree?"</td></tr>
</table></div>

<h3>After the Meeting: Access the Recap</h3>
<ol>
  <li>Go to your <strong>Teams Calendar</strong> â†’ click on the completed meeting</li>
  <li>Open the <strong>Recap</strong> tab</li>
  <li>You'll see: <strong>Summary</strong>, <strong>Action Items</strong>, <strong>Mentions</strong>, <strong>Topics</strong>, and <strong>Transcript</strong></li>
</ol>
<img src="images/teams-recap.jpg" class="tutorial-image" alt="Microsoft Teams meeting recap with Copilot">
<div class="media-caption">The Recap tab in Teams shows Copilot's AI-generated summary, action items, and key topics</div>

<h2>Creating Follow-Up Emails</h2>
<h3>From Meeting Recap</h3>
<ol>
  <li>Open the meeting <strong>Recap</strong> in Teams</li>
  <li>Click <strong>"Draft email"</strong> under Post-meeting actions</li>
  <li>Copilot generates a follow-up with summary, decisions, action items, next steps</li>
  <li>Review, edit, and send</li>
</ol>

<h3>Using Copilot Chat</h3>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Based on today's Project Alpha standup meeting, create a follow-up email to all attendees. Include:
1. A 3-sentence summary of what was discussed
2. A table of action items (Task | Owner | Deadline)
3. The date and time of our next meeting
Use a professional but friendly tone. Keep it under 200 words.</span></div>

<h2>Summarizing Email Threads in Outlook</h2>
<ol>
  <li>Open the email thread in <strong>Outlook</strong></li>
  <li>Look for the <strong>"Summary by Copilot"</strong> banner at the top</li>
  <li>Click it to get key points, who said what (with citations), and action items</li>
</ol>

<h2>Chat Summaries in Teams</h2>
<div class="table-wrapper"><table>
<tr><th>Scenario</th><th>What to Ask</th></tr>
<tr><td>General catch-up</td><td>"Summarize the key points from this chat over the past week."</td></tr>
<tr><td>Decisions only</td><td>"What decisions were made in this chat?"</td></tr>
<tr><td>Your mentions</td><td>"When was I mentioned and what was the context?"</td></tr>
<tr><td>Action items</td><td>"List any tasks assigned in this conversation."</td></tr>
</table></div>

<div class="exercise-block">
  <div class="exercise-title"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Exercise 4: Create a Meeting Follow-Up</div>
  <p>Write a Copilot prompt to create follow-up notes for a 30-minute team meeting about planning the company holiday party:</p>
  <textarea id="exercise4" class="exercise-textarea" placeholder="Write a prompt asking Copilot to create meeting follow-up notes..."></textarea>
  <div class="exercise-actions">
    <button class="btn btn-primary btn-check-ai" data-textarea="exercise4" data-context="Creating follow-up notes from a holiday party planning meeting, including summary, action items with owners, next meeting date, and budget recap">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/></svg>
      Check with AI
    </button>
  </div>
</div>

<div class="media-section">
  <div class="media-section-title">&#128250; Watch: Copilot in Teams Meetings</div>
  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/lipUo_6WuNM" title="How to Use Copilot in Microsoft Teams Meetings" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div class="media-caption">Complete tutorial on using Copilot for meeting recaps, action items, and follow-ups in Teams</div>
</div>
`},

  wrapup: {
    badge: 'wrap', badgeText: 'Wrap-Up', duration: '3 minutes',
    title: 'Wrap-Up & Resources',
    subtitle: 'Key takeaways and next steps for your Copilot journey',
    html: `
<h2>What You Learned Today</h2>
<div class="table-wrapper"><table>
<tr><th>Module</th><th>Key Takeaway</th></tr>
<tr><td><strong>Module 1</strong></td><td>Copilot is built into Outlook, Word, Teams, and Excel &mdash; context-aware in each app</td></tr>
<tr><td><strong>Module 2</strong></td><td>Great prompts use the GCSE framework: Goal, Context, Source, Expectations</td></tr>
<tr><td><strong>Module 3</strong></td><td>You can draft and refine professional communications in seconds</td></tr>
<tr><td><strong>Module 4</strong></td><td>Meeting recaps and follow-up notes can be generated automatically</td></tr>
</table></div>

<h2>5 Habits to Build Starting Today</h2>
<ol>
  <li><strong>Start every meeting with transcription on</strong> &mdash; enables Copilot meeting recaps</li>
  <li><strong>Use Coaching before sending important emails</strong> &mdash; let Copilot check tone and clarity</li>
  <li><strong>Reference files when drafting</strong> &mdash; use "/" to pull in context</li>
  <li><strong>Iterate your prompts</strong> &mdash; don't stop at the first draft</li>
  <li><strong>Explore the Prompt Gallery</strong> &mdash; hundreds of ready-to-use prompts at <a href="https://copilot.cloud.microsoft/prompts" target="_blank">copilot.cloud.microsoft/prompts</a></li>
</ol>

<h2>Continue Learning</h2>
<div class="table-wrapper"><table>
<tr><th>Resource</th><th>Link</th></tr>
<tr><td>Write Effective Prompts</td><td><a href="https://learn.microsoft.com/training/modules/write-effective-prompts-do-more-prompting/" target="_blank">Microsoft Learn</a></td></tr>
<tr><td>Edit & Transform Content</td><td><a href="https://learn.microsoft.com/training/modules/edit-transform-content-with-microsoft-copilot-microsoft-365/" target="_blank">Microsoft Learn</a></td></tr>
<tr><td>Copilot in Excel</td><td><a href="https://learn.microsoft.com/training/modules/uncover-new-data-insights-ai/" target="_blank">Microsoft Learn</a></td></tr>
<tr><td>M365 Copilot Overview</td><td><a href="https://learn.microsoft.com/copilot/microsoft-365/microsoft-365-copilot-overview" target="_blank">Microsoft Learn</a></td></tr>
</table></div>

<div class="callout success"><div class="callout-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div><strong>Congratulations!</strong> You've completed the Microsoft Copilot for Executive Assistants training. Start using these prompts today &mdash; the more you practice, the better your results will be. <em>Copilot amplifies YOUR expertise. You bring the judgment; Copilot brings the speed.</em></div></div>
`},

  reference: {
    badge: 'ref', badgeText: 'Reference', duration: '',
    title: '25 Ready-to-Use Prompts',
    subtitle: 'Copy-paste these prompts directly into Copilot',
    html: `
<h2>Outlook &mdash; Email & Scheduling</h2>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Draft a professional email to [recipient] thanking them for [event/meeting]. Mention [specific detail]. Keep it concise and warm.</span></div>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Summarize this email thread in 3 bullet points: the main request, deadline, and who needs to act.</span></div>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Write an email announcing the company picnic is moved to June 15 due to weather. Include new venue address and ask for RSVPs by June 10.</span></div>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Create a polite decline email for a vendor meeting. Suggest an alternative date next week and ask for their proposal document in advance.</span></div>

<h2>Teams &mdash; Meetings & Chats</h2>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Summarize the key decisions from this meeting.</span></div>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">What action items were assigned and to whom?</span></div>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Create a follow-up email from this meeting recap with a summary, action items table, and next meeting date.</span></div>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">What have I missed in this chat over the last 5 days? Focus on decisions and action items.</span></div>

<h2>Word &mdash; Documents & Writing</h2>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Draft a meeting agenda for a 60-minute leadership team meeting covering: project updates, budget review, and milestones. Format as a table.</span></div>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Write an executive summary of this document in under 200 words, focusing on the key recommendations.</span></div>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Create a step-by-step onboarding checklist for new employees. Include IT setup, HR paperwork, team introductions, and training schedule.</span></div>

<h2>Excel &mdash; Data & Analysis</h2>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Create a formula that calculates the year-over-year percentage change between column B and column C.</span></div>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Analyze this data and show me the top 5 trends. Present as a summary with a chart recommendation.</span></div>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Create a PivotTable summarizing total expenses by department and month.</span></div>

<h2>Multi-App &mdash; Power Combos</h2>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Summarize my unread emails from today and list any that require a response by end of day.</span></div>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">What meetings do I have this week? For any with recaps, list the key action items assigned to me.</span></div>
<div class="prompt-block"><button class="copy-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</button><span class="prompt-text">Draft a summary memo based on /Tuesday's Strategy Meeting. Include decisions, action items, and timeline.</span></div>
`},

  citations: {
    badge: 'cite', badgeText: 'Citations', duration: '',
    title: 'Citations & Sources',
    subtitle: 'Trust but verify &mdash; every claim in this training is sourced from official Microsoft documentation',
    html: `
<h2>About This Training</h2>
<p>All content in this training was sourced directly from <strong>official Microsoft Learn documentation</strong>, Microsoft 365 product pages, and Microsoft's published training modules. Below you'll find direct links to every source so you can verify the information independently.</p>

<div class="callout important">
  <div class="callout-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
  <div><strong>Trust but Verify:</strong> We encourage you to click any link below to confirm the accuracy of the information presented in this training. All sources are first-party Microsoft documentation.</div>
</div>

<h2>Licensing & Prerequisites</h2>
<div class="table-wrapper"><table>
<tr><th>Claim / Topic</th><th>Source</th></tr>
<tr><td>Copilot requires a Microsoft 365 base subscription + add-on license</td><td><a href="https://learn.microsoft.com/copilot/microsoft-365/microsoft-365-copilot-licensing" target="_blank">License Options for Microsoft 365 Copilot</a></td></tr>
<tr><td>Eligible base subscriptions (E3/E5, Business, A3/A5, F1/F3)</td><td><a href="https://learn.microsoft.com/copilot/microsoft-365/microsoft-365-copilot-minimum-requirements#licensing-requirements" target="_blank">Minimum Requirements &mdash; Licensing</a></td></tr>
<tr><td>Requires Microsoft Entra ID (Azure AD) account</td><td><a href="https://learn.microsoft.com/copilot/microsoft-365/microsoft-365-copilot-minimum-requirements#sign-in-requirements" target="_blank">Minimum Requirements &mdash; Sign-In</a></td></tr>
<tr><td>Primary mailbox must be in Exchange Online</td><td><a href="https://learn.microsoft.com/copilot/microsoft-365/microsoft-365-copilot-minimum-requirements#mailbox-requirements" target="_blank">Minimum Requirements &mdash; Mailbox</a></td></tr>
<tr><td>Setup and license assignment process</td><td><a href="https://learn.microsoft.com/copilot/microsoft-365/microsoft-365-copilot-setup" target="_blank">Set Up Microsoft 365 Copilot</a></td></tr>
</table></div>

<h2>Copilot Overview & Architecture</h2>
<div class="table-wrapper"><table>
<tr><th>Claim / Topic</th><th>Source</th></tr>
<tr><td>Copilot combines LLMs with organizational data via Microsoft Graph</td><td><a href="https://learn.microsoft.com/copilot/microsoft-365/microsoft-365-copilot-overview" target="_blank">Microsoft 365 Copilot Overview</a></td></tr>
<tr><td>How Copilot processes prompts and generates responses</td><td><a href="https://learn.microsoft.com/copilot/microsoft-365/microsoft-365-copilot-architecture" target="_blank">Copilot Architecture & How It Works</a></td></tr>
<tr><td>Copilot respects existing permissions and security boundaries</td><td><a href="https://learn.microsoft.com/copilot/microsoft-365/microsoft-365-copilot-privacy" target="_blank">Data, Privacy, and Security</a></td></tr>
<tr><td>App integration and network requirements</td><td><a href="https://learn.microsoft.com/copilot/microsoft-365/microsoft-365-copilot-requirements" target="_blank">App & Network Requirements</a></td></tr>
</table></div>

<h2>Copilot in Microsoft 365 Apps</h2>
<div class="table-wrapper"><table>
<tr><th>Claim / Topic</th><th>Source</th></tr>
<tr><td>Copilot features in Outlook (drafting, summarizing, coaching)</td><td><a href="https://support.microsoft.com/en-us/copilot-outlook" target="_blank">Copilot in Outlook &mdash; Microsoft Support</a></td></tr>
<tr><td>Copilot features in Word (draft, rewrite, chat, reference files)</td><td><a href="https://support.microsoft.com/en-us/copilot-word" target="_blank">Copilot in Word &mdash; Microsoft Support</a></td></tr>
<tr><td>Copilot features in Teams (recaps, live queries, chat summaries)</td><td><a href="https://support.microsoft.com/en-us/copilot-teams" target="_blank">Copilot in Teams &mdash; Microsoft Support</a></td></tr>
<tr><td>Copilot features in Excel (formulas, analysis, charts)</td><td><a href="https://support.microsoft.com/en-us/copilot-excel" target="_blank">Copilot in Excel &mdash; Microsoft Support</a></td></tr>
<tr><td>Transcription/recording required for meeting recaps</td><td><a href="https://support.microsoft.com/en-us/office/get-started-with-copilot-in-microsoft-teams-meetings-0bf9dd3c-96f7-44e2-8bb8-790bedf066b1" target="_blank">Get Started with Copilot in Teams Meetings</a></td></tr>
</table></div>

<h2>Prompt Engineering & Best Practices</h2>
<div class="table-wrapper"><table>
<tr><th>Claim / Topic</th><th>Source</th></tr>
<tr><td>GCSE Framework (Goal, Context, Source, Expectations)</td><td><a href="https://learn.microsoft.com/training/modules/write-effective-prompts-do-more-prompting/" target="_blank">Write Effective Prompts &mdash; Microsoft Learn</a></td></tr>
<tr><td>Prompt best practices and iteration techniques</td><td><a href="https://learn.microsoft.com/copilot/microsoft-365/microsoft-365-copilot-adoption#write-great-prompts" target="_blank">Copilot Adoption &mdash; Write Great Prompts</a></td></tr>
<tr><td>Edit and transform content with Copilot</td><td><a href="https://learn.microsoft.com/training/modules/edit-transform-content-with-microsoft-copilot-microsoft-365/" target="_blank">Edit & Transform Content &mdash; Microsoft Learn</a></td></tr>
<tr><td>Ready-to-use prompt examples and gallery</td><td><a href="https://copilot.cloud.microsoft/prompts" target="_blank">Microsoft Copilot Prompt Gallery</a></td></tr>
</table></div>

<h2>Training & Learning Resources</h2>
<div class="table-wrapper"><table>
<tr><th>Claim / Topic</th><th>Source</th></tr>
<tr><td>Implement Microsoft 365 Copilot (admin deployment)</td><td><a href="https://learn.microsoft.com/training/modules/implement-microsoft-365-copilot/" target="_blank">Implement M365 Copilot &mdash; Microsoft Learn</a></td></tr>
<tr><td>Copilot adoption playbook and enablement resources</td><td><a href="https://learn.microsoft.com/copilot/microsoft-365/microsoft-365-copilot-enablement-resources" target="_blank">Copilot Enablement Resources</a></td></tr>
<tr><td>Uncover new data insights with AI (Excel deep-dive)</td><td><a href="https://learn.microsoft.com/training/modules/uncover-new-data-insights-ai/" target="_blank">Data Insights with AI &mdash; Microsoft Learn</a></td></tr>
<tr><td>Microsoft 365 Copilot service description</td><td><a href="https://learn.microsoft.com/en-us/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot" target="_blank">M365 Copilot Service Description</a></td></tr>
</table></div>

<h2>Pricing & Plans</h2>
<div class="table-wrapper"><table>
<tr><th>Claim / Topic</th><th>Source</th></tr>
<tr><td>Microsoft 365 Copilot pricing and plan comparison</td><td><a href="https://www.microsoft.com/microsoft-365-copilot" target="_blank">Microsoft 365 Copilot &mdash; Official Page</a></td></tr>
<tr><td>Business plans with Copilot</td><td><a href="https://www.microsoft.com/microsoft-365/business/with-copilot-plans-and-pricing" target="_blank">Business Plans & Pricing</a></td></tr>
<tr><td>Enterprise plans with Copilot</td><td><a href="https://www.microsoft.com/microsoft-365/enterprise/microsoft365-plans-and-pricing" target="_blank">Enterprise Plans & Pricing</a></td></tr>
</table></div>

<div class="callout success">
  <div class="callout-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
  <div><strong>Last Verified:</strong> All links were verified against official Microsoft documentation as of March 2026. Microsoft updates documentation regularly &mdash; if a link has moved, search the article title on <a href="https://learn.microsoft.com" target="_blank">learn.microsoft.com</a>.</div>
</div>
`}
};

