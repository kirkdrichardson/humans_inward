import React, { Component } from 'react';
import styled from 'styled-components';

import PodcastObjects from './../../data/Podcast.js';

import PodcastRow from './PodcastRow.js';

export default class Home extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <PodcastRow data={PodcastObjects} />
        <PodcastRow data={PodcastObjects} />
        <PodcastRow data={PodcastObjects} />
      </div>

    );
  }
}
