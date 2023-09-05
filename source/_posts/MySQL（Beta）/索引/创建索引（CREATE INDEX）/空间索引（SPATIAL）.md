---
categories:
  - MySQL
tags:
  - SPATIAL
date:
  - 2023-3-29 11:04:12
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.2604in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.2604in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>5.7</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>之后的版本支持了空间索引，而且支持</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>OpenGIS</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>几何数据模型，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在空间索引这方年遵循</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>OpenGIS</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>几何数据模型规则。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>从</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL 8.0.12 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>开始，空间索引不允许使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> ASC </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> DESC</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>InnoDB</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MyISAM</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>可以使用类似于创建常规索引的语法创建空间索引，但使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>spatial</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>关键字。空间索引中的列必须声明为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>NOT NULL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>以下示例演示了如何创建空间索引：</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>CREATE TABLE</span><span style='color:black'>
geom </span><span style='color:#909090'>(</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>g </span><span style='color:#0077AA'>GEOMETRY
</span><span style='color:#A67F59'>NOT </span><span style='color:#990055'>NULL </span><span
style='color:#0077AA'>SRID </span><span style='color:#990055'>4326</span><span
style='color:#909090'>, </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>SPATIAL INDEX</span><span style='color:
#909090'>(</span><span style='color:black'>g</span><span style='color:#909090'>)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>);</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>CREATE TABLE</span><span style='color:black'>
geom </span><span style='color:#909090'>(</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>g </span><span style='color:#0077AA'>GEOMETRY
</span><span style='color:#A67F59'>NOT </span><span style='color:#990055'>NULL </span><span
style='color:#0077AA'>SRID </span><span style='color:#990055'>4326</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>ALTER TABLE</span><span style='color:black'>
geom </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>ADD SPATIAL INDEX</span><span
style='color:#909090'>(</span><span style='color:black'>g</span><span
style='color:#909090'>);</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>CREATE TABLE</span><span style='color:black'>
geom </span><span style='color:#909090'>(</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>g </span><span style='color:#0077AA'>GEOMETRY
</span><span style='color:#A67F59'>NOT </span><span style='color:#990055'>NULL </span><span
style='color:#0077AA'>SRID </span><span style='color:#990055'>4326</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>);</span><span style='color:black'><br>
</span><span style='color:#0077AA'>CREATE SPATIAL INDEX</span><span
style='color:black'> g </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>ON</span><span style='color:black'> geom </span><span
style='color:#909090'>(</span><span style='color:black'>g</span><span
style='color:#909090'>);</span></p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>假设一张表</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>geom</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>包含</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>32000</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>多个几何图形，存储在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>GEOMETRY</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>类型的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>g</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>列中。该表还有一个用于存储对象</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> ID </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>值的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> AUTO_INCREMENT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>列</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> fid</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA' lang=zh-CN>DESCRIBE</span><span
style='color:black' lang=zh-CN> geom</span><span style='color:#909090'
lang=zh-CN>;</span><span style='color:black' lang=zh-CN><br>
+-------+------------+------+------+----------+-------------------+<br>
| Field | Type<span style='mso-spacerun:yes'>   </span></span><span lang=en-US><span
style='mso-spacerun:yes'>   </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'>  </span>| Null </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| Key </span><span
lang=en-US><span style='mso-spacerun:yes'> </span></span><span lang=zh-CN>|
Default | Extra<span style='mso-spacerun:yes'>         </span></span><span
lang=en-US><span style='mso-spacerun:yes'>       </span></span><span
lang=zh-CN><span
style='mso-spacerun:yes'> </span>|<br>
+-------+------------+------+------+----------+-------------------+<br>
| fid<span style='mso-spacerun:yes'>   </span></span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| int(11)<span
style='mso-spacerun:yes'>  </span></span><span lang=en-US><span
style='mso-spacerun:yes'>    </span></span><span lang=zh-CN>|<span
style='mso-spacerun:yes'>     </span></span><span lang=en-US><span
style='mso-spacerun:yes'>   </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>| PRI </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| NULL<span
style='mso-spacerun:yes'>    </span>| auto_increment </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>|<br>
| g<span style='mso-spacerun:yes'>     </span></span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>| geometry |<span
style='mso-spacerun:yes'>      </span></span><span lang=en-US><span
style='mso-spacerun:yes'>   </span></span><span lang=zh-CN>|<span
style='mso-spacerun:yes'>    </span></span><span lang=en-US><span
style='mso-spacerun:yes'>    </span></span><span lang=zh-CN>|<span
style='mso-spacerun:yes'>       </span></span><span lang=en-US><span
style='mso-spacerun:yes'>     </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'>  </span>|<span style='mso-spacerun:yes'>   </span></span><span
lang=en-US><span style='mso-spacerun:yes'>          </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'>        </span></span><span
lang=en-US><span style='mso-spacerun:yes'> </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'>    </span></span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>|<br>
+-------+------------+------+------+----------+-------------------+<br>
2 rows in set (0.00 sec)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>SELECT </span><span style='color:#DD4A68'>COUNT</span><span
style='color:#909090'>(</span><span style='color:#A67F59'>*</span><span
style='color:#909090'>) </span><span style='color:#0077AA'>FROM</span><span
style='color:black'> geom</span><span style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果如下：</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>+-----------+<br>
| count(*) </span><span lang=en-US><span style='mso-spacerun:yes'> </span></span><span
lang=zh-CN>|<br>
+-----------+<br>
|<span style='mso-spacerun:yes'>    </span>32376 |<br>
+-----------+<br>
1 row in set (0.00 sec)</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:11.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>SPATIAL INDEX </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>创建</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> R </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>树索引。对于支持空间列的非空间索引的存储引擎，引擎会创建</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> B </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>树索引。空间值的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> B </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>树索引对精确值查找很有用，但对范围扫描没有用。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>优化器可以使用在受</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SRID </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>限制的列上定义的空间索引。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#70AD47'>&nbsp;</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
