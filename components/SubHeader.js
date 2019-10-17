import Markdown from './Markdown';
import React from 'react';
import Router from 'next/router';
import Rule from '@react/react-spectrum/Rule';
import classNames from 'classnames';
import styles from './css/subHeader.scss';

class SubHeader extends React.Component {

  render() {
    let title = this.props.title ? this.props.title : 'Missing title';
    const parentClass = this.props.className || '';

    return (
        <h3 className={classNames('spectrum-Heading4', styles.subHeader, styles.header, parentClass)} id={title.split(" ").join("-")}>
          {this.props.title}
          <span className={styles.headingAnchor}>
            <a className={classNames(`spectrum-Link`, styles.anchor)} href={'#' + title.split(" ").join("-")}>#</a>
          </span>
          {this.props.children}
        </h3>
    );
  }
}

export default SubHeader