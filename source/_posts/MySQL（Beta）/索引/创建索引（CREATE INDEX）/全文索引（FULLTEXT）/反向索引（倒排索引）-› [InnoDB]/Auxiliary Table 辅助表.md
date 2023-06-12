categories:
- MySQL
tags:
- Auxiliary Table
date:
- 2023-3-22 15:04:12
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.7861in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.7861in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>当一个全文索引被创建时，必须有一个列与</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>word</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>进行映射，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>InnoDB</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>会隐式的建立一个名为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>FTS_DOC_ID</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的列（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>bigint
     unsigned not null</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>），并在其上创建一个唯一索引，用于标识分词出现的记录行。一系列的辅助表会被同时创建，用于存储倒排索引的信息。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>SELECT</span> table_id, name, space </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>FROM</span><span lang=zh-CN>
INFORMATION_SCHEMA.INNODB_SYS_TABLES<br>
</span><span style='color:#2E75B5' lang=zh-CN>WHERE</span><span lang=zh-CN>
name </span><span style='color:#2E75B5' lang=zh-CN>LIKE</span><span lang=zh-CN>
'</span><span style='color:#70AD47' lang=zh-CN>test/%</span><span lang=zh-CN>';</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果如下：</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>+-----------+--------------------------------------------------------------------------+-------+<br>
| table_id </span><span lang=en-US><span style='mso-spacerun:yes'> </span></span><span
lang=zh-CN>| name<span
style='mso-spacerun:yes'>                                       </span></span><span
lang=en-US><span
style='mso-spacerun:yes'>                                               </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'>        </span>| space
|<br>
+-----------+--------------------------------------------------------------------------+-------+<br>
|<span style='mso-spacerun:yes'>      </span>333</span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>|
test/FTS_0000000000000147_00000000000001c9_INDEX_1 </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>|<span
style='mso-spacerun:yes'>   </span>289 |<br>
|<span style='mso-spacerun:yes'>      </span>334</span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>|
test/FTS_0000000000000147_00000000000001c9_INDEX_2 </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>|<span
style='mso-spacerun:yes'>   </span>290 |<br>
|<span style='mso-spacerun:yes'>      </span>335 </span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>|
test/FTS_0000000000000147_00000000000001c9_INDEX_3 </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>|<span
style='mso-spacerun:yes'>   </span>291 |<br>
|<span style='mso-spacerun:yes'>      </span>336 </span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>|
test/FTS_0000000000000147_00000000000001c9_INDEX_4 </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>|<span
style='mso-spacerun:yes'>   </span>292 |<br>
|<span style='mso-spacerun:yes'>      </span>337 </span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>|
test/FTS_0000000000000147_00000000000001c9_INDEX_5 </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>|<span
style='mso-spacerun:yes'>   </span>293 |<br>
|<span style='mso-spacerun:yes'>      </span>338 </span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>|
test/FTS_0000000000000147_00000000000001c9_INDEX_6 </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>|<span
style='mso-spacerun:yes'>   </span>294 |<br>
|<span style='mso-spacerun:yes'>      </span>330 </span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>|
test/FTS_0000000000000147_BEING_DELETED<span
style='mso-spacerun:yes'>           </span></span><span lang=en-US><span
style='mso-spacerun:yes'>          </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span></span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>|<span
style='mso-spacerun:yes'>   </span>286 |<br>
|<span style='mso-spacerun:yes'>      </span>331 </span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>|
test/FTS_0000000000000147_BEING_DELETED_CACHE<span
style='mso-spacerun:yes'>      </span></span><span lang=en-US><span
style='mso-spacerun:yes'>    </span></span><span lang=zh-CN>|<span
style='mso-spacerun:yes'>   </span>287 |<br>
|<span style='mso-spacerun:yes'>      </span>332 </span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>|
test/FTS_0000000000000147_CONFIG<span
style='mso-spacerun:yes'>                   </span></span><span lang=en-US><span
style='mso-spacerun:yes'>                   </span></span><span lang=zh-CN>|<span
style='mso-spacerun:yes'>   </span>288 |<br>
|<span style='mso-spacerun:yes'>      </span>328</span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>| test/FTS_0000000000000147_DELETED<span
style='mso-spacerun:yes'>                  </span></span><span lang=en-US><span
style='mso-spacerun:yes'>                  </span></span><span lang=zh-CN>|<span
style='mso-spacerun:yes'>   </span>284 |<br>
|<span style='mso-spacerun:yes'>      </span>329 </span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>|
test/FTS_0000000000000147_DELETED_CACHE<span
style='mso-spacerun:yes'>           </span></span><span lang=en-US><span
style='mso-spacerun:yes'>           </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>|<span style='mso-spacerun:yes'>   </span>285
|<br>
|<span style='mso-spacerun:yes'>      </span>327 </span><span lang=en-US><span
style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>|
test/opening_lines<span style='mso-spacerun:yes'>                              
</span></span><span lang=en-US><span
style='mso-spacerun:yes'>                                         </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'>  </span>|<span
style='mso-spacerun:yes'>   </span>283
|<br>
+-----------+--------------------------------------------------------------------------+-------+</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:4.7569in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>列名</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:4.5659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>解释</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.7638in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>FTS_0000000000000147_00000000000001c9_INDEX_1-6</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.559in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"' lang=zh-CN>这</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>6</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>张辅助表用于存储倒排索引，存储的是分词、文档</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>ID</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>和位置；即</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>InnoDB</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>采用的是</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>full inverted index</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.7569in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>FTS_0000000000000147_DELETED</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.5659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:black'>存储的是已经被删除的、但还未从全文索引数据中移除的文档</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.7569in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>FTS_0000000000000147_DELETED_CACHE</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.5659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"' lang=zh-CN>FTS_0000000000000147_DELETED</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的缓存表。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.7569in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>FTS_0000000000000147_BEING_DELETED</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.5659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:black'>存储的是已经被删除的、且正在从全文索引数据中移除的文档</p>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"' lang=zh-CN>(</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>即删除</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>FTS Index Cache</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>并做了</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>OPTIMIZE TABLE)</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>&nbsp;</p>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"' lang=zh-CN>主要用于辅助进行</span><span style='font-family:
  "Comic Sans MS"' lang=en-US> </span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN>OPTIMIZE TABLE</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> </span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>时将</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>DELETED/DELETED_CACHED</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>表中的记录转储到其中</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.7569in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>FTS_0000000000000147_BEING_DELETED_CACHE</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.5659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"' lang=zh-CN>FTS_0000000000000147_BEING_DELETED</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的缓存表。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.7569in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>FTS_0000000000000147_CONFIG</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.5659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"' lang=zh-CN>存储全文索引的内部信息；最重要的是存储</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>FTS_SYNCED_DOC_ID</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>，表示已经解析且刷盘的文档；当发生</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> crash recovery</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>时，可以通过</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>FTS_SYNCED_DOC_ID</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>去判断哪些文档没有刷盘、需要重新解析并加入到全文索引缓存中。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:13.5pt'><span
