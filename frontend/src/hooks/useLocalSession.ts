import { IStore } from "data";

export const useLocalSession = {
  store: "store",

  loadStoreFromSessionStorage: function (): IStore | undefined {
    try {
      const serializedStore = sessionStorage.getItem(this.store) ?? "{}";
      return JSON.parse(serializedStore);
    } catch (error) {
      console.error(error);
    }
  },

  saveStateToSessionStorage: function (payload: any): void {
    try {
      const serializedStore = JSON.stringify(payload);
      sessionStorage.setItem(this.store, serializedStore);
    } catch (error) {
      console.error(error);
    }
  },

  clearSessionStorage() {
    sessionStorage.clear();
  },
};
