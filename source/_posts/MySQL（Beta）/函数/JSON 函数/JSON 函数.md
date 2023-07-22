---
categories:
- MySQL
date:
- 2023-1-23 18:06:51
---

<html xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:dt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882"
xmlns="http://www.w3.org/TR/REC-html40">

<head>
<meta http-equiv=Content-Type content="text/html; charset=utf-8">
<meta name=ProgId content=OneNote.File>
<meta name=Generator content="Microsoft OneNote 15">
</head>

<body lang=zh-CN style='font-family:Calibri;font-size:11.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.6361in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.6361in'>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>函数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>-&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"' lang=zh-CN>评估路径后从</span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN> JSON </span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>列返回值</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>;</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>等效于</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> JSON_EXTRACT</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>()</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>-&gt;&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"' lang=zh-CN>在评估路径并取消引用结果后，从</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>JSON</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>列返回值</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>;</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>等效于</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> JSON_UNQUOTE</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>（</span><span
  style='font-family:"Microsoft YaHei UI"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>JSON_EXTRACT</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>() </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>）</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_ARRAY()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>创建</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>数组</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_ARRAY_APPEND()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>将数据追加到</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_ARRAY_INSERT()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>插入到</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>数组中</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_CONTAINS()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档是否在路径处包含特定对象</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_CONTAINS_PATH()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档是否在路径上包含任何数据</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_DEPTH()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档的最大深度</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_EXTRACT()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>从</span><span style='font-family:"Comic Sans MS"'> JSON
  </span><span style='font-family:"Microsoft YaHei UI"'>文档返回数据</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_INSERT()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>将数据插入</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_KEYS()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>来自</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档的密钥数组</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_LENGTH()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档中的元素数</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_MERGE_PATCH()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>合并</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档，替换重复键的值</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_MERGE_PRESERVE()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>合并</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档，保留重复的密钥</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_OBJECT()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>创建</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>对象</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_OVERLAPS()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>比较两个</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档，如果这些文档具有任何共同的键值对或数组元素，则返回</span><span
  style='font-family:"Comic Sans MS"'> TRUE </span><span style='font-family:
  "Microsoft YaHei UI"'>（</span><span style='font-family:"Comic Sans MS"'>1</span><span
  style='font-family:"Microsoft YaHei UI"'>），否则返回</span><span style='font-family:
  "Comic Sans MS"'> FALSE </span><span style='font-family:"Microsoft YaHei UI"'>（</span><span
  style='font-family:"Comic Sans MS"'>0</span><span style='font-family:"Microsoft YaHei UI"'>）</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_PRETTY()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>以人类可读的格式打印</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_QUOTE()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>引用</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_REMOVE()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>从</span><span style='font-family:"Comic Sans MS"'> JSON
  </span><span style='font-family:"Microsoft YaHei UI"'>文档中删除数据</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_REPLACE()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>替换</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档中的值</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_SCHEMA_VALID()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.9881in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>根据</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>架构验证</span><span
  style='font-family:"Comic Sans MS"'> JSON </span><span style='font-family:
  "Microsoft YaHei UI"'>文档</span><span style='font-family:"Comic Sans MS"'>;</span><span
  style='font-family:"Microsoft YaHei UI"'>如果文档针对架构进行验证，则返回</span><span
  style='font-family:"Comic Sans MS"'> TRUE/1;</span><span style='font-family:
  "Microsoft YaHei UI"'>如果文档未针对架构进行验证，则返回</span><span style='font-family:"Comic Sans MS"'>
  FALSE/0</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_SCHEMA_VALIDATION_REPORT()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.934in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>根据</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>架构验证</span><span
  style='font-family:"Comic Sans MS"'> JSON </span><span style='font-family:
  "Microsoft YaHei UI"'>文档</span><span style='font-family:"Comic Sans MS"'>;</span><span
  style='font-family:"Microsoft YaHei UI"'>以</span><span style='font-family:
  "Comic Sans MS"'> JSON </span><span style='font-family:"Microsoft YaHei UI"'>格式返回有关验证结果的报告，包括成功或失败以及失败原因</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_SEARCH()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档中的值的路径</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_SET()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>将数据插入</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_STORAGE_FREE()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>部分更新后</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>列值的二进制表示形式中的释放空间</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_STORAGE_SIZE()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>用于存储</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档的二进制表示形式的空间</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_TABLE()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>以关系表的形式从</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>表达式返回数据</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_TYPE()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>JSON </span><span style='font-family:"Microsoft YaHei UI"'>值的类型</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_UNQUOTE()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>取消引用</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>值</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_VALID()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>JSON </span><span style='font-family:"Microsoft YaHei UI"'>值是否有效</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>JSON_VALUE()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>从提供的路径所指向的位置的</span><span style='font-family:"Comic Sans MS"'>
  JSON </span><span style='font-family:"Microsoft YaHei UI"'>文档中提取值</span><span
  style='font-family:"Comic Sans MS"'>;</span><span style='font-family:"Microsoft YaHei UI"'>将此值返回为</span><span
  style='font-family:"Comic Sans MS"'> VARCHAR</span><span style='font-family:
  "Microsoft YaHei UI"'>（</span><span style='font-family:"Comic Sans MS"'>512</span><span
  style='font-family:"Microsoft YaHei UI"'>） 或指定类型</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.5541in;'>
  <p style='margin:0in;font-family:"Comic Sans MS";font-size:11.5pt;color:black'>MEMBER
  OF()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.9187in;'>
  <p style='margin:0in;font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>如果第一个操作数与作为第二个操作数传递的</span><span style='font-family:
  "Comic Sans MS"'> JSON </span><span style='font-family:"Microsoft YaHei UI"'>数组的任何元素匹配，则返回</span><span
  style='font-family:"Comic Sans MS"'> true </span><span style='font-family:
  "Microsoft YaHei UI"'>（</span><span style='font-family:"Comic Sans MS"'>1</span><span
  style='font-family:"Microsoft YaHei UI"'>），否则返回</span><span style='font-family:
  "Comic Sans MS"'> false </span><span style='font-family:"Microsoft YaHei UI"'>（</span><span
  style='font-family:"Comic Sans MS"'>0</span><span style='font-family:"Microsoft YaHei UI"'>）</span></p>
  </td>
 </tr>
</table>

</div>

</div>

</div>

</div>

<!--EndFragment-->
</body>

</html>
