'use strict';
const {js_enthusiast : Kottan} = require('good-mood')
let jsCourse = {
    community : 'Kottans',
    session : 'JS2016-3',
    location : {
        country : 'Ukraine',
        cities : ['Kyiv', 'Kharkiv', 'Lviv']    
    },
    dates : {
        start : new Date ('May 12, 2016'),
        end : new Date ('July 30, 2016')
    },
    program : {
        basic : ['(Post)?HTML', '(Post)?CSS', 'Semantics','ES6'],
        server : ['NodeJS', 'ember-cli'],
        testing : ['TDD', 'Mocha', 'Chai'],
        concepts : ['REST'],
        ci_cd : ['Webpack', 'Travis'],
        frameworks : ['React', 'Angular', 'Polymer', 'Ember'],
    }
}
Kottan.use(jsCourse).then(() => { console.log('Very promising!') })
