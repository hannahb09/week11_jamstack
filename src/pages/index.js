import * as React from "react"

import { Link } from "gatsby"
export default function Home() {
return <div style={{color:'tomato', backgroundColor: 'lightgray'}}>
<h1>Hello world!</h1>
<p>This is my first Gatsby Site</p>
<img src="https://raw.githubusercontent.com/allegheny-
college-cmpsc-104-Fall-2024/lab01/main/graphics/DocEng_logo.png"
alt="Logo" width="150" />
<br />
<Link to="/page-2">Page 2</Link>
<br />
<Link to="/counter">counter</Link>
</div>
}