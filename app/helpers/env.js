import { helper } from '@ember/component/helper';
import ENV from 'rapidfire/config/environment';

export default helper(function env(positional /*, named*/) {
  return positional[0].split('.').reduce((config, item) => {
    return config[item];
  }, ENV.APP);
});
