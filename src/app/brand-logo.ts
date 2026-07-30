import { Component, input } from '@angular/core';

@Component({
  selector: 'app-brand-logo',
  standalone: true,
  template: `
    <span class="logo" [class.logo--compact]="compact()" [attr.data-tone]="tone()">
      <span class="logo__name">Renata Taiana</span>
      @if (!compact()) {
        <span class="logo__tag">Travel Designer</span>
      }
    </span>
  `,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
    }

    .logo {
      display: flex;
      flex-direction: column;
      gap: 0.18rem;
      line-height: 1;
      color: inherit;
    }

    .logo__name {
      font-family: var(--font-display, 'Cormorant Garamond', Georgia, serif);
      font-size: 1.22rem;
      font-weight: 600;
      letter-spacing: 0.03em;
      white-space: nowrap;
    }

    .logo__tag {
      font-family: var(--font-sans, 'Outfit', system-ui, sans-serif);
      font-size: 0.56rem;
      font-weight: 500;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      opacity: 0.7;
    }

    .logo[data-tone='light'] .logo__name {
      color: #fff;
    }

    .logo[data-tone='light'] .logo__tag {
      color: #e2c48a;
      opacity: 0.9;
    }

    .logo[data-tone='dark'] .logo__name {
      color: #0b2f45;
    }

    .logo[data-tone='dark'] .logo__tag {
      color: #2f8a9b;
      opacity: 0.95;
    }

    .logo--compact .logo__name {
      font-size: 1.05rem;
    }

    @media (min-width: 768px) {
      .logo__name {
        font-size: 1.4rem;
      }

      .logo__tag {
        font-size: 0.6rem;
      }
    }
  `,
})
export class BrandLogo {
  readonly tone = input<'light' | 'dark'>('light');
  readonly compact = input(false);
}
