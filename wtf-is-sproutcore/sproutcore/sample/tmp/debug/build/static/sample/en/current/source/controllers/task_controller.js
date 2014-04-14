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

  addTask: function(title) {
    var task = Sample.Task.create({ title: title });
    this.content.push(task);
  }

}) ;
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('sample');