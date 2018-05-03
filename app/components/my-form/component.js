import Component from '@ember/component';
import states from 'changeset-test-nested/mixins/states';
import { isPresent } from '@ember/utils';

export default Component.extend(states, {
    actions: {
        validateProperty(changeset, property) {
            return changeset.validate(property);
        },

        selectState(changeset, val) {
            if (isPresent(val)) {
                changeset.set('address.state', val);
            } else {
                changeset.set('address.state', null);
            }
        }
    }
});
