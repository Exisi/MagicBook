---
categories:
  - MyBatis
tags:
  - ‹association›
date:
  - 2021-3-27 7:30:10
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.2055in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.2055in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;line-height:
     19pt'><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=zh-CN>&lt;association&gt;</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei";
     font-size:12.0pt' lang=zh-CN>可以用于将查询结果集中的一组列映射到另一个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Java</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt' lang=zh-CN>对象的属性上，</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>处理“</span><span
     style='font-weight:bold;font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>一对一</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>”类型的关系。</span></li>
</ul>

<p style='margin-left:.375in;line-height:19pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;line-height:
     19pt'><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>比如，以下示例中一个博客有一个用户。
     关联映射就工作于这种结果之上。</span></li>
</ul>

<p style='margin-top:6pt;margin-bottom:0pt;line-height:15pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;resultMap id=&quot;userMap&quot;
type=&quot;User&quot;&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;id property=&quot;id&quot;
column=&quot;id&quot;&gt;&lt;/id&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;result property=&quot;username&quot;
column=&quot;username&quot;&gt;&lt;/result&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;result
property=&quot;password&quot;
column=&quot;password&quot;&gt;&lt;/result&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;result
property=&quot;address&quot;
column=&quot;address&quot;&gt;&lt;/result&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;result
property=&quot;email&quot; column=&quot;email&quot;&gt;&lt;/result&gt;<span
style='color:#B43512'><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;association property=</span>&quot;role&quot;<span
style='color:#B43512'> javaType=</span>&quot;Role&quot;<span style='color:#B43512'>&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;id
property=</span>&quot;id&quot;<span style='color:#B43512'> column=</span>&quot;role_id&quot;<span
style='color:#B43512'>&gt;&lt;/id&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;result
property=</span>&quot;name&quot;<span style='color:#B43512'> column=</span>&quot;role_name&quot;<span
style='color:#B43512'>&gt;&lt;/result&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/association&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/resultMap&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.3715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt;color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.2159in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt;color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.3715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'>column</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.2423in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-weight:bold;font-family:"Microsoft YaHei UI"'>来自数据库的列名</span><span
  style='font-family:"Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>或重命名的列标签。这和通常传递给</span><span
  style='font-family:"Comic Sans MS"'> resultSet.getString(columnName)</span><span
  style='font-family:"Microsoft YaHei UI"'>方法的字符串是相同的。 </span></p>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Comic Sans MS"'>column </span><span style='font-family:
  "Microsoft YaHei UI"'>注 意</span><span style='font-family:"Comic Sans MS"'> : </span><span
  style='font-family:"Microsoft YaHei UI"'>要 处 理 复 合 主 键</span><span
  style='font-family:"Comic Sans MS"'> , </span><span style='font-family:"Microsoft YaHei UI"'>你
  可 以 指 定 多 个 列 名 通 过</span><span style='font-family:"Comic Sans MS"'> column= </span><span
  style='font-family:"Microsoft YaHei UI"'>”</span><span style='font-family:
  "Comic Sans MS"'> {prop1=col1,prop2=col2} </span><span style='font-family:
  "Microsoft YaHei UI"'>” 这种语法来传递给嵌套查询语 句。</span></p>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>这会引起</span><span style='font-family:
  "Comic Sans MS"'> prop1 </span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
  style='font-family:"Comic Sans MS"'> prop2 </span><span style='font-family:
  "Microsoft YaHei UI"'>以参数对象形式来设置给目标嵌套查询语句。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'>property</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.2854in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-weight:bold;font-family:"Microsoft YaHei UI"'>映射到实体类结果的字段或属性</span><span
  style='font-family:"Microsoft YaHei UI"'>。如果用来匹配的</span><span
  style='font-family:"Comic Sans MS"'> JavaBeans </span><span style='font-family:
  "Microsoft YaHei UI"'>存在给定名字的属性，那么它将会被使用。 </span></p>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>否则</span><span style='font-family:
  "Comic Sans MS"'> MyBatis </span><span style='font-family:"Microsoft YaHei UI"'>将会寻找与给定名称相同的字段。
  这两种情形你可以使用通常点式的复杂属性导航。</span></p>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>比如</span><span style='font-family:
  "Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>你可以这样映射
  一 些 东 西</span><span style='font-family:"Comic Sans MS"'> :</span><span
  style='font-family:"Microsoft YaHei UI"'>“</span><span style='font-family:
  "Comic Sans MS"'> username </span><span style='font-family:"Microsoft YaHei UI"'>”</span><span
  style='font-family:"Comic Sans MS"'>, </span><span style='font-family:"Microsoft YaHei UI"'>或
  者 映 射 到 一 些 复 杂 的 东 西</span><span style='font-family:"Comic Sans MS"'> : </span><span
  style='font-family:"Microsoft YaHei UI"'>“</span><span style='font-family:
  "Comic Sans MS"'>address.street.number</span><span style='font-family:"Microsoft YaHei UI"'>”
  。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.3715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'>javaType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.2159in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>指向一个 </span><span style='font-family:
  "Comic Sans MS"'>Java </span><span style='font-weight:bold;font-family:"Microsoft YaHei UI"'>实体类</span><span
  style='font-weight:bold;font-family:"Microsoft YaHei UI";color:#E84C22'>中</span><span
  style='font-weight:bold;font-family:"Microsoft YaHei UI"'>的字段或属性</span><span
  style='font-family:"Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>或一个</span><span
  style='font-weight:bold;font-family:"Microsoft YaHei UI"'>类型别名，</span></p>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>属性可以是</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>(</span><span
  style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>int,String</span><span
  style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>，</span><span
  style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>Role</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>) </span></p>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>如果你映射到一个</span><span
  style='font-family:"Comic Sans MS"'> JavaBean,MyBatis </span><span
  style='font-family:"Microsoft YaHei UI"'>通常可以断定类型。</span></p>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>然而</span><span style='font-family:
  "Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>如</span><span
  style='font-family:"Comic Sans MS"'> javaType </span><span style='font-family:
  "Microsoft YaHei UI"'>果你映射到的是</span><span style='font-family:"Comic Sans MS"'>
  HashMap,</span><span style='font-family:"Microsoft YaHei UI"'>那么你应该明确地指定</span><span
  style='font-family:"Comic Sans MS"'> javaType </span><span style='font-family:
  "Microsoft YaHei UI"'>来保证所需的行为。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'>select</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.2791in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-weight:bold;font-family:"Microsoft YaHei UI"'>另外一个映射语句的</span><span
  style='font-weight:bold;font-family:"Comic Sans MS"'> ID</span><span
  style='font-family:"Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>可以加载这个属性映射需要的复杂类型。获取的
  在列属性中指定的列的值将被传递给目标</span><span style='font-family:"Comic Sans MS"'> select </span><span
  style='font-family:"Microsoft YaHei UI"'>语句作为参数。</span></p>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Comic Sans MS"'>select </span><span style='font-family:
  "Microsoft YaHei UI"'>注 意</span><span style='font-family:"Comic Sans MS"'> : </span><span
  style='font-family:"Microsoft YaHei UI"'>要 处 理 复 合 主 键</span><span
  style='font-family:"Comic Sans MS"'> , </span><span style='font-family:"Microsoft YaHei UI"'>你
  可 以 指 定 多 个 列 名 通 过</span><span style='font-family:"Comic Sans MS"'> column= </span><span
  style='font-family:"Microsoft YaHei UI"'>”</span><span style='font-family:
  "Comic Sans MS"'> {prop1=col1,prop2=col2} </span><span style='font-family:
  "Microsoft YaHei UI"'>” 这种语法来传递给嵌套查询语 句。</span></p>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>这会引起</span><span style='font-family:
  "Comic Sans MS"'> prop1 </span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
  style='font-family:"Comic Sans MS"'> prop2 </span><span style='font-family:
  "Microsoft YaHei UI"'>以参数对象形式来设置给目标嵌套查询语句。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.3715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'>fetchType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.2159in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>可选的。有效值为&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>lazy</span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
  style='font-family:"Comic Sans MS"'>eager</span><span style='font-family:
  "Microsoft YaHei UI"'>。 如果使用了，它将取代全局配置参数</span><span style='font-family:"Comic Sans MS"'>lazyLoadingEnabled</span><span
  style='font-family:"Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt;color:#DD1144'>foreignColumn</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.2159in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI";color:#333333'>指定外键对应的列名，指定的列将与父类型中&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#DD1144'>column</span><span
  style='font-family:"Microsoft YaHei UI";color:#333333'>&nbsp;的给出的列进行匹配。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.3715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt;color:#DD1144'>resultSet</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.2159in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt;color:#333333'>指定用于加载复杂类型的结果集名字。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'>jdbcType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.2854in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>在这个表格之前的所支持的</span><span
  style='font-family:"Comic Sans MS"'> JDBC </span><span style='font-family:
  "Microsoft YaHei UI"'>类型列表中的类型。</span><span style='font-family:"Comic Sans MS"'>JDBC
  </span><span style='font-family:"Microsoft YaHei UI"'>类型是仅仅 需要对插入</span><span
  style='font-family:"Comic Sans MS"'>, </span><span style='font-family:"Microsoft YaHei UI"'>更新和删除操作可能为空的列进行处理。</span></p>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>这是</span><span style='font-family:
  "Comic Sans MS"'> JDBC </span><span style='font-family:"Microsoft YaHei UI"'>的需要</span><span
  style='font-family:"Comic Sans MS"'>, jdbcType </span><span style='font-family:
  "Microsoft YaHei UI"'>而不是</span><span style='font-family:"Comic Sans MS"'>
  MyBatis </span><span style='font-family:"Microsoft YaHei UI"'>的。如果你直接使用</span><span
  style='font-family:"Comic Sans MS"'> JDBC </span><span style='font-family:
  "Microsoft YaHei UI"'>编程</span><span style='font-family:"Comic Sans MS"'>,</span><span
  style='font-family:"Microsoft YaHei UI"'>你需要指定这个类型</span><span
  style='font-family:"Comic Sans MS"'>-</span><span style='font-family:"Microsoft YaHei UI"'>但
  仅仅对可能为空的值。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.3715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'>typeHandler</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.2159in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>使用这个属性</span><span style='font-family:
  "Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>你可以覆盖默认的</span><span
  style='font-family:"Comic Sans MS"'> typeHandler </span><span
  style='font-family:"Microsoft YaHei UI"'>类型处理器。 </span></p>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>这个属性值是类的完全限定名或者是一个类型处理器的实现</span><span
  style='font-family:"Comic Sans MS"'>, </span><span style='font-family:"Microsoft YaHei UI"'>或者是类型别名。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>resultMap</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.2159in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>用于嵌套外部</span><span style='font-family:"Comic Sans MS"' lang=en-US>resultMap</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>结果集</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.3715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>notNullColumn</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.2159in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei"'>用于指定关联对象的某个属性不为</span><span
  style='font-family:"Comic Sans MS"'>null</span><span style='font-family:"Microsoft YaHei"'>时，才会将查询结果映射到</span><span
  style='font-family:"Comic Sans MS"'>Java</span><span style='font-family:"Microsoft YaHei"'>对象上</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>autoMapping</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.2159in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>autoMapping
  </span><span style='font-family:"Microsoft YaHei"'>属性用于指示</span><span
  style='font-family:"Comic Sans MS"'> Mybatis </span><span style='font-family:
  "Microsoft YaHei"'>是否自动映射关联对象中的属性。</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei"'>具体来说，如果</span><span
  style='font-family:"Comic Sans MS"'> autoMapping </span><span
  style='font-family:"Microsoft YaHei"'>属性值为</span><span style='font-family:
  "Comic Sans MS"'> true</span><span style='font-family:"Microsoft YaHei"'>，</span><span
  style='font-family:"Comic Sans MS"'>Mybatis </span><span style='font-family:
  "Microsoft YaHei"'>将自动映射关联对象中的属性，否则需要手动设置</span><span style='font-family:
  "Comic Sans MS"'> SQL </span><span style='font-family:"Microsoft YaHei"'>语句来进行映射</span></p>
  </td>
 </tr>
</table>

</div>

</div>

</div>

</div>

<!--EndFragment-->
</body>
