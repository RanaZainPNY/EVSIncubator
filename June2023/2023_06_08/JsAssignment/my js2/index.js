class Category {
    constructor(id, name) {
        this.Id = id;
        this.Name = name
    }
}

class Records {
    constructor(id, title, postedOn, detail, category) {
        this.Id = id;
        this.Title = title;
        this.PostedOn = new Date().toDateString();
        this.Detail = detail;
        this.Category = category;
    }
    get Id() {
        return this._id;
    }
    set Id(value) {
        this._id = value;
    }
    get Title() {
        return this._Title;
    }
    set Title(value) {
        this._Title = value;
    }
    get PostedOn() {
        return this._PostedOn;
    }
    set PostedOn(value) {
        this._PostedOn = value;
    }
}

class Datahandler {
    constructor() {
        this._Categories = [
            new Category(1, "Personal"),
            new Category(2, "Private"),
            new Category(3, "Public"),
        ]
        let counter = 0
        this._Record = [
            new Records(++counter, "Iphone", new Date(), "This is Iphone is very expensive", this._Categories[0]),
            new Records(++counter, "Tablets", new Date(), "This is Tablets is very expensive", this._Categories[2]),
            new Records(++counter, "Hand-Free", new Date(), "This is Hand-free is very expensive", this._Categories[1]),
        ]
    }
    GetCategories() {
        let tempArray = [...this._Categories];
        return tempArray;
    }

    AddCategories(department) {
        this._Departments.push(department);
    }

    AddRecord(employee) {
        debugger
        this._Record.push(employee);
    }

    GetRecord() {
        let tempArray = [...this._Record];
        return tempArray;
    }
    DeleteTasks(TaskId, task) {
        const foundAt = this._Record.find(c => c.Id == TaskId);
        alert(foundAt)
        if (foundAt > -1) {
            this._Record.splice(foundAt, 1);
        }
    }
    EditProduts(id, newTasks) {
        debugger
        let found = this._Record.find(c => c.Id == id);
        found.Title = newTasks.edittitle;
        found.Detail = newTasks.editdetail;
        found.Category = newTasks.editprogress;
        // newTasks.title = found.Title;
        // newTasks.detail =  found.Detail;
        // found.Category = newTasks.category;
    }
    findbycategory(categoryid) {debugger
        // const sepcategory  = this._Record.find(z=>z.Id===categoryid);
        const sepcategory = this._Record.filter(z => z._Id === categoryid);
        return sepcategory;
    }


}













