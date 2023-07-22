---
categories:
- MySQL
date:
- 2023-1-23 22:10:25
---

<body lang=zh-CN style='font-family:Calibri;font-size:11.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.3638in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.3638in'>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.3125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>函数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:3.309in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.3125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_DEPTH()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.309in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档的最大深度</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.3125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_LENGTH()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.309in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档中的元素数</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.3125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_TYPE()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.309in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>JSON </span><span style='font-family:"Microsoft YaHei UI"'>值的类型</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.3125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_VALID()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.309in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>JSON </span><span style='font-family:"Microsoft YaHei UI"'>值是否有效</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold'>JSON_DEPTH(json_doc)</span></p>

<p style='margin-left:.375in;margin-top:0pt;margin-bottom:11pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>返回</span><span style='font-family:
"Comic Sans MS"'> JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档的最大深度。如果参数为
， 则返回 。如果参数不是有效的</span><span style='font-family:"Comic Sans MS"'> JSON </span><span
style='font-family:"Microsoft YaHei UI"'>文档，则会发生错误。</span><span
style='font-family:"Comic Sans MS"'>NULLNULL</span></p>

<p style='margin-left:.375in;margin-top:0pt;margin-bottom:11pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>空数组、空对象或标量值的深度为</span><span
style='font-family:"Comic Sans MS"'> 1</span><span style='font-family:"Microsoft YaHei UI"'>。仅包含深度为</span><span
style='font-family:"Comic Sans MS"'> 1 </span><span style='font-family:"Microsoft YaHei UI"'>的元素的非空数组或仅包含深度为</span><span
style='font-family:"Comic Sans MS"'> 1 </span><span style='font-family:"Microsoft YaHei UI"'>的成员值的非空对象的深度为</span><span
style='font-family:"Comic Sans MS"'> 2</span><span style='font-family:"Microsoft YaHei UI"'>。否则，</span><span
style='font-family:"Comic Sans MS"'>JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档的深度大于</span><span
style='font-family:"Comic Sans MS"'> 2</span><span style='font-family:"Microsoft YaHei UI"'>。</span></p>

