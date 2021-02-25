import React, { useState, useEffect } from "react";
import Icon, {
  HomeOutlined,
  YoutubeOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Icon as LegacyIcon } from "@ant-design/compatible";
import { Row, Col, Menu } from "antd";
import Router from "next/router";
import Link from "next/link";
import axios from "axios";
import servicePath from "../config/apiUrl";
import "../static/style/components/header.module.css";

const Header = () => {
  const [navArray, setNavArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then((res) => {
        setNavArray(res.data.data);
        return res.data.data;
      });
      setNavArray(result);
    };
    fetchData();
  }, []);

  //跳转到列表页
  const handleClick = (e) => {
    if (e.key == 0) {
      Router.push("/");
    } else {
      Router.push("/list?id=" + e.key);
    }
  };

  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">博客</span>
          <span className="header-txt">采用nextJS开发的博客网站</span>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={handleClick}>
            <Menu.Item key="0">
              <HomeOutlined />
              首页
            </Menu.Item>
            {navArray.map((item) => {
              return (
                <Menu.Item key={item.id}>
                  <LegacyIcon type={item.icon} />
                  {item.typeName}
                </Menu.Item>
              );
            })}
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
