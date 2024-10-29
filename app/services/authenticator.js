import Service from '@ember/service';
import {
  getAuth,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signOut,
} from 'firebase/auth';
import { service } from '@ember/service';
import { isPresent } from '@ember/utils';

export default class AuthenticatorService extends Service {
  @service router;

  _auth = getAuth();

  setup() {
    this._authStateChanged();
  }

  _authStateChanged() {
    onAuthStateChanged(this._auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        return this.router.transitionTo('auth');
      } else {
        this.router.transitionTo('login');
      }
    });
  }

  useEmailLink(email) {
    const actionCodeSettings = {
      url: window.location.origin + '/authenticate',
      handleCodeInApp: true,
    };
    window.localStorage.setItem('rapidFireEmailForSignIn', email);
    return sendSignInLinkToEmail(this._auth, email, actionCodeSettings);
  }

  signout() {
    signOut(this._auth);
    this.router.transitionTo('login');
  }

  isAuthenticated() {
    return isPresent(this._auth.currentUser);
  }
}
