import {createSelector} from 'reselect';
import {denormalize} from 'normalizr';

import {userProfileSchema} from '../schemas';
import {getCurrentUserProfileId} from '../reducers/currentUserProfileIdReducer';
import {
  getPlantProjects,
  getPaymentGateways,
  getTpos,
} from '../reducers/entitiesReducer';
import {
  getSelectedPlantProjectId,
} from '../reducers/selectedPlantProjectIdReducer';

export const currentUserProfileIdSelector = state =>
  getCurrentUserProfileId (state);
export const selectedPlantProjectIdSelector = state =>
  getSelectedPlantProjectId (state);
export const paymentGatewaysSelector = state => getPaymentGateways (state);
export const tposSelector = state => getTpos (state);
export const plantProjectsSelector = state => getPlantProjects (state);
export const entitiesSelector = state => state.entities;

function logSelectorUpdate (selectorName, args = 'None') {
  const debug = false;
  debug && console.log ('SELECTOR: ' + selectorName, args);
}

/**
 * Returns the current user's de-normalized user profile (with treecounter and contributions) or null
 *
 * The current user profile is a hierarchical object which has the following structure:
 *   - the user profile entity itself with properties like firstname, lastname, email, etc.
 *   - 1 treecounter entity associated via the property treecounter_id
 *   - the treecounter has 0..n contribution child entities
 *
 * In order to get an updated, fully de-normalized user profile entity, this selector must return a new result
 * whenever one of the following state changes occur.
 *   - currentUserProfileId: someone has logged in/out
 *   - entities.userProfile: someone has logged in/out
 *   - entities.treecounter: the target has been updated
 *   - entities.contribution: a plantContribution or donationContribution has been added/updated/deleted
 *
 * As the de-normalization process requires the whole entities state, there is no point in making this selector
 * dependent on only the 3 relevant entity types above. This has the effect that the selector will produce
 * a new result whenever state.entities is modified (ANY entity is added/updated/deleted).
 */
export const currentUserProfileSelector = createSelector (
  currentUserProfileIdSelector,
  entitiesSelector,
  (currentUserProfileId, entities) => {
    logSelectorUpdate ('currentUserProfileSelector');
    return null === currentUserProfileId
      ? null
      : denormalize (
          entities.userProfile[currentUserProfileId],
          userProfileSchema,
          entities
        );
  }
);

/**
 * Returns the current user's de-normalized treecounter (with contributions)
 */
export const userTreecounterSelector = createSelector (
  currentUserProfileSelector,
  currentUserProfile => {
    logSelectorUpdate ('userTreecounterSelector');
    return null === currentUserProfile ? null : currentUserProfile.treecounter;
  }
);

/**
 * Returns the current user's de-normalized contributions or null
 * TODO: analyze whether return value null should be replace by empty array
 */
export const userContributionsSelector = createSelector (
  userTreecounterSelector,
  userTreecounter => {
    logSelectorUpdate ('userContributionsSelector');
    return null === userTreecounter ? null : userTreecounter.contributions;
  }
);

/**
 * Returns the contributions associated with the current user's treecounter sorted by date or null
 */
export const sortedUserContributionsSelector = createSelector (
  userContributionsSelector,
  contributions => {
    logSelectorUpdate ('sortedUserContributionsSelector');
    return null === contributions
      ? []
      : contributions.sort (
          (c1, c2) => Date.parse (c2.plant_date) - Date.parse (c1.plant_date)
        );
  }
);

/**
 * Returns the plant project, currently selected by the user, in normalized form.
 */
export const selectedPlantProjectSelector = createSelector (
  selectedPlantProjectIdSelector,
  getPlantProjects,
  (selectedPlantProjectId, plantProjects) => {
    logSelectorUpdate ('selectedPlantProjectSelector');
    return null === selectedPlantProjectId
      ? null
      : plantProjects[selectedPlantProjectId];
  }
);

