# meteor-boostrap3-daysofweek
Days of week multiple selector

## Install

```
meteor add kostanos:autoform-daysofweek
```

## Example of usage

```js
{
  'schedule.items.$.days': {
    type: [String],
    autoform: {
      type: "bootstrap-daysofweek",
    }
  },
}
```

## Return value
Monday and Tuesday selected
```
["0", "1"] // Selected days
```