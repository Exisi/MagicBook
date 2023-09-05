---
categories:
  - MySQL
tags:
  - MeCab
date:
  - 2023-3-27 21:14:12
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.9784in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.9784in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;line-height:
     18pt'><span style='font-family:"Comic Sans MS";font-size:12.0pt'>MeCab </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>全文解析器插件是用于日语的全文解析器插件，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MeCab </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>全文解析器插件支持用于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> InnoDB </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MyISAM</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。</span></li>
</ul>

<p style='margin-left:.375in;line-height:18pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;line-height:
     18pt'><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>内置的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>全文解析器使用单词之间的空格作为分隔符来确定单词的开始和结束位置，这对于不使用单词分隔符的表意语言是一个限制。为了解决日语的这个限制，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>提供了一个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MeCab </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>全文解析器插件。</span></li>
</ul>

<p style='margin-left:.375in;line-height:18pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;line-height:
     18pt'><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=zh-CN>MeCab </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>全文解析器将文本序列标记解析为有意义的单词。例如，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MeCab </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>将</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> “</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>データベース管理</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>”(“Database
     Management”) </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>标记解析为 </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US><span style='mso-spacerun:yes'> </span></span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>“</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>データベース</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>”(“Database”)</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>“</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>管理</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>”(“Management”)</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>。</span></li>
</ul>

<p style='margin-left:.375in;line-height:18pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;line-height:
     18pt'><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>相比之下，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ngram </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>全文解析器将文本标记解析为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> n </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>个字符的连续序列，其中</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> n </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表示</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> 1 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>到</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> 10 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>之间的数字。</span></li>
</ul>

<p style='line-height:18pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt'><span style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;line-height:
     18pt'><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>除此之外，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MeCab </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>索引通常比</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> ngram </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>索引要小，而且</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MeCab </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>全文搜索通常更快。一个缺点是，与</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> ngram </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>全文解析器相比，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MeCab </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>全文解析器可能需要更长的时间来标记文档。</span></li>
</ul>

<p style='line-height:18pt;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='line-height:18pt;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='line-height:18pt;font-size:13.5pt'><span style='font-weight:
bold;font-family:"Comic Sans MS"' lang=zh-CN>MeCab</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US> </span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>解析器的安装</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MeCab</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;解析器插件需要&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mecab</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;和&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mecab-ipadic</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。&nbsp;</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>要安装和配置&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MeCab</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;解析器插件，执行以下步骤</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>:</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
 0in;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
 font-style:normal'>
 <li value=1 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>在&nbsp;</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>M</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>ySQL</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>&nbsp;配置文件中，将&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'
     lang=zh-CN>mecab_rc_file</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>&nbsp;配置选项设置为&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'
     lang=zh-CN>mecabrc</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>&nbsp;配置文件的位置，这是&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'
     lang=zh-CN>MeCab</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>&nbsp;的配置文件。如果你使用的是与&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'
     lang=zh-CN>MySQL</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>&nbsp;一起分发的&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'
     lang=zh-CN>MeCab</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>&nbsp;包，</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>mecabrc</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>&nbsp;文件位于&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'
     lang=zh-CN>MYSQL_HOME/lib/mecab/etc/</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>。&nbsp;</span></li>
