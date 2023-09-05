---
categories:
  - Spring
tags:
  - ［@Conditional］
date:
  - 2022-6-28 08:17:57
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.8902in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.8902in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Conditional</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#FFC000' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Spring4</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>版本新提供的注解，它的作用是按照设定的条件进行判断，把满足判断条件的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>bean</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>注册到</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Spring</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>容器。可以根据代码中设置的条件装载不同的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>bean</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，符合条件则加载该</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>bean</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，不符合则不加载该</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>bean</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.725in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.968in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.725in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#111111'
  lang=en-US>value</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.0375in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#111111'><span style='font-family:
  "Microsoft YaHei UI"' lang=zh-CN>指定实现</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>Condition</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>接口类的数组，默认为</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>{}</span></p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:#111111'><span style='font-weight:bold'>注</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定的所有</span><span
  style='font-family:"Comic Sans MS"'> Condition </span><span style='font-family:
  "Microsoft YaHei UI"'>接口类需要实现</span><span style='font-family:"Comic Sans MS"'>
  matches </span><span style='font-family:"Microsoft YaHei UI"'>方法，返回</span><span
  style='font-family:"Comic Sans MS"'> true </span><span style='font-family:
  "Microsoft YaHei UI"'>则注入</span><span style='font-family:"Comic Sans MS"'>
  bean</span><span style='font-family:"Microsoft YaHei UI"'>，</span><span
  style='font-family:"Comic Sans MS"'>false </span><span style='font-family:
  "Microsoft YaHei UI"'>则不注入。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>可以通过实现</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>Condtional</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>接口类，自定</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>Condtional</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>类进行判断</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>My</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Conditional</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>.java</span></li>
</ul>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.7083in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:9.1791in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>WindowsConditional</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>implements</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Condition</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@Override</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>boolean</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>matches(ConditionContext</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>conditionContext,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>AnnotatedTypeMetadata</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>annotatedTypeMetadata)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>Environment</span><span style='font-family:
  "Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:"Comic Sans MS"'>environment</span><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
  "Comic Sans MS"'>=</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>conditionContext.getEnvironment();</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>String</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>property</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>environment.getProperty(</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;os.name&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>if</span><span
  style='font-family:"Comic Sans MS";color:black'>(</span><span
  style='font-family:"Comic Sans MS";color:blue'>property</span><span
  style='font-family:"Comic Sans MS";color:black'>.contains(</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;Windows&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>)){</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>true;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>false;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>}</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>Person</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Configure</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>.java</span></li>
