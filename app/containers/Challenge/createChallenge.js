import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { challenge, challengeStatus } from '../../actions/challengeActions';

import { updateRoute } from '../../helpers/routerHelper';
import { setProgressModelState } from '../../reducers/modelDialogReducer';
import {
  userChallengesSelector,
  currentUserProfileSelector
} from '../../selectors';

import Challenge from '../../components/Challenge/createChallenge';

class ChallengeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
    this.challenge = this.challenge.bind(this);
  }

  onTabChange(title) {
    this.props.navigation.setParams({ titleParam: title });
  }
  challenge(challengeDetails) {
    this.props
      .challenge(challengeDetails)
      .then(success => {})
      .catch(err => {
        this.setState({
          error: err.response.data.message
        });
      });
  }
  render() {
    return (
      <Challenge
        onTabChange={title => this.onTabChange(title)}
        setProgressModelState={this.props.setProgressModelState}
        updateRoute={(routeName, id) =>
          this.props.route(routeName, id, this.props.navigation)
        }
        error={this.state.error}
        challengeUser={this.challenge}
        challenges={this.props.userChallenges}
        navigation={this.props.navigation}
        challengeStatus={this.props.challengeStatus}
        currentUserProfile={this.props.userProfile}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    userChallenges: userChallengesSelector(state),
    userProfile: currentUserProfileSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      challengeStatus,
      setProgressModelState,
      challenge,
      route: (routeName, id, navigation) => dispatch =>
        updateRoute(routeName, navigation || dispatch, id)
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeContainer);

ChallengeContainer.propTypes = {
  navigation: PropTypes.any,
  setProgressModelState: PropTypes.func,
  userChallenges: PropTypes.array,
  challenge: PropTypes.func,
  route: PropTypes.func,
  challengeStatus: PropTypes.func,
  userProfile: PropTypes.any
};
