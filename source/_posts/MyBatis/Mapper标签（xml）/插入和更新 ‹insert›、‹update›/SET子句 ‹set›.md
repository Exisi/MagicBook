---
categories:
  - MyBatis
tags:
  - ‹set›
date:
  - 2021-3-27 7:29:12
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.5826in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.5826in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;set&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt' lang=zh-CN>通常用于在</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>SQL</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt' lang=zh-CN>语句中添加需要更新的字段。它可以自动移除</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>SET</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt' lang=zh-CN>关键字前面多余的逗号，并在必要的情况下添加</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>SET</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt' lang=zh-CN>关键字。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt' lang=zh-CN>没有使用</span><span
     style='font-family:Calibri;font-size:12.0pt' lang=en-US>&lt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>set</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&gt; </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>+</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> &lt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>if</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&gt; </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt' lang=zh-CN>标签时，如果有一个参数为</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>null</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt' lang=zh-CN>，都会导致错误</span></li>
</ul>

<p style='font-family:"Microsoft YaHei";font-size:12.0pt;color:#6DA845'><span
style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;update id=&quot;updateStudent&quot;
parameterType=&quot;Student&quot;&gt;<span style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>    </span>UPDATE </span><span
lang=en-US>student</span><span lang=zh-CN> </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>SET studentName =
#{studentName},<span style='mso-spacerun:yes'>    </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>           </span></span><span
lang=en-US><span style='mso-spacerun:yes'> </span></span><span lang=zh-CN>studentSex
= #{studentSex},<span style='mso-spacerun:yes'>    </span></span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>     </span>WHERE </span><span
lang=en-US>studentID</span><span lang=zh-CN> = #{studentID};<span
style='mso-spacerun:yes'>    </span></span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/update&gt; </p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>if</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>标签修改后，如果某项为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>null</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>则无法处理多余的逗号</span></li>
</ul>

<p style='font-family:"Microsoft YaHei";font-size:12.0pt;color:#6DA845'><span
style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>&lt;update id=&quot;update</span><span lang=en-US>Student</span><span
lang=zh-CN>&quot; parameterType=&quot;</span><span lang=en-US>Student</span><span
lang=zh-CN>&quot;&gt;<span style='mso-spacerun:yes'>   </span></span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>UPDATE </span><span lang=en-US>student</span><span
lang=zh-CN><span style='mso-spacerun:yes'>  </span></span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>SET</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&lt;if test=&quot;studentName!=null and studentName!=''
&quot;&gt;<span style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>studentName = #{studentName},<span style='mso-spacerun:yes'>    </span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&lt;/if&gt;<span style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&lt;if test=&quot;studentSex!=null and studentSex!=''
&quot;&gt;<span style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>studentSex = #{studentSex},<span style='mso-spacerun:yes'>    </span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&lt;/if&gt;<span style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>WHERE </span><span lang=en-US>studentID</span><span
lang=zh-CN> = #{studentID};<span style='mso-spacerun:yes'>    </span></span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/update&gt;<span style='mso-spacerun:yes'>   </span></p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt' lang=zh-CN>使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>set+if</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt' lang=zh-CN>标签修改后，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>set</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt' lang=zh-CN>动态包含</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>if</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt' lang=zh-CN>标签中需要更新的列，如果某项为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>null</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt' lang=zh-CN>则忽略其它不更新的列，并删除末尾多余的逗号</span></li>
</ul>

<p style='font-family:"Microsoft YaHei";font-size:12.0pt;color:#6DA845'><span
style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>&lt;update id=&quot;update</span><span lang=en-US>Student</span><span
lang=zh-CN>&quot; parameterType=&quot;</span><span lang=en-US>Student</span><span
lang=zh-CN>&quot;&gt;<span style='mso-spacerun:yes'>   </span></span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>UPDATE </span><span lang=en-US>student</span><span
lang=zh-CN><span style='mso-spacerun:yes'>  </span></span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512'>&lt;set&gt;</span><span
style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&lt;if test=&quot;studentName!=null and studentName!=''
&quot;&gt;<span style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>studentName = #{studentName},<span style='mso-spacerun:yes'>    </span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&lt;/if&gt;<span style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&lt;if test=&quot;studentSex!=null and studentSex!=''
&quot;&gt;<span style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>studentSex = #{studentSex},<span style='mso-spacerun:yes'>    </span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&lt;/if&gt;<span style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512'>&lt;/set&gt;</span><span
style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>WHERE </span><span lang=en-US>studentID</span><span
lang=zh-CN> = #{studentID};<span style='mso-spacerun:yes'>    </span></span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/update&gt;<span style='mso-spacerun:yes'>   </span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>&lt;set&gt;</span><span style='font-family:
"Microsoft YaHei UI"'>元素只有在其中包含至少一个子元素时才会生效。如果所有子元素都没有生效，则</span><span
style='font-family:"Comic Sans MS"'>&lt;set&gt;</span><span style='font-family:
"Microsoft YaHei UI"'>元素会被忽略。同时，在最后生成的</span><span style='font-family:"Comic Sans MS"'>SQL</span><span
style='font-family:"Microsoft YaHei UI"'>语句中，最后一个更新字段后面不应该有逗号，因此</span><span
style='font-family:"Comic Sans MS"'>&lt;set&gt;</span><span style='font-family:
"Microsoft YaHei UI"'>元素会自动移除最后一个更新字段后面的逗号。</span></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
