import { Avatar, Divider } from "antd";
import { GithubOutlined, QqOutlined, WechatOutlined } from "@ant-design/icons";
import "../static/style/components/author.module.css";

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar size={100} src="../static/images/rk.jpg" />
      </div>
      <div className="author-introduction">
        此处为文案介绍，博主内容介绍，博主内容介绍，博主内容介绍，博主内容介绍，博主内容介绍，博主内容介绍，博主内容介绍。
        <Divider>社交账号</Divider>
        <Avatar size={28} icon={<GithubOutlined />} className="account" />
        <Avatar size={28} icon={<QqOutlined />} className="account" />
        <Avatar size={28} icon={<WechatOutlined />} className="account" />
      </div>
    </div>
  );
};

export default Author;
