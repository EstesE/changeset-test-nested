import Component from '@ember/component';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';

export default Component.extend({
    classNames: ['form-group', 'm-b'],
    classNameBindings: ['hasErrors:has-error'],

    init() {
        this._super(...arguments);
    },

    hasErrors: computed('changeset.errors', function() {
        let error = this.changeset.get('errors').findBy('key', this.property);
        if (isPresent(error)) {
            return error;
        }
    }).readOnly()
    
});
