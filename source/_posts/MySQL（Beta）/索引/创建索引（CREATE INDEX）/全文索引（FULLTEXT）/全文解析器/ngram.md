---
categories:
  - MySQL
tags:
  - ngram
date:
  - 2023-3-26 18:24:12
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.9416in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.9416in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;line-height:
     18pt'><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>内置的</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt' lang=zh-CN>MySQL</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>全文解析器使用单词之间的空格作为分隔符，以确定单词的开始和结束位置，这在处理不使用单词分隔符的表意语言时是一个限制。为了解决这个问题，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MySQL</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>提供了一个支持中文、日文和韩文</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>(CJK)</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>ngram</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>全文解析器，且对</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MyISAM</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>InnoDB</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>引擎有效</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在使用中文检索分词插件</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>ngram</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>之前，先得在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>配置文件里面设置他的分词大小（默认是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>2</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>）</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>临时设置</span></li>
</ul>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>mysqld --ngram_token_size=2</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#50A14F'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>配置文件</span></li>
</ul>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#383A42'>[</span><span style='color:#4078F2'>mysqld</span><span
style='color:#383A42'>] </span></p>

<p style='margin-left:1.125in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#383A42'>ngram_token_size=</span><span
style='font-family:"Comic Sans MS";color:#986801'>2</span><span
style='font-family:"Microsoft YaHei UI";color:#383A42'>（</span><span
style='font-family:"Comic Sans MS";color:#986801'>1</span><span
style='font-family:"Comic Sans MS";color:#383A42'>~</span><span
style='font-family:"Comic Sans MS";color:#986801'>10</span><span
style='font-family:"Microsoft YaHei UI";color:#383A42'>）</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#383A42'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#383A42'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在全文索引中，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>n-gram</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>就是一段文字里面连续的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>n</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>个字的序列。例如，用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>n-gram</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>来对”信息系统”来进行分词，得到的结果如下：</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#383A42'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>序号</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.077in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>分词大小</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.6798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>分词结果</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>1</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.077in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>N=1</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.7083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>‘信’</span><span
  style='font-family:"Comic Sans MS"'>, </span><span style='font-family:"Microsoft YaHei UI"'>‘息’</span><span
  style='font-family:"Comic Sans MS"'>, </span><span style='font-family:"Microsoft YaHei UI"'>‘系’</span><span
  style='font-family:"Comic Sans MS"'>, </span><span style='font-family:"Microsoft YaHei UI"'>‘统’</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>2</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.077in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>N=2</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.7083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>‘信息’</span><span
  style='font-family:"Comic Sans MS"'>, </span><span style='font-family:"Microsoft YaHei UI"'>‘息系’</span><span
  style='font-family:"Comic Sans MS"'>, </span><span style='font-family:"Microsoft YaHei UI"'>‘系统’</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>3</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.077in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>N=3</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.7083in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>‘信息系’</span><span
  style='font-family:"Comic Sans MS"'>, </span><span style='font-family:"Microsoft YaHei UI"'>‘息系统’</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>4</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.077in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>N=4</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.6798in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>‘信息系统’</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#383A42'><span style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>分词的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>SIZE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>越小，索引的体积就越大，所以要根据自身情况来设置合适的大小</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>因为有了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>ngram_token_size</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，所以</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>innodb_ft_min_token_size</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>innodb_ft_max_token_size</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>将不适用于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>n-gram</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>ngram</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>解析器在解析时消除了空格。例如：</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>“ab cd”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>被解析为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>“ab”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>“cd”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>“a bc”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>被解析为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>“bc”</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Comic Sans MS"' lang=en-US>n</span><span style='font-weight:bold;
