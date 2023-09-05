---
categories:
  - Spring
tags:
  - ‹import›
date:
  - 2022-6-28 7:47:45
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.1784in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.1784in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>为了更好的编辑</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>
     applicationContext.xml</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>中的文件，</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>Spring </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>提供了</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>&lt;import&gt;</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>标签，便于将配置拆分为各个配置文件，使用时一次导入，避免互相影响</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>applicationContext.xml
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>文件中只提供导入作为索引，不用于配置</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;import&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>有以下参数：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.3416in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.3736in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.3416in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>resource</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.3736in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定要导入的外部配置文件的</span><span
  style='font-family:"Comic Sans MS"'>URL</span><span style='font-family:"Microsoft YaHei UI"'>地址。这个</span><span
  style='font-family:"Comic Sans MS"'>URL</span><span style='font-family:"Microsoft YaHei UI"'>可以是相对路径或绝对路径，也可以是一个完整的</span><span
  style='font-family:"Comic Sans MS"'>URL</span><span style='font-family:"Microsoft YaHei UI"'>地址。。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.5pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:11.5pt' lang=zh-CN>以下配置文件为例，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>resource </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中包含有多个配置文件</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
11.5pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>resource/</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt' lang=en-US>student/</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>spring-student.xml</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>spring-school.xml</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'
     lang=en-US><span style='font-family:"Comic Sans MS";font-size:12.0pt'>spring-student.xml</span></li>
</ul>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>&lt;?xml</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>version</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;1.0&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>encoding</span><span style='font-family:"Comic Sans MS";color:black'>=</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;UTF-8&quot;</span><span
style='font-family:"Comic Sans MS";color:blue'>?&gt;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>&lt;beans</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>xmlns</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;http://www.springframework.org/schema/beans&quot;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>xmlns:xsi</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>xsi:schemaLocation</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;http://www.springframework.org/schema/beans</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;&nbsp;&nbsp;&nbsp;</span><a
href="http://www.springframework.org/schema/beans/spring-beans.xsd"><span
style='font-family:"Comic Sans MS";color:blue'>http://www.springframework.org/schema/beans/spring-beans.xsd</span></a><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;&gt;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;bean</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>id</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;myStudent&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>class</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;com.</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>exi.model</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>.Student&quot;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>&lt;property</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>name</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;name&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>value</span><span style='font-family:"Comic Sans MS";color:black'>=</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:maroon'>李四</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>&lt;property</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>name</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;age&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>value</span><span style='font-family:"Comic Sans MS";color:black'>=</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;22&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>&lt;/beans&gt;</span></p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'
     lang=en-US><span style='font-family:"Comic Sans MS";font-size:12.0pt'>spring-school.xml</span></li>
</ul>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>&lt;?xml</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>version</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;1.0&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>encoding</span><span style='font-family:"Comic Sans MS";color:black'>=</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;UTF-8&quot;</span><span
style='font-family:"Comic Sans MS";color:blue'>?&gt;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>&lt;beans</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>xmlns</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;http://www.springframework.org/schema/beans&quot;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>xmlns:xsi</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>xsi:schemaLocation</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;http://www.springframework.org/schema/beans</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;&nbsp;&nbsp;&nbsp;</span><a
href="http://www.springframework.org/schema/beans/spring-beans.xsd"><span
style='font-family:"Comic Sans MS";color:blue'>http://www.springframework.org/schema/beans/spring-beans.xsd</span></a><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;&gt;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;bean</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>id</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;myS</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>chool</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>class</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;com.</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>exi.model</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>.S</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>chool</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>&lt;property</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>name</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;name&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>value</span><span style='font-family:"Comic Sans MS";color:black'>=</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:maroon'>北京大学</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>&lt;property</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>name</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;address&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>value</span><span style='font-family:"Comic Sans MS";color:black'>=</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:maroon'>北京的海淀区</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>&lt;/beans&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'
     lang=en-US><span style='font-family:"Comic Sans MS";font-size:12.0pt'>applicationContext.xml</span></li>
 <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
  margin-bottom:0in'>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>使用路径导入</span></li>
 </ul>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>&lt;?xml</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>version</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;1.0&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>encoding</span><span style='font-family:"Comic Sans MS";color:black'>=</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;UTF-8&quot;</span><span
style='font-family:"Comic Sans MS";color:blue'>?&gt;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>&lt;beans</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>xmlns</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;http://www.springframework.org/schema/beans&quot;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>xmlns:xsi</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>xsi:schemaLocation</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;http://www.springframework.org/schema/beans</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;&nbsp;&nbsp;&nbsp;</span><a
href="http://www.springframework.org/schema/beans/spring-beans.xsd"><span
style='font-family:"Comic Sans MS";color:blue'>http://www.springframework.org/schema/beans/spring-beans.xsd</span></a><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;
color:#70AD47'><span style='font-family:"Comic Sans MS"' lang=en-US>&lt;!-- </span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>单独导入</span><span
style='font-family:"Comic Sans MS"' lang=en-US> --&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;import</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>resource</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;classpath:student/spring-student</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>.xml</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>/&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;import</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>resource</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;classpath:</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>student</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>/spring-school</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>.xml</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>/&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:blue'>&nbsp;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;
color:#70AD47'><span style='font-family:"Comic Sans MS"' lang=en-US>&lt;!-- </span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>使用通配符</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>*</span><span style='font-family:
"Comic Sans MS"' lang=en-US>, </span><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>批量导入</span><span style='font-family:"Comic Sans MS"' lang=en-US>
---&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;import</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>resource</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;classpath:</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>student</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>/spring-</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>*</span><span style='font-family:
"Comic Sans MS";color:maroon' lang=en-US>.xml</span><span style='font-family:
"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>/&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:blue'>&nbsp;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>&lt;/beans&gt;</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>通配符导入方法不能包含当前配置文件，即</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>
     applicationContext.xml</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>不建议使用相对的 “</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>../</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>”
     路径引用父目录中的文件。这样做会创建对当前应用程序外部文件的依赖关系。特别是，不建议对&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#444444'>classpath:</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>URL (</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>例如&nbsp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#444444'>classpath:../services.xml</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>) </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>使用此引用，在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> URL </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中，运行时解析过程选择 “最近”</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Classpath </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>根，然后查看其父目录。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Classpath </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>配置的更改可能导致选择其他错误的目录。</span></li>
</ul>

</div>

</div>

</div>

<!--EndFragment-->
</body>
