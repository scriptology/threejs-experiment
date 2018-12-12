const projects = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROJECTS': {
      return [ ...action.data ];
    }
    case 'PROJECTS_ADD': {
    	return [...[action.data], ...state];
    }
    case 'PROJECTS_EDIT': {
    	return state.map((item) => {
    		if (item.id !== action.data.id) {
    			return item;
    		}
    		return {
    			...item,
    			...action.data,
    		};
    	});
    }
    case 'PROJECTS_REMOVE': {
    	return state.filter(item => item.id !== action.id);
    }
    default:
      return state;
  }
};

export default projects;
