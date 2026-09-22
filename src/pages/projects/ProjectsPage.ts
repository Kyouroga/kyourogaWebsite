import { BasePage } from '../BasePage';

export class ProjectsPage extends BasePage {
  protected getContent(): string {
    return `
      <div class="page-intro">
        <p class="eyebrow">Our work</p>
        <h1 class="page-title">Projects</h1>
      </div>

      <section class="feature-list" aria-label="Project overview">
        <article class="feature-card">
          <div class="feature-card-copy">
            <p class="feature-card-kicker">Open source</p>
            <h2>Community-driven software</h2>
            <p>We build practical tools and experiences that support developers, contributors, and teams working together on meaningful projects.</p>
          </div>
        </article>

        <article class="feature-card">
          <div class="feature-card-copy">
            <p class="feature-card-kicker">Explore</p>
            <h2>Featured work</h2>
            <p>See the projects we are actively highlighting across experimentation, collaboration, and developer tooling.</p>
          </div>
        </article>

        <article class="feature-card">
          <div class="feature-card-copy">
            <p class="feature-card-kicker">Get involved</p>
            <h2>Contribute and experiment</h2>
            <p>Join us in building, improving, and testing ideas that help the wider open-source community move forward.</p>
          </div>
        </article>
      </section>
    `;
  }
}
