export class todo {
  constructor(projectId,title, description, dueDate, priority){
  	this._projectId = projectId,
  	this._title = title;
  	this._description = description;
  	this._dueDate = dueDate;
  	this._priority = priority;
  }

get values() {
	return [this._projectId, this._title, this._description, this._dueDate, this._priority]
}

}

