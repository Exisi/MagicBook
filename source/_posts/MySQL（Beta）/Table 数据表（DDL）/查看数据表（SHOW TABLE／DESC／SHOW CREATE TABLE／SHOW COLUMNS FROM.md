---
categories:
  - MySQL
tags:
  - DDL
  - SHOW TABLE
  - DESC
  - SHOW CREATE TABLE
  - SHOW COLUMNS FROM
date:
  - 2023-1-29 14:50:56
---

<body lang=zh-CN style='font-family:Calibri;font-size:11.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.25in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.25in'>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.8145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>语句</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.9506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.8145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>SHOW TABLES </span><span style='font-family:"Comic Sans MS";
  color:#70AD47' lang=en-US>&lt;</span><span style='font-family:"Microsoft YaHei UI";
  color:#70AD47' lang=zh-CN>表名</span><span style='font-family:"Comic Sans MS";
  color:#70AD47' lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.9506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>查看数据库中的表</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.8145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>DESC</span><span style='font-family:"Comic Sans MS";color:#70AD47'
  lang=en-US> &lt;</span><span style='font-family:"Microsoft YaHei UI";
  color:#70AD47' lang=zh-CN>表名</span><span style='font-family:"Comic Sans MS";
  color:#70AD47' lang=en-US>&gt;</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>DESCRIBE </span><span style='font-family:"Comic Sans MS";
  color:#70AD47' lang=en-US>&lt;</span><span style='font-family:"Microsoft YaHei UI";
  color:#70AD47' lang=zh-CN>表名</span><span style='font-family:"Comic Sans MS";
  color:#70AD47' lang=en-US>&gt;</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=zh-CN>SHOW COLUMNS FROM</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> </span><span style='font-family:"Comic Sans MS";color:#70AD47'
  lang=en-US>&lt;</span><span style='font-family:"Microsoft YaHei UI";
  color:#70AD47' lang=zh-CN>表名</span><span style='font-family:"Comic Sans MS";
  color:#70AD47' lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.9506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>查看数据表结构</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.8145in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>SHOW CREATE TABLE </span><span style='font-family:"Comic Sans MS";
  color:#70AD47' lang=en-US>&lt;</span><span style='font-family:"Microsoft YaHei UI";
  color:#70AD47' lang=zh-CN>表名</span><span style='font-family:"Comic Sans MS";
  color:#70AD47' lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.9506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>查看数据表创建语句</p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Microsoft YaHei UI"' lang=zh-CN>查看数据库中的表（</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>SHOW TABLES</span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>）</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>使用</span><span
