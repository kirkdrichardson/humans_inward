import React, { Component } from 'react';
import styled from 'styled-components';

import PodcastArr from './../../data/Podcast.js';

import PodcastRow from './PodcastRow.js';

const Podcasts = (function() {
  return [...Array(20)].map(() => PodcastArr[0]);
})();

export default class Home extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <PodcastRow data={Podcasts} />
      </div>

    );
  }
}
