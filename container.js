const dependable = require('dependable');
const path = require('path');

const container = dependable.container();

const simpleDepedencies = [
    ["_", "lodash"]
];

simpleDepedencies.forEach(function (val) {
    container.register(val[0], function () {
        return require(val[1]);
    });
});

container.load(path.join(__dirname,"/controllers"));
container.load(path.join(__dirname,"/helpers"));

container.register('container',function(){
    return container;
});

module.exports = container;