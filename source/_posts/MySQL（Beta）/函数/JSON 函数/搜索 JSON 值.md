---
categories:
  - MySQL
date:
  - 2023-1-23 20:08:01
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.9444in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.9444in'>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.5458in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>函数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:4.9354in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.5458in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_CONTAINS()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:4.9354in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档是否在路径处包含特定对象</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.5458in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_CONTAINS_PATH()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.9354in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档是否在路径上包含任何数据</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.5458in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_EXTRACT()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:4.9354in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>从</span><span style='font-family:"Comic Sans MS"'> JSON
  </span><span style='font-family:"Microsoft YaHei UI"'>文档返回数据</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.5458in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_KEYS()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.9354in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>来自</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档的密钥数组</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.5458in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_OVERLAPS()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.0048in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>比较两个</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档，如果这些文档具有任何共同的键值对或数组元素，则返回</span><span
  style='font-family:"Comic Sans MS"'> TRUE </span><span style='font-family:
  "Microsoft YaHei UI"'>（</span><span style='font-family:"Comic Sans MS"'>1</span><span
  style='font-family:"Microsoft YaHei UI"'>），否则返回</span><span style='font-family:
  "Comic Sans MS"'> FALSE </span><span style='font-family:"Microsoft YaHei UI"'>（</span><span
  style='font-family:"Comic Sans MS"'>0</span><span style='font-family:"Microsoft YaHei UI"'>）</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.5458in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_SEARCH()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.9354in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档中的值的路径</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.5458in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_VALUE()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.9354in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>从提供的路径所指向的位置的</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档中提取值</span><span
  style='font-family:"Comic Sans MS"'>;</span><span style='font-family:"Microsoft YaHei UI"'>将此值返回为</span><span
  style='font-family:"Comic Sans MS"'> VARCHAR</span><span style='font-family:
  "Microsoft YaHei UI"'>（</span><span style='font-family:"Comic Sans MS"'>512</span><span
  style='font-family:"Microsoft YaHei UI"'>） 或指定类型</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
13.5pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold'>JSON_CONTAINS(target, candidate[, path])</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>通过返回</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> 1 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> 0 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>来指示给定的候选</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>文档是否包含在目标</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>文档中，或者</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> - </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果提供了路径参数</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> - </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>是否在目标内的特定路径中找到候选。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果任何参数是
     ，或者路径参数未标识目标文档的一部分，则返回。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果目标或候选对象不是有效的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>文档，或者路径参数不是有效的路径表达式或包含通配符或通配符，则会发生错误</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>以下规则定义了包含：</span></li>
 <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
  margin-bottom:0in'>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>当且仅当它们可比较且相等时，候选标量包含在目标标量中。如果两个标量值具有相同的</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON_TYPE() </span><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>类型，则它们是可比较的，除了类型的值也可以相互比较。整数小数</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>当且仅当候选数组中的每个元素都包含在目标的某个元素中时，候选数组才包含在目标数组中。</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>当且仅当候选包含在目标的某个元素中时，候选非数组才包含在目标数组中。</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>候选对象包含在目标对象中当且仅当对于候选对象中的每个键在目标中存在同名键并且与候选键关联的值包含在与目标键关联的值中。</span></li>
 </ul>
</ul>

