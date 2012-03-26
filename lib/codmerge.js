// CodMerge - global var
var CodMerge = (function() {
	CodMerge = function(place, givenOptions) {
		var options = {}, defaults = CodMerge.defaults;
		for (var opt in defaults)
			if (defaults.hasOwnProperty(opt))
				options[opt] = (givenOptions && givenOptions.hasOwnProperty(opt) ? givenOptions : defaults)[opt];

		var targetDocument = options["document"];
		
		// The element in which the editor lives.
		var wrapper = targetDocument.createElement("div");
		wrapper.className = "CodMerge" + (options.lineWrapping ? " CodMerge-wrap" : "");
		
		// This mess creates the base DOM structure for the editor.
		wrapper.innerHTML =
		//'<div style="overflow: hidden; position: relative; width: 3px; height: 0px;">' + // Wraps and hides input textarea
			'<textarea style="position: absolute; padding: 0; width: 1px; height: 1em" wrap="off" ' +
			'autocorrect="off" autocapitalize="off"></textarea>' + 
			'<textarea style="position: absolute; padding: 0; width: 1px; height: 1em" wrap="off" ' +
			'autocorrect="off" autocapitalize="off"></textarea>' + 
		//'</div>' +
		'<div class="CodMergeScroll" tabindex="-1">' +
		'<div style="position: relative">' + // Set to the height of the text, causes scrolling
		'<div style="position: relative">' + // Moved around its parent to cover visible view
		'<div class="CodMergeScrollInfo"><div class="CodMerge-gutter-text"></div></div>' +
		// Provides positioning relative to (visible) text origin
		'<div class="CodMerge-lines"><div style="position: relative; z-index: 0">' +
			'<div style="position: absolute; width: 100%; height: 0; overflow: hidden; visibility: hidden;"></div>' +
			'<pre class="CodMerge-cursor">&#160;</pre>' + // Absolutely positioned blinky cursor
			'<div style="position: relative; z-index: -1"></div>' +
			'<div></div>' + // DIVs containing the selection and the actual code
		'</div></div></div></div></div>';
		if (place.appendChild) place.appendChild(wrapper); else place(wrapper);
	});
	
	
	
	// The default configuration options.
	CodMerge.defaults = {
		/*
		value: "",
		mode: null,
		theme: "default",
		indentUnit: 2,
		indentWithTabs: false,
		smartIndent: true,
		tabSize: 4,
		keyMap: "default",
		extraKeys: null,
		electricChars: true,
		autoClearEmptyLines: false,
		onKeyEvent: null,
		gutter: false,
		fixedGutter: false,
		firstLineNumber: 1,
		readOnly: false,
		onChange: null,
		onCursorActivity: null,
		onGutterClick: null,
		onHighlightComplete: null,
		onUpdate: null,
		onFocus: null, onBlur: null, onScroll: null,
		matchBrackets: false,
		workTime: 100,
		workDelay: 200,
		pollInterval: 100,
		undoDepth: 40,
		tabindex: null,
		*/
		lineWrapping: false,
		lineNumbers: false,
		document: window.document
	};
	
})();