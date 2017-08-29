/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton.vue';
import Welcome from './Welcome.vue';
import MGLGallery from './MGLGallery.vue';
import SliderGallery from './SliderGallery.vue';
import StaticMessage from './Message.vue';
import InputMessage from './InputMessage.vue';
import ConditionalBTNMSG from './ConditionalBTNMSG.vue';
import CNDTLTextInputs from './CNDTLTextInputs.vue';
import StaticMultiplication from './MultiplicationTable.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }));

storiesOf('Gallery', module)
  .add('Multiple grid list', () => ({
    components: { MGLGallery },
    template:'<MGLGallery></MGLGallery>',
  }))
  .add('Slidier image gallery', () => ({
    components: { SliderGallery },
    template: '<slider-gallery></slider-gallery>'
  }))

storiesOf('Messages', module)
  .add('Static Message in Data Object', () => ({
    components: { StaticMessage },
    template: '<static-message></static-message>'
  }))
  .add('Messages with input', () => ({
    components: { InputMessage },
    template: '<input-message></input-message>'
  }))
  .add('Message with conditional button', () => ({
    components: { ConditionalBTNMSG },
    template: '<ConditionalBTNMSG></ConditionalBTNMSG>'
  }))
  .add('Message with conditional text', () => ({
    components: { CNDTLTextInputs },
    template: '<CNDTLTextInputs></CNDTLTextInputs>'
  }))

storiesOf('Array Rendering', module)
  .add('Static Multiplication Table', () =>({
    components: { StaticMultiplication },
    template: '<StaticMultiplication></StaticMultiplication>'
  }))