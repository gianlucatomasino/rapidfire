import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class LogoutBtnComponent extends Component {
  @service authenticator;

  @action
  onLogout() {
    this.authenticator.signout();
  }
}
