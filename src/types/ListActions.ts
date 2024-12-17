type AddAction = {
  type: 'add',
  payload: {
    text: string;
  }
}

type EditTextAction = {
  type: 'editText',
  payload: {
    id: number;
    newText: string;
  }
}

type ToggleDoneAction = {
  type: 'toggleDone',
  payload: {
    id: number;
  }
}

type RemoveAction = {
  type: 'remove',
  payload: {
    id: number;
  }
}

export type ListActions = AddAction | EditTextAction | ToggleDoneAction | RemoveAction;