import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import IconTile from './../../asset/tile/IconTile.js';

import TileData from './../../data/DiscoverCategoryTiles.js';

import color from './../../global/Color.js';

// const selectColor = (index) => {
//   const keys = Object.keys(color.rubiks);
//   index = index > keys.length ? (Math.floor(Math.random() * (keys.length - 1))) : index;
//   console.log(index)
//   return color.rubiks[keys[index] !== 'black' ? keys[index] : keys[2]];
// }

const Discover = inject("NavigationStore")(observer((props) =>
  <TileContainer>
    {
      TileData.map(e =>
        <IconTile
          id={e.tag}
          key={e.tag}
          icon={e.icon}
          title={e.title}
          color={e.color}
          onClick={(e) => console.log(e.currentTarget.id)}/>
        )
    }
  </TileContainer>
));

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
