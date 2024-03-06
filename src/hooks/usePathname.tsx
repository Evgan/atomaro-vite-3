import React from 'react'
import { Path, UNSAFE_NavigationContext } from 'react-router-dom'
import { Update } from 'history'

const pathnameReducer = (_: string, upd: Update): string => upd.location.pathname;

export const usePathname = (locationOverride?: Partial<Path>) => {
  const {navigator: nav} = React.useContext(UNSAFE_NavigationContext) as unknown as {navigator: History};
  const [navigator, pathname] = locationOverride ? [null, locationOverride.pathname] : [nav, nav.location.pathname];
  const [, triggerRerenderOnlyOnPathnameChange] = React.useReducer(pathnameReducer, pathname || '/');
  React.useLayoutEffect(() => navigator?.listen(triggerRerenderOnlyOnPathnameChange), [navigator]);
  return pathname || '/';
}
