import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('contact');
  },

  actions: {

    deleteContact(contact) {
        console.log(contact);
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        contact.destroyRecord();
      }
    }
  }

});
