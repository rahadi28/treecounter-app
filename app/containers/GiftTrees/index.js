import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateRoute } from '../../helpers/routerHelper';

import {
  selectedPlantProjectSelector,
  selectedTpoSelector,
  currentUserProfileSelector,
  currenciesSelector
} from '../../selectors';
import {
  selectPlantProjectAction,
  clearPlantProject
} from '../../actions/selectPlantProjectAction';
import { fetchCurrencies } from '../../actions/currencies';
import { gift, paymentClear } from '../../actions/donateAction';

import GiftTrees from '../../components/GiftTrees';
import { getPaymentStatus } from '../../reducers/paymentStatus';

class GiftTreesContainer extends Component {
  constructor(props) {
    super(props);
    this.openProjects = this.openProjects.bind(this);
  }
  componentDidMount() {
    this.props.fetchCurrencies();
  }
  openProjects(formValue) {
    //  console.log('in gif tree', formValue);
    updateRoute('app_gift_projects', this.props.navigation, 0, {
      userForm: formValue
    });
  }

  render() {
    let flag = this.props.currentUserProfile ? true : false;
    return (
      <GiftTrees
        selectedProject={this.props.selectedProject}
        selectedTpo={this.props.selectedTpo}
        currentUserProfile={this.props.currentUserProfile}
        currencies={this.props.currencies}
        gift={(donationContribution, plantProjectId) =>
          this.props.gift(donationContribution, plantProjectId, flag)
        }
        openProjects={this.openProjects}
        paymentStatus={this.props.paymentStatus}
        paymentClear={this.props.paymentClear}
        plantProjectClear={this.props.clearPlantProject}
      />
    );
  }
}

const mapStateToProps = state => ({
  selectedProject: selectedPlantProjectSelector(state),
  selectedTpo: selectedTpoSelector(state),
  currentUserProfile: currentUserProfileSelector(state),
  currencies: currenciesSelector(state),
  paymentStatus: getPaymentStatus(state)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      selectPlantProjectAction,
      fetchCurrencies,
      gift,
      paymentClear,
      clearPlantProject
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(GiftTreesContainer);

GiftTreesContainer.propTypes = {
  selectedProject: PropTypes.object,
  selectedTpo: PropTypes.object,
  currentUserProfile: PropTypes.object,
  currencies: PropTypes.object,
  paymentStatus: PropTypes.object,
  selectPlantProjectAction: PropTypes.func,
  gift: PropTypes.func,
  fetchCurrencies: PropTypes.func,
  paymentClear: PropTypes.func,
  clearPlantProject: PropTypes.func
};