</ol>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>[mysqld]</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>loose-mecab-rc-file=MYSQL_HOME/lib/mecab/etc/mecabrc</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>loose</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>(</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>松散</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>)</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;前缀是一个选项修饰符。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mecab_rc_file</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;选项在安装&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MeCaB</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;解析器插件之前不会被&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;识别，但是在尝试安装&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MeCaB</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;解析器插件之前必须设置它。</span></li>
</ul>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>loose</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>(</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>松散</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>)</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;前缀允许重新启动&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;而不会遇到由于无法识别的变量而导致的错误。&nbsp;如果使用自己的&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MeCab</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;安装，或从源代码构建&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MeCab, mecabrc</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;配置文件的位置可能不同。&nbsp;</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
 0in;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
 font-style:normal'>
 <li value=2 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>在&nbsp;</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>M</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>ySQL</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>&nbsp;配置文件中，将最小标记大小设置为&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'
     lang=zh-CN>1</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>&nbsp;或&nbsp;</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;font-weight:normal;font-style:normal;
     font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>2</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>，这是推荐用于&nbsp;</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>MeCab</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>&nbsp;解析器的值。对于&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'
     lang=zh-CN>InnoDB</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>&nbsp;表，最小标记大小由&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'
     lang=zh-CN>innodb_ft_min_token_size</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>&nbsp;配置选项定义，默认值为&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'
     lang=zh-CN>3</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>。对于&nbsp;</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;font-weight:normal;font-style:normal;
     font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MyISAM</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>&nbsp;表，最小标记大小由&nbsp;</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>ft_min_word_len</span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;font-style:normal;
     font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>&nbsp;定义，它的默认值是&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'
     lang=zh-CN>4</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>。&nbsp;</span></li>
</ol>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>[mysqld]</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>innodb_ft_min_token_size=1</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
 0in;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
 font-style:normal'>
 <li value=3 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>修改&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'>mecabrc</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;配置文件以指定要使用的字典。与&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;二进制文件一起发布的&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'>mecab-ipadic</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;包包括三个字典</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'>(ipadic_euc-jp</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'>ipadic_sjis</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;和&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'>ipadic_utf-8)</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;中打包的&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'>mecabrc</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;配置文件包含类似如下内容：&nbsp;</span></li>
</ol>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>dicdir =<span style='mso-spacerun:yes'> 
</span>path/to/mysql/lib/mecab/lib/mecab/dic/ipadic_euc-jp</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>&nbsp;例如，要使用&nbsp;</span><span
style='font-family:"Comic Sans MS"'>ipadic_utf-8</span><span style='font-family:
"Microsoft YaHei UI"'>&nbsp;字典，修改如下：&nbsp;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>dicdir=MYSQL_HOME/lib/mecab/dic/ipadic_utf-8</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>如果正在使用自己的&nbsp;</span><span
style='font-family:"Comic Sans MS"'>MeCab</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;安装或已经从源代码构建了&nbsp;</span><span
style='font-family:"Comic Sans MS"'>MeCab, mecabrc</span><span
style='font-family:"Microsoft YaHei UI"'>&nbsp;文件中的默认&nbsp;</span><span
style='font-family:"Comic Sans MS"'>dicdir</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;条目可能会有所不同，字典及其位置也是如此。</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
 0in;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
 font-style:normal'>
 <li value=4 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>重新启动&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>。</span></li>
</ol>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
 0in;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
 font-style:normal'>
 <li value=5 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>安装&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'>MeCab</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;解析器插件。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'>MeCab </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'>解析器插件是使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'> INSTALL
     PLUGIN </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>语法安装的。插件名称是</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt'> mecab</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>，共享库名称是</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt'> libpluginmecab.so</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>。</span></li>
</ol>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#2E75B5'>INSTALL PLUGIN</span> mecab <span
style='color:#2E75B5'>SONAME </span><span style='color:#70AD47'>'libpluginmecab.so'</span>;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>一旦安装完毕，</span><span style='font-family:
"Comic Sans MS"'>MeCab </span><span style='font-family:"Microsoft YaHei UI"'>解析器插件就会在</span><span
style='font-family:"Comic Sans MS"'> MySQL </span><span style='font-family:
"Microsoft YaHei UI"'>每次正常重启时加载。</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
 0in;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
 font-style:normal'>
 <li value=6 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>使用</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>SHOW PLUGINS </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;font-style:normal;
     font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>语句验证</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Comic Sans MS";font-size:12.0pt'
     lang=zh-CN> MeCab </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>解析器插件是否已加载。</span></li>
