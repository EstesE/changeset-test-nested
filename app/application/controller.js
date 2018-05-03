import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        restore(changeset) {
            changeset.rollback();
        }
    }
});
