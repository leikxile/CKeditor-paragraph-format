CKEDITOR.plugins.add('paragraphformat', {
    icons: 'paragraphformat',
    init: function(editor) {
        editor.addCommand('pfDialog', new CKEDITOR.dialogCommand('pfDialog'));
        editor.ui.addButton('paragraphformat', {
            label: 'Format Paragraph',
            command: 'pfDialog',
        });
        CKEDITOR.dialog.add('pfDialog', this.path + 'dialogs/paragraphformat.js');
        if (editor.contextMenu) {
            editor.addMenuGroup('pfGroup');
            editor.addMenuItem('pfitem', {
                label: 'Format paragraph',
                icon: this.path + 'icons/paragraphformat.png',
                command: 'pfDialog',
                group: 'pfGroup'
            });
            editor.contextMenu.addListener(function(element) {
                if (editor.getSelection().getStartElement().getName() == 'p' ) {
                    return {pfitem: CKEDITOR.TRISTATE_OFF};
                }
            });
        }
    }
});
function _paragraphform_t(id) {
    if (id == 1) {
        document.getElementById("container1").style.display = "inline";
        document.getElementById("container2").style.display = "none";
        document.getElementById("tab1").className = "tab active-tab";
        document.getElementById("tab2").className = "tab";
    } else {
        document.getElementById("container1").style.display = "none";
        document.getElementById("container2").style.display = "inline";
        document.getElementById("tab1").className = "tab";
        document.getElementById("tab2").className = "tab active-tab";
    }
}
function setOption(selectElement, value) {
    var options = selectElement.options;
    for (var i = 0, optionsLength = options.length; i < optionsLength; i++) {
        if (options[i].value == value) {
            selectElement.selectedIndex = i;
            return true;
        }
    }
    return false;
}

function _paragraphform_s(){
   var style = {};
   var talign = document.getElementById('textalign').value;
   var lineheight = document.getElementById('lineheight').value;
   var tindent = document.getElementById('textindent').value;
   var tmargin = document.getElementById('topmargin').value;
   var bmargin = document.getElementById('bottommargin').value;
   var lmargin = document.getElementById('leftmargin').value;
   var rmargin = document.getElementById('rightmargin').value;
   if(talign != '' && talign != '0'){
        style["text-align"] = talign;
   }
   if(lineheight != '' && lineheight != '0'){
       lineheight = lineheight + "px";
       style["line-height"] = lineheight;
   }
   if(tindent != '' && tindent != '0'){
       tindent = tindent + 'px';
       style["text-indent"] = tindent;
   }
   if(tmargin != '' && tmargin != '0'){
       tmargin = tmargin + 'px';
       style["margin-top"] = tmargin;
   }
   if(bmargin != '' && bmargin != '0'){
       bmargin = bmargin + 'px';
       style["margin-bottom"] = bmargin;
   }
   if(lmargin != '' && lmargin != '0'){
       lmargin = lmargin + 'px';
       style["margin-left"] = lmargin;
   }
   if(rmargin != '' && rmargin != '0'){
       rmargin = rmargin + 'px';
       style["margin-right"] = rmargin;
   }
   return style;
}
