import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('contact');
    },
       
    actions: {

        sendMessage(newMessage) {
            newMessage.save().then(() =>
            this.controller.set('responseMessage', true),
            this.controller.set('model', ''));
        },

        willTransition() {
            this.controller.get('model').rollbackAttributes();
        }
    }
});

