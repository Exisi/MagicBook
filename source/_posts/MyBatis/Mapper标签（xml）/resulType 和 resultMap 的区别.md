---
categories:
  - MyBatis
tags:
  - ‹resultMap›
date:
  - 2023-3-27 7:31:30
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.5312in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.5312in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MyBatis</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的每一个查询映射的返回类型都是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ResultMap</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，只是当我们提供的返回类型属性是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>resultType</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的时候，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MyBatis</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>会自动的给我们把对应的值赋给</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>resultType</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>所指定对象的属性，而当我们提供的返回类型是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>resultMap</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的时候，将数据库中列数据复制到对象的相应属性上，可以用于复制查询，两者不能同时用</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt' lang=en-US><span
style='font-weight:bold'>resultType</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>该属性就是</span><span
style='font-family:"Comic Sans MS"' lang=en-US>resultMap</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>返回的映射类型</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>当</span><span style='font-weight:bold;
font-family:"Microsoft YaHei UI";color:#00B0F0'>实体类的属性名</span><span
style='font-family:"Microsoft YaHei UI"'>和查询到的</span><span style='font-weight:
bold;font-family:"Microsoft YaHei UI";color:#00B0F0'>数据库表的字段名</span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI";color:#E84C22'>一致</span><span
style='font-family:"Microsoft YaHei UI"'>时，</span><span style='font-family:
"Comic Sans MS"'>resultType</span><span style='font-family:"Microsoft YaHei UI"'>将查询到的结果映射封装成实体类类型</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black' lang=zh-CN>&lt;select id=&quot;get</span><span
style='color:black' lang=en-US>UserById</span><span style='color:black'
lang=zh-CN>&quot; </span><span style='color:red' lang=zh-CN>parameterType</span><span
style='color:#E84C22' lang=zh-CN>=&quot;</span><span style='color:#E84C22'
lang=en-US>int</span><span style='color:#E84C22' lang=zh-CN>&quot;</span><span
style='color:black' lang=en-US> </span><span style='color:black' lang=zh-CN>resultType=&quot;</span><span
style='color:black' lang=en-US>Users</span><span style='color:black'
lang=zh-CN>&quot;&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select * from smbms_user where
id=#{</span><span style='color:#E84C22' lang=zh-CN>id</span><span
style='color:black' lang=zh-CN>}<br>
&lt;/select&gt;</span></p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'><span
style='font-weight:bold'>resultMap</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>当</span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>实体类的属性名</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>和查询到的</span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>数据库表的字段名</span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI";color:#E84C22'
lang=zh-CN>不一致</span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>时，</span><span
style='font-family:"Comic Sans MS"' lang=en-US>resultMap</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>将字段映射到对应的实体类的属性中，防止匹配失败</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>resultMap</span><span style='font-family:
"Microsoft YaHei UI"'>可以实现将查询结果映射为复杂类型的实体类对象，比如在查询结果映射对象中包括实体类对象和</span><span
style='font-family:"Comic Sans MS"'>list</span><span style='font-family:"Microsoft YaHei UI"'>实现一对一查询和一对多查询</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512'>&lt;resultMap id=</span>&quot;<span
style='font-weight:bold'>ReultMap</span>&quot;<span style='color:#B43512'>
type=</span>&quot;Bills&quot;<span style='color:#B43512'>&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512'>&lt;result property=</span>&quot;billcode&quot;
<span style='color:#B43512'>column=</span>&quot;billcode&quot;<span
style='color:#B43512'>/&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512'>&lt;result property=</span>&quot;productName&quot;
<span style='color:#B43512'>column=</span>&quot;productName&quot;<span
style='color:#B43512'>/&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512'>&lt;result property=</span>&quot;proName&quot;
<span style='color:#B43512'>column=</span>&quot;proName&quot;<span
style='color:#B43512'>/&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512'>&lt;result property=</span>&quot;productCount&quot;<span
style='color:#B43512'> column=</span>&quot;productCount&quot;<span
style='color:#B43512'>/&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512'>&lt;result property=</span>&quot;isPayment&quot;<span
style='color:#B43512'> column=</span>&quot;isPayment&quot;<span
style='color:#B43512'>/&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512'>&lt;result property=</span>&quot;creationDate&quot;
<span style='color:#B43512'>column=</span>&quot;creationDate&quot;<span
style='color:#B43512'>/&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'>&lt;/resultMap&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512'>&lt;select id=</span>&quot;getBillListByMap&quot;
<span style='color:#B43512'>resultMap=</span>&quot;<span style='font-weight:
bold'>ReultMap</span>&quot;<span style='color:#B43512'>&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>SELECT
sb.billcode,sb.productName,sp.proName,sb.productCount,sb.isPayment,sb.creationDate</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>FROM smbms_bill AS sb,smbms_provider AS sp</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>WHERE </p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>sb.providerId = sp.id</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>AND</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>sb.providerId=#{providerId}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'>&lt;/select&gt;</p>

<p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#ED7D31'
lang=en-US>&nbsp;</p>

<p><cite style='font-family:"Comic Sans MS";font-size:11.5pt;
color:#ED7D31'>&nbsp;</cite></p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://blog.csdn.net/u012843873/article/details/80198185"><span
style='font-family:"Comic Sans MS"'>https://blog.csdn.net/u012843873/article/details/80198185</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
13.5pt'>&nbsp;</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
