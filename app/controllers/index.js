import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Coming Soon',
  responseMessage: '',
  email: '',

  isValid: Ember.computed.match('model.email', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid')

  // actions: {

  //   saveInvitation() {
  //     const email = this.get('email');

  //     const newInvitation = this.store.createRecord('invitation', {
  //       email: email
  //     });

  //     newInvitation.save().then((response) => {
  //       this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
  //       this.set('email', '');
  //     });

  //   }
  // }

});
