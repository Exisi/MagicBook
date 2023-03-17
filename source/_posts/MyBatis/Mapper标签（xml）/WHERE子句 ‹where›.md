---
categories:
  - MyBatis
tags:
  - <where>
date:
  - 2022-11-27 7:29:17
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.2208in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.2208in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;where&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>通常用于在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>SQL</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句中添加条件语句。它可以自动移除</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>WHERE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>关键字前面多余的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>AND</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>OR</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>关键字，并在必要的情况下添加</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>WHERE</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>关键字。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>&lt;select id=&quot;findActiveBlogLike&quot;</span><span
lang=en-US> </span><span lang=zh-CN>resultType=&quot;Blog&quot;&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US>SELECT</span><span lang=zh-CN> * from user </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>WHERE <br>
&lt;if test=&quot;</span><span lang=en-US>id</span><span lang=zh-CN> !=
null&quot;&gt;</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=en-US>id</span><span lang=zh-CN> = #{</span><span
lang=en-US>id</span><span lang=zh-CN>}</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>&lt;/if&gt; <br>
&lt;if test=&quot;</span><span lang=en-US>role</span><span lang=zh-CN> !=
null&quot;&gt;</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>AND </span><span lang=en-US>role</span><span
lang=zh-CN> like #{</span><span lang=en-US>role</span><span lang=zh-CN>} </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/if&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/select&gt;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:7pt;
     margin-bottom:7pt;color:black'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>如果这些条件没有一个能匹配上将会怎样？最终这条</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt'> SQL </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt'>会变成这样：</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>SELECT * FROM BLOG<br>
WHERE</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:7pt;
     margin-bottom:7pt;color:black'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>这会导致查询失败。如果仅仅第二个条件匹配又会怎样？这条</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>最终会是这样</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>SELECT * FROM BLOG<br>
WHERE </p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>AND </span><span lang=en-US>role</span><span
lang=zh-CN> like </span><span lang=en-US>'1'</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>&lt;select id=&quot;findActiveBlogLike&quot;</span><span
lang=en-US> </span><span lang=zh-CN>resultType=&quot;Blog&quot;&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US>SELECT</span><span lang=zh-CN> * from user </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>WHERE <br>
&lt;if test=&quot;</span><span lang=en-US>id</span><span lang=zh-CN> !=
null&quot;&gt;</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=en-US>id</span><span lang=zh-CN> = #{</span><span
lang=en-US>id</span><span lang=zh-CN>}</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>&lt;/if&gt; <br>
&lt;if test=&quot;</span><span lang=en-US>role</span><span lang=zh-CN> !=
null&quot;&gt;</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>AND </span><span lang=en-US>role</span><span
lang=zh-CN> like #{</span><span lang=en-US>role</span><span lang=zh-CN>} </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/if&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/select&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>这时我们可以嵌套</span><span
style='font-family:"Comic Sans MS"' lang=en-US> &lt;where&gt; </span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>语句控制</span><span
style='font-family:"Comic Sans MS"' lang=en-US> sql </span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>语句</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#6DA845'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>&lt;select id=&quot;findActiveBlogLike&quot;</span><span
lang=en-US> </span><span lang=zh-CN>resultType=&quot;</span><span lang=en-US>User</span><span
lang=zh-CN>&quot;&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US>SELECT</span><span lang=zh-CN> * from user </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512' lang=en-US>&lt;where&gt;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>&lt;if test=&quot;</span><span lang=en-US>id</span><span
lang=zh-CN> != null&quot;&gt;</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=en-US>id</span><span lang=zh-CN> = #{</span><span
lang=en-US>id</span><span lang=zh-CN>}</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>&lt;/if&gt; <br>
&lt;if test=&quot;</span><span lang=en-US>role</span><span lang=zh-CN> !=
null&quot;&gt;</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>AND </span><span lang=en-US>role</span><span
lang=zh-CN> like #{</span><span lang=en-US>role</span><span lang=zh-CN>} </span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&lt;/if&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512' lang=en-US>&lt;/where&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/select&gt;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#24292F'>&lt;where&gt;</span><span
style='font-family:"Microsoft YaHei UI"'>元素只有在其中包含至少一个子元素时才会生效。如果所有子元素都没有生效，则</span><span
style='font-family:"Comic Sans MS";color:#24292F'>&lt;where&gt;</span><span
style='font-family:"Microsoft YaHei UI"'>元素会被忽略。</span></p>

<p style='margin-left:.375in;font-family:SimSun;font-size:12.0pt'>&nbsp;</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
