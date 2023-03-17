---
categories:
  - MyBatis
tags:
  - ‹resultMap›
date:
  - 2022-11-27 7:29:45
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.0826in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.0826in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>&lt;resultMap&gt; </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>标签是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MyBatis </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>中用于映射查询结果集的标签。通过</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> &lt;resultMap&gt; </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>标签，可以将数据库查询结果集中的列映射到</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Java </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>对象的属性上，从而方便地将查询结果转换为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Java </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>对象。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>当</span><span
     style='font-weight:bold;font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>实体类的属性名</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>和查询到的</span><span style='font-weight:bold;
     font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>数据库表的字段名</span><span
     style='font-weight:bold;font-family:"Microsoft YaHei UI";font-size:12.0pt;
     color:#E84C22' lang=zh-CN>不一致</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>时，</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>resultMap</span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>将字段映射到对应的实体类的属性中，防止匹配失败</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>resultMap</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>可以实现将查询结果映射为复杂类型的实体类对象，比如在查询结果映射对象中包括实体类对象和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>list</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>实现一对一查询和一对多查询</span></li>
</ul>

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

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=en-US>&lt;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>resultMap</span><span
style='font-family:"Comic Sans MS"' lang=en-US>&gt;</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>标签的属性</span></p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.1465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt;color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:7.4729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.1465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'>id</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.4729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>当前命名空间中的一个唯一标识，用于标识一个</span><span
  style='font-family:"Comic Sans MS"'>result map.</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.1465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'>type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.4729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>类的完全限定名</span><span
  style='font-family:"Comic Sans MS"'>, </span><span style='font-family:"Microsoft YaHei UI"'>或者一个类型别名</span><span
  style='font-family:"Comic Sans MS"'> (</span><span style='font-family:"Microsoft YaHei UI"'>内置的别名可以参考上面的表格</span><span
  style='font-family:"Comic Sans MS"'>).</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.159in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'>autoMapping</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.4597in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果设置这个属性，</span><span
  style='font-family:"Comic Sans MS"'>MyBatis</span><span style='font-family:
  "Microsoft YaHei UI"'>将会为这个</span><span style='font-family:"Comic Sans MS"'>ResultMap</span><span
  style='font-family:"Microsoft YaHei UI"'>开启或者关闭自动映射。这个属性会覆盖全局的属性</span><span
  style='font-family:"Comic Sans MS"'> autoMappingBehavior</span><span
  style='font-family:"Microsoft YaHei UI"'>。默认值为：</span><span style='font-family:
  "Comic Sans MS"'>unset</span><span style='font-family:"Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.1465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>extends</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.5131in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt'>用于继承已有的结果集映射。通过继承，可以基于现有的结果集映射定义新的结果集映射，从而避免重复定义相同的映射规则，提高代码的可维护性和可重用性。</p>
  </td>
 </tr>
</table>

</div>

