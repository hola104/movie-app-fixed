import React, { Component } from "react";
import { Tabs } from "antd";

import "./TabsMovies.css";

export default class TabsMovies extends Component {
  onChange = (activeKey) => {
    this.props.setTabRated(activeKey == 2);
  };

  render() {
    return (
      <Tabs
        defaultActiveKey="1"
        className="tabs-movies"
        onChange={this.onChange}
        style={{ margin: "0 auto" }}
        items={[
          {
            label: "Search",
            key: "1",
          },
          { label: "Rated", key: "2" },
        ]}
      >
        {/* <TabPane tab="Search" key="1" />
        <TabPane tab="Rated" key="2" /> */}
      </Tabs>
    );
  }
}
