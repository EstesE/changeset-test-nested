import EmberObject from '@ember/object';
import StatesMixin from 'changeset-test-nested/mixins/states';
import { module, test } from 'qunit';

module('Unit | Mixin | states', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let StatesObject = EmberObject.extend(StatesMixin);
    let subject = StatesObject.create();
    assert.ok(subject);
  });
});
