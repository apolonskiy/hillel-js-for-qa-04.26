import { AddCarDialog } from "./addCarDialog.pom";
import { LeftNavBar } from "../sharedComponents";

export class GaragePage {
  selectors = {
    addButton: () => cy.contains("button", "Add car"),
    genericCarCard: (carName) => cy.contains('[class="car-item"]', carName),
  };

  addCarDialog = new AddCarDialog();
  leftNavBar = new LeftNavBar();

  selectGaragePage() {
    this.leftNavBar.clickNavItem("Garage");
  }

  clickAddButton() {
    this.selectors.addButton().click();
  }
}
