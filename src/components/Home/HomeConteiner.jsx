import React from 'react';
import { connect } from 'react-redux'
import Home from './Home';
import { getHomePoster, getHomeAbout } from '../../selectors/Home-selectors'


class HomeConteiner extends React.Component {

   render() {
      return <Home {...this.props} />
   }
}
let mapStateToProps = (state) => {
   return {
      Poster: getHomePoster(state),
      About: getHomeAbout(state),
   }
}
export default connect(mapStateToProps)(HomeConteiner)