import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class FormsSignInWithLinkComponent extends Component {
  @service authenticator;
  @tracked linkSent = false;
  @tracked email = '';

  @action
  async onSendMeSignInLink() {
    await this.authenticator.useEmailLink(this.email);
    this.linkSent = true;
  }
}
