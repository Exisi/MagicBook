---
categories:
  - MyBatis
tags:
  - ‹choose›
  - ‹when›
  - ‹otherwise›
date:
  - 2022-11-27 7:29:30
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.6868in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.6868in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#24292F'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292F'>&lt;choose&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>它可以根据传入的参数动态判断是否需要添加条件语句。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292F'>&lt;choose&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>元素包含多个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292F'>&lt;when&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>元素和一个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292F'>&lt;otherwise&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>元素。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#24292F'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>每个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292F'>&lt;when&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>元素都有一个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>test</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>属性，用于指定一个表达式，根据该表达式的结果来判断是否需要添加条件语句。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#24292F'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>如果所有</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292F'>&lt;when&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>元素的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>test</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>表达式的结果都为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>false</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>，则会添加</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292F'>&lt;otherwise&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>元素中的语句。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;select id=&quot;getStudentList&quot;
parameterType=&quot;Student&quot;
resultMap=&quot;studentResultMap&quot;&gt;<span style='mso-spacerun:yes'>  
</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>SELECT * from </span><span lang=en-US>student</span><span
lang=zh-CN><span style='mso-spacerun:yes'>    </span></span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&lt;where&gt;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt;color:#B43512'>&lt;choose&gt;<span style='mso-spacerun:yes'>  
</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512'>&lt;when</span>
test=&quot;studentName!=null and studentName!='' &quot;<span style='color:#B43512'>&gt;</span><span
style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=en-US>studentName</span><span lang=zh-CN> LIKE
CONCAT(CONCAT('%', #{studentName}),'%')<span style='mso-spacerun:yes'>   
</span></span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'>&lt;/when&gt;<span style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512'>&lt;when</span> test=&quot;studentSex!=
null and studentSex!= '' &quot;<span style='color:#B43512'>&gt;</span><span
style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>AND studentSex = #{studentSex}<span
style='mso-spacerun:yes'>    </span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'>&lt;/when&gt;<span style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512'>&lt;when</span>
test=&quot;studentBirthday!=null&quot;<span style='color:#B43512'>&gt;</span><span
style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>AND studentBirthday = #{studentBirthday}<span
style='mso-spacerun:yes'>    </span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'>&lt;/when&gt;<span style='mso-spacerun:yes'>  </span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512'>&lt;otherwise&gt;</span><span
style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=en-US>studentName</span><span lang=zh-CN> LIKE
CONCAT(CONCAT('%', #{studentName}),'%')</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512'>&lt;/otherwise&gt;</span><span
style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>       </span><span style='color:#B43512'><span
style='mso-spacerun:yes'> </span>&lt;/choose&gt;</span><span
style='mso-spacerun:yes'>    </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&lt;where&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/select&gt;<span style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

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
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt' lang=en-US>test</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.3305in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>&lt;when&gt; </span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>标签的表达式，一般用于判断传递的参数是否存在</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;choose&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>元素只有在其中包含至少一个子元素时才会生效。如果所有子元素都没有生效，则</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;choose&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>元素会被忽略。同时，在最后生成的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>SQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句中，最后一个字段后面不应该有逗号，因此</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;choose&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>元素会自动移除最后一个字段后面的逗号。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>此外，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>&lt;when&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>元素和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>&lt;otherwise&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>元素都可以包含任意数量的子元素，用于生成更复杂的条件语句。</span></li>
</ul>

<p style='font-family:Calibri;font-size:11.0pt'>&nbsp;</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
