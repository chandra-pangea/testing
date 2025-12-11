class Singleton {
    static #instance = null; // private static instance reference
  
    constructor() {
      if (Singleton.#instance) {
        throw new Error("Use Singleton.getInstance() instead of new Singleton()");
      }
  
      // Example initialization
      this.data = Math.random();
  
      Singleton.#instance = this;
    }
  
    static getInstance() {
      if (!Singleton.#instance) {
        new Singleton();
      }
      return Singleton.#instance;
    }
  
  
    static revive(key, value) {
      if (key === "" && value && value.__isSingleton) {
        return Singleton.getInstance();
      }
      return value;
    }
  }
  