style='font-family:"Microsoft YaHei UI"' lang=en-US> </span><span
style='font-family:"Comic Sans MS"' lang=en-US>SHWO TABLES </span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>语句可以查看所有存在的数据表，以数据表名显示</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SHOW TABLES </span><span
style='color:#A5A5A5' lang=zh-CN>[FROM </span><span style='color:#70AD47'
lang=zh-CN>db_name</span><span style='color:#A5A5A5' lang=zh-CN>] [LIKE </span><span
style='color:#70AD47' lang=zh-CN>'pattern'</span><span style='color:#A5A5A5'
lang=zh-CN> | WHERE expr]</span><span style='color:#A5A5A5' lang=en-US> </span><span
lang=en-US>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#A5A5A5'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>查看当前数据库中的所有表</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>mysql&gt; </span><span lang=en-US>SHOW TABLES</span><span
lang=zh-CN>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| test </span><span lang=en-US><span
style='mso-spacerun:yes'>                 </span></span><span lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| tb1 </span><span lang=en-US><span
style='mso-spacerun:yes'>                  </span></span><span lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>1 row in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>查看当前</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>mysql </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>数据库中的表</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>mysql&gt; show tables from mysql;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+--------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| Tables_in_mysql </span><span lang=en-US><span
style='mso-spacerun:yes'>                 </span></span><span lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+--------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| columns_priv</span><span lang=en-US><span
style='mso-spacerun:yes'>                       </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| db </span><span lang=en-US><span
style='mso-spacerun:yes'>                                       </span></span><span
lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| func </span><span lang=en-US><span
style='mso-spacerun:yes'>                                    </span></span><span
lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| help_category </span><span lang=en-US><span
style='mso-spacerun:yes'>                    </span></span><span lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| help_keyword </span><span lang=en-US><span
style='mso-spacerun:yes'>                     </span></span><span lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| help_relation </span><span lang=en-US><span
style='mso-spacerun:yes'>                      </span></span><span lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| help_topic</span><span lang=en-US><span
style='mso-spacerun:yes'>              </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span></span><span lang=en-US><span
style='mso-spacerun:yes'>            </span></span><span lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| host</span><span lang=en-US><span
style='mso-spacerun:yes'>                            </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span lang=en-US><span
style='mso-spacerun:yes'>        </span></span><span lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| proc </span><span lang=en-US><span
style='mso-spacerun:yes'>                                    </span></span><span
lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| procs_priv</span><span lang=en-US><span
style='mso-spacerun:yes'>                          </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'> </span>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| tables_priv</span><span lang=en-US><span
style='mso-spacerun:yes'>              </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span></span><span lang=en-US><span
style='mso-spacerun:yes'>           </span></span><span lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| time_zone</span><span lang=en-US><span
style='mso-spacerun:yes'>                         </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| time_zone_leap_second </span><span lang=en-US><span
style='mso-spacerun:yes'>     </span></span><span lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| time_zone_name </span><span lang=en-US><span
style='mso-spacerun:yes'>                </span></span><span lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| time_zone_transition </span><span lang=en-US><span
style='mso-spacerun:yes'>         </span></span><span lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| time_zone_transition_type</span><span lang=en-US> </span><span
lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| user </span><span lang=en-US><span
style='mso-spacerun:yes'>                                    </span></span><span
lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+--------------------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>17 rows in set (0.01 sec)</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Microsoft YaHei UI"' lang=zh-CN>查看数据表结构（</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>DESCRIBE / DESC
/ </span><span style='font-weight:bold;font-family:"Comic Sans MS"' lang=zh-CN>SHOW
COLUMNS FROM</span><span style='font-weight:bold;font-family:"Microsoft YaHei UI"'
lang=zh-CN>）</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> DESC </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句可以查看数据表的结构</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#2E75B5'>DESC </span><span
style='color:#70AD47'>tb_name </span>;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#2E75B5'>DESCRIBE </span><span
style='color:#70AD47'>tb_name </span>;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>mysql&gt; </span><span style='color:#2E75B5'
lang=en-US>DESC</span><span lang=zh-CN> </span><span lang=en-US>test</span><span
lang=zh-CN>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+-------+---------------+-------+------+----------+-------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| Field | Type </span><span lang=en-US><span
style='mso-spacerun:yes'>    </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'>      </span></span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>| Null </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| Key </span><span
lang=en-US><span style='mso-spacerun:yes'> </span></span><span lang=zh-CN>|
Default</span><span lang=en-US> </span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>| Extra </span><span lang=en-US><span
style='mso-spacerun:yes'>     </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'>         </span></span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+-------+---------------+-------+------+----------+-------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| name | varchar(50)</span><span lang=en-US> </span><span
lang=zh-CN><span style='mso-spacerun:yes'> </span>| YES<span
style='mso-spacerun:yes'>  </span>|<span style='mso-spacerun:yes'>    </span></span><span
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span></span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>| NULL<span
style='mso-spacerun:yes'>  </span></span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>|<span
style='mso-spacerun:yes'>                </span></span><span lang=en-US><span
style='mso-spacerun:yes'>          </span></span><span lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| pwd<span style='mso-spacerun:yes'>   </span>|
varchar(50) </span><span lang=en-US><span style='mso-spacerun:yes'> </span></span><span
lang=zh-CN>| YES<span style='mso-spacerun:yes'>  </span>|<span
style='mso-spacerun:yes'>     </span></span><span lang=en-US><span
style='mso-spacerun:yes'>    </span></span><span lang=zh-CN>| NULL<span
style='mso-spacerun:yes'>   </span></span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>|<span
style='mso-spacerun:yes'>                </span></span><span lang=en-US><span
style='mso-spacerun:yes'>          </span></span><span lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| email | varchar(50) </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| YES<span
style='mso-spacerun:yes'>  </span>|<span style='mso-spacerun:yes'>     </span></span><span
lang=en-US><span style='mso-spacerun:yes'>    </span></span><span lang=zh-CN>|
NULL<span style='mso-spacerun:yes'>   </span></span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>|<span
style='mso-spacerun:yes'>                </span></span><span lang=en-US><span
style='mso-spacerun:yes'>          </span></span><span lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| id<span style='mso-spacerun:yes'>    </span></span><span
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>|
int(11)<span style='mso-spacerun:yes'>     </span></span><span lang=en-US><span
style='mso-spacerun:yes'>      </span></span><span lang=zh-CN>| NO<span
style='mso-spacerun:yes'>   </span>| PRI </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| NULL<span
style='mso-spacerun:yes'>   </span></span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| auto_increment |</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+-------+---------------+-------+------+----------+-------------------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>4 rows in set (0.01 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SHOW COLUMNS FROM</span><span
style='color:#2E75B5' lang=en-US> </span><span style='color:#70AD47'
lang=en-US>tb_name </span><span lang=en-US>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>mysql&gt; </span><span style='color:#2E75B5'
lang=zh-CN>SHOW COLUMNS FROM</span><span lang=zh-CN> t</span><span lang=en-US>est</span><span
lang=zh-CN>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+------------+-----------------------+-------+----------+----------+-------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| Field </span><span lang=en-US><span
style='mso-spacerun:yes'>        </span></span><span lang=zh-CN>| Type</span><span
lang=en-US><span style='mso-spacerun:yes'>                      </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'> </span>| Null</span><span
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>| Key </span><span lang=en-US><span
style='mso-spacerun:yes'>      </span></span><span lang=zh-CN>| Default | Extra</span><span
lang=en-US> </span><span lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+------------+-----------------------+-------+----------+----------+-------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| username</span><span lang=en-US> </span><span
lang=zh-CN><span style='mso-spacerun:yes'> </span>| varchar(20) </span><span
lang=en-US><span style='mso-spacerun:yes'>           </span></span><span
lang=zh-CN>| YES </span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>|</span><span
lang=en-US><span style='mso-spacerun:yes'>              </span></span><span
lang=zh-CN>| NULL</span><span lang=en-US><span style='mso-spacerun:yes'>  
</span></span><span lang=zh-CN><span style='mso-spacerun:yes'> </span>|</span><span
lang=en-US><span style='mso-spacerun:yes'>          </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'> </span>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| age </span><span lang=en-US><span
style='mso-spacerun:yes'>          </span></span><span lang=zh-CN>| tinyint(3)
unsigned </span><span lang=en-US><span style='mso-spacerun:yes'> </span></span><span
lang=zh-CN>| YES</span><span lang=en-US><span style='mso-spacerun:yes'> 
</span></span><span lang=zh-CN>| </span><span lang=en-US><span
style='mso-spacerun:yes'>             </span></span><span lang=zh-CN>| NULL </span><span
lang=en-US><span style='mso-spacerun:yes'>    </span></span><span lang=zh-CN>| </span><span
lang=en-US><span style='mso-spacerun:yes'>          </span></span><span
lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>| salaty </span><span lang=en-US><span
style='mso-spacerun:yes'>      </span></span><span lang=zh-CN>| float(8,2)
unsigned </span><span lang=en-US><span style='mso-spacerun:yes'> </span></span><span
lang=zh-CN>| YES</span><span lang=en-US><span style='mso-spacerun:yes'> 
</span></span><span lang=zh-CN>| </span><span lang=en-US><span
style='mso-spacerun:yes'>             </span></span><span lang=zh-CN>| NULL </span><span
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span lang=zh-CN>| </span><span
lang=en-US><span style='mso-spacerun:yes'>          </span></span><span
lang=zh-CN>|</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+------------+-----------------------+-------+----------+----------+-------+</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>3 rows in set (0.01 sec)</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Microsoft YaHei UI"' lang=zh-CN>查看数据表创建语句（</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>SHOW CREATE
TABLE</span><span style='font-weight:bold;font-family:"Microsoft YaHei UI"'
lang=zh-CN>）</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> SHOW
     CREATE TABLE </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>语句可以查看已存在数据表的创建语句，为了打印格式更有可读性，建议在数据表名后加上</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>\G</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>进行换行</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US><span style='color:#2E75B5'>SHOW CREATE TABLE </span><span
style='color:#70AD47'>tb_name </span>;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>mysql&gt; </span><span style='color:#2E75B5'
lang=en-US>SHOW CREATE TABLE</span><span lang=zh-CN> </span><span lang=en-US>test</span><span
lang=zh-CN>\G</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>*************************** 1. row ***************************</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>       </span></span><span
lang=en-US><span style='mso-spacerun:yes'>     </span></span><span lang=zh-CN>Table</span><span
lang=en-US> </span><span lang=zh-CN>: info</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>Create Table</span><span lang=en-US> </span><span
lang=zh-CN>: CREATE TABLE `</span><span lang=en-US>test</span><span lang=zh-CN>`
(</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>  </span>`name` varchar(50) DEFAULT
NULL,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>  </span>`pwd` varchar(50) DEFAULT NULL,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>  </span>`email` varchar(50) DEFAULT
NULL,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>  </span>`id` int(11) NOT NULL
AUTO_INCREMENT,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>  </span>PRIMARY KEY (`id`)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>) ENGINE=MyISAM AUTO_INCREMENT=4323693 DEFAULT CHARSET=gbk</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>1 row in set (0.00 sec)</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
