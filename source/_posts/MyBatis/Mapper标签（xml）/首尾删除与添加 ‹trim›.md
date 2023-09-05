---
categories:
  - MyBatis
tags:
  - ‹trim›
date:
  - 2021-3-27 7:29:25
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.6694in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.6694in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>&lt;trim&gt;</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>通常用于在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>SQL</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>语句中去除多余的空格和逗号。它可以根据传入的参数动态判断是否需要添加或去除内容。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>trim</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>前面加上</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>set</span></li>
</ul>

<p style='font-family:"Microsoft YaHei";font-size:12.0pt;color:#6DA845'><span
style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;update id=&quot;updateStudent&quot;
parameterType=&quot;student&quot;&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>update student </p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512'>&lt;trim prefix=&quot;set&quot;&gt;</span><span
style='mso-spacerun:yes'>        </span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&lt;if test=&quot;name!=null and
name!=''&quot;&gt;name=#{name},&lt;/if&gt;<span
style='mso-spacerun:yes'>        </span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&lt;if test=&quot;age!=null and
age!=''&quot;&gt;age=#{age},&lt;/if&gt;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&lt;if test=&quot;sex!=null and
age!=''&quot;&gt;sex=#{sex}&lt;/if&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'>&lt;/trim&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;where&gt;id=#{id}&lt;/where&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/update&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>trim</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>后面添加上</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>where</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>内容</span></li>
</ul>

<p style='font-family:"Microsoft YaHei";font-size:12.0pt;color:#6DA845'><span
style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;update id=&quot;updateStudent&quot;
parameterType=&quot;student&quot;&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>update student set</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'><span style='mso-spacerun:yes'>    </span>&lt;trim
suffix=&quot;where id=#{id}&quot;&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span>&lt;if
test=&quot;name!=null and name!=''&quot;&gt;name=#{name},&lt;/if&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span>&lt;if
test=&quot;age!=null and age!=''&quot;&gt;age=#{age},&lt;/if&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span>&lt;if
test=&quot;sex!=null and age!=''&quot;&gt;sex=#{sex}&lt;/if&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'><span style='mso-spacerun:yes'>    </span>&lt;/trim&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/update&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>删掉</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>name</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>前面的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>set</span></li>
</ul>

<p style='font-family:"Microsoft YaHei";font-size:12.0pt;color:#6DA845'><span
style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;update id=&quot;updateStudent&quot;
parameterType=&quot;student&quot;&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>update student set</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'>&lt;trim prefixOverrides=&quot;set&quot; &gt;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&lt;if test=&quot;name!=null and name!=''&quot;&gt;set
name=#{name},&lt;/if&gt;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&lt;if test=&quot;age!=null and
age!=''&quot;&gt;age=#{age},&lt;/if&gt;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&lt;if test=&quot;sex!=null and
age!=''&quot;&gt;sex=#{sex}&lt;/if&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'>&lt;/trim&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    
</span>&lt;where&gt;id=#{id}&lt;/where&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/update&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>删掉最后一个逗号</p>

<p style='font-family:"Microsoft YaHei";font-size:12.0pt;color:#6DA845'><span
style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;update id=&quot;updateStudent&quot;
parameterType=&quot;student&quot;&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>update student set</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span><span style='color:#B43512'>&lt;trim
suffixOverrides=&quot;,&quot;&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span>&lt;if
test=&quot;name!=null and name!=''&quot;&gt;name=#{name},&lt;/if&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span>&lt;if
test=&quot;age!=null and age!=''&quot;&gt;age=#{age},&lt;/if&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span>&lt;if
test=&quot;sex!=null and age!=''&quot;&gt;sex=#{sex},&lt;/if&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>  </span><span style='color:#B43512'><span
style='mso-spacerun:yes'>  </span>&lt;/trim&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    
</span>&lt;where&gt;id=#{id}&lt;/where&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/update&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#ED7D31' lang=en-US>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.5798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt;color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.3305in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.5798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>prefixOverrides</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.3305in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>去除</span><span style='font-family:"Comic Sans MS"' lang=en-US>&lt;trim&gt;</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>前的部分的内容</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.5798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>prefix</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.3305in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>在</span><span style='font-family:"Comic Sans MS"' lang=en-US>&lt;trim&gt;</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>前的部分添加语句</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.5798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>suffixOverrides</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.3305in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>去除</span><span style='font-family:"Comic Sans MS"' lang=en-US>&lt;trim&gt;</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>语句内结束部分的内容</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.5798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>suffix</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.3305in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>在</span><span style='font-family:"Comic Sans MS"' lang=en-US>&lt;trim&gt;</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>语句内结束部分添加语句</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>&lt;trim&gt;</span><span
style='font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>元素只有在其中包含至少一个子元素时才会生效。如果所有子元素都没有生效，则</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>&lt;trim&gt;</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>元素会被忽略。同时，在最后生成的</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>SQL</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>语句中，最后一个字段后面不应该有逗号，因此</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>&lt;trim&gt;</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>元素会自动移除最后一个字段后面的逗号。</span></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
