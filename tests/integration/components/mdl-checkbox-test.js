import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-checkbox', 'Integration | Component | mdl checkbox', {
  integration: true
});

test('it renders with the correct text', function(assert) {

  this.render(hbs`{{mdl-checkbox}}`);
  assert.equal(this.$().text().trim(), '');

  this.render(hbs`{{mdl-checkbox text='Safo'}}`);
  assert.equal(this.$().text().trim(), 'Safo');

  // Template block usage:
  this.render(hbs`
    {{#mdl-checkbox}}
      Hello
    {{/mdl-checkbox}}
  `);

  assert.equal(this.$().text().trim(), 'Hello');
});

test('it sets correct initial value', function(assert) {
  this.set('checkboxValue1', true);
  this.render(hbs`{{mdl-checkbox value=checkboxValue1}}`);

  assert.ok(this.$().find('label').hasClass('is-checked'));

  this.set('checkboxValue2', false);
  this.render(hbs`{{mdl-checkbox value=checkboxValue2}}`);

  assert.notOk(this.$().find('label').hasClass('is-checked'));
});

test('it changes state when value is changed', function(assert) {
  this.set('checkboxValue', false);
  this.render(hbs`{{mdl-checkbox value=checkboxValue}}`);

  this.set('checkboxValue', true);

  assert.ok(this.$().find('label').hasClass('is-upgraded'));
  assert.ok(this.$().find('label').hasClass('is-checked'));
});