<p style='margin-left:.75in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>否则，候选值不包含在目标文档中</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>从</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL 8.0.17 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>开始，使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> InnoDB </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表的查询可以使用多值索引进行优化</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SET
</span><span style='color:#D88B00'>@j </span><span style='color:#A67F59'>= </span><span
style='color:#669900'>'{&quot;a&quot;: 1, &quot;b&quot;: 2, &quot;c&quot;:
{&quot;d&quot;: 4}}'</span><span style='color:#909090'>; </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SET
</span><span style='color:#D88B00'>@j2 </span><span style='color:#A67F59'>= </span><span
style='color:#669900'>'1'</span><span style='color:#909090'>; </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_CONTAINS</span><span style='color:#909090'>(</span><span
style='color:#D88B00'>@j</span><span style='color:#909090'>, </span><span
style='color:#D88B00'>@j2</span><span style='color:#909090'>, </span><span
style='color:#669900'>'$.a'</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_CONTAINS(@j,
@j2, '$.a') </span><span style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                      
</span></span><span style='color:#555555' lang=zh-CN>1 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_CONTAINS</span><span style='color:#909090'>(</span><span
style='color:#D88B00'>@j</span><span style='color:#909090'>, </span><span
style='color:#D88B00'>@j2</span><span style='color:#909090'>, </span><span
style='color:#669900'>'$.b'</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_CONTAINS(@j,
@j2, '$.b') </span><span style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                      
</span></span><span style='color:#555555' lang=zh-CN>0 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SET
</span><span style='color:#D88B00'>@j2 </span><span style='color:#A67F59'>= </span><span
style='color:#669900'>'{&quot;d&quot;: 4}'</span><span style='color:#909090'>; </span><span
style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT </span><span
style='color:#DD4A68'>JSON_CONTAINS</span><span style='color:#909090'>(</span><span
style='color:#D88B00'>@j</span><span style='color:#909090'>, </span><span
style='color:#D88B00'>@j2</span><span style='color:#909090'>, </span><span
style='color:#669900'>'$.a'</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_CONTAINS(@j,
@j2, '$.a') </span><span style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                     
</span></span><span style='color:#555555' lang=zh-CN>0 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_CONTAINS</span><span style='color:#909090'>(</span><span
style='color:#D88B00'>@j</span><span style='color:#909090'>, </span><span
style='color:#D88B00'>@j2</span><span style='color:#909090'>, </span><span
style='color:#669900'>'$.c'</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN>JSON_CONTAINS(@j, @j2, '$.c')</span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                      
</span></span><span style='color:#555555' lang=zh-CN>1 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------------+</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold'>JSON_CONTAINS_PATH(json_doc, one_or_all, path[, path]
...)</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>返回</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> 0 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> 1 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>以指示</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>文档是否包含给定路径或路径中的数据。如果任何参数是
     则返回。如果</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=zh-CN> json_doc </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>参数不是有效的</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> JSON </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>文档，任何路径参数都不是有效的路径表达式，或者</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>
     one_or_all </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>不是或，则会发生错误或者</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=zh-CN> NULL NULL</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>'one'</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>'all'</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>要检查路径中的特定值，请改用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON_CONTAINS()</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果文档中不存在指定的路径，则返回值为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> 0</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。否则，返回值取决于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> one_or_all </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>参数：</span></li>
</ul>

<p style='margin-left:.75in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>'one'</span><span style='font-family:"Microsoft YaHei UI"'>：如果文档中至少存在一个路径，则为</span><span
style='font-family:"Comic Sans MS"'> 1</span><span style='font-family:"Microsoft YaHei UI"'>，否则为</span><span
style='font-family:"Comic Sans MS"'> 0</span><span style='font-family:"Microsoft YaHei UI"'>。</span></p>

<p style='margin-left:.75in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>'all'</span><span
style='font-family:"Comic Sans MS"' lang=en-US><span style='mso-spacerun:yes'> 
</span></span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>：如果所有路径都存在于文档中，则为</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> 1</span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>，否则为</span><span style='font-family:"Comic Sans MS"'
lang=zh-CN> 0</span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>。</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SET
</span><span style='color:#D88B00'>@j </span><span style='color:#A67F59'>= </span><span
style='color:#669900'>'{&quot;a&quot;: 1, &quot;b&quot;: 2, &quot;c&quot;:
{&quot;d&quot;: 4}}'</span><span style='color:#909090'>; </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_CONTAINS_PATH</span><span
style='color:#909090'>(</span><span style='color:#D88B00'>@j</span><span
style='color:#909090'>, </span><span style='color:#669900'>'one'</span><span
style='color:#909090'>, </span><span style='color:#669900'>'$.a'</span><span
style='color:#909090'>, </span><span style='color:#669900'>'$.e'</span><span
style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_CONTAINS_PATH(@j,
'one', '$.a', '$.e') </span><span style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                                            
</span></span><span style='color:#555555' lang=zh-CN>1 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_CONTAINS_PATH</span><span
style='color:#909090'>(</span><span style='color:#D88B00'>@j</span><span
style='color:#909090'>, </span><span style='color:#669900'>'all'</span><span
style='color:#909090'>, </span><span style='color:#669900'>'$.a'</span><span
style='color:#909090'>, </span><span style='color:#669900'>'$.e'</span><span
style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN>JSON_CONTAINS_PATH(@j, 'all', '$.a', '$.e')</span><span
style='color:#555555' lang=en-US> </span><span style='color:#555555'
lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                                            
</span></span><span style='color:#555555' lang=zh-CN>0 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_CONTAINS_PATH</span><span
style='color:#909090'>(</span><span style='color:#D88B00'>@j</span><span
style='color:#909090'>, </span><span style='color:#669900'>'one'</span><span
style='color:#909090'>, </span><span style='color:#669900'>'$.c.d'</span><span
style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_CONTAINS_PATH(@j,
'one', '$.c.d') </span><span style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                                     
</span></span><span style='color:#555555' lang=zh-CN>1 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_CONTAINS_PATH</span><span
style='color:#909090'>(</span><span style='color:#D88B00'>@j</span><span
style='color:#909090'>, </span><span style='color:#669900'>'one'</span><span
style='color:#909090'>, </span><span style='color:#669900'>'$.a.d'</span><span
style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_CONTAINS_PATH(@j,
'one', '$.a.d') </span><span style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                                     
</span></span><span style='color:#555555' lang=zh-CN>0 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------------+</p>

<p style='font-family:SimSun;font-size:12.0pt'>&nbsp;</p>

<p style='font-family:SimSun;font-size:12.0pt'>&nbsp;</p>

<p style='font-family:SimSun;font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold'>JSON_EXTRACT(json_doc, path[, path] ...)</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>从</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>文档返回数据，从路径参数匹配的文档部分中选择。如果任何参数是或没有路径在文档中定位一个值，则返回。如果</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> json_doc </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>参数不是有效的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>文档或任何路径参数不是有效的路径表达式，则会发生错误。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>NULLNULL</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>返回值由路径参数匹配的所有值组成。如果这些参数有可能返回多个值，则匹配的值将按照与生成它们的路径相对应的顺序自动包装为数组。否则，返回值为单个匹配值</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_EXTRACT</span><span style='color:#909090'>(</span><span
style='color:#669900'>'[10, 20, [30, 40]]'</span><span style='color:#909090'>, </span><span
style='color:#669900'>'$[1]'</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_EXTRACT('[10,
20, [30, 40]]', '$[1]') </span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'> </span></span><span style='color:#909090' lang=zh-CN>|
</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>20<span
style='mso-spacerun:yes'>                                     </span></span><span
style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                           </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>    </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_EXTRACT</span><span style='color:#909090'>(</span><span
style='color:#669900'>'[10, 20, [30, 40]]'</span><span style='color:#909090'>, </span><span
style='color:#669900'>'$[1]'</span><span style='color:#909090'>, </span><span
style='color:#669900'>'$[0]'</span><span style='color:#909090'>);
+------------------------------------------------------------+ </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_EXTRACT('[10,
20, [30, 40]]', '$[1]', '$[0]') </span><span style='color:#909090' lang=zh-CN>|
</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>[20, 10]<span
style='mso-spacerun:yes'>      </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>                            </span></span><span
style='color:#555555' lang=zh-CN><span
style='mso-spacerun:yes'>                                     </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_EXTRACT</span><span style='color:#909090'>(</span><span
style='color:#669900'>'[10, 20, [30, 40]]'</span><span style='color:#909090'>, </span><span
style='color:#669900'>'$[2][*]'</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_EXTRACT('[10,
20, [30, 40]]', '$[2][*]') </span><span style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>[30, 40]<span
style='mso-spacerun:yes'>                       </span></span><span
style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                         </span></span><span
style='color:#555555' lang=zh-CN><span
style='mso-spacerun:yes'>               </span></span><span style='color:#909090'
lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>支持</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> -&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>运算符作为此函数的简写，与</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> 2 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>个参数一起使用，其中左侧是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>列标识符（不是表达式），右侧是要在列中匹配的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>路径。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold'>column-&gt;path</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>-&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>运算符在与两个参数一起使用时充当</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON_EXTRACT() </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>函数的别名，左侧的列标识符和右侧的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>路径（字符串文字）根据</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>文档（列值）进行评估</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>.</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>您可以使用此类表达式代替列引用，只要它们出现在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句中。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>此处显示的两个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SELECT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句产生相同的输出</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT</span>
c<span style='color:#909090'>, </span><span style='color:#DD4A68'>JSON_EXTRACT</span><span
style='color:#909090'>(</span>c<span style='color:#909090'>, </span><span
style='color:#669900'>&quot;$.id&quot;</span><span style='color:#909090'>),</span>
g </p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>&gt; </span><span style='color:#0077AA'>FROM</span>
jemp <span style='color:#A67F59'>&gt; </span><span style='color:#0077AA'>WHERE </span><span
style='color:#DD4A68'>JSON_EXTRACT</span><span style='color:#909090'>(</span>c<span
style='color:#909090'>, </span><span style='color:#669900'>&quot;$.id&quot;</span><span
style='color:#909090'>) </span><span style='color:#A67F59'>&gt; </span><span
style='color:#990055'>1 </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>&gt; </span><span style='color:#0077AA'>ORDER
BY </span><span style='color:#DD4A68'>JSON_EXTRACT</span><span
style='color:#909090'>(</span>c<span style='color:#909090'>, </span><span
style='color:#669900'>&quot;$.name&quot;</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------+-----------+-------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>c<span
style='mso-spacerun:yes'>            </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>            </span></span><span
style='color:#555555' lang=zh-CN><span
style='mso-spacerun:yes'>                </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>c</span><span
style='color:#909090' lang=zh-CN>-</span><span style='color:#555555'
lang=zh-CN>&gt;&quot;$.id&quot; </span><span style='color:#909090' lang=zh-CN>|</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>g<span style='mso-spacerun:yes'>    </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------+-----------+-------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>{&quot;id&quot;:
&quot;3&quot;, &quot;name&quot;: &quot;Barney&quot;} </span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>&quot;3&quot;<span
style='mso-spacerun:yes'>      </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>3 </span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>     </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN>{&quot;id&quot;: &quot;4&quot;,
&quot;name&quot;: &quot;Betty&quot;}<span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>&quot;4&quot;<span
style='mso-spacerun:yes'>       </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>4 </span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>     </span></span><span
style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN>{&quot;id&quot;: &quot;2&quot;,
&quot;name&quot;: &quot;Wilma&quot;}<span style='mso-spacerun:yes'>  </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>&quot;2&quot;<span
style='mso-spacerun:yes'>      </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>2 </span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>     </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------+-----------+-------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>3 rows in set (0.00 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT</span>
c<span style='color:#909090'>,</span> c<span style='color:#A67F59'>-&gt;</span><span
style='color:#669900'>&quot;$.id&quot;</span><span style='color:#909090'>,</span>
g </p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>&gt; </span><span style='color:#0077AA'>FROM</span>
jemp </p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>&gt; </span><span style='color:#0077AA'>WHERE</span>
c<span style='color:#A67F59'>-&gt;</span><span style='color:#669900'>&quot;$.id&quot;
</span><span style='color:#A67F59'>&gt; </span><span style='color:#990055'>1 </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>&gt; </span><span style='color:#0077AA'>ORDER
BY</span> c<span style='color:#A67F59'>-&gt;</span><span style='color:#669900'>&quot;$.name&quot;</span><span
style='color:#909090'>; </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------+-----------+------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>c<span
style='mso-spacerun:yes'>                         </span></span><span
style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>              </span></span><span style='color:#555555'
lang=zh-CN><span style='mso-spacerun:yes'>    </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>c</span><span
style='color:#909090' lang=zh-CN>-</span><span style='color:#555555'
lang=zh-CN>&gt;&quot;$.id&quot; </span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'> </span></span><span style='color:#909090' lang=zh-CN>|</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>g<span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------+-----------+------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>{&quot;id&quot;:
&quot;3&quot;, &quot;name&quot;: &quot;Barney&quot;} </span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>&quot;3&quot;<span
style='mso-spacerun:yes'>    </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>   </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>3</span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN>{&quot;id&quot;: &quot;4&quot;,
&quot;name&quot;: &quot;Betty&quot;}<span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>&quot;4&quot;<span
style='mso-spacerun:yes'>     </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>4 </span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN>{&quot;id&quot;: &quot;2&quot;,
&quot;name&quot;: &quot;Wilma&quot;}<span style='mso-spacerun:yes'>  </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>&quot;2&quot;<span
style='mso-spacerun:yes'>      </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>2</span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------+-----------+------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>3 rows in set (0.00 sec)</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#555555'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>此功能不限于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>SELECT</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'> ，如下所示： </span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>ALTER
TABLE</span> jemp <span style='color:#0077AA'>ADD COLUMN</span> n <span
style='color:#834689'>INT</span><span style='color:#909090'>; </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>Query OK, 0 rows affected (0.68 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>Records: 0<span style='mso-spacerun:yes'> 
</span>Duplicates: 0<span style='mso-spacerun:yes'>  </span>Warnings: 0 </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>UPDATE</span>
jemp <span style='color:#0077AA'>SET</span> n<span style='color:#A67F59'>=</span><span
style='color:#990055'>1 </span><span style='color:#0077AA'>WHERE</span> c<span
style='color:#A67F59'>-&gt;</span><span style='color:#669900'>&quot;$.id&quot; </span><span
style='color:#A67F59'>= </span><span style='color:#669900'>&quot;4&quot;</span><span
style='color:#909090'>; </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>Query OK, 1 row affected (0.04 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>Rows matched: 1<span style='mso-spacerun:yes'> 
</span>Changed: 1<span style='mso-spacerun:yes'>  </span>Warnings: 0 </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT</span>
c<span style='color:#909090'>,</span> c<span style='color:#A67F59'>-&gt;</span><span
style='color:#669900'>&quot;$.id&quot;</span><span style='color:#909090'>,</span>
g<span style='color:#909090'>,</span> n </p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>&gt; </span><span style='color:#0077AA'>FROM</span>
jemp </p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>&gt; </span><span style='color:#0077AA'>WHERE
</span><span style='color:#DD4A68'>JSON_EXTRACT</span><span style='color:#909090'>(</span>c<span
style='color:#909090'>, </span><span style='color:#669900'>&quot;$.id&quot;</span><span
style='color:#909090'>) </span><span style='color:#A67F59'>&gt; </span><span
style='color:#990055'>1 </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>&gt; </span><span style='color:#0077AA'>ORDER
BY</span> c<span style='color:#A67F59'>-&gt;</span><span style='color:#669900'>&quot;$.name&quot;</span><span
style='color:#909090'>; </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------+-----------+------+-------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>c<span
style='mso-spacerun:yes'>                          </span></span><span
style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>            </span></span><span style='color:#555555'
lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>c</span><span
style='color:#909090' lang=zh-CN>-</span><span style='color:#555555'
lang=zh-CN>&gt;&quot;$.id&quot; </span><span style='color:#909090' lang=zh-CN>|</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>g<span style='mso-spacerun:yes'>    </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>n<span
style='mso-spacerun:yes'>  </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------+-----------+------+-------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>{&quot;id&quot;:
&quot;3&quot;, &quot;name&quot;: &quot;Barney&quot;} </span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>&quot;3&quot;<span
style='mso-spacerun:yes'>     </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>3 </span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>NULL </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN>{&quot;id&quot;: &quot;4&quot;,
&quot;name&quot;: &quot;Betty&quot;}</span><span style='color:#555555'
lang=en-US> </span><span style='color:#555555' lang=zh-CN><span
style='mso-spacerun:yes'>  </span></span><span style='color:#909090'
lang=zh-CN>|</span><span style='color:#909090' lang=en-US> </span><span
style='color:#555555' lang=zh-CN>&quot;4&quot;<span
style='mso-spacerun:yes'>       </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>4 </span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>1</span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>       </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN>{&quot;id&quot;: &quot;2&quot;,
&quot;name&quot;: &quot;Wilma&quot;}</span><span style='color:#555555'
lang=en-US> </span><span style='color:#555555' lang=zh-CN><span
style='mso-spacerun:yes'> </span></span><span style='color:#909090' lang=zh-CN>|</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>&quot;2&quot;<span style='mso-spacerun:yes'>      </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>2 </span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>NULL </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------+-----------+------+------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>3 rows in set (0.00 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>DELETE
FROM</span> jemp <span style='color:#0077AA'>WHERE</span> c<span
style='color:#A67F59'>-&gt;</span><span style='color:#669900'>&quot;$.id&quot; </span><span
style='color:#A67F59'>= </span><span style='color:#669900'>&quot;4&quot;</span><span
style='color:#909090'>; </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>Query OK, 1 row affected (0.04 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT</span>
c<span style='color:#909090'>,</span> c<span style='color:#A67F59'>-&gt;</span><span
style='color:#669900'>&quot;$.id&quot;</span><span style='color:#909090'>,</span>
g<span style='color:#909090'>,</span> n </p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>&gt; </span><span style='color:#0077AA'>FROM</span>
jemp </p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&gt; <span style='color:#0077AA'>WHERE </span><span style='color:#DD4A68'>JSON_EXTRACT</span><span
style='color:#909090'>(</span>c<span style='color:#909090'>, </span><span
style='color:#669900'>&quot;$.id&quot;</span><span style='color:#909090'>)</span>
&gt; <span style='color:#990055'>1 </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>&gt; </span><span style='color:#0077AA'>ORDER
BY</span> c<span style='color:#A67F59'>-&gt;</span><span style='color:#669900'>&quot;$.name&quot;</span><span
style='color:#909090'>; </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------+-----------+------+-------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>c<span
style='mso-spacerun:yes'>                            </span></span><span
style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>               </span></span><span style='color:#555555'
lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>c</span><span
style='color:#909090' lang=zh-CN>-</span><span style='color:#555555'
lang=zh-CN>&gt;&quot;$.id&quot; </span><span style='color:#909090' lang=zh-CN>|</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>g<span style='mso-spacerun:yes'>   </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>n </span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------+-----------+------+-------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>{&quot;id&quot;:
&quot;3&quot;, &quot;name&quot;: &quot;Barney&quot;} </span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>&quot;3&quot;<span
style='mso-spacerun:yes'>      </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>3 </span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>NULL </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN>{&quot;id&quot;: &quot;2&quot;,
&quot;name&quot;: &quot;Wilma&quot;} </span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>&quot;2&quot;<span
style='mso-spacerun:yes'>     </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>2</span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>NULL </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------+-----------+------+-------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>2 rows in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>这也适用于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数组值，如下所示：</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>CREATE
TABLE</span> tj10 <span style='color:#909090'>(</span>a <span style='color:
#834689'>JSON</span><span style='color:#909090'>,</span> b <span
style='color:#834689'>INT</span><span style='color:#909090'>); </span><span
style='color:#555555'>Query OK, 0 rows affected (0.26 sec) </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>INSERT
INTO</span> tj10 </p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>&gt; </span><span style='color:#0077AA'>VALUES
</span><span style='color:#909090'>(</span><span style='color:#669900'>&quot;[3,10,5,17,44]&quot;</span><span
style='color:#909090'>, </span><span style='color:#990055'>33</span><span
style='color:#909090'>), (</span><span style='color:#669900'>&quot;[3,10,5,17,[22,44,66]]&quot;</span><span
style='color:#909090'>, </span><span style='color:#990055'>0</span><span
style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>Query OK, 1 row affected (0.04 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT</span>
a<span style='color:#A67F59'>-&gt;</span><span style='color:#669900'>&quot;$[4]&quot;
</span><span style='color:#0077AA'>FROM</span> tj10<span style='color:#909090'>;
</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN>a</span><span style='color:#909090'
lang=zh-CN>-</span><span style='color:#555555' lang=zh-CN>&gt;&quot;$[4]&quot;<span
style='mso-spacerun:yes'>   </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN>44<span style='mso-spacerun:yes'>      
</span></span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>     </span></span><span style='color:#555555'
lang=zh-CN><span style='mso-spacerun:yes'>    </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN>[22, 44, 66] </span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>2 rows in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#A67F59'>* </span><span style='color:#0077AA'>FROM</span>
tj10 <span style='color:#0077AA'>WHERE</span> a<span style='color:#A67F59'>-&gt;</span><span
style='color:#669900'>&quot;$[0]&quot; </span><span style='color:#A67F59'>= </span><span
style='color:#990055'>3</span><span style='color:#909090'>; </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------+------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN>a<span
style='mso-spacerun:yes'>                         </span></span><span
style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>            </span></span><span style='color:#555555'
lang=zh-CN><span style='mso-spacerun:yes'>   </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>b<span
style='mso-spacerun:yes'>  </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------+------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN>[3, 10, 5, 17, 44]<span
style='mso-spacerun:yes'>       </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>33</span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN>[3, 10, 5, 17, [22, 44, 66]] </span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>0 </span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>     </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------+------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>2 rows in set (0.00 sec)</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>支持嵌套数组。表达式</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> using </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的计算结果就像在目标</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>文档中找不到匹配的键一样，如下所示：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> -&gt;NULL</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#A67F59'>* </span><span style='color:#0077AA'>FROM</span>
tj10 <span style='color:#0077AA'>WHERE</span> a<span style='color:#A67F59'>-&gt;</span><span
style='color:#669900'>&quot;$[4][1]&quot; </span><span style='color:#A67F59'>IS
NOT </span><span style='color:#990055'>NULL</span><span style='color:#909090'>;
</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------+------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>a<span
style='mso-spacerun:yes'>                       </span></span><span
style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>           </span></span><span style='color:#555555'
lang=zh-CN><span style='mso-spacerun:yes'>     </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>b </span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>   </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------+------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>[3, 10, 5, 17, [22,
44, 66]] </span><span style='color:#909090' lang=zh-CN>|</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>0</span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>     </span></span><span style='color:#555555'
lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------+------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT</span>
a<span style='color:#A67F59'>-&gt;</span><span style='color:#669900'>&quot;$[4][1]&quot;
</span><span style='color:#0077AA'>FROM</span> tj10<span style='color:#909090'>;
</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+--------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>a</span><span
style='color:#909090' lang=zh-CN>-</span><span style='color:#555555'
lang=zh-CN>&gt;&quot;$[4][1]&quot; </span><span style='color:#909090'
lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+--------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>NULL<span
style='mso-spacerun:yes'>       </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>44<span
style='mso-spacerun:yes'>        </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>+--------------+ </span><span
style='color:#555555'>2 rows in set (0.00 sec)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>这与使用时在这种情况下看到的行为相同：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>JSON_EXTRACT()</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59' lang=zh-CN>mysql&gt;</span><span
style='color:#0077AA' lang=zh-CN>SELECT</span><span style='color:#0077AA'
lang=en-US> </span><span style='color:#DD4A68' lang=zh-CN>JSON_EXTRACT</span><span
style='color:#909090' lang=zh-CN>(</span><span style='color:black' lang=zh-CN>a</span><span
style='color:#909090' lang=zh-CN>,</span><span style='color:#669900'
lang=zh-CN>&quot;$[4][1]&quot;</span><span style='color:#909090' lang=zh-CN>)</span><span
style='color:#909090' lang=en-US> </span><span style='color:#0077AA'
lang=zh-CN>FROM</span><span style='color:#0077AA' lang=en-US> </span><span
style='color:black' lang=zh-CN>tj10</span><span style='color:#909090'
lang=zh-CN>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_EXTRACT(a,
&quot;$[4][1]&quot;) </span><span style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>NULL<span
style='mso-spacerun:yes'>            </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>                 </span></span><span
style='color:#555555' lang=zh-CN><span
style='mso-spacerun:yes'>          </span></span><span style='color:#909090'
lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>44<span
style='mso-spacerun:yes'>                         </span></span><span
style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                   </span></span><span
style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>2 rows in set (0.00 sec)</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold'>column-&gt;&gt;path</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>这是一个改进的、不引用的提取运算符。而</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> -&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>运算符只是提取一个值，而</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> -&gt;&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>运算符还取消引用提取的结果</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>以下三个表达式返回相同的值：</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;margin-left:.375in;
     margin-bottom:11pt;color:black'><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:black'>JSON_UNQUOTE(</span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:#555555'>&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>JSON_EXTRACT(column,</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>path) )</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;margin-left:.375in;
     margin-bottom:11pt;color:black'><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:black'>JSON_UNQUOTE(column</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:#555555'>&nbsp;</span><a
     href="https://dev.mysql.com/doc/refman/8.0/en/json-search-functions.html#operator_json-column-path"><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>-&gt;</span></a><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:#555555'>&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>path)</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;margin-left:.375in;
     margin-bottom:11pt;color:black'><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>column-&gt;&gt;path</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>运算符可以在任何允许的地方使用。这包括（但不限于）列表、子句和子句。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>
     -&gt;&gt;JSON_UNQUOTE(JSON_EXTRACT())SELECTWHEREHAVINGORDER BYGROUP BY</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>接下来的几条语句演示了与</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> mysql </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>客户端中其他表达式的一些运算符等价：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>-&gt;&gt;</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#A67F59'>* </span><span style='color:#0077AA'>FROM</span>
jemp <span style='color:#0077AA'>WHERE</span> g <span style='color:#A67F59'>&gt;
</span><span style='color:#990055'>2</span><span style='color:#909090'>; </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+--------------------------------+------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>c<span
style='mso-spacerun:yes'>                      </span></span><span
style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>            </span></span><span style='color:#555555'
lang=zh-CN><span style='mso-spacerun:yes'>     </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>g </span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+--------------------------------+------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>{&quot;id&quot;:
&quot;3&quot;, &quot;name&quot;: &quot;Barney&quot;} </span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>3 </span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN>{&quot;id&quot;: &quot;4&quot;,
&quot;name&quot;: &quot;Betty&quot;}<span style='mso-spacerun:yes'>  </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>4</span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+--------------------------------+------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>2 rows in set (0.01 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT</span>
c<span style='color:#A67F59'>-&gt;</span><span style='color:#669900'>'$.name' </span><span
style='color:#0077AA'>AS name </span><span style='color:#A67F59'><span
style='mso-spacerun:yes'>    </span></span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59' lang=zh-CN>-&gt;</span><span
style='color:#A67F59' lang=en-US><span style='mso-spacerun:yes'>         
</span></span><span lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#0077AA' lang=zh-CN>FROM</span><span lang=zh-CN> jemp </span><span
style='color:#0077AA' lang=zh-CN>WHERE</span><span lang=zh-CN> g </span><span
style='color:#A67F59' lang=zh-CN>&gt; </span><span style='color:#990055'
lang=zh-CN>2</span><span style='color:#909090' lang=zh-CN>; </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN>name<span style='mso-spacerun:yes'>    </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>|</span><span style='color:#555555'>&quot;Barney&quot;
</span><span style='color:#909090'>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN>&quot;Betty&quot;<span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>2 rows in set (0.00 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_UNQUOTE</span><span style='color:#909090'>(</span>c<span
style='color:#A67F59'>-&gt;</span><span style='color:#669900'>'$.name'</span><span
style='color:#909090'>) </span><span style='color:#0077AA'>AS name </span><span
style='color:#A67F59'><span style='mso-spacerun:yes'>    </span></span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59' lang=zh-CN>-&gt; </span><span lang=en-US><span
style='mso-spacerun:yes'>       </span></span><span style='color:#0077AA'
lang=zh-CN>FROM</span><span lang=zh-CN> jemp </span><span style='color:#0077AA'
lang=zh-CN>WHERE</span><span lang=zh-CN> g </span><span style='color:#A67F59'
lang=zh-CN>&gt; </span><span style='color:#990055' lang=zh-CN>2</span><span
style='color:#909090' lang=zh-CN>; </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+--------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>|</span><span style='color:#555555'>name<span
style='mso-spacerun:yes'>   </span></span><span style='color:#909090'>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+--------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>|</span><span style='color:#555555'>Barney </span><span
style='color:#909090'>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN>Betty<span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+--------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>2 rows in set (0.00 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT</span>
c<span style='color:#A67F59'>-&gt;&gt;</span><span style='color:#669900'>'$.name'
</span><span style='color:#0077AA'>AS name </span><span style='color:#A67F59'><span
style='mso-spacerun:yes'>    </span></span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59' lang=zh-CN>-&gt; </span><span lang=en-US><span
style='mso-spacerun:yes'>       </span></span><span style='color:#0077AA'
lang=zh-CN>FROM</span><span lang=zh-CN> jemp </span><span style='color:#0077AA'
lang=zh-CN>WHERE</span><span lang=zh-CN> g </span><span style='color:#A67F59'
lang=zh-CN>&gt; </span><span style='color:#990055' lang=zh-CN>2</span><span
style='color:#909090' lang=zh-CN>; </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+--------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN>name<span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+--------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>|</span><span style='color:#555555'>Barney </span><span
style='color:#909090'>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN>Betty<span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+--------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>2 rows in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>此运算符也可以与</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数组一起使用，如下所示：</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>CREATE
TABLE</span> tj10 <span style='color:#909090'>(</span>a <span style='color:
#834689'>JSON</span><span style='color:#909090'>,</span> b <span
style='color:#834689'>INT</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>Query OK, 0 rows affected (0.26 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>INSERT
INTO</span> tj10 <span style='color:#0077AA'>VALUES </span><span
style='color:#A67F59'><span style='mso-spacerun:yes'>    </span></span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>-&gt; </span><span style='color:#909090'>(</span><span
style='color:#669900'>'[3,10,5,&quot;x&quot;,44]'</span><span style='color:
#909090'>, </span><span style='color:#990055'>33</span><span style='color:#909090'>),
</span><span style='color:#A67F59'><span style='mso-spacerun:yes'>    </span></span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>-&gt; </span><span style='color:#909090'>(</span><span
style='color:#669900'>'[3,10,5,17,[22,&quot;y&quot;,66]]'</span><span
style='color:#909090'>, </span><span style='color:#990055'>0</span><span
style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>Query OK, 2 rows affected (0.04 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>Records: 2<span style='mso-spacerun:yes'> 
</span>Duplicates: 0<span style='mso-spacerun:yes'>  </span>Warnings: 0 </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT</span>
a<span style='color:#A67F59'>-&gt;</span><span style='color:#669900'>&quot;$[3]&quot;</span><span
style='color:#909090'>,</span> a<span style='color:#A67F59'>-&gt;</span><span
style='color:#669900'>&quot;$[4][1]&quot; </span><span style='color:#0077AA'>FROM</span>
tj10<span style='color:#909090'>; </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------+---------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>a</span><span
style='color:#909090' lang=zh-CN>-</span><span style='color:#555555'
lang=zh-CN>&gt;&quot;$[3]&quot; </span><span style='color:#909090' lang=zh-CN>|</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>a</span><span style='color:#909090' lang=zh-CN>-</span><span
style='color:#555555' lang=zh-CN>&gt;&quot;$[4][1]&quot;</span><span
style='color:#555555' lang=en-US> </span><span style='color:#909090'
lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------+---------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>&quot;x&quot;<span
style='mso-spacerun:yes'>      </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>NULL<span
style='mso-spacerun:yes'>  </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>       </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>17<span
style='mso-spacerun:yes'>        </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>&quot;y&quot;<span
style='mso-spacerun:yes'>          </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>      </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------+---------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>2 rows in set (0.00 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT</span>
a<span style='color:#A67F59'>-&gt;&gt;</span><span style='color:#669900'>&quot;$[3]&quot;</span><span
style='color:#909090'>,</span> a<span style='color:#A67F59'>-&gt;&gt;</span><span
style='color:#669900'>&quot;$[4][1]&quot; </span><span style='color:#0077AA'>FROM</span>
tj10<span style='color:#909090'>; </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------+----------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>a</span><span
style='color:#909090' lang=zh-CN>-</span><span style='color:#555555'
lang=zh-CN>&gt;&gt;&quot;$[3]&quot; </span><span style='color:#909090'
lang=zh-CN>|</span><span style='color:#909090' lang=en-US> </span><span
style='color:#555555' lang=zh-CN>a</span><span style='color:#909090'
lang=zh-CN>-</span><span style='color:#555555' lang=zh-CN>&gt;&gt;&quot;$[4][1]&quot;
</span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'> </span></span><span style='color:#909090' lang=zh-CN>|
</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------+----------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>x<span
style='mso-spacerun:yes'>         </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>NULL<span
style='mso-spacerun:yes'>   </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>       </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>17<span
style='mso-spacerun:yes'>         </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>y<span
style='mso-spacerun:yes'>            </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>       </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------+----------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>2 rows in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#6DA845'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>与</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> -&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>一样，运算符始终在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> EXPLAIN </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的输出中展开，如下例所示：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> -&gt;&gt;</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>EXPLAIN
SELECT</span> c<span style='color:#A67F59'>-&gt;&gt;</span><span
style='color:#669900'>'$.name' </span><span style='color:#0077AA'>AS name </span><span
style='color:#A67F59'><span style='mso-spacerun:yes'>   </span></span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59' lang=zh-CN><span
style='mso-spacerun:yes'> </span>-&gt; </span><span lang=en-US><span
style='mso-spacerun:yes'>      </span></span><span style='color:#0077AA'
lang=zh-CN>FROM</span><span lang=zh-CN> jemp </span><span style='color:#0077AA'
lang=zh-CN>WHERE</span><span lang=zh-CN> g </span><span style='color:#A67F59'
lang=zh-CN>&gt; </span><span style='color:#990055' lang=zh-CN>2</span><span
lang=zh-CN>\G </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>***************************</span><span
style='color:#555555'>1. row </span><span style='color:#909090'>***************************</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                       </span></span><span
style='color:#555555' lang=zh-CN>id</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>1<br>
<span style='mso-spacerun:yes'>  </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>      </span></span><span
style='color:#555555' lang=zh-CN>select_type</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>SIMPLE<br>
<span style='mso-spacerun:yes'>        </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>          </span></span><span
style='color:#555555' lang=zh-CN>table</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>jemp<br>
<span style='mso-spacerun:yes'>   </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>        </span></span><span
style='color:#555555' lang=zh-CN>partitions</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>NULL<br>
<span style='mso-spacerun:yes'>      </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>          </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>   </span>type</span><span
style='color:#555555' lang=en-US> </span><span style='color:#909090'
lang=zh-CN>:</span><span style='color:#909090' lang=en-US> </span><span
style='color:#555555' lang=zh-CN>range<br>
</span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>    </span></span><span style='color:#555555'
lang=zh-CN>possible_keys</span><span style='color:#555555' lang=en-US> </span><span
style='color:#909090' lang=zh-CN>:</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>i<br>
<span style='mso-spacerun:yes'>   </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>           </span></span><span
style='color:#555555' lang=zh-CN><span
style='mso-spacerun:yes'>      </span>key</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>i<br>
<span style='mso-spacerun:yes'>     </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>       </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span>key_len</span><span
style='color:#555555' lang=en-US> </span><span style='color:#909090'
lang=zh-CN>:</span><span style='color:#909090' lang=en-US> </span><span
style='color:#555555' lang=zh-CN>5<br>
<span style='mso-spacerun:yes'>          </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>          </span></span><span
style='color:#555555' lang=zh-CN>ref</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>NULL<br>
<span style='mso-spacerun:yes'>         </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>         </span></span><span
style='color:#555555' lang=zh-CN>rows</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>2<br>
<span style='mso-spacerun:yes'>    </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>        </span></span><span
style='color:#555555' lang=zh-CN><span
style='mso-spacerun:yes'> </span>filtered</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>100.00<br>
<span style='mso-spacerun:yes'>        </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>        </span></span><span
style='color:#555555' lang=zh-CN>Extra</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>Using where</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>1 row in set, 1 warning (0.00 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#555555'>mysql&gt; </span><span style='color:#0077AA'>SHOW
WARNINGS</span>\G </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>***************************</span><span
style='color:#555555'>1. row </span><span style='color:#909090'>***************************</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                 </span></span><span style='color:
#555555' lang=zh-CN>Level</span><span style='color:#555555' lang=en-US> </span><span
style='color:#909090' lang=zh-CN>:</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>Note<br>
<span style='mso-spacerun:yes'>   </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>              </span></span><span
style='color:#555555' lang=zh-CN>Code</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>1003<br>
</span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>           </span></span><span style='color:#555555'
lang=zh-CN>Message</span><span style='color:#555555' lang=en-US> </span><span
style='color:#909090' lang=zh-CN>:</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>/</span><span
style='color:#909090' lang=zh-CN>*</span><span style='color:#555555'
lang=zh-CN>select#1 </span><span style='color:#909090' lang=zh-CN>*</span><span
style='color:#555555' lang=zh-CN>/
select<br>
json_unquote(json_extract(`jtest`.`jemp`.`c`,'$.name')) AS `name` from</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>`jtest`.`jemp` where (`jtest`.`jemp`.`g` &gt; 2)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>1 row in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:SimSun;font-size:12.0pt'>这类似于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:SimSun;font-size:12.0pt'>在相同情况下扩展</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> -&gt; </span><span
     style='font-family:SimSun;font-size:12.0pt'>运算符的方式。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold'>JSON_KEYS(json_doc[, path])</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>将</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对象的顶级值中的键作为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数组返回，或者，如果给出了路径参数，则返回所选路径中的顶级键。如果任何参数是
     ，则返回</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'>
     json_doc </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt'>参数不是对象，或者路径（如果给定）未找到对象。如果</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> json_doc </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>参数不是有效的</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> JSON </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>文档或</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> path </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>参数不是有效的路径表达式或包含或通配符，则会发生错误。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>NULLNULL***</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果所选对象为空，则结果数组为空。如果顶级值具有嵌套的子对象，则返回值不包括来自这些子对象的键。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_KEYS</span><span style='color:#909090'>(</span><span
style='color:#669900'>'{&quot;a&quot;: 1, &quot;b&quot;: {&quot;c&quot;: 30}}'</span><span
style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_KEYS('{&quot;a&quot;:
1, &quot;b&quot;: {&quot;c&quot;: 30}}') </span><span style='color:#909090'
lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>[&quot;a&quot;,
&quot;b&quot;]<span style='mso-spacerun:yes'>                        </span></span><span
style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                 </span></span><span style='color:
#555555' lang=zh-CN><span style='mso-spacerun:yes'>    </span></span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_KEYS</span><span style='color:#909090'>(</span><span
style='color:#669900'>'{&quot;a&quot;: 1, &quot;b&quot;: {&quot;c&quot;: 30}}'</span><span
style='color:#909090'>, </span><span style='color:#669900'>'$.b'</span><span
style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+--------------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_KEYS('{&quot;a&quot;:
1, &quot;b&quot;: {&quot;c&quot;: 30}}', '$.b') </span><span style='color:#909090'
lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>[&quot;c&quot;]<span
style='mso-spacerun:yes'>                            </span></span><span
style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                     </span></span><span
style='color:#555555' lang=zh-CN><span
style='mso-spacerun:yes'>            </span></span><span style='color:#909090'
lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold'>JSON_OVERLAPS(json_doc1, json_doc2)</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>比较两个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>文档。如果两个文档有任何共同的键值对或数组元素，则返回</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> true (1)</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。如果两个参数都是标量，则函数执行简单的相等测试。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>此函数作为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>
     JSON_CONTAINS() </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>的对应函数，它要求搜索到的数组的所有元素都存在于搜索到的数组中。因此，对搜索键执行操作，同时执行操作。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>
     JSON_CONTAINS()</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>或</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>ANDJSON_OVERLAPS()</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在子句中使用的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> InnoDB </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>列的查询可以使用多值索引进行优化。多值索引，提供详细信息和示例。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON_OVERLAPS()WHERE</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>比较两个数组时，如果它们共享一个或多个数组元素，则返回</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> true</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，否则返回</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> false</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>JSON_OVERLAPS()</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_OVERLAPS</span><span style='color:#909090'>(</span><span
style='color:#669900'>&quot;[1,3,5,7]&quot;</span><span style='color:#909090'>,
</span><span style='color:#669900'>&quot;[2,5,7]&quot;</span><span
style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_OVERLAPS(&quot;[1,3,5,7]&quot;,
&quot;[2,5,7]&quot;) </span><span style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                             
</span></span><span style='color:#555555' lang=zh-CN>1 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>1 row in set (0.00 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_OVERLAPS</span><span style='color:#909090'>(</span><span
style='color:#669900'>&quot;[1,3,5,7]&quot;</span><span style='color:#909090'>,
</span><span style='color:#669900'>&quot;[2,6,7]&quot;</span><span
style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_OVERLAPS(&quot;[1,3,5,7]&quot;,
&quot;[2,6,7]&quot;) </span><span style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                             
</span></span><span style='color:#555555' lang=zh-CN>1 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>1 row in set (0.00 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_OVERLAPS</span><span style='color:#909090'>(</span><span
style='color:#669900'>&quot;[1,3,5,7]&quot;</span><span style='color:#909090'>,
</span><span style='color:#669900'>&quot;[2,6,8]&quot;</span><span
style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_OVERLAPS(&quot;[1,3,5,7]&quot;,
&quot;[2,6,8]&quot;) </span><span style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                             
</span></span><span style='color:#555555' lang=zh-CN>0 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>1 row in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>部分匹配被视为不匹配，如下所示：</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_OVERLAPS</span><span style='color:#909090'>(</span><span
style='color:#669900'>'[[1,2],[3,4],5]'</span><span style='color:#909090'>, </span><span
style='color:#669900'>'[1,[2,3],[4,5]]'</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_OVERLAPS('[[1,2],[3,4],5]',
'[1,[2,3],[4,5]]') </span><span style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                                               
</span></span><span style='color:#555555' lang=zh-CN>0 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>1 row in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#6DA845'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>比较对象时，如果它们至少有一个共同的键值对，则结果为真。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_OVERLAPS</span><span style='color:#909090'>(</span><span
style='color:#669900'>'{&quot;a&quot;:1,&quot;b&quot;:10,&quot;d&quot;:10}'</span><span
style='color:#909090'>, </span><span style='color:#669900'>'{&quot;c&quot;:1,&quot;e&quot;:10,&quot;f&quot;:1,&quot;d&quot;:10}'</span><span
style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_OVERLAPS('{&quot;a&quot;:1,&quot;b&quot;:10,&quot;d&quot;:10}',
'{&quot;c&quot;:1,&quot;e&quot;:10,&quot;f&quot;:1,&quot;d&quot;:10}') </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                                                                         
</span></span><span style='color:#555555' lang=zh-CN>1 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>1 row in set (0.00 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_OVERLAPS</span><span style='color:#909090'>(</span><span
style='color:#669900'>'{&quot;a&quot;:1,&quot;b&quot;:10,&quot;d&quot;:10}'</span><span
style='color:#909090'>, </span><span style='color:#669900'>'{&quot;a&quot;:5,&quot;e&quot;:10,&quot;f&quot;:1,&quot;d&quot;:20}'</span><span
style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_OVERLAPS('{&quot;a&quot;:1,&quot;b&quot;:10,&quot;d&quot;:10}',
'{&quot;a&quot;:5,&quot;e&quot;:10,&quot;f&quot;:1,&quot;d&quot;:20}') </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                                                                          
</span></span><span style='color:#555555' lang=zh-CN>0 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>1 row in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#6DA845'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果将两个标量用作函数的参数，则执行简单的相等测试：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON_OVERLAPS()</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_OVERLAPS</span><span style='color:#909090'>(</span><span
style='color:#669900'>'5'</span><span style='color:#909090'>, </span><span
style='color:#669900'>'5'</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>|</span><span style='color:#555555'>JSON_OVERLAPS('5',
'5') </span><span style='color:#909090'>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                         </span></span><span
style='color:#555555' lang=zh-CN>1 </span><span style='color:#909090'
lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>1 row in set (0.00 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_OVERLAPS</span><span style='color:#909090'>(</span><span
style='color:#669900'>'5'</span><span style='color:#909090'>, </span><span
style='color:#669900'>'6'</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+--------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'><span lang=zh-CN>|</span><span lang=en-US> </span><span
lang=zh-CN>JSON_OVERLAPS('5', '6') | </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+--------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'><span lang=zh-CN>|</span><span lang=en-US><span
style='mso-spacerun:yes'>                                          </span></span><span
lang=zh-CN>0 | </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'><span lang=zh-CN>+-----------</span><span lang=en-US> </span><span
lang=zh-CN>---------------------+ </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>1 row in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>将标量与数组进行比较时，尝试将标量视为数组元素。在此示例中，第二个参数被解释为
     ，如下所示：</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'>
     JSON_OVERLAPS()6[6]</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_OVERLAPS</span><span style='color:#909090'>(</span><span
style='color:#669900'>'[4,5,6,7]'</span><span style='color:#909090'>, </span><span
style='color:#669900'>'6'</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_OVERLAPS('[4,5,6,7]',
'6') </span><span style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'><span
style='mso-spacerun:yes'> </span>+---------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                    
</span></span><span style='color:#555555' lang=zh-CN>1 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#555555'>1 row in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>该函数不执行类型转换：</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_OVERLAPS</span><span style='color:#909090'>(</span><span
style='color:#669900'>'[4,5,&quot;6&quot;,7]'</span><span style='color:#909090'>,
</span><span style='color:#669900'>'6'</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_OVERLAPS('[4,5,&quot;6&quot;,7]',
'6') </span><span style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                       
</span></span><span style='color:#555555' lang=zh-CN>0 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>1 row in set (0.00 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_OVERLAPS</span><span style='color:#909090'>(</span><span
style='color:#669900'>'[4,5,6,7]'</span><span style='color:#909090'>, </span><span
style='color:#669900'>'&quot;6&quot;'</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_OVERLAPS('[4,5,6,7]',
'&quot;6&quot;') </span><span style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                       
</span></span><span style='color:#555555' lang=zh-CN>0 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>1 row in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>JSON_OVERLAPS() was
     added in MySQL 8.0.17.</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#6DA845'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold'>JSON_SEARCH(json_doc, one_or_all, search_str[,
escape_char[, path] ...])</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>返回</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>文档中给定字符串的路径。如果</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> json_doc</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>search_str </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>或路径参数中的任何一个是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> ; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>则返回文档中不存在路径；或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> search_str </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>未找到。如果</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> json_doc </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>参数不是有效的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>文档、任何路径参数不是有效的路径表达式、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> one_or_all </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>不是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> or </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> escape_char </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>不是常量表达式，则会发生错误。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> NULL NULL'</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>一个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>''</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>全部</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>'</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>one_or_all </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>参数对搜索的影响如下：</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-left:.375in;margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>'one'</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>：搜索在第一次匹配后终止并返回一个路径字符串。首先考虑哪个匹配是未定义的。</span></li>
 <li style='margin-left:.375in;margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>'all'</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>：搜索返回所有匹配的路径字符串，这样不包括重复的路径。如果有多个字符串，它们会自动包装为一个数组。数组元素的顺序未定义。</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> search_str </span><spaone_or_all
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>搜索字符串参数中，</spaone_or_all><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>and </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>字符与</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> LIKE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>运算符一样工作：匹配任意数量的字符（包括零个字符），并且只匹配一个字符。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> %_%_</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>要在搜索字符串中指定文字或字符，请在其前面加上转义字符。默认值为缺少</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> escape_char </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>参数或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> .</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>否则，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>escape_char </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>必须是一个为空或一个字符的常量。
     ％</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'>_\</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>空值</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对于转义字符处理，与</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> LIKE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>行为的不同之处在于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON_SEARCH() </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的转义字符必须在编译时计算为常量，而不仅仅是在执行时。例如，如果在准备好的语句中使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON_SEARCH() </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>并且使用参数提供了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> escape_char </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>参数，则参数值在执行时可能是常量，但在编译时不是。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>search_str </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> path </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>总是以</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> utf8mb4 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>字符串的形式插入，无论它们的实际编码如何。这是一个已知问题，已在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL 8.0.24 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中修复（错误</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> #32449181</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>）。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold'>JSON_VALUE(json_doc, path)</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>从指定文档中给定路径的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>文档中提取值，并返回提取的值，可选择将其转换为所需的类型。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#DD4A68'>JSON_VALUE</span><span style='color:#909090'>(</span><span
style='font-style:italic;color:black'>json_doc</span><span style='color:#909090'>,
</span><span style='font-style:italic;color:black'>path </span><span
style='color:#909090'>[</span>RETURNING <span style='font-style:italic'>type</span>]
[<span style='font-style:italic'>on_empty</span>] [<span style='font-style:
italic'>on_error</span>]) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>on_empty<span style='color:#909090'>: </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>{NULL <span style='color:#A67F59'>|</span> ERROR <span
style='color:#A67F59'>|</span> DEFAULT value} ON EMPTY </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>on_error<span style='color:#909090'>: </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>{NULL <span style='color:#A67F59'>|</span> ERROR <span
style='color:#A67F59'>|</span> DEFAULT value} ON ERROR</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.0666in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.4145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.0666in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>json_doc</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.4145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>一个有效的</span><span
  style='font-family:"Comic Sans MS"'> JSON </span><span style='font-family:
  "Microsoft YaHei UI"'>文档。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.0666in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>path</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.4145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指向文档中某个位置的</span><span
  style='font-family:"Comic Sans MS"'> JSON </span><span style='font-family:
  "Microsoft YaHei UI"'>路径。这必须是字符串文字值</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.0666in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.4145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>FLOAT</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>DOUBLE</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>DECIMAL</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>SIGNED</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>UNSIGNED</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>DATE</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>TIME</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>DATETIME</p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=zh-CN>YEAR (MySQL 8.0.22 and later)</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>不支持一位或两位数字的</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> YEAR </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>值。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>CHAR</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>JSON</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.0666in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>on_empty</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.4652in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果指定，则确定在给定路径上找不到数据时的行为；此子句采用以下值之一：</span><span
  style='font-family:"Comic Sans MS"'> JSON_VALUE()</span></p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>NULL ON EMPTY</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>：函数返回；这是默认行为。</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> NULLON </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>空</span></li>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>DEFAULT value ON
       EMPTY</span><span style='font-family:"Microsoft YaHei UI";font-size:
       11.5pt'>：返回提供的值。值的类型必须与返回类型匹配。</span></li>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>ERROR ON EMPTY</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>：函数抛出错误。</span></li>
  </ul>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果使用，</span><span
  style='font-family:"Comic Sans MS"'>on_error </span><span style='font-family:
  "Microsoft YaHei UI"'>会在发生错误时采用以下值之一以及相应的结果，如下所示：</span></p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>NULL ON ERROR</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>：返回；如果不使用子句，这是默认行为。</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> JSON_VALUE()NULLON
       </span><span style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>错误</span></li>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>DEFAULT value ON
       ERROR</span><span style='font-family:"Microsoft YaHei UI";font-size:
       11.5pt'>：这是返回的值；它的值必须与返回类型的值匹配。</span></li>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>ERROR ON ERROR</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>：抛出错误。</span></li>
  </ul>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果使用</span><span
  style='font-family:"Comic Sans MS"'> ON EMPTY</span><span style='font-family:
  "Microsoft YaHei UI"'>，则必须在任何子句之前。以错误的顺序指定它们会导致语法错误。开启错误</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>错误处理。一般来说，错误的处理方式如下：</span><span
  style='font-family:"Comic Sans MS"'> JSON_VALUE()</span></p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>检查所有</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> JSON </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>输入（文档和路径）的有效性。如果其中任何一个无效，则在不触发子句的情况下引发</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> SQL </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>错误。开启错误</span></li>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>只要发生以下任何事件，就会触发</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> ON ERROR</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>：</span></li>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>尝试提取对象或数组，例如从解析到</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> JSON </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>文档中多个位置的路径产生的对象或数组</span></li>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>转换错误，例如尝试转换为值</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> 'asdf'UNSIGNED</span></li>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>截断值</span></li>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>即使指定了 或
       ，转换错误总是会触发警告。</span><span style='font-family:"Comic Sans MS";font-size:
       11.5pt'> NULL ON ERRORDEFAULT ... ON ERROR</span></li>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>当源</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> JSON </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>文档</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> (expr) </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>在指定位置（路径）不包含数据时，将触发该子句。空</span></li>
  </ul>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>JSON_VALUE() </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>简化了在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>列上创建索引的过程，因为在许多情况下无需创建生成的列然后在生成的列上创建索引。您可以在创建具有</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>列的表时执行此操作，方法是在使用对该列进行操作的表达式上创建索引（使用与该列中的值匹配的路径），如下所示：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>t1JSON_VALUE()</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>CREATE TABLE</span> t1<span
style='color:#909090'>( </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>j <span style='color:#834689'>JSON</span><span style='color:#909090'>, </span><span
style='color:#0077AA'>INDEX</span> i1 <span style='color:#909090'>( (</span><span
style='color:#0077AA'>JSON_VALUE</span><span style='color:#909090'>(</span>j<span
style='color:#909090'>, </span><span style='color:#669900'>'$.id' </span><span
style='color:#0077AA'>RETURNING UNSIGNED</span><span style='color:#909090'>)) )
</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>以下</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> EXPLAIN </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>输出显示针对在子句中使用索引表达式的查询使用了由此创建的索引：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>t1WHERE</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>EXPLAIN
SELECT </span><span style='color:#A67F59'>* </span><span style='color:#0077AA'>FROM</span>
t1 <span style='color:#A67F59'><span style='mso-spacerun:yes'>    </span></span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>-&gt; </span><span style='color:#0077AA'>WHERE
JSON_VALUE</span><span style='color:#909090'>(</span>j<span style='color:#909090'>,
</span><span style='color:#669900'>'$.id' </span><span style='color:#0077AA'>RETURNING
UNSIGNED</span><span style='color:#909090'>) </span><span style='color:#A67F59'>=
</span><span style='color:#990055'>123</span>\G </p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>***************************</span><span
style='color:#555555'>1. row </span><span style='color:#909090'>***************************</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                       </span></span><span
style='color:#555555' lang=zh-CN>id</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>1<br>
</span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>     </span></span><span style='color:#555555'
lang=zh-CN><span style='mso-spacerun:yes'>  </span>select_type</span><span
style='color:#555555' lang=en-US> </span><span style='color:#909090'
lang=zh-CN>:</span><span style='color:#909090' lang=en-US> </span><span
style='color:#555555' lang=zh-CN>SIMPLE<br>
<span style='mso-spacerun:yes'>    </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>     </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>  </span>table</span><span
style='color:#555555' lang=en-US> </span><span style='color:#909090'
lang=zh-CN>:</span><span style='color:#909090' lang=en-US> </span><span
style='color:#555555' lang=zh-CN>t1<br>
<span style='mso-spacerun:yes'>   </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>       </span></span><span
style='color:#555555' lang=zh-CN>partitions</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>NULL<br>
<span style='mso-spacerun:yes'>       </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>         </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>  </span>type</span><span
style='color:#555555' lang=en-US> </span><span style='color:#909090'
lang=zh-CN>:</span><span style='color:#909090' lang=en-US> </span><span
style='color:#555555' lang=zh-CN>ref<br>
</span><span style='color:#555555' lang=en-US><span style='mso-spacerun:yes'>  
</span></span><span style='color:#555555' lang=zh-CN>possible_keys</span><span
style='color:#555555' lang=en-US> </span><span style='color:#909090'
lang=zh-CN>:</span><span style='color:#909090' lang=en-US> </span><span
style='color:#555555' lang=zh-CN>i1<br>
<span style='mso-spacerun:yes'>        </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>         </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>  </span>key</span><span
style='color:#555555' lang=en-US> </span><span style='color:#909090'
lang=zh-CN>:</span><span style='color:#909090' lang=en-US> </span><span
style='color:#555555' lang=zh-CN>i1<br>
<span style='mso-spacerun:yes'>      </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>       </span></span><span
style='color:#555555' lang=zh-CN>key_len</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>9<br>
<span style='mso-spacerun:yes'>     </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>          </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>     </span>ref</span><span
style='color:#555555' lang=en-US> </span><span style='color:#909090'
lang=zh-CN>:</span><span style='color:#909090' lang=en-US> </span><span
style='color:#555555' lang=zh-CN>const<br>
<span style='mso-spacerun:yes'>        </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>         </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span>rows</span><span
style='color:#555555' lang=en-US> </span><span style='color:#909090'
lang=zh-CN>:</span><span style='color:#909090' lang=en-US> </span><span
style='color:#555555' lang=zh-CN>1<br>
<span style='mso-spacerun:yes'>    </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>        </span></span><span
style='color:#555555' lang=zh-CN><span
style='mso-spacerun:yes'> </span>filtered</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>100.00<br>
<span style='mso-spacerun:yes'>       </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>        </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span>Extra</span><span
style='color:#555555' lang=en-US> </span><span style='color:#909090'
lang=zh-CN>:</span><span style='color:#909090' lang=en-US> </span><span
style='color:#555555' lang=zh-CN>NULL</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>这与在生成的列上创建具有索引的表的效果大致相同</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>CREATE TABLE</span> t2 <span
style='color:#909090'>( </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>j <span style='color:#834689'>JSON</span><span style='color:#909090'>, </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>g <span style='color:#834689'>INT </span><span style='color:#0077AA'>GENERATED
ALWAYS AS </span><span style='color:#909090'>(</span>j<span style='color:#A67F59'>-&gt;</span><span
style='color:#669900'>&quot;$.id&quot;</span><span style='color:#909090'>), </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>INDEX</span> i1 <span style='color:#909090'>(</span>j<span
style='color:#909090'>) </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>针对该表的查询的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> EXPLAIN </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>输出（引用生成的列）显示该索引的使用方式与上一个针对表的查询相同：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>t1</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>EXPLAIN
SELECT </span><span style='color:#A67F59'>* </span><span style='color:#0077AA'>FROM</span>
t2 <span style='color:#0077AA'>WHERE</span> g <span style='color:#A67F59'>= </span><span
style='color:#990055'>123</span>\G </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>***************************</span><span
style='color:#555555'>1. row </span><span style='color:#909090'>***************************</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                        </span></span><span
style='color:#555555' lang=zh-CN>id</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>1<br>
<span style='mso-spacerun:yes'>  </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>      </span></span><span
style='color:#555555' lang=zh-CN>select_type</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>SIMPLE<br>
<span style='mso-spacerun:yes'>     </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>          </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>   </span>table</span><span
style='color:#555555' lang=en-US> </span><span style='color:#909090'
lang=zh-CN>:</span><span style='color:#909090' lang=en-US> </span><span
style='color:#555555' lang=zh-CN>t2<br>
<span style='mso-spacerun:yes'>   </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>        </span></span><span
style='color:#555555' lang=zh-CN>partitions</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>NULL<br>
<span style='mso-spacerun:yes'>        </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>          </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span>type</span><span
style='color:#555555' lang=en-US> </span><span style='color:#909090'
lang=zh-CN>:</span><span style='color:#909090' lang=en-US> </span><span
style='color:#555555' lang=zh-CN>ref<br>
</span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>    </span></span><span style='color:#555555'
lang=zh-CN>possible_keys</span><span style='color:#555555' lang=en-US> </span><span
style='color:#909090' lang=zh-CN>:</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>i1<br>
<span style='mso-spacerun:yes'>       </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>          </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'>   </span>key</span><span
style='color:#555555' lang=en-US> </span><span style='color:#909090'
lang=zh-CN>:</span><span style='color:#909090' lang=en-US> </span><span
style='color:#555555' lang=zh-CN>i1<br>
<span style='mso-spacerun:yes'>    </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>       </span></span><span
style='color:#555555' lang=zh-CN><span
style='mso-spacerun:yes'>  </span>key_len</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>5<br>
<span style='mso-spacerun:yes'>          </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>          </span></span><span
style='color:#555555' lang=zh-CN>ref</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>const<br>
<span style='mso-spacerun:yes'>         </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>         </span></span><span
style='color:#555555' lang=zh-CN>rows</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>1<br>
<span style='mso-spacerun:yes'>   </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>        </span></span><span
style='color:#555555' lang=zh-CN><span
style='mso-spacerun:yes'>  </span>filtered</span><span style='color:#555555'
lang=en-US> </span><span style='color:#909090' lang=zh-CN>:</span><span
style='color:#909090' lang=en-US> </span><span style='color:#555555'
lang=zh-CN>100.00<br>
<span style='mso-spacerun:yes'>       </span></span><span style='color:#555555'
lang=en-US><span style='mso-spacerun:yes'>        </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span>Extra</span><span
style='color:#555555' lang=en-US> </span><span style='color:#909090'
lang=zh-CN>:</span><span style='color:#909090' lang=en-US> </span><span
style='color:#555555' lang=zh-CN>NULL</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>JSON_VALUE() </span><span style='font-family:
"Microsoft YaHei UI"'>在</span><span style='font-family:"Comic Sans MS"'> MySQL
8.0.21 </span><span style='font-family:"Microsoft YaHei UI"'>中引入。</span></p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold'>value MEMBER OF(json_array)</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> value </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> json_array </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的元素，则返回</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> true (1)</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，否则返回</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> false (0)</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> value </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>必须是标量或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>文档</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果它是标量，则运算符会尝试将其视为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数组的元素。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在子句中使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> InnoDB </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>列的查询可以使用多值索引进行优化</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>简单的标量被视为数组值，如下所示：</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#990055'>17 </span><span style='color:#DD4A68'>MEMBER
OF</span><span style='color:#909090'>(</span><span style='color:#669900'>'[23,
&quot;abc&quot;, 17, &quot;ab&quot;, 10]'</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>17 MEMBER OF('[23,
&quot;abc&quot;, 17, &quot;ab&quot;, 10]') </span><span style='color:#909090'
lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                                
</span></span><span style='color:#555555' lang=zh-CN>1 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#555555'>1 row in set (0.00 sec) </span><span
style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT </span><span
style='color:#669900'>'ab' </span><span style='color:#DD4A68'>MEMBER OF</span><span
style='color:#909090'>(</span><span style='color:#669900'>'[23,
&quot;abc&quot;, 17, &quot;ab&quot;, 10]'</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+--------------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>'ab' MEMBER OF('[23,
&quot;abc&quot;, 17, &quot;ab&quot;, 10]') </span><span style='color:#909090'
lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+--------------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                                   
</span></span><span style='color:#555555' lang=zh-CN>1 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+--------------------------------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>1 row in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数组元素值的部分匹配不匹配：</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59' lang=zh-CN>mysql&gt;</span><span
style='color:#0077AA' lang=zh-CN>SELECT</span><span style='color:#0077AA'
lang=en-US> </span><span style='color:#990055' lang=zh-CN>7</span><span
style='color:#990055' lang=en-US> </span><span style='color:#DD4A68'
lang=zh-CN>MEMBER OF</span><span style='color:#909090' lang=zh-CN>(</span><span
style='color:#669900' lang=zh-CN>'[23, &quot;abc&quot;, 17, &quot;ab&quot;,
10]'</span><span style='color:#909090' lang=zh-CN>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>7 MEMBER OF('[23,
&quot;abc&quot;, 17, &quot;ab&quot;, 10]') </span><span style='color:#909090'
lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                              
</span></span><span style='color:#555555' lang=zh-CN>0 </span><span
style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>1 row in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt;</span><span style='color:#0077AA'>SELECT</span><span
style='color:#669900'>'a'</span><span style='color:#DD4A68'>MEMBER OF</span><span
style='color:#909090'>(</span><span style='color:#669900'>'[23,
&quot;abc&quot;, 17, &quot;ab&quot;, 10]'</span><span style='color:#909090'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>'a' MEMBER OF('[23,
&quot;abc&quot;, 17, &quot;ab&quot;, 10]') </span><span style='color:#909090'
lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                                 
</span></span><span style='color:#555555' lang=zh-CN>0 </span><span
style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>1 row in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>不执行与字符串类型的转换：</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#A67F59'><span style='mso-spacerun:yes'>    </span></span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>-&gt; </span><span style='color:#990055'>17
</span><span style='color:#DD4A68'>MEMBER OF</span><span style='color:#909090'>(</span><span
style='color:#669900'>'[23, &quot;abc&quot;, &quot;17&quot;, &quot;ab&quot;,
10]'</span><span style='color:#909090'>), </span><span style='color:#A67F59'><span
style='mso-spacerun:yes'>    </span></span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>-&gt; </span><span style='color:#669900'>&quot;17&quot;
</span><span style='color:#DD4A68'>MEMBER OF</span><span style='color:#909090'>(</span><span
style='color:#669900'>'[23, &quot;abc&quot;, 17, &quot;ab&quot;, 10]'</span><span
style='color:#909090'>)</span>\G </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>***************************</span><span
style='color:#555555'>1. row </span><span style='color:#909090'>***************************</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#555555'>17 MEMBER OF('[23, &quot;abc&quot;,
&quot;17&quot;, &quot;ab&quot;, 10]')</span><span style='color:#909090'>:</span><span
style='color:#555555'>0</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#555555'>&quot;17&quot; MEMBER OF('[23,
&quot;abc&quot;, 17, &quot;ab&quot;, 10]')</span><span style='color:#909090'>:</span><span
style='color:#555555'>0</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>1 row in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>要将此运算符与本身为数组的值一起使用，有必要将其显式转换为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数组。您可以使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> CAST(... AS JSON) </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>执行此操作：</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>CAST</span><span style='color:#909090'>(</span><span
style='color:#669900'>'[4,5]' </span><span style='color:#0077AA'>AS </span><span
style='color:#834689'>JSON</span><span style='color:#909090'>) </span><span
style='color:#DD4A68'>MEMBER OF</span><span style='color:#909090'>(</span><span
style='color:#669900'>'[[3,4],[4,5]]'</span><span style='color:#909090'>);
+------------------------------------------------------------+ </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>|</span><span style='color:#555555'>CAST('[4,5]'
AS JSON) MEMBER OF('[[3,4],[4,5]]') </span><span style='color:#909090'>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                                                
</span></span><span style='color:#555555' lang=zh-CN>1 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>1 row in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>也可以使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON_ARRAY() </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>函数执行必要的转换，如下所示：</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_ARRAY</span><span style='color:#909090'>(</span><span
style='color:#990055'>4</span><span style='color:#909090'>,</span><span
style='color:#990055'>5</span><span style='color:#909090'>) </span><span
style='color:#DD4A68'>MEMBER OF</span><span style='color:#909090'>(</span><span
style='color:#669900'>'[[3,4],[4,5]]'</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>JSON_ARRAY(4,5)
MEMBER OF('[[3,4],[4,5]]')</span><span style='color:#909090' lang=en-US> </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US><span
style='mso-spacerun:yes'>                                                                          
</span></span><span style='color:#555555' lang=zh-CN>1 </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------------------------+
</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>1 row in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#6DA845'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>任何用作要测试的值或出现在目标数组中的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对象都必须使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON_OBJECT() </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>强制转换为正确的类型。此外，包含</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对象的目标数组本身必须使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> .</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>这在以下语句序列中得到了证明：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> CAST(... AS
     JSON)JSON_ARRAY</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SET
</span><span style='color:#D88B00'>@a </span><span style='color:#A67F59'>= </span><span
style='color:#DD4A68'>CAST</span><span style='color:#909090'>(</span><span
style='color:#669900'>'{&quot;a&quot;:1}' </span><span style='color:#0077AA'>AS
</span><span style='color:#834689'>JSON</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>Query OK, 0 rows affected (0.00 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SET
</span><span style='color:#D88B00'>@b </span><span style='color:#A67F59'>= </span><span
style='color:#DD4A68'>JSON_OBJECT</span><span style='color:#909090'>(</span><span
style='color:#669900'>&quot;b&quot;</span><span style='color:#909090'>, </span><span
style='color:#990055'>2</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>Query OK, 0 rows affected (0.00 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SET
</span><span style='color:#D88B00'>@c </span><span style='color:#A67F59'>= </span><span
style='color:#DD4A68'>JSON_ARRAY</span><span style='color:#909090'>(</span><span
style='color:#990055'>17</span><span style='color:#909090'>, </span><span
style='color:#D88B00'>@b</span><span style='color:#909090'>, </span><span
style='color:#669900'>&quot;abc&quot;</span><span style='color:#909090'>, </span><span
style='color:#D88B00'>@a</span><span style='color:#909090'>, </span><span
style='color:#990055'>23</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>Query OK, 0 rows affected (0.00 sec) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#D88B00'>@a </span><span style='color:#DD4A68'>MEMBER
OF</span><span style='color:#909090'>(</span><span style='color:#D88B00'>@c</span><span
style='color:#909090'>), </span><span style='color:#D88B00'>@b </span><span
style='color:#DD4A68'>MEMBER OF</span><span style='color:#909090'>(</span><span
style='color:#D88B00'>@c</span><span style='color:#909090'>); </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------+-------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>@a MEMBER OF(@c) </span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>@b MEMBER OF(@c) </span><span
style='color:#909090' lang=zh-CN>| </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------+-------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>1 </span><span
style='color:#909090' lang=en-US><span
style='mso-spacerun:yes'>                                </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#555555' lang=zh-CN>1 </span><span
style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                                </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#909090'
lang=en-US> </span><span style='color:#909090' lang=zh-CN><span
style='mso-spacerun:yes'> </span></span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------+-------------------------+ </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>1 row in set (0.00 sec)</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'> </span>MEMBER OF</span><span style='font-family:"Comic Sans MS"'
lang=en-US>() </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>在</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN> MySQL 8.0.17 </span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>中添加。</span></p>

<p style='margin-left:.375in;font-family:SimSun;font-size:12.0pt'>&nbsp;</p>

<p style='font-family:SimSun;font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:SimSun;font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/json-search-functions.html#function_json-contains"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/json-search-functions.html#function_json-contains</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
