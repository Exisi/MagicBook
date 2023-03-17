---
categories:
  - MyBatis
tags:
  - ‹collection›
date:
  - 2022-11-27 7:30:30
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.6659in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.6659in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>collection&gt; </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>标签用于表示一对多的关联关系。它通常在一个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> resultMap </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>中嵌套另一个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> resultMap </span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>中使用，用于表示一个实体类以及它所关联的多个实体类。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>集合元素用于处理“</span><span
     style='font-weight:bold;font-family:"Microsoft YaHei UI";font-size:12.0pt'>一对多</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>”类型的关系</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;line-height:
     19pt'><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>集合元素的作用几乎和关联是相同的。实际上</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>,</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>它们也很相似</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>,</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>文档的异同是多余的。
     所以我们更多关注于它们的不同</span></li>
</ul>

<p style='margin-left:.375in;line-height:19pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;line-height:
     19pt;color:#333333'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>要映射嵌套结果集合到</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> List </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>中</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>,</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>我们使用集合元素。就像关联元素一样</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>,</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>我们可以从 连接中使用嵌套查询</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>,</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>或者嵌套结果</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512' lang=zh-CN>&lt;collection property=</span><span
style='color:#949A55' lang=zh-CN>&quot;posts&quot;</span><span
style='color:#B43512' lang=zh-CN> ofType=</span><span style='color:#949A55'
lang=zh-CN>&quot;domain.blog.Post&quot;</span><span style='color:#949A55'
lang=en-US> </span><span style='color:#B43512' lang=zh-CN>select=</span><span
lang=zh-CN>&quot;selectPostsForBlog&quot;</span><span style='color:#B43512'
lang=zh-CN>&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512' lang=zh-CN>&lt;id property=</span><span
style='color:#949A55' lang=zh-CN>&quot;id&quot; </span><span style='color:#B43512'
lang=zh-CN>column=</span><span style='color:#949A55' lang=zh-CN>&quot;post_id&quot;</span><span
style='color:#949A55' lang=en-US> </span><span style='color:#B43512'
lang=zh-CN>/&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512'>&lt;result property=</span><span
style='color:#949A55'>&quot;subject&quot; </span><span style='color:#B43512'>column=</span><span
style='color:#949A55'>&quot;post_subject&quot;</span><span style='color:#B43512'>/&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512'>&lt;result property=</span><span
style='color:#949A55'>&quot;body&quot;</span><span style='color:#B43512'>
column=</span><span style='color:#949A55'>&quot;post_body&quot;</span><span
style='color:#B43512'>/&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'>&lt;/collection&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512'>&lt;select id=</span><span
style='color:#949A55'>&quot;selectBlog&quot; </span><span style='color:#B43512'>resultMap=</span><span
style='color:#949A55'>&quot;blogResult&quot;</span><span style='color:#CC6666'>&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#959796'>SELECT * FROM BLOG WHERE ID = #{id}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'>&lt;/select&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#B43512'>&lt;select id=</span><span
style='color:#949A55'>&quot;selectPostsForBlog&quot;</span><span
style='color:#B43512'> resultType=</span><span style='color:#949A55'>&quot;Post&quot;</span><span
style='color:#CC6666'>&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#959796'>SELECT * FROM POST WHERE BLOG_ID = #{id}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'>&lt;/select&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#B43512'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.2611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt;color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.9416in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt;color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'>column</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.9416in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  background-color:#E7E6E6;vertical-align:top;width:1.2611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'>property</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.95in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  background-color:white;vertical-align:top;width:1.2611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'><span lang=en-US>of</span><span lang=zh-CN>Type</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:7.0111in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>指向一个</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> Java </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>实体类的对象</span><span
  style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>（</span><span
  style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>Role</span><span
  style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>）</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>,</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>或</span><span
  style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>一个对象类型</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>(</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>参考上面内建类型别名的列表</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>) </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>。如果你映射到一个</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> JavaBean,MyBatis </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>通常可以断定类型。</span></p>
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
  background-color:#E7E6E6;vertical-align:top;width:1.2611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'>select</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.0111in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  background-color:white;vertical-align:top;width:1.2611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'>fetchType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.9416in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  background-color:#E7E6E6;vertical-align:top;width:1.2805in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt;color:#DD1144'>foreignColumn</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.9222in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI";color:#333333'>指定外键对应的列名，指定的列将与父类型中&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#DD1144'>column</span><span
  style='font-family:"Microsoft YaHei UI";color:#333333'>&nbsp;的给出的列进行匹配。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt;color:#DD1144'>resultSet</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.9416in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt;color:#333333'>指定用于加载复杂类型的结果集名字。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'>jdbcType</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.0111in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  background-color:white;vertical-align:top;width:1.2611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:15pt;font-family:"Comic Sans MS";font-size:
  11.5pt'>typeHandler</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.9416in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  background-color:#E7E6E6;vertical-align:top;width:1.2611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>resultMap</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.9416in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>用于嵌套外部</span><span style='font-family:"Comic Sans MS"' lang=en-US>resultMap</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>结果集</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2805in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>notNullColumn</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:6.9222in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei"'>用于指定关联对象的某个属性不为</span><span
  style='font-family:"Comic Sans MS"'>null</span><span style='font-family:"Microsoft YaHei"'>时，才会将查询结果映射到</span><span
  style='font-family:"Comic Sans MS"'>Java</span><span style='font-family:"Microsoft YaHei"'>对象上</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>columnPrefix</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.9416in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>用于指定查询结果集中的列名前缀，以便将多个列名映射到</span><span
  style='font-family:"Comic Sans MS"'>Java</span><span style='font-family:"Microsoft YaHei UI"'>对象的</span><span
  style='font-family:"Comic Sans MS"'>ID</span><span style='font-family:"Microsoft YaHei UI"'>属性上</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>autoMapping</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:7.0in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