<p style='margin-top:0pt;margin-bottom:11pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_DEPTH</span><span style='color:#909090'>(</span><span
style='color:#669900'>'{}'</span><span style='color:#909090'>), </span><span
style='color:#DD4A68'>JSON_DEPTH</span><span style='color:#909090'>(</span><span
style='color:#669900'>'[]'</span><span style='color:#909090'>), </span><span
style='color:#DD4A68'>JSON_DEPTH</span><span style='color:#909090'>(</span><span
style='color:#669900'>'true'</span><span style='color:#909090'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>+</span><span style='color:#909090'>-----------------------+------------------------+--------------------------+</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> JSON_DEPTH('{}') </span><span style='color:#909090' lang=zh-CN>|</span><span
style='color:#555555' lang=zh-CN> JSON_DEPTH('[]') </span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> JSON_DEPTH('true') </span><span style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------+------------------------+--------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> 1</span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                             </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> 1</span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                              </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> 1</span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                                 </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------+------------------------+--------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>m</span><span style='color:#A67F59'>ysql&gt;
</span><span style='color:#0077AA'>SELECT </span><span style='color:#DD4A68'>JSON_DEPTH</span><span
style='color:#909090'>(</span><span style='color:#669900'>'[10, 20]'</span><span
style='color:#909090'>), </span><span style='color:#DD4A68'>JSON_DEPTH</span><span
style='color:#909090'>(</span><span style='color:#669900'>'[[], {}]'</span><span
style='color:#909090'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>+</span><span style='color:#909090'>------------------------------+----------------------------+</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>|</span><span style='color:#555555'>
JSON_DEPTH('[10, 20]') </span><span style='color:#909090'>|</span><span
style='color:#555555'> JSON_DEPTH('[[], {}]') </span><span style='color:#909090'>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------+----------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> 2 </span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                                      </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> 2</span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                                   </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------+----------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>m</span><span style='color:#A67F59'>ysql&gt;
</span><span style='color:#0077AA'>SELECT </span><span style='color:#DD4A68'>JSON_DEPTH</span><span
style='color:#909090'>(</span><span style='color:#669900'>'[10, {&quot;a&quot;:
20}]'</span><span style='color:#909090'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>+</span><span style='color:#909090'>-------------------------------------+</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> JSON_DEPTH('[10, {&quot;a&quot;: 20}]') </span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> 3</span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                                               
</span></span><span style='color:#555555' lang=zh-CN><span
style='mso-spacerun:yes'> </span></span><span style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------+</p>

<p style='margin-top:0pt;margin-bottom:11pt;font-family:"Comic Sans MS";
font-size:10.5pt;color:#555555'>&nbsp;</p>

<p style='margin-top:0pt;margin-bottom:11pt;font-family:"Comic Sans MS";
font-size:10.5pt;color:#555555'>&nbsp;</p>

<p style='margin-top:0pt;margin-bottom:11pt;font-family:"Comic Sans MS";
font-size:13.5pt'><span style='font-weight:bold'>JSON_LENGTH(json_doc[, path])</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:11pt'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>返回</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> JSON </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>文档的长度，或者，如果给出了&nbsp;</span><span style='font-weight:
     bold;font-style:italic;font-family:"Comic Sans MS";font-size:12.0pt'>path</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;参数，则返回由路径标识的文档中值的长度。如果任何参数为参数，或者&nbsp;</span><span
     style='font-weight:bold;font-style:italic;font-family:"Comic Sans MS";
     font-size:12.0pt'>path</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>&nbsp;参数未标识文档中的值，则返回。如果</span><span style='font-weight:
     bold;font-style:italic;font-family:"Comic Sans MS";font-size:12.0pt'>json_doc</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>参数不是有效的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>文档或</span><span
     style='font-weight:bold;font-style:italic;font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>路径</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>参数不是有效的路径表达式，则会发生错误。在</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt'> MySQL 8.0.26 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>之前，如果路径表达式包含 或
     通配符，也会引发错误。</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'>NULLNULL***</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:11pt'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>文档的长度确定如下：</span></li>
 <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
  margin-bottom:0in'>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:
      0pt;margin-bottom:11pt'><span style='font-family:"Microsoft YaHei UI";
      font-size:12.0pt'>标量的长度为</span><span style='font-family:"Comic Sans MS";
      font-size:12.0pt'> 1</span><span style='font-family:"Microsoft YaHei UI";
      font-size:12.0pt'>。</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:
      0pt;margin-bottom:11pt'><span style='font-family:"Microsoft YaHei UI";
      font-size:12.0pt'>数组的长度是数组元素的数量。</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:
      0pt;margin-bottom:11pt'><span style='font-family:"Microsoft YaHei UI";
      font-size:12.0pt'>对象的长度是对象成员的数量。</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:
      0pt;margin-bottom:11pt'><span style='font-family:"Microsoft YaHei UI";
      font-size:12.0pt'>长度不计算嵌套数组或对象的长度。</span></li>
 </ul>
</ul>

<p style='margin-top:0pt;margin-bottom:11pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_LENGTH</span><span style='color:#909090'>(</span><span
style='color:#669900'>'[1, 2, {&quot;a&quot;: 3}]'</span><span
style='color:#909090'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> JSON_LENGTH('[1, 2, {&quot;a&quot;: 3}]') </span><span
style='color:#555555' lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> 3</span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                                                  
</span></span><span style='color:#555555' lang=zh-CN><span
style='mso-spacerun:yes'> </span></span><span style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>m</span><span style='color:#A67F59'>ysql&gt;
</span><span style='color:#0077AA'>SELECT </span><span style='color:#DD4A68'>JSON_LENGTH</span><span
style='color:#909090'>(</span><span style='color:#669900'>'{&quot;a&quot;: 1,
&quot;b&quot;: {&quot;c&quot;: 30}}'</span><span style='color:#909090'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>|</span><span style='color:#555555'>
JSON_LENGTH('{&quot;a&quot;: 1, &quot;b&quot;: {&quot;c&quot;: 30}}') </span><span
style='color:#909090'>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> 2 </span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                                                             </span></span><span
style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>m</span><span style='color:#A67F59'>ysql&gt;
</span><span style='color:#0077AA'>SELECT </span><span style='color:#DD4A68'>JSON_LENGTH</span><span
style='color:#909090'>(</span><span style='color:#669900'>'{&quot;a&quot;: 1,
&quot;b&quot;: {&quot;c&quot;: 30}}'</span><span style='color:#909090'>, </span><span
style='color:#669900'>'$.b'</span><span style='color:#909090'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> JSON_LENGTH('{&quot;a&quot;: 1, &quot;b&quot;: {&quot;c&quot;:
30}}', '$.b')</span><span style='color:#555555' lang=en-US> </span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> 1 </span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                                                                        </span></span><span
style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------------------------------------+</p>

<p style='margin-top:0pt;margin-bottom:11pt;font-family:"Comic Sans MS";
font-size:10.5pt;color:#555555'>&nbsp;</p>

