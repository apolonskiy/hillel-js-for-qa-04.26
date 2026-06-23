export class AddCarDialog {
  selectors = {
    carBrandSelect: () => cy.get('[class="modal-content"] [id="addCarBrand"]'),
    carModelSelect: () => cy.get('[class="modal-content"] [id="addCarModel"]'),
    mileageInput: () => cy.get('[class="modal-content"] [id="addCarMileage"]'),
    cancelButton: () => cy.contains('[class="modal-content"] button', "Cancel"),
    addButton: () => cy.contains('[class="modal-content"] button', "Add"),
  };

  selectCarBrand(brand) {
    this.selectors.carBrandSelect().select(brand);
  }

  selectCarModel(model) {
    this.selectors.carModelSelect().select(model);
  }

  fillMileage(mileage) {
    this.selectors.mileageInput().type(mileage);
  }

  clickCancel() {
    this.selectors.cancelButton().click();
  }

  clickAdd() {
    this.selectors.addButton().click();
  }

  addCar({ brand, model, mileage }) {
    cy.wait(350);
    this.selectCarBrand(brand);
    cy.wait(350);
    this.selectCarModel(model);
    this.fillMileage(mileage);
    this.clickAdd();
  }
}