font-family:"Comic Sans MS"' lang=zh-CN>gram</span><span style='font-weight:
bold;font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-weight:
bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>解析器的使用</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:13.5pt' lang=en-US>n</span><span
     style='font-family:"Comic Sans MS";font-size:13.5pt' lang=zh-CN>gram</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>是默认加载到</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中并可以直接使用的。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>WITH PARSER</span> ngram</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>我们只需要在创建全文索引时同时启用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>ngram</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>既可。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>CREATE TABLE</span> articles(</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>       </span><span style='color:#D8D8D8'><span
style='mso-spacerun:yes'> </span>FTS_DOC_ID BIGINT UNSIGNED AUTO_INCREMENT NOT
NULL PRIMARY KEY,</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span>title <span
style='color:#C00000'>VARCHAR</span>(100),</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>        </span><span style='color:#2E75B5'>FULLTEXT
INDEX</span> ngram_idx(title) <span style='color:#2E75B5'>WITH PARSER</span>
ngram</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>) Engine=InnoDB <span style='color:#2E75B5'>CHARACTER SET</span>
utf8mb4;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>Query OK, 0 rows affected (0.06 sec)</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>ALTER TABLE</span> articles <span
style='color:#2E75B5'>ADD FULLTEXT INDEX</span> ngram_idx(title) <span
style='color:#2E75B5'>WITH PARSER</span> ngram;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>CREATE FULLTEXT INDEX</span> ngram_idx <span
style='color:#2E75B5'>ON</span> articles(title) <span style='color:#2E75B5'>WITH
PARSER</span> ngram;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Comic Sans MS"' lang=en-US>n</span><span style='font-weight:bold;
font-family:"Comic Sans MS"' lang=zh-CN>gram</span><span style='font-weight:
bold;font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-weight:
bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>查询处理</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在自然语言模式（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>NATURAL
     LANGUAGE MODE</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>）下，文本的查询被转换为</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>ngram</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>分词查询的并集。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>INSERT INTO</span><span style='color:black'>
