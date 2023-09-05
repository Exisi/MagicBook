---
categories:
  - MyBatis
tags:
  - ‹cache-ref›
date:
  - 2023-3-27 7:31:50
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.8006in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.8006in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;cache-ref&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>用于引用其他命名空间中定义的缓存。通过使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;cache-ref&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>元素，可以在多个命名空间之间共享缓存配置和实例，从而提高应用程序的性能和可扩展性</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在一个映射文件中，可以嵌套使用多个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> &lt;cache-ref&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>元素，这样可以实现多个不同的映射文件共享同一级别的缓存。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>cache-ref&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>元素必须指定包含被引用缓存配置的映射文件的命名空间。这个命名空间可以是一个映射文件的命名空间，也可以是一个类的全限定名。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.1944in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:4.8298in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.1944in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>namespace</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.8298in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>用于指定被引用的命名空间的名称</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>可以使用一个类的全限定名作为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>&lt;cache-ref&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>元素的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>namespace</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>属性</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#BFBFBF'>&lt;cache type=</span><span
style='color:#70AD47'>&quot;com.example.cache.UserCache&quot;</span><span
style='color:#BFBFBF'>/&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#BFBFBF'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt;color:#BFBFBF'><span
style='font-family:"Comic Sans MS"'>&lt;!-- </span><span style='font-family:
"Microsoft YaHei"'>在</span><span style='font-family:"Comic Sans MS"'>
target-mapper.xml </span><span style='font-family:"Microsoft YaHei"'>文件中引用上面的缓存配置</span><span
style='font-family:"Comic Sans MS"'> --&gt;</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN>&lt;cache-ref</span><span
style='font-family:Calibri' lang=en-US> </span><span style='font-family:"Comic Sans MS"'
lang=zh-CN>namespace=</span><span style='font-family:"Comic Sans MS";
color:#70AD47' lang=zh-CN>&quot;com.example.cache.UserCache&quot;</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>/&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>可以使用映射文件的命名空间作为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>&lt;cache-ref&gt;</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>元素的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>namespace</span><span
     style='font-family:"Microsoft YaHei";font-size:12.0pt'>属性</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;cache-ref namespace=<span style='color:#70AD47'>&quot;com.example.mapper.UserMapper&quot;</span>/&gt;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>&lt;cache-ref&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>元素的生效范围仅限于当前映射文件及其直接引用的所有映射文件。如果需要在多个映射文件之间共享缓存配置，则需在每个映射文件中都定义相同的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>cache-ref&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>元素。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>&lt;cache-ref&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>元素仅仅提供了对被引用缓存配置的引用，具体的缓存策略仍然需要在被引用的缓存配置所处的映射文件中定义。在引用该缓存配置时，如果在当前映射文件中也定义了同名的缓存配置，则被引用的缓存配置将被忽略，当前映射文件中定义的同名缓存配置将优先使用。</span></li>
</ul>

</div>

</div>

</div>

<!--EndFragment-->
</body>
