import './styles/base.css';
import './styles/components.css';
import './styles/themes.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
	const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
	const isProjectsPage = currentPath === '/projects';
	const isResourcesPage = currentPath === '/resource';

	app.innerHTML = `
	
		<!-- Temporary notice: remove this banner when the website is complete. -->

		<div class="site-notice" role="status">This website is not finished yet.</div>
		<header class="site-header">
			<a class="brand" href="/" aria-label="Kyouroga home">
				<img class="brand-mark" src="/src/assets/icons/logo/kyouroga.org%20logo.png" alt="" />
				<span class="brand-name">kyouroga</span>
			</a>
			<button class="mobile-menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">
				<span></span><span></span><span></span>
			</button>
			<nav class="site-nav" aria-label="Main navigation">
				<div class="nav-menu-group">
				<div class="nav-menu">

					<!-- Projects and Resources navigation, including click and hover, is temporarily disabled until those pages are ready. -->
					
					<button type="button" class="nav-menu-trigger" data-route="/projects/" aria-expanded="false" disabled>Projects <i class="fa-solid fa-chevron-down" aria-hidden="true"></i></button>
					<div class="nav-menu-panel">
						<div class="nav-menu-column">
							<a href="/projects/" data-disabled-nav aria-disabled="true"><span class="nav-menu-copy"><strong>Featured projects</strong><small>Explore what we are building</small></span></a>
							<a href="/projects/" data-disabled-nav aria-disabled="true"><span class="nav-menu-copy"><strong>Open source</strong><small>Tools made for the community</small></span></a>
						</div>
						<div class="nav-menu-column">
							<a href="/projects/" data-disabled-nav aria-disabled="true"><span class="nav-menu-copy"><strong>Experiments</strong><small>Ideas in progress</small></span></a>
							<a href="/projects/" data-disabled-nav aria-disabled="true"><span class="nav-menu-copy"><strong>Contribute</strong><small>Build something with us</small></span></a>
						</div>
					</div>
				</div>
				<div class="nav-menu">
					<button type="button" class="nav-menu-trigger" data-route="/resource/" aria-expanded="false" disabled>Resources <i class="fa-solid fa-chevron-down" aria-hidden="true"></i></button>
					<div class="nav-menu-panel">
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
				<a class="header-button" href="https://github.com/Kyouroga" target="_blank" rel="noreferrer">GitHub</a>
				<a class="header-button" href="mailto:support@kyouroga.org">Contact us</a>
			</nav>
		</header>
		<div class="mobile-nav-backdrop" aria-hidden="true"></div>
		<aside class="mobile-nav" aria-label="Mobile navigation" aria-hidden="true">
			<div class="mobile-nav-header">
				<a class="brand" href="/" aria-label="Kyouroga home">
					<img class="brand-mark" src="/src/assets/icons/logo/kyouroga.org%20logo.png" alt="" />
					<span class="brand-name">kyouroga</span>
				</a>
				<button class="mobile-nav-close" type="button" aria-label="Close navigation"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
			</div>
			<div class="mobile-nav-panels">
				<div class="mobile-nav-links mobile-nav-panel mobile-nav-main-panel">
					<button class="mobile-nav-link" type="button" data-mobile-panel="projects" disabled>Projects <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>
					<button class="mobile-nav-link" type="button" data-mobile-panel="resources" disabled>Resources <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>
					<a class="mobile-nav-link" href="https://github.com/Kyouroga" target="_blank" rel="noreferrer">GitHub <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
					<a class="mobile-nav-link" href="mailto:support@kyouroga.org" style="border-bottom: none;">Contact us <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
				</div>
				<div class="mobile-nav-links mobile-nav-panel" data-mobile-panel-view="projects" aria-hidden="true">
					<div class="mobile-nav-subheader"><button class="mobile-nav-back" type="button" aria-label="Back to mobile navigation"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i> Back</button><a href="/projects/" data-disabled-nav aria-disabled="true">View all projects <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a></div>
					<p class="mobile-nav-section-title">Projects</p>
					<a class="mobile-nav-link" href="/projects/#featured-projects" data-disabled-nav aria-disabled="true">Featured projects <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
					<a class="mobile-nav-link" href="/projects/#open-source" data-disabled-nav aria-disabled="true">Open source <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
					<a class="mobile-nav-link" href="/projects/#experiments" data-disabled-nav aria-disabled="true">Experiments <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
					<a class="mobile-nav-link" href="/projects/#contribute" data-disabled-nav aria-disabled="true" style="border-bottom: none;">Contribute <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
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
		</aside>

		<main class="${isProjectsPage || isResourcesPage ? 'simple-page' : 'home-page'}">
			${isProjectsPage ? '<h1 class="page-title">Projects</h1>' : isResourcesPage ? '<h1 class="page-title">Resources</h1>' : `
			<section class="hero" id="about">
				<div class="hero-content">
					<p class="eyebrow">Open-Collaboration Organization</p>
					<h1 class="hero-message">An open-source organization focused on creating useful<br class="desktop-break" /> software, supporting developers, and fostering<br class="desktop-break" /> collaboration through open-source development.</h1>
				</div>
			</section>
			`}
		</main>
	`;

	app.querySelectorAll<HTMLButtonElement>('.nav-menu-trigger').forEach((trigger) => {
		trigger.addEventListener('click', () => {
			const route = trigger.dataset.route;
			if (route) {
				window.location.href = route;
				return;
			}
			const menu = trigger.parentElement;
			const isOpen = menu?.classList.toggle('is-open') ?? false;
			app.querySelectorAll('.nav-menu').forEach((otherMenu) => {
				if (otherMenu !== menu) otherMenu.classList.remove('is-open');
			});
			trigger.setAttribute('aria-expanded', String(isOpen));
		});
	});

	app.querySelectorAll<HTMLElement>('.nav-menu').forEach((menu) => {
		let closeTimer: number | undefined;
		const cancelClose = () => {
			if (closeTimer !== undefined) window.clearTimeout(closeTimer);
		};

		menu.addEventListener('mouseenter', () => {
			cancelClose();
			app.querySelectorAll('.nav-menu').forEach((otherMenu) => {
				if (otherMenu !== menu) otherMenu.classList.remove('is-hovered');
			});
			menu.classList.add('is-hovered');
		});
		menu.querySelector('.nav-menu-panel')?.addEventListener('mouseenter', cancelClose);
		menu.addEventListener('mouseleave', () => {
			closeTimer = window.setTimeout(() => menu.classList.remove('is-hovered'), 180);
		});
	});

	const mobileMenu = app.querySelector<HTMLElement>('.mobile-nav');
	const mobileMenuToggle = app.querySelector<HTMLButtonElement>('.mobile-menu-toggle');
	const mobileMenuClose = app.querySelector<HTMLButtonElement>('.mobile-nav-close');
	const mobileMenuBackdrop = app.querySelector<HTMLElement>('.mobile-nav-backdrop');
	const mobileNavPanels = app.querySelector<HTMLElement>('.mobile-nav-panels');
	const mobileNavPanelButtons = app.querySelectorAll<HTMLButtonElement>('[data-mobile-panel]');
	const mobileNavBackButtons = app.querySelectorAll<HTMLButtonElement>('.mobile-nav-back');
	let mobileNavResetTimer: number | undefined;

	app.querySelectorAll<HTMLAnchorElement>('[data-disabled-nav]').forEach((link) => {
		link.addEventListener('click', (event) => event.preventDefault());
	});

	const setMobileMenu = (isOpen: boolean) => {
		mobileMenu?.classList.toggle('is-open', isOpen);
		mobileMenuBackdrop?.classList.toggle('is-visible', isOpen);
		mobileMenu?.setAttribute('aria-hidden', String(!isOpen));
		mobileMenuToggle?.setAttribute('aria-expanded', String(isOpen));
		document.body.classList.toggle('menu-open', isOpen);
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
		setMobileNavPanel(null);
		setMobileMenu(false);
		if (mobileNavResetTimer !== undefined) window.clearTimeout(mobileNavResetTimer);
		mobileNavResetTimer = window.setTimeout(() => mobileMenu?.classList.remove('is-closing'), 360);
	};

	mobileMenuToggle?.addEventListener('click', () => {
		if (mobileNavResetTimer !== undefined) window.clearTimeout(mobileNavResetTimer);
		mobileMenu?.classList.remove('is-closing');
		setMobileMenu(true);
	});
	mobileMenuClose?.addEventListener('click', closeMobileMenu);
	mobileMenuBackdrop?.addEventListener('click', closeMobileMenu);
	mobileNavPanelButtons.forEach((button) => button.addEventListener('click', () => setMobileNavPanel(button.dataset.mobilePanel ?? null)));
	mobileNavBackButtons.forEach((button) => button.addEventListener('click', () => setMobileNavPanel(null)));
	mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMobileMenu(false)));
}
