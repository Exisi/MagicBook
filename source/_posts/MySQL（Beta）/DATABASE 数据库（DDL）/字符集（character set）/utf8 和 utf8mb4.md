---
categories:
  - MySQL
tags:
  - DDL
  - character set
date:
  - 2023-1-26 3:39:16
---

<body lang=zh-CN style='font-family:Calibri;font-size:11.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.759in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.759in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>utf8</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>编码支持最大</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>3</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>字节每字符</span></li>
</ul>

<p style='margin:0in;margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>utf8mb4</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>编码是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>utf8</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>编码的超集，兼容</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>utf8</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，支持最大</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>4</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>字节每字符</span></li>
</ul>

<p style='margin:0in;margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin:0in;font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin:0in;font-size:13.5pt'><span style='font-weight:bold;
font-family:"Comic Sans MS"' lang=zh-CN>utf8</span><span style='font-weight:
bold;font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-weight:
bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>和</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US> </span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=zh-CN>utf8mb4</span><span
style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US> </span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>的区别</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>数据库的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> utf8</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>并不是真正概念里的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&nbsp;UTF-8</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MySQL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>utf8</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>编码只支持最大</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>3</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>字节每字符，当遇到</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>4</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>字节的宽字符就会插入异常，包括</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> Emoji </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>表情和很多不常用的汉字，以及任何新增的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> Unicode </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>字符等</span></li>
</ul>

<p style='margin:0in;margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>utf8mb4</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>编码是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>utf8</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>编码的超集，除了将编码改为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>utf8mb4</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>外不需要做其他转换。⽽在各类符号⽂字逐步发展的过程中，像是包括</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Emoji </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>表情和很多不常⽤的汉字，以及任何新增的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Unicode </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>字符等等都需要进⾏编码，所以</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>utf8mb4</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>应运⽽⽣，这也是两者最本质的区别</span></li>
</ul>

<p style='margin:0in;margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>为了获取更好的兼容性，应该总是使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> utf8mb4 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>而非</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> utf8</span></li>
</ul>

<p style='margin:0in;margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> CHAR </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>类型数据，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>utf8mb4 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>会多消耗一些空间，建议使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> VARCHAR </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>替代</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> CHAR</span></li>
</ul>

</div>

</div>

</div>

<!--EndFragment-->
</body>