style='font-weight:bold'>数据插入</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果当插入一个文档时，就需要进行分词、更新辅助表等操作，那可能会造成极大的开销。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>为了避免这个问题，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>InnoDB</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>引入了全文索引缓存，用于缓存最近插入的数据，直到缓存占满才会批量将数据刷盘写入辅助表；</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>可以通过</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>INFORMATION_SCHEMA.INNODB_FT_INDEX_CACHE</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>查询最近插入的数据，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>i</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>nnodb_ft_cache_size</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>/</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>innodb_ft_total_cache_size</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>参数控制单个表</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>/</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>所有表的全文索引缓存大小</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>全文索引缓存只缓存了最近插入的数据，而没有缓存辅助表的数据，当返回结果时，需要将辅助表的数据和缓存中最近插入的数据进行合并后再返回。</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:13.5pt'><span
style='font-weight:bold'>数据删除</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>如果删除一个文档时，就需要更新辅助表，这也可能会造成极大的开销。为了避免这个问题，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>InnoDB</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>会记录其</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>FTS
     Document ID</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>，并将其保存在</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>FTS_0000000000000147_DELETED/FTS_0000000000000147_DELETED_CACHE</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>表，而不会将其从辅助表中删除，如果要彻底清理被删除数据，需要通过</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>optimize
     table</span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>重建全文索引。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5' lang=en-US>SET</span><span
style='color:#2E75B5' lang=zh-CN> GLOBAL</span><span lang=zh-CN>
innodb_optimize_fulltext_only=ON;<br>
Query OK, 0 rows affected (0.01 sec)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#2E75B5'>OPTIMIZE TABLE</span> opening_lines;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果如下：</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>+----------------------+------------+------------+------------+<br>
| Table<span style='mso-spacerun:yes'>            </span></span><span
lang=en-US><span style='mso-spacerun:yes'>       </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'>  </span>| Op<span
style='mso-spacerun:yes'>     </span></span><span lang=en-US><span
style='mso-spacerun:yes'>    </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span></span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>| Msg_type | Msg_text
|<br>
+----------------------+------------+------------+------------+<br>
| test.opening_lines </span><span lang=en-US><span
style='mso-spacerun:yes'> </span></span><span lang=zh-CN>| optimize </span><span
lang=en-US><span style='mso-spacerun:yes'>  </span></span><span lang=zh-CN>|
status</span><span lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
lang=zh-CN><span style='mso-spacerun:yes'>  </span>| OK<span
style='mso-spacerun:yes'>      </span></span><span lang=en-US><span
style='mso-spacerun:yes'>     </span></span><span lang=zh-CN><span
style='mso-spacerun:yes'> </span>|<br>
+----------------------+------------+------------+------------+<br>
1 row in set (0.01 sec)</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:13.5pt'><span
style='font-weight:bold'>数据更新</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对于数据更新，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>InnoDB</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的处理方式是先删除数据、然后插入数据。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Microsoft YaHei UI";font-size:13.5pt'><span
style='font-weight:bold'>监控表</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> InnoDB </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>全文索引中辅助表不能被直接查询，只能通过查询</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>information_schema</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>下封装过的临时表来监控全文索引状态，具体如下：</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>INNODB_FT_CONFIG<br>
INNODB_FT_INDEX_TABLE<br>
INNODB_FT_INDEX_CACHE<br>
INNODB_FT_DEFAULT_STOPWORD<br>
INNODB_FT_DELETED<br>
INNODB_FT_BEING_DELETED</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://cloud.tencent.com/developer/article/1840518"><span
style='font-family:"Comic Sans MS"'>https://cloud.tencent.com/developer/article/1840518</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>