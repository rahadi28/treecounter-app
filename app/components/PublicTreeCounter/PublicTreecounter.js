import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoadingIndicator from '../Common/LoadingIndicator';
import TPOComponent from '../TpoProjects/TPOComponent';
import { treecounterLookupAction } from '../../actions/treecounterLookupAction';
import SvgContainer from '../Common/SvgContainer';
import TreecounterGraphicsText from '../TreecounterGraphics/TreecounterGraphicsText';
import SupportButton from './SupportButton';

class PublicTreecounter extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      svgData: {},
      displayName: '',
      isTpo: false
    };
  }

  fetchAndSetSearchResult(props) {
    const {
      dispatch,
      match: { params }
    } = props;
    // Call Search API

    dispatch(treecounterLookupAction(params.treecounterId))
      .then(treecounter => {
        console.log(treecounter);
        this.setState({
          svgData: {
            id: treecounter.id,
            target: treecounter.countTarget,
            planted: treecounter.countPlanted,
            community: treecounter.countCommunity,
            personal: treecounter.countPersonal
          },
          displayName: treecounter.displayName,
          isTpo: treecounter.userProfile && treecounter.userProfile === 'tpo',
          id: treecounter.id
        });
      })
      .catch(error => console.log(error));
  }
  componentWillMount() {
    console.log('Search ----- Component will mount', this.props);
    this.fetchAndSetSearchResult(this.props);
  }
  componentWillReceiveProps(nextProps) {
    console.log(
      'Search ----- Component will recieve props',
      nextProps,
      this.props
    );
    if (
      this.props.match.params.treecounterId ===
      nextProps.match.params.treecounterId
    )
      return;
    this.fetchAndSetSearchResult(nextProps);
  }
  render() {
    return (
      <div className="canvasContainer flex-column search-container">
        {this.state.ifTpo ? (
          <div className="search-container__header">
            <i className="material-icons">language</i>
            <div>
              <span>Tree-Planting Organization</span>
              <h4>{this.state.displayName}</h4>
            </div>
          </div>
        ) : (
          <div className="search-container__header sidenav-wrapper">
            <i className="material-icons">account_circle</i>
            <div>
              <span>Individual</span>
              <h4>{this.state.displayName}</h4>
            </div>
          </div>
        )}
        <div className="search-container__content sidenav-wrapper">
          <div className="canvasContainer flex-column">
            <SupportButton active={true} isUserLoggedIn={true} />
            <SvgContainer {...this.state.svgData} />
            {this.props.treecounterData === null ? (
              <LoadingIndicator />
            ) : (
              <TreecounterGraphicsText treecounterData={this.state.svgData} />
            )}
          </div>
          {this.state.ifTpo ? <TPOComponent id={this.state.id} /> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  console.log('Store updated - Search', state);
  return {
    userTpos: state.entities.tpo
  };
};

export default connect(mapStateToProps)(PublicTreecounter);

import PropTypes from 'prop-types';
PublicTreecounter.propTypes = {
  userTpos: PropTypes.object.isRequired,
  treecounterData: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      treecounterId: PropTypes.number
    })
  }).isRequired
};
