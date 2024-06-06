import { SET_TASKS } from "@/redux/actions/taskSliceActions";

interface TodoState {
  taskList: string[];
}

interface TodoAction {
  type: string;
  payload: string[];
}

const initialState: TodoState = {
  taskList: []
};

const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        taskList: action.payload
      };
    default:
      return state;
  }
};

export default todoReducer;
