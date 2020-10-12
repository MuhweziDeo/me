import * as React from 'react';
import {useStyletron} from 'baseui';
import {StyledLink} from 'baseui/link';
import {Button} from 'baseui/button';
import {Layer} from 'baseui/layer';
import {
  ChevronDown,
  Delete,
  Overflow as UserIcon,
  Upload as Icon,
} from 'baseui/icon';
import {
  Unstable_AppNavBar as AppNavBar,
  POSITION,
} from 'baseui/app-nav-bar';


function renderItem(item: any) {
  return item.label;
}

const MAIN_NAV = [
  {
    icon: Icon,
    item: {label: 'About me'},
    mapItemToNode: renderItem,
    mapItemToString: renderItem,
  },
  {
    icon: Icon,
    item: {label: 'Projects'},
    mapItemToNode: renderItem,
    mapItemToString: renderItem,
  },
  {
    icon: ChevronDown,
    item: {label: 'Blog'},
    mapItemToNode: renderItem,
    mapItemToString: renderItem,
    navExitIcon: Delete,
    navPosition: {desktop: POSITION.horizontal},
  },
  {
    icon: ChevronDown,
    item: {label: 'Experience'},
    mapItemToNode: renderItem,
    mapItemToString: renderItem,
    navExitIcon: Delete,
    navPosition: {desktop: POSITION.horizontal},
  },
  {
    icon: ChevronDown,
    item: {label: 'Contact me'},
    mapItemToNode: () => <Button>Contact Me</Button>,
    mapItemToString: renderItem,
    navExitIcon: Delete,
    navPosition: {desktop: POSITION.horizontal},
  },
];


function isActive(
  arr: Array<any>,
  item: any,
  activeItem: any,
): boolean {
  let active = false;
  for (let i = 0; i < arr.length; i++) {
    const elm = arr[i];
    if (elm === item) {
      if (item === activeItem) return true;
      return isActive(
        (item && item.nav) || [],
        activeItem,
        activeItem,
      );
    } else if (elm.nav) {
      active = isActive(elm.nav || [], item, activeItem);
    }
  }
  return active;
}

export const Nav = () => {
    
  const [css] = useStyletron();
  const [activeNavItem, setActiveNavItem] = React.useState();
  const containerStyles = css({
    boxSizing: 'border-box',
    width: '100vw',
    position: 'fixed',
    top: '0',
    left: '0',
  });

  const appDisplayName = (
    <StyledLink
      $style={{
        textDecoration: 'none',
        color: 'inherit',
        ':hover': {color: 'inherit'},
        ':visited': {color: 'inherit'},
      }}
      href={'#'}
    >
      Dee
    </StyledLink>
  );
  
  return (
    <React.Fragment>
     <Layer>
          <div className={containerStyles}>
            <AppNavBar
              appDisplayName={appDisplayName}
              mainNav={MAIN_NAV}
              isNavItemActive={({item}) => {
                return (
                  item === activeNavItem ||
                  isActive(MAIN_NAV, item, activeNavItem)
                );
              }}
              onNavItemSelect={({item}) => {
                if (item === activeNavItem) return;
                setActiveNavItem(item as any);
              }}
            />
          </div>
        </Layer>
    </React.Fragment>
  );
};