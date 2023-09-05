---
categories:
  - MyBatis
date:
  - 2023-3-27 7:44:12
tags:
  - ［@Select］
  - ［@Insert］
  - ［@Delete］
  - ［@Update］
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.2611in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.2611in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>SQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>注解用于代替</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>Mapper</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>文件中简单的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>sql</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句，只作用于方法上，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>sql</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句参数为字符串</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.2006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>注解</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.4215in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.2006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>@Select</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4215in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据查询</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>@Insert</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.4215in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据增加</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.2006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>@Delete</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4215in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据删除</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>@Update</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.4215in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据修改</p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>SQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>注解都有以下属性：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.3111in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.4868in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3111in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>value</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.4868in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>SQL </span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>语句，指定用来组成单个</span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN> SQL </span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>语句的字符串数组</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3111in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>databaseId</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.4868in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>MyBatis </span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN>3.5.5</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>以上可用</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>, </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>如果有一个配置好的</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> DatabaseIdProvider, MyBatis </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>会加载不带</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> databaseId </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>属性和带有匹配当前数据库</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> databaseId </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>属性的所有语句。如果同时存在带</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> databaseId </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>和不带</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> databaseId </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>属性的相同语句，则后者会被舍弃。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>public</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>interface</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=en-US>Person</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>Mapper</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>{</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;
color:green'><span style='font-family:"Comic Sans MS"'>//</span><span
style='font-family:"Microsoft YaHei UI"'>查询</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@Select</span><span
style='color:black'>(</span><span style='color:maroon'>&quot;select&nbsp;*&nbsp;from&nbsp;t_person&nbsp;where&nbsp;id&nbsp;=&nbsp;#{id}&quot;</span><span
style='color:black'>)</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>Person&nbsp;selectPersonById(Integer&nbsp;id);</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;
color:green'><span style='font-family:"Comic Sans MS"'>//</span><span
style='font-family:"Microsoft YaHei UI"'>添加</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000' lang=zh-CN>@</span><span
style='color:#FFC000' lang=en-US>Insert</span><span style='color:black'
lang=zh-CN>(</span><span style='color:maroon' lang=zh-CN>&quot;</span><span
style='color:maroon' lang=en-US>insert into t_pe</span><span style='color:#78230C'
lang=en-US>rson</span><span style='color:#78230C' lang=zh-CN>&nbsp;(id, name, </span><span
style='color:#78230C' lang=en-US>age</span><span style='color:#78230C'
lang=zh-CN>) values(#{id}, #{</span><span style='color:#78230C' lang=en-US>n</span><span
style='color:#78230C' lang=zh-CN>ame}, #{</span><span style='color:#78230C'
lang=en-US>age</span><span style='color:#78230C' lang=zh-CN>}</span><span
style='color:#78230C' lang=en-US>&quot;</span><span style='color:black'
lang=zh-CN>)</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>public</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=en-US>Person</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>add(</span><span
style='font-family:"Comic Sans MS"' lang=en-US>Person person</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>);</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;
color:green'><span style='font-family:"Comic Sans MS"'>//</span><span
style='font-family:"Microsoft YaHei UI"'>修改</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000' lang=zh-CN>@</span><span
style='font-family:"Comic Sans MS";color:#FFC000' lang=en-US>Update</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>(</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>update t_pe</span><span
style='font-family:"Comic Sans MS";color:#78230C' lang=en-US>rson</span><span
style='font-family:"Microsoft YaHei UI";color:#78230C' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:#78230C' lang=en-US>set id=</span><span
style='font-family:"Comic Sans MS";color:#78230C' lang=zh-CN>#{id}, </span><span
style='font-family:"Comic Sans MS";color:#78230C' lang=en-US>name=</span><span
style='font-family:"Comic Sans MS";color:#78230C' lang=zh-CN>#{</span><span
style='font-family:"Comic Sans MS";color:#78230C' lang=en-US>n</span><span
style='font-family:"Comic Sans MS";color:#78230C' lang=zh-CN>ame}, </span><span
style='font-family:"Comic Sans MS";color:#78230C' lang=en-US>age=</span><span
style='font-family:"Comic Sans MS";color:#78230C' lang=zh-CN>#{</span><span
style='font-family:"Comic Sans MS";color:#78230C' lang=en-US>age</span><span
style='font-family:"Comic Sans MS";color:#78230C' lang=zh-CN>}</span><span
style='font-family:"Comic Sans MS";color:#78230C' lang=en-US>&quot;</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>)</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>public</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=en-US>Person</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=en-US>Update</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>(</span><span style='font-family:
"Comic Sans MS"' lang=en-US>Person person</span><span style='font-family:"Comic Sans MS"'
lang=zh-CN>);</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;
color:green'><span style='font-family:"Comic Sans MS"'>//</span><span
style='font-family:"Microsoft YaHei UI"'>删除</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000' lang=zh-CN>@</span><span
style='color:#FFC000' lang=en-US>Delete</span><span style='color:black'
lang=zh-CN>(</span><span style='color:maroon' lang=zh-CN>&quot;</span><span
style='color:maroon' lang=en-US>delete from t_pe</span><span style='color:#78230C'
lang=en-US>rson where id=#{id}&quot;</span><span style='color:black'
lang=zh-CN>)</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>public</span><span
style='font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>Integer</span><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>&nbsp;</span><span style='font-family:"Comic Sans MS"' lang=en-US>deleteUserById</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>(Integer</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS"' lang=en-US>id</span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>);</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>}</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>对于条件较复杂的情况，不太建议这种方式，在字符串中难免会有很多错误，可读性很差</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
