import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const style = {
  color: 'white',
  textDecoration: 'none',
}

const activeStyle = {
  color: "white",
  fontWeight: 800
}

const ListLink = props => (
  <li style={{ display: `inline-block`,marginRight: `1rem` }}>
    <Link to={props.to}
    style={style}
    activeStyle={activeStyle}
    >{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#221F22`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `2rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul style={{ listStyle: `none`, float: `right`}}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/research/">Research</ListLink>
        <ListLink to="/teaching/">Teaching</ListLink>
        <ListLink to="/talks/">Talks</ListLink>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
