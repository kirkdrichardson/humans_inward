import { extendObservable } from 'mobx';

class NavigationStore {
  constructor() {
      extendObservable(this, {
        showDiscover: true,
        showPodcasts: false
      })
  }
}

const singleton = new NavigationStore();
export default singleton;
