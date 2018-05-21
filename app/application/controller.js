import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        restore(changeset) {
            // changeset.rollback(this.snapshot);
            debugger;
            // changeset.restore(this.snapshot);
            changeset.rollback();
        }
    }
});
