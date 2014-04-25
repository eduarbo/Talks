// ==========================================================================
// Project:   Sample - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sample */

// This page describes the main user interface for your application.  
Sample.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'title l1 l2 adding selected input list'.w(),
    
    title: SC.LabelView.design({
      layout: {centerX: 0, top: 10, height:20, width: 200 },
      value: 'The Ugly List',
      fontWeight: SC.BOLD_WEIGHT,
    }),

    l1: SC.LabelView.design({
      layout: {centerX: 300, width: 300, top: 55, bottom:20},
      value: 'Binding: ',
    }),

    adding: SC.LabelView.design({
      layout: {centerX: 300, width: 300, top: 70, bottom:20},
      valueBinding: 'Sample.tasksController.title',
      fontWeight: SC.BOLD_WEIGHT,
    }),

    l2: SC.LabelView.design({
      layout: {centerX: 300, width: 300, top: 135, bottom:20},
      value: 'Selected: ',
    }),

    selected: SC.LabelView.design({
      layout: {centerX: 300, width: 300, top: 150, bottom:20},
      valueBinding: 'Sample.tasksController.taskSelected',
      fontWeight: SC.BOLD_WEIGHT,
    }),

    input: SC.TextFieldView.design({
      layout: {width: 200, centerX: 0, top: 50, height:20},
      valueBinding: 'Sample.tasksController.title',
      keyDown: function(evt) {
        sc_super();

        if (evt.keyCode === 13) {
          var value = this.get('value');
          if (value) {
            Sample.tasksController.addTask(value);
            this.set('value', '');
          }
        }
        return this.interpretKeyEvents(evt) ? YES : NO; 
      },

      hint: 'Add Task...',
    }),

    list: SC.ScrollView.design({
      layout: {width: 200, centerX: 0, top: 80, bottom: 20},
      contentView: SC.ListView.design({
        layout: {top:0, bottom:0, left:0, right:0},
        contentValueKey: 'title',
        contentBinding: 'Sample.tasksController.content',
        selectionBinding: 'Sample.tasksController.selection',
        isEditable: YES,
        selectOnMouseDown: YES,
        canEditContent: YES,
        rowHeight: 20,
      }),
    })
  })

});
