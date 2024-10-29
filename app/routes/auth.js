import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AuthRoute extends Route {
  @service authenticator;
  @service router;

  beforeModel(transition) {
    if (!this.authenticator.isAuthenticated()) {
      this.router.transitionTo('login');
    }
  }
}
