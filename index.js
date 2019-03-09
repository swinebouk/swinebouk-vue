import yaml from 'yaml';

import SvgVowelChart from 'swinebouk-svg';

const {parse: parseYaml} = yaml;

const defaultInput = `vowels:
  - {front: 1, close: 1, round: false, label: 'i'}
  - {front: 1, close: 1, round: true, x-sampa: 'y'}
  - {front: 1, close: 2/3, round: false, x-sampa: 'e'}
  - {front: 1, close: 1/3, round: false, x-sampa: 'E'}
  - {front: 1, close: 0, round: false, x-sampa: 'a'}
  - {front: 0, close: 0, round: true, x-sampa: 'A'}
  - {front: 0, close: 1/3, round: true, x-sampa: 'O'}
  - {front: 0, close: 2/3, round: true, x-sampa: 'o'}
  - {front: 0, close: 1, round: true, x-sampa: 'u'}
  - {front: 0.5, close: 0.5, round: false, x-sampa: '@'}
`;

const svgVowelChart = new SvgVowelChart();

const app3 = new Vue({
	el: '#vowel-chart-app',
	data: {
		source: defaultInput
	},
	computed: {
		svgCopy() {
			return parseYaml(this.source);
		},
		svgResult() {
			return svgVowelChart.render(parseYaml(this.source)).outerHTML;
		}
	},
	method: {
		onSumbit: function (event) {
			alert("sdfklj");
		},
		render: function () {
			console.log("1");
			// const oldSvg = document.querySelector('#svg-result');
			// console.log("2");
			// oldSvg.remove();
			// console.log("3");
			// const newSvg = svgVowelChart.render(parseYaml(this.source)).outerHTML;
			// console.log("4");
			// document.querySelector('#vowel-chart-app').append(newSvg);
		}
	}
});
