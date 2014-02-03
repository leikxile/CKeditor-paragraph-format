CKEDITOR.dialog.add('pfDialog', function(editor) {
    return {
        title: 'Paragraph Properties',
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'tab1',
                label: '',
                title: '',
                elements: [
                    {
                        type: 'html',
                        html: '<style>.active-tab{background-color:#fff !important;border-bottom:none !important;}.clear{clear:both;}.container{border:1px solid #e1e1e1;width:429px;border-top:none;float:left;padding:32px;}#container2{display:none;}div,span{font-family:"Verdana";font-size:15px;}.form{width:100%;margin-top:5px;}.maincontainer{width:500px;}.left{float:left;}.right{float:right;}.tab{float:left;width:20%;height:20px;border:1px solid #e1e1e1;border-right:none;padding:5px;text-align:center;background-color:#f1f1f1;cursor:pointer;}.tab-final{border-right:1px solid #e1e1e1 !important;}.tab-invi{border:1px solid #fff;border-bottom:1px solid #e1e1e1;border-left:1px solid #e1e1e1;width:52%;height:20px;float:left;padding:5px;}.form input[type="text"], .form select{border:1px solid #e1e1e1;width:150px;height:25px;}</style><div class="maincontainer"><div class="tabcontainer"><div class="tab active-tab" id="tab1" onclick="_paragraphform_t(1);"> General </div><div class="tab" id="tab2" onclick="_paragraphform_t(2);"> Indention </div><div class="tab-invi"></div><div class="clear"></div></div><div class="container" id="container1"><div class="form"><div class="left">Text-align</div><div class="right"><select id="textalign"><option>Center</option><option>Left</option><option>Right</option><option>Justify</option></select></div><div class="clear"></div></div><div class="form"><div class="left">Line height</div><div class="right"><input type="text" id="lineheight"/></div><div class="clear"></div></div></div><div class="container" id="container2"><div class="form"><div class="left">Text indent</div><div class="right"><input type="text" id="textindent"/></div><div class="clear"></div></div><div class="form"><div class="left">Top margin</div><div class="right"><input type="text" id="topmargin"/></div><div class="clear"></div></div><div class="form"><div class="left">Bottom margin</div><div class="right"><input type="text" id="bottommargin"/></div><div class="clear"></div></div><div class="form"><div class="left">Left margin</div><div class="right"><input type="text" id="leftmargin"/></div><div class="clear"></div></div><div class="form"><div class="left">Right margin</div><div class="right"><input type="text" id="rightmargin"/></div><div class="clear"></div></div></div></div>'
                    }
                ]
            }
        ],
        onShow: function(){
            var selection = editor.getSelection();
            var element = selection.getStartElement();
            var textindent = element.getStyle('text-indent');
            var textalign = element.getStyle('text-align');
            var lineheight = element.getStyle('line-height');
            var topmargin = element.getStyle('margin-top');
            var bottommargin = element.getStyle('margin-bottom');
            var leftmargin = element.getStyle('margin-left');
            var rightmargin = element.getStyle('margin-right');
            setOption(document.getElementById('textalign'), textalign);
            document.getElementById('textindent').value=textindent.replace('px','');
            document.getElementById('lineheight').value=lineheight.replace('px','');
            document.getElementById('topmargin').value=topmargin.replace('px','');
            document.getElementById('bottommargin').value=bottommargin.replace('px','');
            document.getElementById('rightmargin').value=rightmargin.replace('px','');
            document.getElementById('leftmargin').value=leftmargin.replace('px','');
        },
        onOk: function() {
            var selection = editor.getSelection();
            var element = selection.getStartElement();
            var style = _paragraphform_s();
            element.setStyles(style);
        }
    };
});