/**
 * Returns an array of normalized payment gateway entities related to the currently selected plant project or null.
 *
 * Available payment gateways depend on the TPO a payment should be issued to. The TPO is determined by
 * the currently selected plant project.
 * The returned payment gateway entities are not being de-normalized as there is no relevant associated data.
 */
export const availablePaymentGatewaysSelector = createSelector (
  selectedPlantProjectSelector,
  paymentGatewaysSelector,
  (selectedPlantProject, paymentGateways) => {
    logSelectorUpdate ('availablePaymentGatewaysSelector');
    return null === selectedPlantProject
      ? null
      : paymentGateways.filter (function (paymentGateway) {
          return paymentGateway.tpo_id === selectedPlantProject.tpo_id;
        });
  }
);

/**
 * Returns the current user's treecounter information required to render the graphical component
 */
export const userTreecounterDataSelector = createSelector (
  userTreecounterSelector,
  treecounter => {
    logSelectorUpdate ('userTreecounterDataSelector');
    return null === treecounter
      ? null
      : {
          id: treecounter.id,
          target: treecounter.count_target,
          implicitTarget: treecounter.implicit_target,
          planted: treecounter.count_planted,
          personal: treecounter.count_personal,
          community: treecounter.count_community,
          targetComment: treecounter.target_comment,
          targetYear: treecounter.target_year,
        };
  }
);

/**
 * Selects all plantProjects the current user has used (in one of his donations)
 */
export const userPlantProjectsSelector = createSelector (
  currentUserProfileSelector,
  plantProjectsSelector,
  sortedUserContributionsSelector,
  (currentUserProfile, plantProjects, sortedUserContributions) => {
    logSelectorUpdate ('userPlantProjectsSelector');
    if (null === currentUserProfile) {
      return [];
    }
    // filter for donations only, get id of associated plant project, use spread on Set to make ids unique
    const userPlantProjectIds = [
      ...new Set (
        sortedUserContributions
          .filter (
            contribution => 'donation' === contribution.contribution_type
          )
          .map (contribution => contribution.plant_project_id)
      ),
    ];

    return Object.values (plantProjects).filter (plantProject =>
      userPlantProjectIds.includes (plantProject.id)
    );
  }
);

/**
 * Selects all plantProjects the current user has used (in one of his donations) sorted by creation date (desc)
 */
export const sortedUserPlantProjectsSelector = createSelector (
  userPlantProjectsSelector,
  plantProjects => {
    logSelectorUpdate ('sortedUserPlantProjectsSelector');
    return null === plantProjects
      ? null
      : Object.values (plantProjects).sort (
          (p1, p2) => Date.parse (p2.created) - Date.parse (p1.created)
        );
  }
);

/**
 * Selects all active and verified plantProjects
 * @returns {Array.<*>}
 */
export const activePlantProjectsSelector = createSelector (
  plantProjectsSelector,
  tposSelector,
  (plantProjects, tpos) => {
    logSelectorUpdate ('activePlantProjectsSelector');
    return Object.values (plantProjects).filter (plantProject => {
      let tpo = tpos[plantProject.tpo_id];
      return (
        plantProject.is_verified &&
        plantProject.is_active &&
        tpo.is_verified &&
        tpo.is_active
      );
    });
  }
);

/**
 * Selects all active and verified plantProjects that have not been used previously by the current user
 */
export const unusedPlantProjectsSelector = createSelector (
  userPlantProjectsSelector,
  activePlantProjectsSelector,
  (userProjects, allActiveProjects) => {
    logSelectorUpdate ('currentUserProfileSelector');
    if (null === userProjects || 0 === userProjects.length) {
      return allActiveProjects;
    }
    const userProjectIds = Object.values (userProjects).map (
      project => project.id
    );
    return Object.values (allActiveProjects).filter (
      project => false === userProjectIds.includes (project.id)
    );
  }
);
