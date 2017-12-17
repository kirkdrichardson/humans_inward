import strings from './../global/Strings.js';
import color from './../global/Color.js';
const s = strings.en.discoverTiles,
      c = color.rubiks;


const TileData = [
  {
    tag: 'news',
    icon: 'language',
    title: s.news,
    color: c.white
  },{
    tag: 'history',
    icon: 'format_align_left',
    title: s.history,
    color: c.burlywood
  },{
    tag: 'technology',
    icon: 'devices_other',
    title: s.technology,
    color: c.blue
  },{
      tag: 'arts-entertainment',
      icon: 'palette',
      title: s.artCulture,
      color: c.yellow
  },{
    tag: 'tv-film',
    icon: 'live_tv',
    title: s.tvFilm,
    color: c.red
  },{
    tag: 'congress',
    icon: 'gavel',
    title: s.congress,
    color: c.brown
  },{
    tag: 'spirituality',
    icon: 'group_work',
    title: s.spirituality,
    color: c.white
  },{
    tag: 'literature',
    icon: 'book',
    title: s.literature,
    color: c.burlywood
  },{
    tag: 'sports-recreation',
    icon: 'pool',
    title: s.sports,
    color: c.brown
  },{
    tag: 'philosophy',
    icon: 'visibility',
    title: s.philosophy,
    color: c.orange
  },{
    tag: 'radio',
    icon: 'radio',
    title: s.radio,
    color: c.brown
  },{
    tag: 'comedy',
    icon: 'sentiment_very_satisfied',
    title: s.comedy,
    color: c.yellow
  },{
    tag: 'music',
    icon: 'audiotrack',
    title: s.music,
    color: c.red
  },{
    tag: 'investing',
    icon: 'account_balance',
    title: s.investing,
    color: c.white
  },{
    tag: 'strange',
    icon: 'help_outline',
    title: s.esoteric,
    color: c.white
  },{
    tag: 'news-politics',
    icon: 'thumbs_up_down',
    title: s.politics,
    color: c.orange
  },{
    tag: 'self',
    icon: 'accessibility',
    title: s.self,
    color: c.yellow
  },{
    tag: 'business',
    icon: 'business',
    title: s.business,
    color: c.blue
  },{
    tag: 'interview',
    icon: 'mic',
    title: s.interview,
    color: c.red
  },{
    tag: 'finance',
    icon: 'attach_money',
    title: s.finance,
    color: c.green
  },{
    tag: 'careers',
    icon: 'location_city',
    title: s.professional,
    color: c.blue
  },{
    tag: 'ubuntu',
    icon: 'computer',
    title: s.ubuntu,
    color: c.orange
  },{
      tag: 'linux',
      icon: 'code',
      title: s.linux,
      color: c.green
  },{
      tag: 'startups',
      icon: 'flight_takeoff',
      title: s.entrepreneurship,
      color: c.green
    }
];

export default TileData;
