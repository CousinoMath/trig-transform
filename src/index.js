let aValue = 1.0;
let bValue = 1.0;
let cValue = 0.0;
let dValue = 0.0;
const xMin = -3 * Math.PI;
const xMax = 3 * Math.PI;
const yMin = -3;
const yMax = 3;
aSlider.addEventListener('input', (evt) => {
    aValue = Number.parseFloat(aSlider.value);
    aLabel.innerText = `a = ${aValue.toFixed(1)}`;
    board.update();
});
bSlider.addEventListener('input', (evt) => {
    bValue = Number.parseFloat(bSlider.value);
    bLabel.innerText = `b = ${bValue.toFixed(1)}`;
    board.update();
});
cSlider.addEventListener('input', (evt) => {
    cValue = Number.parseFloat(cSlider.value);
    cLabel.innerText = `c = ${cValue.toFixed(1)}`;
    board.update();
});
dSlider.addEventListener('input', (evt) => {
    dValue = Number.parseFloat(dSlider.value);
    dLabel.innerText = `d = ${dValue.toFixed(1)}`;
    board.update();
});
let func = (x) => Math.sin(x);
funcSelect.addEventListener('input', (evt) => {
    switch (funcSelect.value) {
        case 'sin':
            func = (x) => Math.sin(x);
            break;
        case 'cos':
            func = (x) => Math.cos(x);
            break;
        case 'tan':
            func = (x) => Math.tan(x);
            break;
        case 'sec':
            func = (x) => 1 / Math.cos(x);
            break;
        case 'csc':
            func = (x) => 1 / Math.sin(x);
            break;
        case 'cot':
            func = (x) => 1 / Math.tan(x);
            break;
        default:
            func = (x) => (2 * x) / (1 + x * x);
            break;
    }
    board.update();
});
const board = JXG.JSXGraph.initBoard('jxgbox', {
    boundingbox: [xMin, yMax, xMax, yMin],
    axis: true
});
const graph = board.create('functiongraph',
    [(x) => func(x), xMin, xMax],
    { strokeColor: 'black', dash: 1 });
const tgraph = board.create('functiongraph',
    [(x) => aValue * func(bValue * x - cValue) + dValue, xMin, xMax],
    { strokeColor: 'blue' });
const point = board.create('glider', [0, func(0), graph],
    { strokeColor: 'red', fillColor: 'red', withLabel: false });
const tpoint = board.create('point',
    [() => (point.X() + cValue) / bValue, () => aValue * point.Y() + dValue],
    { strokeColor: 'blue', fillColor: 'blue', withLabel: false });
