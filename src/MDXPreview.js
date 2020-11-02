import React from "react";
import Markdown from "react-markdown";
import PropTypes from "prop-types";
import mdx from "@mdx-js/mdx";
import defaultOptions from "./previewOptions";

function MDXPreview(props) {
  const { options, value } = props;
  // const compiledMDX = await mdx(mdxTextToCompile);
  const escapeHtml = !options.skipHtml && options.escapeHtml;
  return <Markdown {...options} escapeHtml={escapeHtml} source={value} />;
}

MDXPreview.propTypes = {
  value: PropTypes.string,
  options: PropTypes.shape({
    skipHtml: PropTypes.bool,
    escapeHtml: PropTypes.bool,
  }),
};

MDXPreview.defaultProps = {
  value: "",
  options: { ...defaultOptions },
};

MDXPreview.defaultOptions = defaultOptions;

export default MDXPreview;