</ul>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#FFC000'>@Configuration</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#BFBFBF'><span lang=en-US>// </span><span lang=zh-CN>@Conditional({WindowsConditional.class})</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>public</span><span
style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>class</span><span
style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black' lang=en-US>Person</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>Configure</span><span
style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>{</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt'><span style='color:#FFC000'>@Bean</span><span
style='color:black'>(name=</span><span style='color:maroon'>&quot;bill&quot;</span><span
style='color:black'>)</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000' lang=zh-CN>@Conditional</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>({WindowsConditional.</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>class</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>})</span><span
style='font-family:"Comic Sans MS";color:black' lang=en-US> </span><span
style='font-family:"Comic Sans MS";color:green' lang=zh-CN>//</span><span
style='font-family:"Microsoft YaHei UI";color:green' lang=zh-CN>如果满足</span><span
style='font-family:"Comic Sans MS";color:green' lang=en-US>My</span><span
style='font-family:"Comic Sans MS";color:green' lang=zh-CN>Conditional</span><span
style='font-family:"Microsoft YaHei UI";color:green' lang=zh-CN>返回</span><span
style='font-family:"Comic Sans MS";color:green' lang=zh-CN>true,</span><span
style='font-family:"Microsoft YaHei UI";color:green' lang=zh-CN>继续加载下面这个方法</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>public</span><span
style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black' lang=en-US>Person</span><span
style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black' lang=en-US>person</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>1(){</span></p>

<p style='margin-left:1.5in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>return</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>new</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>Person(</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;Bill</span><span
style='font-family:"Microsoft YaHei UI";color:maroon'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:maroon'>Gates&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>,</span><span style='font-family:
"Comic Sans MS";color:red'>62</span><span style='font-family:"Comic Sans MS";
color:black'>);</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:black'>}</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:black' lang=en-US>&nbsp;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt'><span style='color:#FFC000'>@Bean</span><span
style='color:black'>(name=</span><span style='color:maroon'>&quot;linus&quot;</span><span
style='color:black'>)</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000' lang=zh-CN>@Conditional</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>({WindowsConditional.</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>class</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>})</span><span
style='font-family:"Comic Sans MS";color:black' lang=en-US> </span><span
style='font-family:"Comic Sans MS";color:green' lang=zh-CN>//</span><span
style='font-family:"Microsoft YaHei UI";color:green' lang=zh-CN>如果满足</span><span
style='font-family:"Comic Sans MS";color:green' lang=en-US>My</span><span
style='font-family:"Comic Sans MS";color:green' lang=zh-CN>Conditional</span><span
style='font-family:"Microsoft YaHei UI";color:green' lang=zh-CN>返回</span><span
style='font-family:"Comic Sans MS";color:green' lang=zh-CN>true,</span><span
style='font-family:"Microsoft YaHei UI";color:green' lang=zh-CN>继续加载下面这个方法</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>public</span><span
style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black' lang=en-US>Person</span><span
style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black' lang=en-US>person2</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>(){</span></p>

<p style='margin-left:1.5in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>return</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>new</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>Person(</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;Linus&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>,</span><span style='font-family:
"Comic Sans MS";color:red'>62</span><span style='font-family:"Comic Sans MS";
color:black'>);</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:black'>}</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:black' lang=en-US>&nbsp;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>}</p>

<p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>Person</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Configure</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>.java</span></li>
</ul>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#FFC000'>@Configuration</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#FFC000'>@Conditional({WindowsConditional.class})</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>public</span><span
style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>class</span><span
style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black' lang=en-US>Person</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>Configure</span><span
style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>{</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt'><span style='color:#FFC000'>@Bean</span><span
style='color:black'>(name=</span><span style='color:maroon'>&quot;bill&quot;</span><span
style='color:black'>)</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>public</span><span
style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black' lang=en-US>Person</span><span
style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black' lang=en-US>person</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>1(){</span></p>

<p style='margin-left:1.5in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>return</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>new</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>Person(</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;Bill</span><span
style='font-family:"Microsoft YaHei UI";color:maroon'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:maroon'>Gates&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>,</span><span style='font-family:
"Comic Sans MS";color:red'>62</span><span style='font-family:"Comic Sans MS";
color:black'>);</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:black'>}</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:black' lang=en-US>&nbsp;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt'><span style='color:#FFC000'>@Bean</span><span
style='color:black'>(name=</span><span style='color:maroon'>&quot;linus&quot;</span><span
style='color:black'>)</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>public</span><span
style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black' lang=en-US>Person</span><span
style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black' lang=en-US>person2</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>(){</span></p>

<p style='margin-left:1.5in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>return</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>new</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>Person(</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;Linus&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>,</span><span style='font-family:
"Comic Sans MS";color:red'>62</span><span style='font-family:"Comic Sans MS";
color:black'>);</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:black'>}</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:black' lang=en-US>&nbsp;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>}</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'>@Conditional
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中的多个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Condition </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>都需要都满足，才会加载被注解的类</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Conditional</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>可以作用在方法上，也可以作用在类上。如果是类和方法都加了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Conditional</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>注解，最终在方法上的注解为最终的条件，如果返回</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>true</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>则加入容器，反之不会加入容器。如果只是类上加了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Conditional</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>注解，整个类的所有方法都会加入容器中。</span></li>
</ul>

</div>

</div>

</div>

<!--EndFragment-->
</body>
