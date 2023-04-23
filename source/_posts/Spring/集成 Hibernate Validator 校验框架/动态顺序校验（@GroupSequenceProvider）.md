---
categories:
  - Spring
tags:
  - Hibernate Validator
  - ［@GroupSequenceProvider］
date:
  - 2022-11-28 14:53:02
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.9958in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.9958in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>除了通过</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@GroupSequence</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>静态地重新定义默认组序列之外，</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=zh-CN>Hibernate Validator</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>还提供了一个注解，用于根据对象状态动态地重新定义默认组序列。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>为了实现动态地实现校验，需要实现接口</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>DefaultGroupSequenceProvider</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，并通过</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@GroupSequenceProvider</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>注释将该实现注册到目标类。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.8812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:3.7527in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.8812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>value</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.7527in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>继承了</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>DefaultGroupSequenceProvider</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的类</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>CustomGroupForm</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>.java</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#ED7D31' lang=en-US>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@GroupSequenceProvider</span>(value =
CustomSequenceProvider.class)</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>public class CustomGroupForm {</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@Pattern</span><span
style='font-family:"Comic Sans MS"'>(regexp = </span><span style='font-family:
"Comic Sans MS";color:#B43512'>&quot;[A|B]</span><span style='font-family:"Comic Sans MS"'>&quot;
, message = </span><span style='font-family:"Comic Sans MS";color:#B43512'>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:#B43512'>类型不必须为</span><span
style='font-family:"Comic Sans MS";color:#B43512'> A|B&quot;</span><span
style='font-family:"Comic Sans MS"'>)</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>private String type;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@NotEmpty</span><span
style='font-family:"Comic Sans MS"'>(message = </span><span style='font-family:
"Comic Sans MS";color:#B43512'>&quot;</span><span style='font-family:"Microsoft YaHei UI";
color:#B43512'>参数</span><span style='font-family:"Comic Sans MS";color:#B43512'>A</span><span
style='font-family:"Microsoft YaHei UI";color:#B43512'>不能为空</span><span
style='font-family:"Comic Sans MS";color:#B43512'>&quot;</span><span
style='font-family:"Comic Sans MS"'> , groups = {WhenTypeIsA.class})</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>private String paramA;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@NotEmpty</span><span
style='font-family:"Comic Sans MS"'>(message = </span><span style='font-family:
"Comic Sans MS";color:#B43512'>&quot;</span><span style='font-family:"Microsoft YaHei UI";
color:#B43512'>参数</span><span style='font-family:"Comic Sans MS";color:#B43512'>B</span><span
style='font-family:"Microsoft YaHei UI";color:#B43512'>不能为空</span><span
style='font-family:"Comic Sans MS";color:#B43512'>&quot;</span><span
style='font-family:"Comic Sans MS"'>, groups = {WhenTypeIsB.class})</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>private String paramB;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt;color:#70AD47'>// standard constructors / setters / getters /
toString</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>public interface WhenTypeIsA {</span><span
lang=en-US> </span><span lang=zh-CN>}</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>public interface WhenTypeIsB {</span><span
lang=en-US> </span><span lang=zh-CN>}</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:26pt;
     margin-bottom:7pt;line-height:19pt;color:#ED7D31'><span style='font-family:
     "Comic Sans MS";font-size:12.0pt'>CustomSequenceProvider</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#333333'>public class </span><span style='color:
#990000'>CustomSequenceProvider</span><span style='color:#333333'> implements </span><span
style='color:#990000'>DefaultGroupSequenceProvider</span><span
style='color:#333333'>&lt;CustomGroupForm&gt; {</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt;color:#FFC000'>@Override</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt;color:#333333'>public List&lt;Class&lt;?&gt;&gt;
getValidationGroups(CustomGroupForm form) {</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt;color:#333333'>&nbsp;</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#333333'>List&lt;Class&lt;?&gt;&gt;
defaultGroupSequence = new </span><span style='color:#990000'>ArrayList</span><span
style='color:#333333'>&lt;&gt;();</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#333333'>defaultGroupSequence.add(CustomGroupForm.class);</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#333333'>&nbsp;</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#333333'>if (form != </span><span style='color:#C00000'>null</span><span
style='color:#333333'> &amp;&amp; </span><span style='color:#DD1144'>&quot;A&quot;</span><span
style='color:#333333'>.equals(form.getType())) {</span></p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt;color:#333333'>defaultGroupSequence.add(CustomGroupForm.WhenTypeIsA.class);</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#333333'>}</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#333333'>&nbsp;</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#333333'>if (form != </span><span style='color:#C00000'>null</span><span
style='color:#333333'> &amp;&amp; </span><span style='color:#DD1144'>&quot;B&quot;</span><span
style='color:#333333'>.equals(form.getType())) {</span></p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt;color:#333333'>defaultGroupSequence.add(CustomGroupForm.WhenTypeIsB.class);</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#333333'>}</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#333333'>return defaultGroupSequence;</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#333333'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt;color:#333333'>}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#333333'>}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#333333'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:12pt;color:#ED7D31' lang=en-US><span style='font-family:
     "Comic Sans MS";font-size:12.0pt'>MainController.java</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#FFC000'>@Controller</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#333333'>Public class MainController(){</p>

<p style='margin-left:1.125in;margin-top:0pt;margin-bottom:12pt;font-family:
"Comic Sans MS";font-size:12.0pt'><span style='color:#FFC000'>@PostMapping</span>(<span
style='color:#B43512'>&quot;/customGroup&quot;</span>)<br>
public ResultVo customGroup(<span style='color:#FFC000'>@RequestBody @Validated</span>
CustomGroupForm form){<br>
<span style='mso-spacerun:yes'>    </span>return
ResultVoUtil.success(form);<br>
}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#333333'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
9.5pt;color:#333333'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://juejin.cn/post/6875316875950030855"><span style='font-family:
"Comic Sans MS"'>https://juejin.cn/post/6875316875950030855</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
