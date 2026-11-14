import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CONTACT, PROFILE } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal.directive';

/**
 * Contact section. The site is static (GitHub Pages) and has no backend, so the form does not
 * pretend to send anything: it validates the input and opens a pre-filled email in the visitor's
 * mail app. Set CONTACT.formMode to 'none' to hide it.
 */
@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, ReactiveFormsModule],
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly profile = PROFILE;
  protected readonly contact = CONTACT;
  protected readonly copied = signal(false);
  protected readonly opened = signal(false);
  protected readonly submitted = signal(false);

  protected readonly form = inject(NonNullableFormBuilder).group({
    name: ['', [Validators.required, Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.maxLength(120)]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]],
  });

  protected showError(field: 'name' | 'email' | 'subject' | 'message'): boolean {
    const c = this.form.controls[field];
    return c.invalid && (c.touched || this.submitted());
  }

  protected submit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      document.querySelector<HTMLElement>('#contact-form [aria-invalid="true"]')?.focus();
      return;
    }
    const { name, email, subject, message } = this.form.getRawValue();
    const body = `${message}\n\n— ${name}\n${email}`;
    const href = `mailto:${this.profile.email}?subject=${encodeURIComponent(subject || `Hello from ${name}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    this.opened.set(true);
  }

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.profile.email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      window.location.href = `mailto:${this.profile.email}`;
    }
  }
}
