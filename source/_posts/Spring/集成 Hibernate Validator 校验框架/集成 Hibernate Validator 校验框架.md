---
categories:
  - Spring
tags:
  - Hibernate Validator
date:
  - 2022-6-28 22:51:06
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.8708in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.8708in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Hibernate Validator </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSR 380</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Bean Validation 2.0</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>）、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>JSR 303</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Bean Validation 1.0</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>）规范的实现。实现了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Bean Validation </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>规范的验证框架，它支持使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Bean Validation </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>注解来定义验证规则，并提供了一些额外的验证注解和自定义约束注解。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Hibernate
     Validator</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>校验框架需要引入以下依赖 </span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;dependency&gt;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&lt;groupId&gt;org.hibernate.validator&lt;/groupId&gt;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&lt;artifactId&gt;hibernate-validator&lt;/artifactId&gt;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&lt;version&gt;8.0.0.Final&lt;/version&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;/dependency&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Hibernate
     Validator</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>校验框架有两种校验模式：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.7694in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
  color:white'><span style='font-weight:bold'>模式</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.9347in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
  color:white'><span style='font-weight:bold'>名称</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.8305in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.7694in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:12.0pt'>validator.fail_fast</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.9347in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>普通模式</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.9631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>校验所有属性，并返回所有的失败信息</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.7694in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:12.0pt'>validator.normal</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.9347in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>快速失败返回模式</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.8305in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>有一个校验失败就会返回异常</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:9.3638in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;?xml</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>version</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;1.0&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>encoding</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;utf-8&quot;</span><span
  style='font-family:"Comic Sans MS";color:blue'>?&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;beans</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>xmlns</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;http://www.springframework.org/schema/beans&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>xmlns:xsi</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>xsi:schemaLocation</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;http://www.springframework.org/schema/beans</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>&nbsp;</span><a
  href="http://www.springframework.org/schema/beans/spring-beans.xsd"><span
  style='font-family:"Comic Sans MS";color:maroon'>http://www.springframework.org/schema/beans/spring-beans.xsd</span></a><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Microsoft YaHei UI";
  font-size:12.0pt;color:black'>&nbsp;&nbsp;</p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;bean</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>id</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;baseValidator&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;com.travelsky.common.validator.BaseValidator&quot;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&gt;</span></p>
  <p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;property</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>name</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;validatorMode&quot;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&gt;</span></p>
  <p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt'><span style='color:blue'>&lt;value&gt;</span><span
  style='color:black'>validator.normal</span><span style='color:blue'>&lt;/value&gt;</span></p>
  <p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt;color:#BFBFBF'><span lang=en-US>&lt;!-- </span><span
  lang=zh-CN>&lt;value&gt;validator.fail_fast&lt;/value&gt;</span><span
  lang=en-US> --&gt;</span></p>
  <p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt;color:blue'>&lt;/property&gt;</p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Microsoft YaHei UI";
  font-size:12.0pt;color:black'>&nbsp;&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:blue'>&lt;/beans&gt;</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>JSR </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>提供了一套</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> Bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>校验规范的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> API</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，维护在包</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>
     javax.validation.constraints </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>下。该规范使用属性或者方法参数或者类上的一套简洁易用的注解来做参数校验。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Hibernate
     Validator </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt' lang=zh-CN>提供了</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> JSR 303 </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>规范中所有内置</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#222222'
     lang=zh-CN>constraints</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#222222' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>实现，除此之外还有一些附加的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#222222'
     lang=zh-CN>constraints</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#222222'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>jakarta.validation</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>.</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>constraints</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>提供的校验注解：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.7083in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>校验注解</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:3.1708in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>作用</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:3.0965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>支持的数据类型</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@AssertFalse</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1708in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>判断关联属性是否为布尔值</span><span style='font-family:"Comic Sans MS"'>false</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.0965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>Boolean,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>boolean</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@AssertTrue</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1708in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"' lang=zh-CN>判断关联属性是否为布尔值</span><span style='font-family:
  "Comic Sans MS"' lang=en-US>true</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.0965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>Boolean,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>boolean</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@DecimalMax</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1902in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>被注解的值必须不大于约束中指定的最大值</span><span style='font-family:
  "Comic Sans MS"'>.</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;这个约束的参数是一个通过</span><span
  style='font-family:"Comic Sans MS"'>BigDecimal</span><span style='font-family:
  "Microsoft YaHei UI"'>定义的最大值的字符串表示</span><span style='font-family:"Comic Sans MS"'>.</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>BigDecimal,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>BigInteger,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>String,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>byte,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>short,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>int,</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'><span
  lang=zh-CN>long</span><span lang=en-US>,</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>原始类型的相应封装类。</span><span style='font-family:"Comic Sans MS"'>
  HV </span><span style='font-family:"Microsoft YaHei UI"'>还支持：</span><span
  style='font-family:"Comic Sans MS"'>Number </span><span style='font-family:
  "Microsoft YaHei UI"'>的任何子类型。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@DecimalMin</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1902in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>被注解的值必须不小于约束中指定的最小值</span><span style='font-family:
  "Comic Sans MS"'>.</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;这个约束的参数是一个通过</span><span
  style='font-family:"Comic Sans MS"'>BigDecimal</span><span style='font-family:
  "Microsoft YaHei UI"'>定义的最小值的字符串表示</span><span style='font-family:"Comic Sans MS"'>.</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>BigDecimal,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>BigInteger,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>String,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>byte,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>short,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>int,</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'><span
  lang=zh-CN>long</span><span lang=en-US>,</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>原始类型的相应封装类。</span><span style='font-family:"Comic Sans MS"'>
  HV </span><span style='font-family:"Microsoft YaHei UI"'>还支持：</span><span
  style='font-family:"Comic Sans MS"'>Number </span><span style='font-family:
  "Microsoft YaHei UI"'>的任何子类型。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@Digits</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1708in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:#17233F'>校验整数位数和小数位数</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>BigDecimal,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>BigInteger,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>String,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>byte,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>short,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>int,</p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>long </span><span style='font-family:"Microsoft YaHei UI"'>和原始类型的相应封装类。</span><span
  style='font-family:"Comic Sans MS"'> HV </span><span style='font-family:"Microsoft YaHei UI"'>还支持：</span><span
  style='font-family:"Comic Sans MS"'>Number </span><span style='font-family:
  "Microsoft YaHei UI"'>的任何子类型。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@Email</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1708in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:#17233F'>校验邮件地址</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.0965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>String</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@Future</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1708in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>检查给定的日期是否比现在晚</span><span style='font-family:"Comic Sans MS"'>.</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>java.util.Date,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>java.util.Calendar;</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>如果</span><span style='font-family:"Comic Sans MS"'>
  Joda Time </span><span style='font-family:"Microsoft YaHei UI"'>日期</span><span
  style='font-family:"Comic Sans MS"'>/</span><span style='font-family:"Microsoft YaHei UI"'>时间</span><span
  style='font-family:"Comic Sans MS"'> API </span><span style='font-family:
  "Microsoft YaHei UI"'>在类路径上，则由</span><span style='font-family:"Comic Sans MS"'>
  HV </span><span style='font-family:"Microsoft YaHei UI"'>额外支持：</span><span
  style='font-family:"Comic Sans MS"'>ReadablePartial </span><span
  style='font-family:"Microsoft YaHei UI"'>和</span><span style='font-family:
  "Comic Sans MS"'> ReadableInstant </span><span style='font-family:"Microsoft YaHei UI"'>的任何实现</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'
  lang=en-US>@FuretureOrPresent</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1708in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:#17233F'>检查日期是否在过去或现在，小于等于当前日期</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>java.util.Date,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>java.util.Calendar;</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>如果</span><span style='font-family:"Comic Sans MS"'>
  Joda Time </span><span style='font-family:"Microsoft YaHei UI"'>日期</span><span
  style='font-family:"Comic Sans MS"'>/</span><span style='font-family:"Microsoft YaHei UI"'>时间</span><span
  style='font-family:"Comic Sans MS"'> API </span><span style='font-family:
  "Microsoft YaHei UI"'>在类路径上，则由</span><span style='font-family:"Comic Sans MS"'>
  HV </span><span style='font-family:"Microsoft YaHei UI"'>额外支持：</span><span
  style='font-family:"Comic Sans MS"'>ReadablePartial </span><span
  style='font-family:"Microsoft YaHei UI"'>和</span><span style='font-family:
  "Comic Sans MS"'> ReadableInstant </span><span style='font-family:"Microsoft YaHei UI"'>的任何实现</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@Max</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1708in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>检查该值是否小于或等于约束条件中指定的最大值</span><span style='font-family:
  "Comic Sans MS"'>.</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1284in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>BigDecimal,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>BigInteger,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>byte,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>short,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>int,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'><span
  lang=zh-CN>long</span><span lang=en-US>,</span></p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:#17233F'>原生类型的封装类。</p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>此外还支持</span><span style='font-family:"Comic Sans MS"'>HV:String</span><span
  style='font-family:"Microsoft YaHei UI"'>（由</span><span style='font-family:
  "Comic Sans MS"'>String</span><span style='font-family:"Microsoft YaHei UI"'>表示的数值会被评估），任何子类型的</span><span
  style='font-family:"Comic Sans MS"'>Number</span><span style='font-family:
  "Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@Min</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1708in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>检查该值是否大于或等于约束条件中规定的最小值</span><span style='font-family:
  "Comic Sans MS"'>.</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1284in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>BigDecimal,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>BigInteger,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>byte,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>short,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>int,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>long</p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:#17233F'>原生类型的封装类。</p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>此外还支持</span><span style='font-family:"Comic Sans MS"'>HV:String</span><span
  style='font-family:"Microsoft YaHei UI"'>（由</span><span style='font-family:
  "Comic Sans MS"'>String</span><span style='font-family:"Microsoft YaHei UI"'>表示的数值会被评估），任何子类型的</span><span
  style='font-family:"Comic Sans MS"'>Number</span><span style='font-family:
  "Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'
  lang=en-US>@Negative</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1902in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:#17233F'>检查元素是否 严格 为负数。零值被认为无效</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.2131in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>BigDecimal,
  </p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>BigInteger,
  </p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>byte,
  </p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>short,
  </p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>int,
  </p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>long,
  </p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>原生类型的封装类</span><span style='font-family:"Comic Sans MS"'>,
  </span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>CharSequence </span><span style='font-family:"Microsoft YaHei UI"'>的任意子类（字符序列表示的数字）</span><span
  style='font-family:"Comic Sans MS"'>, </span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"' lang=zh-CN>Number </span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>的任意子类</span><span style='font-family:"Comic Sans MS"' lang=en-US>,</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>javax.money.MonetaryAmount </span><span style='font-family:
  "Microsoft YaHei UI"'>的任意子类</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@NegativeOrZero</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1708in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:#17233F'>检查是否为负或零。</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.2131in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>BigDecimal,
  </p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>BigInteger,
  </p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>byte, </p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>short, </p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>int, </p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>long, </p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>原生类型的封装类</span><span
  style='font-family:"Comic Sans MS"'>,</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>CharSequence
  </span><span style='font-family:"Microsoft YaHei UI"'>的任意子类（字符序列表示的数字）</span><span
  style='font-family:"Comic Sans MS"'>, </span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=zh-CN>Number </span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>的任意子类</span><span style='font-family:"Comic Sans MS"' lang=en-US>,</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>javax.money.MonetaryAmount
  </span><span style='font-family:"Microsoft YaHei UI"'>的任意子类</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@NotBlank</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1902in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>不为</span><span style='font-family:"Comic Sans MS"'>null</span><span
  style='font-family:"Microsoft YaHei UI"'>，不为空值，不为全空格。功能强大于</span><span
  style='font-family:"Comic Sans MS"'>@NotEmpty</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.077in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>String</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@NotEmpty</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1708in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>校验是否为</span><span style='font-family:"Comic Sans MS"'>null</span><span
  style='font-family:"Microsoft YaHei UI"'>或者为空值。功能强于</span><span
  style='font-family:"Comic Sans MS"'>@NotNull</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.0965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>String,</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>Collection,</p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>Map</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>and</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>arrays</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@NotNull</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1833in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>Checks</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>that</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>the</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>annotated</span><span style='font-family:
  "Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:"Comic Sans MS"'>value</span><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
  "Comic Sans MS"'>is</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>notnull.</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.0847in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>Any</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>type</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@Null</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1708in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>Checks</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>that</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>the</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>annotated</span><span style='font-family:
  "Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:"Comic Sans MS"'>value</span><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
  "Comic Sans MS"'>is</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>null.</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.0965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>Any</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>type</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@Past</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1708in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>检查注解对象中的值表示的日期比当前早</span><span style='font-family:"Comic Sans MS"'>.</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>java.util.Date,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>java.util.Calendar;</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>如果</span><span style='font-family:"Comic Sans MS"'>
  Joda Time </span><span style='font-family:"Microsoft YaHei UI"'>日期</span><span
  style='font-family:"Comic Sans MS"'>/</span><span style='font-family:"Microsoft YaHei UI"'>时间</span><span
  style='font-family:"Comic Sans MS"'> API </span><span style='font-family:
  "Microsoft YaHei UI"'>在类路径上，则由</span><span style='font-family:"Comic Sans MS"'>
  HV </span><span style='font-family:"Microsoft YaHei UI"'>额外支持：</span><span
  style='font-family:"Comic Sans MS"'>ReadablePartial </span><span
  style='font-family:"Microsoft YaHei UI"'>和</span><span style='font-family:
  "Comic Sans MS"'> ReadableInstant </span><span style='font-family:"Microsoft YaHei UI"'>的任何实现</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'
  lang=en-US>@PastOrPresent</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1708in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:#17233F'>检查日期是否在过去或现在，小于等于当前日期。</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.125in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>java.util.Date,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>java.util.Calendar;</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>如果</span><span style='font-family:"Comic Sans MS"'>
  Joda Time </span><span style='font-family:"Microsoft YaHei UI"'>日期</span><span
  style='font-family:"Comic Sans MS"'>/</span><span style='font-family:"Microsoft YaHei UI"'>时间</span><span
  style='font-family:"Comic Sans MS"'> API </span><span style='font-family:
  "Microsoft YaHei UI"'>在类路径上，则由</span><span style='font-family:"Comic Sans MS"'>
  HV </span><span style='font-family:"Microsoft YaHei UI"'>额外支持：</span><span
  style='font-family:"Comic Sans MS"'>ReadablePartial </span><span
  style='font-family:"Microsoft YaHei UI"'>和</span><span style='font-family:
  "Comic Sans MS"'> ReadableInstant </span><span style='font-family:"Microsoft YaHei UI"'>的任何实现</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@Pattern</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1708in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>检查该字符串是否能够在</span><span style='font-family:"Comic Sans MS"'>match</span><span
  style='font-family:"Microsoft YaHei UI"'>指定的情况下被</span><span
  style='font-family:"Comic Sans MS"'>regex</span><span style='font-family:
  "Microsoft YaHei UI"'>定义的正则表达式匹配</span><span style='font-family:"Comic Sans MS"'>.</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.0965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>String</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'
  lang=en-US>@Positive</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1902in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:#17233F'>检查元素是否 严格 为正。零值被视为无效</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.2284in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>BigDecimal,
  </p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>BigInteger,
  </p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>byte,
  </p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>short,
  </p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>int,
  </p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>long,
  </p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>原生类型的封装类</span><span style='font-family:"Comic Sans MS"'>,
  CharSequence </span><span style='font-family:"Microsoft YaHei UI"'>的任意子类（字符序列表示的数字）</span><span
  style='font-family:"Comic Sans MS"'>, </span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>Number </span><span style='font-family:"Microsoft YaHei UI"'>的任意子类</span><span
  style='font-family:"Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>　　　　　　</span><span
  style='font-family:"Comic Sans MS"'> javax.money.MonetaryAmount </span><span
  style='font-family:"Microsoft YaHei UI"'>的任意子类</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'
  lang=en-US>@PositiveOrZero</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1708in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:#17233F'>检查元素是否 为正或零</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.2284in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>BigDecimal,
  </p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>BigInteger,
  </p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>byte,
  </p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>short,
  </p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>int,
  </p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>long,
  </p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>原生类型的封装类</span><span style='font-family:"Comic Sans MS"'>,
  CharSequence </span><span style='font-family:"Microsoft YaHei UI"'>的任意子类（字符序列表示的数字）</span><span
  style='font-family:"Comic Sans MS"'>, </span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>Number </span><span style='font-family:"Microsoft YaHei UI"'>的任意子类</span><span
  style='font-family:"Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>　　　　　　</span><span
  style='font-family:"Comic Sans MS"'> javax.money.MonetaryAmount </span><span
  style='font-family:"Microsoft YaHei UI"'>的任意子类</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.6812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@Size</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1708in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>校验对象的</span><span style='font-family:"Comic Sans MS"'>size</span><span
  style='font-family:"Microsoft YaHei UI"'>。本文作者认为前提是该对象有</span><span
  style='font-family:"Comic Sans MS"'>size()</span><span style='font-family:
  "Microsoft YaHei UI"'>方法，</span><span style='font-family:"Comic Sans MS"'>String</span><span
  style='font-family:"Microsoft YaHei UI"'>除外。</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.0965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>String,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>Collection,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>Map</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>and</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>arrays</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#222222'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#222222'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>org.hibernate.validator.constraints</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>提供的校验注解</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.7083in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.6763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>检验注解</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:3.1826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>作用</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:3.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>支持的数据类型</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>@</span><span lang=zh-CN>DurationMax</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>被注释的元素必须是一个数字，其值必须小于等于指定的最大值</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>Duration</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.6763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>@</span><span lang=zh-CN>DurationMin</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>被注释的元素必须是一个数字，其值必须大于等于指定的最小值</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>Duration</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>@</span><span lang=zh-CN>CodePointLength</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.202in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>用于验证字符串的长度是否符合</span><span
  style='font-family:"Comic Sans MS"'>Unicode</span><span style='font-family:
  "Microsoft YaHei UI"'>代码点的数量</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.0534in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>CharSequence</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.6763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>@</span><span lang=zh-CN>ConstraintComposition</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>布尔运算符，应用于合成约束注释的所有约束，组合约束注释可以定义组成它的约束的布尔组合</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@CreditCardNumber</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:#17233F'>校验信用卡号码</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>String</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.6763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:#17233F'>@</span>Currency</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>检查注解的货币单位</span><span
  style='font-family:"Comic Sans MS"'> javax.money.MonetaryAmount </span><span
  style='font-family:"Microsoft YaHei UI"'>是否为指定货币单位的一部分</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1013in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>javax.money.MonetaryAmount
  </span><span style='font-family:"Microsoft YaHei UI"'>子类型</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:#17233F'>@</span>EAN</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>是否是有效的国际商品编号，</span><span
  style='font-family:"Comic Sans MS"'>null </span><span style='font-family:
  "Microsoft YaHei UI"'>是有效的</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>CharSequence</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.6763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:#17233F'>@</span>ISBN</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>是否是有效的国际标准书号，</span><span
  style='font-family:"Comic Sans MS"'>null </span><span style='font-family:
  "Microsoft YaHei UI"'>是有效的</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>CharSequence</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@Length</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>功能同</span><span style='font-family:"Comic Sans MS"'>@Size</span><span
  style='font-family:"Microsoft YaHei UI"'>，但是只支持</span><span style='font-family:
  "Comic Sans MS"'>String</span><span style='font-family:"Microsoft YaHei UI"'>类型</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>String</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.6763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:#17233F'>@</span>LuhnCheck</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>检查字符序列中的数字是否通过</span><span
  style='font-family:"Comic Sans MS"'>Luhn</span><span style='font-family:"Microsoft YaHei UI"'>校验和算法</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>CharSequence</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:#17233F'>@</span>Mod10Check</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>检查字符序列中的数字是否通过通用</span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN>mod 1</span><span style='font-family:"Comic Sans MS"' lang=en-US>0</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>校验和算法。</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>CharSequence</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.6763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:#17233F'>@</span>Mod11Check</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>检查字符序列中的数字是否通过通用</span><span
  style='font-family:"Comic Sans MS"'>mod 11</span><span style='font-family:
  "Microsoft YaHei UI"'>校验和算法。</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>CharSequence</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:#17233F'>@</span>Normalized</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>验证字符序列是否为规范化形式，可以通过设置规范化策略来验证规范化值</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>CharSequence</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.6763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:#17233F'>@</span>ParameterScriptAssert</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.202in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>通用的跨参数约束，允许使用任何与</span><span
  style='font-family:"Comic Sans MS"'>jsr 223</span><span style='font-family:
  "Microsoft YaHei UI"'>兼容的验证例程</span><span style='font-family:"Comic Sans MS"'>(</span><span
  style='font-family:"Microsoft YaHei UI"'>“</span><span style='font-family:
  "Comic Sans MS"'>Java</span><span style='font-family:"Microsoft YaHei UI"'>脚本编写”</span><span
  style='font-family:"Comic Sans MS"'>)</span><span style='font-family:"Microsoft YaHei UI"'>。</span><span
  style='font-family:"Comic Sans MS"'>TM)</span><span style='font-family:"Microsoft YaHei UI"'>脚本语言，为这种语言提供了一个引擎，可以在类路径上使用。</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.0972in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>可以在任何方法或构造函数上指定。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@Range</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"' lang=zh-CN>判断数值的范围，不仅支持数值类型，还支持字符串、字节等等类型</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>BigDecimal,</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>BigInteger,</p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>String,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>byte,</p>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>short,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>int,</p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>long
  </span><span style='font-family:"Microsoft YaHei UI"'>和原始类型的相应包装器</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.6763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@ScriptAssert</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:#17233F'>无使用价值</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Comic Sans MS"'>Any</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>type</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:#17233F'>@</span>UniqueElements</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1826in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>检测集合中的值都是唯一的</span><span
  style='font-family:"Comic Sans MS"'>(</span><span style='font-family:"Microsoft YaHei UI"'>集合不能包含相同的元素</span><span
  style='font-family:"Comic Sans MS"'>)</span><span style='font-family:"Microsoft YaHei UI"'>，</span><span
  style='font-family:"Comic Sans MS"'>null </span><span style='font-family:
  "Microsoft YaHei UI"'>是有效的。</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.0729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>Collection</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.6763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>@URL</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.1854in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>根据</span><span style='font-family:"Comic Sans MS"'>
  RFC2396 </span><span style='font-family:"Microsoft YaHei UI"'>检查带注释的字符串是否是有效的</span><span
  style='font-family:"Comic Sans MS"'> URL</span><span style='font-family:"Microsoft YaHei UI"'>。如果指定了任何可选参数协议、主机或端口，则相应的</span><span
  style='font-family:"Comic Sans MS"'> URL </span><span style='font-family:
  "Microsoft YaHei UI"'>片段必须与指定值匹配。可选参数</span><span style='font-family:"Comic Sans MS"'>
  regexp </span><span style='font-family:"Microsoft YaHei UI"'>和</span><span
  style='font-family:"Comic Sans MS"'> flags </span><span style='font-family:
  "Microsoft YaHei UI"'>允许指定</span><span style='font-family:"Comic Sans MS"'>
  URL </span><span style='font-family:"Microsoft YaHei UI"'>必须匹配的附加正则表达式（包括正则表达式标志）。</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.0701in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>String</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.6763in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  style='color:#17233F'>@</span>UUID</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.1979in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:#17233F'><span style='font-family:
  "Microsoft YaHei UI"'>根据</span><span style='font-family:"Comic Sans MS"'>RFC
  4122</span><span style='font-family:"Microsoft YaHei UI"'>，检查注释的字符序列是否是有效的通用唯一标识符。</span><span
  style='font-family:"Comic Sans MS"'>null</span><span style='font-family:"Microsoft YaHei UI"'>始终有效。</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.0576in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#17233F'>CharSequence</p>
  </td>
 </tr>
</table>

</div>

<p style='margin-top:0pt;margin-bottom:12pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>public</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>class</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>User</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>{</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:#FFC000'>@NotNull</span><span
style='font-family:"Comic Sans MS";color:black'>(message</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Microsoft YaHei UI";color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:maroon'>&quot;uid</span><span style='font-family:"Microsoft YaHei UI";
color:maroon'>不能为空</span><span style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>)</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>private</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:#8000FF'>int</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>uid;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Microsoft YaHei UI";color:#FFC000'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:#FFC000'>@NotNull</span><span
style='font-family:"Comic Sans MS";color:black'>(message</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Microsoft YaHei UI";color:black'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:maroon'>&quot;age</span><span style='font-family:"Microsoft YaHei UI";
color:maroon'>不能为空</span><span style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Comic Sans MS";color:black'>)</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>private</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:#8000FF'>int</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>age;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>}</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#222222'><span style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#222222'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>以上所有校验注解需要配合</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>@Valid</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>@Valided</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>注解使用</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://docs.jboss.org/hibernate/stable/validator/reference/en-US/html_single/#validator-customconstraints"><span
style='font-family:"Comic Sans MS"'>https://docs.jboss.org/hibernate/stable/validator/reference/en-US/html_single/#validator-customconstraints</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
