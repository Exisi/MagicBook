categories:
- MySQL
tags:
- IN BOOLEAN MODE
date:
- 2023-3-19 10:14:02
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.9062in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.9062in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>可以使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> IN BOOLEAN MODE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>修饰符执行布尔全文搜索。使用此修饰符，某些字符在搜索字符串中单词的开头或结尾具有特殊含义</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>布尔模式下的全文索引不会按照相关性递减的顺序自动对行进行排序。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>InnoDB </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表需要 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#C00000'>MATCH</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>() </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表达式的所有列上的 </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#2E75B5'>FULLTEXT
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>索引来执行布尔查询。即使没有
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt;
     color:#2E75B5'>FULLTEXT </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>索引，针对</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> MyISAM </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>搜索索引的布尔查询也可以工作，尽管以这种方式执行的搜索会非常慢。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>布尔模式可以包含指定要求的运算符，例如匹配行中必须存在或不存在单词，或者调整的权重的高低。某些常用词（停用词）从搜索索引中省略，如果出现在搜索字符串中则不匹配。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.15in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>操作符</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:7.2937in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.15in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>+</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.2937in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>前导或尾随加号表示该词必须出现在返回的每一行中。</span><span style='font-family:
  "Comic Sans MS"'> InnoDB </span><span style='font-family:"Microsoft YaHei UI"'>仅支持前导加号。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.15in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>-</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.2937in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>前导或尾随减号表示该词不得出现在返回的任何行中。</span><span style='font-family:
  "Comic Sans MS"'> InnoDB </span><span style='font-family:"Microsoft YaHei UI"'>只支持前导减号。</span></p>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>- </span><span style='font-family:"Microsoft YaHei UI"'>运算符仅用于排除与其他搜索词匹配的行。因此，仅包含以</span><span
  style='font-family:"Comic Sans MS"'> - </span><span style='font-family:"Microsoft YaHei UI"'>开头的术语的布尔模式搜索返回空结果。它不会返回“除包含任何排除项的行之外的所有行”</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.15in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>无符号</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:7.3527in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>默认情况下（当既未指定</span><span
  style='font-family:"Comic Sans MS"'> + </span><span style='font-family:"Microsoft YaHei UI"'>也未指定</span><span
  style='font-family:"Comic Sans MS"'> - </span><span style='font-family:"Microsoft YaHei UI"'>时），该词是可选的，但包含它的行的评级更高。这模拟了不带</span><span
  style='font-family:"Comic Sans MS"'> IN BOOLEAN MODE </span><span
  style='font-family:"Microsoft YaHei UI"'>修饰符的</span><span style='font-family:
  "Comic Sans MS"'> MATCH() AGAINST() </span><span style='font-family:"Microsoft YaHei UI"'>的行为。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.15in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>@distance</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.3486in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>此运算符仅适用于</span><span
  style='font-family:"Comic Sans MS"'> InnoDB </span><span style='font-family:
  "Microsoft YaHei UI"'>表。它测试两个或多个单词是否都在彼此之间指定的距离内开始，以单词为单位。在</span><span
  style='font-family:"Comic Sans MS"'> @distance </span><span style='font-family:
  "Microsoft YaHei UI"'>运算符之前的双引号字符串中指定搜索词，例如</span><span style='font-family:
  "Comic Sans MS"'> MATCH(col1) AGAINST('&quot;word1 word2 word3&quot; @8' IN
  BOOLEAN MODE)</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.15in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&lt;</p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>或</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:7.2937in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>这两个运算符用于更改单词对分配给行的相关值的贡献。</span><span
  style='font-family:"Comic Sans MS"'> &gt; </span><span style='font-family:
  "Microsoft YaHei UI"'>运算符增加贡献，</span><span style='font-family:"Comic Sans MS"'>&lt;
  </span><span style='font-family:"Microsoft YaHei UI"'>运算符减少贡献。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.15in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>( )</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.2937in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>括号将单词分组为子表达式。括号内的组可以嵌套。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.15in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>~</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:7.3006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>充当否定运算符，使单词对行相关性的贡献为负。</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>这对于标记“噪音”词很有用。包含这样一个词的行的评级低于其他行，但不会像使用</span><span
  style='font-family:"Comic Sans MS"'> - </span><span style='font-family:"Microsoft YaHei UI"'>运算符那样被完全排除。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.15in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>*</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.3in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>用于截断（或通配符）运算符。</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>与其他运算符不同，它附加在要影响的单词后面。如果单词以</span><span
  style='font-family:"Comic Sans MS"'> * </span><span style='font-family:"Microsoft YaHei UI"'>运算符之前的单词开头，则匹配。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>如果指定了一个词，则它不会从布尔查询中删除，即使它太短或者是停用词。</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>通配符被视为必须出现在一个或多个单词开头的前缀。如果最小单词长度为</span><span
  style='font-family:"Comic Sans MS"'>4</span><span style='font-family:"Microsoft YaHei UI"'>，则搜索</span><span
  style='font-family:"Comic Sans MS"'>“+word+the*”</span><span
  style='font-family:"Microsoft YaHei UI"'>可能会比搜索</span><span style='font-family:
  "Comic Sans MS"'>“+word+the”</span><span style='font-family:"Microsoft YaHei UI"'>返回更少的行，因为第二个查询会忽略太短的搜索项</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.15in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&quot; &quot;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:7.3618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>包含在双引号（</span><span
  style='font-family:"Comic Sans MS"'>“</span><span style='font-family:"Microsoft YaHei UI"'>）中的短语字符仅与键入时包含短语的行匹配。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>全文引擎将短语拆分为单词，并在</span><span
  style='font-family:"Comic Sans MS"'>FULLTEXT</span><span style='font-family:
  "Microsoft YaHei UI"'>索引中搜索单词。非单词字符不需要完全匹配：短语搜索只要求匹配项包含与短语完全相同的单词，并且顺序相同。例如，“</span><span
  style='font-family:"Comic Sans MS"'>test phrase</span><span style='font-family:
  "Microsoft YaHei UI"'>”匹配“</span><span style='font-family:"Comic Sans MS"'>test,
  phrase</span><span style='font-family:"Microsoft YaHei UI"'>”</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>如果短语不包含索引中的单词，则结果为空。这些单词可能不在索引中，这是由于多种因素的组合：如果它们不存在于文本中，或着是停止词，或者比索引单词的最小长度短。</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>SELECT </span><span style='color:#A67F59'>*
