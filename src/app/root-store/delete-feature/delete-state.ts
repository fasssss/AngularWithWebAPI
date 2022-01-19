export interface deleteState{
  heroName: string | null;
  isComplete: boolean;
  error: string | null;
}

export const initialState = {
  heroName: null,
  isComplete: false,
  error: null
}
