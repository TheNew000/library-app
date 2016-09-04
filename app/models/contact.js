import DS from 'ember-data';

export default DS.Model.extend({
    email: DS.attr('string'),
    message: DS.attr('string'),
    // Checking if Email field is filled and includes a valid email
    emailValid: Ember.computed.match('email', /^.+@.+\..+$/),
    // Ensures the message is longer than 5 characters
    messageValid: Ember.computed.gte('message.length', 5),

    // Checks to see if BOTH email and message are valid
    isValid: Ember.computed.and('emailValid', 'messageValid'),
    // Removes disabled property from the Send Message button
    isDisabled: Ember.computed.not('isValid')
});

    
