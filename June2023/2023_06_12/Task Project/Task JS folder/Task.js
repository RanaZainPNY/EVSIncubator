class DataHandler {
    static CategoryId;
    static TaskId;
    static{
        DataHandler.CategoryId=0;
        DataHandler.TaskId=0;

    }
    constructor() {
        this._Categories = [
            new Category(++DataHandler.CategoryId, "Bootstrap", "icn1"),
            new Category(++DataHandler.CategoryId, "JS", "icn2"),
            new Category(++DataHandler.CategoryId, "Html", "icn3"),
        ];

        this._Task = [
            new Task(++DataHandler.TaskId, "AAAA", "70", "20-6-2023", this._Categories[0], "First Project", "2023-6-2"),
            new Task(++DataHandler.TaskId, "BBBB", "60", "20-7-2023", this._Categories[1], "Second Project", "2023-7-2"),
            new Task(++DataHandler.TaskId, "CCCC", "50", "20-8-2023", this._Categories[2], "Third Project", "2023-8-20"),
            new Task(++DataHandler.TaskId, "DDDD", "40", "20-9-2023", this._Categories[1], "Fourth Project", "2023-9-20")

        ];
    }
    get Categories() {
        let [...newCategoriesArray] = this._Categories;
        return newCategoriesArray;
    }
    get Tasks() {
        let [...newTaskArray] = this._Task;
        return newTaskArray;
    }
    AddTasks(title, progress, completedon, categoryId, detail) {
        let category = this._Categories.find(c => c.Id == categoryId);
        let task = new Task(
            ++DataHandler.TaskId,
            title,
            progress,
            completedon,
            category,
            detail

        );
        // console.log(category);
        this._Task.push(task);
        // console.log(task);
    }
    EditTask(id, newTask) {
        // let found =this._Task.find(c=>c.Id==id);
        let found = this._Task.find(c => c.Id == id);
      
        found.Title = newTask.title;
        found.Progress = newTask.progress;
        found.Completedon = newTask.completedon;
        found.Detail = newTask.detail;
        found.Category = newTask.category;

    }
    FindTask(cid) {
        return this._Task.find(i => i.Id == cid)
    }

}
class Task {
    constructor(id, title, progress, completedon, category, detail, duedate) {
        this.Id = id;
        this.Title = title;
        this.Progress = progress;
        this.Completedon = completedon;
        this.Category = category;
        this.Detail = detail;
        this.Duedate = duedate;


    }
    get Id() {
        return this._Id;
    }
    set Id(value) {
        this._Id = value;
    }

    get Title() {
        return this._Title;
    }
    set Title(value) {
        this._Title = value;
    }
    get Progress() {
        return this._Progress;
    }
    set Progress(value) {
        this._Progress = value;
    }

    get Completedon() {
        return this._Completedon;
    }
    set Completedon(value) {
        this._Completedon = value;
    }
    get Duedate() {
        return this._Duedate;
    }
    set Duedate(value) {
        this._Duedate = value;
    }

    get Detail() {
        return this._Detail;
    }
    set Detail(value) {
        this._Detail = value;
    }
    get Category() {
        return this._Category;
    }
    set Category(value) {
        this._Category = value;
    }

}
class Category {
    constructor(id, name, image) {
        this.Id = id;
        this.Name = name;
        this.Image = image;
    }
    get Id() {
        return this._Id;
    }
    set Id(value) {
        this._Id = value;
    }

    get Name() {
        return this._Name;
    }
    set Name(value) {
        this._Name = value;
    }
    get Image() {
        return this._Image;
    }
    set Image(value) {
        this._Image = value;
    }
}