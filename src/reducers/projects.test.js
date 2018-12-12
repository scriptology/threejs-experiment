import projects from './projects.js';

describe('tegElements reducer', () => {
  it('SET_PROJECTS', () => {
    const state = [];
    const action = {
      type: 'SET_PROJECTS',
      data: [{id: 3, sort: 2}, {id: 2, sort: 1}, {id: 1, sort: 3}]
    };
    const result = projects(state, action);
    expect(result).toEqual([{id: 3, sort: 2}, {id: 2, sort: 1}, {id: 1, sort: 3}]);
  })

  it('PROJECTS_ADD', () => {
    const state = [];
    const action = {
      type: 'PROJECTS_ADD',
      data: {
        id: 1,
        sort: 0,
      }
    };
    const result = projects(state, action);
    expect(result).toEqual([
      {
        id: 1,
        sort: 0,
      }
    ]);
  })

  it('PROJECTS_REMOVE', () => {
    const state = [
      {id: 3, sort: 2},
      {id: 2, sort: 1},
      {id: 1, sort: 3},
    ];
    const action = {
      type: 'PROJECTS_REMOVE',
      id: 3,
    };
    const result = projects(state, action);
    expect(result).toEqual([
      {id: 2, sort: 1},
      {id: 1, sort: 3},
    ]);
  })

})
