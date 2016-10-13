import React from 'react';

export const ofComponent = (...types) => (props, propName, componentName) => {
  const prop = props[propName];

  const error = React.Children
    .map(prop, child => types.includes(child.type))
    .some(v => v === false);

  if (error) {
    const names = types.map(t => `${t.name}`);
    return new Error(
      `Only [${names}] are allowed as children for component "${componentName}".`
    );
  }
}