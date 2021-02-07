import React from 'react'
import {HomeOutlined,YoutubeOutlined,SmileOutlined } from '@ant-design/icons'
import {Row,Col, Menu} from 'antd'
import '../static/style/components/header.module.css'



const Header = () => (
    <div className="header">
      <Row type="flex" justify="center">
          <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
              <span className="header-logo">博客</span>
              <span className="header-txt">采用nextJS开发的博客网站</span>
          </Col>
  
          <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
              <Menu  mode="horizontal">
                  <Menu.Item key="home">
                      <HomeOutlined />
                      首页
                  </Menu.Item>
                  <Menu.Item key="video">
                      <YoutubeOutlined />
                      视频
                  </Menu.Item>
                  <Menu.Item key="life">
                      <SmileOutlined />
                      生活
                  </Menu.Item>
              </Menu>
          </Col>
      </Row>
   </div>
  )
  
  export default Header