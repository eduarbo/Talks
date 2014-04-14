// ==========================================================================
// Project:   Sample.taskController
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sample */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Sample.tasksController = SC.ObjectController.create(
/** @scope Sample.taskController.prototype */ {

  content: [],
  selection: null,
  title: '',
  taskSelected: '',
  
  selectionDidChange: function(){
    if(this.get('selection')){
      this.set('taskSelected', this.get('selection').firstObject().get('title'));
    } else {
      return ''
    }
  }.observes('selection'),

  addTask: function(title) {
    task = Sample.store.createRecord(Sample.Task, {
      "title": title
    });

    // select new task in UI
    //this.selectObject(task);
  }

}) ;
