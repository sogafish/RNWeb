export const SCREENS = {
  HOME: 'Home',
  MAIN: 'Main',
  FIRST: 'First',
  SECOND: 'Second',
  MY_PAGE: 'MyPage',
  LIST: 'List',
  NOTIFICATION: 'Notification',
  SETTING: 'Setting',
};

const WEB_PATHS = {
  FIRST: 'first',
  SECOND: 'second',
  HOME: 'home',
  MAIN: 'main',
  MY_PAGE: 'my-page',
  SETTING: 'setting',
};

export const SCREEN_PATH_MAPS = {
  [SCREENS.FIRST]: WEB_PATHS.FIRST,
  [SCREENS.SECOND]: WEB_PATHS.SECOND,
  [SCREENS.HOME]: WEB_PATHS.HOME,
  [SCREENS.MAIN]: WEB_PATHS.MAIN,
  [SCREENS.MY_PAGE]: WEB_PATHS.MY_PAGE,
  [SCREENS.SETTING]: WEB_PATHS.SETTING,
};