articles (title) </span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5'>VALUES</span><span
style='font-family:"Comic Sans MS";color:black'> (</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>'</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47'>信息系统</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>'</span><span
style='font-family:"Comic Sans MS";color:black'>), (</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>'</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47'>信息 系统</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>'</span><span
style='font-family:"Comic Sans MS";color:black'>), (</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>'</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47'>信息的系统</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>'</span><span
style='font-family:"Comic Sans MS";color:black'>), (</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>'</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47'>信息</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>'</span><span
style='font-family:"Comic Sans MS";color:black'>), (</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>'</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47'>系统</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>'</span><span
style='font-family:"Comic Sans MS";color:black'>), (</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>'</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47'>息系</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>'</span><span
style='font-family:"Comic Sans MS";color:black'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>Query OK, 6 rows affected (0.01 sec)<br>
Records: 6<span style='mso-spacerun:yes'>  </span>Duplicates: 0<span
style='mso-spacerun:yes'>  </span>Warnings: 0</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SELECT</span><span style='color:black'> * </span><span
style='color:#2E75B5'>FROM</span><span style='color:black'> articles </span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5'>WHERE </span><span
style='font-family:"Comic Sans MS";color:#C00000'>MATCH</span><span
style='font-family:"Comic Sans MS";color:black'> (title) </span><span
style='font-family:"Comic Sans MS";color:#C00000'>AGAINST</span><span
style='font-family:"Comic Sans MS";color:black'> (</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>'</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47'>信息系统</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>' </span><span
style='font-family:"Comic Sans MS";color:#2E75B5'>IN NATURAL LANGUAGE MODE</span><span
style='font-family:"Comic Sans MS";color:black'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:black'>运行结果如下：</p>

<p style='margin-left:.375in;font-size:12.0pt;color:black'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>+------------------+-----------------+<br>
| FTS_DOC_ID</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'> </span>| title<span style='mso-spacerun:yes'>       
</span></span><span style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>     </span></span><span style='font-family:"Comic Sans MS"'
lang=zh-CN><span
style='mso-spacerun:yes'>   </span>|<br>
+------------------+-----------------+<br>
|<span style='mso-spacerun:yes'>       </span></span><span style='font-family:
"Comic Sans MS"' lang=en-US><span style='mso-spacerun:yes'>             </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>   </span>1 | </span><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>信息系统</span><span style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>   </span></span><span style='font-family:"Comic Sans MS"'
lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>   </span></span><span style='font-family:"Comic Sans MS"'
lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>  </span>|<br>
|<span style='mso-spacerun:yes'>      </span></span><span style='font-family:
"Comic Sans MS"' lang=en-US><span style='mso-spacerun:yes'>             </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>    </span>6 | </span><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>息系</span><span style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>           </span></span><span style='font-family:
"Comic Sans MS"' lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'> </span>|<br>
|<span style='mso-spacerun:yes'>       </span></span><span style='font-family:
"Comic Sans MS"' lang=en-US><span style='mso-spacerun:yes'>             </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>   </span>2 | </span><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>信息 系统</span><span style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>      </span></span><span style='font-family:"Comic Sans MS"'
lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'> </span>|<br>
|<span style='mso-spacerun:yes'>        </span></span><span style='font-family:
"Comic Sans MS"' lang=en-US><span style='mso-spacerun:yes'>             </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>  </span>3 | </span><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>信息的系统</span><span style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>    </span></span><span style='font-family:"Comic Sans MS"'
lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'> </span>|<br>
|<span style='mso-spacerun:yes'>       </span></span><span style='font-family:
"Comic Sans MS"' lang=en-US><span style='mso-spacerun:yes'>             </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>   </span>4 | </span><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>信息</span><span style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>            </span></span><span style='font-family:
"Comic Sans MS"' lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>|<br>
|<span style='mso-spacerun:yes'>       </span></span><span style='font-family:
"Comic Sans MS"' lang=en-US><span style='mso-spacerun:yes'>             </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>   </span>5 | </span><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>系统</span><span style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>          </span></span><span style='font-family:"Comic Sans MS"'
lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>  </span>|<br>
+-------------------+-----------------+<br>
6 rows in set (0.01 sec)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
13.5pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在布尔模式（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>BOOLEAN
     MODE)</span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>，文本查询被转化为</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>ngram</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>分词的短语查询。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SELECT</span><span style='color:black'> * </span><span
style='color:#2E75B5'>FROM</span><span style='color:black'> articles </span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5'>WHERE</span><span
style='font-family:"Comic Sans MS";color:black'> M</span><span
style='font-family:"Comic Sans MS";color:#C00000'>ATCH</span><span
style='font-family:"Comic Sans MS";color:black'>(title) </span><span
style='font-family:"Comic Sans MS";color:#C00000'>AGAINST</span><span
style='font-family:"Comic Sans MS";color:black'>(</span><span style='font-family:
"Comic Sans MS";color:#70AD47'>'</span><span style='font-family:"Microsoft YaHei UI";
color:#70AD47'>信息系统</span><span style='font-family:"Comic Sans MS";color:#70AD47'>'
</span><span style='font-family:"Comic Sans MS";color:#2E75B5'>IN BOOLEAN MODE</span><span
style='font-family:"Comic Sans MS";color:black'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:black'>运行结果如下：</p>

<p style='margin-left:.375in;font-size:12.0pt;color:black'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>+------------------+--------------+<br>
| FTS_DOC_ID</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'> </span>| title<span style='mso-spacerun:yes'>    
</span></span><span style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>    </span></span><span style='font-family:"Comic Sans MS"'
lang=zh-CN><span
style='mso-spacerun:yes'>   </span>|<br>
+------------------+--------------+<br>
|<span style='mso-spacerun:yes'>         </span></span><span style='font-family:
"Comic Sans MS"' lang=en-US><span style='mso-spacerun:yes'>             </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'> </span>1 | </span><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>信息系统</span><span style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>    
</span>|<br>
+------------------+--------------+<br>
1 row in set (0.00 sec)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
13.5pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>在布尔模式下的通配符查询（</span><span
style='font-family:"Comic Sans MS"'>Wildcard Searches</span><span
style='font-family:"Microsoft YaHei UI"'>）有以下两种适用情况</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>如果前缀的长度比</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>ngram_token_size</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>小，那么查询结果将返回在全文索引中所有以这个词作为前缀的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>ngram</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的词，比如</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> n=2 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>时</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>, </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>搜索</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>
     &quot;a*&quot; </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>会返回所有</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> ngram token </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中以</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>
     &quot;a&quot; </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>开头的行</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SELECT</span><span style='color:black'> * </span><span
style='color:#2E75B5'>FROM</span><span style='color:black'> articles </span></p>

<p style='margin-left:.75in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5'>WHERE </span><span
style='font-family:"Comic Sans MS";color:#C00000'>MATCH</span><span
style='font-family:"Comic Sans MS";color:black'> (title) </span><span
style='font-family:"Comic Sans MS";color:#C00000'>AGAINST</span><span
style='font-family:"Comic Sans MS";color:black'> (</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>'</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47'>信</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>*' </span><span
style='font-family:"Comic Sans MS";color:#2E75B5'>IN BOOLEAN MODE</span><span
style='font-family:"Comic Sans MS";color:black'>);</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:black'>运行结果如下：</p>

<p style='margin-left:.75in;font-size:12.0pt;color:black'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>+------------------+-----------------+<br>
| FTS_DOC_ID</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'> </span>| title<span style='mso-spacerun:yes'>      
</span></span><span style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>     </span></span><span style='font-family:"Comic Sans MS"'
lang=zh-CN><span
style='mso-spacerun:yes'>    </span>|<br>
+------------------+-----------------+<br>
|<span style='mso-spacerun:yes'>     </span>1<span style='mso-spacerun:yes'>   
</span></span><span style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>             </span></span><span style='font-family:
"Comic Sans MS"' lang=zh-CN><span style='mso-spacerun:yes'>  </span>| </span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>信息系统</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>       </span></span><span style='font-family:"Comic Sans MS"'
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'> </span>|<br>
|<span style='mso-spacerun:yes'>     </span>2<span style='mso-spacerun:yes'>   
</span></span><span style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>            </span></span><span style='font-family:
"Comic Sans MS"' lang=zh-CN><span style='mso-spacerun:yes'>  </span>| </span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>信息 系统</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>     </span></span><span style='font-family:"Comic Sans MS"'
lang=en-US><span style='mso-spacerun:yes'> </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>  </span>|<br>
|<span style='mso-spacerun:yes'>     </span>3<span
style='mso-spacerun:yes'>     </span></span><span style='font-family:"Comic Sans MS"'
lang=en-US><span style='mso-spacerun:yes'>            </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'> </span>| </span><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>信息的系统</span><span style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>      </span>|<br>
|<span style='mso-spacerun:yes'>     </span>4<span
style='mso-spacerun:yes'>      </span></span><span style='font-family:"Comic Sans MS"'
lang=en-US><span style='mso-spacerun:yes'>            </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>| </span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>信息</span><span style='font-family:"Comic Sans MS"'
lang=zh-CN><span style='mso-spacerun:yes'>          </span></span><span
style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>    </span></span><span style='font-family:"Comic Sans MS"'
lang=zh-CN><span
style='mso-spacerun:yes'>  </span>|<br>
+------------------+-----------------+<br>
4 rows in set (0.00 sec)</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>如果前缀的长度大于等于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>ngam_token_size</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，那么这个查询则转换为一个短语（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>phrase
     search</span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>），通配符则被忽略。比如</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> n=2 </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>时</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>, &quot;abc*&quot; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>通配符搜索会被转换为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> &quot;ab
     bc&quot;</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SELECT</span><span style='color:black'> * </span><span
style='color:#2E75B5'>FROM</span><span style='color:black'> articles </span></p>

<p style='margin-left:.75in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5'>WHERE </span><span
style='font-family:"Comic Sans MS";color:#C00000'>MATCH</span><span
style='font-family:"Comic Sans MS";color:black'> (title) </span><span
style='font-family:"Comic Sans MS";color:#C00000'>AGAINST</span><span
style='font-family:"Comic Sans MS";color:black'> (</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>'</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47'>信息系</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>*' </span><span
style='font-family:"Comic Sans MS";color:#2E75B5'>IN BOOLEAN MODE</span><span
style='font-family:"Comic Sans MS";color:black'>);</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:black'>运行结果如下：</p>

<p style='margin-left:.75in;font-size:12.0pt;color:black'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>+------------------+--------------+<br>
| FTS_DOC_ID </span><span style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'> </span></span><span style='font-family:"Comic Sans MS"'
lang=zh-CN>| title<span style='mso-spacerun:yes'>       </span></span><span
style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>    </span></span><span style='font-family:"Comic Sans MS"'
lang=zh-CN><span
style='mso-spacerun:yes'> </span>|<br>
+------------------+--------------+<br>
|<span style='mso-spacerun:yes'>       </span></span><span style='font-family:
"Comic Sans MS"' lang=en-US><span style='mso-spacerun:yes'>             </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>   </span>1 | </span><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>信息系统</span><span style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>    
</span>|<br>
+------------------+--------------+<br>
1 row in set (0.00 sec)</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>phrase search </span><span
style='font-family:"Microsoft YaHei UI"'>会被转换为</span><span style='font-family:
"Comic Sans MS"'> ngram phrase search</span><span style='font-family:"Microsoft YaHei UI"'>。比如搜索短语</span><span
style='font-family:"Comic Sans MS"'> &quot;abc&quot; </span><span
style='font-family:"Microsoft YaHei UI"'>会被转换为</span><span style='font-family:
"Comic Sans MS"'> &quot;ab bc&quot;, </span><span style='font-family:"Microsoft YaHei UI"'>返回包含</span><span
style='font-family:"Comic Sans MS"'> &quot;abc&quot; </span><span
style='font-family:"Microsoft YaHei UI"'>或</span><span style='font-family:"Comic Sans MS"'>
&quot;ab bc&quot; </span><span style='font-family:"Microsoft YaHei UI"'>的文档。搜索短语</span><span
style='font-family:"Comic Sans MS"'> &quot;abc def&quot; </span><span
style='font-family:"Microsoft YaHei UI"'>会被转换为</span><span style='font-family:
"Comic Sans MS"'> &quot;ab bc de ef&quot;, </span><span style='font-family:
"Microsoft YaHei UI"'>返回包含</span><span style='font-family:"Comic Sans MS"'>
&quot;abc def&quot; </span><span style='font-family:"Microsoft YaHei UI"'>或</span><span
style='font-family:"Comic Sans MS"'> &quot;ab bc de ef&quot; </span><span
style='font-family:"Microsoft YaHei UI"'>的文档。文档包含</span><span style='font-family:
"Comic Sans MS"'> &quot;abcdef&quot; </span><span style='font-family:"Microsoft YaHei UI"'>的却不会返回</span></p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Comic Sans MS"' lang=en-US>n</span><span style='font-weight:bold;
font-family:"Comic Sans MS"' lang=zh-CN>gram </span><span style='font-weight:
bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>停止词处理</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>内置</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>全文解析器将单词与</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>stopword</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>列表中的条目进行比较。如果其中某个单词等于停止词列表中的某个条目，则该单词将从索引中排除。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>通常，对于一个新的词，我们会查找</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>stopwords</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>表，看是否有匹配的词。如果有，这个词就不会加入到全文索引中。但是在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>n-gram</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中，我们会查找</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>stopwords</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>表，看是否包含里面的词。这样处理的原因是，在中日韩的文本中，有很多没有意义的字符，词语和标点符号。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>例如，假设</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>ngram_token_size=2</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，包含</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>“a</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>b”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的文档将被解析为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>“a</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>“</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>b”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>。如果逗号（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>“</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>）被定义为停止字，则</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>“a</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>“</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>b”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>都将从索引中排除，因为它们包含逗号。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>我们可以通过查询</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>INFORMATION_SCHEMA.INNODB_FT_INDEX_CACHE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>INFORMATION_SCHEMA.INNODB_FT_TABLE_TABLE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>来查询哪些词在全文索引里面。这是一个非常有用的调试工具。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>如果我们发现一个包含某个词的文档，没有如我们所期望的那样出现在查询结果中，那么这个词可能是因为某些原因不在全文索引里面。比如，它含有</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>stopword</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，或者它的大小小于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>ngram_token_size</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>等等。这个时候我们就可以通过查询这两个表来确认。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#2E75B5'>INSERT INTO</span><span
style='font-family:"Comic Sans MS";color:black'> articles (title) </span><span
style='font-family:"Comic Sans MS";color:#2E75B5'>VALUES</span><span
style='font-family:"Comic Sans MS";color:black'> (</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>'</span><span
style='font-family:"Microsoft YaHei UI";color:#70AD47'>信息系统</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>'</span><span
style='font-family:"Comic Sans MS";color:black'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>Query OK, 1 row affected (0.01 sec)<br>
<span style='mso-spacerun:yes'> </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SET GLOBAL</span><span style='color:black'>
innodb_ft_aux_table=</span><span style='color:#70AD47'>&quot;test/articles&quot;</span><span
style='color:black'>;<br>
Query OK, 0 rows affected (0.00 sec)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SELECT</span><span style='color:black'> * </span><span
style='color:#2E75B5'>FROM </span>INFORMATION_SCHEMA.INNODB_FT_INDEX_CACHE;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:black'>运行结果如下：</p>

<p style='margin-left:.375in;font-size:12.0pt;color:black'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>+----------+----------------------+--------------------+------------------+-------------+----------------+<br>
| WORD<span style='mso-spacerun:yes'>   </span>| FIRST_DOC_ID</span><span
style='font-family:"Comic Sans MS"' lang=en-US><span style='mso-spacerun:yes'> 
</span></span><span style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'> </span>| LAST_DOC_ID </span><span style='font-family:
"Comic Sans MS"' lang=en-US><span style='mso-spacerun:yes'>  </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>| DOC_COUNT </span><span
style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span style='font-family:"Comic Sans MS"'
lang=zh-CN>| DOC_ID </span><span style='font-family:"Comic Sans MS"'
lang=en-US><span style='mso-spacerun:yes'>   </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>| POSITION </span><span
style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span style='font-family:"Comic Sans MS"'
lang=zh-CN>|<br>
+----------+----------------------+--------------------+------------------+-------------+----------------+<br>
| </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>信息</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>   </span></span><span style='font-family:"Comic Sans MS"'
lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>|<span
style='mso-spacerun:yes'>           </span></span><span style='font-family:
"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>                </span></span><span style='font-family:
"Comic Sans MS"' lang=zh-CN><span style='mso-spacerun:yes'> </span>1 |<span
style='mso-spacerun:yes'>           </span></span><span style='font-family:
"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>              </span></span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>1 |<span style='mso-spacerun:yes'>         </span></span><span
style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>              </span></span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>1 |<span style='mso-spacerun:yes'>  </span></span><span
style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>          </span></span><span style='font-family:"Comic Sans MS"'
lang=zh-CN><span style='mso-spacerun:yes'>    </span>1 |</span><span
style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>           </span></span><span style='font-family:
"Comic Sans MS"' lang=zh-CN><span style='mso-spacerun:yes'>        </span>0
|<br>
| </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>息系</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>   </span></span><span style='font-family:"Comic Sans MS"'
lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>|<span
style='mso-spacerun:yes'>         </span></span><span style='font-family:"Comic Sans MS"'
lang=en-US><span style='mso-spacerun:yes'>                </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>   </span>1 |<span style='mso-spacerun:yes'>          
</span></span><span style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>              </span></span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>1 |<span style='mso-spacerun:yes'>         </span></span><span
style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>              </span></span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>1 |<span style='mso-spacerun:yes'>      </span></span><span
style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>          </span></span><span style='font-family:"Comic Sans MS"'
lang=zh-CN>1 |</span><span style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>           </span></span><span style='font-family:
"Comic Sans MS"' lang=zh-CN><span style='mso-spacerun:yes'>        </span>3
|<br>
| </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>系统</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>   </span></span><span style='font-family:"Comic Sans MS"'
lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>|<span
style='mso-spacerun:yes'>          </span></span><span style='font-family:"Comic Sans MS"'
lang=en-US><span style='mso-spacerun:yes'>                </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>  </span>1 |<span style='mso-spacerun:yes'>          
</span></span><span style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>              </span></span><span style='font-family:
"Comic Sans MS"' lang=zh-CN>1 | </span><span style='font-family:"Comic Sans MS"'
lang=en-US><span style='mso-spacerun:yes'>               </span></span><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>       </span>1 |<span style='mso-spacerun:yes'>    
</span></span><span style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>          </span></span><span style='font-family:"Comic Sans MS"'
lang=zh-CN><span style='mso-spacerun:yes'> </span>1 | </span><span
style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'>           </span></span><span style='font-family:
"Comic Sans MS"' lang=zh-CN><span style='mso-spacerun:yes'>       </span>6
|<br>
+----------+----------------------+--------------------+------------------+-------------+----------------+<br>
3 rows in set (0.00 sec)</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:black'><span style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>长度大于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>ngram_token_size</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的停止词将被忽略</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>默认情况下，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ngram</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>解析器使用默认的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>stopword</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>列表，其中包含英文</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>stopword</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的列表。对于适用于中文、日语或韩语的关键词列表，您必须创建自己的关键词列表。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:11.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/fulltext-search-ngram.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/fulltext-search-ngram.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
