class StaffMember {
  constructor(name, position, bio) {
    this.name = name;
    this.position = position;
    this.bio = bio;
  }

  describe() {
    return `${this.name} is a ${this.position},`;
  }
}

class Location {
  constructor(name) {
    this.name = name;
    this.staffMembers = [];
  }
  addStaffMember(staffMember) {
    if (staffMember instanceof StaffMember) {
      this.staffMembers.push(staffMember);
    } else {
      throw new Error(
        `You can only add an instance of StaffMember. Argument is not a staff member: ${staffMember}`
      );
    }
  }
  describe() {
    return `${this.name} has ${this.staffMembers.length} staff members.`;
  }
}

class Menu {
  constructor() {
    this.locations = [];
    this.selected = null;
  }
  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createLocation();
          break;
        case "2":
          this.viewLocation();
          break;
        case "3":
          this.deleteLocation();
          break;
        case "4":
          this.displayLocations();
          break;
        case "5":
          this.addNewStaffMember();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }
    alert("Goodbye!");
  }

  showMainMenuOptions() {
    return prompt(`
        0) exit
        1) create new location
        2) view location
        3) delete location
        4) display all locations
        5) add new staff member
        `);
  }

  showLocationMenuOptions(locationInfo) {
    return prompt(`
        0) back
        1) create staff member
        2) delete staff member
        ---
        ${locationInfo}
        `);
  }

  displayLocations() {
    let locationString = "";
    for (let i = 0; i < this.locations.length; i++) {
      locationString += i + ") " + this.locations[i].name + "\n";
    }
    alert(locationString);
  }

  createLocation() {
    let name = prompt("Enter name for location:");
    this.locations.push(new Location(name));
  }

  viewLocation() {
    let index = prompt("Enter the index of the location you wish to view:");
    if (index > -1 && index < this.locations.length) {
      this.selectedLocation = this.locations[index];
      let description = "Location Name: " + this.selectedLocation.name + "\n";

      for (let i = 0; i < this.selectedLocation.staffMembers.length; i++) {
        description +=
          i +
          ") " +
          this.selectedLocation.staffMembers[i].name +
          " - " +
          this.selectedLocation.staffMembers[i].position +
          " : " +
          this.selectedLocation.staffMembers[i].bio +
          "\n";
      }
      let selection = this.showLocationMenuOptions(description);
      switch (selection) {
        case "1":
          this.createStaffMember();
          break;
        case "2":
          this.deleteStaffMember();
          break;
      }
    }
  }

  deleteLocation() {
    let index = prompt("Enter the index of the location you wish to delete");
    if (index > -1 && index < this.locations.length) {
      this.locations.splice(index, 1);
    }
  }

  createStaffMember() {
    let name = prompt("Enter name of staff member:");
    let position = prompt("Enter job title:");
    let bio = prompt(`Enter ${name}'s bio:`);
    this.selectedLocation.staffMembers.push(
      new StaffMember(name, position, bio)
    );
  }

  deleteStaffMember() {
    let index = prompt(
      "Enter the index of the staff member you wish to delete:"
    );
    if (index > -1 && index < this.selectedLocation.staffMembers.length) {
      this.selectedLocation.staffMembers.splice(index, 1);
    }
  }

  addNewStaffMember() {
    let selectedLocation = prompt("Enter name for location:");
    this.createStaffMember();
  }
}

let menu = new Menu();
menu.start();
