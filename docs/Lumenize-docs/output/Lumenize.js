Ext.data.JsonP.Lumenize({"tagname":"class","name":"Lumenize","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Lumenize","members":{"cfg":[],"property":[],"method":[{"name":"aggregate","tagname":"method","owner":"Lumenize","meta":{},"id":"method-aggregate"},{"name":"aggregateAt","tagname":"method","owner":"Lumenize","meta":{},"id":"method-aggregateAt"},{"name":"aggregationAtArray_To_HighChartsSeries","tagname":"method","owner":"Lumenize","meta":{},"id":"method-aggregationAtArray_To_HighChartsSeries"},{"name":"csvStyleArray_To_ArrayOfMaps","tagname":"method","owner":"Lumenize","meta":{},"id":"method-csvStyleArray_To_ArrayOfMaps"},{"name":"deriveFields","tagname":"method","owner":"Lumenize","meta":{},"id":"method-deriveFields"},{"name":"deriveFieldsAt","tagname":"method","owner":"Lumenize","meta":{},"id":"method-deriveFieldsAt"},{"name":"groupBy","tagname":"method","owner":"Lumenize","meta":{},"id":"method-groupBy"},{"name":"groupByAt","tagname":"method","owner":"Lumenize","meta":{},"id":"method-groupByAt"},{"name":"groupByAtArray_To_HighChartsSeries","tagname":"method","owner":"Lumenize","meta":{},"id":"method-groupByAtArray_To_HighChartsSeries"},{"name":"histogram","tagname":"method","owner":"Lumenize","meta":{},"id":"method-histogram"},{"name":"snapshotArray_To_AtArray","tagname":"method","owner":"Lumenize","meta":{},"id":"method-snapshotArray_To_AtArray"},{"name":"timeSeriesCalculator","tagname":"method","owner":"Lumenize","meta":{},"id":"method-timeSeriesCalculator"},{"name":"timeSeriesGroupByCalculator","tagname":"method","owner":"Lumenize","meta":{},"id":"method-timeSeriesGroupByCalculator"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":3,"files":[{"filename":"lumenize.coffee.js","href":"lumenize.coffee.html#Lumenize"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/lumenize.coffee.html#Lumenize' target='_blank'>lumenize.coffee.js</a></div></pre><div class='doc-contents'><h1>Lumenize</h1>\n\n<p>Lumenize provides tools for aggregating data and creating timezone-precise timelines for visualizations.</p>\n\n<p>Below, is a somewhat long example that utilizes most of Lumenize's functionality. It should provid a good introduction\nto its capabilities.</p>\n\n<p>The first line below \"requires\" Lumenize. If you are using the browserified package or creating an App with Rally's\nApp SDK, you will not need this line. Lumenize will already be available in the current scope.</p>\n\n<pre><code>Lumenize = require('../')\n</code></pre>\n\n<p>Next, let's create some sample data. The example below creates a simple burnup chart. The data in the snapshots*\nvariables below simulate data for various work items changing over time. It is shown here in tabular \"CSVStyle\".</p>\n\n<pre><code>snapshotsCSVStyle = [\n  [\"ObjectID\", \"_ValidFrom\",           \"_ValidTo\",             \"ScheduleState\", \"PlanEstimate\"],\n\n  [1,          \"2010-10-10T15:00:00Z\", \"2011-01-02T13:00:00Z\", \"Ready to pull\", 5             ],\n\n  [1,          \"2011-01-02T15:10:00Z\", \"2011-01-04T15:00:00Z\", \"In progress\"  , 5             ],\n  [2,          \"2011-01-02T15:00:00Z\", \"2011-01-03T15:00:00Z\", \"Ready to pull\", 3             ],\n  [3,          \"2011-01-02T15:00:00Z\", \"2011-01-03T15:00:00Z\", \"Ready to pull\", 5             ],\n\n  [2,          \"2011-01-03T15:00:00Z\", \"2011-01-04T15:00:00Z\", \"In progress\"  , 3             ],\n  [3,          \"2011-01-03T15:00:00Z\", \"2011-01-04T15:00:00Z\", \"Ready to pull\", 5             ],\n  [4,          \"2011-01-03T15:00:00Z\", \"2011-01-04T15:00:00Z\", \"Ready to pull\", 5             ],\n  [1,          \"2011-01-03T15:10:00Z\", \"2011-01-04T15:00:00Z\", \"In progress\"  , 5             ],\n\n  [1,          \"2011-01-04T15:00:00Z\", \"2011-01-06T15:00:00Z\", \"Accepted\"     , 5             ],\n  [2,          \"2011-01-04T15:00:00Z\", \"2011-01-06T15:00:00Z\", \"In test\"      , 3             ],\n  [3,          \"2011-01-04T15:00:00Z\", \"2011-01-05T15:00:00Z\", \"In progress\"  , 5             ],\n  [4,          \"2011-01-04T15:00:00Z\", \"2011-01-06T15:00:00Z\", \"Ready to pull\", 5             ],\n  [5,          \"2011-01-04T15:00:00Z\", \"2011-01-06T15:00:00Z\", \"Ready to pull\", 2             ],\n\n  [3,          \"2011-01-05T15:00:00Z\", \"2011-01-07T15:00:00Z\", \"In test\"      , 5             ],\n\n  [1,          \"2011-01-06T15:00:00Z\", \"2011-01-07T15:00:00Z\", \"Released\"     , 5             ],\n  [2,          \"2011-01-06T15:00:00Z\", \"2011-01-07T15:00:00Z\", \"Accepted\"     , 3             ],\n  [4,          \"2011-01-06T15:00:00Z\", \"2011-01-07T15:00:00Z\", \"In progress\"  , 5             ],\n  [5,          \"2011-01-06T15:00:00Z\", \"2011-01-07T15:00:00Z\", \"Ready to pull\", 2             ],\n\n  [1,          \"2011-01-07T15:00:00Z\", \"9999-01-01T00:00:00Z\", \"Released\"     , 5             ],\n  [2,          \"2011-01-07T15:00:00Z\", \"9999-01-01T00:00:00Z\", \"Released\"     , 3             ],\n  [3,          \"2011-01-07T15:00:00Z\", \"9999-01-01T00:00:00Z\", \"Accepted\"     , 5             ],\n  [4,          \"2011-01-07T15:00:00Z\", \"9999-01-01T00:00:00Z\", \"In test\"      , 5             ],\n  [5,          \"2011-01-07T15:00:00Z\", \"9999-01-01T00:00:00Z\", \"In progress\"  , 2             ]\n]\n</code></pre>\n\n<p>However, Lumenize assumes the data is in the form of an \"Array of Maps\" like Rally's LookbackAPI would emit. The\n<code>Lumenize.csvStyleArray_To_ArrayOfMaps</code> convenience function will convert it to the expected form.</p>\n\n<pre><code>snapshotArray = Lumenize.csvStyleArray_To_ArrayOfMaps(snapshotsCSVStyle)\n</code></pre>\n\n<p>The <code>timelineConfig</code> defines the specification for the x-axis. Notice how you can exclude weekends and holidays. Here we\nspecify a <code>startOn</code> and a <code>endBefore</code>. However, it's fairly common in charts to specify <code>endBefore: \"this day\"</code> and\n<code>limit: 60</code> (no <code>startOn</code>). A number of human readable dates like <code>\"next month\"</code> or <code>\"previous week\"</code> are supported. You\nneed to specify any 2 of startOn, endBefore, or limit.</p>\n\n<pre><code>timelineConfig = {\n  startOn: \"2011-01-02\"\n  endBefore: \"2011-01-08\",\n  workDays: [\"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\"],  # Also supports \"Monday, Tuesday, ...\"\n  holidays: [\n    {\"month\": 1, \"day\": 1},\n    {\"month\": 12, \"day\": 25},\n    \"2011-01-05\"  # Made up holiday to demo holiday knockout\n  ]\n}\n</code></pre>\n\n<p>If you think of the list of snapshots as a table of data, then <code>derivedFields</code> is just like adding a virtual column\nto the table. Simply specify a name and a callback function \"f\".</p>\n\n<pre><code>derivedFields = [\n  {\n  \"name\": \"accepted\",\n  \"f\": (row) -&gt;\n    if row.ScheduleState in [\"Accepted\", \"Released\"]\n      return 1\n    else\n      return 0\n  }\n]\n</code></pre>\n\n<p>The <code>aggregationConfig</code> supports a number of functions including sum, count, addToSet, standardDeviation,\np50 (for median), and p?? (for any quartile/percentile). It will also allow you to specify a callback function\nlike in derivedFields above if none of the built-in functions serves.</p>\n\n<pre><code>aggregationConfig = [\n  {\"as\": \"scope\", \"f\": \"count\", \"field\": \"ObjectID\"},\n  {\"as\": \"accepted\", \"f\": \"sum\", \"field\": \"accepted\"}\n]\n</code></pre>\n\n<p>Since Lumenize was designed to work with other temporal data models besides Rally's, you must tell it what fields\nare used for the valid from, valid to, and unique id. You must also tell it what timezone to use for the boundaries\nof your x-axis values. The snapshot data is in Zulu time, but the start of the day in New York is shifted by 4 or 5\nhours depending upon the time of year. Specifying a timezone, allows Lumenize to shift the raw Zulu dates into\nthe timezone of your choosing.</p>\n\n<pre><code>config = {\n  snapshotValidFromField: '_ValidFrom',\n  snapshotValidToField: '_ValidTo',\n  snapshotUniqueID: 'ObjectID',\n  timezone: 'America/New_York',\n  timelineConfig: timelineConfig,\n  derivedFields: derivedFields,\n  aggregationConfig: aggregationConfig\n}\n</code></pre>\n\n<p>Next, we call <code><a href=\"#!/api/Lumenize-method-timeSeriesCalculator\" rel=\"Lumenize-method-timeSeriesCalculator\" class=\"docClass\">Lumenize.timeSeriesCalculator</a></code> with the snapshots as well as the config object that we just built.\nIt will calculate the time-series data according to our specifications. It returns two values. A list of Time\nobjects specifying the x-axis (<code>listOfAtCTs</code>) and our calculations (<code>aggregationAtArray</code>).</p>\n\n<pre><code>{listOfAtCTs, aggregationAtArray} = <a href=\"#!/api/Lumenize-method-timeSeriesCalculator\" rel=\"Lumenize-method-timeSeriesCalculator\" class=\"docClass\">Lumenize.timeSeriesCalculator</a>(snapshotArray, config)\n</code></pre>\n\n<p>You could graph this output to render a burnup chart by story count.</p>\n\n<pre><code>for value, index in listOfAtCTs\n  console.log(value.toString(), aggregationAtArray[index])\n\n# 2011-01-03 { scope: 3, accepted: 0 }\n# 2011-01-04 { scope: 4, accepted: 0 }\n# 2011-01-06 { scope: 5, accepted: 1 }\n# 2011-01-07 { scope: 5, accepted: 2 }\n</code></pre>\n\n<p>Most folks prefer for their burnup charts to be by Story Points (PlanEstimate). So let's modify our configuration to use\n<code>PlanEstimate</code>.</p>\n\n<pre><code>config.derivedFields = [\n  {\n  \"name\": \"accepted\",\n  \"f\": (row) -&gt;\n    if row.ScheduleState in [\"Accepted\", \"Released\"]\n      return row.PlanEstimate;\n    else\n      return 0\n  }\n]\n\nconfig.aggregationConfig = [\n  {\"as\": \"scope\", \"f\": \"sum\", \"field\": \"PlanEstimate\"},\n  {\"as\": \"accepted\", \"f\": \"sum\", \"field\": \"accepted\"}\n]\n\n{listOfAtCTs, aggregationAtArray} = <a href=\"#!/api/Lumenize-method-timeSeriesCalculator\" rel=\"Lumenize-method-timeSeriesCalculator\" class=\"docClass\">Lumenize.timeSeriesCalculator</a>(snapshotArray, config)\n\nfor value, index in listOfAtCTs\n  console.log(value.toString(), aggregationAtArray[index])\n\n# 2011-01-03 { scope: 13, accepted: 0 }\n# 2011-01-04 { scope: 18, accepted: 0 }\n# 2011-01-06 { scope: 20, accepted: 5 }\n# 2011-01-07 { scope: 20, accepted: 8 }\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-aggregate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize'>Lumenize</span><br/><a href='source/aggregate.coffee.html#Lumenize-method-aggregate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize-method-aggregate' class='name expandable'>aggregate</a>( <span class='pre'>list, config</span> ) : Object</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>list</span> : Object[]<div class='sub-desc'><p>An Array or arbitrary rows</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Takes a list like this:</p>\n\n<pre><code>{aggregate} = require('../')\n\nlist = [\n  { ObjectID: '1', KanbanState: 'In progress', PlanEstimate: 5, TaskRemainingTotal: 20 },\n  { ObjectID: '2', KanbanState: 'Ready to pull', PlanEstimate: 3, TaskRemainingTotal: 5 },\n  { ObjectID: '3', KanbanState: 'Ready to pull', PlanEstimate: 5, TaskRemainingTotal: 12 }\n]\n</code></pre>\n\n<p>and a list of config like this:</p>\n\n<pre><code>config = [\n  {field: 'ObjectID', f: 'count'}\n  {as: 'Drill-down', field:'ObjectID', f:'values'}\n  {field: 'PlanEstimate', f: 'sum'}\n  {as: 'mySum', field: 'PlanEstimate', f: (values) -&gt;\n    temp = 0\n    for v in values\n      temp += v\n    return temp\n  }\n]\n</code></pre>\n\n<p>and returns the aggregations like this:</p>\n\n<pre><code>a = aggregate(list, config)\nconsole.log(a)\n\n#   { _count: 3,\n#     'Drill-down': [ '1', '2', '3' ], \n#     PlanEstimate_sum: 13,\n#     mySum: 13 } \n</code></pre>\n\n<p>For each aggregation, you must provide a <code>field</code> and <code>f</code> (function) value. You can optionally\nprovide an alias for the aggregation with the 'as` field. There are a number of built in functions.</p>\n\n<p>Alternatively, you can provide your own function (it takes one parameter, which is an\nArray of values to aggregate) like the <code>mySum</code> example in our <code>config</code> list above.</p>\n</div></li></ul></div></div></div><div id='method-aggregateAt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize'>Lumenize</span><br/><a href='source/aggregate.coffee.html#Lumenize-method-aggregateAt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize-method-aggregateAt' class='name expandable'>aggregateAt</a>( <span class='pre'>atArray, config</span> ) : Object[]</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>atArray</span> : Array[]<div class='sub-desc'>\n</div></li><li><span class='pre'>config</span> : Object[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object[]</span><div class='sub-desc'><p>Each sub-Array in atArray is passed to the <code>aggregate</code> function and the results are collected into a single array output.\nThis is essentially a wrapper around the aggregate function so the config parameter is the same. You can think of\nit as using a <code>map</code>.</p>\n</div></li></ul></div></div></div><div id='method-aggregationAtArray_To_HighChartsSeries' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize'>Lumenize</span><br/><a href='source/dataTransform.coffee.html#Lumenize-method-aggregationAtArray_To_HighChartsSeries' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize-method-aggregationAtArray_To_HighChartsSeries' class='name expandable'>aggregationAtArray_To_HighChartsSeries</a>( <span class='pre'>aggregationAtArray, config</span> ) : Object[]</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>aggregationAtArray</span> : Array[]<div class='sub-desc'>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>You can use the same config you used to call aggregateAt() as long as it includes\n  your yAxis specifications</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object[]</span><div class='sub-desc'><p>in HighCharts form</p>\n\n<p>Takes an array of arrays that came from a call to aggregateAt() and looks like this:</p>\n\n<pre><code>{aggregationAtArray_To_HighChartsSeries} = require('../')\n\naggregationAtArray = [\n  {\"Series 1\": 8, \"Series 2\": 5, \"Series3\": 10},\n  {\"Series 1\": 2, \"Series 2\": 3, \"Series3\": 20}\n]\n</code></pre>\n\n<p>and a list of series configurations</p>\n\n<pre><code>config = [\n  {name: \"Series 1\", yAxis: 1},\n  {name: \"Series 2\"}\n]\n</code></pre>\n\n<p>and extracts the data into seperate series</p>\n\n<pre><code>console.log(aggregationAtArray_To_HighChartsSeries(aggregationAtArray, config))\n# [ { name: 'Series 1', data: [ 8, 2 ], yAxis: 1 },\n#   { name: 'Series 2', data: [ 5, 3 ] } ]\n</code></pre>\n\n<p>Notice how the extra fields from the series array are included in the output.</p>\n</div></li></ul></div></div></div><div id='method-csvStyleArray_To_ArrayOfMaps' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize'>Lumenize</span><br/><a href='source/dataTransform.coffee.html#Lumenize-method-csvStyleArray_To_ArrayOfMaps' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize-method-csvStyleArray_To_ArrayOfMaps' class='name expandable'>csvStyleArray_To_ArrayOfMaps</a>( <span class='pre'>csvStyleArray, [rowKeys]</span> ) : Object[]</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>csvStyleArray</span> : Array[]<div class='sub-desc'><p>The first row is usually the list of column headers but if not, you can\n  provide your own such list in the second parameter</p>\n</div></li><li><span class='pre'>rowKeys</span> : String[] (optional)<div class='sub-desc'><p>specify the column headers like <code>['column1', 'column2']</code>. If not provided, it will use\n  the first row of the csvStyleArray</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object[]</span><div class='sub-desc'><p><code>csvStyleArry_To_ArryOfMaps</code> is a convenience function that will convert a csvStyleArray like:</p>\n\n<pre><code>{csvStyleArray_To_ArrayOfMaps} = require('../')\n\ncsvStyleArray = [\n  ['column1', 'column2'],\n  [1         , 2       ],\n  [3         , 4       ],\n  [5         , 6       ]\n]\n</code></pre>\n\n<p>to an Array of Maps like this:</p>\n\n<pre><code>console.log(csvStyleArray_To_ArrayOfMaps(csvStyleArray))\n\n# [ { column1: 1, column2: 2 },\n#   { column1: 3, column2: 4 },\n#   { column1: 5, column2: 6 } ]\n</code></pre>\n\n<p>`</p>\n</div></li></ul></div></div></div><div id='method-deriveFields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize'>Lumenize</span><br/><a href='source/derive.coffee.html#Lumenize-method-deriveFields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize-method-deriveFields' class='name expandable'>deriveFields</a>( <span class='pre'>list, config</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>list</span> : Object[]<div class='sub-desc'>\n</div></li><li><span class='pre'>config</span> : Object[]<div class='sub-desc'><p>This function works on the list in place meaning that it's all side effect.</p>\n\n<p>To use this, you must <code>require</code> it</p>\n\n<pre><code>{deriveFields, deriveFieldsAt} = require('../')\n</code></pre>\n\n<p>Takes a list like:</p>\n\n<pre><code>list = [\n  {a: 1, b: 2},\n  {a: 3, b: 4}\n]\n</code></pre>\n\n<p>and a list of derivations like:</p>\n\n<pre><code>derivations = [\n  {name: 'sum', f: (row) -&gt; row.a + row.b}\n]\n</code></pre>\n\n<p>and upgrades the list in place with the derived fields like:</p>\n\n<pre><code>deriveFields(list, derivations)\n\nconsole.log(list)\n# [ { a: 1, b: 2, sum: 3 }, { a: 3, b: 4, sum: 7 } ]\n</code></pre>\n\n<p>Note: the derivations are calculated in order so you can use the output of one derivation as the input to one\nthat appears later in the config list.</p>\n</div></li></ul></div></div></div><div id='method-deriveFieldsAt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize'>Lumenize</span><br/><a href='source/derive.coffee.html#Lumenize-method-deriveFieldsAt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize-method-deriveFieldsAt' class='name expandable'>deriveFieldsAt</a>( <span class='pre'>atArray, config</span> ) : Array[]</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>atArray</span> : Array[]<div class='sub-desc'>\n</div></li><li><span class='pre'>config</span> : Object[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array[]</span><div class='sub-desc'><p>Sends every sub-array in atArray to deriveFields upgrading the atArray in place.</p>\n</div></li></ul></div></div></div><div id='method-groupBy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize'>Lumenize</span><br/><a href='source/aggregate.coffee.html#Lumenize-method-groupBy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize-method-groupBy' class='name expandable'>groupBy</a>( <span class='pre'>list, config</span> ) : Object[]</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>list</span> : Object[]<div class='sub-desc'><p>An Array of rows</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object[]</span><div class='sub-desc'><p>Takes a list like this:</p>\n\n<pre><code>{groupBy} = require('../')\n\nlist = [\n  { ObjectID: '1', KanbanState: 'In progress', PlanEstimate: 5, TaskRemainingTotal: 20 },\n  { ObjectID: '2', KanbanState: 'Ready to pull', PlanEstimate: 3, TaskRemainingTotal: 5 },\n  { ObjectID: '3', KanbanState: 'Ready to pull', PlanEstimate: 5, TaskRemainingTotal: 12 }\n]\n</code></pre>\n\n<p>and a config like this:</p>\n\n<pre><code>config = {\n  groupBy: 'KanbanState',\n  aggregationConfig: [\n    {field: 'ObjectID', f: 'count'}\n    {as: 'Drill-down', field:'ObjectID', f:'values'}\n    {field: 'PlanEstimate', f: 'sum'}\n    {as: 'mySum', field: 'PlanEstimate', f: (values) -&gt;\n      temp = 0\n      for v in values\n        temp += v\n      return temp\n    }\n  ]\n}\n</code></pre>\n\n<p>Returns the aggregations like this:</p>\n\n<pre><code>a = groupBy(list, config)\nconsole.log(a)\n\n#   [ { KanbanState: 'In progress',\n#       _count: 1,\n#       'Drill-down': [ '1' ], \n#       PlanEstimate_sum: 5,\n#       mySum: 5 },\n#     { KanbanState: 'Ready to pull',\n#       _count: 2,\n#       'Drill-down': [ '2', '3' ], \n#       PlanEstimate_sum: 8,\n#       mySum: 8 } ]\n</code></pre>\n\n<p>The first element of this specification is the <code>groupBy</code> field. This is analagous to\nthe <code>GROUP BY</code> column in an SQL expression.</p>\n\n<p>Uses the same aggregation functions as the <code>aggregate</code> function.</p>\n</div></li></ul></div></div></div><div id='method-groupByAt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize'>Lumenize</span><br/><a href='source/aggregate.coffee.html#Lumenize-method-groupByAt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize-method-groupByAt' class='name expandable'>groupByAt</a>( <span class='pre'>atArray, config</span> ) : Array[]</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>atArray</span> : Array[]<div class='sub-desc'>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array[]</span><div class='sub-desc'><p>Each row in atArray is passed to the <code>groupBy</code> function and the results are collected into a single output.</p>\n\n<p>This function also finds all the unique groupBy values in all rows of the output and pads the output with blank/zero rows to cover\neach unique groupBy value.</p>\n\n<p>This is essentially a wrapper around the groupBy function so the config parameter is the same with the addition of the <code>uniqueValues</code> field.\nThe ordering specified in <code>config.uniqueValues</code> (optional) will be honored. Any additional unique values that aggregateAt finds will be added to\nthe uniqueValues list at the end. This gives you the best of both worlds. The ability to specify the order without the risk of the\ndata containing more values than you originally thought when you created config.uniqueValues.</p>\n\n<p>Note: <code>groupByAt</code> has the side-effect that <code>config.uniqueValues</code> are upgraded with the missing values.\nYou can use this if you want to do more calculations at the calling site.</p>\n</div></li></ul></div></div></div><div id='method-groupByAtArray_To_HighChartsSeries' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize'>Lumenize</span><br/><a href='source/dataTransform.coffee.html#Lumenize-method-groupByAtArray_To_HighChartsSeries' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize-method-groupByAtArray_To_HighChartsSeries' class='name expandable'>groupByAtArray_To_HighChartsSeries</a>( <span class='pre'>groupByAtArray, nameField, valueField, [returnPreOutput]</span> ) : Array/Object</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>groupByAtArray</span> : Array[]<div class='sub-desc'><p>result of calling groupByAt()</p>\n</div></li><li><span class='pre'>nameField</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>valueField</span> : String<div class='sub-desc'><p>@pararm {String[]} nameFieldValues</p>\n</div></li><li><span class='pre'>returnPreOutput</span> : Boolean (optional)<div class='sub-desc'><p>if true, this function returns the map prior to squishing the name into the rows</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array/Object</span><div class='sub-desc'><p>Takes an array of arrays that came from groupByAt and looks like this:</p>\n\n<pre><code>{groupByAtArray_To_HighChartsSeries} = require('../')\n\ngroupByAtArray = [\n  [\n    { 'CFDField': 8, KanbanState: 'Ready to pull' },\n    { 'CFDField': 5, KanbanState: 'In progress' },\n    { 'CFDField': 9, KanbanState: 'Accepted' },\n  ],\n  [\n    { 'CFDField': 2, KanbanState: 'Ready to pull' },\n    { 'CFDField': 3, KanbanState: 'In progress' },\n    { 'CFDField': 17, KanbanState: 'Accepted' },\n  ]\n]\n</code></pre>\n\n<p>and optionally a list of nameFieldValues</p>\n\n<pre><code>nameFieldValues = ['Ready to pull', 'In progress']  # Note, Accepted is missing\n</code></pre>\n\n<p>and extracts the <code>valueField</code> under nameField to give us this</p>\n\n<pre><code>console.log(groupByAtArray_To_HighChartsSeries(groupByAtArray, 'KanbanState', 'CFDField', nameFieldValues))\n# [ { name: 'Ready to pull', data: [ 8, 2 ] },\n#   { name: 'In progress', data: [ 5, 3 ] } ]\n</code></pre>\n</div></li></ul></div></div></div><div id='method-histogram' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize'>Lumenize</span><br/><a href='source/histogram.coffee.html#Lumenize-method-histogram' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize-method-histogram' class='name expandable'>histogram</a>( <span class='pre'>rows, valueField</span> ) : Object[]</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rows</span> : Object[]<div class='sub-desc'>\n</div></li><li><span class='pre'>valueField</span> : String<div class='sub-desc'><p>Specifies the field containing the data to calculate the histogram</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object[]</span><div class='sub-desc'><p>Returns an object containing the following:</p>\n\n<ul>\n<li>buckets - An Array containing {label, count, rows, clippedChartValue}</li>\n<li>bucketSize - The size of each bucket (except the top one)</li>\n<li>chartMax - The maximum to use for charting using clipped values</li>\n<li>clipped - A Boolean indicating if the result is clipped</li>\n<li>valueMax - The actual maximum value found. Will always be >= chartMax</li>\n</ul>\n\n\n<p>Given an array of rows like:</p>\n\n<pre><code>{histogram} = require('../')\n\nrows = [\n  {age:  7},\n  {age: 25},\n  {age: 23},\n  {age: 27},\n  {age: 34},\n  {age: 55},\n  {age: 42},\n  {age: 13},\n  {age: 11},\n  {age: 23},\n  {age: 31},\n  {age: 32},\n  {age: 29},\n  {age: 16},\n  {age: 31},\n  {age: 22},\n  {age: 25},\n]\n</code></pre>\n\n<p>histogram will calculate a histogram. There will be sqrt(n) + 1 buckets</p>\n\n<pre><code>{buckets, chartMax} = histogram(rows, 'age')\nfor b in buckets\n  console.log(b.label, b.count)\n# 0-13 2\n# 13-26 7\n# 26-39 6\n# 39-52 1\n# 52-65 1\n\nconsole.log(chartMax)\n# 65\n</code></pre>\n\n<p>This histogram calculator will also attempt to lump outliers into a single bucket at the top.</p>\n\n<pre><code>rows.push({age: 85})\n\n{buckets, chartMax} = histogram(rows, 'age')\n\nlastBucket = buckets[buckets.length - 1]\nconsole.log(lastBucket.label, lastBucket.count)\n# 68-86* 1\n</code></pre>\n\n<p>The asterix <code>*</code> is there to indicate that this bucket is not the same size as the others and non-linear.\nThe histogram calculator will also \"clip\" the values for these outliers so that you can\ndisplay them in a scatter chart on a linear scale with the last band compressed.\nThe <code>clippedChartValue</code> will be guaranteed to be below the <code>chartMax</code> by interpolating it's position between\nthe bounds of the top band where the actual max value is scaled down to the <code>chartMax</code></p>\n\n<pre><code>lastBucket = buckets[buckets.length - 1]\nconsole.log(lastBucket.rows[0].age, lastBucket.rows[0].clippedChartValue)\n# 85 84.05555555555556\n</code></pre>\n</div></li></ul></div></div></div><div id='method-snapshotArray_To_AtArray' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize'>Lumenize</span><br/><a href='source/dataTransform.coffee.html#Lumenize-method-snapshotArray_To_AtArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize-method-snapshotArray_To_AtArray' class='name expandable'>snapshotArray_To_AtArray</a>( <span class='pre'>snapshotArray, listOfAtCTs, validFromField, validToField, uniqueIDField, tz</span> ) : Array[]</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>snapshotArray</span> : Object[]<div class='sub-desc'><p>Array of snapshots</p>\n</div></li><li><span class='pre'>listOfAtCTs</span> : Array[]<div class='sub-desc'><p>Array of Time objects representing the moments we want the snapshots at</p>\n</div></li><li><span class='pre'>validFromField</span> : String<div class='sub-desc'><p>Specifies the field that holds a date string in ISO-8601 canonical format (eg <code>2011-01-01T12:34:56.789Z</code>)</p>\n</div></li><li><span class='pre'>validToField</span> : String<div class='sub-desc'><p>Same except for the end of the snapshot's active time.\n  Defaults to '_ValidTo' for backward compatibility reasons.</p>\n</div></li><li><span class='pre'>uniqueIDField</span> : String<div class='sub-desc'><p>Specifies the field that holds the unique ID. Note, no matter the input type, they will come\n   out the other side as Strings. I could fix this if it ever became a problem.</p>\n</div></li><li><span class='pre'>tz</span> : String<div class='sub-desc'><p>timezone like \"America/New_York\"</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array[]</span><div class='sub-desc'><p>If you have a list of snapshots representing the changes in a set of work items over time, this function will return the state of\neach item at each moments of interest. It's useful for time-series charts where you have snapshot or change records but you need to know\nthe values at particular moments in time (the times in listOfAtCTs).</p>\n\n<p>Since this transformation is timezone dependent, you'll need to initialize Time with the path to the tz files.\nNote, that if you use the browserified version of Lumenize, you still need to call setTZPath with some dummy path.\nI'm hoping to fix this at some point.</p>\n\n<pre><code>{snapshotArray_To_AtArray, Time} = require('../')\n</code></pre>\n\n<p>It will convert an snapshotArray like:</p>\n\n<pre><code>snapshotArray = [\n  {_ValidFrom: '1999-01-01T12:00:00.000Z', _ValidTo:'2010-01-02T12:00:00.000Z', ObjectID: 0, someColumn: 'some value'},\n  {_ValidFrom: '2011-01-01T12:00:00.000Z', _ValidTo:'2011-01-02T12:00:00.000Z', ObjectID: 1, someColumn: 'some value'},\n  {_ValidFrom: '2011-01-02T12:00:00.000Z', _ValidTo:'9999-01-01T12:00:00.000Z', ObjectID: 2, someColumn: 'some value 2'},      \n  {_ValidFrom: '2011-01-02T12:00:00.000Z', _ValidTo:'2011-01-03T12:00:00.000Z', ObjectID: 3, someColumn: 'some value'},\n  {_ValidFrom: '2011-01-05T12:00:00.000Z', _ValidTo:'9999-01-01T12:00:00.000Z', ObjectID: 1, someColumn: 'some value'},\n  {_ValidFrom: '2222-01-05T12:00:00.000Z', _ValidTo:'9999-01-01T12:00:00.000Z', ObjectID: 99, someColumn: 'some value'},\n]\n</code></pre>\n\n<p>And a listOfAtCTs like:</p>\n\n<pre><code>listOfAtCTs = [new Time('2011-01-02'), new Time('2011-01-03'), new Time('2011-01-07')]\n</code></pre>\n\n<p>To an atArray with the value of each ObjectID at each of the points in the listOfAtCTs like:</p>\n\n<pre><code>a = snapshotArray_To_AtArray(snapshotArray, listOfAtCTs, '_ValidFrom', 'ObjectID', 'America/New_York', '_ValidTo')\n\nconsole.log(a)\n\n# [ [ { _ValidFrom: '2011-01-01T12:00:00.000Z',\n#       _ValidTo: '2011-01-02T12:00:00.000Z',\n#       ObjectID: '1',\n#       someColumn: 'some value' } ],\n#   [ { _ValidFrom: '2011-01-02T12:00:00.000Z',\n#       _ValidTo: '9999-01-01T12:00:00.000Z',\n#       ObjectID: '2',\n#       someColumn: 'some value 2' },\n#     { _ValidFrom: '2011-01-02T12:00:00.000Z',\n#       _ValidTo: '2011-01-03T12:00:00.000Z',\n#       ObjectID: '3',\n#       someColumn: 'some value' } ],\n#   [ { _ValidFrom: '2011-01-05T12:00:00.000Z',\n#       _ValidTo: '9999-01-01T12:00:00.000Z',\n#       ObjectID: '1',\n#       someColumn: 'some value' },\n#     { _ValidFrom: '2011-01-02T12:00:00.000Z',\n#       _ValidTo: '9999-01-01T12:00:00.000Z',\n#       ObjectID: '2',\n#       someColumn: 'some value 2' } ] ]\n</code></pre>\n</div></li></ul></div></div></div><div id='method-timeSeriesCalculator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize'>Lumenize</span><br/><a href='source/aggregate.coffee.html#Lumenize-method-timeSeriesCalculator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize-method-timeSeriesCalculator' class='name expandable'>timeSeriesCalculator</a>( <span class='pre'>snapshotArray, config</span> ) : Object</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>snapshotArray</span> : Object[]<div class='sub-desc'>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Returns an Object {listOfAtCTs, aggregationAtArray}</p>\n\n<p>Takes an MVCC style <code>snapshotArray</code> array and returns the time series calculations <code>At</code> each moment specified by\nthe Timeline config (<code>timelineConfig</code>) within the config object.</p>\n\n<p>This is really just a thin wrapper around various other calculations, so look at the documentation for each of\nthose to get the detail picture of what this timeSeriesCalculator does. The general flow is:</p>\n\n<ol>\n<li>Use <code>Timeline.getTimeline()</code> against <code>config.timelineConfig</code> to find the points for the x-axis.\nThe output of this work is a <code>listOfAtCTs</code> array.</li>\n<li>Use <code>snapshotArray_To_AtArray</code> to figure out what state those objects were in at each point in the <code>listOfAtCTs</code> array.\nThe output of this operation is called an <code>atArray</code></li>\n<li>Use <code>deriveFieldsAt</code> to add fields in each object in the <code>atArray</code> whose values are derived from the other fields in the object.</li>\n<li>Use <code>aggregateAt</code> to calculate aggregations into an <code>aggregationAtArray</code> which contains chartable values.</li>\n</ol>\n\n</div></li></ul></div></div></div><div id='method-timeSeriesGroupByCalculator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize'>Lumenize</span><br/><a href='source/aggregate.coffee.html#Lumenize-method-timeSeriesGroupByCalculator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize-method-timeSeriesGroupByCalculator' class='name expandable'>timeSeriesGroupByCalculator</a>( <span class='pre'>snapshotArray, config</span> ) : Object</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>snapshotArray</span> : Object[]<div class='sub-desc'>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Returns an Object {listOfAtCTs, groupByAtArray, uniqueValues}</p>\n\n<p>Takes an MVCC style <code>snapshotArray</code> array and returns the data groupedBy a particular field <code>At</code> each moment specified by\nthe Timeline config (<code>timelineConfig</code>) within the config object.</p>\n\n<p>This is really just a thin wrapper around various other calculations, so look at the documentation for each of\nthose to get the detail picture of what this timeSeriesGroupByCalculator does. The general flow is:</p>\n\n<ol>\n<li>Use <code>Timeline</code> and <code>TimelineIterator</code> against <code>config.timelineConfig</code> to find the points for the x-axis.\nThe output of this work is a <code>listOfAtCTs</code> array.</li>\n<li>Use <code>snapshotArray_To_AtArray</code> to figure out what state those objects were in at each point in the <code>listOfAtCTs</code> array.\nThe output of this operation is called an <code>atArray</code></li>\n<li>Use <code>groupByAt</code> to create a <code>groupByAtArray</code> of grouped aggregations to chart</li>\n</ol>\n\n</div></li></ul></div></div></div></div></div></div></div>"});