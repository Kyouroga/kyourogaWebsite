import { BasePage } from '../BasePage';

export class FeaturedProjectsPage extends BasePage {
  protected getContent(): string {
    return `
      <div class="page-intro">
        <p class="eyebrow">Featured work</p>
        <h1 class="page-title">Projects</h1>
      </div>

      <section class="feature-list" aria-label="Featured projects">
        <article class="feature-card">
          <div class="feature-card-copy">
            <p class="feature-card-kicker">Open-source tooling</p>
            <h2>Developer platforms</h2>
            <p>Tools and workflows built to improve developer experience, reduce friction, and make collaboration easier for teams.</p>
          </div>
        </article>

        <article class="feature-card">
          <div class="feature-card-copy">
            <p class="feature-card-kicker">Community support</p>
            <h2>Learning resources</h2>
            <p>Practical projects, guides, and experiments designed to help people learn by building and sharing together.</p>
          </div>
        </article>

        <article class="feature-card">
          <div class="feature-card-copy">
            <p class="feature-card-kicker">Experimentation</p>
            <h2>Creative prototypes</h2>
            <p>New ideas and early-stage technical experiments that explore better ways to create, ship, and maintain software.</p>
          </div>
        </article>
      </section>
    `;
  }
}
