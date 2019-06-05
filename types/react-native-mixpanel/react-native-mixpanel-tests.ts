import * as Mixpanel from 'react-native-mixpanel';

Mixpanel.sharedInstanceWithToken('1234567890');
Mixpanel.track('Event name');
Mixpanel.trackWithProperties('Click Button', { button_type: 'yellow button', button_text: 'magic button' });
Mixpanel.createAlias('123456');
Mixpanel.identify('123456');
Mixpanel.set({ $email: 'elvis@email.com' });
Mixpanel.setOnce({ $email: 'elvis@email.com', Created: new Date().toISOString() });
Mixpanel.timeEvent('Image Upload');
Mixpanel.track('Image Upload');
Mixpanel.registerSuperProperties({ 'Account type': 'Free', 'User Type': 'Vendor' });
Mixpanel.registerSuperPropertiesOnce({ Gender: 'Female' });
Mixpanel.trackCharge(399);
Mixpanel.trackChargeWithProperties(399, { product: 'ACME Wearable tech' });
Mixpanel.increment('Login Count', 1);
Mixpanel.setPushRegistrationId('1234567890abc');
Mixpanel.initPushHandling('123456666');
Mixpanel.clearPushRegistrationId();
Mixpanel.addPushDeviceToken('1234567890abc');
Mixpanel.reset();
Mixpanel.getDistinctId(id => id);
