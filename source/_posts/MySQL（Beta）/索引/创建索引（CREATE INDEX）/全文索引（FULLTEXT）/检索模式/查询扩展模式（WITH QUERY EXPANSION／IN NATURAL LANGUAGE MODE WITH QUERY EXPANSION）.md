---
categories:
  - MySQL
tags:
  - WITH QUERY EXPANSION
  - IN NATURAL LANGUAGE MODE WITH QUERY EXPANSION
date:
  - 2023-3-20 12:24:12
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.025in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.025in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>在搜索短语后添加
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#2E75B5'>WITH QUERY EXPANSION </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:black'>或 </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#2E75B5'>IN NATURAL LANGUAGE MODE WITH QUERY
     EXPANSION </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt;color:black'>可以启用盲查询扩展（也称为自动相关性反馈）。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>在搜索短语太短时查询扩展模式的全文搜索通常很有用，用户依赖全文搜索引擎可以找到缺乏的隐含知识。例如，用户搜索</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>“database”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>的相关内容可能是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>“MySQL”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>“Oracle”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>“DB2”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>“RDBMS”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>，都是应该匹配</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>“databases”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>的短语，也应该返回，这是隐含知识。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>查询扩展搜索是自然语言搜索的修改。查询扩展模式执行两次搜索，第一次使用给定短语检索，第二次是结合第一次相关性比较高的行进行检索。第一次搜索将搜索返回的最相关行中的词添加到搜索字符串的文档中，然后再次进行搜索当第二次搜索时，结果集包括来自第一次搜索的几个最相关的文档，最后返回第二次搜索的结果</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:black'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果其中一个文档包含单词</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>“databases”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和单词</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>“MySQL”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，则第二次搜索会找到包含单词</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>“MySQL”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的文档，即使它们不包含单词</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>“database”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。以下示例显示了这种差异：</span></li>
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
style='color:#909090' lang=zh-CN>)</span><span style='color:black' lang=en-US> </span><span
style='color:#C00000' lang=zh-CN>AGAINST </span><span style='color:#909090'
lang=zh-CN>(</span><span style='color:#669900' lang=zh-CN>'database' </span><span
style='color:#0077AA' lang=zh-CN>IN NATURAL LANGUAGE MODE</span><span
style='color:#909090' lang=zh-CN>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果如下：</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>+----+-------------------------+----------------------------------------------+<br>
| id </span><span lang=en-US><span style='mso-spacerun:yes'> </span></span><span
lang=zh-CN>| title<span style='mso-spacerun:yes'>   </span></span><span
lang=en-US><span style='mso-spacerun:yes'>             </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'>          </span></span><span
lang=en-US><span style='mso-spacerun:yes'> </span></span><span lang=zh-CN>|
body<span style='mso-spacerun:yes'>                                     </span></span><span
lang=en-US><span style='mso-spacerun:yes'>                   </span></span><span
lang=zh-CN>|<br>
+----+-------------------------+----------------------------------------------+<br>
|<span style='mso-spacerun:yes'>  </span>1 </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| MySQL Tutorial<span
style='mso-spacerun:yes'>    </span></span><span lang=en-US><span
style='mso-spacerun:yes'>     </span></span><span lang=zh-CN>| DBMS stands for
DataBase …</span><span lang=en-US><span style='mso-spacerun:yes'>       </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'>          </span>|<br>
|<span style='mso-spacerun:yes'>  </span>5 </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| MySQL vs. YourSQL </span><span
lang=en-US><span style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| In
the following database comparison ...
|<br>
+----+-------------------------+----------------------------------------------+</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>2 rows in set (0.00 sec)</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA' lang=en-US>S</span><span style='color:#0077AA'
lang=zh-CN>ELECT </span><span style='color:#A67F59' lang=zh-CN>* </span><span
style='color:#0077AA' lang=zh-CN>FROM</span><span style='color:black'
lang=zh-CN> articles<br>
</span><span style='color:#0077AA' lang=zh-CN>WHERE </span><span
style='color:#C00000' lang=zh-CN>MATCH </span><span style='color:#909090'
lang=zh-CN>(</span><span style='color:black' lang=zh-CN>title</span><span
style='color:#909090' lang=zh-CN>,</span><span style='color:black' lang=zh-CN>body</span><span
style='color:#909090' lang=zh-CN>)</span><span style='color:black' lang=en-US> </span><span
style='color:#C00000' lang=zh-CN>AGAINST </span><span style='color:#909090'
lang=zh-CN>(</span><span style='color:#669900' lang=zh-CN>'database' </span><span
style='color:#0077AA' lang=zh-CN>WITH QUERY EXPANSION</span><span
style='color:#909090' lang=zh-CN>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果如下：</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>+----+------------------------------+-----------------------------------------------+<br>
| id </span><span lang=en-US><span style='mso-spacerun:yes'> </span></span><span
lang=zh-CN>| title<span style='mso-spacerun:yes'>                 </span></span><span
lang=en-US><span style='mso-spacerun:yes'>                 </span></span><span
lang=zh-CN>| body </span><span lang=en-US><span
style='mso-spacerun:yes'>                   </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'>                                    </span></span><span
lang=en-US><span style='mso-spacerun:yes'> </span></span><span lang=zh-CN>|<br>
+----+------------------------------+-----------------------------------------------+<br>
|<span style='mso-spacerun:yes'>  </span>5 </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| MySQL vs.
YourSQL<span style='mso-spacerun:yes'>   </span></span><span lang=en-US><span
style='mso-spacerun:yes'>    </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'>  </span>| In the following database comparison ... </span><span
lang=en-US><span style='mso-spacerun:yes'> </span></span><span lang=zh-CN>|<br>
|<span style='mso-spacerun:yes'>  </span>1 </span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>| MySQL Tutorial<span
style='mso-spacerun:yes'>        </span></span><span lang=en-US><span
style='mso-spacerun:yes'>       </span></span><span lang=zh-CN>| DBMS stands
for DataBase ...<span style='mso-spacerun:yes'>             </span></span><span
lang=en-US><span style='mso-spacerun:yes'>     </span></span><span lang=zh-CN>|<br>
|<span style='mso-spacerun:yes'>  </span>3 </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| Optimizing
MySQL<span style='mso-spacerun:yes'>      </span></span><span lang=en-US><span
style='mso-spacerun:yes'>      </span></span><span lang=zh-CN>| In this
tutorial we show ...<span style='mso-spacerun:yes'>             </span></span><span
lang=en-US><span style='mso-spacerun:yes'>          </span></span><span
lang=zh-CN>|<br>
|<span style='mso-spacerun:yes'>  </span>6 </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| MySQL Security<span
style='mso-spacerun:yes'>        </span></span><span lang=en-US><span
style='mso-spacerun:yes'>       </span></span><span lang=zh-CN>| When
configured properly, MySQL ...<span style='mso-spacerun:yes'>     
</span>|<br>
|<span style='mso-spacerun:yes'>  </span>2 </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| How To Use MySQL
Well </span><span lang=en-US><span style='mso-spacerun:yes'> </span></span><span
lang=zh-CN>| After you went through a ...<span
style='mso-spacerun:yes'>             </span></span><span lang=en-US><span
style='mso-spacerun:yes'>       </span></span><span lang=zh-CN>|<br>
|<span style='mso-spacerun:yes'>  </span>4 </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| 1001 MySQL
Tricks<span style='mso-spacerun:yes'>     </span></span><span lang=en-US><span
style='mso-spacerun:yes'>      </span></span><span lang=zh-CN>| 1. Never run
mysqld as root. 2. ...<span style='mso-spacerun:yes'>      </span></span><span
lang=en-US><span style='mso-spacerun:yes'>      </span></span><span lang=zh-CN>|<br>
+----+-------------------------------+----------------------------------------------+<br>
6 rows in set (0.00 sec)</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>由于查询扩展模式倾向于通过返回不相关的文档，这会显著增加噪声字符，请在搜索短语很短时才使用它。</p>

<p><cite style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</cite></p>

<p><cite style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</cite></p>

<p><cite style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</cite></p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/fulltext-query-expansion.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/fulltext-query-expansion.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
