categories:
- MySQL
tags:
- EXPLAIN FORMAT = TRADITIONAL | JSON | TREE
date:
- 2023-4-23 11:14:20
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:12.052in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:12.052in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#2E75B5'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>EXPLAIN</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black' lang=zh-CN>的可选</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'
     lang=en-US> </span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#2E75B5' lang=zh-CN>FORMAT </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black' lang=zh-CN>语句可用于选择输出格式。
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#2E75B5' lang=zh-CN>TRADITIONAL </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black' lang=zh-CN>以表格格式显示输出。如果没有
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#2E75B5' lang=zh-CN>FORMAT </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black' lang=zh-CN>选项，这是默认设置。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'
     lang=zh-CN> JSON </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black' lang=zh-CN>格式以</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;color:black' lang=zh-CN> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'
     lang=zh-CN>格式显示信息。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL 8.0.16 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>及更高版本中，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>TREE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>提供树状输出，与 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>TRADITIONA</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>L </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>格式相比，具有更精确（准确）的查询处理描述；它是显示散列连接用法的唯一格式，并且始终用于
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#2E75B5'>EXPLAIN ANALYZE</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:black'><span style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>{</span><span style='color:#0077AA'>EXPLAIN </span><span
style='color:#A67F59'>| </span><span style='color:#0077AA'>DESCRIBE </span><span
style='color:#A67F59'>| </span><span style='color:#0077AA'>DESC</span><span
style='color:black'>}</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>FORMAT</span><span lang=zh-CN> =
</span><span style='color:#2E75B5' lang=zh-CN>TRADITIONAL</span><span
lang=en-US> </span><span lang=zh-CN>| </span><span style='color:#2E75B5'
lang=zh-CN>JSON</span><span lang=en-US> </span><span lang=zh-CN>| </span><span
style='color:#2E75B5' lang=zh-CN>TREE</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.0541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数格式</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.1694in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.0541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>TRADITIONAL</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.1694in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>以表格形式输出</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.0541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>JSON</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.1694in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>以</span><span style='font-family:"Comic Sans MS"' lang=en-US>JSON</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>嵌套结构输出</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.0541in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>TREE</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.1694in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>以内外层次结构输出</p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MySQL
     8.0.32 </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt' lang=zh-CN>中引入的</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> explain_format </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>系统变量决定了
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#2E75B5' lang=zh-CN>EXPLAIN </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>用于显示查询执行计划时的输出格式。此变量可以采用与 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>FORMAT </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>选项一起使用的任何值，并添加 </span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;color:#2E75B5' lang=zh-CN>DEFAULT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>作为 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>TRADITIONAL </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>的同义词。即当 </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5' lang=zh-CN>EXPLAIN </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>没有</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> FORMAT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>选项时默认由</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>
     explain_format </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>系统变量的默认值</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5' lang=zh-CN>DEFAULT</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>（</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#2E75B5' lang=zh-CN>TRADITIONAL</span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:#2E75B5' lang=zh-CN>） </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=en-US><span style='mso-spacerun:yes'> </span></span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>确定</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#0077AA' lang=zh-CN>EXPLAIN SELECT </span><span
