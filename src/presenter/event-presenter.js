import TripInfoView from '../view/trip-info-view';
import SortView from '../view/sort-view';
import PointEditView from '../view/point-edit-view';
import PointView from '../view/point-view';
import PointListView from '../view/point-list-view';
import NoPointView from '../view/no-point-view';
import { render, replace, RenderPosition } from '../framework/render';
import { isEscapeKey } from '../utils/common';

export default class EventPresenter {
  #pointListComponent = new PointListView();
  #infoContainer = null;
  #eventContainer = null;
  #pointsModel = null;
  #sortComponent = new SortView();
  #noPointComponent = new NoPointView();
  #tripPoints = [];

  constructor({infoContainer, eventContainer, pointsModel}) {
    this.#infoContainer = infoContainer;
    this.#eventContainer = eventContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#tripPoints = [...this.#pointsModel.points];

    this.#renderTripPoints();
  }

  #renderSort() {
    render(this.#sortComponent, this.#eventContainer);
  }

  #renderPoint(point) {
    const destination = this.#pointsModel.getDestinationById(point.destination);
    const offers = this.#pointsModel.getOffersByType(point.type);

    const escKeyDownHandler = (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        replaceFormToEvent();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const eventComponent = new PointView({
      point,
      destination,
      offers,
      onEditClick: () => {
        replaceEventToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      },
    });

    const eventEditComponent = new PointEditView({
      point,
      destination,
      offers,
      onFormClose: () => {
        replaceFormToEvent();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onFormSubmit: () => {
        replaceFormToEvent();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
    });

    function replaceEventToForm() {
      replace(eventEditComponent, eventComponent);
    }

    function replaceFormToEvent() {
      replace(eventComponent, eventEditComponent);
    }

    render(eventComponent, this.#pointListComponent.element);
  }

  #renderNoPoints() {
    render(this.#noPointComponent, this.#eventContainer);
  }

  #renderPointsList() {
    render(this.#pointListComponent, this.#eventContainer);

    this.#tripPoints.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderTripPoints() {
    render(new TripInfoView(), this.#infoContainer, RenderPosition.AFTERBEGIN);

    if (!this.#pointsModel.hasPoints()) {
      this.#renderNoPoints();
    }

    if (this.#tripPoints.length > 1) {
      this.#renderSort();
    }

    this.#renderPointsList();
  }
}
