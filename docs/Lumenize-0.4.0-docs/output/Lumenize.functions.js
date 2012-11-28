Ext.data.JsonP.Lumenize_functions({"tagname":"class","name":"Lumenize.functions","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Lumenize.functions","members":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":3,"files":[{"filename":"functions.coffee.js","href":"functions.coffee.html#Lumenize-functions"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[{"name":"$addToSet","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-S-addToSet"},{"name":"$average","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-S-average"},{"name":"$count","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-S-count"},{"name":"$max","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-S-max"},{"name":"$min","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-S-min"},{"name":"$push","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-S-push"},{"name":"$standardDeviation","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-S-standardDeviation"},{"name":"$sum","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-S-sum"},{"name":"$sumSquares","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-S-sumSquares"},{"name":"$variance","tagname":"method","owner":"Lumenize.functions","meta":{"static":true},"id":"static-method-S-variance"}],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/functions.coffee.html#Lumenize-functions' target='_blank'>functions.coffee.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-S-addToSet' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-S-addToSet' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-S-addToSet' class='name expandable'>$addToSet</a>( <span class='pre'>values</span> ) : Array<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Number[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>Unique values. This is good for generating an OLAP dimension or drill down.</p>\n</div></li></ul></div></div></div><div id='static-method-S-average' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-S-average' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-S-average' class='name expandable'>$average</a>( <span class='pre'>values</span> ) : Number<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Number[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The arithmetic mean</p>\n</div></li></ul></div></div></div><div id='static-method-S-count' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-S-count' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-S-count' class='name expandable'>$count</a>( <span class='pre'>values</span> ) : Number<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Number[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The length of the values Array</p>\n</div></li></ul></div></div></div><div id='static-method-S-max' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-S-max' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-S-max' class='name expandable'>$max</a>( <span class='pre'>values</span> ) : Number<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Number[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The maximum value or null if no values</p>\n</div></li></ul></div></div></div><div id='static-method-S-min' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-S-min' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-S-min' class='name expandable'>$min</a>( <span class='pre'>values</span> ) : Number<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Number[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The minimum value or null if no values</p>\n</div></li></ul></div></div></div><div id='static-method-S-push' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-S-push' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-S-push' class='name expandable'>$push</a>( <span class='pre'>values</span> ) : Array<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Number[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>All values (allows duplicates). Can be used for drill down when you know they will be unique.</p>\n</div></li></ul></div></div></div><div id='static-method-S-standardDeviation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-S-standardDeviation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-S-standardDeviation' class='name expandable'>$standardDeviation</a>( <span class='pre'>values</span> ) : Number<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Number[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The standard deviation</p>\n</div></li></ul></div></div></div><div id='static-method-S-sum' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-S-sum' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-S-sum' class='name expandable'>$sum</a>( <span class='pre'>values</span> ) : Number<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Number[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The sum of the values</p>\n</div></li></ul></div></div></div><div id='static-method-S-sumSquares' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-S-sumSquares' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-S-sumSquares' class='name expandable'>$sumSquares</a>( <span class='pre'>values</span> ) : Number<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Number[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The sum of the squares of the values</p>\n</div></li></ul></div></div></div><div id='static-method-S-variance' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.functions'>Lumenize.functions</span><br/><a href='source/functions.coffee.html#Lumenize-functions-static-method-S-variance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.functions-static-method-S-variance' class='name expandable'>$variance</a>( <span class='pre'>values</span> ) : Number<strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Number[]<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The variance</p>\n</div></li></ul></div></div></div></div></div></div></div>"});