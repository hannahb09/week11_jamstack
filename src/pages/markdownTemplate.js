import React from "react";
import { graphql } from "gatsby";

const MarkdownTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export default MarkdownTemplate;