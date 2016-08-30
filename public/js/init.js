var html_li =
'        <li class="col-xs-12 col-sm-4 col-lg-4">'+
'          <form name="form[]">'+
'            <input type="text" name="name" placeholder="name" class="form-control">'+
'            <select class="form-control" name="type">'+
'              <option value="String">String</option>'+
'              <option value="Int">Int</option>'+
'              <option value="Double">Double</option>'+
'              <option value="Float">Float</option>'+
'              <option value="Bool">Bool</option>'+
'              <option value="Int32">Int32</option>'+
'              <option value="Int64">Int64</option>'+
'            </select>'+
'            <input type="checkbox" name="optional">optional'+
'          </form>'+
'        </li>';
$( document ).ready(function() {
  $("#FRM_CONTAINER").append(html_li).append(html_li).append(html_li);
  $('#resBtn').click(function(){
    var _ClassName = $('#className').val();
    _ClassName = (_ClassName.length < 1)? 'UnkownClass' : _ClassName ;

    memberDefine = ""; // 멤버
    initParam = ""; // 초기화 생성자
    selfDefine = ""; // 초기값
    var forms = $('form[name="form[]"]');
    for (var i = 0; i < forms.length; i++) {
      var iName = forms[i].elements[0].value;
      var iType = forms[i].elements[1].value;
      var iOptional = forms[i].elements[2].checked;
      if (iName.length < 1) continue;
      memberDefine += "\tvar "+iName+":"+iType+((iOptional)?"?":"")+"\n";
      initParam += ((i==0)?"":", ")+ "_ "+iName+":"+iType+((iOptional)?"?":"")
      selfDefine += "\t\tself."+iName+" = "+iName+"\n";
    }
    var resStr = "";
    resStr = "class " + _ClassName + " {\n" + memberDefine
        + "\n\tinit(" + initParam + "){\n" + selfDefine + "\t}\n}";
    $('#resBox').text(resStr);
    memberDefine = ""; initParam = ""; selfDefine = "";
  });

  $('#addBtn').click(function(){
    $("#FRM_CONTAINER").append(html_li);
  });
  $('#ad3Btn').click(function(){
    $("#FRM_CONTAINER").append(html_li).append(html_li).append(html_li);
  });
});
