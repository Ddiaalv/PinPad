---
to: src/<%= path %>/<%= name %>/<%= name %>.tsx
---
import * as React from 'react';

export const <%= name %>: React.FC<{}> = () => (
  <div className="<%= name %>">
    Hello from <%= name %>!
  </div>
);

<%= name %>.displayName = '<%= name %>';
