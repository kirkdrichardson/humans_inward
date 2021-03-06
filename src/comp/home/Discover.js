import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import IconTile from './../../asset/tile/IconTile';
import TileData from './../../data/DiscoverCategoryTiles.js';
import Category from './../../comp/category/Category.js';

import color from './../../global/Color';

import navigationStore from './../../store/NavigationStore.js';

// const selectColor = (index) => {
//   const keys = Object.keys(color.rubiks);
//   index = index > keys.length ? (Math.floor(Math.random() * (keys.length - 1))) : index;
//   console.log(index)
//   return color.rubiks[keys[index] !== 'black' ? keys[index] : keys[2]];
// }

const Discover = observer(props => {
  const handleCategoryRequest = (e) => {
    navigationStore.fetchPodcastsByTopic(e.currentTarget.id);
    console.log('fetched podcasts by category');
  }
  // display podcast category cards
  if (!navigationStore.showCategories) {
    return (
      <TileContainer>
        {
          TileData.map(e =>
            (<IconTile
              id={e.tag}
              key={e.tag}
              icon={e.icon}
              title={e.title}
              iconColor={e.color}
              onClick={handleCategoryRequest}
            />))
        }
       </TileContainer>
    );
  }

  // if a card is clicked display category view
  if ((navigationStore.showCategories)
      && (navigationStore.podcastsByTopic.length)) {
        return <Category podcastArr={navigationStore.filteredPodcasts}/>;
      }



}); // end of Discover

const CenteredContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const TileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  color: white;
  justify-content: center;
  align-items: center;
`;

export default Discover;