<p style='margin-top:0pt;margin-bottom:11pt;font-family:"Comic Sans MS";
font-size:10.5pt;color:#555555'>&nbsp;</p>

<p style='margin-top:0pt;margin-bottom:11pt;font-family:"Comic Sans MS";
font-size:13.5pt'><span style='font-weight:bold'>JSON_TYPE(json_val)</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:11pt'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>返回一个字符串，指示</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> JSON </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>值的类型。这可以是对象、数组或标量类型，如下所示：</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt'>utf8mb4</span></li>
</ul>

<p style='margin-top:0pt;margin-bottom:11pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SET
</span><span style='color:#D88B00'>@j </span><span style='color:#A67F59'>= </span><span
style='color:#669900'>'{&quot;a&quot;: [10, true]}'</span><span
style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>m</span><span style='color:#A67F59'>ysql&gt; </span><span
style='color:#0077AA'>SELECT </span><span style='color:#DD4A68'>JSON_TYPE</span><span
style='color:#909090'>(</span><span style='color:#D88B00'>@j</span><span
style='color:#909090'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>+</span><span style='color:#909090'>---------------------+</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>|</span><span style='color:#555555'>
JSON_TYPE(@j) </span><span style='color:#909090'>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> OBJECT </span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>              </span></span><span style='color:#909090'
lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>m</span><span style='color:#A67F59'>ysql&gt;
</span><span style='color:#0077AA'>SELECT </span><span style='color:#DD4A68'>JSON_TYPE</span><span
style='color:#909090'>(</span><span style='color:#DD4A68'>JSON_EXTRACT</span><span
style='color:#909090'>(</span><span style='color:#D88B00'>@j</span><span
style='color:#909090'>, </span><span style='color:#669900'>'$.a'</span><span
style='color:#909090'>));</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>+</span><span style='color:#909090'>-------------------------------------------------+</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>|</span><span style='color:#555555'>
JSON_TYPE(JSON_EXTRACT(@j, '$.a')) </span><span style='color:#909090'>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> ARRAY </span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                                                       </span></span><span
style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>m</span><span style='color:#A67F59'>ysql&gt;
</span><span style='color:#0077AA'>SELECT </span><span style='color:#DD4A68'>JSON_TYPE</span><span
style='color:#909090'>(</span><span style='color:#DD4A68'>JSON_EXTRACT</span><span
style='color:#909090'>(</span><span style='color:#D88B00'>@j</span><span
style='color:#909090'>, </span><span style='color:#669900'>'$.a[0]'</span><span
style='color:#909090'>));</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>+</span><span style='color:#909090'>----------------------------------------------------+</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>|</span><span style='color:#555555'>
JSON_TYPE(JSON_EXTRACT(@j, '$.a[0]')) </span><span style='color:#909090'>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> INTEGER </span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                                                        </span></span><span
style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>m</span><span style='color:#A67F59'>ysql&gt;
</span><span style='color:#0077AA'>SELECT </span><span style='color:#DD4A68'>JSON_TYPE</span><span
style='color:#909090'>(</span><span style='color:#DD4A68'>JSON_EXTRACT</span><span
style='color:#909090'>(</span><span style='color:#D88B00'>@j</span><span
style='color:#909090'>, </span><span style='color:#669900'>'$.a[1]'</span><span
style='color:#909090'>));</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>+</span><span style='color:#909090'>----------------------------------------------------+</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>|</span><span style='color:#555555'>
JSON_TYPE(JSON_EXTRACT(@j, '$.a[1]')) </span><span style='color:#909090'>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> BOOLEAN </span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                                                      </span></span><span
style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+----------------------------------------------------+</p>

<p style='margin-left:.375in;margin-top:0pt;margin-bottom:11pt;font-family:
"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:11pt'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>如果参数为</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> NULL</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>，则</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> JSON_TYPE() </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>返回</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> NULL</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>：</span></li>
</ul>

<p style='margin-top:0pt;margin-bottom:11pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_TYPE</span><span style='color:#909090'>(</span><span
style='color:#990055'>NULL</span><span style='color:#909090'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>+</span><span style='color:#909090'>------------------------+</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>|</span><span style='color:#555555'>
JSON_TYPE(NULL) </span><span style='color:#909090'>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> NULL </span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                       </span></span><span
style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+------------------------+</p>

<p style='margin-left:.375in;margin-top:0pt;margin-bottom:11pt;font-family:
"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:11pt;color:#555555'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>如果参数不是有效的</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> JSON </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>值，则会发生错误：</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt;</span><span style='color:#0077AA'>SELECT</span><span
style='color:#DD4A68'>JSON_TYPE</span><span style='color:#909090'>(</span><span
style='color:#990055'>1</span><span style='color:#909090'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#555555'>ERROR 3146 (22032)</span><span
style='color:#909090'>:</span><span style='color:#555555'>Invalid data type for
JSON data in argument 1<br>
to function json_type; a JSON string or JSON type is required.</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>对于非错误结果，以下列表描述了可能的</span><span
style='font-family:"Comic Sans MS"'>JSON_TYPE</span><span style='font-family:
"Microsoft YaHei UI"'>（） 返回值：</span><span style='font-family:"Comic Sans MS"'>NULL</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>纯</span><span style='font-family:"Comic Sans MS"'>
JSON </span><span style='font-family:"Microsoft YaHei UI"'>类型：</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>OBJECT</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对象</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ARRAY</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数组</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>BOOLEAN</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>真字面量和假字面量</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>NULL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>空文本</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>数值类型：</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>INTEGER</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL TINYINT</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>SMALLINT</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MEDIUMINT</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>INT</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>以及</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>BIGINT</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>标量</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DOUBLE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>双浮点标量</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DECIMAL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>十进制和数字标量</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>时间类型：</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DATETIME</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL DATETIME </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> TIMESTAMP </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>标量</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>DATE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL DATE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>标量</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>TIME</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL TIME Scalars</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>字符串类型：</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>STRING</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>字符类型标量：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>CHAR</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>VARCHAR</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>TEXT</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ENUM </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SETutf8</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>二进制类型：</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>BLOB</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>二进制类型标量，包括二进制，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>VAR</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>二进制，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>BLOB</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>BIT</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>所有其他类型：</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>OPAQUE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>（原始位）</span></li>
</ul>

<p style='margin-left:.375in;margin-top:0pt;margin-bottom:11pt;font-family:
"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;margin-top:0pt;margin-bottom:11pt;font-family:
"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin-top:0pt;margin-bottom:11pt;font-family:"Comic Sans MS";
font-size:13.5pt'><span style='font-weight:bold'>JSON_VALID(val)</span></p>

<p style='margin-left:.375in;margin-top:0pt;margin-bottom:11pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>返回</span><span style='font-family:
"Comic Sans MS"'> 0 </span><span style='font-family:"Microsoft YaHei UI"'>或</span><span
style='font-family:"Comic Sans MS"'> 1 </span><span style='font-family:"Microsoft YaHei UI"'>以指示值是否为有效的</span><span
style='font-family:"Comic Sans MS"'> JSON</span><span style='font-family:"Microsoft YaHei UI"'>。如果参数为</span><span
style='font-family:"Comic Sans MS"'>NULL </span><span style='font-family:"Microsoft YaHei UI"'>，
则返回</span><span style='font-family:"Comic Sans MS"'> NULL</span></p>

<p style='margin-top:0pt;margin-bottom:11pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>mysql&gt; </span><span style='color:#0077AA'>SELECT
</span><span style='color:#DD4A68'>JSON_VALID</span><span style='color:#909090'>(</span><span
style='color:#669900'>'{&quot;a&quot;: 1}'</span><span style='color:#909090'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>|</span><span style='color:#555555'>
JSON_VALID('{&quot;a&quot;: 1}') </span><span style='color:#909090'>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> 1 </span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                                     </span></span><span
style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+-----------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>m</span><span style='color:#A67F59'>ysql&gt;
</span><span style='color:#0077AA'>SELECT </span><span style='color:#DD4A68'>JSON_VALID</span><span
style='color:#909090'>(</span><span style='color:#669900'>'hello'</span><span
style='color:#909090'>), </span><span style='color:#DD4A68'>JSON_VALID</span><span
style='color:#909090'>(</span><span style='color:#669900'>'&quot;hello&quot;'</span><span
style='color:#909090'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------+-----------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> JSON_VALID('hello')</span><span style='color:#555555' lang=en-US> </span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> JSON_VALID('&quot;hello&quot;') </span><span style='color:#909090'
lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------+-----------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> 0 </span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                                  </span></span><span
style='color:#909090' lang=zh-CN>|</span><span style='color:#555555'
lang=zh-CN> 1</span><span style='color:#555555' lang=en-US><span
style='mso-spacerun:yes'>                                     </span></span><span
style='color:#555555' lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span
style='color:#909090' lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>+---------------------------+-----------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/json-attribute-functions.html#function_json-length"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/json-attribute-functions.html#function_json-length</span></a><span
style='font-family:"Comic Sans MS"'>&gt;</span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>

</html>
