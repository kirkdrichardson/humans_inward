import { observable } from 'mobx';

class NavigationStore {
  @observable showDiscover = true;
  @observable showPodcasts = false;
}

const singleton = new NavigationStore();
export default singleton;
