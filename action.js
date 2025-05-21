class Card{
    constructor(name, type, image, description){
        this.name = name;
        this.type = type;
        this.image = image;
        this.description = description;
    }
}

class ActionsCard extends Card{
    constructor(name, type, image, description, price){
        super(name, type, image, description);
        this.price = price;
        this.target = target;
    }
}

class FriendsAndFoesCard extends Card{
    constructor(name, type, image, description = "", target){
        super(name, type, image, "");
        this.target = target;
    }
}

class FarmCard extends Card{
    constructor(name, type, image, description, farmType){
        super(name, type, image, description);
        this.farmType = farmType;
    }
}

class FarmExpansionCard extends FarmCard{
    constructor(name, type, image, description, farmType){
        super(name, type, image, description, farmType);
    }
}

class FarmerCard extends Card{
    constructor (name, type, image, description, health) {
        super(name, type, image, description)
        this.health = health;
    }
}

const CardType = {
    Action: "action",
    FriendsAndFoes: "friends and foes",
    Farm: "farm",
    FarmExpansion: "farm expansion",
    Farmer: "farmer"
}

const farmers = [new FarmerCard("Ethan", CardType.Farmer, "https://api.time.com/wp-content/uploads/2022/02/ethan-hill-time-koty-1.jpg", "When player has 4 farms, all produce symbols are worth double.", 7)];