export const SET_TASKS = "SET_TASKS";

export const setTaskList = (task: string[]) => ({
  type: SET_TASKS,
  payload: task
});
