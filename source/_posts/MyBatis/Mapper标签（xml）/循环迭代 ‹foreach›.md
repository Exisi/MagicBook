---
categories:
  - MyBatis
tags:
  - ‹foreach›
date:
  - 2022-11-27 7:29:32
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.9659in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.9659in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;foreach&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>可以根据传入的参数动态生成循环语句。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;foreach&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>元素通常用于在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>SQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句中生成</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>IN</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>条件语句。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在集合中的查找学生</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;select id=&quot;getStudentListByClassIDs&quot;
resultMap=&quot;studentResultMap&quot;&gt;<span style='mso-spacerun:yes'>  
</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>SELECT * FROM </span><span lang=en-US>student as s</span><span
lang=zh-CN><span style='mso-spacerun:yes'>    </span></span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>WHERE </span><span lang=en-US>s</span><span
lang=zh-CN>.</span><span lang=en-US>classID</span><span lang=zh-CN> IN<span
style='mso-spacerun:yes'>     </span></span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#ED7D31'>&lt;foreach collection=&quot;list&quot;
item=&quot;classList&quot;<span style='mso-spacerun:yes'> 
</span>open=&quot;(&quot; separator=&quot;,&quot; close=&quot;)&quot;&gt;<span
style='mso-spacerun:yes'>   </span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>#{classList}<span style='mso-spacerun:yes'>    </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#ED7D31'>&lt;/foreach&gt;</span><span
style='mso-spacerun:yes'>       </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/select&gt; </p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.9201in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt;color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.9902in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.9201in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#333333'>item</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.9902in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:SimSun;font-size:11.5pt;color:#333333'><span
  style='font-weight:bold'>集合中元素迭代时的别名</span>，该参数为必选。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.9201in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#333333'>index</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.9902in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#333333'><span style='font-family:
  "Microsoft YaHei UI"'>在</span><span style='font-family:"Comic Sans MS"'>list</span><span
  style='font-family:"Microsoft YaHei UI"'>和数组中</span><span style='font-family:
  "Comic Sans MS"'>,index</span><span style='font-family:"Microsoft YaHei UI"'>是元素的序号，在</span><span
  style='font-family:"Comic Sans MS"'>map</span><span style='font-family:"Microsoft YaHei UI"'>中，</span><span
  style='font-family:"Comic Sans MS"'>index</span><span style='font-family:
  "Microsoft YaHei UI"'>是元素的</span><span style='font-family:"Comic Sans MS"'>key</span><span
  style='font-family:"Microsoft YaHei UI"'>，该参数可选</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.9201in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#333333'>open</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.0006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#333333'><span style='font-weight:
  bold;font-family:"Comic Sans MS"'>foreach</span><span style='font-weight:
  bold;font-family:"Microsoft YaHei UI"'>代码的开始符号</span><span style='font-family:
  "Microsoft YaHei UI"'>，一般是</span><span style='font-family:"Comic Sans MS"'>(</span><span
  style='font-family:"Microsoft YaHei UI"'>和</span><span style='font-family:
  "Comic Sans MS"'>close=&quot;)&quot;</span><span style='font-family:"Microsoft YaHei UI"'>合用。常用在</span><span
  style='font-family:"Comic Sans MS"'>in(),values()</span><span
  style='font-family:"Microsoft YaHei UI"'>时。该参数可选</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.9395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#333333'>separator</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.0222in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#333333'><span style='font-weight:
  bold;font-family:"Microsoft YaHei UI"'>元素之间的分隔符</span><span style='font-family:
  "Microsoft YaHei UI"'>，例如在</span><span style='font-family:"Comic Sans MS"'>in()</span><span
  style='font-family:"Microsoft YaHei UI"'>的时候，</span><span style='font-family:
  "Comic Sans MS"'>separator=&quot;,&quot;</span><span style='font-family:"Microsoft YaHei UI"'>会自动在元素中间用</span><span
  style='font-family:"Comic Sans MS"'>“,“</span><span style='font-family:"Microsoft YaHei UI"'>隔开，避免手动输入逗号导致</span><span
  style='font-family:"Comic Sans MS"'>sql</span><span style='font-family:"Microsoft YaHei UI"'>错误，如</span><span
  style='font-family:"Comic Sans MS"'>in(1,2,)</span><span style='font-family:
  "Microsoft YaHei UI"'>这样。该参数可选。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.9201in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#333333'>close</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.9902in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#333333'><span style='font-weight:
  bold;font-family:"Comic Sans MS"'>foreach</span><span style='font-weight:
  bold;font-family:"Microsoft YaHei UI"'>代码的关闭符号</span><span style='font-family:
  "Microsoft YaHei UI"'>，一般是</span><span style='font-family:"Comic Sans MS"'>)</span><span
  style='font-family:"Microsoft YaHei UI"'>和</span><span style='font-family:
  "Comic Sans MS"'>open=&quot;(&quot;</span><span style='font-family:"Microsoft YaHei UI"'>合用。常用在</span><span
  style='font-family:"Comic Sans MS"'>in(),values()</span><span
  style='font-family:"Microsoft YaHei UI"'>时。该参数可选。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.9395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#333333'>collection</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.0194in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#333333'><span style='font-weight:
  bold;font-family:"Comic Sans MS"'>foreach</span><span style='font-weight:
  bold;font-family:"Microsoft YaHei UI"'>迭代的对象</span><span style='font-family:
  "Microsoft YaHei UI"'>，作为入参时，</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:#333333' lang=zh-CN>List</span><span style='color:#70AD47'
  lang=en-US> ---------&gt;</span><span style='color:#333333' lang=zh-CN>list</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:#333333' lang=zh-CN>array</span><span style='color:#333333'
  lang=en-US> </span><span style='color:#70AD47' lang=en-US>-------&gt;</span><span
  style='color:#333333' lang=zh-CN>array</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS";
  color:#333333' lang=zh-CN>Map</span><span style='font-family:"Comic Sans MS";
  color:#333333' lang=en-US> </span><span style='font-family:"Comic Sans MS";
  color:#70AD47' lang=en-US>--------&gt;</span><span style='font-family:"Microsoft YaHei UI";
  color:#333333' lang=zh-CN>没有默认的键。</span></p>
  <p style='font-size:11.5pt;color:#333333'><span style='font-family:
  "Microsoft YaHei UI"'>当然在作为入参时可以使用</span><span style='font-family:"Comic Sans MS"'>@Param(&quot;keyName&quot;)</span><span
  style='font-family:"Microsoft YaHei UI"'>来设置键，设置</span><span
  style='font-family:"Comic Sans MS"'>keyName</span><span style='font-family:
  "Microsoft YaHei UI"'>后，</span><span style='font-family:"Comic Sans MS"'>list,array</span><span
  style='font-family:"Microsoft YaHei UI"'>将会失效。 </span></p>
  <p style='font-size:11.5pt;color:#333333'><span style='font-family:
  "Microsoft YaHei UI"'>除了入参这种情况外，还有一种作为参数对象的某个字段的时候。举个例子：如果</span><span
  style='font-family:"Comic Sans MS"'>User</span><span style='font-family:"Microsoft YaHei UI"'>有属性</span><span
  style='font-family:"Comic Sans MS"'>List ids</span><span style='font-family:
  "Microsoft YaHei UI"'>。入参是</span><span style='font-family:"Comic Sans MS"'>User</span><span
  style='font-family:"Microsoft YaHei UI"'>对象，那么这个</span><span
  style='font-family:"Comic Sans MS"'>collection = &quot;ids&quot;.</span><span
  style='font-family:"Microsoft YaHei UI"'>如果</span><span style='font-family:
  "Comic Sans MS"'>User</span><span style='font-family:"Microsoft YaHei UI"'>有属性</span><span
  style='font-family:"Comic Sans MS"'>Ids ids;</span><span style='font-family:
  "Microsoft YaHei UI"'>其中</span><span style='font-family:"Comic Sans MS"'>Ids</span><span
  style='font-family:"Microsoft YaHei UI"'>是个对象，</span><span style='font-family:
  "Comic Sans MS"'>Ids</span><span style='font-family:"Microsoft YaHei UI"'>有个属性</span><span
  style='font-family:"Comic Sans MS"'>List id;</span><span style='font-family:
  "Microsoft YaHei UI"'>入参是</span><span style='font-family:"Comic Sans MS"'>User</span><span
  style='font-family:"Microsoft YaHei UI"'>对象，那么</span><span style='font-family:
  "Comic Sans MS"'>collection = &quot;ids.id&quot;</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
