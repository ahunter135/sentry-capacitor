import { Scope } from '@sentry/hub';
import { Breadcrumb, User } from '@sentry/types';

import { NATIVE } from './wrapper';

/**
 * Extends the scope methods to set scope on the Native SDKs
 */
export class CapacitorScope extends Scope {
  /**
   * @inheritDoc
   */
  public setUser(user: User | null): this {
    NATIVE.setUser(user);
    return super.setUser(user);
  }

  /**
   * @inheritDoc
   */
  public setTag(key: string, value: string): this {
    NATIVE.setTag(key, value);
    return super.setTag(key, value);
  }

  /**
   * @inheritDoc
   */
  public setTags(tags: { [key: string]: string }): this {
    // As native only has setTag, we just loop through each tag key.
    Object.keys(tags).forEach(key => {
      NATIVE.setTag(key, tags[key]);
    });
    return super.setTags(tags);
  }

  /**
   * @inheritDoc
   */
  public setExtras(extras: { [key: string]: unknown }): this {
    Object.keys(extras).forEach(key => {
      NATIVE.setExtra(key, extras[key]);
    });
    return super.setExtras(extras);
  }

  /**
   * @inheritDoc
   */
  public setExtra(key: string, extra: unknown): this {
    NATIVE.setExtra(key, extra);
    return super.setExtra(key, extra);
  }

  /**
   * @inheritDoc
   */
  public addBreadcrumb(breadcrumb: Breadcrumb, maxBreadcrumbs?: number): this {
    NATIVE.addBreadcrumb(breadcrumb);
    return super.addBreadcrumb(breadcrumb, maxBreadcrumbs);
  }

  /**
   * @inheritDoc
   */
  public clearBreadcrumbs(): this {
    NATIVE.clearBreadcrumbs();
    return super.clearBreadcrumbs();
  }
}