style='font-family:"Comic Sans MS";color:#ED7D31' lang=en-US>*</span><span
style='font-family:"Comic Sans MS";color:#0077AA' lang=zh-CN> FROM </span><span
style='font-family:"Comic Sans MS";color:black' lang=en-US>users</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN> </span><span
style='font-family:"Comic Sans MS";color:#0077AA' lang=zh-CN>WHERE </span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>uname </span><span
style='font-family:"Comic Sans MS";color:#A67F59' lang=zh-CN>Like </span><span
style='font-family:"Comic Sans MS";color:#669900' lang=zh-CN>'</span><span
style='font-family:"Microsoft YaHei UI";color:#669900' lang=zh-CN>张</span><span
style='font-family:"Comic Sans MS";color:#669900' lang=zh-CN>%'</span><span
style='font-family:"Comic Sans MS";color:#909090' lang=zh-CN>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>运行结果如下（</span><span style='font-family:
"Comic Sans MS";color:#2E75B5'>TRADITIONAL</span><span style='font-family:"Microsoft YaHei UI"'>）：</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS"'><span
style='font-size:10.5pt' lang=zh-CN>+----+---------------+----------+-------------+-------+-----------------+------------+----------+--------+-------+----------+---------------+<br>
| id</span><span style='font-size:10.5pt' lang=en-US> </span><span
style='font-size:10.5pt' lang=zh-CN><span style='mso-spacerun:yes'> </span>|
select_type </span><span style='font-size:10.5pt' lang=en-US><span
style='mso-spacerun:yes'> </span></span><span style='font-size:10.5pt'
lang=zh-CN>| table<span style='mso-spacerun:yes'>  </span></span><span
style='font-size:10.5pt' lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='font-size:10.5pt' lang=zh-CN><span style='mso-spacerun:yes'> </span>|
partitions</span><span style='font-size:10.5pt' lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span style='font-size:10.5pt'
lang=zh-CN>| type<span style='mso-spacerun:yes'>  </span>| possible_keys |
key<span style='mso-spacerun:yes'>   </span></span><span style='font-size:10.5pt'
lang=en-US><span style='mso-spacerun:yes'>      </span></span><span
style='font-size:10.5pt' lang=zh-CN><span style='mso-spacerun:yes'>  </span>|
key_len | ref </span><span style='font-size:10.5pt' lang=en-US><span
style='mso-spacerun:yes'>   </span></span><span style='font-size:10.5pt'
lang=zh-CN><span style='mso-spacerun:yes'> </span>| rows | filtered |
Extra<span style='mso-spacerun:yes'>     </span></span><span style='font-size:
10.5pt' lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='font-size:10.5pt' lang=zh-CN><span
style='mso-spacerun:yes'>  </span>|<br>
+----+---------------+----------+-------------+-------+-----------------+------------+----------+--------+-------+----------+---------------+<br>
|<span style='mso-spacerun:yes'>  </span>1 </span><span style='font-size:10.5pt'
lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='font-size:10.5pt' lang=zh-CN>| SIMPLE<span
style='mso-spacerun:yes'>      </span></span><span style='font-size:10.5pt'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='font-size:10.5pt' lang=zh-CN>| country | NULL<span
style='mso-spacerun:yes'>      </span></span><span style='font-size:10.5pt'
lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='font-size:10.5pt' lang=zh-CN><span style='mso-spacerun:yes'> </span>|
range | PRIMARY<span style='mso-spacerun:yes'>       </span>| PRIMARY | 12<span
style='mso-spacerun:yes'>      </span></span><span style='font-size:10.5pt'
lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='font-size:10.5pt' lang=zh-CN>| NULL |<span style='mso-spacerun:yes'>  
</span>17 </span><span style='font-size:10.5pt' lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span style='font-size:10.5pt'
lang=zh-CN>|<span style='mso-spacerun:yes'>   </span>100.00 | Using where
|<br>
+----+---------------+----------+-------------+-------+-----------------+------------+----------+--------+-------+----------+---------------+</span><span
style='font-size:12.0pt' lang=zh-CN><br>
1 row in set, 1 warning (0.00 sec)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>运行结果如下（</span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>JSON</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>）：</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>{</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>  </span>&quot;query_block&quot;: {</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>&quot;select_id&quot;: 1,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>&quot;cost_info&quot;: {</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>      </span>&quot;query_cost&quot;:
&quot;1.16&quot;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>},</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>&quot;table&quot;: {</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>      </span>&quot;table_name&quot;:
&quot;users&quot;,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>      </span>&quot;access_type&quot;:
&quot;range&quot;,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>      </span>&quot;possible_keys&quot;:
[</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span>&quot;uname&quot;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>      </span>],</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>      </span>&quot;key&quot;:
&quot;uname&quot;,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>      </span>&quot;used_key_parts&quot;:
[</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span>&quot;uname&quot;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>      </span>],</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>      </span>&quot;key_length&quot;:
&quot;82&quot;,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>     
</span>&quot;rows_examined_per_scan&quot;: 2,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>     
</span>&quot;rows_produced_per_join&quot;: 2,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>      </span>&quot;filtered&quot;:
&quot;100.00&quot;,</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'><span style='mso-spacerun:yes'>     
</span>&quot;index_condition&quot;: &quot;(`mybatis`.`users`.`uname` like '</span><span
style='font-family:"Microsoft YaHei UI"'>张</span><span style='font-family:"Comic Sans MS"'>%')&quot;,</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>      </span>&quot;cost_info&quot;: {</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span>&quot;read_cost&quot;:
&quot;0.96&quot;,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span>&quot;eval_cost&quot;:
&quot;0.20&quot;,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span>&quot;prefix_cost&quot;:
&quot;1.16&quot;,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>       
</span>&quot;data_read_per_join&quot;: &quot;384&quot;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>      </span>},</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>      </span>&quot;used_columns&quot;: [</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span>&quot;uu&quot;,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span>&quot;uid&quot;,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span>&quot;uname&quot;,</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span>&quot;uage&quot;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>      </span>]</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>  </span>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>运行结果如下（</span><span
style='font-family:"Comic Sans MS";color:#2E75B5' lang=en-US>TREE</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>）：</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>-&gt; Index range scan on users using uname
over ('</span><span style='font-family:"Microsoft YaHei UI"'>张</span><span
style='font-family:"Comic Sans MS"'>' &lt;= uname &lt;= '</span><span
style='font-family:"Microsoft YaHei UI"'>张</span><span style='font-family:"Comic Sans MS"'>????????????????????????????????????????????????????????????????????????????'),
with index condition: (users.uname like '</span><span style='font-family:"Microsoft YaHei UI"'>张</span><span
style='font-family:"Comic Sans MS"'>%')<span style='mso-spacerun:yes'> 
</span>(cost=1.16 rows=2)</span></p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>可以使用以下语句查看</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>explain_format</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的默认值，设置的值将直接覆盖原有的默认值</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>SELECT </span><span style='color:#D88B00'>@@explain_format</span><span
style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果如下：</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>+-----------------------+<br>
| @@explain_format |<br>
+-----------------------+<br>
| TRADITIONAL<span style='mso-spacerun:yes'>     
</span>|<br>
+-----------------------+<br>
1 row in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>也可以通过系统参数</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US><span
     style='mso-spacerun:yes'>  </span></span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>explain_format</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>设置输出格式</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>SET </span><span style='font-style:italic;
color:#D88B00'>@@explain_format</span><span style='color:#A67F59'>=</span><span
style='color:#0077AA'>DEFAULT</span><span style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>SET </span><span style='color:#D88B00'>@@explain_format</span><span
style='color:#A67F59'>=</span><span style='color:#2E75B5'>TRADITIONAL</span><span
style='color:#909090'>; </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果如下：</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.00 sec)</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>SET </span><span style='color:#D88B00'>@@explain_format</span><span
style='color:#A67F59'>=</span><span style='color:#2E75B5'>JSON</span><span
style='color:#909090'>; </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果如下</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.00 sec)</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>SET </span><span style='color:#D88B00'>@@explain_format</span><span
style='color:#A67F59'>=</span><span style='color:#0077AA'>TREE</span><span
style='color:#909090'>; </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果如下：</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>默认情况下，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>EXPLAIN</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>会包含以下参数的输出：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.259in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>默认输出参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.3in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:white'><span style='font-weight:
  bold;font-family:"Comic Sans MS"'>JSON </span><span style='font-weight:bold;
  font-family:"Microsoft YaHei UI"'>名称</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:8.9451in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.259in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>id</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>select_id</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:9.0208in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=zh-CN>SELECT</span><span style='font-family:"Comic Sans MS"' lang=en-US>
  </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>标识符。这是查询中选择的顺序编号。如果行是指其他行的连接结果，则该值可以为</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>null</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>。在这种情况下，表列显示一个值</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>&lt;union</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>M</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>，</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>N</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>&gt;</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的值，以指示该行是指具有</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>M</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>和</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>N</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>ID</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>值的行的结合。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.259in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>select_type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>None</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:9.2187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=zh-CN>SELECT</span><span style='font-family:"Comic Sans MS"' lang=en-US>
  </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的类型，可以是下表中显示的任何类型。</span></p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>类型</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:2.2055in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt;color:white'><span style='font-weight:
    bold;font-family:"Comic Sans MS"'>JSON </span><span style='font-weight:
    bold;font-family:"Microsoft YaHei UI"'>名称</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:4.6277in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>SIMPLE</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.2055in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>None</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6277in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>简单查询（不使用</span><span
    style='font-family:"Comic Sans MS"'>UNION</span><span style='font-family:
    "Microsoft YaHei UI"'>或子查询）</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>PRIMARY</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.2055in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>None</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6277in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>最外层的查询</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>UNION</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.2055in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>None</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.7597in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>在</span><span
    style='font-family:"Comic Sans MS"'>UNION</span><span style='font-family:
    "Microsoft YaHei UI"'>中的第二个和随后的</span><span style='font-family:"Comic Sans MS"'>SELECT</span><span
    style='font-family:"Microsoft YaHei UI"'>被标记为</span><span style='font-family:
    "Comic Sans MS"'>UNION</span><span style='font-family:"Microsoft YaHei UI"'>。如果</span><span
    style='font-family:"Comic Sans MS"'>UNION</span><span style='font-family:
    "Microsoft YaHei UI"'>被</span><span style='font-family:"Comic Sans MS"'>FROM</span><span
    style='font-family:"Microsoft YaHei UI"'>子句中的子查询包含，那么它的第一个</span><span
    style='font-family:"Comic Sans MS"'>SELECT</span><span style='font-family:
    "Microsoft YaHei UI"'>会被标记为</span><span style='font-family:"Comic Sans MS"'>DERIVED</span><span
    style='font-family:"Microsoft YaHei UI"'>。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>DEPENDENT
    UNION</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.2055in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>dependent(true)</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6562in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>UNION
    </span><span style='font-family:"Microsoft YaHei UI"'>中的第二个或之后的</span><span
    style='font-family:"Comic Sans MS"'> SELECT </span><span style='font-family:
    "Microsoft YaHei UI"'>语句，依赖于外部的查询</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>UNION
    RESULT</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.2055in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>union_result</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6277in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>UNION</span><span
    style='font-family:"Microsoft YaHei UI"'>的结果。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>SUBQUERY</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.2055in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>None</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6277in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>子查询。子查询中的第一个</span><span
    style='font-family:"Comic Sans MS"'> SELECT</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>DEPENDENT
    SUBQUERY</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.2055in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>dependent(true)</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6277in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>依赖子查询。子查询中的第一个</span><span
    style='font-family:"Comic Sans MS"'>SELECT</span><span style='font-family:
    "Microsoft YaHei UI"'>，依赖于外部查询</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>DERIVED</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.2055in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>None</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6819in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>派生表。用来表示包含在</span><span
    style='font-family:"Comic Sans MS"'>FROM</span><span style='font-family:
    "Microsoft YaHei UI"'>子句的子查询中的</span><span style='font-family:"Comic Sans MS"'>SELECT</span><span
    style='font-family:"Microsoft YaHei UI"'>，</span><span style='font-family:
    "Comic Sans MS"'>MySQL</span><span style='font-family:"Microsoft YaHei UI"'>会递归执行并将结果放到一个临时表中。</span><span
    style='font-family:"Comic Sans MS"'>MySQL</span><span style='font-family:
    "Microsoft YaHei UI"'>内部将其称为是</span><span style='font-family:"Comic Sans MS"'>Derived
    table</span><span style='font-family:"Microsoft YaHei UI"'>（派生表），因为该临时表是从子查询派生出来的</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>DEPENDENT
    DERIVED</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.2055in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>dependent(true)</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6277in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>派生表依赖于另一个表</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>MATERIALIZED</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.2055in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>materialized_from_subquery</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.6277in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>物化子查询</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.1465in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>UNCACHEABLE
    SUBQUERY</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.2055in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>cacheable(false)</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.6562in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>不可缓存的子查询。结果无法缓存，必须针对外部查询的每一行重新评估</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.1388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>UNCACHEABLE
    UNION</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.2055in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>cacheable(false)</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.7597in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>不可缓存的结果合并。</span><span style='font-family:"Comic Sans MS"'
    lang=zh-CN>UNION</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> </span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>属于</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN>UNCACHEABLE SUBQUERY </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>中第二个或之后的</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN>SELECT </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>语句</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>DEPENDENT
  </span><span style='font-family:"Microsoft YaHei UI"'>通常表示使用相关子查询</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>依赖子查询评估与不可访问子查询评估不同。对于</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>DEPENDENT
  SUBQUERY</span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>，对于来自其外部上下文的变量的每一组不同值，只对子查询重新求值一次。对于不可访问的子查询，将为外部上下文的每一行重新评估子查询。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:12.0pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>非</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>select</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>语句的</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>select_type</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>值显示受影响表的语句类型。例如，对于</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>DELETE</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>语句，</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>select_type</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>为</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>DELETE</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.259in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>table</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>table_name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:8.9451in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>输出行所引用的表的名称。可以是以下值之一：</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.4097in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>值</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:5.4701in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.4097in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>＜</span><span
    style='font-family:"Comic Sans MS"'>unionM</span><span style='font-family:
    "Microsoft YaHei UI"'>，</span><span style='font-family:"Comic Sans MS"'>N</span><span
    style='font-family:"Microsoft YaHei UI"'>＞</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:5.4701in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>行是指</span><span
    style='font-family:"Comic Sans MS"'>id</span><span style='font-family:"Microsoft YaHei UI"'>值为</span><span
    style='font-family:"Comic Sans MS"'>M</span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
    style='font-family:"Comic Sans MS"'>N</span><span style='font-family:"Microsoft YaHei UI"'>的行的并集。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.4097in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>＜</span><span
    style='font-family:"Comic Sans MS"'>derivedN</span><span style='font-family:
    "Microsoft YaHei UI"'>＞</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.5395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>该行引用</span><span
    style='font-family:"Comic Sans MS"'>id</span><span style='font-family:"Microsoft YaHei UI"'>值为</span><span
    style='font-family:"Comic Sans MS"'>N</span><span style='font-family:"Microsoft YaHei UI"'>的行的派生表结果。例如，派生表可能来自</span><span
    style='font-family:"Comic Sans MS"'>from</span><span style='font-family:
    "Microsoft YaHei UI"'>子句中的子查询。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.4097in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>＜</span><span
    style='font-family:"Comic Sans MS"'>subqueryN</span><span style='font-family:
    "Microsoft YaHei UI"'>＞</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:5.4701in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>行是指</span><span
    style='font-family:"Comic Sans MS"'>id</span><span style='font-family:"Microsoft YaHei UI"'>值为</span><span
    style='font-family:"Comic Sans MS"'>N</span><span style='font-family:"Microsoft YaHei UI"'>的行的物化子查询的结果。</span></p>
    </td>
   </tr>
  </table>
  </div>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.259in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>partitions</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>partitions</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.9451in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>匹配的分区。查询将从中匹配记录的分区。对于未分区的表，该值为</span><span
  style='font-family:"Comic Sans MS"'>NULL</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.259in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>access_type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:9.2236in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>连接类型，描述了表是如何连接的。</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.3611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>类型</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:3.6868in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:3.9298in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>示例</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.3611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>system</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.7062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>该表只有一行（</span><span
    style='font-family:"Comic Sans MS"'>=</span><span style='font-family:"Microsoft YaHei UI"'>系统表）。这是</span><span
    style='font-family:"Comic Sans MS"'>const</span><span style='font-family:
    "Microsoft YaHei UI"'>联接类型的一种特殊情况。</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.9104in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.3611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>const</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.7062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>该表最多有一个匹配行，该行在查询开始时读取。因为只有一行，所以优化器的其余部分可以将此行中列的值视为常量。</span><span
    style='font-family:"Comic Sans MS"'>const</span><span style='font-family:
    "Microsoft YaHei UI"'>表非常快，因为它们只读取一次。</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>const</span><span
    style='font-family:"Microsoft YaHei UI"'>用于将</span><span style='font-family:
    "Comic Sans MS"'>PRIMARY KEY</span><span style='font-family:"Microsoft YaHei UI"'>或</span><span
    style='font-family:"Comic Sans MS"'>UNIQUE</span><span style='font-family:
    "Microsoft YaHei UI"'>索引的所有部分与常数值进行比较</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.9583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'
    lang=zh-CN>tbl_name </span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>可以用作</span><span style='font-family:"Comic Sans MS"' lang=en-US>
    </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>const</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>表</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>SELECT</span> * <span style='color:#2E75B5'>FROM</span>
    tbl_name <span style='color:#2E75B5'>WHERE</span> primary_key=1;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>SELECT</span> * <span style='color:#2E75B5'>FROM</span>
    tbl_name</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>WHERE</span> primary_key_part1=1 </p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>AND</span> primary_key_part2=2;</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.3611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>eq_ref</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.7062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>对于先前表中行的每个组合，从该表中读取一行。除了</span><span
    style='font-family:"Comic Sans MS"'> system </span><span style='font-family:
    "Microsoft YaHei UI"'>和</span><span style='font-family:"Comic Sans MS"'>
    const </span><span style='font-family:"Microsoft YaHei UI"'>类型，这是最好的连接类型。当连接使用索引的所有部分并且索引是</span><span
    style='font-family:"Comic Sans MS"'> PRIMARY KEY </span><span
    style='font-family:"Microsoft YaHei UI"'>或</span><span style='font-family:
    "Comic Sans MS"'> UNIQUE NOT NULL </span><span style='font-family:"Microsoft YaHei UI"'>索引时，就会使用它。</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>eq_ref
    </span><span style='font-family:"Microsoft YaHei UI"'>可用于使用</span><span
    style='font-family:"Comic Sans MS"'> = </span><span style='font-family:
    "Microsoft YaHei UI"'>运算符进行比较的索引列。比较值可以是常量或表达式，它使用在此表之前读取的表中的列</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.0319in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>使用</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>
    eq_ref </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>连接来处理</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN> ref_table</span><span
    style='font-family:"Comic Sans MS"' lang=en-US>:</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>SELECT</span> * <span style='color:#2E75B5'>FROM</span>
    ref_table,other_table</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>WHERE</span> ref_table.key_column=other_table.column;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>SELECT</span> * <span style='color:#2E75B5'>FROM</span>
    ref_table,other_table</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>WHERE</span>
    ref_table.key_column_part1=other_table.column</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>AND</span> ref_table.key_column_part2=1;</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.3611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>ref</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.7062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>对于先前表中行的每个组合，从该表中读取具有匹配索引值的所有行。如果连接仅使用键的最左边前缀，或者如果键不是</span><span
    style='font-family:"Comic Sans MS"'> PRIMARY KEY </span><span
    style='font-family:"Microsoft YaHei UI"'>或</span><span style='font-family:
    "Comic Sans MS"'> UNIQUE </span><span style='font-family:"Microsoft YaHei UI"'>索引（换句话说，如果连接不能根据键值选择单个行），则使用</span><span
    style='font-family:"Comic Sans MS"'> ref</span><span style='font-family:
    "Microsoft YaHei UI"'>。如果使用的键只匹配几行，这是一个很好的连接类型。</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>ref
    </span><span style='font-family:"Microsoft YaHei UI"'>可用于使用</span><span
    style='font-family:"Comic Sans MS"'> = </span><span style='font-family:
    "Microsoft YaHei UI"'>或</span><span style='font-family:"Comic Sans MS"'>
    &lt;=&gt; </span><span style='font-family:"Microsoft YaHei UI"'>运算符进行比较的索引列</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.0319in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>使用</span><span
    style='font-family:"Comic Sans MS"'> ref join </span><span
    style='font-family:"Microsoft YaHei UI"'>来处理</span><span style='font-family:
    "Comic Sans MS"'> ref_table</span><span style='font-family:"Microsoft YaHei UI"'>：</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>SELECT</span> * <span style='color:#2E75B5'>FROM </span><span
    style='mso-spacerun:yes'> </span>ref_table <span style='color:#2E75B5'>WHERE</span>
    key_column=expr;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>SELECT</span> * <span style='color:#2E75B5'>FROM</span>
    ref_table,other_table</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>WHERE</span> ref_table.key_column=other_table.column;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>SELECT</span> * <span style='color:#2E75B5'>FROM</span>
    ref_table,other_table</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>WHERE</span>
    ref_table.key_column_part1=other_table.column</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>AND</span> ref_table.key_column_part2=1;</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.3611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>fulltext</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.6868in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>使用</span><span
    style='font-family:"Comic Sans MS"'> FULLTEXT </span><span
    style='font-family:"Microsoft YaHei UI"'>索引执行连接</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.9298in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt;
    color:#2E75B5'>&nbsp;</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.3611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>ref_or_null</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.7062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>这种连接类型类似于</span><span
    style='font-family:"Comic Sans MS"'>ref</span><span style='font-family:
    "Microsoft YaHei UI"'>，但除了</span><span style='font-family:"Comic Sans MS"'>MySQL</span><span
    style='font-family:"Microsoft YaHei UI"'>对包含</span><span style='font-family:
    "Comic Sans MS"'>NULL</span><span style='font-family:"Microsoft YaHei UI"'>值的行进行额外搜索之外。这种联接类型优化最常用于解析子查询</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.9583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>使用</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>
    ref_or_null </span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>连接来处理</span><span style='font-family:"Comic Sans MS"'
    lang=zh-CN> ref_table</span><span style='font-family:"Comic Sans MS"'
    lang=en-US>:</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>SELECT</span> * <span style='color:#2E75B5'>FROM</span>
    ref_table</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>WHERE</span> key_column=expr <span style='color:#2E75B5'>OR</span>
    key_column <span style='color:#2E75B5'>IS NULL</span>;</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.3611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>index_merge</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.7062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>此连接类型表示使用索引合并优化。在这种情况下，输出行中的键列包含使用的索引列表，</span><span
    style='font-family:"Comic Sans MS"'>key_len </span><span style='font-family:
    "Microsoft YaHei UI"'>包含使用的索引的最长键部分列表。</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.9104in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt;
    color:#2E75B5'>&nbsp;</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.3611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>unique_subquery</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.7062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>unique_subquery
    </span><span style='font-family:"Microsoft YaHei UI"'>只是一个索引查找函数，它完全取代了子查询以提高效率。</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.9583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>对于以下形式的某些</span><span
    style='font-family:"Comic Sans MS"'> IN </span><span style='font-family:
    "Microsoft YaHei UI"'>子查询，此类型替换</span><span style='font-family:"Comic Sans MS"'>
    eq_ref</span><span style='font-family:"Microsoft YaHei UI"'>：</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>value <span
    style='color:#2E75B5'>IN</span> (<span style='color:#2E75B5'>SELECT</span>
    primary_key </p>
    <p style='margin-left:.375in;font-family:"Comic Sans MS";
    font-size:10.5pt'><span style='color:#2E75B5' lang=en-US><span
    style='mso-spacerun:yes'>             </span></span><span style='color:
    #2E75B5' lang=zh-CN>FROM</span><span lang=zh-CN> single_table </span></p>
    <p style='margin-left:.375in;font-family:"Comic Sans MS";
    font-size:10.5pt'><span style='color:#2E75B5' lang=en-US><span
    style='mso-spacerun:yes'>             </span></span><span style='color:
    #2E75B5' lang=zh-CN>WHERE</span><span lang=zh-CN> some_expr)</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.3611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>index_subquery</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.6868in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>这种连接类型类似于</span><span
    style='font-family:"Comic Sans MS"'> unique_subquery</span><span
    style='font-family:"Microsoft YaHei UI"'>。它取代了</span><span
    style='font-family:"Comic Sans MS"'> IN </span><span style='font-family:
    "Microsoft YaHei UI"'>子查询，但它适用于特定的子查询中的非唯一索引</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.9298in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>value <span
    style='color:#2E75B5'>IN</span> (<span style='color:#2E75B5'>SELECT</span>
    key_column </p>
    <p style='margin-left:.375in;font-family:"Comic Sans MS";
    font-size:10.5pt'><span style='color:#2E75B5' lang=en-US><span
    style='mso-spacerun:yes'>             </span></span><span style='color:
    #2E75B5' lang=zh-CN>FROM</span><span lang=zh-CN> single_table </span></p>
    <p style='margin-left:.375in;font-family:"Comic Sans MS";
    font-size:10.5pt'><span style='color:#2E75B5' lang=en-US><span
    style='mso-spacerun:yes'>             </span></span><span style='color:
    #2E75B5' lang=zh-CN>WHERE</span><span lang=zh-CN> some_expr)</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.3611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>range</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.7062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>仅检索给定范围内的行，使用索引来选择行。输出行中的键列指示使用了哪个索引。</span><span
    style='font-family:"Comic Sans MS"'> key_len </span><span style='font-family:
    "Microsoft YaHei UI"'>包含使用过的最长密钥部分。此类型的</span><span style='font-family:
    "Comic Sans MS"'> ref </span><span style='font-family:"Microsoft YaHei UI"'>列为</span><span
    style='font-family:"Comic Sans MS"'> NULL</span><span style='font-family:
    "Microsoft YaHei UI"'>。</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>当使用</span><span
    style='font-family:"Comic Sans MS"'> =</span><span style='font-family:"Microsoft YaHei UI"'>、</span><span
    style='font-family:"Comic Sans MS"'>&lt;&gt;</span><span style='font-family:
    "Microsoft YaHei UI"'>、</span><span style='font-family:"Comic Sans MS"'>&gt;</span><span
    style='font-family:"Microsoft YaHei UI"'>、</span><span style='font-family:
    "Comic Sans MS"'>&gt;=</span><span style='font-family:"Microsoft YaHei UI"'>、</span><span
    style='font-family:"Comic Sans MS"'>&lt;</span><span style='font-family:
    "Microsoft YaHei UI"'>、</span><span style='font-family:"Comic Sans MS"'>&lt;=</span><span
    style='font-family:"Microsoft YaHei UI"'>、</span><span style='font-family:
    "Comic Sans MS"'>IS NULL</span><span style='font-family:"Microsoft YaHei UI"'>、</span><span
    style='font-family:"Comic Sans MS"'>&lt;=&gt;</span><span style='font-family:
    "Microsoft YaHei UI"'>、</span><span style='font-family:"Comic Sans MS"'>BETWEEN</span><span
    style='font-family:"Microsoft YaHei UI"'>、</span><span style='font-family:
    "Comic Sans MS"'>LIKE </span><span style='font-family:"Microsoft YaHei UI"'>或</span><span
    style='font-family:"Comic Sans MS"'> IN() </span><span style='font-family:
    "Microsoft YaHei UI"'>运算符将键列与常量进行比较时，可以使用范围</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.9583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>SELECT</span> * <span style='color:#2E75B5'>FROM</span>
    tbl_name</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>WHERE</span> key_column = 10;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>SELECT</span> * <span style='color:#2E75B5'>FROM</span>
    tbl_name</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>WHERE</span> key_column <span style='color:#2E75B5'>BETWEEN</span>
    10 and 20;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5' lang=zh-CN>SELECT</span><span lang=zh-CN> * </span><span
    style='color:#2E75B5' lang=zh-CN>FROM</span><span style='color:#2E75B5'
    lang=en-US> </span><span lang=zh-CN>tbl_name</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>WHERE</span> key_column <span style='color:#2E75B5'>IN</span>
    (10,20,30);</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>SELECT</span> * <span style='color:#2E75B5'>FROM</span>
    tbl_name</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='color:#2E75B5'>WHERE</span> key_part1 = 10 <span style='color:#2E75B5'>AND</span>
    key_part2 <span style='color:#2E75B5'>IN</span> (10,20,30);</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.3611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>index</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.6888in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>索引连接类型与</span><span
    style='font-family:"Comic Sans MS"'>ALL</span><span style='font-family:
    "Microsoft YaHei UI"'>相同，只是扫描索引树。这有两种情况：</span></p>
    <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
     margin-bottom:0in'>
     <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
         style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>如果索引是查询的覆盖索引，并且可以用来满足表格中所需的所有数据，则仅扫描索引树。在这种情况下，额外的列使用索引表示。仅索引扫描通常比所有扫描都快，因为索引的大小通常小于表数据。</span></li>
     <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
         style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>使用索引的读数进行完整的表扫描，以按索引顺序查找数据行。使用索引不会出现在额外的列中。</span></li>
    </ul>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>当查询仅使用属于单个索引的列时，</span><span
    style='font-family:"Comic Sans MS"'>MySQL </span><span style='font-family:
    "Microsoft YaHei UI"'>可以使用此连接类型</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.9277in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.3611in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>ALL</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.7062in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>对先前表中的每个行组合进行全表扫描。如果表是第一个未标记为</span><span
    style='font-family:"Comic Sans MS"'> const </span><span style='font-family:
    "Microsoft YaHei UI"'>的表，这通常是不好的，并且在所有其他情况下通常非常糟糕。通常，您可以通过添加索引来避免</span><span
    style='font-family:"Comic Sans MS"'> ALL</span><span style='font-family:
    "Microsoft YaHei UI"'>，这些索引允许根据常量值或早期表中的列值从表中检索行</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.9104in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
    </td>
   </tr>
  </table>
  </div>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.259in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>possible_keys</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>possible_keys</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:9.0368in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>可供选择的索引。指示</span><span
  style='font-family:"Comic Sans MS"'> MySQL </span><span style='font-family:
  "Microsoft YaHei UI"'>可以从中选择的索引来查找该表中的行。</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>此属性完全独立于</span><span
  style='font-family:"Comic Sans MS"'> EXPLAIN </span><span style='font-family:
  "Microsoft YaHei UI"'>输出中显示的表的顺序。这意味着</span><span style='font-family:"Comic Sans MS"'>
  possible_keys </span><span style='font-family:"Microsoft YaHei UI"'>中的某些键在实践中可能无法用于生成的表顺序。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果为</span><span
  style='font-family:"Comic Sans MS"'> NULL</span><span style='font-family:
  "Microsoft YaHei UI"'>（或在</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>格式的输出中未定义），则没有相关索引。在这种情况下，您可以通过检查</span><span
  style='font-family:"Comic Sans MS"'> WHERE </span><span style='font-family:
  "Microsoft YaHei UI"'>子句来检查它是否引用适合索引的某个或多个列来提高查询的性能。如果是这样，请创建一个适当的索引并再次使用</span><span
  style='font-family:"Comic Sans MS"'> EXPLAIN </span><span style='font-family:
  "Microsoft YaHei UI"'>检查查询</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.259in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>key</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>key</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:9.075in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>实际选择的索引。如果</span><span
  style='font-family:"Comic Sans MS"'> MySQL </span><span style='font-family:
  "Microsoft YaHei UI"'>决定使用</span><span style='font-family:"Comic Sans MS"'>
  possible_keys </span><span style='font-family:"Microsoft YaHei UI"'>索引之一来查找行，则该索引被列为键值。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>key
  </span><span style='font-family:"Microsoft YaHei UI"'>可能会命名一个在</span><span
  style='font-family:"Comic Sans MS"'> possible_keys </span><span
  style='font-family:"Microsoft YaHei UI"'>值中不存在的索引。如果</span><span
  style='font-family:"Comic Sans MS"'> possible_keys </span><span
  style='font-family:"Microsoft YaHei UI"'>索引都不适合查找行，但查询选择的所有列都是某个其他索引的列，则可能会发生这种情况。也就是说，命名索引覆盖了选定的列，因此虽然它不用于确定检索哪些行，但索引扫描比数据行扫描更有效。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>对于</span><span
  style='font-family:"Comic Sans MS"'> InnoDB</span><span style='font-family:
  "Microsoft YaHei UI"'>，即使查询还选择了主键，二级索引也可能覆盖选定的列，因为</span><span
  style='font-family:"Comic Sans MS"'> InnoDB </span><span style='font-family:
  "Microsoft YaHei UI"'>将主键值与每个二级索引一起存储。如果</span><span style='font-family:"Comic Sans MS"'>
  key </span><span style='font-family:"Microsoft YaHei UI"'>为</span><span
  style='font-family:"Comic Sans MS"'> NULL</span><span style='font-family:
  "Microsoft YaHei UI"'>，则</span><span style='font-family:"Comic Sans MS"'>
  MySQL </span><span style='font-family:"Microsoft YaHei UI"'>找不到可用于更有效地执行查询的索引。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>要强制</span><span
  style='font-family:"Comic Sans MS"'> MySQL </span><span style='font-family:
  "Microsoft YaHei UI"'>使用或忽略</span><span style='font-family:"Comic Sans MS"'>
  possible_keys </span><span style='font-family:"Microsoft YaHei UI"'>列中列出的索引，请在查询中使用</span><span
  style='font-family:"Comic Sans MS"'> FORCE INDEX</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.259in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>key_len</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>key_length</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.9736in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>所选键的长度。</span><span
  style='font-family:"Comic Sans MS"'>key_len </span><span style='font-family:
  "Microsoft YaHei UI"'>的值使您能够确定</span><span style='font-family:"Comic Sans MS"'>
  MySQL </span><span style='font-family:"Microsoft YaHei UI"'>实际使用多部分键的多少部分。如果键列为</span><span
  style='font-family:"Comic Sans MS"'> NULL</span><span style='font-family:
  "Microsoft YaHei UI"'>，则</span><span style='font-family:"Comic Sans MS"'>
  key_len </span><span style='font-family:"Microsoft YaHei UI"'>列也为</span><span
  style='font-family:"Comic Sans MS"'> NULL</span><span style='font-family:
  "Microsoft YaHei UI"'>。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>由于键存储格式的原因，可以为</span><span
  style='font-family:"Comic Sans MS"'> NULL </span><span style='font-family:
  "Microsoft YaHei UI"'>的列的键长度比</span><span style='font-family:"Comic Sans MS"'>
  NOT NULL </span><span style='font-family:"Microsoft YaHei UI"'>列的键长度长一倍</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.259in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>ref</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>ref</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:8.9736in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>与索引比较的列。</span><span
  style='font-family:"Comic Sans MS"'>ref</span><span style='font-family:"Microsoft YaHei UI"'>列显示将哪些列或常量与键列中命名的索引进行比较，以便从表中选择行。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果值是</span><span
  style='font-family:"Comic Sans MS"'>func</span><span style='font-family:"Microsoft YaHei UI"'>，则使用的值是某个函数的结果。要查看哪个函数，请在</span><span
  style='font-family:"Comic Sans MS"'>EXPLAIN</span><span style='font-family:
  "Microsoft YaHei UI"'>后面使用</span><span style='font-family:"Comic Sans MS"'>SHOW
  WARNINGS</span><span style='font-family:"Microsoft YaHei UI"'>来查看扩展的</span><span
  style='font-family:"Comic Sans MS"'>EXPLAIN</span><span style='font-family:
  "Microsoft YaHei UI"'>输出。函数实际上可能是一个运算符，例如算术运算符。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.259in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>rows</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>rows</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:8.9451in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>rows</span><span
  style='font-family:"Microsoft YaHei UI"'>列表示</span><span style='font-family:
  "Comic Sans MS"'>MySQL</span><span style='font-family:"Microsoft YaHei UI"'>认为执行查询必须检查的行数。</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>对于</span><span
  style='font-family:"Comic Sans MS"'>InnoDB</span><span style='font-family:
  "Microsoft YaHei UI"'>表，这个数字只是一个估计值，可能并不总是准确的。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.259in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>filtered</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>filtered</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:8.9881in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>已筛选列表示按表条件筛选的表行的估计百分比。最大值为</span><span
  style='font-family:"Comic Sans MS"'>100</span><span style='font-family:"Microsoft YaHei UI"'>，这意味着没有对行进行筛选。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>从</span><span
  style='font-family:"Comic Sans MS"'>100</span><span style='font-family:"Microsoft YaHei UI"'>开始递减的值表示过滤量的增加。</span><span
  style='font-family:"Comic Sans MS"'>rows</span><span style='font-family:"Microsoft YaHei UI"'>显示检查的估计行数，</span><span
  style='font-family:"Comic Sans MS"'>rows</span><span style='font-family:"Microsoft YaHei UI"'>×</span><span
  style='font-family:"Comic Sans MS"'>filtered</span><span style='font-family:
  "Microsoft YaHei UI"'>显示与下表连接的行数。例如，如果行数为</span><span style='font-family:
  "Comic Sans MS"'>1000</span><span style='font-family:"Microsoft YaHei UI"'>，过滤后的行数为</span><span
  style='font-family:"Comic Sans MS"'>50.00</span><span style='font-family:
  "Microsoft YaHei UI"'>（</span><span style='font-family:"Comic Sans MS"'>50%</span><span
  style='font-family:"Microsoft YaHei UI"'>），则要与下表连接的行数是</span><span
  style='font-family:"Comic Sans MS"'>1000</span><span style='font-family:"Microsoft YaHei UI"'>×</span><span
  style='font-family:"Comic Sans MS"'>50%=500</span><span style='font-family:
  "Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.259in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>e</span><span lang=zh-CN>xtra</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>None</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:9.2187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>包含有关</span><span
  style='font-family:"Comic Sans MS"'> MySQL </span><span style='font-family:
  "Microsoft YaHei UI"'>如何解析查询的附加信息。</span></p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>附加信息</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt;color:white'><span style='font-weight:
    bold;font-family:"Comic Sans MS"' lang=en-US>JSON </span><span
    style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>附加信息</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:3.943in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Backward
    index scan</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>backward_index_scan</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.075in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>优化器能够在</span><span
    style='font-family:"Comic Sans MS"'> InnoDB </span><span style='font-family:
    "Microsoft YaHei UI"'>表上使用降序索引。与使用索引一起显示</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Child of
    'table' pushed join@1</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'><span
    style='mso-spacerun:yes'> </span>message text</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.0298in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>该表被引用为连接中表的子表，可以向下推送到</span><span
    style='font-family:"Comic Sans MS"'> NDB </span><span style='font-family:
    "Microsoft YaHei UI"'>内核。仅在启用下推连接时适用于</span><span style='font-family:"Comic Sans MS"'>
    NDB Cluster</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>const
    row not found</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>const_row_not_found</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.9715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>对于诸如</span><span
    style='font-family:"Comic Sans MS"'> SELECT ... FROM tbl_name </span><span
    style='font-family:"Microsoft YaHei UI"'>之类的查询，表是空的。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Deleting
    all rows</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.0673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>对于</span><span
    style='font-family:"Comic Sans MS"'> DELETE</span><span style='font-family:
    "Microsoft YaHei UI"'>，某些存储引擎（如</span><span style='font-family:"Comic Sans MS"'>
    MyISAM</span><span style='font-family:"Microsoft YaHei UI"'>）支持一种处理程序方法，该方法可以简单快速地删除所有表行。如果引擎使用此优化，则会显示此额外值</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Distinct</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>distinct</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.9979in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>MySQL</span><span
    style='font-family:"Microsoft YaHei UI"'>正在寻找不同的值，因此在找到第一个匹配的行后，它将停止搜索当前行组合的更多行</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>FirstMatch(tbl_name)</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>first_match</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.9715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>半联接</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN>FirstMatch</span><span
    style='font-family:"Comic Sans MS"' lang=en-US> </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>连接快捷方式策略用于</span><span
    style='font-family:"Comic Sans MS"' lang=zh-CN>tbl_name</span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Full
    scan on NULL key</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.0673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>当优化器无法使用索引查找访问方法时，作为后备策略的子查询优化会出现这种情况。</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Impossible
    HAVING</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.943in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>HAVING</span><span
    style='font-family:"Microsoft YaHei UI"'>子句始终为</span><span
    style='font-family:"Comic Sans MS"'>false</span><span style='font-family:
    "Microsoft YaHei UI"'>，并且不能选择任何行</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Impossible
    WHERE</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.943in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>WHERE
    </span><span style='font-family:"Microsoft YaHei UI"'>子句始终为</span><span
    style='font-family:"Comic Sans MS"'> false</span><span style='font-family:
    "Microsoft YaHei UI"'>，并且不能选择任何行。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Impossible
    WHERE noticed after reading const tables</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.9715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>MySQL</span><span
    style='font-family:"Microsoft YaHei UI"'>已经读取了所有的</span><span
    style='font-family:"Comic Sans MS"'>const</span><span style='font-family:
    "Microsoft YaHei UI"'>（和</span><span style='font-family:"Comic Sans MS"'>system</span><span
    style='font-family:"Microsoft YaHei UI"'>）表，并注意到</span><span
    style='font-family:"Comic Sans MS"'>WHERE</span><span style='font-family:
    "Microsoft YaHei UI"'>子句总是</span><span style='font-family:"Comic Sans MS"'>false</span><span
    style='font-family:"Microsoft YaHei UI"'>。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>LooseScan(m..n)</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.9715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>使用半连接</span><span
    style='font-family:"Comic Sans MS"'> LooseScan </span><span
    style='font-family:"Microsoft YaHei UI"'>策略。</span><span style='font-family:
    "Comic Sans MS"'> m </span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
    style='font-family:"Comic Sans MS"'> n </span><span style='font-family:
    "Microsoft YaHei UI"'>是关键部件号。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>No
    matching min/max row</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.9715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>没有行满足查询条件，例如</span><span
    style='font-family:"Comic Sans MS"'> SELECT MIN(...) FROM ... WHERE </span><span
    style='font-family:"Microsoft YaHei UI"'>条件。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>no
    matching row in const table</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.0673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>对于带有连接的查询，有一个空表或没有满足唯一索引条件的行的表。</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.0055in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>No
    matching rows after partition pruning</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.0284in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>对于</span><span
    style='font-family:"Comic Sans MS"'> DELETE </span><span style='font-family:
    "Microsoft YaHei UI"'>或</span><span style='font-family:"Comic Sans MS"'>
    UPDATE</span><span style='font-family:"Microsoft YaHei UI"'>，优化器在分区修剪后没有发现要删除或更新的内容。它的含义类似于</span><span
    style='font-family:"Comic Sans MS"'> SELECT </span><span style='font-family:
    "Microsoft YaHei UI"'>语句的</span><span style='font-family:"Comic Sans MS"'>
    Impossible WHERE</span><span style='font-family:"Microsoft YaHei UI"'>。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>No
    tables used</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.977in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>查询没有</span><span
    style='font-family:"Comic Sans MS"'> FROM </span><span style='font-family:
    "Microsoft YaHei UI"'>子句，或者有</span><span style='font-family:"Comic Sans MS"'>
    FROM DUAL </span><span style='font-family:"Microsoft YaHei UI"'>子句。</span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>对于</span><span
    style='font-family:"Comic Sans MS"'> INSERT </span><span style='font-family:
    "Microsoft YaHei UI"'>或</span><span style='font-family:"Comic Sans MS"'>
    REPLACE </span><span style='font-family:"Microsoft YaHei UI"'>语句，</span><span
    style='font-family:"Comic Sans MS"'>EXPLAIN </span><span style='font-family:
    "Microsoft YaHei UI"'>在没有</span><span style='font-family:"Comic Sans MS"'>
    SELECT </span><span style='font-family:"Microsoft YaHei UI"'>部分时显示此值。</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>例如，它出现在</span><span
    style='font-family:"Comic Sans MS"'> EXPLAIN INSERT INTO t VALUES(10) </span><span
    style='font-family:"Microsoft YaHei UI"'>中，因为它等同于</span><span
    style='font-family:"Comic Sans MS"'> EXPLAIN INSERT INTO t SELECT 10 FROM
    DUAL</span><span style='font-family:"Microsoft YaHei UI"'>。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Not
    exists</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.075in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>MySQL
    </span><span style='font-family:"Microsoft YaHei UI"'>能够对查询执行</span><span
    style='font-family:"Comic Sans MS"'> LEFT JOIN </span><span
    style='font-family:"Microsoft YaHei UI"'>优化，并且在找到与</span><span
    style='font-family:"Comic Sans MS"'> LEFT JOIN </span><span
    style='font-family:"Microsoft YaHei UI"'>条件匹配的行后，不会检查此表中的更多行以查找前一个行组合</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>在</span><span
    style='font-family:"Comic Sans MS"'> MySQL 8.0.17 </span><span
    style='font-family:"Microsoft YaHei UI"'>及更高版本中，这也可能表明</span><span
    style='font-family:"Comic Sans MS"'> NOT IN</span><span style='font-family:
    "Microsoft YaHei UI"'>（子查询）或</span><span style='font-family:"Comic Sans MS"'>
    NOT EXISTS</span><span style='font-family:"Microsoft YaHei UI"'>（子查询）形式的</span><span
    style='font-family:"Comic Sans MS"'> WHERE </span><span style='font-family:
    "Microsoft YaHei UI"'>条件已在内部转换为反连接。</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>反联接是半联接</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>table_a
    JOIN table_b ON condition</span><span style='font-family:"Comic Sans MS"'
    lang=en-US> </span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>条件的补码。反联接返回</span><span style='font-family:"Comic Sans MS"'
    lang=zh-CN>table_a</span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>中的所有行，其中</span><span style='font-family:"Comic Sans MS"'
    lang=zh-CN>table_b</span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>中没有符合条件的行。</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>这将删除子查询并将其表带入最顶层查询的计划中，从而提供改进的成本计划。通过合并半连接和反连接，优化器可以更自由地对执行计划中的表进行重新排序，在某些情况下会产生更快的计划。</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>可以通过在执行</span><span
    style='font-family:"Comic Sans MS"'> EXPLAIN </span><span style='font-family:
    "Microsoft YaHei UI"'>后检查</span><span style='font-family:"Comic Sans MS"'>
    SHOW WARNINGS </span><span style='font-family:"Microsoft YaHei UI"'>中的</span><span
    style='font-family:"Comic Sans MS"'> Message </span><span style='font-family:
    "Microsoft YaHei UI"'>列，或在</span><span style='font-family:"Comic Sans MS"'>
    EXPLAIN FORMAT=TREE </span><span style='font-family:"Microsoft YaHei UI"'>的输出中查看何时对给定查询执行反连接转换。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Plan
    isn't ready yet</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>none</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.075in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>当优化器尚未完成为在命名连接中执行的语句创建执行计划时，</span><span
    style='font-family:"Comic Sans MS"'>EXPLAIN FOR CONNECTION</span><span
    style='font-family:"Microsoft YaHei UI"'>会出现此值。如果执行计划输出包含多行，则根据优化器确定完整执行计划的进度，其中任何一行或所有行都可能具有此</span><span
    style='font-family:"Comic Sans MS"'>Extra</span><span style='font-family:
    "Microsoft YaHei UI"'>值。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Range
    checked for each record (index map: N)</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.0673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>MySQL
    </span><span style='font-family:"Microsoft YaHei UI"'>没有找到好的索引可以使用，但发现在知道前面表的列值后，可能会使用某些索引。对于前面表中的每个行组合，</span><span
    style='font-family:"Comic Sans MS"'>MySQL </span><span style='font-family:
    "Microsoft YaHei UI"'>检查是否可以使用范围或索引合并访问方法来检索行。这不是很快，但比执行完全没有索引的连接要快。</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>索引从</span><span
    style='font-family:"Comic Sans MS"'> 1 </span><span style='font-family:
    "Microsoft YaHei UI"'>开始编号，顺序与表的</span><span style='font-family:"Comic Sans MS"'>
    SHOW INDEX </span><span style='font-family:"Microsoft YaHei UI"'>所示顺序相同。索引映射值</span><span
    style='font-family:"Comic Sans MS"'> N </span><span style='font-family:
    "Microsoft YaHei UI"'>是一个位掩码值，指示哪些索引是候选索引。例如，值</span><span
    style='font-family:"Comic Sans MS"'> 0x19</span><span style='font-family:
    "Microsoft YaHei UI"'>（二进制</span><span style='font-family:"Comic Sans MS"'>
    11001</span><span style='font-family:"Microsoft YaHei UI"'>）表示考虑索引</span><span
    style='font-family:"Comic Sans MS"'> 1</span><span style='font-family:"Microsoft YaHei UI"'>、</span><span
    style='font-family:"Comic Sans MS"'>4 </span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
    style='font-family:"Comic Sans MS"'> 5</span><span style='font-family:"Microsoft YaHei UI"'>。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Recursive</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>recursive</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.9715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>这表明该行适用于递归公用表表达式的递归</span><span
    style='font-family:"Comic Sans MS"'> SELECT </span><span style='font-family:
    "Microsoft YaHei UI"'>部分</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Rematerialize</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>rematerialize</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.075in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>Rematerialize
    (X,...) </span><span style='font-family:"Microsoft YaHei UI"'>显示在表</span><span
    style='font-family:"Comic Sans MS"'> T </span><span style='font-family:
    "Microsoft YaHei UI"'>的</span><span style='font-family:"Comic Sans MS"'>
    EXPLAIN </span><span style='font-family:"Microsoft YaHei UI"'>行中，其中</span><span
    style='font-family:"Comic Sans MS"'> X </span><span style='font-family:
    "Microsoft YaHei UI"'>是在读取</span><span style='font-family:"Comic Sans MS"'>
    T </span><span style='font-family:"Microsoft YaHei UI"'>的新行时触发重新实现的任何横向派生表</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'
    lang=en-US>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>每次顶级查询处理</span><span
    style='font-family:"Comic Sans MS"'> t </span><span style='font-family:
    "Microsoft YaHei UI"'>的新行时，都会重新具体化派生表的内容以使其更新。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Scanned
    N databases</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.9715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>这表示服务器在处理</span><span
    style='font-family:"Comic Sans MS"'> INFORMATION_SCHEMA </span><span
    style='font-family:"Microsoft YaHei UI"'>表查询时执行的目录扫描次数，</span><span
    style='font-family:"Comic Sans MS"'> N </span><span style='font-family:
    "Microsoft YaHei UI"'>的值可以是</span><span style='font-family:"Comic Sans MS"'>
    0</span><span style='font-family:"Microsoft YaHei UI"'>、</span><span
    style='font-family:"Comic Sans MS"'>1 </span><span style='font-family:"Microsoft YaHei UI"'>或全部。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Select
    tables optimized away</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.0673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>优化器确定</span><span
    style='font-family:"Comic Sans MS"'> 1) </span><span style='font-family:
    "Microsoft YaHei UI"'>最多应返回一行，以及</span><span style='font-family:"Comic Sans MS"'>
    2) </span><span style='font-family:"Microsoft YaHei UI"'>要生成该行，必须读取一组确定的行。当要读取的行可以在优化阶段读取时（例如，通过读取索引行），在查询执行期间不需要读取任何表。</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>当查询被隐式分组（包含聚合函数但没有</span><span
    style='font-family:"Comic Sans MS"'> GROUP BY </span><span
    style='font-family:"Microsoft YaHei UI"'>子句）时，第一个条件得到满足。当对每个使用的索引执行一行查找时，第二个条件就满足了。读取的索引数决定了要读取的行数。</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>对于每个表维护精确行数的存储引擎（例如</span><span
    style='font-family:"Comic Sans MS"'> MyISAM</span><span style='font-family:
    "Microsoft YaHei UI"'>，但不是</span><span style='font-family:"Comic Sans MS"'>
    InnoDB</span><span style='font-family:"Microsoft YaHei UI"'>），对于缺少</span><span
    style='font-family:"Comic Sans MS"'> WHERE </span><span style='font-family:
    "Microsoft YaHei UI"'>子句或始终为真且没有</span><span style='font-family:"Comic Sans MS"'>
    GROUP BY </span><span style='font-family:"Microsoft YaHei UI"'>子句的</span><span
    style='font-family:"Comic Sans MS"'> COUNT(*) </span><span
    style='font-family:"Microsoft YaHei UI"'>查询，可能会出现此额外值。
    （这是一个隐式分组查询的实例，其中存储引擎会影响是否可以读取确定数量的行。）</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Skip_open_table,
    Open_frm_only, Open_full_table</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.075in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>这些值表示适用于</span><span
    style='font-family:"Comic Sans MS"'> INFORMATION_SCHEMA </span><span
    style='font-family:"Microsoft YaHei UI"'>表查询的文件打开优化</span></p>
    <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
     margin-bottom:0in'>
     <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
         style='font-family:"Comic Sans MS";font-size:10.5pt'>skip_open_table</span><span
         style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>：表文件不需要打开。这些信息已经可以从数据字典中获得。</span></li>
     <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
         style='font-family:"Comic Sans MS";font-size:10.5pt'>open_frm_only</span><span
         style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>：表信息只需要读取数据字典。</span></li>
     <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
         style='font-family:"Comic Sans MS";font-size:10.5pt'>open_full_table</span><span
         style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>：未优化的信息查找。表信息必须从数据字典中读取，通过读取表文件来读取。</span></li>
    </ul>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Start
    temporary, End temporary</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.943in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>这表示半联接重复</span><span
    style='font-family:"Comic Sans MS"'>Weedout</span><span style='font-family:
    "Microsoft YaHei UI"'>策略的临时表使用。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>unique
    row not found</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.9715in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>对于诸如</span><span
    style='font-family:"Comic Sans MS"'> SELECT ... FROM tbl_name </span><span
    style='font-family:"Microsoft YaHei UI"'>之类的查询，没有行满足表上</span><span
    style='font-family:"Comic Sans MS"'> UNIQUE </span><span style='font-family:
    "Microsoft YaHei UI"'>索引或</span><span style='font-family:"Comic Sans MS"'>
    PRIMARY KEY </span><span style='font-family:"Microsoft YaHei UI"'>的条件</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Using
    filesort</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>using_filesort</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.0645in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>MySQL
    </span><span style='font-family:"Microsoft YaHei UI"'>必须执行额外的操作以找出如何按排序顺序检索行。排序是通过根据连接类型遍历所有行并存储排序键和指向与</span><span
    style='font-family:"Comic Sans MS"'> WHERE </span><span style='font-family:
    "Microsoft YaHei UI"'>子句匹配的所有行的行的指针来完成的。然后对键进行排序，并按排序顺序检索行。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Using
    index</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>using_index</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.075in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>仅使用索引树中的信息从表中检索列信息，而无需执行额外的查找操作来读取实际行。当查询仅使用属于单个索引的列时，可以使用此策略</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>对于具有用户定义聚集索引的</span><span
    style='font-family:"Comic Sans MS"'> InnoDB </span><span style='font-family:
    "Microsoft YaHei UI"'>表，即使在</span><span style='font-family:"Comic Sans MS"'>
    Extra </span><span style='font-family:"Microsoft YaHei UI"'>列中没有使用索引时也可以使用该索引。如果</span><span
    style='font-family:"Comic Sans MS"'> type </span><span style='font-family:
    "Microsoft YaHei UI"'>是</span><span style='font-family:"Comic Sans MS"'>
    index </span><span style='font-family:"Microsoft YaHei UI"'>并且</span><span
    style='font-family:"Comic Sans MS"'> key </span><span style='font-family:
    "Microsoft YaHei UI"'>是</span><span style='font-family:"Comic Sans MS"'>
    PRIMARY</span><span style='font-family:"Microsoft YaHei UI"'>，就会出现这种情况。</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>EXPLAIN
    FORMAT=TRADITIONAL </span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
    style='font-family:"Comic Sans MS"'> EXPLAIN FORMAT=JSON </span><span
    style='font-family:"Microsoft YaHei UI"'>显示了有关使用的任何覆盖索引的信息。从</span><span
    style='font-family:"Comic Sans MS"'> MySQL 8.0.27 </span><span
    style='font-family:"Microsoft YaHei UI"'>开始，它也显示为</span><span
    style='font-family:"Comic Sans MS"'> EXPLAIN FORMAT=TREE</span><span
    style='font-family:"Microsoft YaHei UI"'>。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Using
    index condition</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>using_index_condition</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.0673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>通过访问索引元组并首先测试它们以确定是否读取完整的表行来读取表。以这种方式，索引信息用于延迟（“下推”）读取全表行，除非有必要。</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Using
    index for group-by</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.05in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>using_index_for_group_by</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.0673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>与</span><span
    style='font-family:"Comic Sans MS"'>Using index</span><span
    style='font-family:"Microsoft YaHei UI"'>表访问方法类似，</span><span
    style='font-family:"Comic Sans MS"'>Using index for group by</span><span
    style='font-family:"Microsoft YaHei UI"'>表示</span><span style='font-family:
    "Comic Sans MS"'>MySQL</span><span style='font-family:"Microsoft YaHei UI"'>找到了一个索引，该索引可用于检索</span><span
    style='font-family:"Comic Sans MS"'>group by</span><span style='font-family:
    "Microsoft YaHei UI"'>或</span><span style='font-family:"Comic Sans MS"'>DISTINCT</span><span
    style='font-family:"Microsoft YaHei UI"'>查询的所有列，而无需对实际表进行任何额外的磁盘访问。此外，索引是以最有效的方式使用的，因此对于每个组，只读取几个索引条目。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Using
    index for skip scan</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.0631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>using_index_for_skip_scan</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.9236in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>表示使用了跳过扫描访问方法</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Using
    join buffer (Block Nested Loop), Using join buffer (Batched Key Access),
    Using join buffer (hash join)</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>using_join_buffer</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.0673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>来自早期连接的表被部分读入连接缓冲区，然后使用缓冲区中的行来执行与当前表的连接。</span><span
    style='font-family:"Comic Sans MS"'> (Block Nested Loop)</span><span
    style='font-family:"Microsoft YaHei UI"'>表示使用</span><span style='font-family:
    "Comic Sans MS"'>Block Nested-Loop</span><span style='font-family:"Microsoft YaHei UI"'>算法，</span><span
    style='font-family:"Comic Sans MS"'>(Batched Key Access)</span><span
    style='font-family:"Microsoft YaHei UI"'>表示使用</span><span style='font-family:
    "Comic Sans MS"'>Batched Key Access</span><span style='font-family:"Microsoft YaHei UI"'>算法，</span><span
    style='font-family:"Comic Sans MS"'>(hash join)</span><span
    style='font-family:"Microsoft YaHei UI"'>表示使用</span><span style='font-family:
    "Comic Sans MS"'>hash join</span><span style='font-family:"Microsoft YaHei UI"'>。也就是说，</span><span
    style='font-family:"Comic Sans MS"'>EXPLAIN </span><span style='font-family:
    "Microsoft YaHei UI"'>输出的前一行表中的键被缓冲，匹配的行从出现</span><span style='font-family:
    "Comic Sans MS"'> Using join buffer </span><span style='font-family:"Microsoft YaHei UI"'>的行所代表的表中批量提取。</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>在</span><span
    style='font-family:"Comic Sans MS"'> JSON </span><span style='font-family:
    "Microsoft YaHei UI"'>格式的输出中，</span><span style='font-family:"Comic Sans MS"'>using_join_buffer
    </span><span style='font-family:"Microsoft YaHei UI"'>的值始终是</span><span
    style='font-family:"Comic Sans MS"'> Block Nested Loop</span><span
    style='font-family:"Microsoft YaHei UI"'>、</span><span style='font-family:
    "Comic Sans MS"'>Batched Key Access </span><span style='font-family:"Microsoft YaHei UI"'>或</span><span
    style='font-family:"Comic Sans MS"'> hash join </span><span
    style='font-family:"Microsoft YaHei UI"'>之一。</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>哈希连接从</span><span
    style='font-family:"Comic Sans MS"'> MySQL 8.0.18 </span><span
    style='font-family:"Microsoft YaHei UI"'>开始可用；</span><span
    style='font-family:"Comic Sans MS"'> MySQL 8.0.20 </span><span
    style='font-family:"Microsoft YaHei UI"'>或更高版本的</span><span
    style='font-family:"Comic Sans MS"'> MySQL </span><span style='font-family:
    "Microsoft YaHei UI"'>中不使用</span><span style='font-family:"Comic Sans MS"'>
    Block Nested-Loop </span><span style='font-family:"Microsoft YaHei UI"'>算法</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Using
    MRR</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.943in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>使用多范围读取优化策略读取表</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Using
    sort_union(...), Using union(...), Using intersect(...)</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>这些指示了特定的算法，该算法显示了如何为</span><span
    style='font-family:"Comic Sans MS"'>index_merge</span><span
    style='font-family:"Microsoft YaHei UI"'>联接类型合并索引扫描</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Using
    temporary</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>using_temporary_table</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.075in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>为了解析查询，</span><span
    style='font-family:"Comic Sans MS"'>MySQL </span><span style='font-family:
    "Microsoft YaHei UI"'>需要创建一个临时表来保存结果。如果查询包含以不同方式列出列的</span><span
    style='font-family:"Comic Sans MS"'> GROUP BY </span><span
    style='font-family:"Microsoft YaHei UI"'>和</span><span style='font-family:
    "Comic Sans MS"'> ORDER BY </span><span style='font-family:"Microsoft YaHei UI"'>子句，通常会发生这种情况。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Using
    where</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>attached_condition</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.0618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>WHERE</span><span
    style='font-family:"Microsoft YaHei UI"'>子句用于限制哪些行与下一个表匹配或发送到客户端。除非您特别打算从表中提取或检查所有行，否则如果</span><span
    style='font-family:"Comic Sans MS"'>Extra</span><span style='font-family:
    "Microsoft YaHei UI"'>值不是</span><span style='font-family:"Comic Sans MS"'>Using
    where</span><span style='font-family:"Microsoft YaHei UI"'>，并且表联接类型是</span><span
    style='font-family:"Comic Sans MS"'>all</span><span style='font-family:
    "Microsoft YaHei UI"'>或</span><span style='font-family:"Comic Sans MS"'>index</span><span
    style='font-family:"Microsoft YaHei UI"'>，则查询中可能会出现错误。</span></p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>&nbsp;</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>在</span><span
    style='font-family:"Comic Sans MS"'> JSON </span><span style='font-family:
    "Microsoft YaHei UI"'>格式的输出中使用</span><span style='font-family:"Comic Sans MS"'>
    where </span><span style='font-family:"Microsoft YaHei UI"'>没有直接的对应物；</span><span
    style='font-family:"Comic Sans MS"'> attached_condition </span><span
    style='font-family:"Microsoft YaHei UI"'>属性包含使用的任何</span><span
    style='font-family:"Comic Sans MS"'> WHERE </span><span style='font-family:
    "Microsoft YaHei UI"'>条件。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Using
    where with pushed condition</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.075in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>此项仅适用于</span><span
    style='font-family:"Comic Sans MS"'> NDB </span><span style='font-family:
    "Microsoft YaHei UI"'>表。这意味着</span><span style='font-family:"Comic Sans MS"'>
    NDB Cluster </span><span style='font-family:"Microsoft YaHei UI"'>正在使用条件下推优化来提高非索引列和常量之间直接比较的效率。在这种情况下，条件被“下推”到集群的数据节点，并同时在所有数据节点上进行评估。这消除了通过网络发送不匹配行的需要，并且可以将此类查询的速度提高</span><span
    style='font-family:"Comic Sans MS"'> 5 </span><span style='font-family:
    "Microsoft YaHei UI"'>到</span><span style='font-family:"Comic Sans MS"'> 10
    </span><span style='font-family:"Microsoft YaHei UI"'>倍，这比可以使用但未使用条件下推的情况要快。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.9861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>Zero
    limit</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:2.0437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>message</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:3.943in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>查询包含</span><span style='font-family:"Comic Sans MS"' lang=en-US>
    </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>LIMIT</span><span
    style='font-family:"Comic Sans MS"' lang=en-US>() </span><span
    style='font-family:"Microsoft YaHei UI"' lang=zh-CN>子句，无法选择任何行。</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果您想尽可能快地进行查询，请注意</span><span
  style='font-family:"Comic Sans MS"'> Using filesort </span><span
  style='font-family:"Microsoft YaHei UI"'>和</span><span style='font-family:
  "Comic Sans MS"'> Using temporary </span><span style='font-family:"Microsoft YaHei UI"'>的额外列值，或者在</span><span
  style='font-family:"Comic Sans MS"'> JSON </span><span style='font-family:
  "Microsoft YaHei UI"'>格式的</span><span style='font-family:"Comic Sans MS"'>
  EXPLAIN </span><span style='font-family:"Microsoft YaHei UI"'>输出中，</span><span
  style='font-family:"Comic Sans MS"'>using_filesort </span><span
  style='font-family:"Microsoft YaHei UI"'>和</span><span style='font-family:
  "Comic Sans MS"'> using_temporary_table </span><span style='font-family:"Microsoft YaHei UI"'>属性是否等于</span><span
  style='font-family:"Comic Sans MS"'> true</span><span style='font-family:
  "Microsoft YaHei UI"'>。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>没有对应于</span><span
  style='font-family:"Comic Sans MS"'> Extra </span><span style='font-family:
  "Microsoft YaHei UI"'>列的单个</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>属性，但是可能出现的值作为</span><span
  style='font-family:"Comic Sans MS"'> JSON </span><span style='font-family:
  "Microsoft YaHei UI"'>属性或消息属性的文本公开</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>值为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>NULL </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>的</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> JSON </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>属性不会显示在</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> JSON </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>格式的 </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5' lang=zh-CN>EXPLAIN </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>输出中。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>id </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>相同时，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>SQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句具有同样的优先级，执行顺序由上而下，具体顺序由优化器决定。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>id </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>不同时，如果</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>SQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句中存在子查询，那么</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> id</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的序号会递增，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>id</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>值越大优先级越高，越先被执行
     。当三个表依次嵌套，发现最里层的子查询</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> id</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>最大，最先执行</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>通过计算</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> EXPLAIN </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>输出的行列中的值的乘积，您可以很好地了解连接的好坏。这应该大致告诉您</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>必须检查多少行才能执行查询。如果您使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> max_join_size </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>系统变量限制查询，则此行产品还用于确定要执行的多表</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SELECT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句以及要中止的语句</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>EXPLAIN </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>输出中的行列是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>连接优化器的有根据的猜测。通过将行乘积与查询返回的实际行数进行比较，检查数字是否更接近真实情况。如果数字相差很大，您可以通过在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SELECT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句中使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> STRAIGHT_JOIN </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>并尝试在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> FROM </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>子句中以不同的顺序列出表来获得更好的性能。
     （但是，</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'>STRAIGHT_JOIN
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>可能会阻止使用索引，因为它会禁用半连接转换</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在某些情况下，当</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> EXPLAIN SELECT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>与子查询一起使用时，可能会执行修改数据的语句</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt; </span><a
href="https://dev.mysql.com/doc/refman/8.0/en/explain-output.html#explain-output-column-table"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/explain-output.html#explain-output-column-table</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>

