const nsIFilePicker = Components.interfaces.nsIFilePicker;
let filePicker = Components.classes["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);

var onBrowse = function() {
	filePicker.init(window, null, nsIFilePicker.modeGetFolder);
	
	if (filePicker.show() == nsIFilePicker.returnOK) {
		var path = filePicker.fileURL.spec;
		path = path.replace('file:///', '').replace(/\//g, '\\').replace(/\%20/g, ' ');
		document.getElementById("delhaize-direct-path").value = path;
	}
}

var onBrowseC = function() {
	filePicker.init(window, null, nsIFilePicker.modeGetFolder);
	
	if (filePicker.show() == nsIFilePicker.returnOK) {
		var path = filePicker.fileURL.spec;
		path = path.replace('file:///', '').replace(/\//g, '\\').replace(/\%20/g, ' ');
		document.getElementById("delhaize-direct-pathc").value = path;
	}
}


var onBrowseC2 = function() {
	filePicker.init(window, null, nsIFilePicker.modeGetFolder);
	
	if (filePicker.show() == nsIFilePicker.returnOK) {
		var path = filePicker.fileURL.spec;
		path = path.replace('file:///', '').replace(/\//g, '\\').replace(/\%20/g, ' ');
		document.getElementById("delhaize-direct-pathc2").value = path;
	}
}


var onBrowseC3 = function() {
	filePicker.init(window, null, nsIFilePicker.modeGetFolder);
	
	if (filePicker.show() == nsIFilePicker.returnOK) {
		var path = filePicker.fileURL.spec;
		path = path.replace('file:///', '').replace(/\//g, '\\').replace(/\%20/g, ' ');
		document.getElementById("delhaize-direct-pathc3").value = path;
	}
}