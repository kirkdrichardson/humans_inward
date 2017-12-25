import { extendObservable, action } from 'mobx';

class NavigationStore {
  constructor() {
      extendObservable(this, {
        activeTab: 'discover',
        showDiscover: true,
        showCategories: false,
        showPodcasts: false,
        podcastsByTopic: [],


        // TODO - remove duplicate podcasts
        // get pocastArrWithoutDuplicates() {
        //   let podcastsWithTitle = 0;
        //   return this.podcastsByTopic.filter(podcast => {
        //     this.podcastByTopic.forEach
        //   }
        // }

        get filteredPodcasts() {
          return this.podcastsByTopic.sort((a, b) => {
            if (Number(a.subscribers) > Number(b.subscribers)) {
              return -1;
            }
            return 1;
          });
        }
      });
  }



  setObservablesToDefault = action(() => {
    this.showDiscover = true;
    this.showCategories = false;
    this.showPodcasts = false;
    this.podcastsByTopic = [];
  });

  fetchPodcastsByTopic = action(tag => {
    if (tag === undefined) {
      throw new Error('Podcast tag was not defined');
    }
    const apiGET = `http://gpodder.net/api/2/tag/${tag}/50.json`;
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
