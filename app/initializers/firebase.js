import { initializeApp } from 'firebase/app';
import ENV from 'rapidfire/config/environment';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

export function initialize(application) {
  console.debug(
    'Initialize firebase app with this config',
    ENV.APP.FIREBASE_CONFIG,
  );

  let app = initializeApp(ENV.APP.FIREBASE_CONFIG);

  if (ENV.environment === 'development') {
    console.debug('Attach to firebase emulator');
    connectAuthEmulator(getAuth(), 'http://127.0.0.1:9099');
  }
}

export default {
  initialize,
};
