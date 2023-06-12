---
categories:
- MySQL
date:
- 2023-1-29 14:11:35
---

<body lang=zh-CN style='font-family:Calibri;font-size:11.0pt'>
<!--StartFragment-->

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>从</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> JSON </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>文档中提取数据，并将其作为具有指定列的关系表返回。此函数的完整语法如下所示</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#DD4A68'>JSON_TABLE</span><span style='color:#909090'>(
</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>expr</span><span style='color:#909090'>, </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>path COLUMNS </span><span style='color:#909090'>(</span><span
style='color:black'>column_list</span><span style='color:#909090'>) </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>) [</span>AS<span style='color:#909090'>] </span><span
style='color:black'>alias </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>column_list</span><span style='color:#909090'>:
</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>column</span><span style='color:#909090'>[, </span><span
style='color:black'>column</span><span style='color:#909090'>][, ...] </span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>column</span><span style='color:#909090'>: </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>name FOR ORDINALITY </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#A67F59'>| </span><span style='color:black'>name
type PATH string path </span><span style='color:#909090'>[</span><span
style='color:black'>on_empty</span><span style='color:#909090'>] [</span><span
style='color:black'>on_error</span><span style='color:#909090'>] </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>| </span><span style='color:black'>name
type EXISTS PATH string path </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>|</span> NESTED <span style='color:#909090'>[</span>PATH<span
style='color:#909090'>] </span><span style='color:black'>path COLUMNS </span><span
style='color:#909090'>(</span><span style='color:black'>column_list</span><span
style='color:#909090'>)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#909090'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'>on_empty</span><span style='color:#909090'>: </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>{</span>NULL <span style='color:#A67F59'>|</span>
DEFAULT json_string | ERROR<span style='color:#909090'>}</span> ON EMPTY </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>on_error<span style='color:#909090'>: </span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#909090'>{</span>NULL <span style='color:#A67F59'>|</span>
DEFAULT json_string <span style='color:#A67F59'>|</span> ERROR<span
style='color:#909090'>}</span> ON ERROR</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.0923in;padding:4pt 4pt 4pt 4pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:7.6736in;padding:4pt 4pt 4pt 4pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.0923in;padding:4pt 4pt 4pt 4pt'>
  <p style='margin-top:0pt;margin-bottom:11pt;font-family:"Comic Sans MS";
  font-size:11.5pt'>expr</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.7361in;padding:4pt 4pt 4pt 4pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>这是一个返回</span><span
  style='font-family:"Comic Sans MS"'> JSON </span><span style='font-family:
  "Microsoft YaHei UI"'>数据的表达式。这可以是常量 （）、列（，在子句之前指定的给定表）或函数调用 （）。</span><span
  style='font-family:"Comic Sans MS"'>'{&quot;a&quot;:1}'t1.json_datat1JSON_TABLE()FROMJSON_EXTRACT(t1.json_data,'$.post.comments')</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.0923in;padding:4pt 4pt 4pt 4pt'>
  <p style='margin-top:0pt;margin-bottom:11pt;font-family:"Comic Sans MS";
  font-size:11.5pt'>path</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.7215in;padding:4pt 4pt 4pt 4pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>应用于数据源的</span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN> JSON </span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>路径表达式。我们将与路径匹配的</span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN> JSON </span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>值称为行源</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>;</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>这用于生成一行关系数据。该子句计算行源，在行源中查找特定的</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> JSON </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>值，并将这些</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> JSON </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>值作为关系数据行的各个列中的</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> SQL </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>值返回。</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>COLUMNS</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>别名是必需的</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.0923in;padding:4pt 4pt 4pt 4pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=zh-CN><span style='mso-spacerun:yes'> </span></span><span lang=en-US>c</span><span
  lang=zh-CN>olumn</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.8055in;padding:4pt 4pt 4pt 4pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>column</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>支持以下类型的参数</span></p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:3.4604in;padding:4pt 4pt 4pt 4pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数类型</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:4.1618in;padding:4pt 4pt 4pt 4pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.4604in;padding:4pt 4pt 4pt 4pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>name FOR
    ORDINALITY</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.1618in;padding:4pt 4pt 4pt 4pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>此类型枚举子句中的行</span><span
    style='font-family:"Comic Sans MS"'>;</span><span style='font-family:"Microsoft YaHei UI"'>名为</span><span
    style='font-family:"Comic Sans MS"'> name </span><span style='font-family:
    "Microsoft YaHei UI"'>的列是一个计数器，其类型为 ，其初始值为</span><span style='font-family:
    "Comic Sans MS"'> 1</span><span style='font-family:"Microsoft YaHei UI"'>。这等效于在</span><span
    style='font-family:"Comic Sans MS"'> CREATE TABLE </span><span
    style='font-family:"Microsoft YaHei UI"'>语句中指定列，并且可用于区分子句生成的多行具有相同值的父行。</span><span
    style='font-family:"Comic Sans MS"'>COLUMNSUNSIGNED INTAUTO_INCREMENTNESTED
    [PATH]</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.4604in;padding:4pt 4pt 4pt 4pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>name
    type PATH string_path [on_empty] [on_error]</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.2312in;padding:4pt 4pt 4pt 4pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>此类型的列用于提取</span><span
    style='font-family:"Comic Sans MS"'>string_path</span><span
    style='font-family:"Microsoft YaHei UI"'>指定的值。</span><span
    style='font-family:"Comic Sans MS"'>type </span><span style='font-family:
    "Microsoft YaHei UI"'>是</span><span style='font-family:"Comic Sans MS"'>
    MySQL </span><span style='font-family:"Microsoft YaHei UI"'>标量数据类型（即，它不能是对象或数组）。
    将数据提取为</span><span style='font-family:"Comic Sans MS"'>JSON</span><span
    style='font-family:"Microsoft YaHei UI"'>，然后强制将其强制为列类型，使用适用于</span><span
    style='font-family:"Comic Sans MS"'>MySQL</span><span style='font-family:
    "Microsoft YaHei UI"'>中</span><span style='font-family:"Comic Sans MS"'>JSON</span><span
    style='font-family:"Microsoft YaHei UI"'>数据的常规自动类型转换。缺失值将触发</span><span
    style='font-family:"Comic Sans MS"'>on_empty</span><span style='font-family:
    "Microsoft YaHei UI"'>子句。保存对象或数组将触发可选的</span><span style='font-family:"Comic Sans MS"'>
    on error </span><span style='font-family:"Microsoft YaHei UI"'>子句</span><span
    style='font-family:"Comic Sans MS"'>;</span><span style='font-family:"Microsoft YaHei UI"'>当从保存为</span><span
    style='font-family:"Comic Sans MS"'> JSON </span><span style='font-family:
    "Microsoft YaHei UI"'>的值强制到表列期间发生错误（例如尝试将字符串保存到整数列）时，也会发生这种情况。</span><span
    style='font-family:"Comic Sans MS"'>JSON_TABLE()'asd'</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:3.4604in;padding:4pt 4pt 4pt 4pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>name
    type EXISTS PATH path</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.2312in;padding:4pt 4pt 4pt 4pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果</span><span
    style='font-family:"Comic Sans MS"'> path </span><span style='font-family:
    "Microsoft YaHei UI"'>指定的位置存在任何数据，则此列返回</span><span style='font-family:
    "Comic Sans MS"'> 1</span><span style='font-family:"Microsoft YaHei UI"'>，否则返回</span><span
    style='font-family:"Comic Sans MS"'> 0</span><span style='font-family:"Microsoft YaHei UI"'>。</span><span
    style='font-family:"Comic Sans MS"'>type </span><span style='font-family:
    "Microsoft YaHei UI"'>可以是任何有效的</span><span style='font-family:"Comic Sans MS"'>
    MySQL </span><span style='font-family:"Microsoft YaHei UI"'>数据类型，但通常应指定为某种类型的</span><span
    style='font-family:"Comic Sans MS"'> INT</span><span style='font-family:
    "Microsoft YaHei UI"'>。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:3.4604in;padding:4pt 4pt 4pt 4pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>NESTED
    [PATH] path COLUMNS (column_list)</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.2048in;padding:4pt 4pt 4pt 4pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>这会将</span><span
    style='font-family:"Comic Sans MS"'> JSON </span><span style='font-family:
    "Microsoft YaHei UI"'>数据中的嵌套对象或数组与父对象或数组中的</span><span style='font-family:
    "Comic Sans MS"'> JSON </span><span style='font-family:"Microsoft YaHei UI"'>值一起平展为一行。使用多个选项允许将</span><span
    style='font-family:"Comic Sans MS"'> JSON </span><span style='font-family:
    "Microsoft YaHei UI"'>值从多个嵌套级别投影到单个行中。</span><span style='font-family:"Comic Sans MS"'>PATH</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>该路径相对于
  父路径行路径，或者在嵌套路径的情况下相对于父子句的路径。</span><span style='font-family:"Comic Sans MS"'>JSON_TABLE()NESTED
  [PATH]</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.0923in;padding:4pt 4pt 4pt 4pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>on empty</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.7208in;padding:4pt 4pt 4pt 4pt'>
  <p style='margin-top:0pt;margin-bottom:11pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>如果指定）确定在数据丢失时执行的操作（取决于类型）。当子句中的列没有匹配项并为其生成补码行时，也会在子句中的列上触发此子句。</span><span
  style='font-family:"Comic Sans MS"'>on empty</span><span style='font-family:
  "Microsoft YaHei UI"'>&nbsp;采用以下值之一：</span><span style='font-family:"Comic Sans MS"'>JSON_TABLE()NESTED
  PATHNULL</span></p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:
       0pt;margin-bottom:11pt'><span style='font-family:"Comic Sans MS";
       font-size:11.5pt'>NULL ON EMPTY</span><span style='font-family:"Microsoft YaHei UI";
       font-size:11.5pt'>：列设置为</span><span style='font-family:"Comic Sans MS";
       font-size:11.5pt'> ;</span><span style='font-family:"Microsoft YaHei UI";
       font-size:11.5pt'>这是默认行为。</span><span style='font-family:"Comic Sans MS";
       font-size:11.5pt'>NULL</span></li>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:
       0pt;margin-bottom:11pt'><span style='font-family:"Comic Sans MS";
       font-size:11.5pt'>DEFAULT</span><span style='font-family:"Microsoft YaHei UI";
       font-size:11.5pt'>&nbsp;</span><span style='font-family:"Comic Sans MS";
       font-size:11.5pt'>json_string</span><span style='font-family:"Microsoft YaHei UI";
       font-size:11.5pt'>&nbsp;</span><span style='font-family:"Comic Sans MS";
       font-size:11.5pt'>ON EMPTY</span><span style='font-family:"Microsoft YaHei UI";
       font-size:11.5pt'>：提供的</span><span style='font-family:"Comic Sans MS";
       font-size:11.5pt'>json_string</span><span style='font-family:"Microsoft YaHei UI";
       font-size:11.5pt'>将解析为</span><span style='font-family:"Comic Sans MS";
       font-size:11.5pt'> JSON</span><span style='font-family:"Microsoft YaHei UI";
       font-size:11.5pt'>，只要它有效，并存储而不是缺失的值。列类型规则也适用于默认值。</span></li>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:
       0pt;margin-bottom:11pt'><span style='font-family:"Comic Sans MS";
       font-size:11.5pt'>ERROR ON EMPTY</span><span style='font-family:"Microsoft YaHei UI";
       font-size:11.5pt'>：引发错误。</span></li>
  </ul>
  <p style='margin-top:0pt;margin-bottom:11pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>如果使用，</span><span style='font-family:
  "Comic Sans MS"'>on_error</span><span style='font-family:"Microsoft YaHei UI"'>取以下值之一，并具有相应的结果，如下所示：</span></p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:
       0pt;margin-bottom:11pt'><span style='font-family:"Comic Sans MS";
       font-size:11.5pt'>NULL ON ERROR</span><span style='font-family:"Microsoft YaHei UI";
       font-size:11.5pt'>：列设置为</span><span style='font-family:"Comic Sans MS";
       font-size:11.5pt'> ;</span><span style='font-family:"Microsoft YaHei UI";
       font-size:11.5pt'>这是默认行为。</span><span style='font-family:"Comic Sans MS";
       font-size:11.5pt'>NULL</span></li>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:
       0pt;margin-bottom:11pt'><span style='font-family:"Comic Sans MS";
       font-size:11.5pt'>DEFAULT</span><span style='font-family:"Microsoft YaHei UI";
       font-size:11.5pt'>&nbsp;</span><span style='font-family:"Comic Sans MS";
       font-size:11.5pt'>json string</span><span style='font-family:"Microsoft YaHei UI";
       font-size:11.5pt'>&nbsp;</span><span style='font-family:"Comic Sans MS";
       font-size:11.5pt'>ON ERROR</span><span style='font-family:"Microsoft YaHei UI";
       font-size:11.5pt'>：</span><span style='font-family:"Comic Sans MS";
       font-size:11.5pt'>json_string</span><span style='font-family:"Microsoft YaHei UI";
       font-size:11.5pt'>解析为</span><span style='font-family:"Comic Sans MS";
       font-size:11.5pt'> JSON</span><span style='font-family:"Microsoft YaHei UI";
       font-size:11.5pt'>（前提是它有效）并存储，而不是对象或数组。</span></li>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:
       0pt;margin-bottom:11pt'><span style='font-family:"Comic Sans MS";
       font-size:11.5pt'>ERROR ON ERROR</span><span style='font-family:"Microsoft YaHei UI";
       font-size:11.5pt'>：引发错误。</span></li>
  </ul>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://dev.mysql.com/doc/refman/8.0/en/json-table-functions.html"><span
style='font-family:"Comic Sans MS"'>https://dev.mysql.com/doc/refman/8.0/en/json-table-functions.html</span></a></cite></p>

<!--EndFragment-->
</body>

</html>
