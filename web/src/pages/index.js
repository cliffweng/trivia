import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {Tabs, Tab} from 'react-bootstrap';
import {SingleUser, MultiUser} from '../react/triviapage';

const IndexPage = () => (
  <Layout>
    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Single User">
        <SingleUser/>
      </Tab>
      <Tab eventKey="multi" title="Multi Users">
        <h2>Welcome to Trivia Online Multi-Users.</h2>
        <MultiUser/>
      </Tab>
    </Tabs>
  </Layout>
)

export default IndexPage
