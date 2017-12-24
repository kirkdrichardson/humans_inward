import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Error from './../../asset/Error.js';
import Podcast from './Podcast.js';

import color from './../../global/Color.js';

const Category = ({ podcastArr }) => {
  if (!podcastArr) {
    return <Error message={'There was an error fetching that category'} />
  }
  return (
    <Categories>
      {
        podcastArr.map(podcast =>
          <Podcast key={podcast.title} podcast={podcast} />
      )}
    </Categories>
  );
};

Category.PropTypes = {
  podcastArr: PropTypes.array.isRequired
}

const Categories = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 0 0 200px;
  color: ${color.primaryTextNegative};
`;

export default Category;
