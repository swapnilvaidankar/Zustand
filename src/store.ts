import create, { UseStore } from "zustand";

interface IPeople {
  people: any[];
  addPeople: (person: string) => void;
}

//eslint-disable-next-line
const usePeopleStore: UseStore<IPeople> = create((set) => ({
  people: [{ person: "Swapnil" }, { person: "Jay" }],
  addPeople: (person) =>
    set((state) => ({
      people: [...state.people, { person }]
    }))
}));

export default usePeopleStore;
