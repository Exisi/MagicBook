categories:

- MyBatis
  tags:
- typeAliases
  date:
- 2023-3-27 7:11:02

---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">MyBatis</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">中</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">别名存在的主要意义就是简化开发</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">MyBatis</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">中引用类有三种方式</span></span>
        <ol style="list-style-type:decimal">
            <li value="1"><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei&quot;">直接使用实体类的完整包名</span></span></li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei&quot;">使用实体类的</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                            style="color:#2e75b5">typeAlias</span></span></span><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei&quot;">别名</span></span></li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei&quot;">使用包名作为别名</span></span></li>
        </ol>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;"><strong>使用完整包名</strong></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;select id="getUserById" parameterType="int"
            resultType="<strong><span
                    style="color:#e84c22">com.mybatis.pojo.Users</span></strong>"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select
            * from smbms_user where id=#{id}<br>&lt;/select&gt;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><strong><span style="font-family:&quot;Microsoft YaHei&quot;">使用实体类的</span></strong>
        <strong><span style="font-family:&quot;Comic Sans MS&quot;">typeAlias</span></strong> <strong><span
                style="font-family:&quot;Microsoft YaHei&quot;">别名</span></strong></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">resource/</span></strong></span><span
            style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">mybatis-config.xml</span></strong></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;?xml version="1.0" encoding="UTF-8"?&gt;<br>&lt;!DOCTYPE
            configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN" "<a
                data-cke-saved-href="http://mybatis.org/dtd/mybatis-3-config.dtd"
                href="http://mybatis.org/dtd/mybatis-3-config.dtd">http://mybatis.org/dtd/mybatis-3-config.dtd</a>"&gt;</span></span>
</p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;configuration&gt;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#f2f2f2">&nbsp;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;<span style="color:#a5a5a5">…</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a5a5a5">&nbsp;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="color:#538135"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;!-- </span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">设置实体类别名</span><span
                style="font-family:&quot;Comic Sans MS&quot;"> --&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#2e75b5">&lt;typeAliases&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#2e75b5">&lt;typeAlias type=</span>"com.mybatis.pojo.Users" <span
                style="color:#2e75b5">alias=</span>"<strong><span style="color:#e84c22">Users</span></strong>"<span
                style="color:#2e75b5">/&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#2e75b5">&lt;/typeAliases&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;/configuration&gt;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">User</span></strong></span><span
            style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">Mapper.xml</span></strong></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;?xml version="1.0" encoding="UTF-8" ?&gt;<br>&lt;!DOCTYPE
            mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "<a
                data-cke-saved-href="http://mybatis.org/dtd/mybatis-3-mapper.dtd"
                href="http://mybatis.org/dtd/mybatis-3-mapper.dtd">http://mybatis.org/dtd/mybatis-3-mapper.dtd</a>"&gt;</span></span>
</p>
<p style="margin-left: 40px;"><br><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;mapper
            namespace="com.mybatis.dao.UsersMapper"&gt;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;select id="getUserById" parameterType="int"
            resultType="<strong><span
                    style="color:#e84c22">Users</span></strong>"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select
            * from smbms_user where id=#{id}<br>&lt;/select&gt;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">…</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;/mapper&gt;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<p><span style="font-size:13.5pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;"><strong>使用包名作为别名</strong></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">resource/</span></strong></span><span
            style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">mybatis-config.xml</span></strong></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;?xml version="1.0" encoding="UTF-8"?&gt;<br>&lt;!DOCTYPE
            configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN" "<a
                data-cke-saved-href="http://mybatis.org/dtd/mybatis-3-config.dtd"
                href="http://mybatis.org/dtd/mybatis-3-config.dtd">http://mybatis.org/dtd/mybatis-3-config.dtd</a>"&gt;</span></span>
</p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;configuration&gt;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp; <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#538135">&lt;!-- </span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#538135">设置实体类别名</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#538135"> --&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp; <span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#2e75b5">&lt;typeAliases&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#e84c22">&nbsp;&nbsp;&nbsp; <strong>&lt;</strong><strong>package</strong>
                <strong>name</strong><strong>="com.mybatis.pojo.Users" /&gt;</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp; <span
                style="color:#2e75b5">&lt;/typeAliases&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;/configuration&gt;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">User</span></strong></span><span
            style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">Mapper.xml</span></strong></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;?xml version="1.0" encoding="UTF-8" ?&gt;<br>&lt;!DOCTYPE
            mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "<a
                data-cke-saved-href="http://mybatis.org/dtd/mybatis-3-mapper.dtd"
                href="http://mybatis.org/dtd/mybatis-3-mapper.dtd">http://mybatis.org/dtd/mybatis-3-mapper.dtd</a>"&gt;</span></span>
</p>
<p style="margin-left: 80px;"><br><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;mapper
            namespace="com.mybatis.dao.UsersMapper"&gt;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;select id="getUserById" parameterType="int"
            resultType="<strong><span
                    style="color:#e84c22">Users</span></strong>"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select
            * from smbms_user where id=#{id}<br>&lt;/select&gt;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">…</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;/mapper&gt;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