</span><span style='color:#0077AA'>FROM</span><span style='color:black'>
articles </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA' lang=zh-CN>WHERE </span><span
style='color:#C00000' lang=zh-CN>MATCH </span><span style='color:#909090'
lang=zh-CN>(</span><span style='color:black' lang=zh-CN>title</span><span
style='color:#909090' lang=zh-CN>,</span><span style='color:black' lang=zh-CN>body</span><span
style='color:#909090' lang=zh-CN>)</span><span style='color:black' lang=en-US> </span><span
style='color:#C00000' lang=zh-CN>AGAINST </span><span style='color:#909090'
lang=zh-CN>(</span><span style='color:#669900' lang=zh-CN>'+MySQL -YourSQL' </span><span
style='color:#0077AA' lang=zh-CN>IN </span><span style='color:#834689'
lang=zh-CN>BOOLEAN </span><span style='color:#0077AA' lang=zh-CN>MODE</span><span
style='color:#909090' lang=zh-CN>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果如下：</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>+----+------------------------------+--------------------------------------------+<br>
| id </span><span lang=en-US><span style='mso-spacerun:yes'> </span></span><span
lang=zh-CN>| title<span style='mso-spacerun:yes'>              </span></span><span
lang=en-US><span style='mso-spacerun:yes'>          </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'>  </span></span><span lang=en-US><span
style='mso-spacerun:yes'>       </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>| body<span
style='mso-spacerun:yes'>                    </span></span><span lang=en-US><span
style='mso-spacerun:yes'>               </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'>           </span></span><span lang=en-US><span
style='mso-spacerun:yes'>       </span></span><span lang=zh-CN>|</span><span
lang=en-US> </span><span lang=zh-CN><br>
+----+------------------------------+--------------------------------------------+<br>
|<span style='mso-spacerun:yes'>  </span>1 </span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>| MySQL Tutorial<span
style='mso-spacerun:yes'>       </span></span><span lang=en-US><span
style='mso-spacerun:yes'>       </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>| DBMS stands for DataBase ...<span
style='mso-spacerun:yes'>       </span></span><span lang=en-US><span
style='mso-spacerun:yes'>       </span></span><span lang=zh-CN>|<br>
|<span style='mso-spacerun:yes'>  </span>2 </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| How To Use MySQL
Well | After you went through a ...<span style='mso-spacerun:yes'>       
</span></span><span lang=en-US><span style='mso-spacerun:yes'>         </span></span><span
lang=zh-CN>|<br>
|<span style='mso-spacerun:yes'>  </span>3 </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| Optimizing
MySQL<span style='mso-spacerun:yes'>     </span></span><span lang=en-US><span
style='mso-spacerun:yes'>     </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>| In this tutorial, we show ...<span
style='mso-spacerun:yes'>       </span></span><span lang=en-US><span
style='mso-spacerun:yes'>            </span></span><span lang=zh-CN>|<br>
|<span style='mso-spacerun:yes'>  </span>4 </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| 1001 MySQL
Tricks<span style='mso-spacerun:yes'>     </span></span><span lang=en-US><span
style='mso-spacerun:yes'>     </span></span><span lang=zh-CN>| 1. Never run
mysqld as root. 2. ... </span><span lang=en-US><span
style='mso-spacerun:yes'>         </span></span><span lang=zh-CN>|<br>
|<span style='mso-spacerun:yes'>  </span>6 </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| MySQL Security<span
style='mso-spacerun:yes'>      </span></span><span lang=en-US><span
style='mso-spacerun:yes'>       </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'>  </span>| When configured properly, MySQL ... </span><span
lang=en-US><span style='mso-spacerun:yes'> </span></span><span lang=zh-CN>|<br>
+----+------------------------------+--------------------------------------------+</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>InnoDB </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>全文搜索不支持在单个搜索词上使用多个运算符，如本例所示：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>'++apple'</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。在单个搜索词上使用多个运算符会向标准输出返回语法错误。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MyISAM </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>全文搜索成功地处理了相同的搜索，忽略了除与搜索词紧邻的运算符之外的所有运算符。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>InnoDB </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>全文搜索仅支持前导加号或减号。例如，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>InnoDB </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>支持</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>'+apple'</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>但不支持</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>'apple+'</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。指定尾随加号或减号会导致</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> InnoDB </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>报告语法错误。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>InnoDB </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>全文搜索不支持使用带通配符的前导加号（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>'+*'</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>）、加号和减号组合（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>'+-'</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>）或前导加号和减号组合（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>'+-apple ').</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>这些无效查询返回语法错误。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>InnoDB </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>全文搜索不支持在布尔全文搜索中使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> @ </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>符号。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> @ </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>符号保留供</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>@distance </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>邻近搜索运算符使用。</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>他们不使用适用于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MyISAM </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>搜索索引的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> 50% </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>阈值</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p><cite style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</cite></p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/fulltext-boolean.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/fulltext-boolean.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>