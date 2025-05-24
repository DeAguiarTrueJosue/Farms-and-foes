class Card{
    constructor(name, type, image, description){
        this.name = name;
        this.type = type;
        this.image = image;
        this.description = description;
    }
    CreateCard()
    {
        const card = document.createElement("div");
        card.className = "Card";
        const cardName = document.createElement("p");
        cardName.className = "name";
        cardName.innerHTML = this.name.toUpperCase();
        card.appendChild(cardName);
        const cardImage = document.createElement("img");
        cardImage.className = "image";
        cardImage.src = this.image;
        cardImage.alt = this.name;
        card.appendChild(cardImage);
        const cardDescription = document.createElement("p");
        cardDescription.className = "description";
        cardDescription.innerHTML = this.description;
        card.appendChild(cardDescription);
        return card;
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
    CreateFarmerCard()
    {
        const card = super.CreateCard();
        card.classList.add("Farmer");
        const specifications = document.createElement("div");
        specifications.classList.add("specifications");
        specifications.appendChild(document.createElement("div"));
        specifications.children[0].classList.add("health");
        specifications.children[0].appendChild(document.createElement("img"));
        specifications.children[0].children[0].classList.add("heart");
        specifications.children[0].children[0].alt = "heart";
        specifications.children[0].children[0].src = "https://static.vecteezy.com/system/resources/thumbnails/053/289/894/small_2x/simple-black-heart-outline-on-a-white-background-png.png";
        specifications.children[0].appendChild(document.createElement("p"));
        specifications.children[0].children[1].classList.add("healthValue");
        specifications.children[0].children[1].innerHTML = this.health;
        specifications.appendChild(document.createElement("div"));
        specifications.children[1].classList.add("farmerType");
        specifications.children[1].appendChild(document.createElement("img"));
        specifications.children[1].children[0].src = "https://media.istockphoto.com/id/1346182204/vector/apple-icon-black-silhouette.jpg?s=612x612&w=0&k=20&c=jHehvaYYDe1vSkbyyMk-sZ0Aphqlfz7tz7E6v365hkc=";
        specifications.children[1].children[0].alt = "FarmerType";
        specifications.children[1].children[0].classList.add("FarmerTypeImage");
        specifications.appendChild(document.createElement("div"));
        specifications.children[2].classList.add("farmerSecondaryType");
        specifications.children[2].classList.add("nonFarmerSecondaryType");
        card.appendChild(specifications);
        return card;
    }
}

const CardType = {
    Action: "action",
    FriendsAndFoes: "friends and foes",
    Farm: "farm",
    FarmExpansion: "farm expansion",
    Farmer: "farmer"
}

const farmers = [
    new FarmerCard("Ethan", CardType.Farmer, "https://api.time.com/wp-content/uploads/2022/02/ethan-hill-time-koty-1.jpg", "When player has 4 farms, all produce symbols are worth double.", 7)
];

function CreateFarmers()
{
    const box = document.getElementById("cardBox");
    for (let i = 0; i < farmers.length; i++) {
        const card = farmers[i].CreateFarmerCard();
        box.appendChild(card);
    }
}