<template>
  <div id="app">
    <div class="input-wrapper">
      <textarea class="yaml-input" :value="input" @input="update"></textarea>
    </div>
		<div class="rendered-svg-wrapper" v-html="renderedSvg">
		</div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce';
import yaml from 'yaml';
import SvgVowelChart from 'swinebouk-svg';
import swinebouk from 'swinebouk';
import defaultInput from './defaultInput';

const {parse: parseYaml} = yaml;
const {InputParser} = swinebouk;


const svgVowelChart = new SvgVowelChart();

const router = new VueRouter({
  routes // short for `routes: routes`
})

export default {
  name: 'app',
	data: function () {
		return {
			input: defaultInput
		}
	},
	computed: {
		renderedSvg: function () {
      const inputAsObject = parseYaml(this.input);
      const vowelList = new InputParser().parse(inputAsObject);
			return svgVowelChart.render(vowelList).outerHTML;
		}
	},
	methods: {
		update: debounce(function (e) {
			this.input = e.target.value;
		}, 300)
	}
}
</script>

<style>
@font-face {
	font-family: "DejaVu Sans";
	src: url("./assets/DejaVuSans.ttf");
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.input-wrapper {
  width: 100%;
  height: 30%;
  vertical-align: top;
  box-sizing: border-box;
}

.yaml-input {
  border: none;
  width: 100%;
  height: 100%;
  resize: none;
  outline: none;
  margin: 0;
  padding: 1em;
  box-sizing: border-box;
  font-size: 14pt;
}

.rendered-svg-wrapper {
  width: 100%;
  height: 70%;
  vertical-align: top;
  box-sizing: border-box;
}

.vowel-outer-svg {
	font-size: 1;
}

.vowel-outer-svg {
	width: auto;
	height: auto;
}

.vowel-inner-svg {
	width: 100%;
	max-width: 700px;
}

.vowel-frame {
	fill: none;
	stroke: dimgray;
	stroke-width: 0.4;
}

.vowel-inner-frame {
	stroke: dimgray;
	stroke-width: 0.4;
}

.vowel-marker {
	fill: dimgray;
}

.vowel-marker-rounded {
}

.vowel-marker-unrounded {
}

.vowel-label {
	font-family: "DejaVu Sans";
	dominant-baseline: middle;
}

.vowel-label-rounded {
	text-anchor: start;
	transform: translateX(0.25em);
}

.vowel-label-unrounded {
	text-anchor: end;
	transform: translateX(-0.25em);
}
</style>
