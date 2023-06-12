categories:
- MySQL
tags:
- IN NATURAL LANGUAGE MODE
date:
- 2023-3-18 10:14:02
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.4069in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.4069in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>自然语言模式将搜索字符串解释为文字短语。自然语言模式不能使用操作符，不能指定关键词必须出现或者必须不能出现等复杂查询。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>如果未指定修饰符或指定了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'
     lang=zh-CN>IN NATURAL LANGUAGE MODE</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>修饰符，则默认启用自然语言模式；</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>默认情况下或使用 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>IN
     NATURAL LANGUAGE MODE </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>修饰符，</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#C00000'>MATCH</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>() </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>函数针对文本集合执行自然语言搜索以查找字符串。集合是包含在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> FULLTEXT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>索引中的一组一个或多个列。搜索字符串作为
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#C00000'>AGAINST</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>() </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>的参数给出。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对于表中的每一行，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#C00000'>MATCH</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>() </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>返回一个相关值；也就是说，搜索字符串与
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#C00000'>MATCH</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>() </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>列表中指定的列中该行中的文本之间的相似性度量。相关值是非负浮点数。零相关性意味着没有相似性。相关性是根据行（文档）中的单词数、行中唯一单词的数量、集合中的单词总数以及包含特定单词的行数来计算的。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA' lang=zh-CN>SELECT </span><span
style='color:#A67F59' lang=zh-CN>* </span><span style='color:#0077AA'
lang=zh-CN>FROM</span><span style='color:black' lang=zh-CN> articles<br>
</span><span style='color:#0077AA' lang=zh-CN>WHERE </span><span
style='color:#C00000' lang=zh-CN>MATCH </span><span style='color:#909090'
lang=zh-CN>(</span><span style='color:black' lang=zh-CN>title</span><span
style='color:#909090' lang=zh-CN>,</span><span style='color:black' lang=zh-CN>body</span><span
style='color:#909090' lang=zh-CN>)</span><span style='color:#909090'
lang=en-US> </span><span style='color:#C00000' lang=zh-CN>AGAINST </span><span
style='color:#909090' lang=zh-CN>(</span><span style='color:#669900'
lang=zh-CN>'database' </span><span style='color:#0077AA' lang=zh-CN>IN NATURAL
LANGUAGE MODE</span><span style='color:#909090' lang=zh-CN>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果如下：</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>+----+-------------------------+----------------------------------------------+<br>
| id </span><span lang=en-US><span style='mso-spacerun:yes'> </span></span><span
lang=zh-CN>| title<span style='mso-spacerun:yes'>           </span></span><span
lang=en-US><span style='mso-spacerun:yes'>      </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span></span><span lang=en-US><span
style='mso-spacerun:yes'>      </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span></span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>| body<span
style='mso-spacerun:yes'>                                </span></span><span
lang=en-US><span style='mso-spacerun:yes'>                  </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'>   </span>|<br>
+----+-------------------------+----------------------------------------------+<br>
|<span style='mso-spacerun:yes'>  </span>1 </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| MySQL Tutorial<span
style='mso-spacerun:yes'>    </span></span><span lang=en-US><span
style='mso-spacerun:yes'>     </span></span><span lang=zh-CN>| DBMS stands for
DataBase ...<span style='mso-spacerun:yes'>            </span></span><span
lang=en-US><span style='mso-spacerun:yes'>    </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>|<br>
|<span style='mso-spacerun:yes'>  </span>5</span><span lang=en-US> </span><span
lang=zh-CN><span style='mso-spacerun:yes'> </span>| MySQL vs. YourSQL</span><span
lang=en-US> </span><span lang=zh-CN><span style='mso-spacerun:yes'> </span>| In
the following database comparison ...
|<br>
+----+-------------------------+----------------------------------------------+<br>
2 rows in set (0.00 sec)</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>SELECT </span><span style='color:#DD4A68'>COUNT</span><span
style='color:#909090'>(</span><span style='color:#A67F59'>*</span><span
style='color:#909090'>) </span><span style='color:#0077AA'>FROM</span><span
style='color:black'> articles<br>
</span><span style='color:#0077AA'>WHERE </span><span style='color:#C00000'>MATCH
</span><span style='color:#909090'>(</span><span style='color:black'>title</span><span
style='color:#909090'>,</span><span style='color:black'>body</span><span
style='color:#909090'>) </span><span style='color:#C00000'>AGAINST </span><span
style='color:#909090'>(</span><span style='color:#669900'>'database' </span><span
style='color:#0077AA'>IN NATURAL LANGUAGE MODE</span><span style='color:#909090'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果如下：</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>+-------------+<br>
| COUNT(*) |<br>
+-------------+<br>
|<span style='mso-spacerun:yes'>       </span></span><span lang=en-US><span
style='mso-spacerun:yes'>       </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>2 |<br>
+-------------+<br>
1 row in set (0.00 sec)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>以上查询做了一些额外的工作（按相关性对结果进行排序），但也可以使用基于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> WHERE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>子句的索引查找。如果搜索匹配的行很少，索引查找可能会使上述查询更快。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#0077AA'>SELECT</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#DD4A68' lang=zh-CN>COUNT</span><span
style='color:#909090' lang=zh-CN>(</span><span style='color:#909090'
lang=en-US> </span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#DD4A68'>IF</span><span style='color:#909090'>(</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#C00000' lang=zh-CN>MATCH </span><span
style='color:#909090' lang=zh-CN>(</span><span style='color:black' lang=zh-CN>title</span><span
style='color:#909090' lang=zh-CN>,</span><span style='color:black' lang=zh-CN>body</span><span
style='color:#909090' lang=zh-CN>) </span><span style='color:#C00000'
lang=zh-CN>AGAINST </span><span style='color:#909090' lang=zh-CN>(</span><span
style='color:#669900' lang=zh-CN>'database' </span><span style='color:#0077AA'
lang=zh-CN>IN NATURAL LANGUAGE MODE</span><span style='color:#909090'
lang=zh-CN>), </span><span style='color:#990055' lang=zh-CN>1</span><span
style='color:#909090' lang=zh-CN>, </span><span style='color:#990055'
lang=zh-CN>NULL</span><span style='color:#990055' lang=en-US> </span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt;color:#909090'>)</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090' lang=zh-CN>)</span><span style='color:#909090'
lang=en-US> </span><span style='color:#0077AA' lang=zh-CN>AS</span><span
style='color:black' lang=zh-CN> count</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>FROM</span><span style='color:black'>
articles</span><span style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果如下：</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>+--------+<br>
| count</span><span lang=en-US> </span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>|<br>
+--------+<br>
|<span style='mso-spacerun:yes'>     </span>2 </span><span lang=en-US><span
style='mso-spacerun:yes'>    </span></span><span lang=zh-CN>|<br>
+--------+<br>
1 row in set (0.03 sec)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#555555'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>此查询执行了全表扫描，如果搜索词出现在大多数行中，这可能比索引查找更快。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>默认情况下，搜索以不区分大小写的方式执行。要执行区分大小写的全文搜索，请对索引列使用区分大小写或二进制排序规则。例如，可以为使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> utf8mb4 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>字符集的列指定</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> utf8mb4_0900_as_cs </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> utf8mb4_bin </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的排序规则，以使其在全文搜索中区分大小写。</span></li>
</ul>

<p><cite style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</cite></p>

<p><cite style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</cite></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>当在 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>WHERE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>子句中使用 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#C00000'>MATCH</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>() </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>时，如前面所示的示例中所示，只要满足以下条件，返回的行就会自动按照相关性最高的顺序排在第一位：</span></li>
 <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
  margin-bottom:0in'>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>不得有明确的</span><span
      style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'> ORDER
      BY </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>子句。</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>必须使用全文索引扫描而不是表扫描来执行搜索。</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果查询连接表，全文索引扫描必须是连接中最左边的非常量表。</span></li>
 </ul>
</ul>

<p><cite style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</cite></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>给定刚才列出的条件，在需要或需要时使用
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#2E75B5'>ORDER BY </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>指定显式排序顺序通常比较容易。</span></li>
</ul>

<p><cite style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</cite></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对于自然语言全文搜索，在 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#C00000'>MATCH</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>() </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>函数中命名的列必须与表中某些 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>FULLTEXT
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>索引中包含的列相同。对于前面的查询，请注意
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#C00000'>MATCH</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>() </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>函数中命名的列（标题和正文）与文章表的 </span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;color:#2E75B5'>FULLTEXT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>索引定义中命名的列相同。要单独搜索标题或正文，您需要为每一列创建单独的
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#2E75B5'>FULLTEXT </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>索引</span></li>
</ul>

<p><cite style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</cite></p>

<p><cite style='margin-left:.375in;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</cite></p>

<p><cite style='margin-left:.375in;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</cite></p>

<p><cite style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</cite></p>

<p style='font-family:"Microsoft YaHei UI";font-size:13.5pt'><span
style='font-weight:bold'>自然语言搜索的阈值</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:11pt'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>对于搜索索引，</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>50% </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>自然语言搜索的阈值由 选择的特定加权方案。要禁用它，请查找 以下行：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MyISAMstorage/myisam/ftdefs.h</span></li>
</ul>

<p style='margin-left:.375in;margin-top:0pt;margin-bottom:11pt;font-family:
"Comic Sans MS";font-size:12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.75in;margin-top:0pt;margin-bottom:11pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#990055'>#</span><span style='color:#0077AA'>define </span><span
style='color:#990055'>GWS_IN_USE GWS_PROB</span></p>

<p style='margin-left:.375in;margin-top:0pt;margin-bottom:11pt;font-family:
"Microsoft YaHei UI";font-size:12.0pt'>将该行更改为：</p>

<p style='margin-left:.375in;margin-top:0pt;margin-bottom:11pt;font-family:
"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;margin-top:0pt;margin-bottom:11pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#990055'>#</span><span style='color:#0077AA'>define </span><span
style='color:#990055'>GWS_IN_USE GWS_FREQ</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:11pt'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>然后重新编译</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> MySQL</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:11.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:11.0pt'>&nbsp;</p>

<p><cite style='margin-left:.375in;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</cite></p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/fulltext-natural-language.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/fulltext-natural-language.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>