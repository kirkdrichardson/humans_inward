import { extendObservable, action } from 'mobx';

class NavigationStore {
  constructor() {
      extendObservable(this, {
        showDiscover: true,
        showCategories: false,
        showPodcasts: false,
        podcastsByTopic: []
      });
  }

  fetchPodcastsByTopic = action(tag => {
    if (tag === undefined) {
      throw new Error('Podcast tag was not defined');
    }
    const apiGET = `http://gpodder.net/api/2/tag/${tag}/20.json`;
    return (
      fetch(apiGET).then(res => {
        if (res.ok && res.status === 200 && !res.bodyUsed) {
        return res.json();
        }
        return 'Podcast request was unsuccessful';
      }).then(data => {
        this.podcastsByTopic = data;
        this.showCategories = true;
      })
      .catch(e => console.error('There was an error fetching podcasts: ', e))
  );
});


}

const navigationStore = new NavigationStore();
export default navigationStore;