</ol>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#2E75B5'>SHOW PLUGINS</span>;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>mecab </span><span style='font-family:"Microsoft YaHei UI"'>插件应该出现在插件列表中。</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在受支持的&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Fedora, Debian</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;和&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Ubuntu</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;平台上</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>(</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>除了&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Ubuntu 12.04</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;的系统&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mecab</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;版本太旧</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>)</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，如果系统&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mecab</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;被安装到默认位置，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;动态链接到系统&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mecab</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;安装。在其他支持的类&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Unix</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;平台上，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>libmecab.so</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;被静态链接到&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>libpluginmecab.so</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>libpluginmecab.so</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;位于&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;插件目录中。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mecab-ipadic</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;包含在&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;二进制文件中，位于&nbsp;</span><span
     style='font-style:italic;font-family:"Comic Sans MS";font-size:12.0pt'>MYSQL_HOME</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>\lib\mecab</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。&nbsp;可以使用本地包管理工具</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>(</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Fedora</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Debian</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;和&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Ubuntu</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;上</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>)</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>安装&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mecab</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;和&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mecab-ipadic</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，或者从源代码构建&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mecab</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;和&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mecab-ipadic</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。&nbsp;</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Windows</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;上，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>libmecab.dll</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;在&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL bin</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;目录中。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mecab-ipadic</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;位于&nbsp;</span><span
     style='font-style:italic;font-family:"Comic Sans MS";font-size:12.0pt'>MYSQL_HOME</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>/lib/mecab</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。&nbsp;</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>安装&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MeCab</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;解析器插件后，可以使用&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mecab_charset</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;状态变量来查看&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MeCab</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;使用的字符集。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;二进制提供的三个&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MeCab</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;字典支持以下字符集。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ipadic_euc-jp</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;字典支持&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ujis</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;和&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>eucjpms</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;字符集</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ipadic_sjis</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;字典支持&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>sjis</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;和&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>cp932</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;字符集</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ipadic_utf-8</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;字典支持&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>utf8</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;和&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>utf8mb4</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;字符集。&nbsp;</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mecab_charset</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;只报告第一个支持的字符集。例如，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ipadic_utf-8</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;字典同时支持&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>utf8</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;和&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>utf8mb4</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。当使用这个字典时，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mecab_charset</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;总是报告&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>utf8</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MeCab </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>解析器在查询字符串中使用空格作为分隔符。例如，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MeCab </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>解析器将 データベース管理
     标记解析为 データベース 和 管理。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Comic Sans MS"' lang=zh-CN>MeCab</span><span style='font-weight:
bold;font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-weight:
bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>解析器的使用</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>要创建使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> mecab </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>解析器的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> FULLTEXT </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>索引，请使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> CREATE TABLE</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ALTER TABLE </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> CREATE INDEX </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>语句，并指定</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> WITH PARSER mecab</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>WITH PARSER</span> mecab</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>USE</span><span style='color:black'> test</span><span
style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>CREATE TABLE</span><span style='color:black'>
articles </span><span style='color:#909090'>(</span><span style='color:black'><br>
<span style='mso-spacerun:yes'>      </span>id </span><span style='color:#834689'>INT
</span><span style='color:#0077AA'>UNSIGNED AUTO_INCREMENT </span><span
style='color:#A67F59'>NOT </span><span style='color:#990055'>NULL </span><span
style='color:#0077AA'>PRIMARY KEY</span><span style='color:#909090'>,</span><span
style='color:black'><br>
<span style='mso-spacerun:yes'>      </span>title </span><span
style='color:#834689'>VARCHAR</span><span style='color:#909090'>(</span><span
style='color:#990055'>200</span><span style='color:#909090'>),</span><span
style='color:black'><br>
<span style='mso-spacerun:yes'>      </span>body </span><span style='color:
#834689'>TEXT</span><span style='color:#909090'>,</span><span style='color:
black'><br>
<span style='mso-spacerun:yes'>      </span></span><span style='color:#0077AA'>FULLTEXT
</span><span style='color:#909090'>(</span><span style='color:black'>title</span><span
style='color:#909090'>,</span><span style='color:black'>body</span><span
style='color:#909090'>) </span><span style='color:#0077AA'>WITH PARSER</span><span
style='color:black'> mecab<br>
<span style='mso-spacerun:yes'>    </span></span><span style='color:#909090'>) </span><span
style='color:#0077AA'>ENGINE</span><span style='color:#A67F59'>=</span><span
style='color:black'>InnoDB </span><span style='color:#0077AA'>CHARACTER SET</span><span
style='color:black'> utf8mb4</span><span style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'>SET NAMES utf8mb4;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'>INSERT INTO articles (title,body)</p>

