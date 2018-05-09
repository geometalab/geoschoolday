var map;

require([
  "esri/layers/FeatureLayer",
  "esri/dijit/FeatureTable",
  "dojo/on",
  "dojo/dom",
  "dojo/parser",
  "dojo/ready",
], function(
  FeatureLayer, FeatureTable,
  on, dom, parser, ready
) {

  parser.parse();

  ready(function() {

    // Create the feature layer
    var myFeatureLayer = new FeatureLayer("https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/california_census_blocks/FeatureServer/0", {
      mode: FeatureLayer.MODE_ONDEMAND,
      outFields: ["NAME", "GEOID", "MTFCC", "ALAND", "AWATER"],
      visible: true,
      id: "fLayer"
    });

    var myTable = new FeatureTable({
      featureLayer: myFeatureLayer,
      showGridMenu: true,
      hiddenFields: ["FID", "C_Seq", "Street"] // field that end-user can show, but is hidden on startup
    }, "myTableNode");

    myTable.startup();

    function convertArrayOfObjectsToCSV(args) {
      var result, ctr, keys, columnDelimiter, lineDelimiter, data;

      data = args.data || null;
      if (data == null || !data.length) {
        return null;
      }

      columnDelimiter = args.columnDelimiter || ',';
      lineDelimiter = args.lineDelimiter || '\n';

      keys = Object.keys(data[1]);
      result = '';
      result += keys.join(columnDelimiter);
      result += lineDelimiter;

      data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
          if (ctr > 0) result += columnDelimiter;

          result += item[key];
          ctr++;
        });
        result += lineDelimiter;
      });

      return result;
    }

    on(document.getElementById("btnExport"), "click", function() {
      var data = myTable.dataStore.data;
      var csv = convertArrayOfObjectsToCSV({
        data: data
      });
      if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
      }
      var encodedUri = encodeURI(csv);
      window.open(encodedUri);
    });
  });
});