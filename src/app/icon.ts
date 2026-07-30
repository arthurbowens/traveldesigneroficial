import { Component, input } from '@angular/core';

export type IconName =
  | 'check'
  | 'plane'
  | 'globe'
  | 'headset'
  | 'heart-handshake'
  | 'award'
  | 'star'
  | 'palm'
  | 'mountain'
  | 'wine'
  | 'snowflake'
  | 'landmark'
  | 'building'
  | 'ship'
  | 'heart'
  | 'users'
  | 'briefcase'
  | 'map-pin'
  | 'plus'
  | 'menu'
  | 'x'
  | 'compass';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [attr.viewBox]="viewBox"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      class="icon"
    >
      @switch (name()) {
        @case ('check') {
          <path d="M20 6 9 17l-5-5" />
        }
        @case ('plane') {
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.6c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.6-.2c.4-.3.6-.7.5-1.2z" />
        }
        @case ('globe') {
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        }
        @case ('headset') {
          <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
          <path d="M21 16a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 16a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        }
        @case ('heart-handshake') {
          <path d="M19 14c1.5-1.5 2.5-3.2 2.5-5.2A4.3 4.3 0 0 0 17.2 4.5c-1.4 0-2.6.7-3.2 1.8C13.4 5.2 12.2 4.5 10.8 4.5A4.3 4.3 0 0 0 6.5 8.8c0 2 1 3.7 2.5 5.2l3 3 3-3z" />
          <path d="m12 17-1.5 1.5a2.1 2.1 0 0 0 3 0L12 17z" />
          <path d="M8.5 11.5 11 14l5-5" />
        }
        @case ('award') {
          <circle cx="12" cy="8" r="6" />
          <path d="M15.5 13.1 17 22l-5-3-5 3 1.5-8.9" />
        }
        @case ('star') {
          <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z" />
        }
        @case ('palm') {
          <path d="M12 22V11" />
          <path d="M12 11c-2-4-6-5-9-4 2 3 4 4 6 4" />
          <path d="M12 11c2-4 6-5 9-4-2 3-4 4-6 4" />
          <path d="M12 11c-3-2-5-6-4-9 2 1 4 3 4 6" />
          <path d="M12 11c3-2 5-6 4-9-2 1-4 3-4 6" />
        }
        @case ('mountain') {
          <path d="m8 17 4-8 4 8" />
          <path d="m3 20 6.5-11.5a2 2 0 0 1 3.4 0L22 20" />
        }
        @case ('wine') {
          <path d="M8 2h8l1 7a5 5 0 0 1-10 0L8 2z" />
          <path d="M12 14v8" />
          <path d="M8 22h8" />
          <path d="M7.5 8h9" />
        }
        @case ('snowflake') {
          <path d="M12 2v20M2 12h20" />
          <path d="m5 5 14 14M19 5 5 19" />
          <path d="m8 4 4 4 4-4M8 20l4-4 4 4M4 8l4 4-4 4M20 8l-4 4 4 4" />
        }
        @case ('landmark') {
          <path d="M4 21h16" />
          <path d="M6 21V9l6-5 6 5v12" />
          <path d="M10 21v-5h4v5" />
          <path d="M9 12h1M14 12h1M9 15h1M14 15h1" />
        }
        @case ('building') {
          <path d="M3 21h18" />
          <path d="M5 21V7l7-4 7 4v14" />
          <path d="M9 9v.01M15 9v.01M9 12v.01M15 12v.01M9 15v.01M15 15v.01M9 18v.01M15 18v.01" />
        }
        @case ('ship') {
          <path d="M2 20a2.4 2.4 0 0 0 2 1h16a2.4 2.4 0 0 0 2-1" />
          <path d="M4 18 12 9l8 9" />
          <path d="M12 9V4" />
          <path d="M8 4h8" />
        }
        @case ('heart') {
          <path d="M19 14c1.5-1.5 2.5-3.2 2.5-5.2A4.3 4.3 0 0 0 17.2 4.5c-1.4 0-2.6.7-3.2 1.8C13.4 5.2 12.2 4.5 10.8 4.5A4.3 4.3 0 0 0 6.5 8.8c0 2 1 3.7 2.5 5.2L12 17l7-3z" />
        }
        @case ('users') {
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        }
        @case ('briefcase') {
          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        }
        @case ('map-pin') {
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        }
        @case ('plus') {
          <path d="M12 5v14M5 12h14" />
        }
        @case ('menu') {
          <path d="M4 6h16M4 12h16M4 18h16" />
        }
        @case ('x') {
          <path d="M18 6 6 18M6 6l12 12" />
        }
        @case ('compass') {
          <circle cx="12" cy="12" r="10" />
          <path d="m16.2 7.8-2.5 6.4-6.4 2.5 2.5-6.4 6.4-2.5z" />
        }
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      line-height: 0;
    }
    .icon {
      width: 1em;
      height: 1em;
    }
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly viewBox = '0 0 24 24';
}
