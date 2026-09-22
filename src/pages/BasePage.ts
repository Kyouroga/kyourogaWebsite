export abstract class BasePage {
  public render(): string {
    return `
      <section class="page-shell">
        ${this.getContent()}
      </section>
    `;
  }

  protected abstract getContent(): string;
}
