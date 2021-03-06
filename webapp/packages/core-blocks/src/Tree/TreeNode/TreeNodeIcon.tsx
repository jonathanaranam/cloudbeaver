/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import styled, { css } from 'reshadow';

import { StaticImage } from '@cloudbeaver/core-blocks';

const styles = css`
  StaticImage {
    height: 100%;
  }
`;

interface Props {
  icon?: string;
  className?: string;
}

export const TreeNodeIcon: React.FC<Props> = function TreeNodeIcon({
  icon,
  className,
}) {
  return styled(styles)(
    <icon as="div" className={className}><StaticImage icon={icon} /></icon>
  );
};
