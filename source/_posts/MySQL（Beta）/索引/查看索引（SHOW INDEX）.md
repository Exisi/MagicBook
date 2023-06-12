categories:
- MySQL
tags:
- SHOW INDEX
date:
- 2023-3-9 13:14:22
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.8472in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.8472in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>SHOW INDEX </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>返回表索引信息。格式类似于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> ODBC </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SQLStatistics </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>调用。此语句需要对表中的任何列具有一定的权限</span><span
     style='font-weight:bold;font-family:"Microsoft YaHei UI";font-size:12.0pt'>。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SHOW </span><span style='color:#A5A5A5'>[EXTENDED]</span>
{<span style='color:#2E75B5'>INDEX</span> | <span style='color:#2E75B5'>INDEXES</span>
| <span style='color:#2E75B5'>KEYS</span>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>{</span><span style='color:#2E75B5' lang=zh-CN>FROM</span><span
lang=zh-CN> | </span><span style='color:#2E75B5' lang=zh-CN>IN</span><span
lang=zh-CN>} </span><span style='color:#0070C0' lang=en-US><span
style='mso-spacerun:yes'> </span></span><span style='color:#70AD47' lang=en-US>&lt;tbl_name&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'>[{FROM | IN} db_name]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'>[WHERE expr]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47' lang=en-US>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.2958in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.2145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2958in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;tbl_name&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.2145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据表名</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2958in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>db_name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.2145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据库名称</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2958in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>expr</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.2145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>where </span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>语句的条件表达式</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2958in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>[EXTENDED]</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.2805in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>可选的关键字，导致输出包含有关</span><span
  style='font-family:"Comic Sans MS"'> MySQL </span><span style='font-family:
  "Microsoft YaHei UI"'>内部使用且用户无法访问的隐藏索引的信息。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#0070C0'>SHOW INDEX FROM </span>student;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>*************************** 1. row
***************************<br>
<span style='mso-spacerun:yes'>        </span></span><span lang=en-US><span
style='mso-spacerun:yes'>            </span></span><span lang=zh-CN>Table: </span><span
lang=en-US>student</span><span lang=zh-CN><br>
<span style='mso-spacerun:yes'>  </span></span><span lang=en-US><span
style='mso-spacerun:yes'>        </span></span><span lang=zh-CN>Non_unique:
0<br>
<span style='mso-spacerun:yes'>     </span></span><span lang=en-US><span
style='mso-spacerun:yes'>        </span></span><span lang=zh-CN>Key_name:
PRIMARY<br>
<span style='mso-spacerun:yes'> </span></span><span lang=en-US><span
style='mso-spacerun:yes'>      </span></span><span lang=zh-CN>Seq_in_index:
1<br>
</span><span lang=en-US><span style='mso-spacerun:yes'>     </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'>  </span>Column_name: ID<br>
<span style='mso-spacerun:yes'>  </span></span><span lang=en-US><span
style='mso-spacerun:yes'>           </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'>  </span>Collation: A<br>
<span style='mso-spacerun:yes'>  </span></span><span lang=en-US><span
style='mso-spacerun:yes'>         </span></span><span lang=zh-CN>Cardinality:
4188<br>
<span style='mso-spacerun:yes'>     </span></span><span lang=en-US><span
style='mso-spacerun:yes'>        </span></span><span lang=zh-CN>Sub_part:
NULL<br>
<span style='mso-spacerun:yes'>      </span></span><span lang=en-US><span
style='mso-spacerun:yes'>          </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>Packed: NULL<br>
<span style='mso-spacerun:yes'>      </span></span><span lang=en-US><span
style='mso-spacerun:yes'>             </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'>   </span>Null:<br>
<span style='mso-spacerun:yes'>   </span></span><span lang=en-US><span
style='mso-spacerun:yes'>       </span></span><span lang=zh-CN>Index_type:
BTREE<br>
<span style='mso-spacerun:yes'>     </span></span><span lang=en-US><span
style='mso-spacerun:yes'>        </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>Comment:<br>
</span><span lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
lang=zh-CN>Index_comment:<br>
<span style='mso-spacerun:yes'>      </span></span><span lang=en-US><span
style='mso-spacerun:yes'>            </span></span><span lang=zh-CN>Visible:
YES<br>
<span style='mso-spacerun:yes'>   </span></span><span lang=en-US><span
style='mso-spacerun:yes'>        </span></span><span lang=zh-CN>Expression:
NULL</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#0070C0'>SHOW KEYS FROM </span>student;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS"'><span
style='font-size:9.75pt;color:black' lang=zh-CN><br>
</span><span style='font-size:12.0pt' lang=zh-CN>*************************** 1.
row ***************************<br>
<span style='mso-spacerun:yes'>        </span></span><span style='font-size:
12.0pt' lang=en-US><span style='mso-spacerun:yes'>            </span></span><span
style='font-size:12.0pt' lang=zh-CN>Table: </span><span style='font-size:12.0pt'
lang=en-US>student</span><span style='font-size:12.0pt' lang=zh-CN><br>
<span style='mso-spacerun:yes'>  </span></span><span style='font-size:12.0pt'
lang=en-US><span style='mso-spacerun:yes'>        </span></span><span
style='font-size:12.0pt' lang=zh-CN>Non_unique: 0<br>
<span style='mso-spacerun:yes'>     </span></span><span style='font-size:12.0pt'
lang=en-US><span style='mso-spacerun:yes'>        </span></span><span
style='font-size:12.0pt' lang=zh-CN>Key_name: PRIMARY<br>
<span style='mso-spacerun:yes'> </span></span><span style='font-size:12.0pt'
lang=en-US><span style='mso-spacerun:yes'>      </span></span><span
style='font-size:12.0pt' lang=zh-CN>Seq_in_index: 1<br>
</span><span style='font-size:12.0pt' lang=en-US><span
style='mso-spacerun:yes'>     </span></span><span style='font-size:12.0pt'
lang=zh-CN><span style='mso-spacerun:yes'>  </span>Column_name: ID<br>
<span style='mso-spacerun:yes'>  </span></span><span style='font-size:12.0pt'
lang=en-US><span style='mso-spacerun:yes'>           </span></span><span
style='font-size:12.0pt' lang=zh-CN><span
style='mso-spacerun:yes'>  </span>Collation: A<br>
<span style='mso-spacerun:yes'>  </span></span><span style='font-size:12.0pt'
lang=en-US><span style='mso-spacerun:yes'>         </span></span><span
style='font-size:12.0pt' lang=zh-CN>Cardinality: 4188<br>
<span style='mso-spacerun:yes'>     </span></span><span style='font-size:12.0pt'
lang=en-US><span style='mso-spacerun:yes'>        </span></span><span
style='font-size:12.0pt' lang=zh-CN>Sub_part: NULL<br>
<span style='mso-spacerun:yes'>      </span></span><span style='font-size:12.0pt'
lang=en-US><span style='mso-spacerun:yes'>          </span></span><span
style='font-size:12.0pt' lang=zh-CN><span
style='mso-spacerun:yes'> </span>Packed: NULL<br>
<span style='mso-spacerun:yes'>      </span></span><span style='font-size:12.0pt'
lang=en-US><span style='mso-spacerun:yes'>             </span></span><span
style='font-size:12.0pt' lang=zh-CN><span
style='mso-spacerun:yes'>   </span>Null:<br>
<span style='mso-spacerun:yes'>   </span></span><span style='font-size:12.0pt'
lang=en-US><span style='mso-spacerun:yes'>       </span></span><span
style='font-size:12.0pt' lang=zh-CN>Index_type: BTREE<br>
<span style='mso-spacerun:yes'>     </span></span><span style='font-size:12.0pt'
lang=en-US><span style='mso-spacerun:yes'>        </span></span><span
style='font-size:12.0pt' lang=zh-CN><span
style='mso-spacerun:yes'> </span>Comment:<br>
</span><span style='font-size:12.0pt' lang=en-US><span
style='mso-spacerun:yes'>   </span></span><span style='font-size:12.0pt'
lang=zh-CN>Index_comment:<br>
<span style='mso-spacerun:yes'>      </span></span><span style='font-size:12.0pt'
lang=en-US><span style='mso-spacerun:yes'>            </span></span><span
style='font-size:12.0pt' lang=zh-CN>Visible: YES<br>
<span style='mso-spacerun:yes'>   </span></span><span style='font-size:12.0pt'
lang=en-US><span style='mso-spacerun:yes'>        </span></span><span
style='font-size:12.0pt' lang=zh-CN>Expression: NULL</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.4006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='line-height:16pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt;color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.0493in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>Table</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.0493in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>表的名称</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.4006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>Non_unique</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.0493in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果索引不能包含重复项，则为</span><span
  style='font-family:"Comic Sans MS"'> 0</span><span style='font-family:"Microsoft YaHei UI"'>，如果可以，则为</span><span
  style='font-family:"Comic Sans MS"'> 1</span><span style='font-family:"Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>Key_name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.0493in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>索引的名称。如果索引是主键，名称总是</span><span
  style='font-family:"Comic Sans MS"'> PRIMARY</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.4006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>Seq_in_index</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.0493in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>索引中的列序号，从</span><span
  style='font-family:"Comic Sans MS"'>1</span><span style='font-family:"Microsoft YaHei UI"'>开始</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>Column_name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.0493in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>数据列名称</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.4006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>Collation</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.0493in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>列在索引中的排序方式。这可以具有值</span><span
  style='font-family:"Comic Sans MS"'> A</span><span style='font-family:"Microsoft YaHei UI"'>（升序）、</span><span
  style='font-family:"Comic Sans MS"'>D</span><span style='font-family:"Microsoft YaHei UI"'>（降序）或</span><span
  style='font-family:"Comic Sans MS"'> NULL</span><span style='font-family:
  "Microsoft YaHei UI"'>（未排序）。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>Cardinality</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.1013in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>索引中唯一值数量的估计。要更新此数字，请运行</span><span
  style='font-family:"Comic Sans MS"'> ANALYZE TABLE </span><span
  style='font-family:"Microsoft YaHei UI"'>或（对于</span><span style='font-family:
  "Comic Sans MS"'> MyISAM </span><span style='font-family:"Microsoft YaHei UI"'>表）</span><span
  style='font-family:"Comic Sans MS"'>myisamchk -a</span><span
  style='font-family:"Microsoft YaHei UI"'>。</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>基数是根据存储为整数的统计数据计算的，因此即使对于小表，该值也不一定准确。基数越高，</span><span
  style='font-family:"Comic Sans MS"'>MySQL </span><span style='font-family:
  "Microsoft YaHei UI"'>在进行连接时使用索引的机会就越大。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.4006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>Sub_part</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.1013in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>索引前缀。也就是说，如果列仅被部分索引，则为索引字符数，如果整个列都被索引，则为</span><span
  style='font-family:"Comic Sans MS"'> NULL</span><span style='font-family:
  "Microsoft YaHei UI"'>。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>前缀限制以字节为单位。但是，</span><span
  style='font-family:"Comic Sans MS"'>CREATE TABLE</span><span
  style='font-family:"Microsoft YaHei UI"'>、</span><span style='font-family:
  "Comic Sans MS"'>ALTER TABLE </span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
  style='font-family:"Comic Sans MS"'> CREATE INDEX </span><span
  style='font-family:"Microsoft YaHei UI"'>语句中索引规范的前缀长度被解释为非二进制字符串类型（</span><span
  style='font-family:"Comic Sans MS"'>CHAR</span><span style='font-family:"Microsoft YaHei UI"'>、</span><span
  style='font-family:"Comic Sans MS"'>VARCHAR</span><span style='font-family:
  "Microsoft YaHei UI"'>、</span><span style='font-family:"Comic Sans MS"'>TEXT</span><span
  style='font-family:"Microsoft YaHei UI"'>）的字符数和二进制字符串类型（</span><span
  style='font-family:"Comic Sans MS"'>BINARY</span><span style='font-family:
  "Microsoft YaHei UI"'>、</span><span style='font-family:"Comic Sans MS"'>VARBINARY</span><span
  style='font-family:"Microsoft YaHei UI"'>、</span><span style='font-family:
  "Comic Sans MS"'>BLOB</span><span style='font-family:"Microsoft YaHei UI"'>）的字节数</span><span
  style='font-family:"Comic Sans MS"'>.</span><span style='font-family:"Microsoft YaHei UI"'>在为使用多字节字符集的非二进制字符串列指定前缀长度时，请考虑这一点</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>Packed</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.0493in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指示密钥的打包方式。如果不是，则为</span><span
  style='font-family:"Comic Sans MS"'> NULL</span><span style='font-family:
  "Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.4006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>Null</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.0493in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果列可能包含</span><span
  style='font-family:"Comic Sans MS"'> NULL </span><span style='font-family:
  "Microsoft YaHei UI"'>值，则包含</span><span style='font-family:"Comic Sans MS"'>
  YES</span><span style='font-family:"Microsoft YaHei UI"'>，否则包含</span><span
  style='font-family:"Comic Sans MS"'> ''</span><span style='font-family:"Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>Index_type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.0493in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>使用的索引方法（</span><span
  style='font-family:"Comic Sans MS"'>BTREE</span><span style='font-family:
  "Microsoft YaHei UI"'>、</span><span style='font-family:"Comic Sans MS"'>FULLTEXT</span><span
  style='font-family:"Microsoft YaHei UI"'>、</span><span style='font-family:
  "Comic Sans MS"'>HASH</span><span style='font-family:"Microsoft YaHei UI"'>、</span><span
  style='font-family:"Comic Sans MS"'>RTREE</span><span style='font-family:
  "Microsoft YaHei UI"'>）。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.4006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>Comment</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.0493in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>未在其自己的列中描述的有关索引的信息，例如如果索引被禁用则禁用。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4201in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>Index_comment</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.0305in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>创建索引时使用</span><span
  style='font-family:"Comic Sans MS"'> COMMENT </span><span style='font-family:
  "Microsoft YaHei UI"'>属性为索引提供的任何注释</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.4006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>Visible</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.0493in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>索引是否对优化器可见。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>Expression</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.0493in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>MySQL
  8.0.13 </span><span style='font-family:"Microsoft YaHei UI"'>及更高版本支持功能键部分，这会同时影响</span><span
  style='font-family:"Comic Sans MS"'> Column_name </span><span
  style='font-family:"Microsoft YaHei UI"'>和</span><span style='font-family:
  "Comic Sans MS"'> Expression </span><span style='font-family:"Microsoft YaHei UI"'>列：</span></p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>对于非功能性关键部分，</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>Column_name </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>表示由关键部分索引的列，</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>Expression </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>为</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'> NULL</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>。</span></li>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>对于功能键部分，</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>Column_name</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>列为</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>NULL</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>，</span><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>Expression</span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>表示键部分的表达式</span></li>
  </ul>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/show-index.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/show-index.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>