<p style='margin-left:.375in;font-size:12.0pt;color:#D8D8D8'><span
style='font-family:"Comic Sans MS"'>VALUES<br>
<span style='mso-spacerun:yes'>    </span>('</span><span style='font-family:
"Microsoft YaHei UI"'>データベース管理</span><span style='font-family:"Comic Sans MS"'>','</span><span
style='font-family:"Microsoft YaHei UI"'>このチュートリアルでは、私はどのようにデータベースを管理する方法を紹介します</span><span
style='font-family:"Comic Sans MS"'>'),<br>
<span style='mso-spacerun:yes'>    </span>('</span><span style='font-family:
"Microsoft YaHei UI"'>データベースアプリケーション開発</span><span style='font-family:"Comic Sans MS"'>','</span><span
style='font-family:"Microsoft YaHei UI"'>データベースアプリケーションを開発することを学ぶ</span><span
style='font-family:"Comic Sans MS"'>');</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'>SET GLOBAL innodb_ft_aux_table=&quot;test/articles&quot;;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'>SELECT * FROM INFORMATION_SCHEMA.INNODB_FT_INDEX_CACHE </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#D8D8D8'>ORDER BY doc_id, position;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>ALTER TABLE</span><span style='color:black'>
articles</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>ADD FULLTEXT INDEX</span><span
style='color:black'> ft_index </span><span style='color:#909090'>(</span><span
style='color:black'>title</span><span style='color:#909090'>,</span><span
style='color:black'>body</span><span style='color:#909090'>)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>WITH PARSER</span><span style='color:black'>
mecab</span><span style='color:#909090'>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>CREATE FULLTEXT INDEX</span><span
style='color:black'> ft_index </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>ON</span><span style='color:black'>
articles </span><span style='color:#909090'>(</span><span style='color:black'>title</span><span
style='color:#909090'>,</span><span style='color:black'>body</span><span
style='color:#909090'>)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>WITH PARSER</span><span style='color:black'>
mecab</span><span style='color:#909090'>;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
13.5pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Comic Sans MS"' lang=zh-CN>MeCab</span><span style='font-weight:
bold;font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-weight:
bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>停止词处理</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>默认情况下，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>MeCab </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>解析器使用默认终止词列表，该列表包含一个简短的英文终止词列表。对于适用于日语的终止词列表，必须自己创建。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Comic Sans MS"' lang=zh-CN>MeCab</span><span style='font-weight:
bold;font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-weight:
bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>查询处理</span></p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>对于自然语言模式搜索，搜索词被转换为标记的集合。例如，データベース管理 转化为 データベース 管理。</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>SELECT </span><span style='color:#C00000'>COUNT</span><span
style='color:#909090'>(</span><span style='color:#A67F59'>*</span><span
style='color:#909090'>) </span><span style='color:#0077AA'>FROM</span><span
style='color:black'> articles </span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#0077AA'>WHERE </span><span
style='font-family:"Comic Sans MS";color:#C00000'>MATCH</span><span
style='font-family:"Comic Sans MS";color:#909090'>(</span><span
style='font-family:"Comic Sans MS";color:black'>title</span><span
style='font-family:"Comic Sans MS";color:#909090'>,</span><span
style='font-family:"Comic Sans MS";color:black'>body</span><span
style='font-family:"Comic Sans MS";color:#909090'>) </span><span
style='font-family:"Comic Sans MS";color:#C00000'>AGAINST</span><span
style='font-family:"Comic Sans MS";color:#909090'>(</span><span
style='font-family:"Comic Sans MS";color:#669900'>'</span><span
style='font-family:"Microsoft YaHei UI";color:#669900'>データベース管理</span><span
style='font-family:"Comic Sans MS";color:#669900'>' </span><span
style='font-family:"Comic Sans MS";color:#0077AA'>IN NATURAL LANGUAGE MODE</span><span
style='font-family:"Comic Sans MS";color:#909090'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>对于布尔模式搜索，搜索词被转换为搜索词组。例如，データベース管理 转化为 データベース 管理</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>SELECT</span><span style='color:#C00000'>
COUNT</span><span style='color:#909090'>(</span><span style='color:#A67F59'>*</span><span
style='color:#909090'>) </span><span style='color:#0077AA'>FROM</span><span
style='color:black'> articles </span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#0077AA'>WHERE </span><span
style='font-family:"Comic Sans MS";color:#C00000'>MATCH</span><span
style='font-family:"Comic Sans MS";color:#909090'>(</span><span
style='font-family:"Comic Sans MS";color:black'>title</span><span
style='font-family:"Comic Sans MS";color:#909090'>,</span><span
style='font-family:"Comic Sans MS";color:black'>body</span><span
style='font-family:"Comic Sans MS";color:#909090'>) </span><span
style='font-family:"Comic Sans MS";color:#C00000'>AGAINST</span><span
style='font-family:"Comic Sans MS";color:#909090'>(</span><span
style='font-family:"Comic Sans MS";color:#669900'>'</span><span
style='font-family:"Microsoft YaHei UI";color:#669900'>データベース管理</span><span
style='font-family:"Comic Sans MS";color:#669900'>' </span><span
style='font-family:"Comic Sans MS";color:#0077AA'>IN </span><span
style='font-family:"Comic Sans MS";color:#834689'>BOOLEAN </span><span
style='font-family:"Comic Sans MS";color:#0077AA'>MODE</span><span
style='font-family:"Comic Sans MS";color:#909090'>);</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in;margin-left:37px'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>通配符搜索词不会被标记。搜索
     データベース管理</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'>*
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>会对前缀执行，即搜索
     データベース管理</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>SELECT </span><span style='color:#C00000'>COUNT</span><span
style='color:#909090'>(</span><span style='color:#A67F59'>*</span><span
style='color:#909090'>) </span><span style='color:#0077AA'>FROM</span><span
style='color:black'> articles </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#0077AA'>WHERE </span><span style='color:#C00000'>MATCH</span><span
style='color:#909090'>(</span><span style='color:black'>title</span><span
style='color:#909090'>,</span><span style='color:black'>body</span><span
style='color:#909090'>) </span><span style='color:#C00000'>AGAINST</span></p>

<p style='margin-left:.75in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#909090'>(</span><span
style='font-family:"Comic Sans MS";color:#669900'>'</span><span
style='font-family:"Microsoft YaHei UI";color:#669900'>データベース</span><span
style='font-family:"Comic Sans MS";color:#669900'>*' </span><span
style='font-family:"Comic Sans MS";color:#0077AA'>IN </span><span
style='font-family:"Comic Sans MS";color:#834689'>BOOLEAN </span><span
style='font-family:"Comic Sans MS";color:#0077AA'>MODE</span><span
style='font-family:"Comic Sans MS";color:#909090'>);</span></p>

<p style='font-family:"Comic Sans MS";font-size:11.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:11.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:11.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt'><span style='font-family:"Microsoft YaHei UI"'>来自</span><span
style='font-family:"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/fulltext-search-mecab.html"><span
style='font-family:"Comic Sans MS";color:#595959'>https://dev.mysql.com/doc/refman/8.0/en/fulltext-search-mecab.html</span></a><span
style='font-family:"Comic Sans MS";color:#595959'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
