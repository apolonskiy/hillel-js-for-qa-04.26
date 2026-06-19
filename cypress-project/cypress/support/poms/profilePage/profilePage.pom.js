import { LeftNavBar } from "../sharedComponents/leftNavBar.pom";
export class ProfilePage {
  selectors = {
    editButton: () => cy.contains("button", "Edit profile"),
    profileName: () => cy.get('[class*="profile_name"]'),
    profileLocation: () =>
      cy.get('[class="profile-info_item"]:has([class*="icon-country"])'),
    profileBirthday: () =>
      cy.get('[class="profile-info_item"]:has([class*="icon-birthday"])'),
    profileImage: () => cy.get('[class="profile_photo"]'),
  };

  leftNavBar = new LeftNavBar();

  selectProfilePage() {
    this.leftNavBar.clickNavItem("Profile");
  }

  clickEditProfile() {
    cy.wait(500)
    this.selectors.editButton().click();
  }
}
