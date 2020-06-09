import React from "react"
import { Link } from "gatsby"
import Tabcontainercomponent from "../components/Tabcontainer"
import { css } from "@emotion/core"

const IndexPage = () => (
  <div css={main}>
    <Tabcontainercomponent />
  </div>
)

export default IndexPage

const main = css`
  padding: 10px 20%;

  @media(max-width:600px){
    padding: 10px 0%;
  }
`
