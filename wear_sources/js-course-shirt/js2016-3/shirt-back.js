'use strict';
import Kottan from 'good-mood'

class JsCourse extend KottanCourse {
  constructor({dates: {start, end}, location, program}) {
    this.students = []
    while (new Date() > start && new Date () < end) {
      this.students.gatherAt(location).consume(program)
    }
  }
  participate(kottan) { 
    this.students.push(kottan)
  }
}

const jsCourse = new JsCourse({
  location: {
      country: 'Ukraine',
      cities: ['Kyiv','Kharkiv','Lviv’],
  },
  dates: {
      start: new Date('May 12,2016'),
      end: new Date('July 30, 2016’),
  },
  program: {
      basic: ['(Post)?HTML','(Post)?CSS','Semantics','ES6'],
      server: ['NodeJS','ember-cli'],
      testing: ['TDD','Mocha','Chai'],
      concepts: ['REST', 'SPA'],
      ci_cd: ['build tooling', 'Travis'],
      frameworks: ['React', 'Angular','Ember'],
  }
})

new Kottan(this).participate(jsCourse)
