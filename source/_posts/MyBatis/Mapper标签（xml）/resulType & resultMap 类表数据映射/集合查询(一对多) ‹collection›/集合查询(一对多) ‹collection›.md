---
categories:
- MyBatis
tags:
- ‹collection›
date:
- 2022-11-27 7:31:02
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#444444">在实际的业务中，老师一般都会有多个学生，也就是一个</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#444444">Teather</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#444444">对应多个</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#444444">Student</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#444444">，我们在</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#444444">Teather</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#444444">类里面</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#444444">Student</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#444444">一般也是以一个实体类来表示</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#444444"></span></span></span>
    </li>
</ul>
<p><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#444444">那么返回的</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#444444">Student</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#444444">类不是单一的数据集，而是</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#444444">Student</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#444444">的对象集合，那么</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#444444">association</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#444444">返回单一对象数据集将不适合用于关联数据。</span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#444444">​​​​​​​</span></span></span><br></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="color:#444444"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">因此使用</span><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;collection&gt;</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">将得到的</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Student</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">对象结果集映射到</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Teather</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">对象中的类型为</span><span
                style="font-family:&quot;Comic Sans MS&quot;">student</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">对象的</span><span
                style="font-family:&quot;Comic Sans MS&quot;">List</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#444444">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei&quot;">数据库中有两张表，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">teacher</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">表中有</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">id,name</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">两个字段。</span></span></li>
</ul>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">student</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">表中有</span><span
            style="font-family:&quot;Comic Sans MS&quot;">id,name,tid</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">三个字段，其中两表主键均为</span><span
            style="font-family:&quot;Comic Sans MS&quot;">id,</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">且</span><span
            style="font-family:&quot;Comic Sans MS&quot;">tid</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">为外键</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;collection&gt;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">用于对象之间的映射</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="background-color:white"><span
                style="font-family:&quot;Comic Sans MS&quot;">Teather</span></span><span
            style="background-color:white"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">实体类属性定义：</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; private int id;<br>&nbsp;&nbsp;&nbsp;
            private String name;<br>&nbsp;</span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#70ad47">&nbsp;&nbsp; //</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47">一个学生对象关联多个老师对象</span></span><br>&nbsp;&nbsp; <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#0070c0">&nbsp;private </span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#0070c0">List&lt;Student&gt;</span></span>
        <span style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#0070c0">student</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#0070c0">;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="color:#444444"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">使用</span></strong><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">&lt;collec</span></strong><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">tion</span></strong><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">&gt;</span></strong><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">关联表数据</span></strong></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">外部的结果映射</span></strong></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">如果你需要重用</span><span
            style="font-family:&quot;Comic Sans MS&quot;">resultMap</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">的话，你需要将结果映射合到另一个描述的</span><span
            style="font-family:&quot;Comic Sans MS&quot;">resultMap</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">结果映射中</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;resultMap id="TeacherAndStudent"
            type="Teacher"&gt;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;result property="id" column="tid"/&gt;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;result
            property="name" column="tname"/&gt;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp; &nbsp;&nbsp;<span
                style="color:#b43512">&nbsp;&nbsp;&lt;collection property=</span>"studentList" <strong><span
                    style="color:#b43512">ofType</span></strong><span style="color:#b43512">=</span>"<strong><span
                    style="color:#70ad47">Student</span></strong>" <span
                style="color:#b43512">/&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&nbsp;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;/resultMap&gt;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property=</span>"id"<span style="color:#b43512">
                column=</span>"sid"<span style="color:#b43512">/&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property=</span>"name"<span style="color:#b43512">
                column=</span>"sname"<span style="color:#b43512">/&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property=</span>"tid"<span style="color:#b43512">
                column</span>="tid"<span style="color:#b43512">/&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;select id="getTeacherAndStudent" parameterType="int"
            resultMap="TeacherAndStudent"&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#0070c0">select</span> s.id sid,s.name sname,t.id tid,t.name tname</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#0070c0">from</span> student s,teacher t</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#0070c0">where</span> s.tid=t.id</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">a<span
                style="color:#0070c0">nd</span> t.id=#{tid}</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;/select&gt;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">内部嵌套结果映射</span></strong></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">如果你不需要重用</span><span
            style="font-family:&quot;Comic Sans MS&quot;">resultMap</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">的话</span><span
            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">或者你仅仅引用你所有的结果映射合到一个单独描述的结果映射中</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;resultMap id="TeacherAndStudent"
            type="Teacher"&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;result property="id" column="tid"/&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;result
            property="name" column="tname"/&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp; &nbsp;&nbsp;<span
                style="color:#b43512">&nbsp;&nbsp;&lt;collection property=</span>"studentList" <strong><span
                    style="color:#b43512">ofType</span></strong><span style="color:#b43512">=</span>"<strong><span
                    style="color:#70ad47">Student</span></strong>"<span style="color:#b43512">&gt;</span></span></span>
</p>
<p style="margin-left: 200px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property=</span>"id"<span style="color:#b43512">
                column=</span>"sid"<span style="color:#b43512">/&gt;</span></span></span></p>
<p style="margin-left: 200px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property=</span>"name"<span style="color:#b43512">
                column=</span>"sname"<span style="color:#b43512">/&gt;</span></span></span></p>
<p style="margin-left: 200px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;result property=</span>"tid"<span style="color:#b43512">
                column</span>="tid"<span style="color:#b43512">/&gt;</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &lt;/collection&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;/resultMap&gt;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;select id="getTeacherAndStudent" parameterType="int"
            resultMap="TeacherAndStudent"&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#0070c0">select</span> s.id sid,s.name sname,t.id tid,t.name tname</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#0070c0">from</span> student s,teacher t</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#0070c0">where</span> s.tid=t.id</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">a<span
                style="color:#0070c0">nd</span> t.id=#{tid}</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;/select&gt;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">查询嵌套映射</span></strong></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;">该方法相比连接查询而言效率更高，同时由于可以自定义</span><span
            style="font-family:&quot;Comic Sans MS&quot;">select</span><span
            style="font-family:&quot;Microsoft YaHei&quot;">查询，比起连接查询也要更灵活一些</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;resultMap id="<strong>TeacherAndStudent2</strong>"
            type="Teacher"&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;result property="id" column="id"/&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#b43512">&lt;collection property=</span>"studentList" <strong><span
                    style="color:#b43512">ofType</span></strong><span style="color:#b43512">=</span>"ArrayList" <span
                style="color:#b43512">select=</span>"<span style="color:#00b0f0">getStudentByTeacherId</span>"<span
                style="color:#b43512"> column=</span>"id"/&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;/resultMap&gt;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;select id="<span
                style="color:#00b0f0">getStudentByTeacherId</span>" resultType="<strong><span
                    style="color:#70ad47">Student</span></strong>"&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">select
            *from student where tid=#{id}</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;/select&gt;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;select id="getTeacherAndStudent2" parameterType="int"
            resultMap="<strong>TeacherAndStudent2</strong>"&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">select
            * from teacher where id=#{id}</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;/select&gt;</span></span><br></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>