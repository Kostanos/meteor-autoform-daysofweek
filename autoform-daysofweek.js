AutoForm.addInputType("bootstrap-daysofweek", {
  template: "afDaysOfWeek",
  valueIsArray: true,
  valueOut: function () {
    var val = [];
    this.find('input[type=checkbox]').each(function () {
      if ($(this).is(":checked")) {
        val.push($(this).val());
      }
    });
    return val;
  },
  contextAdjust: function (context) {
    var itemAtts = _.omit(context.atts);
    var days = [1, 2, 3, 4, 5, 6, 7];
    // build items list
    context.items = [];

    _.each(days, function(dayNum) {
      context.items.push({
        name: context.name,
        label: moment().isoWeekday(dayNum).format('dd'),
        value: dayNum,
        // _id must be included because it is a special property that
        // #each uses to track unique list items when adding and removing them
        // See https://github.com/meteor/meteor/issues/2174
        _id: dayNum,
        selected: (_.contains(_.map(context.value, function(v){return parseInt(v);}), dayNum)), // convert string to number
        atts: itemAtts
      });
    });

    return context;
  }
});

Template.afDaysOfWeek.helpers({
  atts: function selectedAttsAdjust(e) {
    var atts = _.clone(this.atts);
    if (this.selected) {
      atts.checked = "";
    }
    // remove data-schema-key attribute because we put it
    // on the entire group
    delete atts["data-schema-key"];
    return atts;
  },
  dsk: function dsk() {
    return {
      "data-schema-key": this.atts["data-schema-key"]
    }
  }
});