<p><cite style='margin-left:.375in;font-family:宋体;font-size:9.0pt;
color:#595959'>&nbsp;</cite></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>resultMap</span><span style='font-family:
"Microsoft YaHei UI"'>有以下标签</span></p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.2902in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>标签</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:7.3291in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.2902in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:6pt;margin-bottom:0pt;line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Comic Sans MS"' lang=en-US>&lt;</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>constructor</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>&gt;</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>&nbsp;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.3291in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>用于在实例化类时，注入结果到构造方法中</p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:
       6pt;margin-bottom:0pt;line-height:15pt'><span style='font-weight:bold;
       font-family:"Comic Sans MS";font-size:11.5pt'>idArg</span><span
       style='font-weight:bold;font-family:"Microsoft YaHei UI";font-size:11.5pt'>&nbsp;</span></li>
  </ul>
  <p style='margin-left:.75in;margin-top:6pt;margin-bottom:0pt;line-height:
  15pt;font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>ID </span><span
  style='font-family:"Microsoft YaHei UI"'>参数</span><span style='font-family:
  "Comic Sans MS"'>;</span><span style='font-family:"Microsoft YaHei UI"'>标记出作为</span><span
  style='font-family:"Comic Sans MS"'> ID </span><span style='font-family:"Microsoft YaHei UI"'>的结果可以帮助提高整体性能</span></p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:
       6pt;margin-bottom:0pt;line-height:15pt'><span style='font-weight:bold;
       font-family:"Comic Sans MS";font-size:11.5pt'>arg</span></li>
  </ul>
  <p style='margin-left:.75in;margin-top:6pt;margin-bottom:0pt;line-height:
  15pt;font-family:"Microsoft YaHei UI";font-size:11.5pt'>将被注入到构造方法的一个普通结果</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2902in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:6pt;margin-bottom:0pt;line-height:15pt;font-family:"Comic Sans MS";
  font-size:11.5pt'><span lang=en-US>&lt;</span><span lang=zh-CN>id</span><span
  lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.3291in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>一个</span><span
  style='font-family:"Comic Sans MS"'> ID </span><span style='font-family:"Microsoft YaHei UI"'>结果</span><span
  style='font-family:"Comic Sans MS"'>;</span><span style='font-family:"Microsoft YaHei UI"'>标记出作为</span><span
  style='font-family:"Comic Sans MS"'> ID </span><span style='font-family:"Microsoft YaHei UI"'>的结果可以帮助提高整体性能</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.2902in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:6pt;margin-bottom:0pt;line-height:15pt;font-family:"Comic Sans MS";
  font-size:11.5pt'><span lang=en-US>&lt;</span><span lang=zh-CN>result</span><span
  lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.3291in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>注入到字段或</span><span
  style='font-family:"Comic Sans MS"'> JavaBean </span><span style='font-family:
  "Microsoft YaHei UI"'>属性的普通结果</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2902in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:6pt;margin-bottom:0pt;line-height:15pt;font-family:"Comic Sans MS";
  font-size:11.5pt'><span lang=en-US>&lt;</span><span lang=zh-CN>association</span><span
  lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.3291in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'><span
  style='mso-spacerun:yes'> </span>一个复杂类型的关联</span><span style='font-family:
  "Comic Sans MS"'>;</span><span style='font-family:"Microsoft YaHei UI"'>许多结果将包装成这种类型嵌套结果映射
  </span></p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>关联可以指定为一个&nbsp;</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>resultMap</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>&nbsp;元素，或者引用一个</span></li>
  </ul>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.2902in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:6pt;margin-bottom:0pt;line-height:15pt;font-family:"Comic Sans MS";
  font-size:11.5pt'><span lang=en-US>&lt;</span><span lang=zh-CN>collection</span><span
  lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.3291in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'><span
  style='mso-spacerun:yes'> </span>一个复杂类型的集合嵌套结果映射 </p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>集合可以指定为一个&nbsp;</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>resultMap</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>&nbsp;元素，或者引用一个</span></li>
  </ul>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3097in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:6pt;margin-bottom:0pt;line-height:15pt;font-family:"Comic Sans MS";
  font-size:11.5pt'><span lang=en-US>&lt;</span><span lang=zh-CN>discriminator</span><span
  lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.3423in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>使用结果值来决定使用哪个</span><span
  style='font-family:"Comic Sans MS"'>&nbsp;resultMap</span></p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:
       6pt;margin-bottom:0pt;line-height:15pt'><span style='font-weight:bold;
       font-family:"Comic Sans MS";font-size:11.5pt'>case</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>&nbsp;</span></li>
  </ul>
  <p style='margin-left:.75in;margin-top:6pt;margin-bottom:0pt;line-height:
  15pt;font-family:"Microsoft YaHei UI";font-size:11.5pt'>基于某些值的结果映射</p>
  <p style='margin-left:.75in;margin-top:6pt;margin-bottom:0pt;line-height:
  15pt;font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>嵌套结果映射
  – 一个&nbsp;</span><span style='font-family:"Comic Sans MS"'>case</span><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;也是一个映射它本身的结果</span><span
  style='font-family:"Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>因此可以包含很多相
  同的元素，或者它可以参照一个外部的</span><span style='font-family:"Comic Sans MS"'>&nbsp;resultMap</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:11.5pt;color:#ED7D31' lang=en-US>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://blog.csdn.net/u012843873/article/details/80198185"><span
style='font-family:"Comic Sans MS"'>https://blog.csdn.net/u012843873/article/details/80198185</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
