class Home {
    constructor(
        mainDoor,
        SecendDoor,
        mainHall,
        Bedroom1,
        Bedroom2,
        kitchen,
        backDoor
    )
    {
        this.mainDoor = mainDoor;
        this.SecendDoor = SecendDoor;
        this.mainHall = mainHall;
        this.Bedroom1 = Bedroom1;
        this.Bedroom2 = Bedroom2;
        this.kitchen = kitchen;
        this.backDoor = backDoor;
        
    }
    mainDoorOpen(ToggleDoormain){
        this.mainDoor = ToggleDoormain;
    }
    SecendDoorOpen(ToggleDoorSecend){
        this.SecendDoor = ToggleDoorSecend;
    }
    KitchenDoorOpen(ToggleDoorKitcen){
        this.kitchen = ToggleDoorKitcen;
    }
    BackDoorOpen(ToggleDoorback){
        this.backDoor = ToggleDoorback;
    }
};
export default Home