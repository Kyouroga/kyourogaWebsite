import './styles/base.css';
import './styles/components.css';
import './styles/themes.css';
import { FeaturedProjectsPage } from './pages/projects/FeaturedProjectsPage';
import { ProjectsPage } from './pages/projects/ProjectsPage';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
	const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
	const isProjectsPage = currentPath === '/projects';
	const isFeaturedProjectsPage = currentPath === '/projects/featured';
	const isResourcesPage = currentPath === '/resource';
	const projectsPage = new ProjectsPage();
	const featuredProjectsPage = new FeaturedProjectsPage();
	const renderMainContent = () => {
		if (isProjectsPage) {
			return projectsPage.render();
		}
		if (isFeaturedProjectsPage) {
			return featuredProjectsPage.render();
		}
		if (isResourcesPage) {
			return '<div class="page-shell"><div class="page-intro"><p class="eyebrow">Resources</p><h1 class="page-title">Resources</h1></div></div>';
		}
		return `
			<section class="hero" id="about">
				<div class="hero-content">
					<p class="eyebrow">Open-Collaboration Organization</p>
					<h1 class="hero-message">An open-source organization focused on creating useful<br class="desktop-break" /> software, supporting developers, and fostering<br class="desktop-break" /> collaboration through open-source development.</h1>
				</div>
			</section>
		`;
	};

	app.innerHTML = `
	
		<!-- Temporary notice: remove this banner when the website is complete. -->
		<div class="site-notice" role="status">This website is not finished yet.</div>
		
		<header class="site-header">
			<a class="organization" href="/" aria-label="Kyouroga home">
				<img class="organization-mark" src="/kyouroga-logo.svg" alt="" />
				<span class="organization-name">Kyouroga</span>
			</a>
			<button class="mobile-menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">
				<span></span><span></span><span></span>
			</button>
			<nav class="site-nav" aria-label="Main navigation">
				<div class="nav-menu-group">

				<div class="nav-menu" data-nav="projects">
					<button type="button" class="nav-menu-trigger" data-route="/projects/" aria-expanded="false">Projects <i class="fa-solid fa-chevron-down" aria-hidden="true"></i></button>
					<div class="nav-menu-panel">
						<div class="nav-menu-panel-inner">
							<div class="nav-menu-column">
								<a href="/projects/featured"><span class="nav-menu-copy"><strong>Featured projects</strong><small>Explore what we are building</small></span></a>
								<a href="/projects/"><span class="nav-menu-copy"><strong>Open source</strong><small>Tools made for the community</small></span></a>
							</div>
							<div class="nav-menu-column">
								<a href="/projects/"><span class="nav-menu-copy"><strong>Experiments</strong><small>Ideas in progress</small></span></a>
								<a href="/projects/"><span class="nav-menu-copy"><strong>Contribute</strong><small>Build something with us</small></span></a>
							</div>
						</div>
					</div>
				</div>






				<!-- Resources navigation, including click and hover, is temporarily disabled until those pages are ready. -->
				<div class="nav-menu" data-nav="resources">
					<button type="button" class="nav-menu-trigger" data-route="/resource/" aria-expanded="false" disabled>Resources <i class="fa-solid fa-chevron-down" aria-hidden="true"></i></button>
					<div class="nav-menu-panel">
						<div class="nav-menu-panel-inner">
							<div class="nav-menu-column">
								<a href="/resource/" data-disabled-nav aria-disabled="true"><span class="nav-menu-copy"><strong>Documentation</strong><small>Learn how everything works</small></span></a>
								<a href="/resource/" data-disabled-nav aria-disabled="true"><span class="nav-menu-copy"><strong>Guides</strong><small>Practical notes for developers</small></span></a>
							</div>
							<div class="nav-menu-column">
								<a href="/resource/" data-disabled-nav aria-disabled="true"><span class="nav-menu-copy"><strong>Community</strong><small>Meet and collaborate with others</small></span></a>
								<a href="/resource/" data-disabled-nav aria-disabled="true"><span class="nav-menu-copy"><strong>Updates</strong><small>News from the organization</small></span></a>
							</div>
						</div>
					</div>
				</div>
				</div>
				<a class="header-button" href="https://github.com/Kyouroga" target="_blank" rel="noreferrer">GitHub</a>
				<a class="header-button" href="mailto:support@kyouroga.org">Contact us</a>
			</nav>
		</header>
		<div class="mobile-nav-backdrop" aria-hidden="true"></div>
		<aside class="mobile-nav" aria-label="Mobile navigation" aria-hidden="true">
			<div class="mobile-nav-panels">
				<div class="mobile-nav-links mobile-nav-panel mobile-nav-main-panel">
					<button class="mobile-nav-link" type="button" data-mobile-panel="projects">Projects <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>
					<button class="mobile-nav-link" type="button" data-mobile-panel="resources" disabled>Resources <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>
				</div>
				<div class="mobile-nav-links mobile-nav-panel" data-mobile-panel-view="projects" aria-hidden="true">
					<div class="mobile-nav-subheader"><button class="mobile-nav-back" type="button" aria-label="Back to mobile navigation"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i> Back</button><a href="/projects/">View all projects <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a></div>
					<p class="mobile-nav-section-title">Projects</p>
					<a class="mobile-nav-link" href="/projects/featured">Featured projects <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
					<a class="mobile-nav-link" href="/projects/#open-source">Open source <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
					<a class="mobile-nav-link" href="/projects/#experiments">Experiments <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
					<a class="mobile-nav-link" href="/projects/#contribute" style="border-bottom: none;">Contribute <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
				</div>
				<div class="mobile-nav-links mobile-nav-panel" data-mobile-panel-view="resources" aria-hidden="true">
					<div class="mobile-nav-subheader"><button class="mobile-nav-back" type="button" aria-label="Back to mobile navigation"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i> Back</button><a href="/resource/" data-disabled-nav aria-disabled="true">View all resources <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a></div>
					<p class="mobile-nav-section-title">Resources</p>
					<a class="mobile-nav-link" href="/resource/#documentation" data-disabled-nav aria-disabled="true">Documentation <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
					<a class="mobile-nav-link" href="/resource/#guides" data-disabled-nav aria-disabled="true">Guides <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
					<a class="mobile-nav-link" href="/resource/#community" data-disabled-nav aria-disabled="true">Community <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
					<a class="mobile-nav-link" href="/resource/#updates" data-disabled-nav aria-disabled="true" style="border-bottom: none;">Updates <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
				</div>
			</div>
			<div class="mobile-nav-actions">
				<a class="mobile-nav-action mobile-nav-action-secondary" href="https://github.com/Kyouroga" target="_blank" rel="noreferrer">GitHub <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
				<a class="mobile-nav-action mobile-nav-action-primary" href="mailto:support@kyouroga.org">Contact us</a>
			</div>
		</aside>

		<main class="${isProjectsPage || isResourcesPage ? 'simple-page' : 'home-page'}">
			${renderMainContent()}
		</main>

		<footer class="site-footer" aria-label="Footer">
			<div class="site-footer-nav">
				<div class="site-footer-brand">Kyouroga</div>
				<nav class="site-footer-groups" aria-label="Footer navigation">
					<div class="site-footer-group">
						<h2>Projects</h2>
						<a href="/projects/featured">Featured Projects</a>
						<a href="/projects/">Open-Source</a>
						<a href="/projects/#contribute">Contribute</a>
					</div>
					<div class="site-footer-group">
						<h2>Resources</h2>
						<a href="/resource/" data-disabled-nav aria-disabled="true">Documentation</a>
						<a href="/resource/" data-disabled-nav aria-disabled="true">Updates</a>
						<a href="/resource/" data-disabled-nav aria-disabled="true">Community</a>
					</div>
					<div class="site-footer-group">
						<h2>Organization</h2>
						<a href="/about">About</a>
						<a href="/blog" data-disabled-nav aria-disabled="true">Blog</a>
					</div>
				</nav>
			</div>
			<img class="site-footer-logo" src="/kyouroga-logo-outline.svg" alt="" />
			<div class="site-footer-bottom">
				<span class="site-footer-copyright">© 2026 Kyouroga</span>
				<div class="site-footer-actions">
					<a class="footer-utility-link" href="/privacy-policy">Privacy policy</a>
					<span class="footer-divider" aria-hidden="true"><svg viewBox="0 0 1 14" focusable="false"><path d="M0.5 0v14" /></svg></span>
					<button class="footer-utility-link" type="button" data-open-preferences aria-label="Open color and accessibility preferences">Preferences</button>
					<span class="footer-divider" aria-hidden="true"><svg viewBox="0 0 1 14" focusable="false"><path d="M0.5 0v14" /></svg></span>
					<button class="footer-utility-link" type="button" data-open-privacy-choices><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 14" aria-hidden="true" class="privacy-choices-icon"><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#06f" d="M22.6 0H7.4C3.5 0 .4 3.1.4 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.1-7-7-7zM1.6 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4C4.2 12.8 1.6 10.2 1.6 7z"></path><path fill="#fff" d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2L19.5 10c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z"></path><path fill="#06f" d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z"></path></svg>Privacy choices</button>
				</div>
			</div>
		</footer>

		<div class="privacy-choices-cookie-modal-backdrop" aria-hidden="true"></div>
		<div class="privacy-choices-cookie-modal-overlay is-privacy" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Cookie Options">
			<div class="privacy-choices-cookie-modal">
				<div class="privacy-choices-cookie-modal-header">
					<button class="privacy-choices-cookie-modal-close" type="button" data-close-privacy-choices aria-label="Close privacy choices"><svg viewBox="0 0 24 24" focusable="false"><path d="m5 5 14 14M19 5 5 19" /></svg></button>
				</div>

				<div class="privacy-choices-cookie-modal-grid">
					<h2 class="privacy-choices-cookie-modal-title">Cookie Options</h2>
					<section class="privacy-choices-panel" id="privacy-choices-panel">
						<div class="cookie-consent-header">
							<p>
								Kyouroga uses cookies and similar technologies to remember your preferences and understand how the website is used. Choose which optional features you want to allow. You can change your choices at any time. <br><a href="/privacy-policy">Read the cookie-policy.</a>
							</p>
						</div>

						<div class="cookie-consent-body">
							<div class="cookie-consent-heading">
								<h4>Manage Preferences</h4>
							</div>

							<div class="cookie-choice-row is-always-active" role="button" tabindex="0" aria-expanded="false" aria-controls="cookie-description-necessary">
								<div class="cookie-choice-copy">
									<button type="button" class="cookie-choice-expand" tabindex="-1" aria-expanded="false" aria-controls="cookie-description-necessary"><span class="cookie-choice-mark">+</span><span class="cookie-choice-label"><strong>Necessary</strong></span></button>
								</div>
								<span class="cookie-choice-state">Always Active</span>
								<p class="cookie-choice-description" id="cookie-description-necessary" hidden>These cookies are needed for core site functions and cannot be switched off.</p>
							</div>

							<div class="cookie-choice-row" role="button" tabindex="0" aria-expanded="false" aria-controls="cookie-description-functional">
								<div class="cookie-choice-copy">
									<button type="button" class="cookie-choice-expand" tabindex="-1" aria-expanded="false" aria-controls="cookie-description-functional"><span class="cookie-choice-mark">+</span><span class="cookie-choice-label"><strong>Functional</strong></span></button>
								</div>
								<button type="button" class="cookie-toggle is-on" aria-pressed="true" aria-label="Toggle functional cookies"><span class="cookie-toggle-knob"></span></button>
								<p class="cookie-choice-description" id="cookie-description-functional" hidden>These cookies remember preferences that make your visit more personal.</p>
							</div>

							<div class="cookie-choice-row" role="button" tabindex="0" aria-expanded="false" aria-controls="cookie-description-performance">
								<div class="cookie-choice-copy">
									<button type="button" class="cookie-choice-expand" tabindex="-1" aria-expanded="false" aria-controls="cookie-description-performance"><span class="cookie-choice-mark">+</span><span class="cookie-choice-label"><strong>Performance</strong></span></button>
								</div>
								<button type="button" class="cookie-toggle is-on" aria-pressed="true" aria-label="Toggle performance cookies"><span class="cookie-toggle-knob"></span></button>
								<p class="cookie-choice-description" id="cookie-description-performance" hidden>This may include aggregated information such as page visits, page load times, time spent on pages, and browser or device types.</p>
							</div>
						</div>

					</section>
				</div>

				<div class="cookie-consent-actions">
					<button type="button" class="cookie-action is-secondary">Clear optional</button>
					<button type="button" class="cookie-action is-primary">Save choices</button>
				</div>
			</div>
		</div>

		<div class="preferences-modal-backdrop" aria-hidden="true"></div>
		<div class="preferences-modal-overlay" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Color and accessibility preferences">
			<div class="preferences-modal">
				<div class="preferences-modal-header">
					<button class="preferences-modal-close" type="button" data-close-preferences aria-label="Close preferences"><svg viewBox="0 0 24 24" focusable="false"><path d="m5 5 14 14M19 5 5 19" /></svg></button>
				</div>
				<div class="preferences-content">
					<h2 class="preferences-modal-title">Preferences Setting</h2>
					<div class="preferences-modal-description">
						<p>Choose the colors, text size, contrast, and motion settings that make Kyouroga easier and more comfortable for you to use.</p>
						<section class="preferences-section" aria-labelledby="color-choice-title">
						<div class="preferences-section-heading">
							<h3 id="color-choice-title">Color</h3>
							<p>Choose the colors that feel clearest to you.</p>
						</div>
						<div class="color-choice-list">
							<button class="color-choice" type="button" data-preference-choice="light" aria-pressed="false"><span><strong>Light</strong><small>Bright surfaces and dark text</small></span></button>
							<button class="color-choice" type="button" data-preference-choice="dark" aria-pressed="false"><span><strong>Dark</strong><small>Dark surfaces and light text</small></span></button>
							<button class="color-choice" type="button" data-preference-choice="system" aria-pressed="false"><span aria-hidden="true"><strong>System</strong><small>Follow your device preference</small></span></button>
						</div>
						</section>

						<section class="preferences-section" aria-labelledby="accessibility-choice-title">
						<div class="preferences-section-heading">
							<h3 id="accessibility-choice-title">Accessibility</h3>
							<p>Make the site easier to read and use.</p>
						</div>
						<div class="accessibility-choice-list">
							<button class="accessibility-choice" type="button" data-accessibility-choice="large-text" aria-pressed="false"><span><strong>Larger text</strong><small>Increase reading size across the site</small></span><span class="accessibility-choice-state">Off</span></button>
							<button class="accessibility-choice" type="button" data-accessibility-choice="high-contrast" aria-pressed="false"><span><strong>Stronger contrast</strong><small>Make text and borders easier to distinguish</small></span><span class="accessibility-choice-state">Off</span></button>
							<button class="accessibility-choice" type="button" data-accessibility-choice="reduced-motion" aria-pressed="false"><span><strong>Reduce motion</strong><small>Limit transitions and moving effects</small></span><span class="accessibility-choice-state">Off</span></button>
						</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	`;

	const privacyChoicesBackdrop = app.querySelector<HTMLElement>('.privacy-choices-cookie-modal-backdrop');
	const privacyChoicesModal = app.querySelector<HTMLElement>('.privacy-choices-cookie-modal-overlay');
	const privacyChoicesOpenButtons = app.querySelectorAll<HTMLButtonElement>('[data-open-privacy-choices]');
	const privacyChoicesCloseButton = app.querySelector<HTMLButtonElement>('[data-close-privacy-choices]');
	const preferenceOpenButton = app.querySelector<HTMLButtonElement>('[data-open-preferences]');
	const preferenceModal = app.querySelector<HTMLElement>('.preferences-modal-overlay');
	const preferenceBackdrop = app.querySelector<HTMLElement>('.preferences-modal-backdrop');
	const preferenceCloseButton = app.querySelector<HTMLButtonElement>('[data-close-preferences]');
	const preferenceChoiceButtons = Array.from(app.querySelectorAll<HTMLButtonElement>('[data-preference-choice]'));
	const accessibilityChoiceButtons = Array.from(app.querySelectorAll<HTMLButtonElement>('[data-accessibility-choice]'));
	const cookieToggles = Array.from(app.querySelectorAll<HTMLButtonElement>('.cookie-toggle'));
	const cookieChoiceExpanders = Array.from(app.querySelectorAll<HTMLButtonElement>('.cookie-choice-expand'));
	const saveCookieChoicesButton = app.querySelector<HTMLButtonElement>('.cookie-action.is-primary');
	const clearCookieChoicesButton = app.querySelector<HTMLButtonElement>('.cookie-action.is-secondary');
	const privacyChoicesGrid = app.querySelector<HTMLElement>('.privacy-choices-cookie-modal-grid');
	const cookieConsentName = 'kyouroga-cookie-consent';

	const containModalScroll = (modal: HTMLElement | null) => {
		modal?.addEventListener('wheel', (event) => event.stopPropagation(), { capture: true });
		modal?.addEventListener('touchmove', (event) => event.stopPropagation(), { capture: true, passive: true });
	};

	containModalScroll(privacyChoicesModal?.querySelector<HTMLElement>('.privacy-choices-cookie-modal') ?? null);
	containModalScroll(preferenceModal?.querySelector<HTMLElement>('.preferences-modal') ?? null);

	const updatePrivacyChoicesScrollState = () => {
		if (!privacyChoicesGrid) return;
		privacyChoicesGrid.classList.toggle('has-scrollbar', privacyChoicesGrid.scrollHeight > privacyChoicesGrid.clientHeight);
	};

	const setCookieToggleState = (toggle: HTMLButtonElement, isOn: boolean) => {
		toggle.classList.toggle('is-on', isOn);
		toggle.setAttribute('aria-pressed', String(isOn));
	};

	const readCookieConsent = () => {
		const consentCookie = document.cookie.split('; ').find((cookie) => cookie.startsWith(`${cookieConsentName}=`));
		if (!consentCookie) return {};
		try {
			return JSON.parse(decodeURIComponent(consentCookie.slice(cookieConsentName.length + 1))) as Record<string, boolean>;
		} catch {
			return {};
		}
	};

	const saveCookieConsent = (consent: Record<string, boolean>) => {
		document.cookie = `${cookieConsentName}=${encodeURIComponent(JSON.stringify(consent))}; Max-Age=31536000; Path=/; SameSite=Lax`;
	};

	const savedCookieConsent = readCookieConsent();
	cookieToggles.forEach((toggle) => {
		const category = toggle.getAttribute('aria-label')?.replace(/^Toggle\s+|\s+cookies$/gi, '').toLowerCase();
		if (category && category in savedCookieConsent) setCookieToggleState(toggle, savedCookieConsent[category]);
		toggle.addEventListener('click', () => setCookieToggleState(toggle, !toggle.classList.contains('is-on')));
	});

	const toggleCookieDescription = (expander: HTMLButtonElement) => {
			const descriptionId = expander.getAttribute('aria-controls');
			const description = descriptionId ? document.getElementById(descriptionId) : null;
			if (!description) return false;
			const isExpanded = expander.getAttribute('aria-expanded') === 'true';
			expander.setAttribute('aria-expanded', String(!isExpanded));
			description.hidden = isExpanded;
			requestAnimationFrame(updatePrivacyChoicesScrollState);
			return !isExpanded;
	};

	cookieChoiceExpanders.forEach((expander) => {
		expander.addEventListener('click', () => toggleCookieDescription(expander));
	});

	app.querySelectorAll<HTMLElement>('.cookie-choice-row').forEach((row) => {
		const expander = row.querySelector<HTMLButtonElement>('.cookie-choice-expand');
		if (!expander) return;
		row.addEventListener('click', (event) => {
			if ((event.target as HTMLElement).closest('.cookie-toggle, .cookie-choice-expand')) return;
			toggleCookieDescription(expander);
		});
		row.addEventListener('keydown', (event) => {
			if (event.key !== 'Enter' && event.key !== ' ') return;
			event.preventDefault();
			toggleCookieDescription(expander);
		});
	});

	saveCookieChoicesButton?.addEventListener('click', () => {
		const consent = cookieToggles.reduce<Record<string, boolean>>((choices, toggle) => {
			const category = toggle.getAttribute('aria-label')?.replace(/^Toggle\s+|\s+cookies$/gi, '').toLowerCase();
			if (category) choices[category] = toggle.classList.contains('is-on');
			return choices;
		}, {});
		saveCookieConsent(consent);
		setPrivacyChoicesModalState(false);
	});

	clearCookieChoicesButton?.addEventListener('click', () => {
		cookieToggles.forEach((toggle) => setCookieToggleState(toggle, false));
	});

	const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

	const setTheme = (nextTheme: 'light' | 'dark' | 'system') => {
		const resolvedTheme = nextTheme === 'system' ? getSystemTheme() : nextTheme;
		document.documentElement.dataset.theme = resolvedTheme;
		localStorage.setItem('kyouroga-theme', nextTheme);
		if (preferenceOpenButton) {
			preferenceOpenButton.textContent = 'Preferences';
			preferenceOpenButton.setAttribute('aria-label', 'Open color and accessibility preferences');
		}
	};

	const savedTheme = localStorage.getItem('kyouroga-theme');
	const initialTheme = savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system' ? savedTheme : 'light';
	setTheme(initialTheme);

	const setPreferenceModalState = (isOpen: boolean) => {
		preferenceModal?.classList.toggle('is-open', isOpen);
		preferenceBackdrop?.classList.toggle('is-visible', isOpen);
		preferenceModal?.setAttribute('aria-hidden', String(!isOpen));
	};

	const setAccessibilityChoiceState = (choice: HTMLButtonElement, isOn: boolean) => {
		const key = choice.dataset.accessibilityChoice;
		if (!key) return;
		choice.classList.toggle('is-on', isOn);
		choice.setAttribute('aria-pressed', String(isOn));
		const state = choice.querySelector<HTMLElement>('.accessibility-choice-state');
		if (state) state.textContent = isOn ? 'On' : 'Off';
		document.documentElement.classList.toggle(`accessibility-${key}`, isOn);
		localStorage.setItem(`kyouroga-${key}`, String(isOn));
	};

	preferenceChoiceButtons.forEach((choice) => {
		choice.addEventListener('click', () => {
			const selectedPreference = choice.dataset.preferenceChoice;
			if (selectedPreference === 'light' || selectedPreference === 'dark' || selectedPreference === 'system') {
				setTheme(selectedPreference);
				preferenceChoiceButtons.forEach((button) => button.setAttribute('aria-pressed', String(button === choice)));
			}
		});
	});

	const activeTheme = localStorage.getItem('kyouroga-theme') ?? initialTheme;
	preferenceChoiceButtons.forEach((choice) => choice.setAttribute('aria-pressed', String(choice.dataset.preferenceChoice === activeTheme)));
	accessibilityChoiceButtons.forEach((choice) => {
		const key = choice.dataset.accessibilityChoice;
		setAccessibilityChoiceState(choice, key ? localStorage.getItem(`kyouroga-${key}`) === 'true' : false);
		choice.addEventListener('click', () => setAccessibilityChoiceState(choice, !choice.classList.contains('is-on')));
	});

	preferenceOpenButton?.addEventListener('click', () => setPreferenceModalState(true));
	preferenceCloseButton?.addEventListener('click', () => setPreferenceModalState(false));
	preferenceBackdrop?.addEventListener('click', () => setPreferenceModalState(false));

	const setPrivacyChoicesModalState = (isOpen: boolean) => {
		privacyChoicesModal?.classList.toggle('is-open', isOpen);
		privacyChoicesBackdrop?.classList.toggle('is-visible', isOpen);
		privacyChoicesModal?.setAttribute('aria-hidden', String(!isOpen));
		if (isOpen) requestAnimationFrame(updatePrivacyChoicesScrollState);
	};

	privacyChoicesOpenButtons.forEach((button) => {
		button.addEventListener('click', () => {
			setPrivacyChoicesModalState(true);
		});
	});

	privacyChoicesCloseButton?.addEventListener('click', () => setPrivacyChoicesModalState(false));
	privacyChoicesBackdrop?.addEventListener('click', () => setPrivacyChoicesModalState(false));
	window.addEventListener('resize', updatePrivacyChoicesScrollState);

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			setPrivacyChoicesModalState(false);
			setPreferenceModalState(false);
		}
	});

	const closeDesktopNavMenus = () => {
		app.querySelectorAll<HTMLElement>('.nav-menu').forEach((menu) => {
			menu.classList.remove('is-open');
			menu.classList.remove('is-hovered');
			const trigger = menu.querySelector<HTMLButtonElement>('.nav-menu-trigger');
			if (trigger) trigger.setAttribute('aria-expanded', 'false');
		});
	};

	app.querySelectorAll<HTMLButtonElement>('.nav-menu-trigger').forEach((trigger) => {
		const menu = trigger.parentElement;
		const isProjectsMenu = menu?.dataset.nav === 'projects';
		const isResourcesMenu = menu?.dataset.nav === 'resources';

		trigger.addEventListener('click', () => {
			if (isResourcesMenu) {
				return;
			}
			const route = trigger.dataset.route;
			if (route && isProjectsMenu) {
				closeDesktopNavMenus();
				window.location.href = route;
				return;
			}
			if (!menu) return;
			const isOpen = menu.classList.toggle('is-open');
			app.querySelectorAll('.nav-menu').forEach((otherMenu) => {
				if (otherMenu !== menu) otherMenu.classList.remove('is-open');
			});
			trigger.setAttribute('aria-expanded', String(isOpen));
		});
	});

	app.querySelectorAll<HTMLAnchorElement>('.nav-menu-panel a').forEach((link) => {
		link.addEventListener('click', () => {
			closeDesktopNavMenus();
		});
	});

	const navGroup = app.querySelector<HTMLElement>('.nav-menu-group');
	let hoverCloseTimer: number | undefined;
	const cancelHoverClose = () => {
		if (hoverCloseTimer !== undefined) window.clearTimeout(hoverCloseTimer);
	};
	const clearProjectHover = () => {
		app.querySelectorAll('.nav-menu').forEach((menu) => {
			menu.classList.remove('is-hovered');
			const trigger = menu.querySelector<HTMLButtonElement>('.nav-menu-trigger');
			if (trigger) trigger.setAttribute('aria-expanded', 'false');
		});
	};
	const activateProjectHover = (menu: HTMLElement) => {
		cancelHoverClose();
		app.querySelectorAll('.nav-menu').forEach((otherMenu) => {
			if (otherMenu !== menu) otherMenu.classList.remove('is-hovered');
		});
		menu.classList.add('is-hovered');
		const trigger = menu.querySelector<HTMLButtonElement>('.nav-menu-trigger');
		if (trigger) trigger.setAttribute('aria-expanded', 'true');
	};

	if (navGroup) {
		navGroup.addEventListener('pointerover', (event) => {
			const target = event.target as Element | null;
			const hoveredMenu = target?.closest('.nav-menu') as HTMLElement | null;
			if (!hoveredMenu) return;
			if (hoveredMenu.dataset.nav === 'projects') {
				activateProjectHover(hoveredMenu);
				return;
			}
			clearProjectHover();
		});
		navGroup.addEventListener('pointerleave', () => {
			cancelHoverClose();
			hoverCloseTimer = window.setTimeout(() => clearProjectHover(), 120);
		});
	}

	const mobileMenu = app.querySelector<HTMLElement>('.mobile-nav');
	const mobileMenuToggle = app.querySelector<HTMLButtonElement>('.mobile-menu-toggle');
	const mobileMenuClose = app.querySelector<HTMLButtonElement>('.mobile-nav-close');
	const mobileMenuBackdrop = app.querySelector<HTMLElement>('.mobile-nav-backdrop');
	const mobileNavPanels = app.querySelector<HTMLElement>('.mobile-nav-panels');
	const mobileNavPanelButtons = app.querySelectorAll<HTMLButtonElement>('[data-mobile-panel]');
	const mobileNavBackButtons = app.querySelectorAll<HTMLButtonElement>('.mobile-nav-back');
	let mobileNavResetTimer: number | undefined;
	let lastMobileMenuToggleAt = 0;
	const mobileMenuToggleCooldownMs = 220;

	app.querySelectorAll<HTMLAnchorElement>('[data-disabled-nav]').forEach((link) => {
		link.addEventListener('click', (event) => event.preventDefault());
	});

	const setMobileMenu = (isOpen: boolean) => {
		if (isOpen) {
			setMobileNavPanel(null);
			window.scrollTo({ top: 0, behavior: 'smooth' });
			if (mobileNavPanels) mobileNavPanels.scrollTop = 0;
			if (mobileMenu) mobileMenu.scrollTop = 0;
		}
		mobileMenu?.classList.toggle('is-open', isOpen);
		mobileMenuBackdrop?.classList.toggle('is-visible', isOpen);
		mobileMenu?.setAttribute('aria-hidden', String(!isOpen));
		mobileMenuToggle?.classList.toggle('is-open', isOpen);
		mobileMenuToggle?.setAttribute('aria-expanded', String(isOpen));
		mobileMenuToggle?.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
		document.body.classList.toggle('menu-open', isOpen);
	};

	const resetMobileNavState = () => {
		if (!mobileNavPanels) return;
		mobileNavPanels.classList.add('is-resetting');
		mobileNavPanels.classList.remove('is-projects');
		mobileNavPanels.classList.remove('is-resources');
		mobileNavPanels.querySelectorAll<HTMLElement>('[data-mobile-panel-view]').forEach((view) => {
			view.setAttribute('aria-hidden', 'true');
		});
		requestAnimationFrame(() => {
			mobileNavPanels.classList.remove('is-resetting');
		});
	};

	const setMobileNavPanel = (panel: string | null) => {
		mobileNavPanels?.classList.toggle('is-projects', panel === 'projects');
		mobileNavPanels?.classList.toggle('is-resources', panel === 'resources');
		mobileNavPanels?.querySelectorAll<HTMLElement>('[data-mobile-panel-view]').forEach((view) => {
			view.setAttribute('aria-hidden', String(view.dataset.mobilePanelView !== panel));
		});
	};

	const closeMobileMenu = () => {
		mobileMenu?.classList.add('is-closing');
		resetMobileNavState();
		setMobileMenu(false);
		if (mobileNavResetTimer !== undefined) window.clearTimeout(mobileNavResetTimer);
		mobileNavResetTimer = window.setTimeout(() => {
			mobileMenu?.classList.remove('is-closing');
			resetMobileNavState();
		}, 360);
	};

	mobileMenuToggle?.addEventListener('click', () => {
		const now = Date.now();
		if (now - lastMobileMenuToggleAt < mobileMenuToggleCooldownMs) {
			return;
		}
		lastMobileMenuToggleAt = now;
		if (mobileNavResetTimer !== undefined) window.clearTimeout(mobileNavResetTimer);
		mobileMenu?.classList.remove('is-closing');
		const shouldOpen = !mobileMenu?.classList.contains('is-open');
		if (shouldOpen) {
			resetMobileNavState();
		}
		window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
		if (mobileNavPanels) mobileNavPanels.scrollTop = 0;
		if (mobileMenu) mobileMenu.scrollTop = 0;
		setMobileMenu(shouldOpen);
	});
	mobileMenuClose?.addEventListener('click', closeMobileMenu);
	mobileMenuBackdrop?.addEventListener('click', closeMobileMenu);
	mobileNavPanelButtons.forEach((button) => button.addEventListener('click', () => setMobileNavPanel(button.dataset.mobilePanel ?? null)));
	mobileNavBackButtons.forEach((button) => button.addEventListener('click', () => setMobileNavPanel(null)));
	mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
		setMobileNavPanel(null);
		setMobileMenu(false);
	}));
}
