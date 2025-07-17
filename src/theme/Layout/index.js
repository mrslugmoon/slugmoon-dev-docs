import React from 'react';
import Layout from '@theme-original/Layout';
import SiteBanner from '@site/src/components/SiteBanner';

export default function LayoutWrapper(props) {
  return (
    <>
    {/*  <SiteBanner /> */}
      <Layout {...props} />
    </>
  );
}
