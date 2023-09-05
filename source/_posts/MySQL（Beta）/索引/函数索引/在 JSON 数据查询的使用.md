---
categories:
  - MySQL
date:
  - 2023-4-8 15:24:30
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.5222in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.5222in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>函数索引为应用程序提供了很大的便利，我们可以通过调整查询条件来优化查询性能、缩小结果集、减少数据传输等。函数索引同样在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>数据存取方面同样可以有类似效果。我们可以在</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>JSON</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>列创建函数索引来简化键值对的查询。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>JSON</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的操作符</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>-&gt;&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>对应的是</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#C00000'
     lang=zh-CN>JSON_UNQUOTE</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>()</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>函数，该函数返回的是带有排序规则</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>
     utf8mb4_bin </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>的字符串； 而使用</span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#C00000'
     lang=zh-CN>CAST</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt' lang=zh-CN>()</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>函数返回的是带有排序规则</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=zh-CN> utf8mb4_0900_ai_ci</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>（系统默认排序规则）
     的字符串。所以，在查询时需要进行转义以利用到函数索引。</span></li>
</ul>

<p style='margin-top:0pt;margin-bottom:6pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;margin-top:0pt;margin-bottom:6pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#2E75B5'>CREATE TABLE</span><span
style='color:#333333'> employees (</span></p>

<p style='margin-left:.75in;margin-top:0pt;margin-bottom:6pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#333333' lang=zh-CN>data </span><span
style='color:#C00000' lang=zh-CN>JSON</span><span style='color:#333333'
lang=zh-CN>,<br>
</span><span style='color:#2E75B5' lang=zh-CN>INDEX </span><span
style='color:#333333' lang=en-US>json_</span><span style='color:#333333'
lang=zh-CN>idx (</span><span style='color:#333333' lang=en-US> </span><span
style='color:#333333' lang=zh-CN>(</span><span style='color:#333333'
lang=en-US> </span><span style='color:#C00000' lang=zh-CN>CAST</span><span
style='color:#333333' lang=zh-CN>(data-&gt;&gt;</span><span style='color:#70AD47'
lang=zh-CN>&quot;$.name&quot; </span><span style='color:#2E75B5' lang=zh-CN>AS </span><span
style='color:#C00000' lang=zh-CN>CHAR</span><span style='color:#333333'
lang=zh-CN>(30)</span><span style='color:#333333' lang=en-US> </span><span
style='color:#333333' lang=zh-CN>) </span><span style='color:#2E75B5'
lang=zh-CN>COLLATE</span><span style='color:#333333' lang=zh-CN> utf8mb4_bin)</span><span
style='color:#333333' lang=en-US> </span><span style='color:#333333'
lang=zh-CN>)</span></p>

<p style='margin-left:.375in;margin-top:0pt;margin-bottom:6pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#333333'>);</p>

<p style='margin-left:.375in;margin-top:0pt;margin-bottom:6pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#333333'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SELECT </span><span lang=en-US>id,
position</span><span lang=zh-CN> </span><span style='color:#2E75B5' lang=zh-CN>FROM</span><span
lang=zh-CN> employees </span><span style='color:#2E75B5' lang=zh-CN>WHERE</span><span
lang=zh-CN> data-&gt;&gt;</span><span style='color:#70AD47' lang=zh-CN>'$.name'</span><span
lang=zh-CN> = </span><span style='color:#70AD47' lang=zh-CN>'James'</span><span
lang=zh-CN>;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>CREATE TABLE</span> employees (</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>data <span style='color:#C00000'>JSON</span>,</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>INDEX </span><span
style='color:#333333' lang=en-US>json_</span><span lang=zh-CN>idx (</span><span
lang=en-US> </span><span lang=zh-CN>(</span><span lang=en-US> </span><span
style='color:#C00000' lang=zh-CN>CAST</span><span lang=zh-CN>(data-&gt;&gt;</span><span
style='color:#70AD47' lang=zh-CN>&quot;$.name&quot; </span><span
style='color:#2E75B5' lang=zh-CN>AS </span><span style='color:#C00000'
lang=zh-CN>CHAR</span><span lang=zh-CN>(30</span><span lang=en-US> </span><span
lang=zh-CN>)</span><span lang=en-US> </span><span lang=zh-CN>)</span><span
lang=en-US> </span><span lang=zh-CN>)</span><span lang=en-US> </span><span
lang=zh-CN>)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=zh-CN>SELECT </span><span lang=en-US>id,
position</span><span lang=zh-CN> </span><span style='color:#2E75B5' lang=zh-CN>FROM</span><span
lang=zh-CN> employees </span><span style='color:#2E75B5' lang=zh-CN>WHERE </span><span
style='color:#C00000' lang=zh-CN>CAST</span><span lang=zh-CN>(</span><span
lang=en-US> </span><span lang=zh-CN>data-&gt;&gt;</span><span style='color:
#70AD47' lang=zh-CN>'$.name' </span><span style='color:#2E75B5' lang=zh-CN>AS </span><span
style='color:#C00000' lang=zh-CN>CHAR</span><span lang=zh-CN>(30)</span><span
lang=en-US> </span><span lang=zh-CN>) = </span><span style='color:#70AD47'
lang=zh-CN>'James'</span><span lang=zh-CN>;</span></p>

<p style='margin-left:.375in;margin-top:0pt;margin-bottom:6pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://cloud.tencent.com/developer/article/2005383"><span
style='font-family:"Comic Sans MS"'>https://cloud.tencent.com/developer/article/2005383</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
