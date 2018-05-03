import Route from '@ember/routing/route';
import Changeset from 'ember-changeset';
import Validations from './validation';
import lookupValidator from 'ember-changeset-validations';

export default Route.extend({
    model() {
        return {
            name: "North Slope Municipal Services",
            email: "alfred.borden@gmail.com",
            address: {
                street: "1274 Agvik Street",
                city: "Utqiagvik",
                state: "AK",
                zip: "99723"
            }
        };
    },

    setupController(controller, model) {
        controller.set('changeset', new Changeset(model, lookupValidator(Validations), Validations));
        controller.set('snapshot', controller.changeset.snapshot());
    }
});
