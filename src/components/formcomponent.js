import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import "../components/layout.css"
import { css } from "@emotion/core"
import Logo from "../images/logo.jpg"

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}))

export default function BasicTextFields() {
  const classes = useStyles()

  const handelformdata = e => {
    e.preventDefault()
    console.log("hi")
  }

  return (
    <div style={{ display: "flex" }}>
      <div>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          css={entry}
          onSubmit={handelformdata}
        >
          <TextField
            id="outlined-basic"
            label="Enter Parent Name"
            variant="outlined"
            required
          />

          <TextField
            id="outlined-basic"
            label="Enter Phone Number"
            variant="outlined"
            required
          />

          <TextField
            id="outlined-basic"
            label="Enter What's app Number"
            variant="outlined"
            required
          />

          <TextField
            id="outlined-basic"
            label="Enter Child Name"
            variant="outlined"
            required
          />

         

          <TextField
            id="outlined-basic"
            label="Previous School of the child"
            variant="outlined"
            required
          />

        <label>Admission Seeking for:</label>

        <select>
        <option>Select</option>
            <option>NURSERY</option>
            <option>LKG</option>
            <option>UKG</option>
            <option>1ST CLASS</option>
            <option>2ND CLASS</option>
            <option>3RD CLASS</option>
            <option>4TH CLASS</option>
            <option>5TH CLASS</option>
            <option>6TH CLASS</option>
            <option>7TH CLASS</option>
            <option>8TH CLASS</option>
            <option>9TH CLASS</option>
            <option>10TH CLASS</option>
          </select>

          <label>Acadamic Year</label>
          <select>
            <option>2020 - 2021</option>
            <option>2021 - 2022</option>
            <option>2022 - 2023</option>
            <option>2023 - 2024</option>
            <option>2024 - 2025</option>
          </select>

          <label>Willingness</label>
          <select>
            <option>100% Intrested</option>
            <option>75%  Intrested</option>
            <option>50%  Intrested</option>
            <option>Not  Intrested</option>
          </select>

          <div style={{ textAlign: "center" }}>
            <button type="submit" css={button}>
              Submit
            </button>
          </div>
        </form>
      </div>

      <div css={image}>
        <img src={Logo} />
      </div>
    </div>
  )
}

const entry = css`
  div {
    display: block;
    margin-bottom: 20px;
    input {
      display: block;
    }
  }
  label{
      display:block;
      margin-bottom: 0px;
  }
`

const image = css`
 img{
     height:40%;
 }
 @media(max-width:600px){
     img{
        height: 7%;
        margin-top: 33%;
        object-fit: contain;
     }
 }
`
const button = css`
  background: #2727d2;
  color: white;
  border: none;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.4);
  padding: 1px 11px;
  border-radius: 2px;
`
