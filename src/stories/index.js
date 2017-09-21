/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Vue from 'vue';

import MyButton from './MyButton.vue';
import Welcome from './Welcome.vue';
import MGLGallery from './MGLGallery.vue';
import SliderGallery from './SliderGallery.vue';
import StaticMessage from './Message.vue';
import InputMessage from './InputMessage.vue';
import ConditionalBTNMSG from './ConditionalBTNMSG.vue';
import CNDTLTextInputs from './CNDTLTextInputs.vue';
import ArrayOfObjectsIdx from './ArrayOfObjects.vue';
import UpvoteBtn from './UpvoteBtn.vue';
import Calculator from './Calculator.vue';
import ComputedCalc from './ComputedCalc.vue';
import Voter from './Voter.vue';
import FilterArrayOO from './FilterArrayOO.vue';
import ComputedFilterArrayOO from './ComputedFilterArrayOO.vue';
import SearchFilterAOO from './SearchFilterAOO.vue';
import OrderedResultsAOO from './OrderedResultsAOO.vue';
import CustomArrayFilter from './CustomArrayFilter.vue';
import CustomFilterArrayOO from './CustomFilterArrayOO.vue';
import FilteredPeople from './FilteredPeople.vue';
import StoryWithComponents from './StoryWithComponents.vue';
import SimpleEmit from './SimpleEmit.vue';
import PassingArgs from './PassingArgs.vue';
import Chariot from './Chariot.vue';
import ToggleDiv from './ToggleDiv.vue';

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
  .add('Array of Objects with index', () =>({
    components: { ArrayOfObjectsIdx },
    template: '<ArrayOfObjectsIdx></ArrayOfObjectsIdx>'
  }))
  .add('Filter Array Of Objects', () => ({
    components: { FilterArrayOO },
    template: '<FilterArrayOO></FilterArrayOO>'
  }))
  .add('Computed Filter Array Of Objects', () => ({
    components: { ComputedFilterArrayOO },
    template: '<ComputedFilterArrayOO></ComputedFilterArrayOO>'
  }))
  .add('Searchable Filter Array Of Objects', () => ({
    components: { SearchFilterAOO },
    template: '<SearchFilterAOO></SearchFilterAOO>'
  }))
  .add('Ordered Results Array Of Objects', () => ({
    components: { OrderedResultsAOO },
    template: '<OrderedResultsAOO></OrderedResultsAOO>'
  }))
  .add('Custom Array Filter', () => ({
    components: { CustomArrayFilter },
    template: '<CustomArrayFilter></CustomArrayFilter>'
  }))
  .add('Custom Array Story Filter', () => ({
    components: { CustomFilterArrayOO },
    template: '<CustomFilterArrayOO></CustomFilterArrayOO>'
  }))
  .add('Filtered Array of Objects by Age', () => ({
    components: { FilteredPeople },
    template: '<FilteredPeople></FilteredPeople>'
  }))

storiesOf('Event Handlers', module)
  .add('Upvote button', () => ({
    components: { UpvoteBtn },
    template: '<UpvoteBtn></UpvoteBtn>'
  }))
  .add('Calculator', () => ({
    components: { Calculator },
    template: '<Calculator></Calculator>'
  }))
  .add('Calculator with computed properties', () => ({
    components: { ComputedCalc },
    template: '<ComputedCalc></ComputedCalc>'
  }))
  .add('Voter Platform', () => ({
    components: { Voter },
    template: '<Voter></Voter>'
  }))

storiesOf('HTML With Components', module)
  .add('Voting on Story With Components', () => ({
    components: { StoryWithComponents },
    template: '<StoryWithComponents></StoryWithComponents>'
  }))

storiesOf('Emit, Listen, Lifecycle Hooks', module)
  .add('Simple Emit functionality', () => ({
    components: { SimpleEmit },
    template: '<SimpleEmit></SimpleEmit>'
  }))
  .add('Passing Args', () => ({
    components: { PassingArgs },
    template: '<passing-args></passing-args>'
  }))
  .add('Chariot', () => ({
    components: { Chariot },
    template: '<Chariot></Chariot>'
  }))

storiesOf('Class and Style Binding', module)
  .add('Basic Binding', () => ({
    components: { ToggleDiv },
    template: '<ToggleDiv></ToggleDiv>'
  }))