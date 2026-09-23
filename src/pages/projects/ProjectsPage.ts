import { BasePage } from '../BasePage';

export class ProjectsPage extends BasePage {
  protected getContent(): string {
    return `
      <div class="page-intro">
        <p class="eyebrow">Our work</p>
        <h1 class="page-title">Projects</h1>
      </div>

    `;
  }
}
