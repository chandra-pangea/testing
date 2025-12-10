// Facade Design Pattern is a Structural pattern from the Gang of Four that simplifies interactions with complex subsystems. It provides a unified, easy-to-use interface while hiding internal details, reducing complexity for clients and promoting cleaner, more maintainable code.


// JavaScript does not have interfaces, but we can simulate one using a class with abstract methods
class Hotel {
    getMenus() {
        throw new Error("Method getMenus() must be implemented.");
    }
}


class NonVegRestaurant {
    getMenus() {
        let nv = new NonVegMenu();
        return nv;
    }
}

class VegRestaurant {
    getMenus() {
        let v = new VegMenu();
        return v;
    }
}


class VegNonBothRestaurant {
    getMenus() {
        let b = new Both();
        return b;
    }
}


/*package whatever //do not write package name here */

// Assuming the existence of classes VegMenu, NonVegMenu, and Both

class HotelKeeper {
    getVegMenu() {
      throw new Error("Method not implemented.");
    }
    getNonVegMenu() {
      throw new Error("Method not implemented.");
    }
    getVegNonMenu() {
      throw new Error("Method not implemented.");
    }
}
  


class HotelKeeper {
    getVegMenu() {
        throw new Error('Method not implemented.');
    }
    getNonVegMenu() {
        throw new Error('Method not implemented.');
    }
    getVegNonMenu() {
        throw new Error('Method not implemented.');
    }
}

class VegRestaurant {
    getMenus() {
        return new VegMenu();
    }
}

class NonVegRestaurant {
    getMenus() {
        return new NonVegMenu();
    }
}

class VegNonBothRestaurant {
    getMenus() {
        return new Both();
    }
}

class HotelKeeperImplementation extends HotelKeeper {

    getVegMenu() {
        let v = new VegRestaurant();
        let vegMenu = v.getMenus();
        return vegMenu;
    }

    getNonVegMenu() {
        let v = new NonVegRestaurant();
        let nonVegMenu = v.getMenus();
        return nonVegMenu;
    }

    getVegNonMenu() {
        let v = new VegNonBothRestaurant();
        let bothMenu = v.getMenus();
        return bothMenu;
    }
}

class VegMenu {}
class NonVegMenu {}
class Both { }



function main() {
    const keeper = new HotelKeeperImplementation();
    const v = keeper.getVegMenu();
    const nv = keeper.getNonVegMenu();
    const both = keeper.getVegNonMenu();
}

main();