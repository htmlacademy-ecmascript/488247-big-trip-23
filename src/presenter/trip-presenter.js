import TripInfoView from '../view/trip-info-view';
import SortView from '../view/sort-view';
import PointListView from '../view/point-list-view';
import PointPresenter from './point-presenter';
import NoPointView from '../view/no-point-view';
import { render, RenderPosition } from '../framework/render';
import { updateItem } from '../utils/common';

export default class TripPresenter {
  #pointListComponent = new PointListView();
  #infoContainer = null;
  #eventContainer = null;
  #pointsModel = null;
  #sortComponent = new SortView();
  #noPointComponent = new NoPointView();
  #tripPoints = [];

  #pointPresenters = new Map();

  constructor({infoContainer, eventContainer, pointsModel}) {
    this.#infoContainer = infoContainer;
    this.#eventContainer = eventContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#tripPoints = [...this.#pointsModel.points];

    this.#renderTripPoints();
  }

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handlePointChange = (updatedPoint) => {
    this.#tripPoints = updateItem(this.#tripPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #renderSort() {
    render(this.#sortComponent, this.#eventContainer);
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#pointListComponent.element,
      pointsModel: this.#pointsModel,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange,
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderNoPoints() {
    render(this.#noPointComponent, this.#eventContainer);
  }

  #clearPointsList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
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
