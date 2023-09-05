---
categories:
  - MyBatis
tags:
  - settings
date:
  - 2023-3-27 7:11:01
---

<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:#333333"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">一个配置完整的</span><span
                style="font-family:&quot;Comic Sans MS&quot;"> settings </span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">元素的示例如下：</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#6da845"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&lt;settings&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&lt;setting </span><span style="color:#660066">name</span><span
                style="color:#666600">=</span><span style="color:#008800">"cacheEnabled" </span><span
                style="color:#660066">value</span><span style="color:#666600">=</span><span
                style="color:#008800">"true"</span><span style="color:#000088">/&gt;<br>setting </span><span
                style="color:#660066">name</span><span style="color:#666600">=</span><span
                style="color:#008800">"lazyLoadingEnabled" </span><span style="color:#660066">value</span><span
                style="color:#666600">=</span><span style="color:#008800">"true"</span><span
                style="color:#000088">/&gt;<br>&lt;setting </span><span style="color:#660066">name</span><span
                style="color:#666600">=</span><span style="color:#008800">"multipleResultSetsEnabled" </span><span
                style="color:#660066">value</span><span style="color:#666600">=</span><span
                style="color:#008800">"true"</span><span style="color:#000088">/&gt;<br>&lt;setting </span><span
                style="color:#660066">name</span><span style="color:#666600">=</span><span
                style="color:#008800">"useColumnLabel" </span><span style="color:#660066">value</span><span
                style="color:#666600">=</span><span style="color:#008800">"true"</span><span
                style="color:#000088">/&gt;<br>&lt;setting </span><span style="color:#660066">name</span><span
                style="color:#666600">=</span><span style="color:#008800">"useGeneratedKeys" </span><span
                style="color:#660066">value</span><span style="color:#666600">=</span><span
                style="color:#008800">"false"</span><span style="color:#000088">/&gt;<br>&lt;setting </span><span
                style="color:#660066">name</span><span style="color:#666600">=</span><span
                style="color:#008800">"autoMappingBehavior" </span><span style="color:#660066">value</span><span
                style="color:#666600">=</span><span style="color:#008800">"PARTIAL"</span><span
                style="color:#000088">/&gt;<br>&lt;setting </span><span style="color:#660066">name</span><span
                style="color:#666600">=</span><span style="color:#008800">"autoMappingUnknownColumnBehavior"
            </span><span style="color:#660066">value</span><span style="color:#666600">=</span><span
                style="color:#008800">"WARNING"</span><span style="color:#000088">/&gt;<br>&lt;setting </span><span
                style="color:#660066">name</span><span style="color:#666600">=</span><span
                style="color:#008800">"defaultExecutorType" </span><span style="color:#660066">value</span><span
                style="color:#666600">=</span><span style="color:#008800">"SIMPLE"</span><span
                style="color:#000088">/&gt;<br>&lt;setting </span><span style="color:#660066">name</span><span
                style="color:#666600">=</span><span style="color:#008800">"defaultStatementTimeout" </span><span
                style="color:#660066">value</span><span style="color:#666600">=</span><span
                style="color:#008800">"25"</span><span style="color:#000088">/&gt;<br>&lt;setting </span><span
                style="color:#660066">name</span><span style="color:#666600">=</span><span
                style="color:#008800">"defaultFetchSize" </span><span style="color:#660066">value</span><span
                style="color:#666600">=</span><span style="color:#008800">"100"</span><span
                style="color:#000088">/&gt;<br>&lt;setting </span><span style="color:#660066">name</span><span
                style="color:#666600">=</span><span style="color:#008800">"safeRowBoundsEnabled" </span><span
                style="color:#660066">value</span><span style="color:#666600">=</span><span
                style="color:#008800">"false"</span><span style="color:#000088">/&gt;<br>&lt;setting </span><span
                style="color:#660066">name</span><span style="color:#666600">=</span><span
                style="color:#008800">"mapUnderscoreToCamelCase" </span><span style="color:#660066">value</span><span
                style="color:#666600">=</span><span style="color:#008800">"false"</span><span
                style="color:#000088">/&gt;<br>&lt;setting </span><span style="color:#660066">name</span><span
                style="color:#666600">=</span><span style="color:#008800">"localCacheScope" </span><span
                style="color:#660066">value</span><span style="color:#666600">=</span><span
                style="color:#008800">"SESSION"</span><span style="color:#000088">/&gt;<br>&lt;setting </span><span
                style="color:#660066">name</span><span style="color:#666600">=</span><span
                style="color:#008800">"jdbcTypeForNull" </span><span style="color:#660066">value</span><span
                style="color:#666600">=</span><span style="color:#008800">"OTHER"</span><span
                style="color:#000088">/&gt;<br>&lt;setting </span><span style="color:#660066">name</span><span
                style="color:#666600">=</span><span style="color:#008800">"lazyLoadTriggerMethods" </span><span
                style="color:#660066">value</span><span style="color:#666600">=</span><span
                style="color:#008800">"equals,clone,hashCode,toString"</span><span
                style="color:#000088">/&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#000088">&lt;/settings&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>设置名</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>有效值</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>默认值</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">cacheEnabled</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">全局性地开启或关闭所有映射器配置文件中已配置的任何缓存。</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">true | false</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">true</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">lazyLoadingEnabled</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">延迟加载的全局开关。</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">当开启时，所有关联对象都会延迟加载。</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">&nbsp;特定关联关系中可通过设置&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">fetchType</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">&nbsp;属性来覆盖该项的开关状态。</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">true | false</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">false</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">aggressiveLazyLoading</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">开启时，任一方法的调用都会加载该对象的所有延迟加载属性。</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">否则，每个延迟加载属性会按需加载（参考&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">lazyLoadTriggerMethods</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">)</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">。</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">true | false</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">false</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">multipleResultSetsEnabled</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">是否允许单个语句返回多结果集（需要数据库驱动支持）。</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">true | false</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">true</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">useColumnLabel</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">使用列标签代替列名。</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">实际表现依赖于数据库驱动，具体可参考数据库驱动的相关文档，或通过对比测试来观察。</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">true | false</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">true</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">useGeneratedKeys</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4472in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">允许</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">支持自动生成主键，需要数据库驱动支持。</span></span></span>
                </p>
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">如果设置为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> true</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，将强制使用自动生成主键。尽管一些数据库驱动不支持此特性，但仍可正常工作（如</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Derby</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">）。</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">true | false</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0576in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">False</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">autoMappingBehavior</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指定</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> MyBatis </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">应如何自动映射列到字段或属性。 </span></span></span>
                </p>
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Comic Sans MS&quot;">NONE </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">表示关闭自动映射；</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">PARTIAL </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">只会自动映射没有定义嵌套结果映射的字段。
                            </span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Comic Sans MS&quot;">FULL </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">会自动映射任何复杂的结果集（无论是否嵌套）。</span></span></span>
                </p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">NONE, PARTIAL, FULL</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">PARTIAL</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9409in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">autoMappingUnknownColumnBehavior</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.5055in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">指定发现自动映射目标未知列（或未知属性类型）的行为。</span></span></span></p>
                <ul>
                    <li><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                    style="color:#dd1144">NONE</span></span></span><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#404040">:
                                </span></span></span><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                    style="color:#404040">不做任何反应</span></span></span></li>
                    <li><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                    style="color:#dd1144">WARNING</span></span></span><span
                            style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                    style="color:#404040">: </span></span></span><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                    style="color:#404040">输出警告日志（</span></span></span><span
                            style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                    style="color:#dd1144">'org.apache.ibatis.session.AutoMappingUnknownColumnBehavior'</span></span></span><span
                            style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                    style="color:#404040">&nbsp;的日志等级必须设置为&nbsp;</span></span></span><span
                            style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                    style="color:#dd1144">WARN</span></span></span><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                    style="color:#404040">）</span></span></span></li>
                    <li><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                    style="color:#dd1144">FAILING</span></span></span><span
                            style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                    style="color:#404040">: </span></span></span><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                    style="color:#404040">映射失败</span></span></span><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#404040">
                                    (</span></span></span><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                    style="color:#404040">抛出&nbsp;</span></span></span><span
                            style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                    style="color:#dd1144">SqlSessionException</span></span></span><span
                            style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                    style="color:#404040">)</span></span></span></li>
                </ul>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">NONE, WARNING, FAILING</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.9798in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">NONE</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">defaultExecutorType</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">配置默认的执行器。</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Comic Sans MS&quot;">SIMPLE </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">就是普通的执行器；</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Comic Sans MS&quot;">REUSE </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">执行器会重用预处理语句（</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">PreparedStatement</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">）； </span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Comic Sans MS&quot;">BATCH </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">执行器不仅重用语句还会执行批量更新</span></span></span>
                </p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">SIMPLE REUSE BATCH</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">SIMPLE</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">defaultStatementTimeout</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">设置超时时间，它决定数据库驱动等待数据库响应的秒数。</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">任意正整数</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">未设置</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> (null)</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">defaultFetchSize</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">为驱动的结果集获取数量（</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">fetchSize</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">）设置一个建议值。</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">此参数只可以在查询设置中被覆盖。</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">任意正整数</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">未设置</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> (null)</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">defaultResultSetType</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指定语句默认的滚动策略。（新增于</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> 3.5.2</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">）</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">FORWARD_ONLY</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">SCROLL_SENSITIVE</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">SCROLL_INSENSITIVE</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Comic Sans MS&quot;">DEFAULT</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">（等同于未设置）</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">未设置</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> (null)</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">safeRowBoundsEnabled</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">是否允许在嵌套语句中使用分页（</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">RowBounds</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">）</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">如果允许使用则设置为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> false</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">true | false</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">False</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">safeResultHandlerEnabled</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">是否允许在嵌套语句中使用结果处理器（</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">ResultHandler</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">）</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">如果允许使用则设置为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> false</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">true | false</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">True</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">mapUnderscoreToCamelCase</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">是否开启驼峰命名自动映射，即从经典数据库列名</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> A_COLUMN </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">映射到经典</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Java </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">属性名</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> aColumn</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">true | false</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">False</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">localCacheScope</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Comic Sans MS&quot;">MyBatis </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">利用本地缓存机制（</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">Local Cache</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">）防止循环引用和加速重复的嵌套查询。</span></span></span>
                </p>
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;默认值为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> SESSION</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，会缓存一个会话中执行的所有查询</span></span></span>
                </p>
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">若设置值为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> STATEMENT</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，本地缓存将仅用于执行语句，对相同</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> SqlSession </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的不同查询将不会进行缓存。</span></span></span>
                </p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">SESSION | STATEMENT</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">SESSION</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">jdbcTypeForNull</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4423in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">当没有为参数指定特定的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">类型时，空值的默认</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">类型。 </span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">某些数据库驱动需要指定列的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> JDBC </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">类型，多数情况直接用一般类型即可，比如</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> NULL</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">、</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">VARCHAR </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">或</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> OTHER</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Comic Sans MS&quot;">JdbcType </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">常量，常用值：</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">NULL</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">、</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">VARCHAR </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">或</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> OTHER</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0631in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">OTHER</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">lazyLoadTriggerMethods</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">指定对象的哪些方法触发一次延迟加载。</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">用逗号分隔的方法列表。</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">equals,clone,hashCode,toString</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">defaultScriptingLanguage</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指定动态</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> SQL </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">生成使用的默认脚本语言。</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">一个类型别名或全限定类名</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.2388in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">org.apache.ibatis.scripting.xmltags.XMLLanguageDriver</span></span></span>
                </p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">defaultEnumTypeHandler</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">指定</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333"> Enum
                            </span></span><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">使用的默认&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">TypeHandler</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">&nbsp;。（新增于</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">
                                3.4.5</span></span><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">）</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">一个类型别名或全限定类名</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">org.apache.ibatis.type.EnumTypeHandler</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">callSettersOnNulls</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4472in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指定当结果集中值为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> null </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的时候是否调用映射对象的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> setter</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">（</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">map </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象时为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> put</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">）方法，这在依赖于</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Map.keySet() </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">或</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> null </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">值进行初始化时比较有用。</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">注意基本类型（</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">int</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">、</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">boolean </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">等）是不能设置成</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> null </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的。</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">true | false</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0576in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">false</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">returnInstanceForEmptyRow</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">当返回行的所有列都是空时，</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">MyBatis</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">默认返回&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">null</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#333333">。
                                当开启这个设置时，</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">MyBatis</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#333333">会返回一个空实例。
                            </span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">请注意，它也适用于嵌套的结果集（如集合或关联）。（新增于</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> 3.4.2</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">）</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">true | false</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">false</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">logPrefix</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指定</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> MyBatis </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">增加到日志名称的前缀。</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">任何字符串</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">未设置</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">logImpl</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4472in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指定</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> MyBatis </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">所用日志的具体实现，未指定时将自动查找。</span></span></span>
                </p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">SLF4J</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">LOG4J</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">LOG4J2</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">JDK_LOGGING</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">COMMONS_LOGGING</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">STDOUT_LOGGING</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">NO_LOGGING</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0576in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">未设置</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">proxyFactory</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4472in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指定</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Mybatis </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">创建可延迟加载对象所用到的代理工具。</span></span></span>
                </p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">CGLIB</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">JAVASSIST</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0576in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Comic Sans MS&quot;">JAVASSIST </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">（</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">MyBatis 3.3 </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">以上）</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">vfsImpl</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指定</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> VFS </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的实现</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.2in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">自定义</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> VFS </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的实现的类全限定名，以逗号分隔。</span></span></span>
                </p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0576in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">未设置</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">useActualParamName</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4472in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">允许使用方法签名中的名称作为语句参数名称。</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">为了使用该特性，你的项目必须采用</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333"> Java 8
                            </span></span><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">编译，并且加上&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">-parameters</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">&nbsp;选项。（新增于</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">
                                3.4.1</span></span><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">）</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">true | false</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0576in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">true</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">configurationFactory</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">指定一个提供&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">Configuration</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#333333">&nbsp;实例的类。
                            </span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">这个被返回的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Configuration </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">实例用来加载被反序列化对象的延迟加载属性值。
                            </span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">这个类必须包含一个签名为</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#dd1144">static
                                Configuration getConfiguration()</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">&nbsp;的方法。（新增于</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">
                                3.2.3</span></span><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">）</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">一个类型别名或完全限定类名。</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">未设置</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">shrinkWhitespacesInSql</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="color:#333333"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">从</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">SQL</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">中删除多余的空格字符。请注意，这也会影响</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">SQL</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">中的文字字符串。</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> (</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">新增于</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> 3.5.5)</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">true | false</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">false</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9215in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">defaultSqlProviderType</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4277in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">Specifies an sql provider class that holds provider method (Since
                                3.5.6).</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">This class apply to the</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">type</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">(or</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">) attribute on sql
                                provider annotation(e.g.</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#dd1144">@SelectProvider</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">), when these
                                attribute was omitted.</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1805in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">A type alias or fully qualified class name</span></span></span>
                </p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.077in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">Not set</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        data-cke-saved-href="https://mybatis.org/mybatis-3/zh/configuration.html"
        href="https://mybatis.org/mybatis-3/zh/configuration.html"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://mybatis.org/mybatis-3/zh/configuration.html</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>
