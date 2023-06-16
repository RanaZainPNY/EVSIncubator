class DataHandler {


    static {
        DataHandler.CategoryCountr = 0;
    }


    constructor() {

        this.Categories = [
            new Category(++DataHandler.CategoryCountr, "Mobiles", "mobile.png"),
            new Category(++DataHandler.CategoryCountr, "Laptops", "laptop.png")
        ];
        this.Categories.push(new Category(++DataHandler.CategoryCountr, "iPhone", "iphone.png", this.Categories[0]));
        this.Categories.push(new Category(++DataHandler.CategoryCountr, "Android", "android.png", this.Categories[0]));

        this.Advertisements = [
            new Advertisement(1, "Aaaa aaaa", 1000),
            new Advertisement(2, "Bbbb bbbb", 5000),
            new Advertisement(3, "Cccc ccc", 7000)
        ]
    }


    GetCategories() {
        return [...this.Categories];
    }

    GetCategory(id) {
        const category = this.Categories.find(c => c.Id == id);
        return category;
    }

    AddCategory(category) {
        category.Id = ++DataHandler.CategoryCountr;
        this.Categories.push(category);
    }

    UpdateCategory(id, category) {
        const found = this.Categories.find(c => c.Id == id);
        if (found) {
            found.Name = category.Name;
            found.ImageUrl = category.ImageUrl;
            found.Parent = this.Categories.find(c => c.Id == category.Parent.Id);
            return found;
        }
        return null;
    }

    DeleteCatagory(id) {
        const found = this.Categories.find(c => c.Id == id);
        if (found) {
            const index = this.Categories.findIndex(c => c.Id == id);
            this.Categories.splice(index, 1);
            return found;
        }
        return null;
    }



    GetAdvertisements() {
        return [...this.Advertisements];
    }

    GetAdvertisement(id) {
        const adv = this.Advertisements.find(c => c.Id == id);
        return adv;
    }


}

class Category {
    constructor(id, name, imageUrl, parent) {
        this.Id = id;
        this.Name = name;
        this.ImageUrl = imageUrl;
        this.Parent = parent;
    }

    get Summary() {
        return `${this.Id},${this.Name},${this.ImageUrl},${this.Parent?.Name}`;
    }
}


class Advertisement {
    constructor(id, name, price, description, images, category, postedBy) {
        this.Id = id;
        this.Name = name;
        this.Description = description;
        this.Price = price;
        this.Images = images;
        this.Category = category;
        this.PostedBy = postedBy;
        this.PostedOn = new Date();
    }

    get Summary() {
        return `${this.Id},${this.Name},${this.Price}}`;
    }

    get Details() {
        return "left for students as assignment";
    }
}


module.exports = { Advertisement, Category, DataHandler };