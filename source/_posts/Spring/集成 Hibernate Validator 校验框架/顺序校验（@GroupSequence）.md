---
categories:
  - Spring
tags:
  - Hibernate Validator
  - ［@GroupSequence］
date:
  - 2022-6-28 22:51:10
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.277in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.277in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>为了调整校验的顺序，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>H</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>ibernate
     Validator</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>中</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>jakarta.validation</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>提供了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@GroupSequence</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>注解，用于按特定顺序校验。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#FFC000'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@GroupSequence</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:black' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black' lang=zh-CN>注解有以下参数：</span></li>
</ul>

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
  background-color:black;vertical-align:top;width:3.6013in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  vertical-align:top;width:3.6013in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>校验的分组接口类，默认</span><span style='font-family:"Comic Sans MS"'
  lang=en-US>{}</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@GroupSequence</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>内可以指定分组校验的顺序。例如</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@GroupSequence</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>({Insert.class, Update.class})</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>先执行</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Insert</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>校验，然后执行</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Update</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>校验。如果</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Insert</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>分组，校验失败了，则不会进行</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Update</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>分组的校验</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'
     lang=en-US><span style='font-family:"Comic Sans MS";font-size:12.0pt'>UserForm.java</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@GroupSequence</span>({<span
style='color:#5B9BD5'>Insert</span>.class, <span style='color:#8064A2'>Update</span>.class})</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public class User</span><span lang=en-US>Form</span><span
lang=zh-CN> {</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@Null</span><span
style='font-family:"Comic Sans MS"'>(message = </span><span style='font-family:
"Comic Sans MS";color:#B43512'>&quot;</span><span style='font-family:"Microsoft YaHei UI";
color:#B43512'>新增时</span><span style='font-family:"Comic Sans MS";color:#B43512'>id</span><span
style='font-family:"Microsoft YaHei UI";color:#B43512'>必须为空</span><span
style='font-family:"Comic Sans MS";color:#B43512'>&quot;</span><span
style='font-family:"Comic Sans MS"'>, groups = {</span><span style='font-family:
"Comic Sans MS";color:#5B9BD5'>Insert</span><span style='font-family:"Comic Sans MS"'>.class})</span></p>

<p style='margin-left:1.125in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@NotNull</span><span
style='font-family:"Comic Sans MS"'>(message = </span><span style='font-family:
"Comic Sans MS";color:#B43512'>&quot;</span><span style='font-family:"Microsoft YaHei UI";
color:#B43512'>更新时</span><span style='font-family:"Comic Sans MS";color:#B43512'>id</span><span
style='font-family:"Microsoft YaHei UI";color:#B43512'>不能为空</span><span
style='font-family:"Comic Sans MS";color:#B43512'>&quot;</span><span
style='font-family:"Comic Sans MS"'>, groups = {</span><span style='font-family:
"Comic Sans MS";color:#8064A2'>Update</span><span style='font-family:"Comic Sans MS"'>.class})</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>private String id;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@NotEmpty</span><span
style='font-family:"Comic Sans MS"'>(message = </span><span style='font-family:
"Comic Sans MS";color:#B43512'>&quot;</span><span style='font-family:"Microsoft YaHei UI";
color:#B43512'>姓名不能为空</span><span style='font-family:"Comic Sans MS";
color:#B43512'>&quot;</span><span style='font-family:"Comic Sans MS"'> , groups
= {</span><span style='font-family:"Comic Sans MS";color:#8064A2'>Insert</span><span
style='font-family:"Comic Sans MS"'>.class})</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>private String name;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#FFC000'>@NotEmpty</span><span
style='font-family:"Comic Sans MS"'>(message = </span><span style='font-family:
"Comic Sans MS";color:#B43512'>&quot;</span><span style='font-family:"Microsoft YaHei UI";
color:#B43512'>年龄不能为空</span><span style='font-family:"Comic Sans MS";
color:#B43512'>&quot;</span><span style='font-family:"Comic Sans MS"'> , groups
= {</span><span style='font-family:"Comic Sans MS";color:#8064A2'>Insert</span><span
style='font-family:"Comic Sans MS"'>.class})</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>private String age;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:12pt;color:#ED7D31' lang=en-US><span style='font-family:
     "Comic Sans MS";font-size:12.0pt'>MainController.java</span></li>
</ul>

<p style='margin-left:.75in;margin-top:0pt;margin-bottom:12pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#FFC000' lang=en-US>@Controller</p>

<p style='margin-left:.75in;margin-top:0pt;margin-bottom:12pt;font-family:"Comic Sans MS";
font-size:12.0pt' lang=en-US>Public class MainController(){</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:#FFC000'>@PostMapping</span>(<span
style='color:#B43512'>&quot;/editUser&quot;</span>)</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>public ResultVo editUser(<span style='color:#FFC000'>@RequestBody
@Validated</span> UserForm form){</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='mso-spacerun:yes'>    </span>return
ResultVoUtil.success(form);</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
