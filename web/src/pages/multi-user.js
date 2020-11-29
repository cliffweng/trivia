import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import {Breadcrumb} from 'react-bootstrap';
import {MultiUser} from '../react/triviapage';

const SecondPage = () => (
  <Layout>
    <h2>Welcome to Trivia Online.</h2>
    <Breadcrumb>
      <Breadcrumb.Item href="/">Single User Mode</Breadcrumb.Item>
      <Breadcrumb.Item active>Multi-User Mode</Breadcrumb.Item>
    </Breadcrumb>
    <MultiUser/>
  </Layout>
)

export default SecondPage
