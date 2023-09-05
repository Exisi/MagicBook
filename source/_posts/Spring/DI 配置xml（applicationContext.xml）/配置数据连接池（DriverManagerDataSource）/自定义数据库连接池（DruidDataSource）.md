---
categories:
  - Spring
tags:
  - DruidDataSource
date:
  - 2022-6-28 7:38:21
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">实际项目中，我们在配置数据源的时候会指定数据库连接池，比如</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Hikari</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">（</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">spring</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">默认的数据库连接池）、</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">C3p0</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">、</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Dbcp2</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">以及阿里巴巴的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Druid</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">。应用在操作数据库的时候，直接从数据库连接池获取连接，而不需要每次创建新的连接，以下以阿里巴巴的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Druid</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">为例。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Druid</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">是一个关系型数据库连接池，它是阿里巴巴的一个开源项目。</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Druid</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">支持所有</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JDBC</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">兼容数据库，包括了</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Oracle</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">、</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">MySQL</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">、</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">PostgreSQL</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">、</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">SQL Server</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">、</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">H2</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">等。</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Druid</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">在监控、可扩展性、稳定性和性能方面具有明显的优势。通过</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Druid</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">提供的监控功能，可以实时观察数据库连接池和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">SQL</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">查询的工作情况。使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Druid</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">连接池在一定程度上可以提高数据访问效率</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Druid</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">数据库连接池的相关依赖：</span></span>
    </li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:4.3173in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;dependency&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;groupId&gt;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">com.alibaba</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/groupId&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;artifactId&gt;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">druid-spring-boot-starter</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/artifactId&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;version&gt;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">1.1.10</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/version&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/dependency&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">然后在</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">application.yml</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">里加入数据库及连接池配置信息：</span></span></li>
</ul>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">server:</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;
            port: 8082&nbsp;&nbsp; # HTTP (Tomcat) port</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">spring:</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;
            datasource:</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; driver-class-name:
            com.mysql.cj.jdbc.Driver</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; url:
            jdbc:mysql://localhost:3306/student?serverTimezone=GMT=&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=true</span></span>
</p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; username: root</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; password: Mysql123456</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; type:
            com.alibaba.druid.pool.DruidDataSource</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; #</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">最大活跃数</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; maxActive: 20</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; #</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">初始化数量</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; initialSize: 1</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; #</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">最大连接等待超时时间</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; maxWait: 60000</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; #</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">打开</span><span
            style="font-family:&quot;Comic Sans MS&quot;">PSCache</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">，并且指定每个连接</span><span
            style="font-family:&quot;Comic Sans MS&quot;">PSCache</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">的大小</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; poolPreparedStatements: true</span></span>
</p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; maxPoolPreparedStatementPerConnectionSize:
            20</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; #</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">通过</span><span
            style="font-family:&quot;Comic Sans MS&quot;">connectionProperties</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">属性来打开</span><span
            style="font-family:&quot;Comic Sans MS&quot;">mergeSql</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">功能；慢</span><span
            style="font-family:&quot;Comic Sans MS&quot;">SQL</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">记录</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; #connectionProperties:
            druid.stat.mergeSql=true;druid.stat.slowSqlMillis=5000</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; minIdle: 1</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; timeBetweenEvictionRunsMillis:
            60000</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; minEvictableIdleTimeMillis:
            300000</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; validationQuery: select 1 from
            dual</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; testWhileIdle: true</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; testOnBorrow: false</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; testOnReturn: false</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; #</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">配置监控统计拦截的</span><span
            style="font-family:&quot;Comic Sans MS&quot;">filters</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">，去掉后监控界面</span><span
            style="font-family:&quot;Comic Sans MS&quot;">sql</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">将无法统计</span><span
            style="font-family:&quot;Comic Sans MS&quot;">,'wall'</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">用于防火墙</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; filters: stat, wall, log4j</span></span>
</p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;
            jpa:</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; hibernate:</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ddl-auto: update&nbsp; #
        </span><span style="font-family:&quot;Microsoft YaHei UI&quot;">第一次建表</span><span
            style="font-family:&quot;Comic Sans MS&quot;">create&nbsp; </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">后面用</span><span
            style="font-family:&quot;Comic Sans MS&quot;">update</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; show-sql: true</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:6.3638in">
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">Spring</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">整合阿里巴巴开源数据源</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">Druid</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;bean</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"dataSource"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">class</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"com.alibaba.druid.pool.DruidDataSource"</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">init-method</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"init"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">destroy-method</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"close"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">&nbsp;数据源驱动类可不写，</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">Druid</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">默认会自动根据</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">URL</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">识别</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">DriverClass</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"driverClassName"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"${driverClassName}"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"url"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"${jdbc_url}"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"username"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"${jdbc_username}"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"password"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"${jdbc_password}"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">&nbsp;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">&nbsp;初始化连接大小&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"initialSize"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"0"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">&nbsp;连接池最大使用连接数量&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"maxActive"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"20"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">&nbsp;连接池最小空闲&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"minIdle"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"0"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">&nbsp;获取连接最大等待时间&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"maxWait"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"60000"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">&nbsp;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">name="poolPreparedStatements"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">value="true"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">/&gt;</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;property</span></span>&nbsp;</span></p>
                <p><span style="font-size:12.0pt"><span
                            style="color:green">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">name="maxPoolPreparedStatementPerConnectionSize"</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">value="33"</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">/&gt;</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">&nbsp;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"validationQuery"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"${validationQuery}"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">&nbsp;取得、返回对象和空闲时是否进行验证，检查对象是否有效，</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:green"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;默认都为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">false</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">即不验证&nbsp;</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"testOnBorrow"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"false"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"testOnReturn"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"false"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"testWhileIdle"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"true"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">&nbsp;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">&nbsp;配置间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"timeBetweenEvictionRunsMillis"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"60000"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">&nbsp;配置一个连接在池中最小生存的时间，单位是毫秒&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"minEvictableIdleTimeMillis"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"25200000"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">&nbsp;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">&nbsp;打开</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">removeAbandoned</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">功能&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"removeAbandoned"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"true"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">1800</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">秒，也就是</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">30</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">分钟&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"removeAbandonedTimeout"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"1800"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">&nbsp;关闭</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">abanded</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">连接时输出错误日志&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"logAbandoned"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"true"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">&nbsp;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">&nbsp;监控数据库&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">&nbsp;配置监控统计拦截的</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">filters</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">name="filters"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">value="mergeStat"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">/&gt;</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"filters"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"stat,config"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">&nbsp;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">&nbsp;数据库密码加密&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">name="connectionProperties"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">value="config.decrypt=true"</span></span>&nbsp;</span><span
                        style="font-size:12.0pt"><span style="color:green">&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">/&gt;</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">-&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/bean&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#70ad47">&nbsp;</span></span></span></p>
