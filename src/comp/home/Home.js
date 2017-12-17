import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import PodcastArr from './../../data/Podcast.js';

import Discover from './Discover.js';
import PodcastRow from './PodcastRow.js';


const Podcasts = (function() {
  return [...Array(20)].map(() => PodcastArr[0]);
})();

// const Timer = observer(({ timer }) =>
//     <div>{ timer.elapsedTime }</div>
// )

const Home = inject("NavigationStore")(observer((props) =>
  <div>
    { props.NavigationStore.showDiscover ?
        <Discover /> :
        <PodcastRow data={Podcasts} />
    }
  </div>
));

export default Home;

// export default class Home extends Component {
//   constructor(props) {
//     super(props);
//
//   }
//
//   render() {
//     console.log(Podcasts)
//     return(
//       <div>
//         <PodcastRow data={Podcasts} />
//       </div>
//
//     );
//   }
// }
