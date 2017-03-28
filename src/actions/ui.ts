import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
} from '../constants';

export function sidebarOpen() {
  return {
    type: SIDEBAR_OPEN
  };
}

export function sidebarClose() {
  return {
    type: SIDEBAR_CLOSE
  };
}
