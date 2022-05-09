import React, { memo } from 'react';
import { HeaderWrapper } from './style';

export default memo(function PglHeader() {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1"></div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
